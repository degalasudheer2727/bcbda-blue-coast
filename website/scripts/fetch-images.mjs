// Downloads properly-licensed images from Wikimedia Commons into public/images/.
// Accepts only Public Domain / CC0 / CC BY / CC BY-SA. Records attribution to
// public/images/credits.json. Run: node scripts/fetch-images.mjs
import fs from "node:fs";
import path from "node:path";

const OUT = path.join(process.cwd(), "public", "images");
fs.mkdirSync(OUT, { recursive: true });
const UA = { "User-Agent": "BCBDA-site/1.0 (concept project; contact via github)" };
const API = "https://commons.wikimedia.org/w/api.php";
const OK_LIC = /^(public domain|cc0|cc by|cc-by)/i;
const BAD_TITLE = /(map|plan de|signboard|logo|seal|inscription|శాసనం|diagram|chart|\.svg|\.pdf|\.tif|coat of arms|locator|noms des)/i;

// key → either {title} for an exact Commons file, or {search, prefer} for a themed pick.
const PLAN = [
  // ---- authentic photos of the actual coast / landmarks ----
  { key: "hero-coast", title: "File:Suryalanka beach.jpg" },
  { key: "place-suryalanka", title: "File:Beach suryalanka.jpg" },
  { key: "place-vodarevu", title: "File:Boats sailing on Chirala beach.jpg" },
  { key: "chirala-boats", title: "File:Boat hanger near Chirala beach.jpg" },
  { key: "fishing-boat", title: "File:Fishing boat near Suryalanka beach.jpg" },
  { key: "temple", title: "File:Historical Bhavanarayana Swamy Temple at Bapatla.jpg" },
  { key: "bhattiprolu", title: "File:Maha Stupa at Bhattiprolu 01.jpg" },
  // ---- representative / illustrative themes ----
  { key: "handloom", search: "handloom weaving loom cotton", prefer: "loom" },
  { key: "cashew", search: "cashew nuts kernels", prefer: "cashew" },
  { key: "seafood", search: "prawn fry seafood andhra", prefer: "prawn" },
  { key: "library", search: "Saraswata Niketanam Vetapalem library", prefer: "library" },
  { key: "mangrove", search: "mangrove forest coast", prefer: "mangrove" },
  { key: "solar", search: "solar power plant panels field", prefer: "solar" },
  { key: "dunes", search: "coastal sand dunes vegetation", prefer: "dune" },
  { key: "waste", search: "recycling plant material recovery facility", prefer: "recycl" },
  { key: "mobility", search: "electric shuttle bus", prefer: "bus" },
  { key: "watersports", search: "windsurfing kitesurfing sea beach", prefer: "surf" },
  { key: "skilling", search: "vocational training workshop India", prefer: "training" },
  { key: "wellness", search: "beach eco resort", prefer: "resort" },
  { key: "cycling", search: "cycling path coastal", prefer: "cycl" },
  { key: "water-treatment", search: "sewage treatment plant water", prefer: "treatment" },
  { key: "research", search: "marine research field station", prefer: "research" },
  { key: "warning", search: "weather monitoring station coast", prefer: "station" },
  { key: "digital", search: "server room data center", prefer: "server" },
  { key: "market", search: "fish market India", prefer: "market" },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function j(url) {
  for (let attempt = 0; attempt < 5; attempt++) {
    const r = await fetch(url, { headers: UA });
    const t = await r.text();
    try {
      return JSON.parse(t);
    } catch {
      await sleep(1500 * (attempt + 1)); // backoff on rate-limit / non-JSON
    }
  }
  throw new Error("rate-limited after retries");
}

async function byTitle(title) {
  const u = `${API}?action=query&format=json&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url|extmetadata|mime&iiurlwidth=1600`;
  const d = await j(u);
  const pages = Object.values(d.query?.pages ?? {});
  return pages[0]?.imageinfo?.[0];
}

async function bySearch(search, prefer) {
  const u = `${API}?action=query&format=json&generator=search&gsrsearch=${encodeURIComponent(search)}&gsrnamespace=6&gsrlimit=12&prop=imageinfo&iiprop=url|extmetadata|mime&iiurlwidth=1600`;
  const d = await j(u);
  let cands = Object.values(d.query?.pages ?? {});
  cands = cands
    .filter((p) => p.imageinfo?.[0])
    .filter((p) => /image\/(jpeg|png)/.test(p.imageinfo[0].mime || ""))
    .filter((p) => !BAD_TITLE.test(p.title))
    .filter((p) => OK_LIC.test(p.imageinfo[0].extmetadata?.LicenseShortName?.value || ""))
    .filter((p) => (p.imageinfo[0].thumbwidth || 0) >= 800);
  cands.sort((a, b) => {
    const ap = prefer && a.title.toLowerCase().includes(prefer) ? -1 : 0;
    const bp = prefer && b.title.toLowerCase().includes(prefer) ? -1 : 0;
    return ap - bp;
  });
  return cands[0]?.imageinfo?.[0] && { ...cands[0].imageinfo[0], title: cands[0].title };
}

function clean(html) {
  return String(html || "").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}

// merge with any prior run so we only fetch what's missing
const creditsPath = path.join(OUT, "credits.json");
const prior = fs.existsSync(creditsPath) ? JSON.parse(fs.readFileSync(creditsPath, "utf8")) : [];
const credits = [...prior];
const have = new Set(prior.map((c) => c.key));

for (const item of PLAN) {
  if (have.has(item.key)) { console.log(`HAVE ${item.key}`); continue; }
  await sleep(1200); // throttle to stay under Commons rate limits
  try {
    const ii = item.title ? await byTitle(item.title) : await bySearch(item.search, item.prefer);
    if (!ii) { console.log(`SKIP ${item.key} — no candidate`); continue; }
    const lic = ii.extmetadata?.LicenseShortName?.value || "?";
    if (!OK_LIC.test(lic)) { console.log(`SKIP ${item.key} — license '${lic}'`); continue; }
    const dl = ii.thumburl || ii.url;
    const res = await fetch(dl, { headers: UA });
    if (!res.ok) { console.log(`SKIP ${item.key} — http ${res.status}`); continue; }
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 8000) { console.log(`SKIP ${item.key} — too small`); continue; }
    const ext = (ii.mime || "image/jpeg").includes("png") ? "png" : "jpg";
    fs.writeFileSync(path.join(OUT, `${item.key}.${ext}`), buf);
    credits.push({
      key: item.key,
      file: `/images/${item.key}.${ext}`,
      title: (ii.title || item.title || "").replace(/^File:/, ""),
      author: clean(ii.extmetadata?.Artist?.value) || "Wikimedia Commons contributor",
      license: lic,
      source: ii.descriptionurl || ii.url,
      illustrative: !item.title,
    });
    console.log(`OK   ${item.key.padEnd(16)} ${lic.padEnd(14)} ${(ii.title || item.title)}`);
  } catch (e) {
    console.log(`ERR  ${item.key} — ${e.message}`);
  }
}

fs.writeFileSync(path.join(OUT, "credits.json"), JSON.stringify(credits, null, 2));
console.log(`\nDownloaded ${credits.length}/${PLAN.length}. Wrote credits.json`);
