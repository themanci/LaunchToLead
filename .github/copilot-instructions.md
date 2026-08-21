# Launch to Lead — Copilot Workspace Instructions

## Who We Are

Launch to Lead Engineering (L²) is run by Mansour Manci and helps engineers with 2–5 years' experience — good, solid performers who aren't getting promoted — build a stronger case for their next promotion. Our primary product is **ongoing 1:1 coaching** ($1,000/month, or $2,750 for 3 months upfront; no minimum commitment unless prepaid). We are NOT an agency, NOT a recruiter, NOT a group cohort, NOT a self-paced course — we are 1:1 coaching, one weekly session per client.

## Brand Context Reference

**Always read `L2_MASTER_BRAND_AND_OFFER_CONTEXT.md` in the project root before doing any significant work.** It contains the complete brand bible: colors, design system, programs, pricing, avatars, funnel architecture, named methods, testimonials, and offer copy. For content strategy and Reel production, see `L2_CONTENT_AND_REELS_PLAYBOOK.md`. For resume/audit work, see `L2_IMPACT_AND_RESUME_AUDIT_SYSTEM.md`. For proof points and testimonials, see `L2_PROOF_AND_TESTIMONIAL_LIBRARY.md`. For source priority, open questions, and what recently changed, see `L2_OPERATING_DECISION_LOG.md`. These six files (plus `L2_HANSEN_BECK_SUPPLEMENTAL_SOURCE_LIBRARY.md` and `L2_CURRENT_EXPERIMENTS_AND_ASSET_LIBRARY.md`) replace the old `BRAND_CONTEXT.md` and `protocols/claude/*.md` files, which are now archived at `context-archive/` for historical reference only — do not treat them as current.

## Voice & Tone

- **Brand voice:** Direct, confident, engineering-appropriate. No hype, no salesy language, no exclamation marks in professional content. Speak like a senior engineer giving career advice to a junior engineer they care about.
- **Mansour's voice (1st person content):** Conversational, honest about struggles, anti-corporate, values efficiency over fluff. "I'm not HR. I'm not a recruiter. I'm an engineer."
- **Audit/analysis voice:** Helpful friend who happens to be an expert. Factual, direct, never inflammatory or condescending. Frame problems as opportunities.
- **Banned words in audits:** disaster, filler, dead, kills/killer, pure filler, BS, thin, red flag, zero value. "Invisible" is NOT banned — it's a core positioning term ("Invisible Performer"/"Invisible Impact") and is fine to use anywhere, including audit feedback.
- **CTA language:** No discovery call, no "Career Launch Call" — enrollment is via a short application form (`offer/apply.html`, 8 fields); Mansour reaches out and talks with the applicant before deciding to work together. Comment **IMPACT** (cold, ⚠️ not live yet) / Comment **OFFER** (warm) / **launchtolead.io/offer** (hot) — see `L2_CONTENT_AND_REELS_PLAYBOOK.md`.

## Design System — "Emerald Flow"

| Token | Hex | Usage |
|-------|-----|-------|
| `brand-primary` | `#064e3b` (Emerald 900) | Primary buttons, headers, footer, logo |
| `brand-secondary` | `#14b8a6` (Teal 500) | Hover states, accents, check icons |
| `brand-accent` | `#a3e635` (Lime 400) | Highlights, badges, CTA alt |
| `brand-light` | `#ecfdf5` (Emerald 50) | Section backgrounds |
| `brand-surface` | `#ffffff` | Default surface |

- **Font:** Plus Jakarta Sans (Google Fonts, weights 300-800)
- **Scoring font:** Space Grotesk (for numbers in audits)
- **Icons:** Lucide via CDN (`<i data-lucide="icon-name">`)
- **CSS:** Tailwind CSS via CDN + `tailwind-config.js` — never write custom CSS unless absolutely necessary
- **Shadows:** `soft`, `card`, `fresh` (all emerald-tinted, defined in tailwind-config.js)

## Tech Constraints

- **No build tools.** Pure HTML + Tailwind CDN + vanilla JS. No npm, no bundlers, no frameworks.
- **Hosting:** GitHub Pages, branch `main`, domain `launchtolead.io`.
- **Analytics on every page:** GA4 (`G-L8V47TR52C`), Meta Pixel (`3141490496240983`). LinkedIn Insight Tag is discontinued (Instagram is the exclusive marketing platform now — see BRAND_CONTEXT.md Section 10/11). Always include the internal traffic exclusion cookie check.
- **Shared navigation:** `<div id="navigation-container"></div><script src="navigation.js"></script>` — never hardcode nav. Nav CTA ("Join Us") already routes directly to `offer/index.html` — this is current, no fix needed.
- **Scarcity badge on every page:** "Limited to 10 1:1 Clients at a Time" language with pulsing red dot (replaces the old "10 Spots" cohort-dates language, the earlier "Founder Cohort — Only 6 Spots," and the original "1-on-1 Live Coaching — Only 10 Spots / Month").

## Key Business Rules

- **Limited to 10 1:1 clients at a time** — a real calendar constraint, not cohort-style scarcity. No cohort dates, no enrollment window. Enrollment is via a short application form (`offer/apply.html`, 8 fields) — Mansour reaches out and talks with the applicant before deciding to work together.
- **$1,000/month pricing, or $2,750 for 3 months upfront.** No minimum commitment unless the client prepays for 3 months.
- **Ongoing 1:1 coaching, no fixed program length.** One weekly 1:1 session per client, built around what's actually happening in their job that week, plus text/voice support between sessions. Not a 6-month program, not a group cohort, no Skool community. Don't invent sessions/phases that don't exist.
- **Guarantee:** open-ended, no stated cap — "Complete your first month. Show up, do the work we agree on, and ask for help when you get stuck. If you still don't have a much clearer understanding of what is holding you back and what you should be doing differently, I'll continue working with you at no additional cost until you do." Mansour manages the open-endedness manually; do not add a cap without his explicit request.
- **ROI framing:** a stalled promotion can mean $10K–$30K/year in missed income.
- **Impact Bullet Builder (IBB):** The 4-part formula: Accomplishment + Metric + How + Why. Three tiers: ★/★★/★★★. Avatar-agnostic — reusable for both external resumes and internal promotion cases.
- **The 3 Program Layers:** Next-Level Work, Known for Impact, Trusted by Seniors (see `L2_MASTER_BRAND_AND_OFFER_CONTEXT.md` and `context-archive/magic-model-details.md`) — these still apply to 1:1 coaching; only the delivery format changed.
- **No founder-only bonuses or dollar-valued named tools** on the offer page — these read as hypey/cringy marketing to the engineer avatar. Do not reintroduce without Mansour's explicit request.
- **Named client outcomes (Karen, Austin, Jonah, AJ) are kept directly on the 1:1 offer page** — unlike the earlier group-cohort version, which pushed all proof off-page to Instagram/`success-stories.html`.
- **The free Engineering Resume Leak Finder tool has been retired** (`/free/`, `/leak/` redirect to homepage; source archived at `archive/retired-tools/resume-leak-finder/`).
- **Results disclaimer** on any page with testimonials: "Individual experiences presented here may not be typical. Your results may vary."

## File Organization

- Client files: `clients/{path}/{client_name}/`
- Canonical context docs: `L2_MASTER_BRAND_AND_OFFER_CONTEXT.md`, `L2_CONTENT_AND_REELS_PLAYBOOK.md`, `L2_PROOF_AND_TESTIMONIAL_LIBRARY.md`, `L2_IMPACT_AND_RESUME_AUDIT_SYSTEM.md`, `L2_OPERATING_DECISION_LOG.md`, `L2_CURRENT_EXPERIMENTS_AND_ASSET_LIBRARY.md`, `L2_HANSEN_BECK_SUPPLEMENTAL_SOURCE_LIBRARY.md` (all at repo root)
- Superseded docs (historical only): `context-archive/` — old `BRAND_CONTEXT.md`, old `protocols/claude/*.md` files, and the 3 archived context files
- Lead magnets: `lead-magnets/active/` — ⚠️ current lead magnets are archived (built for the old avatar); a new one for The Invisible Performer hasn't been built yet
- Client materials: `client_materials/launch/` and `client_materials/accelerate/`
- Ads: `ads/` (historical LinkedIn ad creatives — LinkedIn ads are discontinued)
- Proposals: `proposals/`
- Always use lowercase-with-hyphens for new filenames. Underscores for client names only.

## Working Patterns

- When creating HTML pages, follow the template in `BRAND_CONTEXT.md` Section 21.
- When editing existing pages, preserve the analytics scripts, nav component, and scarcity badge.
- When writing copy, use the Hormozi Value Equation framing: maximize Dream Outcome and Perceived Likelihood, minimize Time Delay and Effort.
- When creating resume audits, follow `protocols/resume-audit-protocol.md` exactly.
- When referencing the lead magnet, it's called "Impact Bullet Builder Starter Guide" — not "free ebook" or "PDF guide."
- Dual CTA pattern everywhere: primary "See If You're a Fit" + secondary "FREE Resume Guide."
