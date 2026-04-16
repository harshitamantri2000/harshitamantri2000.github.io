# Footer Quick Access Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add pill-style Email and Resume buttons to the top-right of the intro section so they are immediately visible on page load.

**Architecture:** A new `.intro-actions` flex child is added as the third element in the `.intro` row. It sits right-aligned using `flex-shrink: 0` after `.intro-info` (which already has `flex: 1`). Two `<a>` tags styled as pills — one outline, one light-teal-filled — with hover lift animations.

**Tech Stack:** HTML, CSS (no JS, no build step)

---

## File Map

| File | Change |
|------|--------|
| `index.html` | Add `.intro-actions` div with two `<a>` tags inside `.intro` |
| `assets/css/style.css` | Add `.intro-actions`, `.intro-btn`, `.intro-btn-primary` rules; add mobile breakpoint rule |

---

### Task 1: Add HTML markup

**Files:**
- Modify: `index.html:18-29`

- [ ] **Step 1: Add `.intro-actions` as the third child of `.intro`**

Open `index.html`. Find the `.intro` block (around line 18). It currently ends after `</div>` closing `.intro-info`. Add the new div directly before the closing `</div>` of `.intro`:

```html
    <!-- ── Intro ── -->
    <div class="intro reveal">
      <div class="intro-avatar">
        <img src="assets/images/harshita_mantri.jpg" alt="Harshita Mantri">
      </div>
      <div class="intro-info">
        <h1 class="intro-name">Harshita Mantri</h1>
        <div class="intro-designation">Senior Product Designer at IDfy, India</div>
        <div class="intro-tags">
          <span class="hand-tag">open to opportunities ✿</span>
        </div>
      </div>
      <div class="intro-actions">
        <a href="mailto:harshitamantri3140@gmail.com" class="intro-btn">Email me</a>
        <a href="docs/harshita-mantri-resume_26.pdf" target="_blank" class="intro-btn intro-btn-primary">Resume ↓</a>
      </div>
    </div>
```

- [ ] **Step 2: Open the page in a browser to confirm the links appear (unstyled is fine)**

Open `index.html` in a browser (or the live dev server if running). Confirm two plain links appear to the right of the name block. They will look unstyled — that's expected. Proceed once they're visible.

---

### Task 2: Add base CSS styles

**Files:**
- Modify: `assets/css/style.css` — after `.intro-resume:hover` rule (around line 129)

- [ ] **Step 3: Add `.intro-actions`, `.intro-btn`, and `.intro-btn-primary` rules**

Insert the following block directly after the `.intro-resume:hover` rule (line 129):

```css
/* ── Intro Actions (quick-access pills) ─────── */

.intro-actions {
  display: flex;
  gap: 10px;
  align-self: center;
  flex-shrink: 0;
}

.intro-btn {
  font-size: 13px;
  color: var(--sub-text);
  border: 1px solid var(--tag-border);
  border-radius: 20px;
  padding: 8px 16px;
  background: transparent;
  white-space: nowrap;
  transition: all 0.25s ease;
}

.intro-btn:hover {
  border-color: var(--grey);
  color: var(--grey);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.intro-btn-primary {
  background: rgba(192, 221, 208, 0.3);
}
```

- [ ] **Step 4: Verify in browser — base styles**

Reload the page. Confirm:
- Two pill-shaped buttons appear right-aligned in the intro row
- `Email me` has a light border and transparent background
- `Resume ↓` has the same border plus a very subtle teal tint
- Both are vertically centered with the avatar and name block

---

### Task 3: Add mobile responsive rule

**Files:**
- Modify: `assets/css/style.css` — inside the mobile breakpoint (around line 1237)

- [ ] **Step 5: Add `.intro-actions` to the mobile breakpoint**

Find the mobile breakpoint block that contains:
```css
.intro { flex-direction: column; align-items: center; text-align: center; }
```

Add one line immediately after it:
```css
.intro-actions { justify-content: center; }
```

So the block reads:
```css
  .intro { flex-direction: column; align-items: center; text-align: center; }
  .intro-actions { justify-content: center; }
  .intro-avatar { transform: rotate(-3deg); }
  .intro-tags { justify-content: center; }
```

- [ ] **Step 6: Verify on mobile in browser**

In browser DevTools, toggle a mobile viewport (e.g. iPhone SE, 375px wide). Confirm:
- The intro stacks vertically: avatar → name/designation/tags → pills
- The two pills are centered horizontally
- No horizontal overflow

---

### Task 4: Commit

- [ ] **Step 7: Commit all changes**

```bash
git add index.html assets/css/style.css
git commit -m "feat: add quick-access Email and Resume pills to intro section"
```
