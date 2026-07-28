"use client";

import { FormEvent, useState } from "react";

export function MessageReply({messageId,name,email,originalMessage}:{messageId:number;name:string;email:string;originalMessage:string}) {
  const [open,setOpen]=useState(false),[sending,setSending]=useState(false),[notice,setNotice]=useState("");
  async function sendReply(event:FormEvent<HTMLFormElement>){
    event.preventDefault(); setSending(true); setNotice("");
    const form=new FormData(event.currentTarget);
    const response=await fetch("/api/admin/messages/reply",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({messageId,subject:String(form.get("subject")||""),body:String(form.get("body")||"")})});
    const result=await response.json().catch(()=>({}));
    setSending(false);
    if(!response.ok){setNotice(result.error||"The email could not be sent. Check the email settings.");return}
    setNotice("Reply sent successfully."); setTimeout(()=>window.location.reload(),700);
  }
  return <><button className="message-reply-trigger" type="button" onClick={()=>setOpen(true)}>Reply by email</button>{open&&<div className="reply-modal-layer" role="presentation" onMouseDown={event=>{if(event.target===event.currentTarget)setOpen(false)}}>
    <section className="reply-modal" role="dialog" aria-modal="true" aria-labelledby={`reply-title-${messageId}`}>
      <header><div><span className="reply-modal-icon">✉</span><div><p>EMAIL REPLY</p><h2 id={`reply-title-${messageId}`}>Reply to {name}</h2></div></div><button type="button" className="reply-modal-close" aria-label="Close reply" onClick={()=>setOpen(false)}>×</button></header>
      <div className="reply-recipient"><span>To</span><strong>{email}</strong></div>
      <blockquote><span>Original message</span>{originalMessage}</blockquote>
      <form onSubmit={sendReply}><label>Subject<input name="subject" required defaultValue="Reply from Paccy Foundation"/></label><label>Your reply<textarea name="body" rows={8} required placeholder={`Write your reply to ${name}…`}/></label>
        {notice&&<p className={notice.startsWith("Reply sent")?"reply-notice success":"reply-notice error"} role="status">{notice}</p>}
        <footer><button type="button" className="reply-cancel" onClick={()=>setOpen(false)}>Cancel</button><button type="submit" className="reply-send" disabled={sending}>{sending?"Sending…":"Send email"}</button></footer>
      </form>
    </section>
  </div>}</>;
}
