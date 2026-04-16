# Footer Quick Access — Design Spec
_Date: 2026-04-15_

## Problem

The portfolio's Resume and Email links currently live in the footer, equal in weight to LinkedIn and Behance. Recruiters and hiring managers who land on the page have to scroll to the bottom to find them — a missed opportunity given that these are the two most actionable links on the page.

## Goal

Surface Resume and Email in the intro section (top of page) so they are immediately visible on load, without disrupting the existing minimal aesthetic.

## Approach

**Option A — Pills in the intro row (chosen)**

Add a `div.intro-actions` as a third flex child inside the existing `.intro` row. It aligns to the far right, vertically centered with the avatar and name block.

The footer retains LinkedIn and Behance. Resume and Email remain in the footer too (no removal), but the new pills are the primary quick-access point.

## Layout

```
[ avatar ]  [ name / designation / tags ]  [ Email me ]  [ Resume ↓ ]
```

- `.intro` is already `display: flex; align-items: center`
- `.intro-actions` uses `margin-left: auto` to push to the right
- Two pills sit side by side with `gap: 10px`

## Visual Style

| Property        | Value                                      |
|-----------------|--------------------------------------------|
| Border          | `1px solid var(--tag-border)` at rest      |
| Background      | `Email me` — transparent; `Resume ↓` — `rgba(192, 221, 208, 0.3)` (teal at 30%) |
| Border-radius   | `20px` (pill)                              |
| Font size       | `13px`                                     |
| Color           | `var(--sub-text)` (#666666)                |
| Padding         | `8px 16px`                                 |

## Animations

| State     | Effect                                                              |
|-----------|---------------------------------------------------------------------|
| Default   | Border `var(--tag-border)`, no shadow, no transform                |
| Hover     | Border → `var(--grey)`, `translateY(-2px)`, subtle box-shadow      |
| Transition| `all 0.25s ease`                                                    |

## Responsive

On mobile (≤600px), `.intro-actions` moves below the name/designation block by switching `.intro` to `flex-wrap: wrap`. The pills center-align below the text, consistent with how the intro already stacks on small screens.

## Files Affected

- `index.html` — add `.intro-actions` markup with two `<a>` tags
- `assets/css/style.css` — add `.intro-actions`, `.intro-btn` styles and hover animations; add mobile breakpoint rule

## Out of Scope

- No changes to the footer links (they remain as-is)
- No sticky/floating variant
- No icon additions
