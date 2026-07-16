# LaunchToLead Resume Audit Protocol — Full Client Version

> **Version:** 1.0 — Claude-ready  
> **Trigger phrase:** "Run a full audit" or "Run a client audit"  
> **Purpose:** Complete resume audit for paying clients or serious prospects. Every bullet analyzed and rewritten. No CTA — this is delivery, not marketing.  
> **Context dependencies:** This file + `impact-bullet-builder-framework.md` + `brand_context.md` (all uploaded as Claude Project context files)

---

## Input & Output

- **Input:** The user will paste a resume directly into the conversation (plain text or copied from PDF).
- **Output:** A single, complete HTML file. Output the full HTML in a code block. The user will copy it into a local `.html` file and export to PDF via Ctrl+P.
- **Filename convention:** `{first_last}_analysis.html` (lowercase, underscore-separated).
- All `[X]` placeholders must remain where only the candidate would know the real number. No `{{PLACEHOLDER}}` template tags should appear in the output — every field must be filled with real analysis.

---

## Scope — Full Audit

| Element               | This (Full) Audit  |
| --------------------- | ------------------ |
| Key Issues            | **5–8**            |
| Bullets Rewritten     | **ALL bullets**    |
| Before/After Examples | **3**              |
| Action Items          | **5–8**            |
| What's Working        | 3–5                |
| Scorecard             | Full 8-criteria    |
| Full Resume Rewrite   | **Yes** (Section 3) |
| CTA at Bottom         | **None** — this is client work |

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
- No cheesy taglines.

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

**0% = score 1, not 0.** A resume with zero metrics still gets 1/10, not 0.

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
| 8 | **Bullet Quality Consistency** | Measures spread across bullets — see scoring table below |

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

## Graduate & Research Track Scoring Adjustments

For candidates who are **currently enrolled, recently graduated with limited industry experience, or research-track engineers** (grad students, lab assistants, thesis writers), apply these adjustments before scoring.

### Bullet Scope
Include bullets from coursework projects, research lab work, thesis work, club/extracurricular engineering projects, and internships alongside any industry work. Treat all of these as in-scope bullets for scoring.

### Metric Proxies (Academic Context)
Industry engineers have % improvements, $ figures, and user counts. Graduates often don't. These count as passing metrics for academic candidates:
- Sample sizes, dataset sizes, trial counts
- Performance context: "1 of 6 teams selected to advance," "top 20% of 120-student cohort"
- Lab precision or error reduction: "reduced experimental error from ±12% to ±3%"
- Time savings within a project: "cut simulation runtime from 4 hours to 45 minutes"
- Scope indicators: "designed for 200+ units," "analyzed 5,000+ data points"

A specific number = pass, even if academic. Vague words ("multiple," "several," "various") still fail.

### Why / Business Impact (Academic Context)
Interpret broadly for graduates:
- Research: "enabling future deployment in X field" or "supporting the lab’s Y grant"
- Projects: "reducing redesign cycles," "improving prototype reliability for field testing"

A why statement connecting to real-world application counts — no dollar figure required.

### Score Interpretation for Graduates
A score of 40–55 is strong for a graduate candidate. Note this in the audit:
> "For a candidate at your stage, this score reflects solid foundations. The gap to ★★★ is mostly about adding metrics and business-impact framing — skills you’ll build quickly once you’re in the field."

### Tone Adjustments
- Normalize the metric gap: "You don’t have 5 years of project data yet — but academic data, lab results, and project outcomes all count."
- Emphasize untapped material: capstone, thesis, lab work, and club projects are underused by most students.
- Never penalize for classroom experience. If projects are well-described with context and method, the foundation is there.

---

## Section Structure (7 Sections)

The output HTML must contain these 7 sections in this order. Design using the LaunchToLead brand from `brand_context.md`. Make it visually polished and print-friendly (Ctrl+P → PDF export).

### Header
- LaunchToLead branding with L² logo mark.
- Title: "Resume Audit Report"
- Subtitle: Candidate name + degree/field.
- "Scored against the Impact Bullet Builder framework"

### Section 1: Overall Score
- Large score number out of 100 with progress bar.
- Show 4 featured sub-scores: Accomplishments, Metrics, How/Method, Why/Impact. These are the 4 IBB formula components (criteria 1–4). The remaining 4 criteria (5–8) appear only in the Section 7 scorecard.
- All 8 criteria feed the overall score — the Section 1 display is a visual summary of the formula components only.
- Progress bar labels showing tier boundaries: `10–30 ★ What Was Asked | 31–60 ★★ Above & Beyond | 61–100 ★★★ Impact`
- Verdict banner at the bottom with the tier name and a 2–3 sentence explanation.

### Section 2: Key Issues Identified (5–8)
- List **5–8 specific problems** found on the resume, ordered by score impact.
- Order by: the issue that would raise the overall score the most if fixed goes first. When two issues have equal impact, the one affecting more bullets goes first.
- Each issue: numbered badge, bold title, 2–3 sentence explanation referencing the specific IBB principle violated.
- Use red styling for critical issues (would affect 3+ bullets), amber for important issues (1–2 bullets).
- Quote the actual offending bullet text where possible.

### Section 3: Rewritten Resume (FULL)
- Rewrite **every bullet** on the resume using the Impact Bullet Builder formula.
- Preserve the resume's structure: Education, Experience, Projects, Awards, Skills sections in their original order.
- `[X]` placeholder for any metric, number, or detail only the candidate would know.
- Tag each bullet with a colored label:
  - 🟢 **REWRITTEN** — bullet has been transformed using the formula.
  - 🟡 **CONSIDER REMOVING** — bullet is low-value and may not be worth keeping. Show strikethrough + conditional rewrite.
  - 🔴 **REMOVE OR REWRITE** — bullet violates core principles and should be cut or completely redone.
- Make the candidate's best accomplishment (biggest project, award, most impressive result) visually prominent — don't bury it.

### Section 4: Before & After — Best Examples (3)
- Select the **3 bullets with the greatest tier jump** (★ → ★★★ preferred over ★★ → ★★★).
- Red box: Original bullet labeled "BEFORE (★ Level)" or appropriate tier.
- Green box: Rewritten bullet labeled "AFTER (★★★ Level)."

### Section 5: Action Items Summary (5–8)
- 5–8 prioritized actions, ordered by impact on score.
- Each: numbered badge, bold title, 2–3 sentence explanation of what to do and why.

### Section 6: What's Already Working (3–5)
- 3–5 specific positives about the resume.
- Be specific: "Strong action verbs across all work bullets" is good. "Good resume" is not.

### Section 7: Full Scorecard
- Table with all 8 criteria: Criteria name | Score /10 | Specific observation note.
- Final row: OVERALL SCORE /100 with tier label + one-line verdict.
- Below the table: "The Good News" banner — an encouraging paragraph highlighting the candidate's potential and what applying the IBB framework would unlock. Written in 2nd person.

### Footer (no CTA — this is client work)
```
Analysis prepared by LaunchToLead | Impact Bullet Builder Framework
launchtolead.io
```

---

## Design Requirements

- Use the LaunchToLead brand from `brand_context.md` for colors, fonts, and styling.
- Include a "Download PDF" button (fixed top-right) that calls `window.print()`.
- Design for clean Ctrl+P → PDF export on letter-size paper.
- Include `@media print` CSS for proper page breaks, hidden download button, and background color printing.
- Each major section (2–7) should start on a new page in print.
- For Section 3 (full resume rewrite), add page breaks at natural points: before each new role, before "Projects" subsection, before "Research" if applicable.
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
