---
description: "Use when running resume audits, analyzing resumes, scoring resume bullets, rewriting resume content, creating resume analysis HTML files, or working with the Impact Bullet Builder (IBB) framework. Covers audit protocol, scoring, tone, and output format."
applyTo: ["clients/**/*analysis*", "clients/**/*audit*", "resumes/**", "protocols/resume-audit*"]
---
# Resume Audit Instructions

## Before Starting ANY Audit

1. Read the full protocol: `protocols/resume-audit-protocol.md`
2. Read the IBB framework: `lead-magnets/active/impact-bullet-builder.html`
3. Read `BRAND_CONTEXT.md` Section 8 (IBB Framework) for quick reference

## The Impact Bullet Builder Formula

Every resume bullet must be evaluated against all 4 components:

```
Accomplishment + Metric + How + Why = IMPACT
```

- **Accomplishment:** What did YOU do? (not "responsible for")
- **Metric:** How much? How many? What %? What $?
- **How:** What tools, methods, or skills did you use?
- **Why:** Why does the CEO care? Business impact.

## Scoring System

### Overall Score: 0-100

| Sub-score | Weight | Evaluates |
|-----------|--------|-----------|
| Accomplishments | /10 | Bullets are accomplishments, not duty descriptions |
| Metrics | /10 | Bullets have quantified numbers (%, $, time, count) |
| How / Method | /10 | Tools and methods shown in context, not just listed |
| Why / Business Impact | /10 | Reader knows why the CEO would care |

### Tier System

| Range | Tier | Meaning |
|-------|------|---------|
| 0-30 | ★ "You Did What Was Asked" | Functionally invisible to recruiters |
| 31-60 | ★★ "You Went Above and Beyond" | Has some numbers but missing full impact |
| 61-100 | ★★★ "You Spread the Impact Far and Wide" | Ready to land interviews |

## Voice & Tone (CRITICAL)

- **Write in 2nd person** — "you" / "your" throughout
- **Tone:** Helpful friend who happens to be an expert
- **DO:** "This section is taking up space that could be working harder for you"
- **DON'T:** "This section is a structural disaster"
- **DO:** "Hiring managers won't get much from this as written"
- **DON'T:** "This adds zero value"
- **Frame problems as opportunities**, not deficiencies
- **No cheesy taglines.** No "No pitch. No pressure. Just a plan."

### Banned Words (NEVER use in audits)

disaster, filler, dead, invisible, kills, killer, resume killer, pure filler, BS, thin, red flag, zero value

## Output Format — 7 Sections

1. **Overall Score** — 0-100 with visual progress bar, 4 sub-scores, tier verdict banner
2. **Key Issues** (5-8) — numbered badges (red=critical, amber=moderate), quote offending bullets
3. **Rewritten Resume** — ENTIRE resume rewritten with IBB formula, `[X]` placeholders for unknown metrics, tagged: 🟢 REWRITTEN / 🟡 CONSIDER REMOVING / 🔴 REMOVE OR REWRITE
4. **Before & After** (3 examples) — red box (★ Level original) vs green box (★★★ Level rewritten)
5. **Action Items** (5-8) — numbered, prioritized, actionable
6. **What's Already Working** (3-5) — green-themed, specific strengths to preserve
7. **Full Scorecard** — 8-criteria table, each scored /10 with notes

## Bullet Rewrite Tags

- 🟢 `REWRITTEN` — Transformed using the full formula
- 🟡 `CONSIDER REMOVING` — Low-value, show strikethrough + conditional rewrite
- 🔴 `REMOVE OR REWRITE` — Violates core principles, should be cut or completely redone

## Key Principles to Check

1. **Personal Ownership** — Flag "we/team/group" language. Replace with specific personal contribution.
2. **Problem Context** — Paint the pain FIRST (stakes, before/after, scale).
3. **Action Verbs** — Never start with "Responsible for," "Duties included," "Assisted with," "Helped with," "Contributed to," "Supported."
4. **Skills in Context** — Show tools IN bullets, not just in a Skills section.
5. **BS Meter** — No vague claims without proof.

## HTML Styling Requirements

- Use Tailwind CSS via CDN + brand colors from `tailwind-config.js`
- Font: Plus Jakarta Sans for body, Space Grotesk for scores/numbers
- Print-friendly CSS (Ctrl+P → PDF export must work cleanly)
- CTA at bottom: "Want Help Fixing All of This?" → `launchtolead.io/landing/offer.html` with UTM `utm_content={candidate-slug}`
- CTA button text: "See Full Program Details"

## Lead Magnet Audit (lighter version for leads, not clients)

- 3-5 issues (not 5-8)
- Top 3-5 bullets rewritten (not entire resume)
- 2-3 before/after examples
- Same scoring system and scorecard
- Template: `resumes/lead-magnet-audit-template.html`

## Resume Comparison Reports

When comparing two resume versions:
- Show score change (old → new, +/- delta)
- Tier change visualization
- List improvements with specific before/after text
- List regressions (anything lost or weakened)
- Section-by-section breakdown table
- Next steps to reach next tier
