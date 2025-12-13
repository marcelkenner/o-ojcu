# Website Repro Playbook

## Purpose
Marketing site for the memoir "O ojcu, który nigdy nim nie był" built with plain HTML, CSS, and TypeScript (no bundler). Mobile-first and SEO-focused per `website_plan.md`.

## Tech Stack
- TypeScript compiled via `tsc` (ES modules, ES2020 target).
- Node.js scripts for copying static assets (no bundler).
- Output served from `dist/`.

## Project Layout
- `src/pages/`: HTML (home + legal + 404).
- `src/styles/`: CSS split into components/pages; `main.css` imports others.
- `src/ts/`: TypeScript classes (utils, UI, form, analytics).
- `src/assets/`: images/icons/pdfs placeholder folders.
- `src/static/`: root-level files like robots, sitemap, manifest.
- `scripts/`: `clean.mjs` and `build.mjs` for housekeeping.
- `dist/`: build output (deploy this).
- Icons: Phosphor Web Components via CDN (`@phosphor-icons/webcomponents@2.1`) in `src/pages/index.html`.

## Build & Clean
```bash
source ~/.nvm/nvm.sh && npm install        # first time
source ~/.nvm/nvm.sh && npm run clean      # remove dist
source ~/.nvm/nvm.sh && npm run build      # tsc -> dist/js + copy static
```

## Local Preview
Serve the `dist/` folder with any static server, e.g.:
```bash
source ~/.nvm/nvm.sh && npx http-server dist -p 4173
```

## Editing Guidelines
- Keep files < 300 lines; split when needed.
- OOP-first: use ViewModel/Manager/Coordinator separation; keep UI logic out of HTML.
- Mobile-first CSS; favor relative units and flexible grids.
- Update this playbook if build steps or structure change.

## QA Checklist
- `npm run build` succeeds without TypeScript errors.
- Links load from `dist/` (styles/js relative paths).
- Hero CTA scrolls; accordion toggles keyboard + click.
- Newsletter form validates email + consent; shows success message.
- Phosphor icons render (check CDN is reachable).
- If running on a fresh clone, make sure `src/assets/` exists (script now auto-creates empty targets but warns if missing).
