"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const tabs = [
  { id: "overview", label: "Dashboard" },
  { id: "users", label: "Users" },
  { id: "content", label: "Content" },
  { id: "gallery", label: "Gallery" },
  { id: "volunteers", label: "Volunteers" },
  { id: "donations", label: "Donations" },
  { id: "messages", label: "Messages" },
  { id: "activity", label: "Activity" },
];

function validTab(value: string): string {
  return tabs.some((tab) => tab.id === value) ? value : "overview";
}

export function AdminTabs() {
  const router = useRouter();
  const [menuOpen,setMenuOpen]=useState(false);
  useEffect(() => {
    const showTab = (tabId: string) => {
      const selected = validTab(tabId);
      document.querySelectorAll<HTMLElement>(".admin-main > .admin-stats, .admin-main > .admin-panel").forEach((section) => {
        section.hidden = section.id !== selected;
      });
      document.querySelectorAll<HTMLAnchorElement>(".admin-sidebar nav a").forEach((link) => {
        const isActive = link.getAttribute("href") === `#${selected}`;
        link.classList.toggle("is-active", isActive);
        if (isActive) link.setAttribute("aria-current", "page");
        else link.removeAttribute("aria-current");
      });
    };

    const fromHash = validTab(window.location.hash.slice(1));
    showTab(fromHash);
    window.requestAnimationFrame(()=>window.scrollTo({top:0,behavior:"instant"}));

    const handleHash = () => {
      showTab(window.location.hash.slice(1));
      window.scrollTo({top:0,behavior:"instant"});
    };
    const handleNavigation = (event:Event) => {
      const link=(event.target as HTMLElement).closest<HTMLAnchorElement>(".admin-sidebar nav a");
      if(!link)return;
      event.preventDefault();
      const selected=validTab(link.hash.slice(1));
      window.history.replaceState(null,"",`#${selected}`);
      showTab(selected);
      window.scrollTo({top:0,behavior:"smooth"});
    };
    window.addEventListener("hashchange", handleHash);
    document.addEventListener("click",handleNavigation);
    const refreshTimer = window.setInterval(() => router.refresh(), 10_000);
    return () => {
      window.removeEventListener("hashchange", handleHash);
      document.removeEventListener("click",handleNavigation);
      window.clearInterval(refreshTimer);
    };
  }, [router]);
  useEffect(()=>{
    const sidebar=document.querySelector(".admin-sidebar");
    sidebar?.classList.toggle("mobile-menu-open",menuOpen);
    document.body.classList.toggle("admin-menu-open",menuOpen);
    const close=()=>setMenuOpen(false);
    sidebar?.querySelectorAll("nav a").forEach(link=>link.addEventListener("click",close));
    const escape=(event:KeyboardEvent)=>{if(event.key==="Escape")setMenuOpen(false)};
    window.addEventListener("keydown",escape);
    return ()=>{
      sidebar?.classList.remove("mobile-menu-open");
      document.body.classList.remove("admin-menu-open");
      sidebar?.querySelectorAll("nav a").forEach(link=>link.removeEventListener("click",close));
      window.removeEventListener("keydown",escape);
    };
  },[menuOpen]);
  return <><button className="admin-menu-toggle" type="button" aria-label={menuOpen?"Close menu":"Open menu"} aria-expanded={menuOpen} onClick={()=>setMenuOpen(value=>!value)}><span/><span/><span/></button>{menuOpen&&<button className="admin-menu-backdrop" type="button" aria-label="Close menu" onClick={()=>setMenuOpen(false)}/>}</>;
}
