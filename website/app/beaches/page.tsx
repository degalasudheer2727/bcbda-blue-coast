import type { Metadata } from "next";
import Link from "next/link";
import { BEACHES } from "@/lib/beaches";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Beaches of the Corridor",
  description:
    "The beaches of the Bapatla–Chirala coast — Suryalanka, Vodarevu, Ramapuram and Nizampatnam. Speciality, what each is famous for, government development & progress, directions, stays and indicative prices.",
  alternates: { canonical: "/beaches" },
};

const STATUS_TAG: Record<string, string> = {
  Funded: "tag--p1",
  Proposed: "tag--p2",
  "Study-stage": "tag--p2",
  "None confirmed": "",
};

export default function BeachesPage() {
  return (
    <>
      <section className="hero">
        <div className="container" style={{ paddingTop: 72, paddingBottom: 60 }}>
          <span className="eyebrow">The corridor coast</span>
          <h1>Four beaches, one green-blue spine</h1>
          <p className="lead">
            From Suryalanka’s flagship promenade to Ramapuram’s quiet conservation
            coast, each beach plays a distinct role. Explore what each is famous for,
            the government development underway, how to get there, and where to stay.
          </p>
        </div>
        <svg className="wave-divider" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 30c180 30 360 30 540 12S900-6 1080 6s360 30 360 30v24H0Z" fill="#fbf8f1" />
        </svg>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {BEACHES.map((b) => {
              const im = img(b.img);
              const dev = b.developments[0];
              return (
                <Link href={`/beaches/${b.slug}`} className="card has-media beach-card" key={b.slug} style={{ color: "inherit" }}>
                  {im && (
                    <div className="card-media" style={{ aspectRatio: "16 / 9" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={im.src} alt={im.alt} loading="lazy" decoding="async" />
                      <span className="beach-focus">{b.focus}</span>
                    </div>
                  )}
                  <div className="meta-row" style={{ marginTop: 4 }}>
                    <span className="tag">{b.town} · {b.distanceKm} km</span>
                    {dev && <span className={`tag ${STATUS_TAG[dev.status]}`}>{dev.status}</span>}
                  </div>
                  <h3 style={{ marginTop: 12 }}>{b.name}</h3>
                  <p className="muted">{b.speciality}</p>
                  <span className="source" aria-hidden="true">Explore beach →</span>
                </Link>
              );
            })}
          </div>
          <p className="muted" style={{ marginTop: 26, fontSize: "0.82rem" }}>
            Hotel and land prices shown on each beach page are <strong>indicative</strong>,
            drawn from public listings — not official rates. Only verified properties
            (e.g. APTDC Haritha Suryalanka) are marked as real.
          </p>
        </div>
      </section>
    </>
  );
}
