"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const links = [
  { href: "/vision", label: "Vision" },
  { href: "/master-plan", label: "Master Plan" },
  { href: "/infrastructure", label: "Infrastructure" },
  { href: "/experience", label: "3D / VR" },
  { href: "/budget", label: "Investment" },
  { href: "/runbook", label: "Runbook" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
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
            <Link key={l.href} href={l.href}>{l.label}</Link>
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
        {links.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
        ))}
        <Link href="/get-involved" onClick={() => setOpen(false)}>Get Involved</Link>
      </div>
    </header>
  );
}
