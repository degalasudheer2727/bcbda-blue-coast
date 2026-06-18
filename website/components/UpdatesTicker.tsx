"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export type TickerItem = {
  label: string;
  href: string;
  tag?: string;
  external?: boolean;
};

type Coverage = { title: string; source: string; url: string; dateLabel?: string };

// A continuously-scrolling "live updates" bulletin under the header.
// - The "LIVE" badge is a link to /news — a reliable, stationary tap target on
//   touch devices (where the moving marquee items can't be tapped).
// - Pauses on hover AND on touch-press (so links are reachable).
// - Respects prefers-reduced-motion (CSS turns the marquee into a scroll strip).
export default function UpdatesTicker({ items }: { items: TickerItem[] }) {
  // Live media coverage is fetched on the client so the page shell stays static.
  const [live, setLive] = useState<TickerItem[]>([]);
  useEffect(() => {
    let alive = true;
    fetch("/api/coverage")
      .then((r) => (r.ok ? r.json() : []))
      .then((cov: Coverage[]) => {
        if (!alive || !Array.isArray(cov)) return;
        setLive(
          cov.map((c) => ({
            label: `${c.title} — ${c.source}`,
            href: c.url,
            tag: c.dateLabel || "Coverage",
            external: true,
          }))
        );
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, []);

  const all = [...items, ...live];
  if (!all.length) return null;
  const speed = Math.max(28, Math.min(90, all.length * 7)); // seconds per loop

  const Row = ({ ariaHidden = false }: { ariaHidden?: boolean }) => (
    <ul className="ticker-track" aria-hidden={ariaHidden || undefined}>
      {all.map((it, i) => (
        <li key={`${it.href}-${i}`} className="ticker-item">
          {it.tag && <span className="ticker-tag">{it.tag}</span>}
          {it.external ? (
            <a href={it.href} target="_blank" rel="noopener noreferrer">{it.label}</a>
          ) : (
            <Link href={it.href}>{it.label}</Link>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <aside className="ticker" aria-label="Latest developments and coverage">
      <Link href="/news" className="ticker-live" aria-label="Open the live newsroom">
        <span className="ticker-dot" aria-hidden="true" /> LIVE
      </Link>
      <div className="ticker-viewport">
        <div className="ticker-marquee" style={{ ["--ticker-speed" as string]: `${speed}s` }}>
          <Row />
          <Row ariaHidden />
        </div>
      </div>
      <Link href="/news" className="ticker-all">All updates</Link>
    </aside>
  );
}
