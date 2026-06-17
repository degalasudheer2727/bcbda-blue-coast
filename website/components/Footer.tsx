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
            <h4>Explore</h4>
            <ul className="footer-links">
              <li><Link href="/beaches">Beaches</Link></li>
              <li><Link href="/vision">Vision &amp; Charter</Link></li>
              <li><Link href="/master-plan">Master Plan</Link></li>
              <li><Link href="/infrastructure">Infrastructure</Link></li>
              <li><Link href="/news">Latest Developments</Link></li>
              <li><Link href="/culture">Culture &amp; Highlights</Link></li>
              <li><Link href="/budget">Investment Case</Link></li>
              <li><Link href="/runbook">Execution Runbook</Link></li>
            </ul>
          </div>
          <div>
            <h4>Participate</h4>
            <ul className="footer-links">
              <li><Link href="/get-involved">Get Involved</Link></li>
              <li><Link href="/governance">Proposed Governance (Draft)</Link></li>
              <li><Link href="/projects">Project Pipeline</Link></li>
              <li><Link href="/sustainability">Sustainability</Link></li>
              <li><Link href="/admin">Content Studio</Link></li>
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
