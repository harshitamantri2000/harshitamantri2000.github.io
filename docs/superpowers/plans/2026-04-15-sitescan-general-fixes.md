# SiteScan General Fixes — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply 12 design fixes to `sitescan/index.html` — typography, hero, metadata, section restructure, insights format, and pastel highlights.

**Architecture:** Pure HTML/CSS edits. Two files touched: `sitescan/index.html` (all content changes) and `assets/css/style.css` (two new component patterns: step flow and insight list). No JS changes.

**Tech Stack:** Static HTML, CSS custom properties (already defined in `:root`), Inter + Caveat fonts (already loaded).

---

### Task 1: Hero fixes — H1 size, cover image, subtitle, tag, meta

**Files:**
- Modify: `sitescan/index.html` (hero section, lines 40–87)

- [ ] **Step 1: Update H1 font size**

In `sitescan/index.html`, find line 43 and change:
```html
<!-- BEFORE -->
<h1 class="cs-title reveal">Redesigning SiteScan to Improve TAT & Drive Adoption</h1>

<!-- AFTER -->
<h1 class="cs-title reveal" style="font-size: clamp(1.8rem, 4.5vw, 2.2rem);">Redesigning SiteScan to Improve TAT & Drive Adoption</h1>
```

- [ ] **Step 2: Update hero tag — remove "Senior Product Designer"**

Find line 42 and change:
```html
<!-- BEFORE -->
<div class="cs-tag reveal">IDfy · Senior Product Designer · 2023</div>

<!-- AFTER -->
<div class="cs-tag reveal">IDfy · Dec 2024</div>
```

- [ ] **Step 3: Update hero subtitle**

Find the `<p class="cs-subtitle reveal">` block and change:
```html
<!-- BEFORE -->
<p class="cs-subtitle reveal">
  A B2B compliance scanning tool built by IDfy for payment gateway companies
  (like Razorpay) to verify merchant websites against regulatory requirements.
</p>

<!-- AFTER -->
<p class="cs-subtitle reveal">
  Redesigned a B2B compliance scanning tool built for payment gateway companies
  like Razorpay to verify merchant websites against regulatory requirements.
</p>
```

- [ ] **Step 4: Replace meta row — 5 items → 3 columns**

Replace the entire `<div class="cs-meta-row reveal">` block:
```html
<!-- BEFORE -->
<div class="cs-meta-row reveal">
  <div class="cs-meta-item">
    <div class="cs-meta-label">My Role</div>
    <div class="cs-meta-val">Lead Product Designer</div>
  </div>
  <div class="cs-meta-item">
    <div class="cs-meta-label">Timeline</div>
    <div class="cs-meta-val">2023</div>
  </div>
  <div class="cs-meta-item">
    <div class="cs-meta-label">Type</div>
    <div class="cs-meta-val">B2B SaaS Redesign · Compliance</div>
  </div>
  <div class="cs-meta-item">
    <div class="cs-meta-label">Users</div>
    <div class="cs-meta-val">Ops agents at Razorpay</div>
  </div>
  <div class="cs-meta-item">
    <div class="cs-meta-label">Tools</div>
    <div class="cs-meta-val">Figma · FigJam</div>
  </div>
</div>

<!-- AFTER -->
<div class="cs-meta-row reveal">
  <div class="cs-meta-item">
    <div class="cs-meta-label">Role</div>
    <div class="cs-meta-val">Lead Product Designer</div>
  </div>
  <div class="cs-meta-item">
    <div class="cs-meta-label">Timeline</div>
    <div class="cs-meta-val">Dec 2024</div>
  </div>
  <div class="cs-meta-item">
    <div class="cs-meta-label">Team</div>
    <div class="cs-meta-val cs-meta-val--grid">
      <span>2 PMs</span>
      <span>Ops Team</span>
      <span>4 Engineers</span>
    </div>
  </div>
</div>
```

- [ ] **Step 5: Update cover image**

Find the `<img>` inside `cs-cover-frame` and change:
```html
<!-- BEFORE -->
<img src="../assets/images/ss_cover.png" alt="SiteScan — Cover">

<!-- AFTER -->
<img src="../assets/images/ss_v2_summary.png" alt="SiteScan V2 — Summary Page">
```

Also update the browser URL label to match:
```html
<!-- BEFORE -->
<div class="browser-url">app.idfy.com / SiteScan / Summary</div>

<!-- AFTER -->
<div class="browser-url">app.idfy.com / SiteScan / Summary</div>
```
(No change needed here — already says Summary.)

- [ ] **Step 6: Verify in browser**

Open `sitescan/index.html` in browser. Check:
- Hero title is smaller (comparable to TIP page)
- Tag reads `IDfy · Dec 2024`
- Subtitle starts with "Redesigned a B2B..."
- Meta shows 3 clean columns: Role / Timeline / Team
- Cover image shows the V2 summary screen

- [ ] **Step 7: Commit**
```bash
git add sitescan/index.html
git commit -m "fix: hero — font size, tag, subtitle, meta, cover image"
```

---

### Task 2: Workflow section — cards → step flow

**Files:**
- Modify: `sitescan/index.html` (users section, around line 136–158)
- Modify: `assets/css/style.css` (add `.cs-flow` component, append to end of case study styles)

- [ ] **Step 1: Add step flow CSS to style.css**

Append after the `.cs-sidenav` block (around line 1060 in style.css), before the `@media` queries:
```css
/* ── Step Flow ───────────────────────────────── */

.cs-flow {
  display: flex;
  align-items: stretch;
  gap: 0;
  margin-top: 16px;
  flex-wrap: wrap;
}

.cs-flow-step {
  flex: 1;
  min-width: 130px;
  background: var(--white);
  border: 1px solid var(--tag-border);
  border-radius: 10px;
  padding: 16px 18px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.cs-flow-num {
  font-size: 11px;
  color: var(--tag-text);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 500;
}

.cs-flow-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--grey);
}

.cs-flow-desc {
  font-size: 12px;
  color: var(--sub-text);
  line-height: 1.5;
  margin-top: 2px;
}

.cs-flow-arrow {
  display: flex;
  align-items: center;
  padding: 0 8px;
  color: var(--tag-text);
  font-size: 16px;
  flex-shrink: 0;
  align-self: center;
}

@media (max-width: 600px) {
  .cs-flow { flex-direction: column; }
  .cs-flow-arrow { transform: rotate(90deg); align-self: flex-start; padding: 4px 0 4px 18px; }
}
```

- [ ] **Step 2: Replace workflow cards with step flow in sitescan/index.html**

Find the `<div class="cs-cards reveal">` block under `Their workflow involves:` (the one with 1️⃣ 2️⃣ 3️⃣ 4️⃣ cards) and replace:
```html
<!-- BEFORE -->
<div class="cs-cards reveal">
  <div class="cs-card">
    <div class="cs-card-icon">1️⃣</div>
    <div class="cs-card-title">Review</div>
    <div class="cs-card-desc">Reviewing a merchant's website</div>
  </div>
  <div class="cs-card">
    <div class="cs-card-icon">2️⃣</div>
    <div class="cs-card-title">Scan</div>
    <div class="cs-card-desc">Using SiteScan to scan for required compliance elements</div>
  </div>
  <div class="cs-card">
    <div class="cs-card-icon">3️⃣</div>
    <div class="cs-card-title">Download</div>
    <div class="cs-card-desc">Downloading the report as proof</div>
  </div>
  <div class="cs-card">
    <div class="cs-card-icon">4️⃣</div>
    <div class="cs-card-title">Submit</div>
    <div class="cs-card-desc">Submitting results internally or to clients if something is missing</div>
  </div>
</div>

<!-- AFTER -->
<div class="cs-flow reveal">
  <div class="cs-flow-step">
    <div class="cs-flow-num">Step 01</div>
    <div class="cs-flow-title">Review</div>
    <div class="cs-flow-desc">Reviewing a merchant's website</div>
  </div>
  <div class="cs-flow-arrow">→</div>
  <div class="cs-flow-step">
    <div class="cs-flow-num">Step 02</div>
    <div class="cs-flow-title">Scan</div>
    <div class="cs-flow-desc">Using SiteScan to scan for required compliance elements</div>
  </div>
  <div class="cs-flow-arrow">→</div>
  <div class="cs-flow-step">
    <div class="cs-flow-num">Step 03</div>
    <div class="cs-flow-title">Download</div>
    <div class="cs-flow-desc">Downloading the report as proof</div>
  </div>
  <div class="cs-flow-arrow">→</div>
  <div class="cs-flow-step">
    <div class="cs-flow-num">Step 04</div>
    <div class="cs-flow-title">Submit</div>
    <div class="cs-flow-desc">Submitting results internally or to clients if something is missing</div>
  </div>
</div>
```

- [ ] **Step 3: Verify in browser**

Open `sitescan/index.html`. Scroll to "Who Are the Users?" Check:
- 4 steps appear in a horizontal flow with → arrows between them
- No emojis
- On mobile the arrows rotate and steps stack vertically

- [ ] **Step 4: Commit**
```bash
git add sitescan/index.html assets/css/style.css
git commit -m "feat: workflow section — step flow layout, remove emoji cards"
```

---

### Task 3: Research — insight list format + callout highlight

**Files:**
- Modify: `sitescan/index.html` (research section, around lines 204–248)
- Modify: `assets/css/style.css` (add `.cs-insights` component)

- [ ] **Step 1: Add insight list CSS to style.css**

Append after the `.cs-flow` block added in Task 2:
```css
/* ── Insight List ────────────────────────────── */

.cs-insights {
  display: flex;
  flex-direction: column;
  margin-top: 16px;
}

.cs-insight {
  display: flex;
  gap: 24px;
  align-items: flex-start;
  padding: 20px 0;
  border-bottom: 1px solid var(--card-border);
}

.cs-insight:first-child {
  border-top: 1px solid var(--card-border);
}

.cs-insight-num {
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 700;
  color: var(--tag-border);
  line-height: 1;
  min-width: 44px;
  letter-spacing: -1px;
  flex-shrink: 0;
}

.cs-insight-title {
  font-size: 15px;
  font-weight: 600;
  color: var(--grey);
  margin-bottom: 4px;
}

.cs-insight-desc {
  font-size: 13px;
  color: var(--sub-text);
  line-height: 1.7;
}
```

- [ ] **Step 2: Replace "What I Found" cards with insight list**

Find the `<div class="cs-cards reveal">` block under `<h3 ... >What I Found</h3>` (has 🔓 💾 🎨 👁️ cards) and replace:
```html
<!-- BEFORE -->
<div class="cs-cards reveal">
  <div class="cs-card">
    <div class="cs-card-icon">🔓</div>
    <div class="cs-card-title">Low Trust</div>
    <div class="cs-card-desc">Agents didn't believe the scan results. So they'd check the site manually first, then run the scan to get something to show. The tool had gone from being the source of truth to being an afterthought.</div>
  </div>
  <div class="cs-card">
    <div class="cs-card-icon">💾</div>
    <div class="cs-card-title">Data Loss</div>
    <div class="cs-card-desc">Switching tabs mid-flow, or accidentally closing the browser, wiped everything. When you're doing this 15 times a day, losing your place is genuinely demoralising.</div>
  </div>
  <div class="cs-card">
    <div class="cs-card-icon">🎨</div>
    <div class="cs-card-title">Clutter</div>
    <div class="cs-card-desc">There were tabs no one opened, sections that didn't map to any real task, colours and icons fighting each other. The UI demanded attention without earning it.</div>
  </div>
  <div class="cs-card">
    <div class="cs-card-icon">👁️</div>
    <div class="cs-card-title">Visual Clarity</div>
    <div class="cs-card-desc">Agents couldn't tell what was clickable, what was auto-filled, or what an action would do. Every step involved a small moment of doubt. Multiply that by 20 merchants a day and it adds up.</div>
  </div>
</div>

<!-- AFTER -->
<div class="cs-insights reveal">
  <div class="cs-insight">
    <div class="cs-insight-num">01</div>
    <div class="cs-insight-content">
      <div class="cs-insight-title">Low Trust</div>
      <div class="cs-insight-desc">Agents didn't believe the scan results. So they'd check the site manually first, then run the scan to get something to show. The tool had gone from being the source of truth to being an afterthought.</div>
    </div>
  </div>
  <div class="cs-insight">
    <div class="cs-insight-num">02</div>
    <div class="cs-insight-content">
      <div class="cs-insight-title">Data Loss</div>
      <div class="cs-insight-desc">Switching tabs mid-flow, or accidentally closing the browser, wiped everything. When you're doing this 15 times a day, losing your place is genuinely demoralising.</div>
    </div>
  </div>
  <div class="cs-insight">
    <div class="cs-insight-num">03</div>
    <div class="cs-insight-content">
      <div class="cs-insight-title">Clutter</div>
      <div class="cs-insight-desc">There were tabs no one opened, sections that didn't map to any real task, colours and icons fighting each other. The UI demanded attention without earning it.</div>
    </div>
  </div>
  <div class="cs-insight">
    <div class="cs-insight-num">04</div>
    <div class="cs-insight-content">
      <div class="cs-insight-title">Visual Clarity</div>
      <div class="cs-insight-desc">Agents couldn't tell what was clickable, what was auto-filled, or what an action would do. Every step involved a small moment of doubt. Multiply that by 20 merchants a day and it adds up.</div>
    </div>
  </div>
</div>
```

- [ ] **Step 3: Highlight "Users didn't need more features" callout**

Find the italic `<p>` at the bottom of the research section:
```html
<!-- BEFORE -->
<p class="cs-p reveal" style="margin-top:20px; font-style:italic;">
  Users didn't need more features. They needed the tool to be reliable, and give them accuracy.
</p>

<!-- AFTER -->
<p class="cs-p reveal" style="margin-top:20px; font-style:italic;">
  <span class="hl-teal">Users didn't need more features.</span> They needed the tool to be reliable, and give them accuracy.
</p>
```

- [ ] **Step 4: Verify in browser**

Scroll to Research section. Check:
- "What I Found" shows 4 insights as a vertical list with large faded numbers, bold titles
- No emojis
- "Users didn't need more features." has teal pastel background

- [ ] **Step 5: Commit**
```bash
git add sitescan/index.html assets/css/style.css
git commit -m "feat: research section — insight list format, highlight callout"
```

---

### Task 4: Merge section 06 into section 05, renumber sections

**Files:**
- Modify: `sitescan/index.html` (sections 05–10 and sidenav)

- [ ] **Step 1: Remove section 06 wrapper, merge content into section 05**

Find `<div class="cs-section" id="s-v1">` and extend it to include the iteration content. The full new section 05 should be:

```html
<div class="cs-section" id="s-v1">
  <div class="cs-section-label reveal">05 · V1 — Cleanup & Task Flow Alignment</div>
  <h2 class="cs-section-title reveal">Clear the clutter, simplify workflows, align with the user's mental flow.</h2>

  <h3 class="cs-section-title reveal" style="font-size:1.25rem; margin-top:32px;">Scan Initiation Page</h3>
  <p class="cs-p reveal">
    To streamline the experience, I removed non-essential inputs and unused sections like
    'Dashboard' and 'Add Users' that created noise without adding real value to the user's
    workflow. I reduced heavy shadows, cluttered icons, and overwhelming colours to create
    a cleaner, calmer interface.
  </p>
  <div class="cs-img-wrap reveal">
    <img src="../assets/images/ss_v1_scan_init.png" alt="SiteScan V1 — Cleaned up scan initiation page">
    <div class="cs-img-caption">V1 — Streamlined scan initiation with non-essential inputs removed</div>
  </div>

  <h3 class="cs-section-title reveal" style="font-size:1.25rem; margin-top:32px;">Results After Scan</h3>
  <p class="cs-p reveal">
    You see the summary grid → you identify the problem area → you scroll to that section → you take action (Preview or Custom Add). That's a coherent task flow.
  </p>
  <div class="cs-img-wrap reveal">
    <img src="../assets/images/ss_v1_results.png" alt="SiteScan V1 — Results page with summary grid">
    <div class="cs-img-caption">V1 — Results view with compliance checks and policy pages</div>
  </div>

  <p class="cs-p reveal" style="margin-top:16px;">The results broke down into two key areas:</p>
  <div class="cs-cards reveal">
    <div class="cs-card">
      <div class="cs-card-icon">✅</div>
      <div class="cs-card-title">1. Compliance Checks</div>
      <div class="cs-card-desc">Automated verification of regulatory requirements on the merchant's website.</div>
    </div>
    <div class="cs-card">
      <div class="cs-card-icon">📄</div>
      <div class="cs-card-title">2. Policy Pages</div>
      <div class="cs-card-desc">Verification of required policy pages (returns, shipping, privacy, terms) and their content.</div>
    </div>
  </div>

  <h3 class="cs-section-title reveal" style="font-size:1.25rem; margin-top:48px;">Iteration & Feedback</h3>
  <p class="cs-p reveal" style="margin-top:4px; font-style:italic;">Two concepts, one clear winner.</p>

  <h3 class="cs-section-title reveal" style="font-size:1.25rem; margin-top:24px;">Concept 1</h3>
  <div class="cs-img-wrap reveal">
    <img src="../assets/images/ss_concept1.png" alt="SiteScan Concept 1">
    <div class="cs-img-caption">Concept 1 — Sidebar navigation approach</div>
  </div>
  <div class="cs-cards reveal">
    <div class="cs-card">
      <div class="cs-card-icon">👎</div>
      <div class="cs-card-title">Overwhelming Sidebar Navigation</div>
      <div class="cs-card-desc">It gives the impression of depth but actually makes it harder to know where you are or where to go next.</div>
    </div>
    <div class="cs-card">
      <div class="cs-card-icon">👎</div>
      <div class="cs-card-title">Missing Action Clarity</div>
      <div class="cs-card-desc">What do I do with "Invalid"? The next step is never obvious.</div>
    </div>
    <div class="cs-card">
      <div class="cs-card-icon">👎</div>
      <div class="cs-card-title">Decorative Previews</div>
      <div class="cs-card-desc">The Preview thumbnails on the right are a genuinely good idea — seeing the actual page gives context — but they're too small to be useful and feel decorative rather than functional.</div>
    </div>
    <div class="cs-card">
      <div class="cs-card-icon">👎</div>
      <div class="cs-card-title">Inconsistent Status Tags</div>
      <div class="cs-card-desc">Status communication tags exist but feel inconsistent — different patterns in different places, no unified visual language.</div>
    </div>
  </div>
  <div class="cs-img-wrap reveal">
    <img src="../assets/images/ss_concept1_feedback.png" alt="SiteScan Concept 1 — Feedback details">
    <div class="cs-img-caption">Concept 1 feedback — sidebar navigation and action clarity issues</div>
  </div>

  <h3 class="cs-section-title reveal" style="font-size:1.25rem; margin-top:40px;">Concept 2 (Winner)</h3>
  <div class="cs-img-wrap reveal">
    <img src="../assets/images/ss_concept2.png" alt="SiteScan Concept 2">
    <div class="cs-img-caption">Concept 2 — Summary grid approach</div>
  </div>
  <div class="cs-cards reveal">
    <div class="cs-card">
      <div class="cs-card-icon">👍</div>
      <div class="cs-card-title">Instant Full Picture</div>
      <div class="cs-card-desc">Summary grid gives the agent an instant read of the full picture before they scroll into anything. Problems are visible immediately, and the agent knows where to focus before touching the detail below.</div>
    </div>
    <div class="cs-card">
      <div class="cs-card-icon">👍</div>
      <div class="cs-card-title">Visually Quieter & Trustworthy</div>
      <div class="cs-card-desc">White cards, clean typography, subtle borders. The UI stopped fighting for attention.</div>
    </div>
    <div class="cs-card">
      <div class="cs-card-icon">👍</div>
      <div class="cs-card-title">Tags Doing Real Work</div>
      <div class="cs-card-desc">The compliance tags (Approved, Needs Improvement, Non-Compliant) are doing real work — the agent never has to interpret raw data to understand the status.</div>
    </div>
  </div>
  <div class="cs-cards reveal" style="margin-top:12px;">
    <div class="cs-card">
      <div class="cs-card-icon">⚠️</div>
      <div class="cs-card-title">Generic Page Naming</div>
      <div class="cs-card-desc">The "Page-1", "Page-2" naming is generic and slightly confusing. If an agent needs to go back and reference something, "Page-1 under Shipping & Delivery" is not a clear mental anchor. Even showing the actual page URL or a truncated page title would make this far more useful.</div>
    </div>
  </div>

  <h3 class="cs-section-title reveal" style="font-size:1.25rem; margin-top:40px;">Preview (Policy Page)</h3>
  <div class="cs-img-wrap reveal">
    <img src="../assets/images/ss_preview_policy.png" alt="SiteScan — Policy page preview with scan findings">
    <div class="cs-img-caption">Preview — Scan findings shown alongside the policy page screenshot</div>
  </div>
  <p class="cs-p reveal">
    When a user clicks on Preview, they see the full page but have no idea what they're
    looking for or what the scan found. They end up manually reading the whole page —
    which is exactly the behaviour I'm trying to eliminate.
  </p>
  <p class="cs-p reveal">
    Since we had <strong>backend limitations for new developments</strong>, instead of highlighting
    directly on the screenshot, I brought the scan findings alongside it. Users can now
    look at the screenshot with context and cross-reference visually themselves. It's not
    as precise as highlighted regions, but it gives them enough to do their job without
    switching back and forth.
  </p>
</div>
```

Then delete the old standalone `<div class="cs-section" id="s-iteration">` block entirely.

- [ ] **Step 2: Renumber sections 07–10 → 06–09 in section labels**

Find and update each `cs-section-label`:
```html
<!-- 07 → 06 -->
<div class="cs-section-label reveal">06 · V2 — Decision Support & Habit Shaping</div>

<!-- 08 → 07 -->
<div class="cs-section-label reveal">07 · Usability Testing After V2</div>

<!-- 09 → 08 -->
<div class="cs-section-label reveal">08 · Impact</div>

<!-- 10 → 09 -->
<div class="cs-section-label reveal">09 · Key Takeaways</div>
```

- [ ] **Step 3: Remove "Iteration & Feedback" from sidenav**

Find the sidenav `<ul>` and remove the iteration link:
```html
<!-- BEFORE -->
<li><a href="#s-v1"        class="cs-sidenav-link">V1</a></li>
<li><a href="#s-iteration" class="cs-sidenav-link">Iteration & Feedback</a></li>
<li><a href="#s-v2"        class="cs-sidenav-link">V2</a></li>

<!-- AFTER -->
<li><a href="#s-v1"        class="cs-sidenav-link">V1</a></li>
<li><a href="#s-v2"        class="cs-sidenav-link">V2</a></li>
```

- [ ] **Step 4: Verify in browser**

Scroll through the page. Check:
- V1 section flows directly into Iteration & Feedback as subsections
- No gap or break between them — reads as one continuous section
- Section numbers in labels read 05, 06, 07, 08, 09
- Sidenav has no "Iteration & Feedback" entry

- [ ] **Step 5: Commit**
```bash
git add sitescan/index.html
git commit -m "refactor: merge iteration section into V1, renumber sections"
```

---

### Task 5: Usability Testing — impact-driven restructure + plain lists

**Files:**
- Modify: `sitescan/index.html` (usability testing section, now `#s-testing`)

- [ ] **Step 1: Replace full usability testing section**

Find `<div class="cs-section" id="s-testing">` and replace entirely:
```html
<div class="cs-section" id="s-testing">
  <div class="cs-section-label reveal">07 · Usability Testing After V2</div>
  <h2 class="cs-section-title reveal">Testing confirmed the shift we were designing for.</h2>

  <p class="cs-p reveal">
    Tested with <strong>5–7 frequent users from Razorpay</strong> and 2–3 internal users on the
    staging environment. Real tasks, real context — a mix of qualitative feedback and
    behavioural observation.
  </p>
  <p class="cs-p reveal">
    The clearest signal: agents were <span class="hl-teal">opening SiteScan first</span> instead of using it
    to confirm what they'd already found manually. That's the habit shift the Summary Page was
    designed to create.
  </p>

  <h3 class="cs-section-title reveal" style="font-size:1.15rem; margin-top:28px;">What worked</h3>
  <div class="cs-plain-list reveal">
    <div class="cs-plain-item">
      <span class="cs-plain-num">01</span>
      <span class="cs-plain-text"><strong>Summary Page</strong> — Helped agents quickly identify compliance issues before diving in.</span>
    </div>
    <div class="cs-plain-item">
      <span class="cs-plain-num">02</span>
      <span class="cs-plain-text"><strong>Highlighted Sections in Policies</strong> — Reduced manual scanning effort significantly.</span>
    </div>
    <div class="cs-plain-item">
      <span class="cs-plain-num">03</span>
      <span class="cs-plain-text"><strong>More Accurate MCC Codes</strong> — Reduced manual checking. Agents trusted the categorisation.</span>
    </div>
    <div class="cs-plain-item">
      <span class="cs-plain-num">04</span>
      <span class="cs-plain-text"><strong>Smoother Navigation Flow</strong> — Navigation felt intuitive. Users moved through tasks without hesitation.</span>
    </div>
    <div class="cs-plain-item">
      <span class="cs-plain-num">05</span>
      <span class="cs-plain-text"><strong>Individual Highlights</strong> — Boosted confidence in overall results.</span>
    </div>
    <div class="cs-plain-item">
      <span class="cs-plain-num">06</span>
      <span class="cs-plain-text"><strong>Cleaner UI</strong> — Agents said it felt easier on the eyes. Less visual noise meant faster decisions.</span>
    </div>
  </div>

  <h3 class="cs-section-title reveal" style="font-size:1.15rem; margin-top:28px;">What still needed work</h3>
  <div class="cs-plain-list reveal">
    <div class="cs-plain-item">
      <span class="cs-plain-num">01</span>
      <span class="cs-plain-text"><strong>Icon Meanings</strong> — Some users were still confused about what certain icons meant.</span>
    </div>
    <div class="cs-plain-item">
      <span class="cs-plain-num">02</span>
      <span class="cs-plain-text"><strong>Policy Page Clutter</strong> — Policy page layout felt cluttered with too much scrolling.</span>
    </div>
    <div class="cs-plain-item">
      <span class="cs-plain-num">03</span>
      <span class="cs-plain-text"><strong>No Exact Location Highlighting</strong> — Issues are listed by page name but not at the exact line or paragraph, forcing agents to manually locate problem areas.</span>
    </div>
    <div class="cs-plain-item">
      <span class="cs-plain-num">04</span>
      <span class="cs-plain-text"><strong>Quick Wins Shipped</strong> — Some minor improvements like clear icon labels were pushed directly to production.</span>
    </div>
  </div>
</div>
```

- [ ] **Step 2: Verify in browser**

Scroll to Usability Testing. Check:
- Leads with outcomes/shift in behaviour, not setup
- "What worked" and "What still needed work" both use plain numbered lists
- No emojis anywhere in the section

- [ ] **Step 3: Commit**
```bash
git add sitescan/index.html
git commit -m "refactor: usability testing — impact-driven structure, plain lists"
```

---

### Task 6: Pastel highlights throughout body text

**Files:**
- Modify: `sitescan/index.html` (all `<p class="cs-p">` blocks across all sections)

Palette reference (all classes already defined in `style.css`):
- `hl-yellow` — stats, numbers, named outcomes
- `hl-teal` — positive outcomes, goals, what worked
- `hl-pink` — pain points, friction
- `hl-lavender` — key concepts, named features
- `hl-rose` — strong negatives

- [ ] **Step 1: Add highlights to Context section (01)**

Find the `<p>` in section `#s-context`:
```html
<!-- BEFORE -->
<p class="cs-p reveal">
  When payment companies onboard online merchants, they need to check if the
  merchant's website meets all regulatory compliance requirements. IDfy built
  <strong>SiteScan</strong> for exactly this — an automated compliance scanner.
</p>

<!-- AFTER -->
<p class="cs-p reveal">
  When payment companies onboard online merchants, they need to check if the
  merchant's website meets all <span class="hl-lavender">regulatory compliance requirements</span>. IDfy built
  <strong>SiteScan</strong> for exactly this — an <span class="hl-teal">automated compliance scanner</span>.
</p>
```

- [ ] **Step 2: Add highlights to Problem section (02)**

```html
<!-- BEFORE -->
<p class="cs-p reveal">
  The current SiteScan tool was <strong>slow, hard to use, and often unreliable</strong>. This led to:
</p>

<!-- AFTER -->
<p class="cs-p reveal">
  The current SiteScan tool was <span class="hl-pink"><strong>slow, hard to use, and often unreliable</strong></span>. This led to:
</p>
```

- [ ] **Step 3: Add highlights to Users section (03)**

First `<p>` block — why it matters to users:
```html
<!-- BEFORE -->
<p class="cs-p reveal">
  Users handle <strong>15–20 verifications daily</strong>, often under time pressure.
  For them, efficiency is critical. So we aimed to build a solution that:
</p>

<!-- AFTER -->
<p class="cs-p reveal">
  Users handle <span class="hl-yellow"><strong>15–20 verifications daily</strong></span>, often under time pressure.
  For them, efficiency is critical. So we aimed to build a solution that:
</p>
```

- [ ] **Step 4: Add highlights to Research section (04)**

```html
<!-- BEFORE -->
<p class="cs-p reveal">
  Before any user interviews, I audited the tool myself. I went through the full flow
  end-to-end, from a first-time user's perspective. <strong>I do this before every project</strong>
  — it means that by the time I'm in a conversation with users, I'm not asking broad questions.
  I know exactly what to press on.
</p>

<!-- AFTER -->
<p class="cs-p reveal">
  Before any user interviews, I audited the tool myself. I went through the full flow
  end-to-end, from a first-time user's perspective. <span class="hl-lavender"><strong>I do this before every project</strong></span>
  — it means that by the time I'm in a conversation with users, I'm not asking broad questions.
  I know exactly what to press on.
</p>
```

```html
<!-- BEFORE -->
<p class="cs-p reveal">
  I then interviewed top-performing ops agents at Razorpay — individually, in their actual
  working context. Not a focus group. Not a survey. Just conversations and observation.
</p>

<!-- AFTER -->
<p class="cs-p reveal">
  I then interviewed <span class="hl-teal">top-performing ops agents at Razorpay</span> — individually, in their actual
  working context. Not a focus group. Not a survey. Just conversations and observation.
</p>
```

- [ ] **Step 5: Add highlights to V1 section (05)**

V1 scan initiation paragraph:
```html
<!-- BEFORE -->
<p class="cs-p reveal">
  To streamline the experience, I removed non-essential inputs and unused sections like
  'Dashboard' and 'Add Users' that created noise without adding real value to the user's
  workflow. I reduced heavy shadows, cluttered icons, and overwhelming colours to create
  a cleaner, calmer interface.
</p>

<!-- AFTER -->
<p class="cs-p reveal">
  To streamline the experience, I removed <span class="hl-pink">non-essential inputs and unused sections</span> like
  'Dashboard' and 'Add Users' that created noise without adding real value to the user's
  workflow. I reduced heavy shadows, cluttered icons, and overwhelming colours to create
  a <span class="hl-teal">cleaner, calmer interface</span>.
</p>
```

Preview (Policy Page) paragraphs:
```html
<!-- BEFORE — second paragraph -->
<p class="cs-p reveal">
  Since we had <strong>backend limitations for new developments</strong>, instead of highlighting
  directly on the screenshot, I brought the scan findings alongside it.
  ...
</p>

<!-- AFTER -->
<p class="cs-p reveal">
  Since we had <span class="hl-rose"><strong>backend limitations for new developments</strong></span>, instead of highlighting
  directly on the screenshot, I brought the scan findings alongside it. Users can now
  look at the screenshot with context and cross-reference visually themselves. It's not
  as precise as highlighted regions, but it gives them enough to do their job without
  switching back and forth.
</p>
```

- [ ] **Step 6: Add highlights to V2 section (06)**

```html
<!-- BEFORE -->
<p class="cs-p reveal">
  V1 made the tool easier to use. Earlier I focused on <strong>UI hygiene</strong> — decluttering
  the interface and aligning flows with user behaviour. While necessary, these changes
  didn't fundamentally alter how users interacted with the tool.
</p>

<!-- AFTER -->
<p class="cs-p reveal">
  V1 made the tool easier to use. Earlier I focused on <span class="hl-lavender"><strong>UI hygiene</strong></span> — decluttering
  the interface and aligning flows with user behaviour. While necessary, these changes
  didn't fundamentally alter how users interacted with the tool.
</p>
```

```html
<!-- BEFORE -->
<p class="cs-p reveal">
  In V2, I introduced one key shift: <strong>the Summary Page</strong>.
</p>

<!-- AFTER -->
<p class="cs-p reveal">
  In V2, I introduced one key shift: <span class="hl-teal"><strong>the Summary Page</strong></span>.
</p>
```

```html
<!-- BEFORE -->
<p class="cs-p reveal">
  It sounds like a small thing. But it fundamentally shifted the interaction. Instead of using
  the tool to confirm what they'd already found manually, <strong>agents started opening it
  first</strong> — because it was now actually telling them something useful upfront. That's
  the shift we were after.
</p>

<!-- AFTER -->
<p class="cs-p reveal">
  It sounds like a small thing. But it fundamentally shifted the interaction. Instead of using
  the tool to confirm what they'd already found manually, <span class="hl-yellow"><strong>agents started opening it
  first</strong></span> — because it was now actually telling them something useful upfront. That's
  the shift we were after.
</p>
```

- [ ] **Step 7: Verify in browser**

Scroll through the full page. Check:
- Highlights appear on key phrases throughout — not overdone, not sparse
- Colours feel consistent with TIP page (teal for positives, pink/rose for friction, yellow for outcomes, lavender for concepts)

- [ ] **Step 8: Commit**
```bash
git add sitescan/index.html
git commit -m "feat: pastel highlights across body text"
```
