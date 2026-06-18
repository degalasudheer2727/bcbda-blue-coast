"use client";

import { useEffect } from "react";

/**
 * Two global, navigation-safe enhancements:
 *  1) a thin scroll-progress bar at the top of the page
 *  2) an `is-scrolled` flag on <body> so the header can elevate
 *
 * The entrance animation for content is handled in pure CSS (see globals.css)
 * so it works on every client navigation without a JS observer — an observer
 * set up once at mount would never see content rendered by later navigations.
 */
export default function ScrollFX() {
  useEffect(() => {
    const bar = document.createElement("div");
    bar.className = "scroll-progress";
    document.body.appendChild(bar);

    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      bar.style.width = max > 0 ? `${(h.scrollTop / max) * 100}%` : "0%";
      document.body.classList.toggle("is-scrolled", h.scrollTop > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      bar.remove();
    };
  }, []);

  return null;
}
