import { getDb } from "../../../db";
import { messages } from "../../../db/schema";
export async function POST(request:Request){const f=await request.formData(),v=(k:string)=>String(f.get(k)||"").trim();if(!v("name")||!v("email")||!v("message"))return Response.json({error:"Complete all required fields"},{status:400});await getDb().insert(messages).values({name:v("name"),email:v("email"),message:v("message"),createdAt:new Date().toISOString()});return Response.redirect(new URL("/contact?submitted=1",request.url),303)}
