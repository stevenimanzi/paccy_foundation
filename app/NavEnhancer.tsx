"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function NavEnhancer() {
  const pathname = usePathname();

  useEffect(() => {
    document.querySelectorAll<HTMLAnchorElement>('a[href="/news"]').forEach((link) => {
      link.textContent = "Articles";
    });
    if (pathname === "/news") {
      document.querySelectorAll<HTMLElement>(".content-card").forEach((card) => {
        const heading = card.querySelector("h2")?.textContent?.trim();
        const link = card.querySelector<HTMLAnchorElement>("a");
        if (heading && link) {
          const slug = heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
          link.href = `/articles/${slug}`;
          link.innerHTML = "Read article <b>→</b>";
        }
      });
    }
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
      const active = href === "/" ? pathname === "/" : Boolean(href && (pathname.startsWith(href) || (href === "/news" && pathname.startsWith("/articles"))));
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  }, [pathname]);

  return null;
}
