// Central content/data for the BCBDA website.
// Mirrors /data/*.json in the repository root.

export const SITE = {
  name: "Bapatla–Chirala Beach Development Authority",
  shortName: "BCBDA",
  tagline: "A self-sustaining, eco-first coastal corridor on the Bay of Bengal.",
  status: "Proposed authority · Draft vision",
  url: "https://bcbda-blue-coast.vercel.app",
  repoUrl: "https://github.com/degalasudheer2727/bcbda-blue-coast",
};

export const VISION = {
  statement:
    "To make the Bapatla–Chirala coast a globally recognised model of self-sustaining, climate-resilient beach development — where a thriving blue-green economy, an intact coastal ecology, and an empowered local community reinforce one another, generation after generation.",
  mission: [
    "Plan the Suryalanka–Vodarevu–Ramapuram corridor as one integrated destination.",
    "Protect and regenerate the coastal ecosystem as the foundation of all value.",
    "Develop world-class, CRZ-compliant, Blue Flag–standard coastal infrastructure.",
    "Sustain itself financially through diversified, recurring revenue.",
    "Empower fishing and farming communities as co-owners of coastal prosperity.",
  ],
  values: [
    { name: "Ecology first", body: "No project proceeds if it degrades the beach–dune–fishery system. Nature is infrastructure." },
    { name: "Self-reliance", body: "Every asset is designed with a revenue or cost-recovery model. The Authority earns its keep." },
    { name: "Community ownership", body: "Local cooperatives, SHGs, and fisherfolk hold real stakes, jobs, and decision rights." },
    { name: "Climate resilience", body: "Build for sea-level rise, cyclones, and surge — soft defences before hard ones." },
    { name: "Radical transparency", body: "Plans, budgets, data, and performance are public by default." },
  ],
};

export const PILLARS = [
  { name: "Pristine & Safe Coast", body: "Blue Flag–standard beaches, lifeguards, clean water, plastic-free.", icon: "wave" },
  { name: "Living Shoreline", body: "Dune, casuarina, mangrove, and reef restoration as coastal defence.", icon: "leaf" },
  { name: "Blue-Green Economy", body: "Tourism, fisheries, aquaculture, marine recreation, events.", icon: "fish" },
  { name: "Inclusive Livelihoods", body: "Community cooperatives, skilling, women-led enterprise.", icon: "people" },
  { name: "Smart & Circular Infrastructure", body: "Renewable energy, water reuse, zero-waste, digital backbone.", icon: "loop" },
  { name: "Resilient & Transparent Governance", body: "Empowered authority, open data, citizen voice.", icon: "shield" },
];

export const NODES = [
  { id: "A", name: "Suryalanka Gateway", role: "Arrival & civic", body: "The corridor's front door: visitor orientation, edge parking & mobility hub, the flagship Blue Flag beach, promenade, safety HQ, and BCBDA offices." },
  { id: "B", name: "Eco-Adventure & Wellness", role: "Low-density premium", body: "Eco-resorts, wellness retreats, glamping, and dune boardwalks behind the casuarina belt — high-value, low-volume tourism that funds conservation." },
  { id: "C", name: "Vodarevu Marine & Watersports", role: "Marine recreation", body: "Regulated watersports, the fishing-harbour link, a seafood culinary district, and wildlife-safe dolphin tours." },
  { id: "D", name: "Ramapuram Quiet Coast", role: "Conservation-led", body: "The calmest, cleanest stretch — deliberately low-density, with a research and education station and high-sensitivity retreats." },
];

export const BEACHES = [
  { id: "suryalanka", name: "Suryalanka (Bapatla) Beach", node: "A", town: "Bapatla", distanceKm: 9, highlights: ["Sunrise & sunset", "Swimming", "Dolphins offshore"] },
  { id: "vodarevu", name: "Vodarevu Beach", node: "C", town: "Chirala", distanceKm: 8, highlights: ["Watersports", "Fishing", "High footfall"] },
  { id: "ramapuram", name: "Ramapuram Beach", node: "D", town: "Chirala", distanceKm: 10, highlights: ["Clean & peaceful", "Low density"] },
];

export const PROJECTS = [
  { id: "P1", name: "Suryalanka Blue Flag Beach & Promenade", node: "A", pillar: "Pristine & Safe Coast", phase: 1 },
  { id: "P2", name: "Corridor Solar–Wind Micro-grid", node: "All", pillar: "Smart & Circular Infrastructure", phase: 1 },
  { id: "P3", name: "Dune & Casuarina Living-Shoreline Restoration", node: "A–B", pillar: "Living Shoreline", phase: 1 },
  { id: "P4", name: "Integrated Waste-to-Resource & Plastic-Free Beaches", node: "All", pillar: "Smart & Circular Infrastructure", phase: 1 },
  { id: "P5", name: "Visitor Gateway & Mobility Hub", node: "A", pillar: "Resilient & Transparent Governance", phase: 1 },
  { id: "P6", name: "Estuary Mangrove & Blue-Carbon Reserve", node: "B–C", pillar: "Living Shoreline", phase: 2 },
  { id: "P7", name: "Vodarevu Watersports & Seafood Culinary District", node: "C", pillar: "Blue-Green Economy", phase: 2 },
  { id: "P8", name: "Community Cooperative & Skilling Campus", node: "C–D", pillar: "Inclusive Livelihoods", phase: 2 },
  { id: "P9", name: "Eco-Resort & Wellness Concessions (PPP)", node: "B", pillar: "Blue-Green Economy", phase: 2 },
  { id: "P10", name: "Green-Blue Spine (NMT + e-shuttle)", node: "All", pillar: "Smart & Circular Infrastructure", phase: 2 },
  { id: "P11", name: "Tertiary Wastewater Reuse & Zero-Discharge System", node: "All", pillar: "Smart & Circular Infrastructure", phase: 3 },
  { id: "P12", name: "Ramapuram Conservation & Research Station", node: "D", pillar: "Living Shoreline", phase: 3 },
  { id: "P13", name: "Coastal Resilience & Early-Warning System", node: "All", pillar: "Resilient & Transparent Governance", phase: 3 },
  { id: "P14", name: "Digital Twin & Open Coastal Data Platform", node: "All", pillar: "Resilient & Transparent Governance", phase: 3 },
];

export const KPIS = [
  { goal: "Blue Flag certification", target: "≥ 2 beaches" },
  { goal: "O&M from own revenue", target: "≥ 100%" },
  { goal: "Renewable electricity", target: "≥ 90%" },
  { goal: "Wastewater treated / reused", target: "100% / ≥ 70%" },
  { goal: "Landfill diversion", target: "~100%" },
  { goal: "Ecology restored", target: "≥ 50 ha" },
  { goal: "Local jobs (≥ 40% women)", target: "≥ 5,000" },
  { goal: "Critical assets above 2050 surge", target: "100%" },
];

export const PHASES = [
  { n: 1, name: "Foundations", years: "Years 1–3", goal: "A visible, certifiable Blue Flag “proof beach” and the Authority established." },
  { n: 2, name: "Build-out", years: "Years 4–6", goal: "A year-round economy that covers its own operations and maintenance." },
  { n: 3, name: "Maturity & Resilience", years: "Years 7–10", goal: "A replicable, fully self-sustaining, climate-resilient model." },
];

export const FACTS = [
  { value: "₹2,500 cr", label: "3-phase investment" },
  { value: "3", label: "anchor beaches" },
  { value: "5,000+", label: "jobs (≥40% women)" },
  { value: "Affordable", label: "for every family" },
];

export const BUDGET = {
  total: 2500,
  unit: "₹ crore",
  byPhase: [
    { phase: 1, name: "Foundations & proof beach", years: "Y1–3", amount: 1500, share: 60 },
    { phase: 2, name: "Build-out", years: "Y4–6", amount: 500, share: 20 },
    { phase: 3, name: "Maturity & resilience", years: "Y7–10", amount: 500, share: 20 },
  ],
  bySector: [
    { sector: "Coastal protection & living shoreline", amount: 350, share: 14 },
    { sector: "Mobility, parking, helipads & spine", amount: 350, share: 14 },
    { sector: "Beach development & beachfront parks", amount: 300, share: 12 },
    { sector: "Renewable energy, micro-grid & EV charging (PPP)", amount: 250, share: 10 },
    { sector: "Water, sanitation & zero-discharge", amount: 250, share: 10 },
    { sector: "Community livelihoods, housing & skilling", amount: 220, share: 8.8 },
    { sector: "Waterfront markets & culinary", amount: 180, share: 7.2 },
    { sector: "Land, planning, governance & contingency", amount: 180, share: 7.2 },
    { sector: "Water sports & recreation", amount: 150, share: 6 },
    { sector: "Waste management & beach cleaning", amount: 150, share: 6 },
    { sector: "Digital, resilience & VR twin", amount: 120, share: 4.8 },
  ],
  byFinancing: [
    { source: "State & Central schemes (Tourism, Sagarmala, NCRMP)", amount: 1100, share: 44 },
    { source: "Private capital & PPP (resorts, watersports, EV, markets)", amount: 900, share: 36 },
    { source: "Green / municipal bonds & climate finance", amount: 300, share: 12 },
    { source: "Land-value capture & own revenue", amount: 200, share: 8 },
  ],
};

// Why now — the growth catalysts that de-risk demand
export const CATALYSTS = [
  { title: "Hyderabad's IT boom", body: "A booming Hyderabad tech economy is creating a vast, fast-growing weekend-and-leisure travel market hungry for an accessible coast." },
  { title: "Amaravati capital ~60 km away", body: "The new Andhra Pradesh capital is being developed roughly 60 km from the corridor — a captive base of government, business, and residential demand on the doorstep." },
  { title: "NH-167A: Vodarevu–Piduguralla", body: "The Vodarevu–Piduguralla national highway (NH-167A) is being developed, plugging the coast directly into the interior and the capital region." },
  { title: "Faster rail to Bapatla", body: "Railway connectivity to Bapatla is improving rapidly, making day and overnight trips effortless from across the state." },
  { title: "Coastal highway expansion", body: "A planned coastal highway expansion will string the corridor into a continuous, high-quality shoreline drive — the backbone of beach tourism." },
  { title: "Food & local infrastructure", body: "Renowned local cuisine, a strong fishing economy, and improving civic infrastructure give the corridor authentic character and a ready supply base." },
];

export const VISION_2047 = [
  { title: "Walk the future before it is built", body: "A digital + VR twin of the coast lets authorities, investors, and citizens experience the 2047 shoreline today — de-risking decisions and building consensus fast." },
  { title: "Blue carbon as an asset", body: "Restored mangroves and dunes are monetised through verified carbon and ecosystem-service credits — nature that pays for its own protection." },
  { title: "Proof beach before scale", body: "Certify Suryalanka to Blue Flag first; let evidence — not promises — unlock later capital and replication across AP's 974+ km coast." },
  { title: "Community co-ownership equity", body: "Fisherfolk and SHGs hold real stakes, turning potential opposition into aligned ownership of coastal prosperity." },
  { title: "An energy-positive coast", body: "Solar and wind surplus is exported to the grid — the shoreline earns from the same sun and breeze that draw the visitor." },
];

export const ENGINEERING = [
  { title: "Soft engineering first", body: "Following India's national direction (NGT 2022), we lead with beach nourishment, dunes, casuarina, and mangroves — not groynes, which starve down-drift beaches of sand." },
  { title: "Climate-adjusted setback", body: "Permanent structures stay landward of a setback line drawn for projected 2050+ sea-level rise and surge. ~33.6% of India's coast is erosion-prone — design accordingly." },
  { title: "Designed for surge & cyclone", body: "Elevated, cyclone-rated construction; integrated stormwater with bioswales, wetlands, and recharge wells; early-warning and shelter built in." },
  { title: "Sediment-cell thinking", body: "Interventions are modelled across the whole littoral cell, not a single beach, so we never fix one shore by eroding the next." },
  { title: "Carrying capacity by design", body: "Each node has a capacity ceiling; conservation reserves cap total intensity; park-at-the-edge keeps the active beach safe and vehicle-free." },
  { title: "Universal access & clean water", body: "Ramps, beach matting, accessible ablutions, and continuously tested bathing water — the Blue Flag baseline." },
];

export const INSPIRATIONS = [
  { name: "Greater Sentosa, Singapore", lesson: "Coastal rejuvenation + sea-level protection paired with green trails and waterfront promenades — and a target to double visitors." },
  { name: "Barceloneta, Barcelona", lesson: "A working-class fishing beach reborn as a world-class urban waterfront without losing its community." },
  { name: "Gold Coast, Australia", lesson: "Disciplined beach nourishment and dune care sustaining a tourism economy on a dynamic shore." },
  { name: "Boracay rehabilitation, Philippines", lesson: "Ecology-first: closing to restore water quality and carrying capacity proved a degraded beach can be brought back." },
  { name: "Kovalam & Eco-beaches, Kerala", lesson: "India's own template for clean, lifeguarded, Blue-Flag-grade beaches with strong local hospitality." },
  { name: "RK / Rushikonda, Visakhapatnam", lesson: "Andhra's existing Blue Flag beach — proof the state can reach world standards on its own coast." },
];

// Infrastructure & zones — the blueprint components
export const ZONES = [
  { code: "Z0", name: "Active Beach & Intertidal", use: "Lifeguarding, removable shacks, recreation, daily cleaning", rule: "No permanent build; vehicle-free" },
  { code: "Z1", name: "Dune & Vegetation Belt", use: "Dune/casuarina/mangrove restoration, boardwalks", rule: "Soft defence only" },
  { code: "Z2", name: "Recreation & Amenity", use: "Beachfront parks, promenades, pavilions, showers", rule: "Lightweight, elevated, removable" },
  { code: "Z3", name: "Tourism & Mixed-Use", use: "Eco-resorts, F&B, retail, parking hubs, EV charging", rule: "Low-rise, landward of CRZ limits" },
  { code: "Z4", name: "Community & Livelihood", use: "Housing upgrade, fish processing, markets, cooperatives", rule: "No displacement; in-situ upgrade" },
  { code: "Z5", name: "Conservation & Blue-Carbon", use: "Estuary, mangrove, research, low-impact eco-tourism", rule: "Protected; no construction" },
];

export const INFRASTRUCTURE = [
  { name: "Smart parking & mobility hubs", icon: "loop", body: "Edge parking at every node (1,000+ ECS combined), multi-level where land is tight, with shuttle pickup so the beach stays vehicle-free. App-based, affordably priced, with free two-wheeler bays.", ppp: false },
  { name: "EV charging network (PPP)", icon: "loop", body: "Fast and standard EV chargers at every parking hub and resort, built and run by private operators on revenue-share — zero-capex for the Authority, future-ready for the highway corridor.", ppp: true },
  { name: "Beachfront parks & green promenades", icon: "leaf", body: "Family parks, shaded lawns, children's play areas, fitness zones, and a continuous walking/cycling promenade behind the dune line — free public space at the heart of each node.", ppp: false },
  { name: "Water games & kids' zones", icon: "wave", body: "Safe, shallow water-play and splash zones, inflatable aqua-parks (seasonal), and sandcastle/beach-games areas — affordable family fun, supervised by lifeguards.", ppp: true },
  { name: "Water sports across the coast", icon: "fish", body: "Regulated zones for jet-ski, kayaking, paddle-boarding, parasailing, banana-boat, and surfing lessons — concentrated at Vodarevu (Node C), run by trained local cooperatives.", ppp: true },
  { name: "Helipads & emergency air access", icon: "shield", body: "Two corridor helipads for VIP/tourism charter and — critically — medical and disaster evacuation, integrated with the early-warning and lifeguard network.", ppp: false },
  { name: "Waterfront markets", icon: "people", body: "Vibrant, organised markets for seafood, crafts, and street food — fixed affordable stall rents for local vendors and SHGs, turning footfall into community income.", ppp: false },
  { name: "Beach shacks", icon: "sun", body: "Licensed, removable, design-controlled beach shacks (Goa-style) operated by local cooperatives, with capped, transparent pricing so food and drink stay affordable for all.", ppp: true },
  { name: "Waste management & circular economy", icon: "loop", body: "Source-segregation, composting, and material recovery centres; single-use-plastic-free beaches; refill stations and deposit-return for vendors. Zero-landfill target.", ppp: false },
  { name: "Beach-cleaning operations", icon: "wave", body: "Daily mechanised + manual cleaning by local 'Blue Brigade' cooperatives, sand-sifting machines, tide-line patrols, and live cleanliness dashboards — the Blue Flag essential.", ppp: false },
];

// Execution runbook — how it actually gets delivered
export const RUNBOOK = [
  { step: "0", title: "Mobilise (Months 0–6)", owner: "Govt of AP + interim CEO", body: "Secure in-principle approval, constitute the Authority and Board, open the BCBDA Fund, commission baseline surveys (coastal, ecology, hydrology, EIA scoping), and start community engagement." },
  { step: "1", title: "Notify the statutory master plan", owner: "Authority + Town Planning", body: "Notify the BCBDA area and zoning, stand up the single-window approval desk, and publish everything openly." },
  { step: "2", title: "Phase 1 — Proof beach (₹1,500 cr)", owner: "Projects wing + contractors", body: "Deliver Suryalanka Blue Flag beach, parking & mobility hubs, dune restoration, waste + beach-cleaning system, beachfront park, first shacks & market, and the micro-grid + EV charging starter network." },
  { step: "3", title: "Stand up O&M & cooperatives", owner: "Operations + Community wings", body: "Form and train local cooperatives (cleaning 'Blue Brigade', shacks, watersports, tours); put maintenance contracts and SLAs in place; begin revenue collection." },
  { step: "4", title: "Phase 2 — Build-out (₹500 cr)", owner: "Authority + PPP partners", body: "Extend to Vodarevu watersports, the estuary mangrove reserve, eco-resort & wellness concessions, the green-blue spine, and the skilling campus. Target O&M self-sufficiency by ~Year 6." },
  { step: "5", title: "Phase 3 — Maturity & resilience (₹500 cr)", owner: "Authority + research partners", body: "Zero-discharge water system, Ramapuram conservation node, full coastal resilience & early-warning, and the open digital twin / VR platform. Pursue a second Blue Flag." },
  { step: "6", title: "Monitor, audit & replicate", owner: "Authority + independent auditors", body: "Track all KPIs on the public dashboard; run annual financial + environmental audits; publish the replication playbook for the wider AP coast." },
];
