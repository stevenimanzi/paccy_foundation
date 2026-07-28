import { eq } from "drizzle-orm";
import { getDb } from "../../../../db";
import { activity, users } from "../../../../db/schema";
import { getCurrentUser, hashPassword } from "../../../auth";

export async function POST(request:Request){
  const currentUser=await getCurrentUser();
  if(!currentUser||currentUser.role!=="admin")return Response.json({error:"Only administrators can add users."},{status:403});
  const input=await request.json() as {name?:string;email?:string;password?:string;role?:string;status?:string};
  const name=String(input.name||"").trim(),email=String(input.email||"").trim().toLowerCase(),password=String(input.password||""),role=String(input.role||"editor"),status=String(input.status||"active");
  if(name.length<2)return Response.json({error:"Enter the user's full name."},{status:400});
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))return Response.json({error:"Enter a valid email address."},{status:400});
  if(password.length<8)return Response.json({error:"Password must contain at least 8 characters."},{status:400});
  if(!["admin","editor","viewer"].includes(role)||!["active","suspended"].includes(status))return Response.json({error:"Choose a valid role and status."},{status:400});
  const db=getDb(),[existing]=await db.select({id:users.id}).from(users).where(eq(users.email,email)).limit(1);
  if(existing)return Response.json({error:"A user with this email already exists."},{status:409});
  const now=new Date().toISOString(),[created]=await db.insert(users).values({name,email,passwordHash:hashPassword(password),role,status,createdAt:now}).$returningId();
  await db.insert(activity).values({actor:currentUser.email,action:`created ${role} user`,entity:"user",entityId:created.id,createdAt:now});
  return Response.json({ok:true,id:created.id});
}
