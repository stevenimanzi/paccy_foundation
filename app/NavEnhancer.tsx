"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function NavEnhancer() {
  const pathname = usePathname();

  useEffect(() => {
    const links = document.querySelectorAll<HTMLAnchorElement>(".site-header a[href]");
    links.forEach((link) => {
      const href = link.getAttribute("href");
      const active = href === "/" ? pathname === "/" : Boolean(href && pathname.startsWith(href));
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  }, [pathname]);

  return null;
}
