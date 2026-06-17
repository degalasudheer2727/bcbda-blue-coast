# Deployment Guide — GitHub + Vercel

Repository name: **`bcbda-blue-coast`** — "blue coast" evokes the blue economy and
Blue-Flag ambition at the heart of the vision.

The project is build-verified (`next build` → 17 routes incl. sitemap, robots,
manifest, OG image; 0 errors). The website lives in `website/`.

> Why you (not me) run these: deploying requires *your* GitHub and Vercel
> credentials, which aren't available in this workspace. Everything below is
> copy-paste ready.

## 1. Push to GitHub (one step with the GitHub CLI)

```bash
cd "<this folder>"
# if a stale lock remains from the workspace, clear it first:
rm -f .git/*.lock .git/objects/*.lock 2>/dev/null

gh auth login                 # one-time, if needed
gh repo create bcbda-blue-coast --public --source . --remote origin --push
```

Or manually: create a public repo named `bcbda-blue-coast` on github.com, then:

```bash
git remote add origin https://github.com/degalasudheer2727/bcbda-blue-coast.git
git add -A && git commit -m "Polish: SEO, design system, logo" 2>/dev/null
git push -u origin main
```

## 2. Deploy to Vercel (recommended: Git integration)

1. Go to **vercel.com → Add New → Project** and import `bcbda-blue-coast`.
2. **Set Root Directory to `website/`.** (Critical — the Next app is in that subfolder.)
3. Framework preset: **Next.js** (auto-detected). No environment variables needed.
4. **Deploy.** You'll get a live URL (the site is configured for
   `https://bcbda-blue-coast.vercel.app`; update `SITE.url` in
   `website/lib/site-data.ts` if your URL differs).

Every future push to `main` then auto-deploys.

### Or deploy with the Vercel CLI

```bash
npm i -g vercel
cd website
vercel login
vercel --prod
```

## 3. After deploy — verify

- Home, mobile menu (resize narrow), and `/experience` 3D scene + **Enter VR** button.
- `https://<your-domain>/sitemap.xml` and `/robots.txt` resolve.
- Social preview shows the generated Open Graph image.

## Notes
- Node 18+ (built/tested on Node 22). `next` pinned to patched `^14.2.32`.
- If you set a custom domain, update `SITE.url` so canonical URLs, sitemap, and
  OG tags point to it.
