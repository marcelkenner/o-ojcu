# Project Overview
- Purpose: Marketing website for the memoir “O ojcu, który nigdy nim nie był”; long-scroll home plus legal pages; mobile-first and SEO-focused.
- Tech stack: Plain HTML + CSS + TypeScript compiled with `tsc` to ES modules (no bundler). Node scripts copy static assets to `dist/`.
- Key docs: `AGENTS.md` (rules), `website_plan.md` (content/UX blueprint), `docs/website_repro_playbook.md` (build/process).
- Architecture: `src/pages` HTML, `src/styles` CSS split into components/pages, `src/ts` modular classes (utils/ui/form/analytics), `src/assets` media placeholders, `src/static` root files, `scripts` build/clean, `dist` output.
- Design constraints: mobile-first layouts, OOP-first code, keep files <300 lines, avoid god classes, follow ViewModel/Manager/Coordinator separation.
