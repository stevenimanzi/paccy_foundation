import { eq } from "drizzle-orm";
import { getDb } from "../../../db";
import { activity, content, donations, galleryItems, messages, volunteers } from "../../../db/schema";
import { getCurrentUser } from "../../auth";

export async function POST(request:Request){
  const user=await getCurrentUser(); if(!user)return Response.json({error:"Unauthorized"},{status:401});
  const form=await request.formData();
  if(String(form.get("action")||"")==="gallery"){
    const title=String(form.get("title")||"").trim(), imageUrl=String(form.get("imageUrl")||"").trim(), caption=String(form.get("caption")||"").trim();
    if(!title||!imageUrl)return Response.json({error:"Title and image are required"},{status:400});
    const now=new Date().toISOString(),db=getDb();
    const [record]=await db.insert(galleryItems).values({title,imageUrl,caption:caption||null,status:"published",createdBy:user.email,createdAt:now}).$returningId();
    await db.insert(activity).values({actor:user.email,action:"added gallery image",entity:"gallery",entityId:record.id,createdAt:now});
    return Response.redirect(new URL("/admin#gallery",request.url),303);
  }
  const page=String(form.get("page")||""), field=String(form.get("field")||""), value=String(form.get("value")||"");
  if(!page||!field||!value)return Response.json({error:"Missing fields"},{status:400});
  const db=getDb(), now=new Date().toISOString();
  const [record]=await db.insert(content).values({page,field,value,updatedBy:user.email,updatedAt:now}).$returningId();
  await db.insert(activity).values({actor:user.email,action:"updated content",entity:`${page}.${field}`,entityId:record.id,createdAt:now});
  return Response.redirect(new URL("/admin#content",request.url),303);
}

export async function PATCH(request:Request){
  const user=await getCurrentUser(); if(!user)return Response.json({error:"Unauthorized"},{status:401});
  const {type,id,status}=await request.json() as {type:string;id:number;status:string};
  const allowed=["new","pending","reviewed","approved","completed","declined","unread","read"]; if(!allowed.includes(status))return Response.json({error:"Invalid status"},{status:400});
  const table=type==="volunteer"?volunteers:type==="donation"?donations:type==="message"?messages:null;
  if(!table)return Response.json({error:"Invalid record type"},{status:400});
  const db=getDb(); await db.update(table).set({status}).where(eq(table.id,id));
  await db.insert(activity).values({actor:user.email,action:`changed status to ${status}`,entity:type,entityId:id,createdAt:new Date().toISOString()});
  return Response.json({ok:true});
}
