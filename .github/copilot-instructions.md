# Launch to Lead — Copilot Workspace Instructions

## Who We Are

Launch to Lead Engineering (L²) is a 6-month founder cohort program run by Mansour Manci that helps engineers with 2–5 years' experience — good, solid performers who aren't getting promoted — become Promotion-Ready Engineers. Our primary product is **The Promotion-Ready Engineer Blueprint** ($2,000 founder pricing, or 5×$500; standard price $6,000 after the founder cohort). We are NOT an agency, NOT a recruiter, NOT 1-on-1 ongoing coaching, NOT a self-paced course — we are a small founder cohort with weekly group calls.

## Brand Context Reference

**Always read `BRAND_CONTEXT.md` in the project root before doing any significant work.** It contains the complete brand bible: colors, design system, programs, pricing, avatars, funnel architecture, ad strategy, named methods, copywriting patterns, testimonials, and file structure. Reference it for any details not covered in these instructions. As of July 2026 (v5), the avatar and offer pivoted from recent-grad job search to "The Invisible Performer" — 2–5 year engineers stuck without promotion. Several sections of BRAND_CONTEXT.md are explicitly flagged as needing a coordinated rebuild (funnel infra, ad slugs, homepage/tracking) — read the inline ⚠️ flags before treating any section as settled fact.

## Voice & Tone

- **Brand voice:** Direct, confident, engineering-appropriate. No hype, no salesy language, no exclamation marks in professional content. Speak like a senior engineer giving career advice to a junior engineer they care about.
- **Mansour's voice (1st person content):** Conversational, honest about struggles, anti-corporate, values efficiency over fluff. "I'm not HR. I'm not a recruiter. I'm an engineer."
- **Audit/analysis voice:** Helpful friend who happens to be an expert. Factual, direct, never inflammatory or condescending. Frame problems as opportunities.
- **Banned words in audits:** disaster, filler, dead, kills/killer, pure filler, BS, thin, red flag, zero value. "Invisible" is NOT banned — it's a core positioning term ("Invisible Performer"/"Invisible Impact") and is fine to use anywhere, including audit feedback.
- **CTA language:** No discovery call / no "Career Launch Call" in the current funnel — it's application-based (apply → review → accepted → payment + Skool setup). Comment **IMPACT** (cold, ⚠️ not live yet) / Comment **OFFER** (warm) / **launchtolead.io** full offer doc (hot) — see `protocols/claude/content-creation-guide.md`.

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
- **Shared navigation:** `<div id="navigation-container"></div><script src="navigation.js"></script>` — never hardcode nav. Nav copy referencing "Book a Free Call" is stale and needs updating to route to the application instead.
- **Scarcity badge on every page:** "Founder Cohort — Only 6 Spots" with pulsing red dot (replaces the old "1-on-1 Live Coaching — Only 10 Spots / Month").

## Key Business Rules

- **6 founder spots** for the first case-study cohort — always enforce in copy and UI. Cohort starts August 12, 2026; enrollment closes August 9, 2026 or when spots fill.
- **$2,000 founder pricing** (or 5×$500); standard price **$6,000** after the founder cohort.
- **6-month program, 2 phases:** first 12 weeks = Build Sprint (kickoff + 9 core missions + closeout); next 12 weeks = Application Sprint (apply the plan at the real job). Skool community access for the full 6 months. Don't invent additional sessions/phases.
- **Guarantee:** 60-day buyback — "Give the program 60 days. If you show up, complete Missions 1–6, ask for help when you're stuck, and still don't feel like you have a clear Promotion-Ready Plan plus a stronger way to make your impact visible, I'll buy it back from you in full." Not a generic money-back guarantee.
- **ROI framing:** a stalled promotion can mean $10K–$30K/year in missed income.
- **Impact Bullet Builder (IBB):** The 4-part formula: Accomplishment + Metric + How + Why. Three tiers: ★/★★/★★★. Avatar-agnostic — reusable for both external resumes and internal promotion cases.
- **The 3 Program Layers:** Next-Level Work, Known for Impact, Trusted by Seniors (see `protocols/claude/magic-model-details.md`).
- **The free Engineering Resume Leak Finder tool has been retired** (`/free/`, `/leak/` redirect to homepage; source archived at `archive/retired-tools/resume-leak-finder/`).
- **Results disclaimer** on any page with testimonials: "Individual experiences presented here may not be typical. Your results may vary."

## File Organization

- Client files: `clients/{path}/{client_name}/`
- Protocols: `protocols/claude/` (brand context, offer doc, avatar, magic model, hot button map, content creation guide, resume audit protocols)
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
