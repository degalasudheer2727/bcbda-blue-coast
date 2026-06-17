# Bapatla–Chirala Beach Development Authority (BCBDA)

> **A self-sustaining, eco-first coastal development blueprint for the Bay of Bengal shoreline of Bapatla District, Andhra Pradesh.**

[![Website](https://img.shields.io/badge/website-live-0a7d6b)](https://bcbda.vercel.app)
[![Status](https://img.shields.io/badge/status-draft%20v0.1-f59e0b)]()
[![License: CC BY 4.0](https://img.shields.io/badge/docs-CC%20BY%204.0-blue)](LICENSE)

This repository holds the founding vision, master plan, governance framework, and public website for a **proposed special-purpose authority** — the Bapatla–Chirala Beach Development Authority (BCBDA) — conceived to develop the Suryalanka–Vodarevu–Ramapuram coastal corridor as a model **self-sustaining eco-system**: clean, climate-resilient, community-owned, and economically self-funding.

> **Note on status:** BCBDA is a *proposed* body. This repository is a planning and advocacy artifact intended to inform a Government of Andhra Pradesh decision. It does not represent an existing statutory authority.

---

## The corridor at a glance

| | |
|---|---|
| **Location** | Bapatla District, Coastal Andhra Pradesh, India — Bay of Bengal shoreline |
| **Anchor beaches** | Suryalanka (Bapatla Beach), Vodarevu (Chirala), Ramapuram (Chirala) |
| **Connectivity** | ~1 hr from Guntur, ~2 hrs from Vijayawada; rail + NH access |
| **Maritime assets** | Nizampatnam Port (Bapatla district); proximity to Ramayapatnam Port |
| **Ecology** | Bay of Bengal fishery, dolphin habitat, casuarina belts, estuarine mangrove fringe |
| **Model** | Blue Flag–aligned, CRZ-compliant, blue-green economy, community co-ownership |

---

## What's in this repository

```
.
├── docs/                          # The planning corpus (Markdown)
│   ├── 01-vision-and-charter.md       # Why BCBDA exists; mandate, pillars, KPIs
│   ├── 02-master-plan.md              # Spatial plan, zoning, projects, phasing
│   ├── 03-governance-framework.md     # Legal form, board, accountability
│   ├── 04-sustainability-ecosystem.md # The self-sustaining eco-system model
│   ├── 05-financing-and-economics.md  # How it pays for itself
│   ├── 06-implementation-roadmap.md   # 10-year phased delivery
│   ├── 07-budget-and-2047-vision.md   # ₹2,500 cr plan, growth case + Viksit Bharat @2047
│   ├── 08-infrastructure-and-zones.md # Blueprint: zones, parking, parks, watersports, EV...
│   └── 09-execution-runbook.md        # Step-by-step delivery (who/what/when)
├── data/                          # Structured, reusable datasets (JSON)
│   ├── beaches.json
│   ├── projects.json
│   ├── kpis.json
│   └── budget.json                    # ₹2,500 cr by phase / sector / source
├── tools/
│   └── scraper/                   # Open-source scrapers (requests/bs4/trafilatura + ScrapeGraphAI)
├── website/                       # Next.js site (pitch + blueprint + runbook) with 3D/VR — deploys to Vercel
└── README.md
```

### Highlights

- **₹2,500 crore, three-phase** programme (₹1,500 + ₹500 + ₹500 cr), affordable by design — see [`docs/07-budget-and-2047-vision.md`](docs/07-budget-and-2047-vision.md).
- **The website is three things at once:** an investor **pitch deck**, a technical **blueprint**, and an **execution runbook**.
- **3D + WebXR/VR experience** — a live Three.js model of the future shoreline with an *Enter VR* button for headsets, at `/experience`.
- **Real growth case** — Hyderabad's IT boom, Amaravati (~60 km), NH-167A (Vodarevu–Piduguralla), faster rail to Bapatla, and a planned coastal highway.
- **Coastal-engineering rigor** — soft-engineering-first (beach nourishment, dunes, mangroves) per India's NGT 2022 direction, with climate-adjusted setback and sediment-cell discipline.
- **Open-source scraping toolkit** — a lightweight crawler plus a **ScrapeGraphAI** (LLM-driven) example.

## Running the website locally

```bash
cd website
npm install
npm run dev      # http://localhost:3000
```

## Deploying

The site is a standard Next.js App Router project. On Vercel, import this repo and set the **Root Directory** to `website/`. See [`docs/06-implementation-roadmap.md`](docs/06-implementation-roadmap.md) and the deployment notes below.

## Contributing

This is an open planning artifact. Issues and pull requests that improve accuracy, add data, or strengthen the plan are welcome. See [`CONTRIBUTING.md`](CONTRIBUTING.md).

## License

Documentation and data are released under **CC BY 4.0**; website source code under the **MIT License**. See [`LICENSE`](LICENSE).

---

*Prepared as an independent planning concept for consideration by the Government of Andhra Pradesh. Sources for factual claims are listed in each document.*
