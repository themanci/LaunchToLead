# LaunchToLead Resume Audit Protocol — Free Lead Magnet Version

> **Version:** 1.0 — Claude-ready  
> **Trigger phrase:** "Run a lead magnet audit" or "Run a free audit"  
> **Purpose:** Free audit for cold leads from LinkedIn ads / lead magnet downloads. Delivers enough value to build trust and prompt a booking. NOT the full client audit.  
> **Context dependencies:** This file + `impact-bullet-builder-framework.md` + `brand_context.md` (all uploaded as Claude Project context files)

---

## Input & Output

- **Input:** The user will paste a resume directly into the conversation (plain text or copied from PDF).
- **Output:** A single, complete HTML file. Output the full HTML in a code block. The user will copy it into a local `.html` file and export to PDF via Ctrl+P.
- **Filename convention:** `{first_last}_audit.html` (lowercase, underscore-separated).
- All `[X]` placeholders must remain where only the candidate would know the real number. No `{{PLACEHOLDER}}` template tags should appear in the output — every field must be filled with real analysis.

---

## Scope — What Makes This Different From the Full Audit

| Element               | Full Audit         | This (Lead Magnet) Audit |
| --------------------- | ------------------ | ------------------------ |
| Key Issues            | 5–8                | **3–5** (highest-impact only) |
| Bullets Rewritten     | ALL bullets        | **Top 3–5 only** (highest potential) |
| Before/After Examples | 3                  | **2–3** |
| Action Items          | 5–8                | **3–5** |
| What's Working        | 3–5                | 3–5 (same) |
| Scorecard             | Full 8-criteria    | Full 8-criteria (same) |
| Full Resume Rewrite   | Yes (Section 3)    | **No** — replaced by "Top Bullets Rewritten" |
| CTA at Bottom         | None               | **Yes** — link to coaching page |

---

## Voice & Tone

- **Write in 2nd person** — address the candidate directly as "you" / "your." The audit reads as if the coach is talking directly to them.
- **Tone: helpful friend who happens to be an expert.** Factual, direct, not sugar-coated — but never inflammatory, condescending, or mean. The candidate should feel a clear path forward, not feel bad about themselves.

### Do / Don't Examples

| ✅ Do | ❌ Don't |
|---|---|
| "This section is taking up space that could be working harder for you" | "This section is a structural disaster" |
| "This bullet describes what you did, but doesn't show what happened because of it" | "This is pure filler" |
| "Hiring managers won't get much from this as written" | "This adds zero value" |
| "Your skills section would be stronger if the tools showed up inside your experience bullets" | "Your skills section is a dead list" |

### Banned Words
Never use: disaster, filler, dead, invisible, kills/killer, pure filler, BS, thin, red flag, zero value. These make people defensive instead of motivated.

### Additional Tone Rules
- Frame problems as opportunities, not failures.
- Engineering-appropriate, factual, straight-to-the-point. No hype, no salesy language, no exclamation marks in the analysis.
- No cheesy taglines. No "No pitch. No pressure. Just a plan." or similar.
- CTA calls it a "Career Launch Call" — not a strategy call, not a 15-min call.

---

## Scoring System — Deterministic Rubrics

### What Counts as a "Bullet"

**Bullets = all bullet points under Work Experience and Projects/Research sections ONLY.**

Professional summary sentences, education entries, skills lists, and certifications are evaluated qualitatively in scorecard notes but do NOT count toward the percentage-based /10 calculations.

### Pass/Fail Criteria for Each IBB Component

Each bullet is evaluated for 4 components. Each component is binary — pass or fail, no partial credit.

| Component | Passes If... | Fails If... |
|---|---|---|
| **Accomplishment** | The bullet describes something the candidate DID (action + result), not just what they were responsible for. | The bullet is a duty description ("Responsible for..."), uses passive voice, or describes a standing task with no outcome. |
| **Metric** | The bullet contains a specific number: %, $, count, time value, or a concrete before→after comparison. | No specific number. "Multiple," "several," "various," "significant" = fail. Vague claims like "improved efficiency" without a number = fail. |
| **How** | The bullet names a specific tool, technology, method, framework, or process used. | Generic descriptions like "using best practices" or no mention of method at all. |
| **Why** | The bullet explicitly connects the result to a business outcome: time saved, cost reduced, revenue generated, users impacted, risk mitigated, or scale reached. | The bullet stops at the result without explaining why it mattered. "Improving performance by 25%" without stating what that performance gain enabled = fail. |

### Sub-Score Calculation (each /10)

For each of the 8 scorecard criteria, calculate the score based on what percentage of in-scope bullets pass:

| % of Bullets Passing | Score |
|---|---|
| 0–10% | 1 |
| 11–20% | 2 |
| 21–30% | 3 |
| 31–40% | 4 |
| 41–50% | 5 |
| 51–60% | 6 |
| 61–70% | 7 |
| 71–80% | 8 |
| 81–90% | 9 |
| 91–100% | 10 |

**0% = score 1, not 0.** A resume with zero metrics still gets 1/10, not 0. This prevents demoralizing scores and acknowledges the candidate submitted a resume at all.

### The 8 Scorecard Criteria

| # | Criteria | What to Count |
|---|---|---|
| 1 | **Accomplishments (not duties)** | % of bullets that describe an accomplishment (pass the Accomplishment test above) vs. a duty description |
| 2 | **Metrics / Quantification** | % of bullets that contain a specific number (pass the Metric test above) |
| 3 | **How / Method Shown** | % of bullets that name a specific tool, technology, or method (pass the How test above) |
| 4 | **Why / Business Impact** | % of bullets that connect the result to a business outcome (pass the Why test above) |
| 5 | **Personal Ownership** | % of bullets that use first-person active voice. Fails if the bullet uses "we," "team," "group," "assisted," "helped," "contributed to," or "supported" without showing personal role |
| 6 | **Problem Context / "So What?"** | % of bullets that include context framing: stakes, before/after comparison, or scale statement |
| 7 | **Action Verbs** | % of bullets that start with a strong action verb. Fails if the bullet starts with "Responsible for," "Duties included," "Assisted with," "Helped with," "Contributed to," "Supported," "Involved in," or "Participated in" |
| 8 | **Bullet Quality Consistency** | Measures spread across bullets. Calculate the tier (★/★★/★★★) of every bullet, then score based on the gap between best and worst: |

#### Bullet Quality Consistency Scoring

| Condition | Score |
|---|---|
| All bullets within the same tier | 9–10 |
| Max spread is 1 tier (e.g., all ★★ and ★★★) | 6–8 |
| Max spread is 2 tiers (mix of ★ and ★★★) | 3–5 |
| Most bullets are ★ with only 1–2 at ★★ or above | 1–2 |

Within each band, use judgment: closer to uniform = higher end, more variation = lower end. This is the only criterion with a judgment component.

### Overall Score Calculation

```
Overall Score = (Sum of all 8 criteria scores) × 1.25, rounded to nearest integer
```

Maximum: 10 × 8 × 1.25 = 100. Minimum: 1 × 8 × 1.25 = 10.

### Tier Classification

| Score Range | Tier | Label |
|---|---|---|
| 10–30 | ★ | "You Did What Was Asked" |
| 31–60 | ★★ | "You Went Above and Beyond" |
| 61–100 | ★★★ | "You Spread the Impact Far and Wide" |

---

## Section Structure (7 Sections)

The output HTML must contain these 7 sections in this order. Design using the LaunchToLead brand from `brand_context.md`. Make it visually polished and print-friendly (Ctrl+P → PDF export).

### Header
- LaunchToLead branding with L² logo mark.
- "FREE AUDIT" badge.
- Title: "Resume Audit Report"
- Subtitle: Candidate name + degree/field.
- "Scored against the Impact Bullet Builder framework"

### Section 1: Overall Score
- Large score number out of 100 with progress bar.
- Show 4 featured sub-scores: Accomplishments, Metrics, How/Method, Why/Impact. These are the 4 IBB formula components (criteria 1–4). The remaining 4 criteria (5–8) appear only in the Section 7 scorecard.
- All 8 criteria feed the overall score — the Section 1 display is a visual summary of the formula components only.
- Progress bar labels showing tier boundaries: `10–30 ★ What Was Asked | 31–60 ★★ Above & Beyond | 61–100 ★★★ Impact`
- Verdict banner at the bottom with the tier name and a 2–3 sentence explanation.

### Section 2: Key Issues Identified (3–5)
- Pick the **3–5 issues that would move the score the most** if fixed.
- Order by score impact: the issue that would raise the overall score the most goes first. When two issues have equal impact, the one affecting more bullets goes first.
- Each issue: numbered badge, bold title, 2–3 sentence explanation referencing the specific IBB principle violated.
- Use red styling for critical issues (would affect 3+ bullets), amber for important issues (1–2 bullets).
- Quote the actual offending bullet text where possible.

### Section 3: Top Bullets — Rewritten (3–5)
- Select the **3–5 bullets with the highest improvement potential** — defined as bullets that already have at least 1–2 of the 4 IBB components and would gain the most from adding the missing components.
- For each: show the original (red/before) and rewritten (green/after) version.
- Label the context (e.g., "Work Experience — Software Engineer, Tech Mahindra").
- Use `[X]` placeholders where only the candidate knows the number.
- Include a note: "Brackets like [X] are placeholders — only you know the real numbers. Fill them in with your best estimate. A conservative guess beats no number at all."

### Section 4: Before & After — Best Examples (2–3)
- Select the **2–3 bullets with the greatest tier jump** (★ → ★★★ preferred over ★★ → ★★★).
- Red box: Original bullet labeled "BEFORE (★ Level)" or "BEFORE (★★ Level)."
- Green box: Rewritten bullet labeled "AFTER (★★★ Level)."
- These may overlap with Section 3 rewrites — that's fine, the visual side-by-side format serves a different purpose.

### Section 5: Top Action Items (3–5)
- The 3–5 highest-priority actions the candidate should take, ordered by impact.
- Each: numbered badge, bold title, 2–3 sentence explanation of what to do and why.

### Section 6: What's Already Working (3–5)
- 3–5 specific positives about the resume.
- Be specific: "Strong action verbs across all work bullets" is good. "Good resume" is not.
- This prevents the audit from feeling purely negative and shows what to preserve.

### Section 7: Full Scorecard
- Table with all 8 criteria, each showing: Criteria name | Score /10 | Specific observation note.
- Final row: OVERALL SCORE /100 with tier label.
- Below the table: "The Good News" banner — an encouraging paragraph highlighting the candidate's potential and what applying the IBB framework would unlock. Written in 2nd person.

### CTA Section
- "Want Help Fixing All of This?" heading.
- "This audit covered your top 3–5 bullets. The other bullets on your resume have the same potential — they just need the same treatment."
- Description of the 21-Day Accelerator Program (3 × 90-minute 1-on-1 sessions):
  1. Resume Rebuilt — every bullet rewritten with the Impact Bullet Builder formula
  2. Interview Stories Mastered — master story bank built in STAR format
  3. Live Mock Interview — full practice with direct feedback
- "You leave with: a rebuilt resume, master story bank, mock interview notes, all session recordings, and 40+ bonus materials."
- Link: `launchtolead.io/coaching` with tracking params: `?utm_source=audit&utm_medium=email&utm_campaign=free-audit&utm_content={candidate-slug}` (slug = lowercase first-last, hyphenated).
- Note: This link redirects to the offer page where they can watch the video and book a Career Launch Call.

### Footer
```
Free audit prepared by LaunchToLead | Impact Bullet Builder Framework
launchtolead.io/free
```

---

## Design Requirements

- Use the LaunchToLead brand from `brand_context.md` for colors, fonts, and styling.
- Include a "Download PDF" button (fixed top-right) that calls `window.print()`.
- Design for clean Ctrl+P → PDF export on letter-size paper.
- Include `@media print` CSS for proper page breaks, hidden download button, and background color printing.
- Each major section (2–7 + CTA) should start on a new page in print.
- Prevent cards, table rows, and before/after blocks from splitting across pages.

---

## Worked Example — Scoring Walkthrough

To ensure consistency, here's how to score a hypothetical resume with 8 bullets:

```
Bullets analyzed: 8 total (5 work experience + 3 projects)

Accomplishments: 5/8 pass (62.5%) → Score: 7/10
Metrics:         3/8 pass (37.5%) → Score: 4/10
How/Method:      4/8 pass (50%)   → Score: 5/10
Why/Impact:      2/8 pass (25%)   → Score: 3/10
Ownership:       7/8 pass (87.5%) → Score: 9/10
Context:         1/8 pass (12.5%) → Score: 2/10
Action Verbs:    8/8 pass (100%)  → Score: 10/10
Consistency:     Mix of ★ and ★★★ (2-tier spread) → Score: 4/10

Sum: 7+4+5+3+9+2+10+4 = 44
Overall: 44 × 1.25 = 55/100
Tier: ★★ (31–60)
```

This walkthrough ensures any LLM running this protocol produces the same score for the same resume, within ±2 points (the only variance comes from Bullet Quality Consistency, which has a small judgment band).
