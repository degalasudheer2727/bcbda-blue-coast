import Link from "next/link";
import Logo from "./Logo";

const links = [
  { href: "/vision", label: "Vision" },
  { href: "/master-plan", label: "Master Plan" },
  { href: "/infrastructure", label: "Infrastructure" },
  { href: "/experience", label: "3D / VR" },
  { href: "/budget", label: "Investment" },
  { href: "/runbook", label: "Runbook" },
  { href: "/get-involved", label: "Get Involved" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav">
        <Link href="/" className="brand">
          <Logo />
          <span>
            BCBDA
            <small>Bapatla–Chirala Beach Development Authority</small>
          </span>
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
