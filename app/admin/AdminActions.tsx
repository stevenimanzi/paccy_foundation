"use client";

import { useState } from "react";

export function AdminActions() {
  const [notice,setNotice]=useState("");
  async function updateStatus(type:string,id:number,status:string){
    setNotice("Saving…");
    const response=await fetch("/api/admin",{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({type,id,status})});
    setNotice(response.ok?"Saved successfully.":"Unable to save.");
    if(response.ok) window.location.reload();
  }
  return <>{notice&&<p className="admin-notice" role="status">{notice}</p>}<template id="admin-actions"/>{/* delegated click handling keeps record tables server-rendered */}<script dangerouslySetInnerHTML={{__html:`document.addEventListener("change",function(e){var t=e.target;if(t&&t.matches("[data-record-status]")){fetch("/api/admin",{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({type:t.dataset.type,id:Number(t.dataset.id),status:t.value})}).then(function(r){if(r.ok)location.reload()})}})`}}/></>;
}
