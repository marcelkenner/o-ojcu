+=================================================================================================+
| SITE: O ojcu, który nigdy nim nie był                                                           |
| PURPOSE: emotionally hook + clarify audience + route to retailers + capture email (fragment)    |
| STACK: Next.js (App Router), SSR/SSG, fast, minimal JS, accessible, SEO-first                   |
+=================================================================================================+

GLOBAL DESIGN TOKENS / RULES (apply everywhere)
-----------------------------------------------------------------------------------------------
BACKGROUND:
  - Base: Dark grunge texture (Sepia/Charcoal/Concrete) #2b221a
  - Overlay: subtle vignette + noise (opacity 0.08–0.12)
  - Section separators: thin “scratched” line (1px, rgba(240,234,221,0.10))

TYPOGRAPHY (base, responsive):
  - Base body: 16px, line-height 1.5 (mobile & desktop)  [REQUIRED] :contentReference[oaicite:4]{index=4}
  - Titles serif: Playfair Display (or similar); Body sans: Inter/Roboto
  - H1: 64px/72px (desktop), 40px/46px (mobile)
  - H2: 40px/48px (desktop), 28px/34px (mobile)
  - H3: 24px/32px (desktop), 20px/28px (mobile)
  - Label/eyebrow: 12px/16px, uppercase, letter-spacing 0.12em
  - Body: 16px/24px; Small: 14px/22px; Micro: 12px/18px

COLOR PALETTE:
  - Cream text: #f0eadd (headings)
  - Light cream body: #d9cbb6 (paragraphs)
  - Muted line: rgba(240,234,221,0.20)
  - Accent gradient: #ff7e67 -> #ff9a8b (primary CTA)
  - Error: #ff4d4d; Success: #34d399 (used sparingly)
  - Accessibility: maintain contrast >= 4.5:1 normal text, 3:1 large text :contentReference[oaicite:5]{index=5}

SPACING SYSTEM (4-point grid):
  - Space scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120, 160
  - Section padding-y: 120px desktop, 80px mobile
  - Section gap (between sections): 160px desktop, 96px mobile

LAYOUT GRID:
  - Max content width: 1200px (xl), 1040px (lg)
  - Desktop side gutters: clamp(40px, 6vw, 96px)
  - Mobile gutters: 16px (standard) :contentReference[oaicite:6]{index=6}
  - 12-col grid desktop; 4-col grid mobile
  - Card radius: 16px (desktop), 14px (mobile)
  - Shadows: soft, large blur, low opacity (avoid harsh edges)

INTERACTIONS / TARGET SIZES:
  - Min tap/click target: 44x44px :contentReference[oaicite:7]{index=7}
  - Primary button padding: 14px 22px (min height 48px)
  - Secondary button padding: 12px 18px (min height 44px)
  - Inputs: height 48px, padding 12px 14px

CTA STRATEGY (hero):
  - 1 primary CTA, 1 secondary CTA that DOES NOT compete :contentReference[oaicite:8]{index=8}
  - Repeat CTAs after value blocks (Excerpt, Where to Buy, Footer)

SEO / INDEXING:
  - Mobile-first indexing: ensure mobile content parity + performance :contentReference[oaicite:9]{index=9}
  - Structured data recommended as part of modern content optimization :contentReference[oaicite:10]{index=10}
  - JSON-LD Book schema uses Schema.org Book type :contentReference[oaicite:11]{index=11}
  - Next.js supports OG images via opengraph-image/twitter-image conventions :contentReference[oaicite:12]{index=12}
  - robots.txt lives in app root (Next metadata convention) :contentReference[oaicite:13]{index=13}

ASSETS:
  - /public images served from public folder (Next) :contentReference[oaicite:14]{index=14}


====================================================================================================
DESKTOP VIEW (>= 1024px)  |  PAGE: "/" (ONE-PAGE MARKETING + ANCHORS)
====================================================================================================

+-------------------------------------------------------------------------------------------------+
| [Skip link] "Przejdź do treści" (visible on focus, top-left)                                    |
+-------------------------------------------------------------------------------------------------+
| STICKY HEADER (height: 72px, padding-x: 24px, blur bg, border-bottom 1px muted)                 |
| +---------------------------------------------------------------------------------------------+ |
| | LOGO (text) "O ojcu, który nigdy nim nie był" (Serif 18px)                                   | |
| | NAV (Sans 14px): [Dla kogo] [O książce] [Fragment] [W środku] [Autor] [Opinie] [Kup] [FAQ]  | |
| | RIGHT: [Secondary: "Darmowy fragment"] [Primary: "Gdzie kupić"]                              | |
| |       (Primary visually dominant; Secondary outline/ghost)                                   | |
| +---------------------------------------------------------------------------------------------+ |
| NOTES: Active section highlight (scroll-spy). On scroll down, header shrinks to 64px.          |
+-------------------------------------------------------------------------------------------------+

###############################################################################################
############################### HERO (ID: #top) ##############################################
###############################################################################################
[Section padding-top: 120px, padding-bottom: 120px]
[Layout: Flex Row | Left 58% / Right 42% | Gap: 64px | Align: center]

+---------------------------------------------------------------------------------------------+
| HERO CONTAINER (max-width 1200, margin auto, padding-x gutters)                             |
|                                                                                             |
|  LEFT (TEXT)                                                                                |
|  -----------------------------------------------------------------------------------------  |
|  EYEBROW / LABEL (Sans 12px, uppercase, tracking 0.12em, color: #d9cbb6)                     |
|    "NOWA POLSKA NON-FICTION"                                                                |
|    (margin-bottom: 24px)                                                                    |
|                                                                                             |
|  H1 (Serif 64px/72px, weight 700, color #f0eadd)                                            |
|    "O ojcu, który nigdy nim nie był"                                                        |
|    (margin-bottom: 16px)                                                                    |
|                                                                                             |
|  SUBTITLE (Sans 18px/28px, color #d9cbb6)                                                   |
|    "Intymna opowieść o polskim ojcostwie i jego braku"                                      |
|    (margin-bottom: 24px)                                                                    |
|                                                                                             |
|  LEAD (Sans 16px/26px, max-width 56ch, color #d9cbb6)                                       |
|    "Dla tych, którzy mieli ojca w domu, ale nigdy naprawdę obok siebie.                      |
|     Książka o mężczyźnie z małego miasteczka, emigracji, biedzie i agresji —                 |
|     i o dorosłym dziecku, które próbuje sobie z tym poradzić."                               |
|    (margin-bottom: 24px)                                                                    |
|                                                                                             |
|  SUPPORT (Sans 16px/26px, max-width 56ch, color #d9cbb6)                                    |
|    "To historia o dorastaniu w cieniu nieobecności, o wstydzie, ucieczce i powrotach.        |
|     O tym, co zostaje, kiedy nigdy nie usłyszałeś: „przepraszam”."                           |
|    (margin-bottom: 40px)                                                                    |
|                                                                                             |
|  CTA ROW (gap 16px)                                                                         |
|    [PRIMARY BUTTON] "Czytaj fragment online"                                                |
|      - min-height 48px, padding 14x22, radius 999px                                         |
|      - bg gradient #ff7e67->#ff9a8b, text #fff, shadow glow                                 |
|      - icon: download                                                                       |
|    [SECONDARY BUTTON] "Zobacz, gdzie kupić"                                                 |
|      - min-height 44px, padding 12x18, radius 999px                                         |
|      - bg transparent, border 1px rgba(240,234,221,.28), text #f0eadd                       |
|      - icon: arrow-down                                                                     |
|    (Primary + Secondary only; avoid competing CTAs) :contentReference[oaicite:15]{index=15}                     |
|                                                                                             |
|  MICROCOPY (Micro 12px/18px, color rgba(217,203,182,.85), margin-top 12px)                   |
|    "Darmowy fragment obejmuje Prolog i pełną scenę nocy z policją."                          |
|                                                                                             |
|  RIGHT (BOOK VISUAL)                                                                        |
|  -----------------------------------------------------------------------------------------  |
|  +----------------------------------------------+                                           |
|  | BOOK 3D RENDER / COVER IMAGE (max-width 420) |                                           |
|  | - container radius 18px, subtle inner glow   |                                           |
|  | - shadow: 0 28px 70px rgba(0,0,0,.55)        |                                           |
|  | - alt: "Okładka książki O ojcu, który..."    |                                           |
|  +----------------------------------------------+                                           |
|  BADGE (position: top-right of image)                                                        |
|    "PREMIERA 20XX" (Sans 12 uppercase, pill, bg rgba(0,0,0,.35), border muted)               |
+---------------------------------------------------------------------------------------------+

[Optional: subtle scroll hint chevron centered, margin-top 48px]


###############################################################################################
############################### SECTION 1: DLA KOGO (ID: #dla-kogo) ############################
###############################################################################################
[Padding-y: 120px | Section max-width 1000px | Align center]
[Header spacing: label->H2: 12px | H2->copy: 16px | copy->grid: 64px]

+---------------------------------------------------------------------------------------------+
| LABEL (Sans 12 uppercase): "DLA KOGO"                                                        |
| H2 (Serif 40/48): "Dla dorosłych dzieci trudnych ojców"                                     |
| Intro (Sans 16/26):                                                                         |
|   "Ta książka nie jest pisana przeciwko ojcom. Jest pisana dla tych, którzy dorośli obok     |
|    mężczyzn, którzy nie umieli być ojcami — i wciąż noszą w sobie ich głos, ich milczenie    |
|    albo ich krzyk."                                                                         |
|                                                                                             |
| GRID (2 columns x 2 rows, gap 30px, cards min-height 180px)                                 |
| +-------------------------------+  +-------------------------------+                        |
| | CARD (parchment bg #d9cbb6)   |  | CARD (parchment bg #d9cbb6)   |                        |
| | Icon (24px) + H3 (Serif 20)   |  | Icon (24px) + H3 (Serif 20)   |                        |
| | "Rozpoznasz go po krokach"    |  | "Jesteś terapeutą / nauczycielem"                       |
| | Body (Sans 14/22, #2b221a)    |  | Body (Sans 14/22, #2b221a)    |                        |
| | "Dorastałeś z ojcem, którego  |  | "Szukasz historii i języka,     |                       |
| |  wszyscy chwalili, a Ty       |  |  które polecisz podopiecznym."  |                       |
| |  bałeś się jego powrotu."     |  |                               |                        |
| +-------------------------------+  +-------------------------------+                        |
| +-------------------------------+  +-------------------------------+                        |
| | "Szukasz słów na napięcie"    |  | "Chcesz zrozumieć polskie ojcostwo"                     |
| | "Milczenie przy stole,        |  | "Bieda, wstyd, emigracja i cena,                         |
| |  wstyd i niewidzialność."     |  |  którą płacą dzieci."                                    |
| +-------------------------------+  +-------------------------------+                        |
|                                                                                             |
| NOTE (Small 14/22, color #d9cbb6, margin-top 40px):                                         |
|   "Jeśli czujesz jednocześnie złość, lojalność i próbę zrozumienia — jesteś w domu."        |
+---------------------------------------------------------------------------------------------+

[CARD STYLES]
- Padding: 24px (desktop), 18px (mobile)
- Border: 1px rgba(43,34,26,.18) + rough edge mask
- Shadow: 0 14px 40px rgba(0,0,0,.35)


###############################################################################################
############################### SECTION 2: O KSIĄŻCE (ID: #o-ksiazce) ##########################
###############################################################################################
[Layout: Flex Row Reverse | Text 58% / Visual 42% | gap 64px]
[Add a “facts box” for SEO + scannability]

+---------------------------------------------------------------------------------------------+
| LEFT (TEXT)                                                                                 |
|  LABEL: "O KSIĄŻCE"                                                                         |
|  H2: "Mozaika wspomnień, nie kronika"                                                       |
|  Body:                                                                                      |
|   "To nie jest poradnik, jak zostać lepszym ojcem.                                           |
|    To osobista opowieść dorosłego dziecka robotnika z małego miasteczka —                    |
|    o ojcu, który ciężko pracował, pił, wyjechał na emigrację i coraz mniej umiał być         |
|    z własnymi dziećmi."                                                                     |
|                                                                                             |
|  Body (2):                                                                                  |
|   "Zamiast linearnej biografii dostajesz mozaikę scen:                                       |
|    noc, w której dzwonię na policję; chowanie się pod stołem; pierwsze wyjazdy „na Zachód”;  |
|    ciszę przy stole; porównywanie ojców; wyprowadzkę i próbę przebaczenia."                  |
|                                                                                             |
| RIGHT (VISUAL + FACTS)                                                                      |
|  +----------------------------+     +-----------------------------+                          |
|  | PHOTO: book on surface     |     | FACTS BOX (parchment card)  |                          |
|  | radius 18px, shadow strong |     | "Forma: non-fiction / memoir"|                         |
|  | alt: "Książka na stole..." |     | "Język: polski"             |                          |
|  +----------------------------+     | "Liczba stron: XX"          |                          |
|                                     | "Wydawnictwo: [nazwa]"      |                          |
|                                     | "Rok: 20XX"                 |                          |
|                                     | "ISBN: [opcjonalnie]"       |                          |
|                                     +-----------------------------+                          |
+---------------------------------------------------------------------------------------------+


###############################################################################################
############################### SECTION 3: FRAGMENT (ID: #fragment) ############################
###############################################################################################
[Goal: emotional hook + lead capture + direct download]
[Layout: Text intro + Excerpt box + CTA row + optional email gate]

+---------------------------------------------------------------------------------------------+
| LABEL: "FRAGMENT"                                                                           |
| H2: "Noc, w której wybieram numer na policję"                                                |
| Intro (Sans 16/26, max 72ch):                                                                |
|   "To scena z zagranicy. Z zewnątrz — spełnione marzenie o lepszym życiu.                     |
|    W środku — coś, o czym dzieci nie mówią głośno."                                          |
|                                                                                             |
| EXCERPT BOX (max-width 900px, margin-top 32px)                                               |
| +-----------------------------------------------------------------------------------------+ |
| | (Parchment bg #d9cbb6, padding 32px, radius 16px)                                       | |
| | Proza (Serif 18/30, color #2b221a)                                                       | |
| |  "Jest noc, kraj, którego nazwy nie podam...                                             | |
| |   (...) Wybieram numer.                                                                  | |
| |   Policja po drugiej stronie odbiera szybciej, niż kiedykolwiek odbierał mój ojciec..."  | |
| |  [Show: 2–4 short paragraphs; add “Czytaj dalej online”]                                 | |
| +-----------------------------------------------------------------------------------------+ |
|                                                                                             |
| CTA ROW (gap 16px, margin-top 24px)                                                         |
|  [PRIMARY] "Czytaj fragment online"                                                         |
|  [SECONDARY] "Zobacz, gdzie kupić" (scroll to #kup)                                         |
| MICROCOPY (12/18): "Bez spamu. Możesz przeczytać online bez zapisu."                       |
|                                                                                             |
| OPTIONAL: Email capture inline (if you want “send me fragment”)                             |
|  +------------------------------------+  +-------------------------+                        |
|  | Input: "Twój e-mail" (48px height) |  | Button: "Wyślij mi fragment" |                   |
|  | placeholder: "jan@..."             |  | min 48px, gradient       |                        |
|  +------------------------------------+  +-------------------------+                        |
|  Checkbox (14px text): "Zgadzam się na..." + link to /polityka-prywatnosci                  |
|  Validation: inline error text (12/18, red) + success state (green)                         |
+---------------------------------------------------------------------------------------------+


###############################################################################################
############################### SECTION 4: CO W ŚRODKU (ID: #w-srodku) #########################
###############################################################################################
[Goal: structure + promise, no spoilers]
[Layout: 4 cards + epilogue banner]

+---------------------------------------------------------------------------------------------+
| LABEL: "W ŚRODKU"                                                                           |
| H2: "Cztery części. Jedna rana. Wiele powrotów."                                            |
| Intro: "Zamiast kalendarza — tematy. Zamiast chronologii — pamięć, która skacze."           |
|                                                                                             |
| CARDS GRID (2 columns desktop, 1 column mobile; gap 24px)                                   |
| +--------------------------------------+  +--------------------------------------+          |
| | Część I – Mężczyzna z miasta...      |  | Część II – Ojciec, któremu...        |          |
| | Bullets (Sans 14/22):                |  | Bullets:                              |          |
| | - fabryka, blok, pierwszy strach     |  | - brak pieniędzy, brak języka uczuć   |          |
| | - dziecko pod stołem                 |  | - dom bez miejsca na słabość          |          |
| +--------------------------------------+  +--------------------------------------+          |
| +--------------------------------------+  +--------------------------------------+          |
| | Część III – Emigrant...              |  | Część IV – Ojcostwo, które...        |          |
| | - baraki, polska tv, polski wstyd     |  | - wyprowadzka, porównania, granice    |          |
| | - dzieci jako tłumacze                |  | - przebaczenie „z ograniczoną...”     |          |
| +--------------------------------------+  +--------------------------------------+          |
|                                                                                             |
| EPILOGUE STRIP (full width, margin-top 40px)                                                 |
|  "Zamiast epilogu — To nie jest koniec. Ta historia żyje dalej w dorosłych dzieciach."       |
+---------------------------------------------------------------------------------------------+


###############################################################################################
############################### SECTION 5: AUTOR (ID: #autor) ##################################
###############################################################################################
[Layout: 2 columns | photo 36% / text 64%]
[Add credibility & human voice]

+---------------------------------------------------------------------------------------------+
| LABEL: "AUTOR"                                                                              |
| H2: "Dlaczego to napisałem?"                                                                |
| +---------------------------+  +----------------------------------------------------------+ |
| | PHOTO (author, 320–380px) |  | Body (Sans 16/26):                                      | |
| | radius 18px, shadow       |  | "Dorastałem w domu, w którym ojciec wracał z pracy       | |
| | alt: "Zdjęcie autora"     |  |  zmęczony, milczący albo pijany...                       | |
| +---------------------------+  |  Napisałem tę książkę, żeby nazwać to, co było uciszane,  | |
|                                |  i dać język dorosłym dzieciom trudnych ojców."           | |
|                                |                                                          | |
|                                | Bullet list (gap 8px):                                   | |
|                                |  - nazwać intuicję i napięcie w ciele                     | |
|                                |  - pokazać kontekst: bieda, wstyd, emigracja              | |
|                                |  - dać słowa bez sentymentalizmu                           | |
|                                |                                                          | |
|                                | Mini bio (Small 14/22):                                   | |
|                                |  "[Imię i nazwisko] — [1–2 zdania o Tobie]."               | |
|                                +----------------------------------------------------------+ |
+---------------------------------------------------------------------------------------------+


###############################################################################################
############################### SECTION 6: OPINIE (ID: #opinie) ################################
###############################################################################################
[Layout: 3 cards desktop (or slider), 1 card mobile]
[Social proof boosts trust + conversion]

+---------------------------------------------------------------------------------------------+
| LABEL: "OPINIE"                                                                             |
| H2: "Co mówią czytelnicy"                                                                   |
| TESTIMONIAL CARDS (each: padding 24px, radius 16px, bg rgba(240,234,221,.06))               |
| +---------------------------+ +---------------------------+ +---------------------------+    |
| | "Skąd znałeś mojego ojca?"| | "Historia setek mieszkań" | | "Pozwala zostać w prawdzie"|    |
| | — Marta, 35               | | — Paweł, 40               | | — Anonimowo               |    |
| +---------------------------+ +---------------------------+ +---------------------------+    |
| CTA (center, margin-top 32px): [Secondary "Przeczytaj fragment"] [Primary "Gdzie kupić"]    |
+---------------------------------------------------------------------------------------------+


###############################################################################################
############################### SECTION 7: GDZIE KUPIĆ (ID: #kup) ##############################
###############################################################################################
[Goal: frictionless outbound clicks + clear disclaimers]
[Layout: retailer tiles with logos + buttons]

+---------------------------------------------------------------------------------------------+
| LABEL: "KUP"                                                                                |
| H2: "Gdzie kupić książkę?"                                                                  |
| Intro: "Zakupu dokonujesz w wybranej księgarni. Ta strona pomaga Ci tam trafić."            |
|                                                                                             |
| RETAILER GRID (3 columns desktop / 2 tablet / 1 mobile; gap 16–24px)                        |
| +------------------------+ +------------------------+ +------------------------+             |
| | [Empik logo]           | | [TaniaKsiazka logo]    | | [Wydawca logo]         |             |
| | Button: "Kup w Empiku" | | Button: "Kup w..."     | | Button: "Kup u wydawcy"|             |
| | Small: "otwiera nową"  | | Small: "otwiera nową"  | | Small: "otwiera nową"  |             |
| +------------------------+ +------------------------+ +------------------------+             |
|                                                                                             |
| NOTE (Micro 12/18): "Linki partnerskie: [tak/nie]. Oznaczenia zgodnie z prawem."            |
| (If affiliate: add label “Link afiliacyjny” next to retailer.)                               |
+---------------------------------------------------------------------------------------------+


###############################################################################################
############################### SECTION 8: FAQ (ID: #faq) ######################################
###############################################################################################
[Accordion; 8–12 questions; SEO long-tail; accessibility: proper button/aria-expanded]

+---------------------------------------------------------------------------------------------+
| LABEL: "FAQ"                                                                                |
| H2: "Najczęstsze pytania"                                                                   |
| ACCORDION (max-width 900px)                                                                 |
|  [Q1] "Czy muszę mieć trudnego ojca...?"  (toggle 44px min target) :contentReference[oaicite:16]{index=16}     |
|      A: "Nie. Jeśli dorastałeś w Polsce lat 80/90/2000..."                                  |
|  [Q2] "Czy ta książka atakuje ojców/mężczyzn?"                                               |
|      A: "Nie. Pokazuje rany i odpowiedzialność — jednocześnie."                             |
|  [Q3] "Czy to ciężka lektura?"                                                              |
|      A: "Nie jest lekka na plażę, ale nie jest katalogiem okrucieństw..."                   |
|  [Q4] "Czy to poradnik?"                                                                    |
|      A: "Nie. To język i historia, które pomagają podjąć własne decyzje."                   |
|  [Q5] "W jakim języku?"                                                                     |
|      A: "Po polsku."                                                                        |
+---------------------------------------------------------------------------------------------+


###############################################################################################
############################### SECTION 9: NEWSLETTER (ID: #newsletter) ########################
###############################################################################################
[Goal: capture + let users czytać fragment online + consent links]

+---------------------------------------------------------------------------------------------+
| LABEL: "NEWSLETTER"                                                                         |
| H2: "Chcesz przeczytać więcej?"                                                             |
| Body: "Zostaw mail, a wyślę Ci Prolog i pełną scenę nocy z policją.                          |
|        Od czasu do czasu dam znać o tekstach i spotkaniach."                                 |
|                                                                                             |
| FORM (max-width 720px)                                                                      |
|  +--------------------------------------+  +-----------------------------+                   |
|  | Email input (48px height)            |  | Submit: "Wyślij mi fragment"|                   |
|  | label: "E-mail" (12px)               |  | (48px, gradient)            |                   |
|  | help: "Nie wysyłam spamu." (12px)    |  | loading state: spinner      |                   |
|  +--------------------------------------+  +-----------------------------+                   |
|  Checkbox (required): "Akceptuję politykę prywatności" (links)                              |
|  Inline legal microcopy (12/18): "Wypis 1 klik."                                             |
|  Success: "Sprawdź skrzynkę. Jeśli nie ma — zajrzyj do spamu/oferty."                        |
+---------------------------------------------------------------------------------------------+


###############################################################################################
############################### FOOTER ########################################################
###############################################################################################
[Padding-y: 64px | columns: 3 | border-top muted]

+---------------------------------------------------------------------------------------------+
| LEFT:  © 20XX [Imię Nazwisko]                                                               |
| MID:   IG: @[handle]  TikTok: @[handle]  Kontakt: mail@...                                  |
| RIGHT: [Polityka prywatności] [Regulamin newslettera] [Dostępność]                           |
| Micro: "Ta strona nie sprzedaje bezpośrednio — przekierowuje do księgarni."                 |
+---------------------------------------------------------------------------------------------+

OVERLAYS / SYSTEM COMPONENTS (global)
-----------------------------------------------------------------------------------------------
1) COOKIE / CONSENT BANNER (if analytics/marketing cookies):
   - position fixed bottom; width min(960px, 100% - gutters*2); radius 16px
   - buttons: [Akceptuj] [Odrzuć] [Ustawienia] each >= 44px targets :contentReference[oaicite:17]{index=17}
2) TOASTS:
   - success/error messages for form submissions (aria-live)
3) MODAL (optional):
  - “Darmowy fragment” preview (first paragraph) + czytaj online button
4) 404 page:
   - link back to / + “Zobacz, gdzie kupić”


====================================================================================================
MOBILE VIEW (<= 640px)  | KEY DIFFERENCES (mobile-first)
====================================================================================================
- Gutters: 16px :contentReference[oaicite:18]{index=18}
- H1 shrinks to ~40px
- One column layout, image below title
- Sticky bottom bar (optional): [Fragment] [Kup] (both >=44px targets) :contentReference[oaicite:19]{index=19}

+-------------------------------------------------------------------------------------------------+
| HEADER (sticky 56px)  [Logo]                                   [☰ Menu]                        |
| Drawer menu: anchor links + CTAs                                                               |
+-------------------------------------------------------------------------------------------------+

HERO:
  - Label -> H1 -> subtitle -> lead -> Book image -> CTAs stacked
  - CTA stack:
      [PRIMARY 48px] Czytaj fragment online
      [SECONDARY 44px] Zobacz, gdzie kupić

Sections:
  - Cards become 1-column
  - Retailers become 1-column
  - Accordion remains single column with large tap areas :contentReference[oaicite:20]{index=20}


====================================================================================================
SUBPAGES (simple, fast, SEO-safe)
====================================================================================================

(1) "/polityka-prywatnosci"
+---------------------------------------------------------------------------------------------+
| H1: "Polityka prywatności"                                                                  |
| Content: structured headings (H2/H3), clear link text, contact, data retention, etc.        |
| Footer: same as main                                                                        |
+---------------------------------------------------------------------------------------------+

(2) "/regulamin-newslettera"
+---------------------------------------------------------------------------------------------+
| H1: "Regulamin newslettera"                                                                |
| Content: frequency, unsubscribe, provider, consent                                           |
| Footer                                                                                       |
+---------------------------------------------------------------------------------------------+

(3) Optional "/fragment" (SEO landing page)
+---------------------------------------------------------------------------------------------+
| H1: "Darmowy fragment książki: O ojcu, który nigdy nim nie był"                              |
| Short excerpt + download + email option + link to buy                                         |
| Internal links back to sections on "/"                                                       |
+---------------------------------------------------------------------------------------------+

SEO / META FILES (Next.js conventions to include)
-----------------------------------------------------------------------------------------------
- OG images: app/opengraph-image.(png|jpg) and app/twitter-image.(png|jpg) :contentReference[oaicite:21]{index=21}
- robots: app/robots.txt (or robots.ts) :contentReference[oaicite:22]{index=22}
- sitemap: app/sitemap.ts (generate URLs for / + legal + /fragment)
- public assets: /public/images/* :contentReference[oaicite:23]{index=23}
- JSON-LD: Schema.org Book (@type: Book) :contentReference[oaicite:24]{index=24}
  (Include name, author, inLanguage, datePublished, isbn if present, offers if you want.)
  If you later provide Google a Book feed / ReadAction, follow Google’s Book structured data guide :contentReference[oaicite:25]{index=25}
