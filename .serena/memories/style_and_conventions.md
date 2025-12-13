# Style and Conventions
- Mobile-first design; responsive grids, accessible nav/accordion; include meta viewport.
- OOP-first: each behavior in dedicated class; prefer composition; separate UI logic (ViewModel/Coordinator patterns); avoid god classes.
- File size: keep files <300 lines; split functions <40 lines; classes assessed over 200 lines.
- Naming: descriptive, intention-revealing; avoid vague helpers.
- Frontend architecture: HTML in `src/pages`, CSS split into components/pages, TypeScript modules under `src/ts` (utils, ui, form, analytics). State in ViewModels/Coordinators, orchestration in `AppCoordinator`.
- SEO/PWA basics: keep robots.txt, sitemap.xml, manifest in `src/static`; use descriptive alt text; structured data planned for future.
- Paths: pages link to `styles/main.css` and `js/main.js`; build copies to `dist/`.
