# Case Study Side Navigation — Design Spec
**Date:** 2026-04-14  
**Scope:** Both case studies — `bsa/index.html` and `sitescan/index.html`

---

## Goal

Add a fixed left-side navigation to each case study page that lists all section names, so design managers scanning the page can immediately understand the structure and depth of the case study without scrolling through the entire document.

---

## Behavior

### Visibility
- Hidden on initial page load (opacity: 0, pointer-events: none).
- Becomes visible (opacity: 1) after the user scrolls past the hero + cover area — specifically once the top of `.cs-body` enters the viewport.
- Transition: `opacity` over `300ms ease`.

### Scroll Spy
- As the user scrolls, the nav item corresponding to the section nearest the top of the viewport is marked active.
- Active state updates continuously while scrolling using an `IntersectionObserver` (or scroll event with threshold logic).
- Only one item is active at a time.

### Smooth Scroll
- Clicking a nav item smoothly scrolls to the corresponding section.
- Each `.cs-section` receives a unique `id` attribute derived from its section label (e.g. `id="overview"`, `id="problem"`).

---

## Structure

```html
<nav class="cs-sidenav">
  <ul class="cs-sidenav-list">
    <li><a href="#overview" class="cs-sidenav-link active">01 · Overview</a></li>
    <li><a href="#problem" class="cs-sidenav-link">02 · Problem</a></li>
    <!-- ...one item per cs-section -->
  </ul>
</nav>
```

- Added directly inside `<body>`, outside `.cs-body` and `.cs-hero`.
- Link text matches the existing `cs-section-label` text verbatim (e.g. `01 · Overview`).
- IDs on sections are slugified from the label text (lowercase, spaces/dots replaced with hyphens).

---

## Visual Design

### Position
- `position: fixed`
- `top: 50%`, `transform: translateY(-50%)` — vertically centred in the viewport
- `left: calc(50% - 480px)` — sits in the left gutter, outside the 760px content column
- Never overlaps content at standard widths

### Typography
- Font size: `11px`
- Letter spacing: `0.06em`
- Text transform: `uppercase`
- Font family: `var(--font-body)` (Inter)

### Colors
- Inactive link: `var(--tag-text)` (`#a5a5a5`)
- Active link text: `var(--grey)` (`#1f1f1f`)
- Active link left accent: `2px solid var(--teal)` (`#c0ddd0`) — via `border-left` + `padding-left`

### No background, no card, no shadow.

### Spacing
- `gap` between items: `16px`
- Active link `padding-left: 8px` to create visual offset from the border accent

---

## Responsive Behaviour

- Hidden (`display: none`) on screens narrower than `1100px` — not enough gutter space to display without overlapping content.
- No fallback needed; mobile users scroll linearly.

---

## Files Changed

| File | Change |
|------|--------|
| `bsa/index.html` | Add `cs-sidenav` nav element + `id` attributes on each `.cs-section` |
| `sitescan/index.html` | Same as above |
| `assets/css/style.css` | Add `.cs-sidenav` styles |
| `assets/js/main.js` | Add scroll spy + visibility toggle logic |

---

## Section IDs

### BSA (`bsa/index.html`)
| Label | ID |
|-------|----|
| 01 · Overview | `#s-overview` |
| 02 · Problem | `#s-problem` |
| 03 · Market Insights | `#s-research` |
| 04 · Who We Are Designing For? | `#s-users` |
| 05 · Solution Architecture | `#s-architecture` |
| 06 · Wireframes | `#s-wireframes` |
| 07 · Key Design Decisions | `#s-decisions` |
| 08 · From Data Dump to Decision Surface | `#s-analytics` |
| 09 · Challenges | `#s-challenges` |
| 10 · Impact | `#s-impact` |
| 11 · Key Takeaways | `#s-takeaways` |

### SiteScan (`sitescan/index.html`)
| Label | ID |
|-------|----|
| 01 · Context | `#s-context` |
| 02 · Problem | `#s-problem` |
| 03 · Who Are the Users? | `#s-users` |
| 04 · Research | `#s-research` |
| 05 · V1 — Cleanup & Task Flow Alignment | `#s-v1` |
| 06 · Iteration & Feedback | `#s-iteration` |
| 07 · V2 — Decision Support & Habit Shaping | `#s-v2` |
| 08 · Usability Testing After V2 | `#s-testing` |
| 09 · Impact | `#s-impact` |
| 10 · Key Takeaways | `#s-takeaways` |

---

## JavaScript Logic

1. On page load, build the sidenav list by reading all `.cs-section-label` elements and their parent `.cs-section` IDs.
2. Use `IntersectionObserver` on each `.cs-section` to detect which section is currently most visible.
3. On intersection change, update the active class on the corresponding sidenav link.
4. Observe `.cs-body` separately — when it enters the viewport, add `cs-sidenav--visible` class to trigger the fade-in.
5. On sidenav link click, call `element.scrollIntoView({ behavior: 'smooth' })`.
