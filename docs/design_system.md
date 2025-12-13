Below is a complete **A–Z design system** for your book site (dark grunge + parchment cards + salmon gradient CTA). It’s written as something you can hand to a designer + developer and implement directly in a Next.js + Tailwind/CSS-variables setup.

---

# A — Accessibility

### A1. Contrast rules (text + UI)

* **Normal text** must be **≥ 4.5:1** contrast ratio.
* **Large text** can be **≥ 3:1** (large ≈ 18pt regular or 14pt bold equivalent). ([W3C][1])
* Non-text UI (borders, focus rings, icons on buttons) should also be clearly perceivable (use strong contrast; don’t rely on subtle 1px lines only). (Use WCAG quick reference as baseline.) ([W3C][2])

### A2. Touch targets / hit areas

* WCAG 2.2 introduces **Target Size (Minimum)**: at least **24×24 CSS px** (with exceptions). ([W3C][3])
* For real-world usability we standardize higher:

  * **Buttons / primary controls:** **≥ 48×48** (Material guidance) ([m2.material.io][4])
  * **Minimum acceptable:** **44×44pt** (Apple HIG). ([Apple Developer][5])

### A3. Keyboard + focus

* Every interactive element must show a **visible focus indicator**. ([W3C][6])
* Ensure focus isn’t hidden behind sticky header/overlays (Focus Not Obscured). ([W3C][7])

### A4. Reduced motion

Respect user settings via `prefers-reduced-motion` to reduce/disable non-essential animations. ([developer.mozilla.org][8])

---

# B — Brand and mood

### B1. Brand personality keywords

* **Quiet intensity**, **honesty without melodrama**, **warmth without sugarcoating**
* Visual metaphor: **“dark room + warm parchment under a desk lamp.”**

### B2. Imagery rules

* Prefer **photographs with texture**: concrete/wood, warm low light, shallow depth-of-field.
* Book cover: always crisp, never over-filtered.
* Author photo: natural, not corporate; neutral background.

---

# C — Color system

### C1. Base palette (your given colors)

* `bg.900` (Grunge base): `#2b221a`
* `text.0` (Cream): `#f0eadd`
* `text.1` (Light cream): `#d9cbb6`
* `accent.0`: `#ff7e67`
* `accent.1`: `#ff9a8b`

### C2. Add supporting neutrals (needed for states)

Create a stable neutral ramp so hover/focus isn’t guesswork:

**Neutrals (overlay surfaces on dark bg)**

* `surface.0`: `rgba(240,234,221,0.04)` (cards on dark)
* `surface.1`: `rgba(240,234,221,0.07)` (hover cards)
* `surface.2`: `rgba(240,234,221,0.10)` (active)
* `line.0`: `rgba(240,234,221,0.16)` (borders)
* `line.1`: `rgba(240,234,221,0.28)` (strong borders)
* `shadow`: `rgba(0,0,0,0.55)`

**Parchment (light cards)**

* `paper.0`: `#d9cbb6` (main parchment fill)
* `paper.1`: `#e6dac7` (hover)
* `ink.0`: `#2b221a` (text on parchment)

### C3. Semantic color tokens

* `color.text.primary` → `text.0`
* `color.text.secondary` → `text.1`
* `color.bg.page` → `bg.900`
* `color.bg.card` → `surface.0`
* `color.bg.paperCard` → `paper.0`
* `color.border.default` → `line.0`
* `color.action.primary` → gradient(`accent.0`, `accent.1`)
* `color.action.secondary` → transparent + `line.1`
* `color.state.error` → `#ff4d4d`
* `color.state.success` → `#34d399`

### C4. Contrast QA

* Every new token combination must pass **4.5:1 / 3:1** rules. ([W3C][1])

---

# D — Density and spacing

### D1. Spacing scale (4-point grid)

Use multiples of 4 for consistency:

* `0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120, 160`

### D2. Page rhythm

* **Section padding-y:** `120px` desktop / `80px` mobile
* **Space between sections:** `160px` desktop / `96px` mobile
* **Mobile gutters:** `16px` (standard) ([W3C][9])

---

# E — Elevation (shadows) and depth

### E1. Shadow tokens (dark mode)

* `shadow.sm`: `0 10px 30px rgba(0,0,0,.28)`
* `shadow.md`: `0 18px 50px rgba(0,0,0,.38)`
* `shadow.lg`: `0 28px 70px rgba(0,0,0,.55)` (book hero)
* `glow.accent`: `0 0 24px rgba(255,126,103,.35)`

### E2. When to use

* Cards: `shadow.sm`
* Important cards (Excerpt box / Buy tiles): `shadow.md`
* Hero book image: `shadow.lg`
* CTA button: `shadow.sm + glow.accent`

---

# F — Fonts and typography

### F1. Base rules

* Body font should be **≥ 16px** and **line-height ~1.5** for readability. ([W3C][9])

### F2. Type scale (desktop / mobile)

* H1: `64/72` → mobile `40/46`
* H2: `40/48` → mobile `28/34`
* H3: `24/32` → mobile `20/28`
* Body: `16/24` (both)
* Small: `14/22`
* Micro: `12/18`
* Eyebrow label: `12/16`, uppercase, tracking `0.12em`

### F3. Usage rules

* **H1 only once** (hero).
* Each section has:

  * Eyebrow label (optional)
  * H2
  * 1 intro paragraph
* Parchment cards: headings serif, body sans (`ink.0`)

---

# G — Grid and layout

### G1. Container system

* `container.max`: 1200px
* `container.lg`: 1040px (text-heavy sections)
* `container.sm`: 900px (FAQ, excerpt)

### G2. Breakpoints (suggested)

* `sm`: 640
* `md`: 768
* `lg`: 1024
* `xl`: 1280

### G3. Mobile-first

Google uses the **mobile version** for indexing/ranking (mobile-first indexing). ([Google for Developers][10])
So the design system assumes:

* 1-column default
* then expands to 2-col / 3-col

---

# H — Headings and hierarchy

### H1. Visual hierarchy principles

* Important elements must be bigger/more contrast/positioned early.
* Use spacing and contrast to guide attention (never rely on just color). (Aligns with general accessibility + visual hierarchy guidance.) ([W3C][2])

### H2. Section header pattern (required)

* Label → H2 → intro → content block
  Spacing:
* Label→H2: 12px
* H2→Intro: 16px
* Intro→Content: 48–64px

---

# I — Iconography

### I1. Icon style

* Stroke icons (Lucide-like): 1.75–2px stroke.
* Sizes: 16 (inline), 20 (buttons), 24 (cards), 32 (feature highlights).

### I2. Placement

* Never as decoration-only if it competes with typography.
* If icon implies meaning, pair with text (don’t rely on icon alone).

---

# J — JSON-LD and structured data (SEO-aligned)

### J1. Book structured data (recommended)

Use schema.org vocabulary and follow Google’s structured data guidance. ([Google for Developers][11])
For book-specific guidance (especially if you ever provide a feed/ReadAction): ([Google for Developers][12])

**Minimum JSON-LD for your landing page**

* `@type: Book`
* `name`
* `author`
* `inLanguage: "pl"`
* `datePublished` (when known)
* `isbn` (prefer ISBN-13; Google notes ISBN-10 not accepted for their book feed) ([Google for Developers][12])
* Optional: `workExample`, `publisher`, `offers` (if you want to model retailers)

---

# K — Keyboard, focus, and states

### K1. Focus ring token (must be visible)

* Focus ring: `2px solid rgba(255,154,139,0.95)`
* Focus offset: `3px`
  This supports “Focus Visible” requirements. ([W3C][6])

### K2. Hover/active states

* Buttons: brighten gradient or add subtle overlay
* Cards: background `surface.0 → surface.1`
* Links: underline appears on hover + focus

### K3. Disabled states

* Reduce opacity to 0.5 AND keep contrast readable.
* Cursor `not-allowed`
* Ensure focus doesn’t land on disabled elements.

---

# L — Links

### L1. Link styling

* Default: `text.0` + underline with `rgba(240,234,221,0.35)`
* Hover: underline becomes stronger `rgba(240,234,221,0.65)`
* Focus: add focus ring around link (not just underline)

### L2. External links (retailers)

* Add an external icon
* Use microcopy “otwiera nową kartę” for accessibility (optional)

---

# M — Motion system

### M1. Durations + easing

* `fast`: 120ms (hover)
* `base`: 180ms (small transitions)
* `slow`: 280ms (modals/section reveals)
* Easing: `cubic-bezier(0.2, 0.8, 0.2, 1)`

### M2. Reduced motion

If `prefers-reduced-motion: reduce`, turn off parallax/scroll animations and replace with opacity-only or none. ([developer.mozilla.org][8])

---

# N — Navigation

### N1. Sticky header

* Height: 72px desktop / 56px mobile
* Contains anchor links to sections + 1 primary CTA
* Ensure focus isn’t obscured by sticky header (WCAG 2.2 focus not obscured). ([W3C][7])

### N2. One-page anchors and SEO reality

Google warns that URL fragments (`#...`) are often not indexable as separate pages. ([Google for Developers][10])
**Design system rule:** anchors are for UX, but create at least these subpages for SEO:

* `/fragment`
* `/polityka-prywatnosci`
* `/regulamin-newslettera`

---

# O — Overlays (modal, toast, cookie)

### O1. Modal

* Max width: 720px
* Padding: 24–32px
* Backdrop: rgba(0,0,0,0.6) + blur(6px)
* Close button ≥ 44×44 (touch target guidance). ([Apple Developer][5])

### O2. Toast

* Position: bottom-right desktop / bottom-center mobile
* Auto-dismiss: 5–7s
* Must be announced for screen readers (`aria-live="polite"`)

### O3. Cookie consent (only if needed)

* Avoid intrusive interstitial experiences; align with “good page experience”. ([Google for Developers][13])

---

# P — Performance and page experience

### P1. Core Web Vitals

Google recommends achieving good Core Web Vitals and notes they’re used by ranking systems. ([Google for Developers][14])

**Design system performance rules**

* No huge background videos.
* Optimize images (next/image), lazy-load below the fold.
* Keep animation lightweight.
* Avoid large third-party scripts.

---

# Q — Quality checklist (Design QA)

**Before shipping any component**

* Contrast passes 4.5:1 / 3:1 rules. ([W3C][1])
* Target size meets at least WCAG min and preferably 44–48. ([W3C][3])
* Keyboard focus visible and not obscured. ([W3C][6])
* Reduced motion supported. ([developer.mozilla.org][8])

---

# R — Responsive rules

### R1. Mobile baseline

* Gutters: 16px ([W3C][9])
* Buttons: stacked, full width
* Cards: single column

### R2. Desktop enhancements

* Hero: 2-col, 58/42 split
* “Dla kogo” cards: 2×2
* Retailers: 3 columns

---

# S — Surfaces (cards, sections)

### S1. Dark surface cards

* Background: `surface.0`
* Border: `line.0`
* Radius: 16px
* Padding: 24px desktop / 18px mobile

### S2. Parchment cards

* Background: `paper.0`
* Text: `ink.0`
* Rough edges: subtle mask texture
* Shadow: `shadow.sm`

**Use parchment for:**

* “Dla kogo” cards
* Facts box
* Excerpt box
* Retailer tiles (optional)

---

# T — Typography components

Create *components* for typography so the site stays consistent:

* `<H1 />` — only hero
* `<H2 />` — section headings
* `<Eyebrow />` — small uppercase label
* `<Lead />` — hero lead / section intro
* `<Body />` — default paragraphs
* `<Quote />` — excerpt and testimonials (serif, higher line-height)

---

# U — UI components (complete list)

Below is the “library” you implement in `src/components/ui/`.

## U1. Button

**Variants**

* `primary` (gradient)
* `secondary` (outline)
* `ghost` (text-only)
* `link` (underline)

**Sizes**

* `lg`: min-h 56 (hero)
* `md`: min-h 48 (default)
* `sm`: min-h 44 (minimum) ([Apple Developer][5])

**States**

* hover: +6% brightness
* active: press translateY(1px)
* focus: focus-ring token
* disabled: opacity 0.5 + no hover

## U2. Link

* Underline on hover/focus
* External link indicator optional

## U3. Card

* `surface` vs `paper`
* optional header/footer slots

## U4. Badge

* “Premiera 20XX”
* Pill, 12px uppercase

## U5. Section

* Standard padding-y + anchor offset
* Built-in `id` and scroll-margin-top (so header doesn’t cover target)

## U6. Container

* `sm` 900, `md` 1040, `lg` 1200

## U7. Accordion (FAQ)

* Button targets ≥ 44 high, accessible toggle (aria-expanded). ([Apple Developer][15])

## U8. Form elements

* TextInput (48px)
* Checkbox (min 24×24, label clickable; aim bigger)
* Inline error/success text

## U9. RetailerTile

* Logo slot + price/format slot (optional) + button
* “otwiera nową kartę” microcopy

## U10. TestimonialCard

* Quote + attribution

## U11. ExcerptBox

* Serif quote style, “Czytaj dalej w PDF” link

## U12. Header / Footer

* Sticky header with CTA
* Footer with legal links

## U13. Toast + Modal

* Standard overlay tokens
* Reduced motion support ([developer.mozilla.org][8])

---

# V — Voice, writing, and microcopy

### V1. Copy rules

* Polish, intimate, concrete, short sentences.
* Avoid marketing clichés (“zmieni Twoje życie”).
* Use **microcopy** to remove fear:

  * “Bez spamu.”
  * “Wypis 1 klik.”
  * “Ta strona przekierowuje do księgarni.”

### V2. CTA text patterns

Hero best practice: keep a **single clear CTA** or at most a **primary + non-competing secondary**. ([prismic.io][16])
So:

* Primary: “Pobierz darmowy fragment (PDF)”
* Secondary: “Zobacz, gdzie kupić”

---

# W — Web + SEO assets (part of the design system)

### W1. Titles + snippets

Google explains how title links/snippets work and how to influence them:

* Title links guidance ([Google for Developers][17])
* Meta description/snippet guidance ([Google for Developers][18])

**Design system rule:** each route has:

* Unique `<title>`
* Compelling meta description (“pitch”)

### W2. OG / social share imagery

Next.js supports file conventions for Open Graph & Twitter images per route segment. ([nextjs.org][19])
**Design system deliverables:**

* Default OG image (book cover + title on grunge bg)
* Section OG variants (optional): `/fragment`

### W3. Structured data

Use schema.org and follow Google’s structured data docs. ([Google for Developers][11])

---

# X — “X-factor” components (optional but powerful)

* **Sticky mobile bottom bar** (only on mobile):

  * Left: “Fragment”
  * Right: “Kup”
  * Both ≥ 48px height (touch-friendly). ([m2.material.io][4])
* **In-page progress indicator** (thin top bar) for long scroll

---

# Y — Your implementation (tokens in code)

## Y1. CSS variables (drop-in)

```css
:root {
  --bg-900: #2b221a;

  --text-0: #f0eadd;
  --text-1: #d9cbb6;

  --paper-0: #d9cbb6;
  --paper-1: #e6dac7;
  --ink-0: #2b221a;

  --accent-0: #ff7e67;
  --accent-1: #ff9a8b;

  --surface-0: rgba(240,234,221,0.04);
  --surface-1: rgba(240,234,221,0.07);
  --surface-2: rgba(240,234,221,0.10);

  --line-0: rgba(240,234,221,0.16);
  --line-1: rgba(240,234,221,0.28);

  --shadow-sm: 0 10px 30px rgba(0,0,0,.28);
  --shadow-md: 0 18px 50px rgba(0,0,0,.38);
  --shadow-lg: 0 28px 70px rgba(0,0,0,.55);

  --focus: rgba(255,154,139,0.95);

  --r-sm: 14px;
  --r-md: 16px;
  --r-lg: 18px;
}
```

## Y2. Reduced motion snippet

```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.001ms !important; transition-duration: 0.001ms !important; }
}
```

(Driven by `prefers-reduced-motion` behavior.) ([developer.mozilla.org][8])

---

# Z — Z-index + layering map

* `z.base`: 0
* `z.header`: 50
* `z.modalBackdrop`: 80
* `z.modal`: 90
* `z.toast`: 100
* `z.cookie`: 110

Also ensure focus isn’t hidden behind header overlays (WCAG 2.2 focus not obscured). ([W3C][7])
