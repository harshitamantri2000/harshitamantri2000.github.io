# AI Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a "How I use AI" section with 3 alternating editorial rows after the "Also Made" bento grid in index.html.

**Architecture:** Pure HTML + CSS. No JavaScript required. Two files touched: `index.html` (new section markup) and `assets/css/style.css` (new styles appended before the responsive block). Section uses the existing CSS variable system and `hl-*` highlight classes.

**Tech Stack:** HTML5, CSS3 (CSS Grid, custom properties), existing Inter/Caveat fonts

---

## File Map

| File | Action | What changes |
|------|--------|--------------|
| `index.html` | Modify | Add `<section class="ai-work reveal">` after `.also-made` closing tag, before `.breaker`; bump stylesheet version to `v=5` |
| `assets/css/style.css` | Modify | Append `/* ── How I Use AI */` block before `/* ── Responsive */` |

---

### Task 1: Add the HTML section

**Files:**
- Modify: `index.html:88-88` (after `</section>` closing tag of `.also-made`, before `.breaker`)

- [ ] **Step 1: Locate the insertion point in index.html**

  Open `index.html`. Find line `</section>` that closes `.also-made` (around line 142), then the `.breaker` paragraph. The new section goes between them.

- [ ] **Step 2: Insert the AI section HTML**

  Add the following block between `</section>` (also-made close) and `<p class="breaker reveal">`:

  ```html
  <!-- ── How I Use AI ── -->
  <section class="ai-work reveal">
    <h2 class="ai-work-label">How I use AI</h2>
    <div class="ai-rows">

      <!-- Row 01 -->
      <div class="ai-row">
        <div class="ai-row-media">
          <div class="ai-media-card ai-media-lavender">
            <img src="assets/images/ai-figma-make.png" alt="Figma Make exploration" loading="lazy" />
          </div>
        </div>
        <div class="ai-row-text">
          <span class="ai-row-number">01 —</span>
          <h3 class="ai-row-title">Early concept exploration with <span class="hl-lavender">Figma Make</span></h3>
          <p class="ai-row-desc">Used AI-generated interactions to rapidly test layout and flow ideas before committing to high-fidelity screens. Cut early exploration time dramatically.</p>
          <div class="ai-tags">
            <span class="ai-tag ai-tag-lavender">Figma Make · Prototyping</span>
          </div>
        </div>
      </div>

      <!-- Row 02 -->
      <div class="ai-row ai-row-reverse">
        <div class="ai-row-media">
          <div class="ai-media-card ai-media-teal">
            <img src="assets/images/ai-antgravity.png" alt="Antgravity IDE with Claude" loading="lazy" />
          </div>
        </div>
        <div class="ai-row-text">
          <span class="ai-row-number">02 —</span>
          <h3 class="ai-row-title">Vibe designed <span class="hl-teal">this very site</span></h3>
          <p class="ai-row-desc">Designed and shipped entire flows and pages — from layout decisions to pushing to git — without writing a line of code manually.</p>
          <div class="ai-tags">
            <span class="ai-tag ai-tag-teal">Claude · GitHub</span>
          </div>
        </div>
      </div>

      <!-- Row 03 -->
      <div class="ai-row">
        <div class="ai-row-media">
          <div class="ai-media-card ai-media-pink">
            <img src="assets/images/ai-multiagent.png" alt="Claude as design partner" loading="lazy" />
          </div>
        </div>
        <div class="ai-row-text">
          <span class="ai-row-number">03 —</span>
          <h3 class="ai-row-title">Claude as my <span class="hl-pink">design partner</span></h3>
          <p class="ai-row-desc">Content writing, research synthesis, persona building, and running usability test scenarios — all with Claude as a collaborative thinking partner.</p>
          <div class="ai-tags">
            <span class="ai-tag ai-tag-pink">Claude · Research</span>
          </div>
        </div>
      </div>

    </div>
  </section>
  ```

- [ ] **Step 3: Bump the stylesheet cache version**

  In `index.html` line 11, change:
  ```html
  <link rel="stylesheet" href="assets/css/style.css?v=4">
  ```
  to:
  ```html
  <link rel="stylesheet" href="assets/css/style.css?v=5">
  ```

- [ ] **Step 4: Open index.html in a browser and verify**

  Run: `open index.html` (macOS) or equivalent.
  Expected: Section appears unstyled but with raw text content — "How I use AI", 3 rows of number + title + desc + tag visible. No layout yet.

- [ ] **Step 5: Commit**

  ```bash
  git add index.html
  git commit -m "feat: add How I use AI section HTML"
  ```

---

### Task 2: Add CSS — section layout and image cards

**Files:**
- Modify: `assets/css/style.css` — append before the `/* ── Responsive ──` comment block

- [ ] **Step 1: Append the AI section CSS**

  In `assets/css/style.css`, find the line `/* ── Responsive ──` and insert the following block immediately before it:

  ```css
  /* ── How I Use AI ───────────────────────────── */

  .ai-work {
    margin-top: 80px;
    margin-bottom: 80px;
    width: var(--content-width, 60vw);
    margin-left: auto;
    margin-right: auto;
  }

  .ai-work-label {
    font-family: var(--font-hand);
    font-size: 28px;
    font-weight: 600;
    color: var(--grey);
    margin-bottom: 24px;
  }

  .ai-rows {
    display: flex;
    flex-direction: column;
  }

  .ai-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: center;
    padding: 56px 0;
    border-top: 1px solid var(--card-border);
  }

  .ai-row:last-child {
    border-bottom: 1px solid var(--card-border);
  }

  .ai-row-media { order: 1; }
  .ai-row-text  { order: 2; }

  .ai-row-reverse .ai-row-media { order: 2; }
  .ai-row-reverse .ai-row-text  { order: 1; }

  .ai-media-card {
    border-radius: 16px;
    overflow: hidden;
    aspect-ratio: 16 / 10;
  }

  .ai-media-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .ai-media-lavender { background: color-mix(in srgb, var(--lavender) 55%, white); }
  .ai-media-teal     { background: color-mix(in srgb, var(--teal) 55%, white); }
  .ai-media-pink     { background: color-mix(in srgb, var(--pink) 55%, white); }

  .ai-row-number {
    display: block;
    font-size: 12px;
    font-style: italic;
    color: var(--tag-text);
    margin-bottom: 8px;
  }

  .ai-row-title {
    font-family: var(--font-heading);
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.5px;
    color: var(--grey);
    line-height: 1.3;
    margin-bottom: 12px;
  }

  .ai-row-desc {
    font-size: 14px;
    line-height: 22px;
    color: var(--sub-text);
    margin-bottom: 16px;
  }

  .ai-tags {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .ai-tag {
    font-size: 12px;
    font-weight: 500;
    padding: 5px 14px;
    border-radius: 100px;
    color: var(--white);
  }

  .ai-tag-lavender { background: var(--tag-purple); }
  .ai-tag-teal     { background: var(--tag-teal); }
  .ai-tag-pink     { background: var(--tag-pink); }
  ```

- [ ] **Step 2: Open index.html in browser and verify desktop layout**

  Expected:
  - Section header "How I use AI" in Caveat font, 28px
  - Row 01: image placeholder (lavender tint) on left, text on right
  - Row 02: text on left, image placeholder (teal tint) on right (reversed)
  - Row 03: image placeholder (pink tint) on left, text on right
  - Thin dividers between rows
  - Highlight spans (`hl-lavender`, `hl-teal`, `hl-pink`) on keywords in titles
  - Colored pills at bottom of each row's text

- [ ] **Step 3: Commit**

  ```bash
  git add assets/css/style.css
  git commit -m "feat: add How I use AI section CSS"
  ```

---

### Task 3: Add responsive CSS

**Files:**
- Modify: `assets/css/style.css` — add rules inside the existing `@media` blocks

- [ ] **Step 1: Add to the `@media (max-width: 991px)` block**

  Find `@media (max-width: 991px)` block (around line 1772). Inside it, add:

  ```css
  .ai-work { width: 90vw; }
  ```

- [ ] **Step 2: Add to the first `@media (max-width: 767px)` block**

  Find `@media (max-width: 767px)` block (around line 1791). Inside it, add:

  ```css
  .ai-row {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 40px 0;
  }
  .ai-row-media,
  .ai-row-reverse .ai-row-media { order: 1; }
  .ai-row-text,
  .ai-row-reverse .ai-row-text  { order: 2; }
  .ai-row-title { font-size: 20px; }
  ```

- [ ] **Step 3: Verify responsive layout**

  In the browser DevTools, toggle to mobile viewport (375px wide).
  Expected:
  - Each row stacks vertically: image card on top, text below
  - No horizontal side-by-side layout at 375px
  - All 3 rows follow image-above-text order

- [ ] **Step 4: Commit**

  ```bash
  git add assets/css/style.css
  git commit -m "feat: add responsive styles for AI section"
  ```

---

### Task 4: Swap in real visuals

**Files:**
- `assets/images/ai-figma-make.png` — add user's Figma Make screenshot here
- `assets/images/ai-antgravity.png` — add user's Antgravity IDE screenshot here
- `assets/images/ai-multiagent.png` — add user's multi-agent output screenshot here

- [ ] **Step 1: Add the 3 image files to `assets/images/`**

  Place the provided images at these exact paths:
  - `assets/images/ai-figma-make.png`
  - `assets/images/ai-antgravity.png`
  - `assets/images/ai-multiagent.png`

  The `<img>` tags in the HTML already reference these paths. Once files exist, the colored placeholder backgrounds will be hidden behind the real images.

- [ ] **Step 2: Open browser and verify all 3 images render**

  Expected: each `.ai-media-card` shows the real screenshot. If an image doesn't load, check the filename spelling exactly matches the `src` attribute.

- [ ] **Step 3: Commit**

  ```bash
  git add assets/images/ai-figma-make.png assets/images/ai-antgravity.png assets/images/ai-multiagent.png
  git commit -m "feat: add AI section visuals"
  ```
