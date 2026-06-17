"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const links = [
  { href: "/beaches", label: "Beaches" },
  { href: "/master-plan", label: "Master Plan" },
  { href: "/vision", label: "Vision" },
  { href: "/future", label: "2036" },
  { href: "/news", label: "News" },
  { href: "/experience", label: "3D / VR" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  return (
    <header className="site-header">
      <div className="container nav">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <Logo size={36} />
          <span>
            BCBDA
            <small>Bapatla–Chirala Beach Development Authority</small>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/get-involved" className="cta">Get Involved</Link>
        </nav>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
        </button>
      </div>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {[...links, { href: "/stays", label: "Stays" }, { href: "/culture", label: "Culture" }, { href: "/infrastructure", label: "Infrastructure" }, { href: "/budget", label: "Investment" }, { href: "/runbook", label: "Runbook" }].map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
        ))}
        <Link href="/get-involved" onClick={() => setOpen(false)}>Get Involved</Link>
      </div>
    </header>
  );
}
