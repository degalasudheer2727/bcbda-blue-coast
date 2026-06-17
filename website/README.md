# BCBDA Website

The public website for the Bapatla–Chirala Beach Development Authority (proposed).
It serves three purposes at once: an investor **pitch deck**, a technical
**blueprint**, and an **execution runbook** — plus an interactive **3D / WebXR**
model of the future coast.

## Stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **Three.js** for the 3D scene, with **WebXR** (`VRButton`) for headset/VR support
- Hand-written CSS design system (no build-time CSS framework) for fast, reliable builds

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Pages

| Route | Purpose |
|---|---|
| `/` | Pitch deck home — vision, growth case, the ₹2,500 cr ask |
| `/vision` | Vision, mission, values, pillars, 2047 moves |
| `/master-plan` | Spatial "string of pearls" + coastal-engineering fundamentals |
| `/infrastructure` | Blueprint: zones, parking, parks, watersports, helipads, EV, waste |
| `/experience` | **3D + VR** model of the corridor (Three.js / WebXR) |
| `/budget` | ₹2,500 cr investment by phase / sector / source |
| `/runbook` | Step-by-step execution runbook |
| `/projects`, `/sustainability`, `/get-involved` | Supporting depth |

## Deploy to Vercel

Import the parent repository into Vercel and set the **Root Directory** to
`website/`. No environment variables are required. Framework preset: **Next.js**.

## VR notes

The `/experience` page uses the W3C WebXR Device API via Three.js. Open it in a
WebXR-capable browser/headset and use the **Enter VR** button. On desktop, test
with the Immersive Web Emulator browser extension.
