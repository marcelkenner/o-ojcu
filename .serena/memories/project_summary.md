## Project summary
- Marketing site for the memoir "O ojcu, który nigdy nim nie był".
- Stack: Next.js 16 (App Router) + React 19 + TypeScript, Tailwind CSS 4 with custom global tokens, Playfair Display + Inter via next/font.
- Structure: src/app with marketing route group, fragment page, privacy policy, sitemap/robots, error/not-found; components split into layout/ui; copy + JSON data in src/content; metadata helpers in src/lib; assets in public/.
- Newsletter intentionally removed; fragment PDF delivered as direct download from public/downloads.
- Mobile-first design with dark grunge palette from docs/ascii_design.md; files kept under 300 lines per AGENTS.md.
