import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Bapatla–Chirala Beach Development Authority";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px",
          background: "linear-gradient(150deg, #052e3a, #0a5566 55%, #0a9396)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 32, fontWeight: 700, color: "#d9f2ef" }}>
          <div
            style={{
              width: 60, height: 60, borderRadius: 16, display: "flex",
              alignItems: "flex-end", justifyContent: "center",
              background: "linear-gradient(135deg,#0d7a86,#0a9396)", overflow: "hidden",
            }}
          >
            <div style={{ width: 34, height: 17, borderTopLeftRadius: 34, borderTopRightRadius: 34, background: "linear-gradient(#ffd27f,#e9785a)", marginBottom: 12, display: "flex" }} />
          </div>
          BCBDA
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 30, color: "#d9f2ef", marginBottom: 14, display: "flex" }}>Bay of Bengal &middot; Bapatla District, Andhra Pradesh</div>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.05, maxWidth: 980, display: "flex" }}>
            A self-sustaining coast, built to last generations.
          </div>
        </div>
        <div style={{ fontSize: 28, color: "rgba(255,255,255,0.86)", display: "flex" }}>
          Rs 2,500 cr &middot; 3 phases &middot; Blue-Flag standard &middot; 3D / VR experience
        </div>
      </div>
    ),
    { ...size }
  );
}
