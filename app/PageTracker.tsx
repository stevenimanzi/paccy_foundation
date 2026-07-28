"use client";

import { useEffect } from "react";

export function PageTracker() {
  useEffect(() => {
    const key = `paccy-view:${location.pathname}`;
    if (sessionStorage.getItem(key)) return;
    sessionStorage.setItem(key, "1");
    fetch("/api/analytics/view", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ path: location.pathname, referrer: document.referrer }),
      keepalive: true,
    }).catch(() => sessionStorage.removeItem(key));
  }, []);
  return null;
}
