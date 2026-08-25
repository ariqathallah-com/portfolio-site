# Your Portfolio Site

A Next.js portfolio with a markdown-based "CMS" for your stories/journey posts.

## 1. Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## 2. Customize the content

- **Your bio:** edit `app/page.tsx` (the home page).
- **Your "Things" page:** edit `app/things/page.tsx`.
- **Social links:** edit `components/Footer.tsx`.
- **Site title/description:** edit `app/layout.tsx` (the `metadata` export).

## 3. Adding a new story (this is your "CMS")

Every story is one markdown file in `content/stories/`. To add one:

```bash
npm run new-story "The Day My First Prototype Worked"
```

This creates a pre-filled `.md` file. Open it, write your story in plain Markdown, then:

```bash
git add .
git commit -m "Add new story"
git push
```

Vercel redeploys automatically on every push — your new story goes live within a minute or two, no dashboard needed.

You can also just create the `.md` file by hand if you prefer; the front matter format is:

```markdown
---
title: "Story Title"
date: "2026-01-15"
excerpt: "One-sentence summary shown on the cards."
tags: ["journey"]
---

Your story content here.
```

## 4. Deploy to Vercel

1. Push this project to a GitHub repository (create one at github.com/new, then:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
2. Go to https://vercel.com, sign up/log in with your GitHub account.
3. Click **Add New → Project**, select your repository.
4. Framework preset auto-detects as **Next.js** — leave defaults as-is.
5. Click **Deploy**. In about a minute you'll get a live URL like `your-project.vercel.app`.

From now on, every `git push` to `main` auto-redeploys the live site.

## 5. Buy a domain on Cloudflare Registrar

Cloudflare sells domains at wholesale cost (no markup, and renewal price = registration price — no surprise price hike in year two). You'll need a free Cloudflare account.

1. Go to https://dash.cloudflare.com, sign up / log in.
2. In the sidebar, go to **Domain Registration → Register Domain**, search your desired domain (e.g. `yourname.com`), and purchase it.
3. Cloudflare automatically manages DNS for domains registered through it — you don't need to change nameservers manually.

## 6. Connect the Cloudflare domain to Vercel

1. In your Vercel project, go to **Settings → Domains**, type your domain, click **Add**.
2. Vercel will show you DNS records to set — typically:
   - An **A record**: `@` → `76.76.21.21`
   - A **CNAME record**: `www` → `cname.vercel-dns.com`
   (Vercel shows the exact current values on that screen — use those, they occasionally change.)
3. In Cloudflare, go to your domain → **DNS → Records**, and add/edit those same records.
   - Set the **Proxy status** to "DNS only" (grey cloud, not orange) for these records — Vercel needs to issue and manage its own SSL certificate directly, and Cloudflare's proxy can interfere with that.
4. Wait for DNS to propagate (usually a few minutes to an hour, often faster than other registrars since Cloudflare's DNS network is very fast). Vercel's Domains page will show a green checkmark once it's verified, and will auto-issue an HTTPS certificate.

Your site is now live at your own domain.

## Project structure

```
app/                 pages (App Router)
  page.tsx           home page (short bio, plain text)
  stories/           stories listing + individual story pages
  things/            "Things" page (favorites, links, misc)
components/          Header, Footer
content/stories/     your stories - one markdown file each
lib/stories.ts        reads and parses the markdown files
scripts/new-story.js  CLI helper to scaffold a new story
```
