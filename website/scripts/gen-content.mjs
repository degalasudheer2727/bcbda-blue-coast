// One-off generator: writes the researched News + Culture entries as Markdown
// collections under /content. Safe to re-run (overwrites). Run with: node scripts/gen-content.mjs
import fs from "node:fs";
import path from "node:path";

const root = path.join(process.cwd(), "content");
const slug = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60);

const fm = (obj) => {
  const lines = Object.entries(obj).map(([k, v]) =>
    typeof v === "boolean" ? `${k}: ${v}` : `${k}: ${JSON.stringify(v)}`
  );
  return `---\n${lines.join("\n")}\n---\n`;
};

const write = (dir, name, front, body) => {
  const d = path.join(root, dir);
  fs.mkdirSync(d, { recursive: true });
  fs.writeFileSync(path.join(d, `${name}.md`), `${fm(front)}\n${body.trim()}\n`);
};

const news = [
  {
    title: "Centre releases ₹97.52 crore for Suryalanka Beach development",
    date: "2025-03-27", dateLabel: "Mar 2025", category: "Tourism", featured: true,
    source: "Deccan Chronicle",
    sourceUrl: "https://www.deccanchronicle.com/southern-states/andhra-pradesh/centre-releases-9752-crore-for-suryalanka-beach-development-1869329",
    body: "The Union government released ₹97.52 crore under the Swadesh Darshan 2.0 scheme to develop Suryalanka Beach in Bapatla district to international standards. The allocation was secured during a meeting between AP Tourism and the Union Tourism Ministry in Delhi — the largest single push yet for the corridor's flagship beach.",
  },
  {
    title: "Suryalanka reimagined as the ‘Bay of Bapatla’",
    date: "2025-07-01", dateLabel: "Jul 2025 (approx)", category: "Tourism", featured: true,
    source: "Deccan Chronicle",
    sourceUrl: "https://www.deccanchronicle.com/southern-states/andhra-pradesh/suryalanka-set-for-rs98-crore-global-tourism-push-as-bay-of-bapatla-1956309",
    body: "Andhra Pradesh is redeveloping Suryalanka into an international destination branded the ‘Bay of Bapatla’ — with a welcome arch, camping, a cycling-track approach road, cobblestone walkways, water sports, landscaping and an 11 KV solar system. The plan deliberately avoids permanent structures on the sand to limit erosion, and pursues Blue Flag certification with eco-resorts and PPP hotels.",
  },
  {
    title: "PM Modi launches ~₹58,000 crore of Amaravati works, ~60 km away",
    date: "2025-05-02", dateLabel: "May 2025", category: "Capital Region", featured: true,
    source: "Press Information Bureau",
    sourceUrl: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2126248",
    body: "On 2 May 2025 the Prime Minister laid foundation stones for 74 Amaravati projects worth about ₹49,000 crore (total event value ~₹58,000 crore), covering the Assembly, Secretariat, High Court and housing, plus a ~320 km transport network. Roughly 60 km from the Bapatla coast, the capital's restart is a major regional driver of leisure, business and residential demand.",
  },
  {
    title: "AP Tourism Policy 2024–2029 puts beach tourism front and centre",
    date: "2024-12-01", dateLabel: "Dec 2024", category: "Policy", featured: false,
    source: "AP Economic Development Board",
    sourceUrl: "https://apedb.ap.gov.in/documents/AP%20Tourism%20Policy%202024-2029.pdf",
    body: "Andhra Pradesh's Tourism Policy 2024–2029 prioritises beach, eco and spiritual tourism, planning seven hubs and 25 circuits — including dedicated beach circuits — and granting industry status to hospitality. It targets raising tourism's share of GVA from 4.6% to 8% by 2029 and ₹25,000 crore in private investment, backed by incentives such as 100% stamp-duty reimbursement.",
  },
  {
    title: "₹667 crore released for the Vodarevu–Piduguralla highway (NH-167A)",
    date: "2025-01-01", dateLabel: "2025 (approx)", category: "Connectivity", featured: false,
    source: "The Pioneer",
    sourceUrl: "https://pynr.in/rs-667-cr-released-for-vodarevu-piduguralla-nh-a-167a-construction/",
    body: "₹667 crore was released for the four-lane (24 m) NH-167A from Vodarevu port to Piduguralla, with four major bridges and six underpasses planned. About 35 km of the highway runs through Bapatla district. The corridor plugs the coast directly into the interior and is intended to boost export of marine and agricultural produce.",
  },
  {
    title: "Bids invited for four-laning the Vodarevu–Chilakaluripet section",
    date: "2024-06-01", dateLabel: "2024 (approx)", category: "Connectivity", featured: false,
    source: "ProjectsToday",
    sourceUrl: "https://www.projectstoday.com/News/Bids-invited-for-four-laning-of-Vodarevu-Chilakaluripet-section-of--NH-167A",
    body: "NHAI invited bids for four-laning the Vodarevu–Chilakaluripet section of NH-167A, part of the wider Piduguralla–Chirala–Vodarevu corridor. The upgrade strengthens road connectivity between the Bapatla–Chirala coast and interior Andhra Pradesh, including the capital region.",
  },
  {
    title: "Rushikonda regains Blue Flag — the benchmark for AP's coast",
    date: "2025-03-04", dateLabel: "Mar 2025", category: "Environment", featured: false,
    source: "EnsureIAS / Insights",
    sourceUrl: "https://www.insightsonindia.com/2025/03/26/rushikonda-beach-regained-blue-flag-certification/",
    body: "Rushikonda in Visakhapatnam — Andhra Pradesh's only Blue Flag beach — regained its certification after a compliance audit in March 2025, following a temporary withdrawal. The FEE Denmark standard demands 33 environmental, safety and cleanliness criteria, and sets the bar BCBDA aims to clear at Suryalanka.",
  },
  {
    title: "Amaravati revived with World Bank, ADB and HUDCO funding",
    date: "2024-12-15", dateLabel: "Dec 2024", category: "Capital Region", featured: false,
    source: "Construction World",
    sourceUrl: "https://www.constructionworld.in/policy-updates-and-economic-news/amaravati-project-back-on-track-with-renewed-momentum/66920",
    body: "Stalled Amaravati works resumed after the 2024 change of government. In December 2024 the World Bank approved US$800 million and the ADB matched it with US$800 million for the Amaravati Integrated Urban Development Program, alongside ₹11,000 crore from HUDCO. Phase-1 development is estimated at about ₹64,910 crore over three years.",
  },
  {
    title: "Bapatla and Chirala stations to be modernised under Amrit Bharat",
    date: "2024-08-01", dateLabel: "2024 (approx)", category: "Connectivity", featured: false,
    source: "Urban Transport News",
    sourceUrl: "https://www.urbantransportnews.com/news/indian-railways-to-redevelop-1275-stations-under-amrit-bharat-station-scheme",
    body: "Bapatla and Chirala railway stations are being upgraded under the Ministry of Railways' Amrit Bharat Station Scheme, improving passenger amenities, accessibility and infrastructure on the busy Vijayawada–Gudur trunk route — easing rail access for visitors to the Suryalanka–Vodarevu coast.",
  },
  {
    title: "Suryalanka Beach Festival showcases the coast",
    date: "2025-09-26", dateLabel: "Sep 2025", category: "Tourism", featured: false,
    source: "The Hans India",
    sourceUrl: "https://www.thehansindia.com/andhra-pradesh/3-day-beach-festival-at-suryalanka-from-sept-26-998978",
    body: "AP Tourism organised a multi-day Suryalanka Beach Festival around World Tourism Day, with cultural performances, beach sports, music, dance and a food festival, paired with a foundation-stone event for the ~₹97 crore beach development. (Some reports noted weather disruption to the September edition — dates to be confirmed.)",
  },
  {
    title: "Study: ~20% of Bapatla's shoreline eroded between 1990 and 2022",
    date: "2024-04-01", dateLabel: "2024 (approx)", category: "Environment", featured: false,
    source: "Deccan Chronicle",
    sourceUrl: "https://www.deccanchronicle.com/southern-states/andhra-pradesh/massive-coastline-erosion-in-ap-says-study-from-1990-to-2022-1942681",
    body: "A coastal-change study reported that about 20% of Bapatla district's shoreline eroded between 1990 and 2022 (with 5.3% stable and 74.7% accreting). It underlines why BCBDA leads with soft defences — dunes, casuarina and mangroves — and a climate-adjusted setback line, rather than hard structures on the beach.",
  },
];

const culture = [
  {
    name: "Suryalanka Beach", category: "Beach", order: 1,
    source: "Bapatla District (Govt. of AP)", sourceUrl: "https://bapatla.ap.gov.in/tourist-place/suryalanka-beach/",
    body: "About 9 km from Bapatla town, Suryalanka is a long stretch of golden sand on the Bay of Bengal known for gentle waves, shallow water and calm sunrise and sunset views — one of the more family-friendly beaches on the Andhra coast. Relatively uncommercialised, it is popular for weekend picnics and photography, with seasonal dolphin-spotting boat trips reported around November.",
  },
  {
    name: "Vodarevu Beach", category: "Beach", order: 2,
    source: "Bapatla District Tourism / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Vodarevu_Beach",
    body: "Roughly 6–8 km from Chirala, Vodarevu is a coconut-fringed beach popular for boat rides, water sports and its working fishing activity. Promoted as one of the closest beaches to Hyderabad and Telangana, it draws steady weekend crowds and anchors the corridor's marine-recreation node.",
  },
  {
    name: "Sri Bhavanarayana Swamy Temple, Bapatla", category: "Temple & Heritage", order: 3,
    source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Bhavanarayana_Temple,_Bapatla",
    body: "An ancient Vishnu temple dedicated to Lord Bhavanarayana, traditionally linked to early Chola patronage and later supported by the Gajapatis and Vijayanagara rulers, including Krishnadevaraya. Counted among the area's protected heritage monuments, the temple is the source of the town's very name. (Founding accounts differ across sources, so its exact date is best stated cautiously.)",
  },
  {
    name: "How Bapatla got its name (Bhavapuri)", category: "Temple & Heritage", order: 4,
    source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Bapatla",
    body: "Bapatla is named for the presiding deity of the Bhavanarayana temple. Historically called Bhavapuri, the name passed through forms such as Bhavapattana, Bhavapattu and Bhavapatta before settling into the modern ‘Bapatla’ — a thread tying deity, temple and town into one local identity.",
  },
  {
    name: "Chirala–Perala Handloom Weaving", category: "Craft", order: 5,
    source: "The Hans India / District ODOP", sourceUrl: "https://www.thehansindia.com/featured/sunday-hans/the-glory-and-story-of-chirala-770849",
    body: "Chirala, with adjoining Perala, is a historic cotton-weaving town whose Padmasali and Devanga weaver communities are known for soft, durable cotton saris and ‘seico’ cotton-silk blends. Local lore even ties the name ‘Chirala’ to ‘chira’ — sari in Telugu. Handloom is the district's flagship craft, though the cluster has thinned under powerloom competition.",
  },
  {
    name: "Vetapalem Cashews (Jeedipappu)", category: "Cuisine", order: 6,
    source: "The Hans India", sourceUrl: "https://www.thehansindia.com/posts/index/Andhra-Pradesh/2018-04-17/Vetapalem-cashew-nuts-find-it-tough-to-survive/374573",
    body: "Vetapalem, near Chirala, is long associated with cashew (jeedipappu) growing and processing, its nuts prized for a rich taste. Processing here dates to around the 1930s, when local produce was sent to Madras and partly exported. The trade has shrunk, but the ‘Vetapalem cashew’ remains a regional food marker.",
  },
  {
    name: "Saraswata Niketanam Library, Vetapalem", category: "Temple & Heritage", order: 7,
    source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Saraswata_Niketanam",
    body: "Founded in 1918, Saraswata Niketanam in Vetapalem is one of India's oldest private non-profit libraries, holding around 90,000 volumes plus palm-leaf and unpublished manuscripts in Telugu, Sanskrit, Hindi, Urdu and English. Its foundation stone was laid by Mahatma Gandhi in 1929, and President Rajendra Prasad visited in 1935 — a deep tie to the freedom movement.",
  },
  {
    name: "Coastal Andhra Seafood Cuisine", category: "Cuisine", order: 8,
    source: "Regional seafood listings", sourceUrl: "https://traveltriangle.com/blog/restaurants-in-chirala/",
    body: "The Bapatla–Chirala fishing landings feed a fiery seafood table built on fresh prawns, crab and fish. Signature dishes include Chepala Pulusu (tangy tamarind fish curry) and Royyala Vepudu (crisp spiced prawn fry), balancing chilli heat with tamarind sourness in classic Andhra style; dried fish is a regional staple too.",
  },
  {
    name: "Vodarevu–Nizampatnam Fishing Community", category: "Community", order: 9,
    source: "Nizampatnam / ICSF", sourceUrl: "https://en.wikipedia.org/wiki/Nizampatnam",
    body: "Vodarevu, Chirala and Nizampatnam anchor an active fishing economy on the Bapatla coast, with Nizampatnam a historic seaport known for backwaters and mangroves. These harbours — being upgraded under government fisheries schemes — sustain a long-standing coastal fishing culture that BCBDA treats as co-owners of coastal prosperity.",
  },
  {
    name: "Bhattiprolu Buddhist Stupa", category: "Nearby", order: 10,
    source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Bhattiprolu",
    body: "At Bhattiprolu stands a stupa dating to roughly the 3rd century BCE. Excavations in 1892 yielded inscribed stone relic caskets holding crystal, silver and gold caskets with relics and jewels. Its inscriptions preserve an early Brahmi variant — the ‘Bhattiprolu script’ — considered a likely precursor of the modern Telugu script, a landmark of South Indian epigraphy.",
  },
  {
    name: "Nizampatnam Backwaters & Mangroves", category: "Nearby", order: 11,
    source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Nizampatnam",
    body: "South of Bapatla on the Krishna-delta fringe, Nizampatnam is known for backwaters, a lighthouse and mangrove forests along the Bay of Bengal. The historic port offers an eco and coastal-nature counterpoint to the district's beaches, part of the region's wider maritime-tourism appeal.",
  },
];

// reset collections so removed entries don't linger
for (const dir of ["news", "culture"]) {
  const d = path.join(root, dir);
  if (fs.existsSync(d)) for (const f of fs.readdirSync(d)) if (f.endsWith(".md")) fs.unlinkSync(path.join(d, f));
}

news.forEach((n) => write("news", slug(n.title), {
  title: n.title, date: n.date, dateLabel: n.dateLabel, category: n.category,
  featured: n.featured, source: n.source, sourceUrl: n.sourceUrl,
}, n.body));

culture.forEach((c) => write("culture", slug(c.name), {
  name: c.name, category: c.category, order: c.order, source: c.source, sourceUrl: c.sourceUrl,
}, c.body));

console.log(`Wrote ${news.length} news + ${culture.length} culture entries.`);
