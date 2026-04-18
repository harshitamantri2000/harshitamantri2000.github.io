# AI Section Design Spec
**Date:** 2026-04-18  
**Status:** Approved

---

## Goal

Add a new "How I use AI" section to the portfolio homepage, placed after the "Also Made" bento grid. The section showcases 3 real AI-assisted workflows/outputs to demonstrate that Harshita actively integrates AI into her design practice — not as a buzzword, but with concrete proof.

---

## Placement

After the `<section class="also-made">` block, before the `.breaker` paragraph.

---

## Section Header

- Label text: `"How I use AI"`
- Styled identically to existing `also-made-label` / `meet-designer-label` — small caps, subdued, above the rows

---

## Layout

3 editorial rows. Each row is full-width with a ~50/50 split between image and text. Rows alternate image/text position (left/right). A thin 1px horizontal divider separates each row. On mobile, each row stacks vertically with image above text.

**Alternation:**
- Row 1: image left, text right
- Row 2: text left, image right
- Row 3: image left, text right

---

## Row Content

### Row 01 — Figma Make
- **Number:** `01 —`
- **Title:** `Early concept exploration with Figma Make`
  - "Figma Make" wrapped in `<span class="hl-lavender">`
- **Description:** Used AI-generated interactions to rapidly test layout and flow ideas before committing to high-fidelity screens. Cut early exploration time dramatically.
- **Tags:** `Figma Make · Prototyping`
- **Tag color:** lavender-toned pill
- **Image:** placeholder — user will swap in Figma Make screenshot/output

### Row 02 — Antgravity + Claude
- **Number:** `02 —`
- **Title:** `Vibe designed this very site`
  - "this very site" wrapped in `<span class="hl-teal">`
- **Description:** Designed and shipped entire flows and pages — from layout decisions to pushing to git — without writing a line of code manually.
- **Tags:** `Claude · GitHub`
- **Tag color:** teal-toned pill
- **Image:** placeholder — user will swap in screenshot of Antgravity IDE / portfolio in action

### Row 03 — Multi-agents / Claude
- **Number:** `03 —`
- **Title:** `Claude as my design partner`
  - "design partner" wrapped in `<span class="hl-pink">`
- **Description:** Content writing, research synthesis, persona building, and running usability test scenarios — all with Claude as a collaborative thinking partner.
- **Tags:** `Claude · Research`
- **Tag color:** pink-toned pill
- **Image:** placeholder — user will swap in persona output / multi-agent screenshot

---

## Visual Style

- **Image cards:** rounded rectangle, `border-radius: 16px`, placeholder background color per row (lavender / mint / pink tint). No device frame. Clean image edge-to-edge within the card.
- **Number:** small, italic, grey — e.g., `font-style: italic; color: #aaa; font-size: 0.8rem`
- **Title:** large bold, same weight as project headings
- **Description:** muted grey, same size as `.project-desc`
- **Tag pills:** `border-radius: 999px`, colored background matching the row's highlight color, small font
- **Dividers:** `1px solid` subtle grey between rows

---

## Highlight Color Mapping

| Row | Keyword | Class |
|-----|---------|-------|
| 01 | Figma Make | `hl-lavender` |
| 02 | this very site | `hl-teal` |
| 03 | design partner | `hl-pink` |

---

## Responsive Behavior

- Desktop: 50/50 two-column grid per row
- Mobile: single column, image stacks above text

---

## Out of Scope

- No hover animations (keep it static for now)
- No links/CTAs on individual rows
- Rows 4 and 5 (test cases / QA) deferred — not included in this build
