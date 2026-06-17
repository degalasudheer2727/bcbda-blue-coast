import Link from "next/link";
import { SITE } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>{SITE.shortName}</h4>
            <p className="muted" style={{ maxWidth: "42ch" }}>
              {SITE.tagline} A proposed special-purpose authority for the
              Government of Andhra Pradesh.
            </p>
          </div>
          <div>
            <h4>Visit</h4>
            <ul className="footer-links">
              <li><Link href="/beaches">Beaches</Link></li>
              <li><Link href="/experiences">Things to Do</Link></li>
              <li><Link href="/stays">Stays &amp; Hospitality</Link></li>
              <li><Link href="/plan">Plan Your Trip</Link></li>
              <li><Link href="/culture">Culture &amp; Heritage</Link></li>
              <li><Link href="/news">Latest Developments</Link></li>
            </ul>
          </div>
          <div>
            <h4>The project</h4>
            <ul className="footer-links">
              <li><Link href="/about">About &amp; Master Plan</Link></li>
              <li><Link href="/future">The 2036 Vision</Link></li>
              <li><Link href="/experience">3D / VR Experience</Link></li>
              <li><Link href="/get-involved">Get Involved</Link></li>
              <li><Link href="/credits">Image Credits</Link></li>
              <li><a href={SITE.repoUrl}>GitHub Repository</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {SITE.shortName} (proposed). Docs CC BY 4.0 · Code MIT.</span>
          <span>{SITE.status}</span>
        </div>
      </div>
    </footer>
  );
}
