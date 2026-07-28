"use client";

import { FormEvent, useState } from "react";

export function AddUser(){
  const [open,setOpen]=useState(false),[saving,setSaving]=useState(false),[notice,setNotice]=useState("");
  async function submit(event:FormEvent<HTMLFormElement>){
    event.preventDefault();setSaving(true);setNotice("");
    const form=new FormData(event.currentTarget),password=String(form.get("password")||""),confirmPassword=String(form.get("confirmPassword")||"");
    if(password!==confirmPassword){setNotice("Passwords do not match.");setSaving(false);return}
    const response=await fetch("/api/admin/users",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:form.get("name"),email:form.get("email"),role:form.get("role"),status:form.get("status"),password})});
    const result=await response.json().catch(()=>({}));setSaving(false);
    if(!response.ok){setNotice(result.error||"Unable to create the user.");return}
    setNotice("User created successfully.");setTimeout(()=>window.location.reload(),600);
  }
  return <div className="users-panel-tools"><button className="add-user-button" type="button" onClick={()=>setOpen(true)}>＋ Add new user</button>{open&&<div className="user-modal-layer" role="presentation" onMouseDown={event=>{if(event.target===event.currentTarget)setOpen(false)}}>
    <section className="user-modal" role="dialog" aria-modal="true" aria-labelledby="add-user-title"><header><div><span>＋</span><div><p>USER ACCESS</p><h2 id="add-user-title">Record a new user</h2></div></div><button type="button" aria-label="Close" onClick={()=>setOpen(false)}>×</button></header>
      <form onSubmit={submit}><div className="user-form-grid"><label>Full name<input name="name" required autoComplete="name" placeholder="Enter full name"/></label><label>Email address<input name="email" type="email" required autoComplete="email" placeholder="name@example.com"/></label><label>Role<select name="role" defaultValue="editor"><option value="admin">Administrator</option><option value="editor">Content editor</option><option value="viewer">Viewer</option></select></label><label>Account status<select name="status" defaultValue="active"><option value="active">Active</option><option value="suspended">Suspended</option></select></label><label>Password<input name="password" type="password" required minLength={8} autoComplete="new-password" placeholder="At least 8 characters"/></label><label>Confirm password<input name="confirmPassword" type="password" required minLength={8} autoComplete="new-password" placeholder="Enter password again"/></label></div>
        <p className="user-security-note">The password is securely protected before it is stored. Active users can sign in immediately.</p>{notice&&<p className={notice.startsWith("User created")?"user-form-notice success":"user-form-notice error"} role="status">{notice}</p>}<footer><button type="button" className="reply-cancel" onClick={()=>setOpen(false)}>Cancel</button><button type="submit" className="reply-send" disabled={saving}>{saving?"Creating…":"Create user"}</button></footer>
      </form>
    </section>
  </div>}</div>;
}
