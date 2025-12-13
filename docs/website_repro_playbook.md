# Website Repro Playbook

## Purpose
Marketing site for the memoir "O ojcu, który nigdy nim nie był" built with Next.js (App Router, TypeScript). Mobile-first, SEO-focused, newsletter-free download flow.

## Tech Stack
- Next.js 16 (App Router) + TypeScript, React 19.
- Styling: Tailwind CSS 4 via global layer + custom CSS tokens (dark, grunge-inspired palette).
- Fonts: Playfair Display (serif titles) + Inter (body) via `next/font`.
- Assets served from `public/` (images, downloads, optional fonts).
- Static data under `src/content/`; utilities under `src/lib/`.

## Project Layout
- `src/app/`: routing + layouts
  - `(marketing)/`: one-page marketing route with sectional components
  - `(legal)/polityka-prywatnosci`: privacy policy
  - `fragment/`: standalone excerpt landing
  - `sitemap.ts`, `robots.ts`, `not-found.tsx`, `error.tsx`
- `src/components/`: layout primitives (Container, SectionShell, header/footer) + UI (Button, Card)
- `src/content/`: structured copy (`copy.pl.ts`), FAQ JSON, retailers, excerpt.mdx placeholder
- `src/lib/`: metadata + schema helpers, route constants
- `public/`: images (book/press assets), fonts (optional)
- `docs/`: plans and this playbook

## Commands
```bash
source ~/.nvm/nvm.sh && npm install        # first setup
source ~/.nvm/nvm.sh && npm run dev        # local dev at http://localhost:3000
source ~/.nvm/nvm.sh && npm run build      # production build
source ~/.nvm/nvm.sh && npm run start      # serve built app
source ~/.nvm/nvm.sh && npm run lint       # lint with Next ESLint config
```

## Editing Guidelines
- Mobile-first CSS; keep sections lean and stack nicely on small screens.
- Keep files < 300 lines; split sections/components if they grow.
- Follow modular structure: UI primitives in `components/ui`, layout in `components/layout`, copy in `src/content`.
- Fragment flow: primary CTA leads to `/fragment`, which renders `src/content/fragment.md` via `react-markdown`; keep that file Markdown-only and readable on-page (no download flow).
- Use anchors from `src/lib/routes.ts` for navigation consistency.
- Keep metadata/SEO in `src/lib/metadata.ts` and `src/app/sitemap.ts` up to date when routes change.

## QA Checklist
- `npm run build` passes without TypeScript or ESLint errors.
- Navigation anchors scroll correctly on mobile and desktop.
- Fragment page renders Markdown (no raw syntax showing).
- Images resolve from `public/images`; replace placeholders before launch.
- Sitemap and robots routes respond (check `/sitemap.xml` and `/robots.txt`).
- Privacy policy reflects the current data flows; update date when editing.
