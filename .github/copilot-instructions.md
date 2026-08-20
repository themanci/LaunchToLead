# Launch to Lead — Copilot Workspace Instructions

## Who We Are

Launch to Lead Engineering (L²) is a 6-month group program run by Mansour Manci that helps engineers with 2–5 years' experience — good, solid performers who aren't getting promoted — build a stronger case for their next promotion. Our primary product is a 6-month group program ($1,000 paid in full, or 5×$250; no future/standard price is advertised). We are NOT an agency, NOT a recruiter, NOT 1-on-1 ongoing coaching, NOT a self-paced course — we are a small group cohort with weekly group calls.

## Brand Context Reference

**Always read `L2_MASTER_BRAND_AND_OFFER_CONTEXT.md` in the project root before doing any significant work.** It contains the complete brand bible: colors, design system, programs, pricing, avatars, funnel architecture, named methods, testimonials, and offer copy. For content strategy and Reel production, see `L2_CONTENT_AND_REELS_PLAYBOOK.md`. For resume/audit work, see `L2_IMPACT_AND_RESUME_AUDIT_SYSTEM.md`. For proof points and testimonials, see `L2_PROOF_AND_TESTIMONIAL_LIBRARY.md`. For source priority, open questions, and what recently changed, see `L2_OPERATING_DECISION_LOG.md`. These six files (plus `L2_HANSEN_BECK_SUPPLEMENTAL_SOURCE_LIBRARY.md` and `L2_CURRENT_EXPERIMENTS_AND_ASSET_LIBRARY.md`) replace the old `BRAND_CONTEXT.md` and `protocols/claude/*.md` files, which are now archived at `context-archive/` for historical reference only — do not treat them as current.

## Voice & Tone

- **Brand voice:** Direct, confident, engineering-appropriate. No hype, no salesy language, no exclamation marks in professional content. Speak like a senior engineer giving career advice to a junior engineer they care about.
- **Mansour's voice (1st person content):** Conversational, honest about struggles, anti-corporate, values efficiency over fluff. "I'm not HR. I'm not a recruiter. I'm an engineer."
- **Audit/analysis voice:** Helpful friend who happens to be an expert. Factual, direct, never inflammatory or condescending. Frame problems as opportunities.
- **Banned words in audits:** disaster, filler, dead, kills/killer, pure filler, BS, thin, red flag, zero value. "Invisible" is NOT banned — it's a core positioning term ("Invisible Performer"/"Invisible Impact") and is fine to use anywhere, including audit feedback.
- **CTA language:** No discovery call, no "Career Launch Call" — enrollment is via a short application form (`offer/apply.html`, 8 fields) reviewed within 48 hours. Comment **IMPACT** (cold, ⚠️ not live yet) / Comment **OFFER** (warm) / **launchtolead.io/offer** (hot) — see `L2_CONTENT_AND_REELS_PLAYBOOK.md`.

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
- **Scarcity badge on every page:** "10 Spots" language with pulsing red dot (replaces the old "Founder Cohort — Only 6 Spots" and the original "1-on-1 Live Coaching — Only 10 Spots / Month").

## Key Business Rules

- **10 spots** for this cohort — always enforce in copy and UI. Cohort starts September 15, 2026; sign-up closes September 11, 2026 or when spots fill. Enrollment is via a short application form (`offer/apply.html`, revived and trimmed to 8 fields) — not a DM-only funnel.
- **$1,000 pricing** (or 5×$250); no future/standard price is advertised on the offer page (the $6,000 anchor was deliberately removed).
- **6-month program, 2 phases:** first 3 months = learn and build (weekly group calls); next 3 months = put it into practice (apply the plan at the real job). Skool community access for the full 6 months. Don't invent additional sessions/phases.
- **Guarantee:** 60-day refund — "Give the program 60 days. If you show up, complete the first six assignments, ask for help when you're stuck, and still don't feel like you have a clear plan for becoming promotion-ready and a stronger way to make your impact visible, I'll refund the full $1,000." Not a generic money-back guarantee.
- **ROI framing:** a stalled promotion can mean $10K–$30K/year in missed income.
- **Impact Bullet Builder (IBB):** The 4-part formula: Accomplishment + Metric + How + Why. Three tiers: ★/★★/★★★. Avatar-agnostic — reusable for both external resumes and internal promotion cases.
- **The 3 Program Layers:** Next-Level Work, Known for Impact, Trusted by Seniors (see `L2_MASTER_BRAND_AND_OFFER_CONTEXT.md` and `context-archive/magic-model-details.md`).
- **No founder-only bonuses or dollar-valued named tools** on the offer page as of the Aug 20, 2026 rewrite — these read as hypey/cringy marketing to the engineer avatar. Do not reintroduce without Mansour's explicit request.
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
