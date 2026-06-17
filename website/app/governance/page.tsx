import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Proposed Governance (Draft)",
  description:
    "A DRAFT proposed governance structure for the Bapatla–Chirala Beach Development Authority — objectives, administrative control, and proposed composition. This is a draft for discussion, not an issued Government Order.",
  alternates: { canonical: "/governance" },
  robots: { index: true, follow: true },
};

const OBJECTIVES = [
  "Development and maintenance of beaches, promenades, and related tourism infrastructure.",
  "Promotion of eco-tourism and sustainable practices.",
  "Coordination with various departments for integrated development.",
  "Any other functions as may be assigned by the Government.",
];

const COMPOSITION = [
  { role: "Chairman", who: "Secretary to Government, MA&UD Department" },
  { role: "Vice-Chairman", who: "District Collector, Bapatla / Prakasam" },
];

export default function GovernancePage() {
  return (
    <section className="section" style={{ paddingTop: 56 }}>
      <div className="container" style={{ maxWidth: 860 }}>
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link> <span aria-hidden="true">/</span> Proposed Governance (Draft)
        </nav>

        {/* Unambiguous draft notice */}
        <div className="draft-banner" role="note">
          <span className="draft-dot" aria-hidden="true" />
          <span>
            <strong>Draft proposal — not an issued Government Order.</strong> Prepared
            for discussion only. Order/U.O. numbers and signatures are placeholders
            pending any formal process. BCBDA is a proposed authority and is not yet
            officially constituted.
          </span>
        </div>

        {/* Document masthead — uses the BCBDA mark, not any official emblem */}
        <div className="gov-masthead">
          <p className="gov-kicker">Government of Andhra Pradesh · Municipal Administration &amp; Urban Development Department</p>
          <span className="tag tag--p3" style={{ marginTop: 10 }}>DRAFT · Not an issued order · 18 Jun 2026</span>
          <h1 style={{ marginTop: 14 }}>Proposed Governance Structure</h1>
          <p className="lead" style={{ margin: "10px auto 0" }}>
            Bapatla–Chirala Beach Development Authority — a draft proposal for an
            integrated authority to develop the corridor’s beaches, infrastructure,
            tourism, and coastal environment.
          </p>
        </div>

        <div className="prose" style={{ maxWidth: "none", marginTop: 36 }}>
          <h2>Purpose</h2>
          <p>
            The proposal envisions an authority to promote integrated development of
            the beaches in the Bapatla and Chirala areas — covering infrastructure,
            tourism promotion, environmental conservation, and sustainable development —
            functioning under the administrative control of the Municipal Administration
            &amp; Urban Development (MA&amp;UD) Department.
          </p>

          <h2>Proposed objectives</h2>
          <ol className="gov-list">
            {OBJECTIVES.map((o, i) => (
              <li key={i}><span className="gov-num">{i + 1}</span><span>{o}</span></li>
            ))}
          </ol>

          <h2>Proposed composition</h2>
          <div className="gov-table" role="table" aria-label="Proposed composition">
            <div className="gov-table-head" role="row">
              <span role="columnheader">Position</span>
              <span role="columnheader">Name / Designation</span>
            </div>
            {COMPOSITION.map((c) => (
              <div className="gov-table-row" role="row" key={c.role}>
                <span role="cell" className="gov-role">{c.role}</span>
                <span role="cell">{c.who}</span>
              </div>
            ))}
            <div className="gov-table-row" role="row">
              <span role="cell" className="gov-role">Members</span>
              <span role="cell" className="muted">To be notified per rules (departments concerned).</span>
            </div>
          </div>

          <div className="callout">
            <strong>Headquarters &amp; powers (proposed).</strong> Headquarters in the
            Bapatla / Chirala area, with financial and administrative powers as per
            rules, subject to the concurrence of the Finance Department. All such
            references remain indicative until a Government Order is formally issued.
          </div>

          <h2>Status &amp; next steps</h2>
          <p>
            This document is a <strong>draft</strong> shared openly for review and
            consultation. It does not create an authority, confer powers, or represent
            a decision of the Government of Andhra Pradesh. If and when a Government
            Order is issued, this page will be updated to cite the actual order number,
            concurrence reference, and signatory.
          </p>
          <p className="muted" style={{ fontSize: "0.86rem" }}>
            See the site-wide <Link href="/">concept disclaimer</Link> · Read the{" "}
            <Link href="/vision">vision &amp; charter</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
