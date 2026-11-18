# therapywithshloka.com

Static site for Therapy with Shloka, built with [Astro](https://astro.build). Every page is pre-rendered to plain HTML, so search engines and visitors get the full content without JavaScript.

## Commands

| Command | What it does |
|---|---|
| `npm install` | Install dependencies (Node 20+) |
| `npm run dev` | Local dev server at http://localhost:4321 |
| `npm run build` | Build the site into `dist/` |
| `npm run preview` | Serve the built site locally |

## Where things live

| Path | Contents |
|---|---|
| `src/data/site.ts` | Practice facts: fee, insurers, hours, license, form endpoint, nav |
| `src/data/faqs.ts` | FAQ questions and answers (also generates FAQ structured data) |
| `src/data/guides.ts` | Guide list; set `published: true` once a guide has a page |
| `src/content/blog/*.md` | Essays. Add a markdown file to publish a new one |
| `src/pages/` | One file per page |
| `src/styles/global.css` | Design system: colours, type, components |
| `src/assets/` | Images (optimised and resized at build time) |
| `public/` | Files copied as-is: favicon, robots.txt, share image |

## Adding an essay

Create `src/content/blog/my-slug.md`:

```md
---
title: "Title"
date: 2026-12-01
excerpt: "One or two sentences shown on cards and in search results."
tags: ["Identity"]
cover: ../../assets/forest.jpg
---
Body in markdown. Use `## Heading` for sections.
```

## Deploying

The output is static files in `dist/`. Any static host works. Build command `npm run build`, output directory `dist`.
The site uses clean URLs without trailing slashes (`/about` is served from `about.html`); Cloudflare Pages, Netlify, Vercel and GitHub Pages all handle this by default, and all serve `404.html` for missing pages.

## Still placeholders

- All photographs except Shloka's portrait came from the previous site and were marked as temporary there.
- Guides 02 and 03 are listed as "in progress" and have no page yet.
- No analytics is installed.
