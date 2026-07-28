"use client";

import { FormEvent, useState } from "react";

const destinations: Record<string, string> = {
  dashboard: "overview",
  analytics: "overview",
  users: "users",
  visitors: "users",
  content: "content",
  pages: "content",
  gallery: "gallery",
  images: "gallery",
  volunteers: "volunteers",
  donations: "donations",
  messages: "messages",
  activity: "activity",
};

export function AdminSearch() {
  const [query, setQuery] = useState("");

  function submit(event: FormEvent) {
    event.preventDefault();
    const normalized = query.trim().toLowerCase();
    const match = Object.keys(destinations).find((key) => key.includes(normalized) || normalized.includes(key));
    if (match) window.location.hash = destinations[match];
  }

  return <form className="admin-search" onSubmit={submit} role="search"><span aria-hidden="true">⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search management…" aria-label="Search management sections" /><kbd>Enter</kbd></form>;
}
