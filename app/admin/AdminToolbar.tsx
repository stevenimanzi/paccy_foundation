"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const tabOrder = ["overview", "users", "content", "gallery", "volunteers", "donations", "messages", "activity"];

export function AdminToolbar() {
  const router = useRouter();
  const [updatedAt, setUpdatedAt] = useState(() => new Date());
  const [activeTab, setActiveTab] = useState("overview");
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const sync = () => setActiveTab(tabOrder.includes(location.hash.slice(1)) ? location.hash.slice(1) : "overview");
    const shortcuts = (event: KeyboardEvent) => {
      if (!event.altKey) return;
      const index = Number(event.key) - 1;
      if (index >= 0 && index < tabOrder.length) location.hash = tabOrder[index];
    };
    sync();
    window.addEventListener("hashchange", sync);
    window.addEventListener("keydown", shortcuts);
    return () => {
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("keydown", shortcuts);
    };
  }, []);

  function refresh() {
    setRefreshing(true);
    router.refresh();
    setUpdatedAt(new Date());
    window.setTimeout(() => setRefreshing(false), 600);
  }

  function exportVisibleTable() {
    const table = document.getElementById(activeTab)?.querySelector("table");
    if (!table) return;
    const rows = Array.from(table.querySelectorAll("tr")).map((row) =>
      Array.from(row.querySelectorAll("th,td")).map((cell) => `"${(cell.textContent || "").trim().replaceAll('"', '""')}"`).join(","),
    );
    const url = URL.createObjectURL(new Blob([rows.join("\n")], { type: "text/csv;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = `${activeTab}-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  }

  return <div className="admin-premium-toolbar"><div className="admin-live-status"><i/> Live data <span>Updated {updatedAt.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span></div><div><small>Alt + 1–8 switches tabs</small><button type="button" onClick={exportVisibleTable}>⇩ Export CSV</button><button className="primary" type="button" onClick={refresh}>{refreshing ? "Refreshing…" : "↻ Refresh"}</button></div></div>;
}
