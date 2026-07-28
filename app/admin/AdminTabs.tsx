"use client";

import { useEffect } from "react";
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
  useEffect(() => {
    const showTab = (tabId: string) => {
      const selected = validTab(tabId);
      document.querySelectorAll<HTMLElement>(".admin-main > .admin-stats, .admin-main > .admin-panel").forEach((section) => {
        section.hidden = section.id !== selected;
      });
      document.querySelectorAll<HTMLAnchorElement>(".admin-sidebar nav a").forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${selected}`);
      });
    };

    const fromHash = validTab(window.location.hash.slice(1));
    showTab(fromHash);

    const handleHash = () => showTab(window.location.hash.slice(1));
    window.addEventListener("hashchange", handleHash);
    const refreshTimer = window.setInterval(() => router.refresh(), 10_000);
    return () => {
      window.removeEventListener("hashchange", handleHash);
      window.clearInterval(refreshTimer);
    };
  }, [router]);
  return null;
}
