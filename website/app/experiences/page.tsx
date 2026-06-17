import type { Metadata } from "next";
import Link from "next/link";
import { EXPERIENCES } from "@/lib/experiences";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Things to Do",
  description:
    "Things to do on the Bapatla–Chirala coast — beaches and sunrises, watersports, dolphin trips, seafood trails, heritage temples, wellness retreats, markets and birding.",
  alternates: { canonical: "/experiences" },
};

export default function ExperiencesPage() {
  return (
    <>
      <section className="hero">
        <div className="container" style={{ paddingTop: 72, paddingBottom: 56 }}>
          <span className="eyebrow">Things to do</span>
          <h1>Experiences on the coast</h1>
          <p className="lead">
            Sun, sea, seafood and stories. Here’s how to spend a morning, a day, or a
            long weekend along the Suryalanka–Vodarevu–Ramapuram coast.
          </p>
        </div>
        <svg className="wave-divider" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 30c180 30 360 30 540 12S900-6 1080 6s360 30 360 30v24H0Z" />
        </svg>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {EXPERIENCES.map((e) => {
              const im = img(e.img);
              return (
                <article className="card has-media" key={e.slug}>
                  {im && (
                    <div className="card-media" style={{ aspectRatio: "16 / 10" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={im.src} alt={im.alt} loading="lazy" decoding="async" />
                      <span className="beach-focus">{e.where}</span>
                    </div>
                  )}
                  <h3 style={{ marginTop: 14 }}>{e.title}</h3>
                  <p className="muted">{e.body}</p>
                </article>
              );
            })}
          </div>
          <div className="center" style={{ marginTop: 34 }}>
            <Link href="/plan" className="btn btn--primary">Plan your trip →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
