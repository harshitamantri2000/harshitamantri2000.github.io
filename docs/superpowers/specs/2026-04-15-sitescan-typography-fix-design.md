# SiteScan General Fixes — Design Spec

**Date:** 2026-04-15  
**File:** `sitescan/index.html`

---

## Change 1 — Hero H1 font size
Add inline style to match TIP:
```html
<h1 class="cs-title reveal" style="font-size: clamp(1.8rem, 4.5vw, 2.2rem);">
```

## Change 2 — Cover image
`ss_cover.png` → `ss_v2_summary.png` (matches homepage card).

## Change 3 — Hero subtitle
Replace with homepage version:
> "Redesigned a B2B compliance scanning tool built for payment gateway companies like Razorpay to verify merchant websites against regulatory requirements."

## Change 4 — Hero tag
Remove "Senior Product Designer". Tag becomes:
> `IDfy · Dec 2024`

## Change 5 — Meta row (3 columns, TIP structure)
Replace 5-item meta with:

| Role | Timeline | Team |
|---|---|---|
| Lead Product Designer | Dec 2024 | 2 PMs |
| | | Ops Team |
| | | 4 Engineers |

Use `cs-meta-val--grid` + `<span>` per line for Team column.

## Change 6 — Pastel highlights throughout body text
Add `hl-*` spans to key phrases in `<p>` text across all sections:
- `hl-yellow` — stats/numbers ("15–20 verifications daily", "60%")
- `hl-teal` — positive outcomes, goals
- `hl-pink` — pain points / friction ("slow, hard to use")
- `hl-lavender` — key concepts / named features
- `hl-rose` — strong negatives

## Change 7 — Workflow section (Users): cards → step flow
Replace 4 emoji-numbered cards with a horizontal step-flow layout:
`Review → Scan → Download → Submit`
No emojis. Use a simple CSS step progression with connecting arrows/lines.

## Change 8 — "What I Found" (Research): cards → insight list
Remove emoji icons. Switch to a bold-numbered insight format:
- Large number (01, 02…) as visual anchor
- Insight title prominent
- Description below in smaller text
Makes findings feel like research conclusions, not feature bullets.

## Change 9 — Highlight "users didn't need more features" line
Wrap the italic callout at end of Research section with `hl-teal`:
> `<span class="hl-teal">Users didn't need more features.</span> They needed the tool to be reliable, and give them accuracy.`

## Change 10 — Merge section 06 (Iteration & Feedback) into section 05 (V1)
Section 05 becomes the full V1 story:
- Label stays `05 · V1`
- After the existing V1 content (Scan Initiation, Results), add the two concepts as subsections: "Concept 1" and "Concept 2 (Winner)" and "Preview (Policy Page)"
- Remove section 06 as a standalone section
- Renumber sections 07–10 → 06–09

## Change 11 — Usability Testing: restructure to impact-driven
Lead with the outcomes first (what changed for users), then support with what worked and what needed work. Structure:
1. Opening: what the testing revealed overall (1–2 sentences)
2. Outcomes: key behavioural shifts / metrics
3. What worked (plain list, no emojis)
4. What still needed work (plain bordered list, no emojis — Change 12)

## Change 12 — "What still needed work": remove emojis, plain list
Replace ⚠️/✏️ cards with `cs-plain-list` style (bordered rows, numbered).

---

## Scope
All changes in `sitescan/index.html` only. No new CSS classes needed — uses existing patterns from TIP/shared stylesheet.
