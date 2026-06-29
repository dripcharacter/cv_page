# Academic CV / Personal Site

A minimal, bilingual (English / Korean) academic CV website built with
[Hugo](https://gohugo.io). Hosted for free on GitHub Pages. Publications and
news support **tag filtering** and **full-text search** — entirely client-side,
no server or database.

## Features

- 🌐 **Bilingual** — English at `/`, Korean at `/ko/`, with a language toggle.
- 🔎 **Search** — full-text search over title, authors, venue, tags and body,
  plus tag-chip filtering. Runs in the browser (`assets/js/search.js`) over a
  generated `index.json`. No external services.
- 🏷️ **Tags** — every publication / news item can be tagged; tag pages live at
  `/tags/<tag>/`, and list pages have an inline tag filter.
- 📄 **Sections** — About (home), Publications, News.
- 💸 **$0 hosting** — GitHub Actions builds and deploys to GitHub Pages.

## Local preview

```bash
hugo server
# open http://localhost:1313
```

Requires **Hugo extended** (already installed: v0.161.1).

## Editing content

Everything lives under `content/`. Markdown front matter drives the metadata.

### A publication — `content/publications/my-paper.md`

```markdown
---
title: "Paper title"
date: 2024-09-15
authors: "Your Name, Co Author"
venue: "NeurIPS 2024"
selected: true          # true → also shown on the home page
tags: ["topic-a", "topic-b"]
links:                  # any key:value pairs become buttons
  pdf: "https://..."
  arxiv: "https://..."
  code: "https://..."
---

Abstract / description. This text is indexed for full-text search.
```

### A news item — `content/news/2024-09-event.md`

```markdown
---
title: "Something happened"
date: 2024-09-15
tags: ["talk"]
---

Body text (also searchable).
```

### Korean translations

Add a sibling file with a `.ko.md` suffix (e.g. `my-paper.ko.md`). Files without
a Korean version simply don't appear on the Korean site. The same applies to
`_index.md` → `_index.ko.md`.

### Your details

Edit `hugo.toml`:
- `title`, `params.tagline`, `params.affiliation` (per language)
- `params.author`, `params.email`, and social links (`github`, `scholar`,
  `orcid`, `linkedin`, `twitter`) — blank values are hidden
- `params.cvPdf` — put a PDF in `static/files/cv.pdf` and set `cvPdf = "/files/cv.pdf"`
- About text: `content/_index.md` (EN) and `content/_index.ko.md` (KO)

## Deploy to GitHub Pages (free)

1. Create a GitHub repo and push this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial CV site"
   git branch -M main
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```
2. On GitHub: **Settings → Pages → Build and deployment → Source = GitHub Actions**.
3. Every push to `main` triggers `.github/workflows/deploy.yml`, which builds with
   Hugo and publishes. The site URL is shown in the Actions run / Pages settings.

The workflow injects the correct `baseURL` automatically, so it works whether the
repo is a **user site** (`<you>.github.io`) or a **project site**
(`<you>.github.io/<repo>`).

## Project layout

```
hugo.toml                # config: languages, menu, taxonomies, params
content/                 # your content (markdown)
  _index.md / .ko.md     # home / about
  publications/          # one file per paper
  news/                  # one file per news item
  search.md / .ko.md     # search page (uses layout: search)
layouts/                 # custom theme (no external dependency)
  _default/index.json    # generates the search index
  _default/search.html   # search UI
assets/
  css/main.css           # styles (light + dark)
  js/search.js           # client-side search engine
  js/filter.js           # tag filtering on list pages
i18n/                    # UI string translations (en, ko)
.github/workflows/       # GitHub Pages deploy
```
