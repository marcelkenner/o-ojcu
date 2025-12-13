Below is a **spacing system you can enforce** (design + dev) for this site. It’s built on:

* **4px base unit** (Tailwind’s default: 1 spacing unit = `0.25rem` = **4px**) ([v2.tailwindcss.com][1])
* Prefer **8px “macro rhythm”** (Material: components align to an **8dp baseline grid**, and they repeatedly use **8/16/24/40** spacing families) ([Material Design][2])

---

## 1) Core rule (the one rule everyone follows)

**Never use arbitrary spacing values.**
All padding/margin/gap must come from the scale below (exceptions: 1px borders, hairlines, and rare optical alignment tweaks).

Why this works: Tailwind’s spacing scale is reused across padding, margin, width/height, gap, translate, etc. ([v2.tailwindcss.com][1])

---

## 2) The spacing scale (tokens)

### 2.1 Numeric tokens (the “math layer”)

Use Tailwind defaults (4px base), but restrict what designers/devs can choose:

**Micro (inside text/UI details)**

* `space-1` = 4px
* `space-2` = 8px
* `space-3` = 12px
* `space-4` = 16px

**Core (most component padding / gaps)**

* `space-5` = 20px
* `space-6` = 24px
* `space-8` = 32px
* `space-10` = 40px
* `space-12` = 48px

**Layout (sections / page rhythm)**

* `space-16` = 64px
* `space-20` = 80px
* `space-24` = 96px
* `space-30` = 120px
* `space-40` = 160px

(These are all native Tailwind spacing values and remain proportional to the 4px base unit. ([v2.tailwindcss.com][1]))

### 2.2 Semantic tokens (the “meaning layer”)

These are the names you use in Figma + documentation (and optionally map to Tailwind utilities):

* `gutter` (page side padding): **16 / 24 / 40** depending on breakpoint
* `cardPad`: **24** desktop, **18–20** mobile
* `cardGap`: **16–24**
* `stackSm`: **12**
* `stackMd`: **16**
* `stackLg`: **24**
* `sectionPadY`: **80 mobile**, **120 desktop**
* `sectionGapY`: **96 mobile**, **160 desktop**
* `heroPadTop`: **120** (matches your ASCII)
* `heroPadBottom`: **80–120** (depends if hero is tall)

---

## 3) Layout spacing rules (containers, gutters, grids)

### 3.1 Page gutters (left/right padding)

Set gutters by breakpoint:

* Mobile (`<768`): **16px**
* Tablet (`≥768`): **24px**
* Large desktop (`≥1280`): **40px**

This mirrors the “standard margin” intuition you see in major systems (Material uses 16dp horizontal margins on mobile examples; and its responsive guidance uses margin/gutter families like 8/16/24/40). ([Material Design][2])
Apple also references a standard **16pt margin** pattern in widget layouts. ([Apple Developer][3])

### 3.2 Grid gaps (columns/rows)

* Default grid `gap`: **24px** (`space-6`)
* Dense grid `gap`: **16px** (`space-4`)
* Hero 2-col gap: **48px** (`space-12`) (gives the text breathing room against the book render)

### 3.3 Max content widths (readability)

Use max widths to prevent “wall of text”:

* Reading sections (About, Why, FAQ intro): max **~65–75ch** (implemented via container width or `prose`)

---

## 4) Component spacing rules (so everything feels consistent)

### 4.1 Cards (parchment + dark surface)

**Card padding**

* Desktop: `p-6` (24px)
* Mobile: `p-5` (20px)

**Card internal spacing**

* Title → body: `space-3` (12px)
* Body paragraphs: `space-4` (16px)
* Footer CTA row top margin: `space-6` (24px)

**Card-to-card gap in grids**

* `gap-6` (24px) default
* `gap-4` (16px) if you need density on mobile

### 4.2 Buttons / CTAs

* Button height: **48–56px** (your hero CTA can be 56px)
* Text padding-x: **20–24px**
* Icon gap: **8px**

Touch + accessibility note:

* WCAG 2.2 says pointer targets should be at least **24×24 CSS px** (with spacing exceptions). ([W3C][4])
* Material recommends **48×48dp** touch targets and typically **8dp+** space between them. ([Material Design][2])

So your spacing system rule for interactive clusters:

* **Minimum button height:** 48
* **Minimum gap between tap targets:** 8
* Prefer: 12–16 when you have room

### 4.3 Typography spacing (section headers)

Standard pattern per section:

* Eyebrow label → H2: `mt-0`, `gap-3` (12)
* H2 → intro paragraph: `mt-4` (16)
* Intro → content block: `mt-12` (48)
* Within content: paragraphs `mt-4` (16)

---

## 5) Section spacing (the page “rhythm”)

You already used:

* **Top padding 120px**
* **Section spacing 160px**

Lock it as a system:

### 5.1 Global section template

* `sectionPadY`:

  * Mobile: **80px** (`py-20`)
  * Desktop: **120px** (`py-30` custom or `py-[120px]` *only if you add it as a token*)
* `sectionGapY`:

  * Mobile: **96px** (`mt-24`)
  * Desktop: **160px** (`mt-40`)

### 5.2 Section-specific overrides

* **Hero**

  * `pt-30` (120px), `pb-20` to `pb-30` (80–120px)
  * Text block spacing inside hero:

    * Eyebrow → H1: 24
    * H1 → subtitle/lead: 32
    * Lead → body: 24
    * Body → CTAs: 48
* **Excerpt section**

  * Give the excerpt box extra air:

    * intro → excerpt box: 48–64
    * excerpt box padding: 32 desktop / 24 mobile
* **Buy section**

  * Grid gap: 16–24
  * Tile padding: 16–20
* **FAQ**

  * Accordion item padding-y: 16
  * Accordion gap between items: 8–12
* **Footer**

  * Top padding: 80
  * Link groups gap: 16

---

## 6) Implementation in Tailwind (strict + enforceable)

### Option A (recommended): keep Tailwind scale, add *semantic aliases*

Use Tailwind defaults (4px base unit) ([v2.tailwindcss.com][1]) and add a few named values for sections.

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      spacing: {
        // semantic layout tokens
        gutter: '1rem',        // 16px (mobile)
        'gutter-md': '1.5rem', // 24px
        'gutter-xl': '2.5rem', // 40px

        'section-y-mobile': '5rem',  // 80px
        'section-y-desktop': '7.5rem', // 120px
        'section-gap-mobile': '6rem',  // 96px
        'section-gap-desktop': '10rem' // 160px
      },
    },
  },
}
```

Then your `Section` component becomes trivial and consistent:

* Mobile: `px-gutter py-section-y-mobile`
* Desktop: `md:px-gutter-md md:py-section-y-desktop`
* Between sections: `mt-section-gap-mobile md:mt-section-gap-desktop`

### Option B: CSS variables for tokens (design-system style)

If you want single-source-of-truth tokens:

```css
:root{
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px;
  --space-5: 20px; --space-6: 24px; --space-8: 32px; --space-12: 48px;
  --space-20: 80px; --space-24: 96px; --space-30: 120px; --space-40: 160px;
}
```

---

## 7) “Non-negotiables” (what you enforce in PR reviews)

1. Only spacing tokens allowed (no random `17px`, `23px`).
2. Interactive elements:

   * min height 48
   * at least 8px separation in clusters ([Material Design][2])
3. Outer gutters must follow 16/24/40 family (breakpoint-based) ([Material Design][5])
4. All layout spacing should *mostly* sit on an 8-based rhythm (because your cards, grids, and sections will feel more deliberate). ([Material Design][2])