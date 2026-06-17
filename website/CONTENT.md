# Editing content — BCBDA Content Studio

The site's editable content lives as Markdown in **`content/`** and is rendered at
build time by `lib/content.ts`. Two collections exist today:

| Collection | Folder | Shown on |
|---|---|---|
| Latest Developments (news) | `content/news/*.md` | `/news` + homepage teaser |
| Culture & Highlights | `content/culture/*.md` | `/culture` |

Each file is plain frontmatter + a short body. Example (`content/news/…md`):

```markdown
---
title: "Centre releases ₹97.52 crore for Suryalanka Beach development"
date: "2025-03-27"
dateLabel: "Mar 2025"
category: "Tourism"
featured: true
source: "Deccan Chronicle"
sourceUrl: "https://…"
---

Two or three factual sentences summarising the development.
```

You can edit these files directly in Git, **or** use the visual studio at `/admin`.

## Option A — Visual studio, locally (no accounts, works now)

The studio is [Sveltia CMS](https://github.com/sveltia/sveltia-cms) (a modern Decap
CMS drop-in). `local_backend: true` is enabled, so you can edit against your working
copy with zero auth:

```bash
cd website
npx @sveltia/cms-proxy-server     # terminal 1 — bridges the studio to local files
npm run dev                        # terminal 2 — the site
# open http://localhost:3000/admin  (or :4319/admin if you started on that port)
```

Saves write straight to `content/*.md`. Commit them as normal.

## Option B — Visual studio in production (edit from anywhere)

To let editors save to GitHub from the live `/admin`, add a GitHub OAuth flow:

1. **Create a GitHub OAuth App** (Settings → Developer settings → OAuth Apps).
   - Homepage URL: your site URL.
   - Authorization callback URL: your OAuth handler's `/callback`.
2. **Deploy an OAuth handler.** Easiest is a tiny Vercel serverless function
   (e.g. [`vercel-decap-oauth`-style](https://github.com/) handlers) holding the
   OAuth **client ID/secret as Vercel env vars** — never in the repo.
3. In `public/admin/config.yml`, uncomment `base_url:` and point it at that handler.
4. Editors visit `/admin`, log in with GitHub, and saves become commits to
   `content/` on `main` → Vercel rebuilds the site automatically.

> The repo's secret-free philosophy is preserved: the only secret (the OAuth
> client secret) lives in Vercel env vars, not in code.

## Re-seeding

`scripts/gen-content.mjs` regenerates the initial researched entries. It **overwrites**
the collections, so don't run it after editors have made changes you want to keep.
