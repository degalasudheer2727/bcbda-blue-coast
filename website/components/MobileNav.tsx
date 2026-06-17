"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ICONS: Record<string, React.ReactNode> = {
  home: <path d="M3 11.5 12 4l9 7.5M5 10v10h14V10" />,
  beach: <><circle cx="12" cy="8" r="3.2" /><path d="M3 19c2-2 4-2 6 0s4 2 6 0 4-2 6 0" /></>,
  exp: <><circle cx="12" cy="12" r="8.5" /><path d="m15 9-4 1.5L9.5 15 14 13.5 15 9Z" /></>,
  stay: <path d="M3 17v-4h14a3 3 0 0 1 3 3v1M3 17v-9M3 13V9h6a2 2 0 0 1 2 2v2M21 17v-2" />,
  plan: <><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" /><circle cx="12" cy="10" r="2.4" /></>,
};

const ITEMS = [
  { href: "/", label: "Home", icon: "home", match: (p: string) => p === "/" },
  { href: "/beaches", label: "Beaches", icon: "beach", match: (p: string) => p.startsWith("/beaches") },
  { href: "/experiences", label: "Do", icon: "exp", match: (p: string) => p.startsWith("/experiences") },
  { href: "/stays", label: "Stay", icon: "stay", match: (p: string) => p.startsWith("/stays") },
  { href: "/plan", label: "Plan", icon: "plan", match: (p: string) => p.startsWith("/plan") },
];

export default function MobileNav() {
  const pathname = usePathname() || "/";
  return (
    <nav className="mobnav" aria-label="Primary mobile navigation">
      {ITEMS.map((it) => {
        const active = it.match(pathname);
        return (
          <Link key={it.href} href={it.href} className={`mobnav-item ${active ? "active" : ""}`} aria-current={active ? "page" : undefined}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {ICONS[it.icon]}
            </svg>
            <span>{it.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
