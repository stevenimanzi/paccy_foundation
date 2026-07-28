import { eq } from "drizzle-orm";
import { getDb } from "../../../../../db";
import { activity, messageReplies, messages } from "../../../../../db/schema";
import { getCurrentUser } from "../../../../auth";

export async function POST(request:Request){
  const user=await getCurrentUser(); if(!user)return Response.json({error:"Unauthorized"},{status:401});
  const input=await request.json() as {messageId?:number;subject?:string;body?:string};
  const messageId=Number(input.messageId),subject=String(input.subject||"").trim(),body=String(input.body||"").trim();
  if(!Number.isInteger(messageId)||messageId<1||!subject||!body)return Response.json({error:"Recipient, subject and reply are required."},{status:400});
  if(subject.length>255||body.length>20000)return Response.json({error:"The reply is too long."},{status:400});
  const db=getDb(),[message]=await db.select().from(messages).where(eq(messages.id,messageId)).limit(1);
  if(!message)return Response.json({error:"Message not found."},{status:404});
  const apiKey=process.env.RESEND_API_KEY,from=process.env.EMAIL_FROM,now=new Date().toISOString();
  if(!apiKey||!from){await db.insert(messageReplies).values({messageId,recipientEmail:message.email,subject,body,status:"failed",errorMessage:"Email service is not configured",sentBy:user.email,sentAt:now});return Response.json({error:"Email sending is not configured yet. Add RESEND_API_KEY and EMAIL_FROM."},{status:503})}
  try{
    const response=await fetch("https://api.resend.com/emails",{method:"POST",headers:{authorization:`Bearer ${apiKey}`,"content-type":"application/json"},body:JSON.stringify({from,to:[message.email],reply_to:process.env.EMAIL_REPLY_TO||from,subject,text:body,html:`<div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;color:#17191f"><p>${escapeHtml(body).replace(/\n/g,"<br>")}</p><hr style="border:0;border-top:1px solid #e5e7eb;margin:28px 0"><p style="color:#6b7280;font-size:13px">Paccy Foundation<br>Every child deserves a chance to learn.</p></div>`})});
    const result=await response.json() as {id?:string;message?:string}; if(!response.ok)throw new Error(result.message||"Email provider rejected the message");
    await db.insert(messageReplies).values({messageId,recipientEmail:message.email,subject,body,status:"sent",providerMessageId:result.id||null,sentBy:user.email,sentAt:now});
    await db.update(messages).set({status:"replied"}).where(eq(messages.id,messageId));
    await db.insert(activity).values({actor:user.email,action:`replied by email to ${message.email}`,entity:"message",entityId:messageId,createdAt:now});
    return Response.json({ok:true});
  }catch(error){
    const detail=error instanceof Error?error.message:"Email could not be sent";
    await db.insert(messageReplies).values({messageId,recipientEmail:message.email,subject,body,status:"failed",errorMessage:detail,sentBy:user.email,sentAt:now});
    return Response.json({error:detail},{status:502});
  }
}
function escapeHtml(value:string){return value.replace(/[&<>"']/g,character=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[character]||character))}
