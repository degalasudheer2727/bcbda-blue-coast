"use client";

import { useEffect } from "react";

/**
 * Adds two subtle, accessible enhancements:
 *  1) a thin scroll-progress bar at the top of the page
 *  2) gentle fade/slide-in for content blocks as they enter the viewport
 * Both are no-ops for users who prefer reduced motion or have JS disabled.
 */
export default function ScrollFX() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Progress bar
    const bar = document.createElement("div");
    bar.className = "scroll-progress";
    document.body.appendChild(bar);
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      bar.style.width = max > 0 ? `${(h.scrollTop / max) * 100}%` : "0%";
      // elevate the sticky header once the page is scrolled
      document.body.classList.toggle("is-scrolled", h.scrollTop > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Reveal on scroll
    let observer: IntersectionObserver | null = null;
    if (!reduce) {
      document.body.classList.add("reveal-ready");
      const els = document.querySelectorAll(
        ".card, .node, .kpi, .phase, .stat, .section-head"
      );
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e, i) => {
            if (e.isIntersecting) {
              const el = e.target as HTMLElement;
              el.style.transitionDelay = `${Math.min((i % 6) * 60, 300)}ms`;
              el.classList.add("is-in");
              observer?.unobserve(el);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      els.forEach((el) => observer?.observe(el));
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      bar.remove();
      observer?.disconnect();
    };
  }, []);

  return null;
}
