# Case Study Side Navigation — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a fixed left-side section navigation to both case study pages (BSA and SiteScan) that fades in after scrolling past the hero, highlights the active section as the user scrolls, and smooth-scrolls to a section on click.

**Architecture:** Each `cs-section` gets a unique `id`. A `cs-sidenav` nav element (added to each case study HTML) lists links to those sections. CSS positions it in the left gutter, hidden by default. JS handles three things: fade-in visibility once `.cs-body` enters the viewport, scroll spy via `IntersectionObserver` to track the active section, and smooth scroll on link click.

**Tech Stack:** Vanilla HTML/CSS/JS. `IntersectionObserver` API. No dependencies.

---

## File Map

| File | Action | Responsibility |
|------|--------|----------------|
| `bsa/index.html` | Modify | Add `id` to each `.cs-section`, add `cs-sidenav` nav element |
| `sitescan/index.html` | Modify | Same as above |
| `assets/css/style.css` | Modify | Add `.cs-sidenav` styles (position, typography, active state, fade-in, responsive hide) |
| `assets/js/main.js` | Modify | Add visibility toggle + scroll spy + smooth scroll logic |

---

## Task 1: Add section IDs to `bsa/index.html`

**Files:**
- Modify: `bsa/index.html`

Each `.cs-section` div gets an `id` so nav links can target them.

- [ ] **Step 1: Add IDs to each section**

In `bsa/index.html`, update the opening tag of each `<div class="cs-section">` as follows:

```html
<!-- Overview -->
<div class="cs-section" id="s-overview">

<!-- Problem -->
<div class="cs-section" id="s-problem">

<!-- Market Insights -->
<div class="cs-section" id="s-research">

<!-- Who We Are Designing For? -->
<div class="cs-section" id="s-users">

<!-- Solution Architecture -->
<div class="cs-section" id="s-architecture">

<!-- Wireframes -->
<div class="cs-section" id="s-wireframes">

<!-- Key Design Decisions -->
<div class="cs-section" id="s-decisions">

<!-- From Data Dump to Decision Surface -->
<div class="cs-section" id="s-analytics">

<!-- Challenges -->
<div class="cs-section" id="s-challenges">

<!-- Impact -->
<div class="cs-section" id="s-impact">

<!-- Key Takeaways -->
<div class="cs-section" id="s-takeaways">
```

- [ ] **Step 2: Add the sidenav element**

Add this block directly inside `<body>`, just before `<!-- Nav -->`:

```html
<!-- Side Nav -->
<nav class="cs-sidenav" aria-label="Case study sections">
  <ul class="cs-sidenav-list">
    <li><a href="#s-overview"     class="cs-sidenav-link">01 · Overview</a></li>
    <li><a href="#s-problem"      class="cs-sidenav-link">02 · Problem</a></li>
    <li><a href="#s-research"     class="cs-sidenav-link">03 · Market Insights</a></li>
    <li><a href="#s-users"        class="cs-sidenav-link">04 · Who We're Designing For</a></li>
    <li><a href="#s-architecture" class="cs-sidenav-link">05 · Solution Architecture</a></li>
    <li><a href="#s-wireframes"   class="cs-sidenav-link">06 · Wireframes</a></li>
    <li><a href="#s-decisions"    class="cs-sidenav-link">07 · Key Design Decisions</a></li>
    <li><a href="#s-analytics"    class="cs-sidenav-link">08 · Analytics</a></li>
    <li><a href="#s-challenges"   class="cs-sidenav-link">09 · Challenges</a></li>
    <li><a href="#s-impact"       class="cs-sidenav-link">10 · Impact</a></li>
    <li><a href="#s-takeaways"    class="cs-sidenav-link">11 · Key Takeaways</a></li>
  </ul>
</nav>
```

- [ ] **Step 3: Commit**

```bash
git add bsa/index.html
git commit -m "feat: add section IDs and sidenav markup to BSA case study"
```

---

## Task 2: Add section IDs to `sitescan/index.html`

**Files:**
- Modify: `sitescan/index.html`

- [ ] **Step 1: Add IDs to each section**

In `sitescan/index.html`, update the opening tag of each `<div class="cs-section">`:

```html
<!-- Context -->
<div class="cs-section" id="s-context">

<!-- Problem -->
<div class="cs-section" id="s-problem">

<!-- Who Are the Users? -->
<div class="cs-section" id="s-users">

<!-- Research -->
<div class="cs-section" id="s-research">

<!-- V1 -->
<div class="cs-section" id="s-v1">

<!-- Iteration & Feedback -->
<div class="cs-section" id="s-iteration">

<!-- V2 -->
<div class="cs-section" id="s-v2">

<!-- Usability Testing After V2 -->
<div class="cs-section" id="s-testing">

<!-- Impact -->
<div class="cs-section" id="s-impact">

<!-- Key Takeaways -->
<div class="cs-section" id="s-takeaways">
```

- [ ] **Step 2: Add the sidenav element**

Add this block directly inside `<body>`, just before `<!-- Nav -->`:

```html
<!-- Side Nav -->
<nav class="cs-sidenav" aria-label="Case study sections">
  <ul class="cs-sidenav-list">
    <li><a href="#s-context"   class="cs-sidenav-link">01 · Context</a></li>
    <li><a href="#s-problem"   class="cs-sidenav-link">02 · Problem</a></li>
    <li><a href="#s-users"     class="cs-sidenav-link">03 · Who Are the Users?</a></li>
    <li><a href="#s-research"  class="cs-sidenav-link">04 · Research</a></li>
    <li><a href="#s-v1"        class="cs-sidenav-link">05 · V1</a></li>
    <li><a href="#s-iteration" class="cs-sidenav-link">06 · Iteration & Feedback</a></li>
    <li><a href="#s-v2"        class="cs-sidenav-link">07 · V2</a></li>
    <li><a href="#s-testing"   class="cs-sidenav-link">08 · Usability Testing</a></li>
    <li><a href="#s-impact"    class="cs-sidenav-link">09 · Impact</a></li>
    <li><a href="#s-takeaways" class="cs-sidenav-link">10 · Key Takeaways</a></li>
  </ul>
</nav>
```

- [ ] **Step 3: Commit**

```bash
git add sitescan/index.html
git commit -m "feat: add section IDs and sidenav markup to SiteScan case study"
```

---

## Task 3: Add CSS for the sidenav

**Files:**
- Modify: `assets/css/style.css` (append after the last line of the Case Study Shared Styles section)

- [ ] **Step 1: Append sidenav styles**

Find the end of the Case Study Shared Styles block in `assets/css/style.css` (after `.cs-learnings` styles, around line 840+). Append the following:

```css
/* ── Case Study Side Nav ─────────────────────── */

.cs-sidenav {
  position: fixed;
  top: 50%;
  left: calc(50% - 480px);
  transform: translateY(-50%);
  z-index: 90;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.cs-sidenav.cs-sidenav--visible {
  opacity: 1;
  pointer-events: auto;
}

.cs-sidenav-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.cs-sidenav-link {
  display: block;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--tag-text);
  padding-left: 10px;
  border-left: 2px solid transparent;
  transition: color 0.2s ease, border-color 0.2s ease;
  white-space: nowrap;
  max-width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.cs-sidenav-link:hover {
  color: var(--sub-text);
}

.cs-sidenav-link.cs-sidenav-link--active {
  color: var(--grey);
  border-left-color: var(--teal);
}

/* Hide on screens too narrow to have a gutter */
@media (max-width: 1100px) {
  .cs-sidenav { display: none; }
}
```

- [ ] **Step 2: Verify no style conflicts**

Open `bsa/index.html` in a browser at viewport width > 1100px. The sidenav should not be visible on load (opacity 0). No layout shifts in the main content column.

- [ ] **Step 3: Commit**

```bash
git add assets/css/style.css
git commit -m "feat: add cs-sidenav CSS styles"
```

---

## Task 4: Add JS — visibility toggle and scroll spy

**Files:**
- Modify: `assets/js/main.js`

- [ ] **Step 1: Append sidenav JS**

Open `assets/js/main.js` and append the following block at the end of the file:

```js
// ── Case Study Side Nav ───────────────────────
(function () {
  const sidenav = document.querySelector('.cs-sidenav');
  if (!sidenav) return; // not a case study page, exit early

  const links = Array.from(sidenav.querySelectorAll('.cs-sidenav-link'));
  const sections = links
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  // — Fade in once cs-body scrolls into view —
  const csBody = document.querySelector('.cs-body');
  if (csBody) {
    const visObs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sidenav.classList.add('cs-sidenav--visible');
          visObs.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    visObs.observe(csBody);
  }

  // — Scroll spy: mark the section nearest the top of viewport as active —
  let activeIndex = -1;

  const spyObs = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        const idx = sections.indexOf(entry.target);
        if (idx === -1) return;

        if (entry.isIntersecting) {
          // Find the section with the smallest positive top offset
          let bestIdx = 0;
          let bestTop = Infinity;
          sections.forEach((sec, i) => {
            const top = sec.getBoundingClientRect().top;
            if (top >= 0 && top < bestTop) {
              bestTop = top;
              bestIdx = i;
            }
          });
          if (bestIdx !== activeIndex) {
            if (activeIndex !== -1) links[activeIndex].classList.remove('cs-sidenav-link--active');
            links[bestIdx].classList.add('cs-sidenav-link--active');
            activeIndex = bestIdx;
          }
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -60% 0px' }
  );

  sections.forEach(sec => spyObs.observe(sec));

  // — Smooth scroll on click —
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();
```

- [ ] **Step 2: Manual test — BSA**

Open `bsa/index.html` in a browser (width > 1100px).

Expected behaviour:
- On load: sidenav is invisible.
- After scrolling past the hero/cover into the body: sidenav fades in.
- As you scroll through sections: the active link updates — correct section label gets dark text + teal left border.
- Clicking a link: page smooth-scrolls to the correct section.
- No console errors.

- [ ] **Step 3: Manual test — SiteScan**

Open `sitescan/index.html` in a browser (width > 1100px).

Expected behaviour: same as BSA step 2. Verify 10 links appear and active state tracks correctly through all 10 sections.

- [ ] **Step 4: Responsive check**

Resize browser below 1100px. Sidenav must be completely hidden — no overlap with content.

- [ ] **Step 5: Commit**

```bash
git add assets/js/main.js
git commit -m "feat: add sidenav visibility toggle and scroll spy JS"
```

---

## Self-Review

**Spec coverage:**
- [x] Both case studies covered (Tasks 1 & 2)
- [x] Hidden on load, fades in after scrolling past hero/cover (Task 4 — `IntersectionObserver` on `.cs-body`)
- [x] Scroll spy updates active section (Task 4 — `spyObs`)
- [x] Smooth scroll on click (Task 4 — `scrollIntoView`)
- [x] No background, floating text (Task 3 — no background property)
- [x] Active state: dark text + teal left border (Task 3 — `.cs-sidenav-link--active`)
- [x] Hidden below 1100px (Task 3 — `@media`)
- [x] Left-fixed in gutter (Task 3 — `left: calc(50% - 480px)`)

**Placeholder scan:** None found.

**Type consistency:** Class names `.cs-sidenav`, `.cs-sidenav-list`, `.cs-sidenav-link`, `.cs-sidenav-link--active`, `.cs-sidenav--visible` are consistent across HTML (Tasks 1–2), CSS (Task 3), and JS (Task 4).
