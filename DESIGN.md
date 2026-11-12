---
name: OrgelEvent
description: Eerste editie van het Nederlandse orgelevenement — 29 mei 2027, Schiedam
colors:
  warm-parchment: "#FDFAF4"
  nave-cream: "#F4ECD6"
  vestry-green: "#1A5247"
  chancel-deep: "#0F3128"
  church-black: "#1A1912"
  pew-brown: "#4B4A3B"
  dust: "#7B7A6B"
  pipe-brass: "#A87328"
  loft-amber: "#C8963C"
  score-line: "#DDD4B0"
  tissue-paper: "#EDE7D0"
typography:
  display:
    fontFamily: "'Cormorant Garamond', Georgia, 'Times New Roman', serif"
    fontSize: "clamp(72px, 10vw, 140px)"
    fontWeight: 500
    lineHeight: 0.9
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'Cormorant Garamond', Georgia, 'Times New Roman', serif"
    fontSize: "clamp(30px, 3vw, 46px)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "0em"
  title:
    fontFamily: "'Cormorant Garamond', Georgia, 'Times New Roman', serif"
    fontSize: "24px"
    fontWeight: 500
    lineHeight: 1.15
  body:
    fontFamily: "'Jost', 'Helvetica Neue', system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.72
  label:
    fontFamily: "'Jost', 'Helvetica Neue', system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.1em"
rounded:
  none: "0"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "32px"
  xl: "48px"
  2xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.vestry-green}"
    textColor: "#ffffff"
    rounded: "{rounded.none}"
    padding: "10px 22px"
  button-primary-hover:
    backgroundColor: "{colors.chancel-deep}"
    textColor: "#ffffff"
    rounded: "{rounded.none}"
    padding: "10px 22px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.vestry-green}"
    rounded: "{rounded.none}"
    padding: "10px 22px"
  button-outline-hover:
    backgroundColor: "{colors.vestry-green}"
    textColor: "#ffffff"
    rounded: "{rounded.none}"
    padding: "10px 22px"
  input-field:
    backgroundColor: "{colors.warm-parchment}"
    textColor: "{colors.church-black}"
    rounded: "{rounded.none}"
    padding: "12px 14px"
---

# Design System: OrgelEvent

## Overview

**Creative North Star: "The Loft at Dusk"**

OrgelEvent's visual language is the view from the organ loft in the Grote of Sint-Janskerk at the last light of day: golden light raking across warm stone, the congregation below reduced to shapes, the air holding both ceremony and anticipation. The palette is not decorative — it is structural, borrowed from the materials of Dutch church interiors: aged parchment, pipe brass, vestry green, the deep chancel dark.

The system refuses modernity for its own sake. It is printed-programme precise: sharp corners everywhere, no radius, no shadows, no decoration that couldn't appear in a typeset pamphlet. Text is set for the reader who already cares — not coaxed, but trusted. The editorial voice is warm but never effusive. White space is deliberate; density appears only where content earns it.

Depth is achieved through tonal section shifts (parchment ground → nave cream → footer dark), horizontal rules, and typographic contrast — never through elevation, blur, or shadow.

**Key Characteristics:**
- Zero border-radius throughout; sharp corners as a system-wide invariant
- Two-font system: Cormorant Garamond (display, serif authority) + Jost (sans precision)
- Flat, no-shadow elevation replaced by tonal layering between sections
- Gold (pipe brass) as a rare accent: kickers, prices, dividers, decorative rules only
- Deep green as the action colour: all primary CTAs and interactive elements
- A single-page editorial long-scroll: hero → facts → intro → programme → musicians → exhibitors → practical → tickets → footer

## Colors

A five-role palette drawn from Dutch Reformed church interiors and historical print: parchment grounds, brass accents, verdant deep greens, warm ink, and scored-line dividers.

### Primary
- **Vestry Green** (`#1A5247`): The action and authority colour. Used on primary buttons, musician role labels, programme featured items, focus rings, and the footer background. Never used as a background on body content.
- **Chancel Deep** (`#0F3128`): The deepest green. Used as button hover state and footer dark-green elements. Not used as a standalone decorative element.

### Secondary
- **Pipe Brass** (`#A87328`): The accent. Used on kickers (section labels), ticket prices, decorative gold rules, the musicus gold bar, and finale programme items. The budget is tight: at most one or two brass touches per viewport.
- **Loft Amber** (`#C8963C`): Brighter brass, used sparingly for brass-on-green contrast needs.

### Neutral
- **Warm Parchment** (`#FDFAF4`): The primary background. Almost white, with a warm golden cast. Never pure white anywhere in the system.
- **Nave Cream** (`#F4ECD6`): Alternate section background. Used on the feiten strip, programma section, and ticket section to create cadence between sections.
- **Church Black** (`#1A1912`): Primary text. Near-black with a warm brown cast — not cold or pure black.
- **Pew Brown** (`#4B4A3B`): Mid-weight text. Used for body copy, secondary headings, and descriptive text.
- **Dust** (`#7B7A6B`): Light text. Used for captions, footnotes, secondary programme information, and footer text.
- **Score Line** (`#DDD4B0`): Primary rule/border. The warm beige of old score paper. Used on dividers, card borders, and section separators.
- **Tissue Paper** (`#EDE7D0`): Light rule. Used on header border and very subtle dividers.

### Named Rules
**The Brass Rarity Rule.** Pipe Brass (#A87328) appears in at most two places per viewport scroll. It signals "this matters" — kickers and prices and dividers — and loses that signal if overused.

**The No White Rule.** Pure `#ffffff` only appears as button text on dark backgrounds and inside the ticket form (`background: #fff`). Every background is Warm Parchment or deeper; cold white is an anti-reference.

## Typography

**Display Font:** Cormorant Garamond, Georgia, serif  
**Body Font:** Jost, Helvetica Neue, system-ui, sans-serif

**Character:** Cormorant Garamond carries the ceremony — it is a 16th-century chancery type with long, tapered serifs and pronounced optical modulation. Jost is its rational counterpart: a geometric sans with Protestant restraint. Together they re-create the typographic contract of a Dutch church programme: serif for the event, sans for the information.

### Hierarchy
- **Display** (500, clamp 72–140px, line-height 0.9, tracking −0.02em): Hero title only. Set tight enough that the descenders of "g" overlap the ascenders below. Never used at section level.
- **Headline** (500, clamp 30–46px, line-height 1.1): Section headings (h2). The natural ceiling for in-page titles; the small-screen minimum of 30px prevents crowding.
- **Title** (500, 24–28px, line-height 1.15): Programme event titles and musician names. Cormorant Garamond in this range reads as confident but subordinate to headlines.
- **Body** (400, 17px, line-height 1.72): All prose. 17px is intentionally above the browser default; the audience skews older and reads long text. Max line length ~65ch on the .intro-inner block.
- **Label** (500, 11–13px, letter-spacing 0.06–0.1em, uppercase, Jost): Section kickers, musicus roles, programme day labels, feit labels, ticket names as small caps. Uppercase only on Jost, never on Cormorant Garamond.

### Named Rules
**The Uppercase Jost Rule.** Uppercase tracking (0.06–0.1em) applies to Jost labels only. Cormorant Garamond headings are always set in title case at natural tracking or slightly negative. Never set Cormorant Garamond in full uppercase — it destroys the optical modulation.

**The Weight Floor Rule.** Jost 300 (light) is used only for subheadings (section-lead), programme descriptions, and ticket descriptions — text that is contextual, not primary. Navigation, labels, buttons, and form elements use 400 or 500 minimum.

## Layout

A centred editorial column of maximum 1160px with generous lateral padding that steps down at breakpoints. The page is a single-axis long scroll divided into thematic sections by alternating background tones.

**Container:** `max-width: 1160px`, centred, with padding: 48px (≥1025px) → 36px (769–1024px) → 20px (≤768px).

**Section cadence:** Sections alternate between Warm Parchment and Nave Cream backgrounds, divided by Score Line (`#DDD4B0`) horizontal rules. Vertical section padding is 96px (desktop) → 64px (mobile). This rhythm gives each section a felt weight proportional to its content.

**Internal grids:**
- Musicians: 3-equal-column portrait grid (desktop), single-column stacked (mobile ≤768px)
- Tickets: 50/50 split, info left + form right (desktop), stacked (mobile)
- Praktisch: 50/50 split, table left + location right (desktop), stacked (mobile)
- Programme: 148px time column + flexible content column (desktop), stacked with time inline (mobile)
- Feiten strip: 4 equal divisions (desktop), 2×2 grid (mobile)

**Spacing rhythm:** Increments of 4px. The major vertical rhythm unit is 96px (sections), 56px (between heading and content), 36px (between items), 24px (between label and value). No fractional values in the spacing system.

## Elevation & Depth

**The Flat-By-Default Rule.** This system has no box-shadows anywhere. Depth is never achieved through elevation. The header uses `backdrop-filter: blur(8px)` with a near-opaque background — this is the only atmospheric layer in the system, and it exists only to maintain the header's legibility over the hero photo.

Depth is conveyed through:
1. **Tonal section layering**: Warm Parchment → Nave Cream alternates create visual cadence without any elevation illusion
2. **Border contrast**: Score Line (`#DDD4B0`) rules divide surfaces at the same layer — the border is the depth signal, not a shadow beneath it
3. **Typography weight contrast**: Display → Headline → Title → Body → Label weight drop creates a felt depth of information hierarchy

## Shapes

**The Zero-Radius Rule.** No border-radius anywhere in the system. Every button, input, card, container, and image is strictly rectangular. This is not an oversight; it is the system's most recognisable invariant. The sharpness echoes stone arch geometry and the right angles of a printed programme. The only curved lines in the system are the letterforms themselves.

**Form language:** Stroke-weight used as language — a 1px Score Line border is neutral/passive, a 1.5px Vestry Green border is active/outlined, a 2px Pipe Brass rule is decorative/ceremonial.

**Recurring geometries:**
- The gold divider bar under musician portraits: 32px wide, 2px tall, Pipe Brass — a typographic ornament
- The belofte-item leader lines: 20px wide, 1px tall, Pipe Brass — a promise mark
- The finale programme separator with partial gold rule: a horizontal ornament that crowns the closing concert

## Components

### Buttons
**Sharp-edged and confident, like stamped type.**
- **Shape:** No border-radius (0px); rect corners are absolute
- **Primary:** Deep Vestry Green background (#1A5247), white text, Jost 500 14–15px, tracking 0.03em, padding 10–13px 22–28px; hover darkens to Chancel Deep (#0F3128) in 0.15s
- **Outline:** 1.5px Vestry Green stroke, Vestry Green text; hover fills to Vestry Green background with white text in 0.15s
- **Ghost (hero only):** No background, no border; white text at 75% opacity with a 1px white underline at 35% opacity; hover brightens text to 100% and border to 75%
- **Bestel (form submit):** Full-width, Jost 500 16px, Vestry Green, 16px 24px padding; hover darkens

### Inputs / Fields
**Clean and straightforward — the organ programme register as form.**
- **Style:** Warm Parchment background, 1px Score Line stroke, no border-radius
- **Typography:** Jost 400 16px, Church Black
- **Focus:** Border-color shifts to Vestry Green in 0.15s; no glow, no shadow
- **Select:** Custom chevron SVG in Dust colour, right-aligned; native appearance removed

### Navigation
**Sparse and deferential — a header that disappears into the page.**
- **Desktop:** Fixed top bar, Warm Parchment at 97% opacity with 8px backdrop blur; 64px height; logo in Cormorant Garamond 500 20px; nav links in Jost 400 15px, Pew Brown, hover to Church Black; primary CTA as button-primary
- **Mobile:** Hamburger replaces nav links at ≤768px; full-screen overlay from top in Warm Parchment; links in Jost 400 18px; CTA as full-width primary button

### Programme Rows
**A typeset concert programme — time column anchors the rhythm.**
- Two-column grid: 148px time column (Cormorant Garamond 26px 500, Pew Brown) + flexible content column (title + musician label + description text)
- Featured rows: programme uur changes to Vestry Green (not gold — gold is reserved for the finale)
- Finale row: Pipe Brass accents on uur, musicus label, and partial horizontal rule separator
- Stacks to single column on mobile with time displayed inline as flex row

### Musician Cards
**Portrait-led editorial cards — the photo carries the personality.**
- Full-bleed 3:4 portrait photograph, cropped center-top
- 32×2px Pipe Brass ornament bar beneath photo
- Cormorant Garamond 500 26px name; Jost 500 13px uppercase Vestry Green role label; Jost 400 16px description text
- No background card; musicians float directly on the page ground

### Fact Strip (Feiten-strip)
**A condensed event information band — the printed header card of the event.**
- Nave Cream background, Score Line border below; 4 equal columns (desktop) → 2×2 (mobile)
- Jost 500 11px uppercase Pipe Brass label; Cormorant Garamond 500 17px value

## Do's and Don'ts

### Do:
- **Do** use font-feature-settings `"liga" 1, "kern" 1` on all Cormorant Garamond headings — the font's ligatures (fi, fl, ff) are essential to its character.
- **Do** set text-rendering to `optimizeLegibility` on all headings; the font demands it.
- **Do** treat Pipe Brass as a punctuation accent: kickers, ornament bars, prices, and finale items only.
- **Do** maintain the Score Line (#DDD4B0) as the universal border/rule colour. Never use a grey or black border in the system.
- **Do** write buttons in title case (not uppercase), consistent with the system's typographic register.
- **Do** keep all section-lead text at Jost 300 — the light weight signals explanatory/contextual text, not primary content.

### Don't:
- **Don't** add border-radius anywhere. Not to cards, not to images, not to the ticket form, not to tags or chips. Zero radius is the system's most load-bearing rule.
- **Don't** introduce box-shadows. If depth is needed, achieve it through tonal layering (a Nave Cream background behind a Warm Parchment card, separated by a Score Line border).
- **Don't** use pure white (#ffffff) as a section background. Use Warm Parchment or Nave Cream.
- **Don't** use Cormorant Garamond in uppercase. Set it in title case or sentence case; it is an optical typeface that relies on cap-lowercase contrast.
- **Don't** introduce a third typeface. The two-font system is precisely calibrated; a third face dissolves the contrast.
- **Don't** use Pipe Brass as a background colour or a large fill area. It is an accent, not a base.
- **Don't** reduce Jost body weight below 300 or raise it above 500 for paragraph text. The 300–400 range is the system's prose register; 500 is for labels.
