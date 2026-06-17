"use client";

import Link from "next/link";

export type TickerItem = {
  label: string;
  href: string;
  tag?: string;
  external?: boolean;
};

// A continuously-scrolling "live updates" bulletin under the header.
// - Pauses on hover/focus (so links are reachable)
// - Respects prefers-reduced-motion (CSS turns the marquee into a scroll strip)
// - Duplicated track for a seamless loop
export default function UpdatesTicker({ items }: { items: TickerItem[] }) {
  if (!items.length) return null;
  const speed = Math.max(28, Math.min(90, items.length * 7)); // seconds per loop

  const Row = ({ ariaHidden = false }: { ariaHidden?: boolean }) => (
    <ul className="ticker-track" aria-hidden={ariaHidden || undefined}>
      {items.map((it, i) => (
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
      <span className="ticker-live">
        <span className="ticker-dot" aria-hidden="true" /> LIVE
      </span>
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
