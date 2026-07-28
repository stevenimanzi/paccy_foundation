"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function NavEnhancer() {
  const pathname = usePathname();

  useEffect(() => {
    document.querySelectorAll<HTMLElement>(".site-header nav").forEach((nav) => {
      if (!nav.querySelector('a[href="/"]')) {
        const home = document.createElement("a");
        home.href = "/";
        home.textContent = "Home";
        nav.prepend(home);
      }
    });
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
