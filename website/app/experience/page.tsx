import type { Metadata } from "next";
import CoastalScene from "@/components/CoastalScene";
import { NODES } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "3D / VR Experience",
  description: "Walk the future Bapatla–Chirala shoreline in interactive 3D, with WebXR/VR headset support.",
};

export default function ExperiencePage() {
  return (
    <>
      <section className="hero">
        <div className="container" style={{ paddingTop: 72, paddingBottom: 60 }}>
          <span className="hero-badge">● Interactive · WebXR-enabled</span>
          <span className="eyebrow">See the future before it is built</span>
          <h1>The coast in 3D — and in VR.</h1>
          <p className="lead">
            A living model of the master plan: orbit the shoreline, toggle between
            today and the 2047 vision, and — on a supported headset — step inside
            with one tap. This is how authorities, investors, and citizens can
            experience the future corridor before a single brick is laid.
          </p>
        </div>
        <svg className="wave-divider" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 30c180 30 360 30 540 12S900-6 1080 6s360 30 360 30v24H0Z" fill="#fdfaf3" />
        </svg>
      </section>

      <section className="section--tight">
        <div className="container">
          <CoastalScene />
          <p className="muted" style={{ marginTop: 14, fontSize: "0.92rem" }}>
            Schematic massing model for communication, not engineering survey.
            Buildings, dunes, turbines, and nodes are indicative. Best viewed in
            Chrome/Edge; VR requires a WebXR-capable headset and browser.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What you're looking at</span>
            <h2>Four nodes, one living shoreline</h2>
          </div>
          <div className="grid grid-4">
            {NODES.map((n) => (
              <div className="card" key={n.id}>
                <div className="icon" style={{ fontWeight: 800, fontSize: "1.3rem" }}>{n.id}</div>
                <h3>{n.name}</h3>
                <p className="muted">{n.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ocean">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow" style={{ color: "var(--teal-100)" }}>VR device support</span>
            <h2>Built on the open immersive web (WebXR)</h2>
            <p className="lead">
              The experience uses the W3C <strong>WebXR Device API</strong> via
              Three.js, so it connects to standalone and PC-tethered headsets
              directly from the browser — no app-store install, no proprietary SDK.
            </p>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <h3>Standalone headsets</h3>
              <p className="muted">Open the page in the headset's WebXR browser and tap <b>Enter VR</b>. Works with leading all-in-one VR/MR devices.</p>
            </div>
            <div className="card">
              <h3>PC-tethered & desktop</h3>
              <p className="muted">Use a tethered headset via Chrome/Edge, or test on desktop with the Immersive Web Emulator browser extension.</p>
            </div>
            <div className="card">
              <h3>Phone & cardboard</h3>
              <p className="muted">Inline 3D works on any modern phone; basic stereo viewing works with a cardboard-style holder.</p>
            </div>
          </div>
          <p className="muted" style={{ marginTop: 22, fontSize: "0.9rem" }}>
            WebXR/VRButton implementation follows the Three.js WebXR guidance.
            Source: threejs.org/docs · the immersive-web standard.
          </p>
        </div>
      </section>
    </>
  );
}
