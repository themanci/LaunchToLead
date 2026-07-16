# Launch to Lead — Complete Brand Context

> **Purpose:** Single-source brand bible for feeding to LLMs. Covers identity, design, programs, pricing, avatars, funnel, tracking, content, protocols, and every key business decision.
> **Last updated:** July 2026
> **v6 change:** Section 15 Voice & Tone Guidelines — removed "invisible" from the banned words list and resolved the previously-flagged conflict (it's core positioning language now, fine to use in audit feedback too). Superseded: v5.
> **v5 change:** Avatar and core offer swapped from recent-grad job search to "The Invisible Performer" (2–5 year engineers stuck without promotion). Sections 1, 6, 7, 13, 16–18 updated to match. Sections 9–12 (funnel infrastructure, ad slugs, homepage/tracking specifics) still reference the old offer's live URLs, pricing, and ad creative — these need a coordinated rebuild, not just a text edit, before they're accurate. Flagged inline below rather than silently rewritten.

---

## 1. Company Overview

- **Brand Name:** Launch to Lead Engineering (LaunchToLead, L²)
- **Domain:** launchtolead.io
- **Tagline:** "A 6-month program to become a Promotion-Ready Engineer — next-level work, visible impact, and senior trust, built in a small founder cohort."
- **Business Model:** 6-month founder cohort program for engineers with 2–5 years' experience who are stuck without promotion. NOT 1-on-1 ongoing coaching, NOT a course, NOT pre-recorded content. Structure: kickoff call, first 12 weeks = 9 core missions (Build Sprint), next 12 weeks = Application Sprint applying the plan at work, plus Skool community access for the full 6 months.
- **Scarcity:** 6 founder spots for the first case-study cohort. Enrollment closes August 9, 2026 or when spots fill; cohort starts August 12, 2026. Standard price moves to $6,000 after the founder cohort — update this section after each cohort window closes.
- **Founded:** 2025
- **Copyright:** © 2026 Launch to Lead Engineering
- **Email:** contact@launchtolead.io
- **Legal Entity:** Sole proprietorship (Mansour Manci)

---

## 2. Founder — Mansour Manci

### Background
- 8 years at John Deere
- 4 promotions, 4 career pivots (Mechanical → Embedded Software → Systems Engineering → Engineering Leadership/Management)
- Sat on both sides of the hiring table — applied to jobs, interviewed candidates, and hired engineers
- Built the program to teach what actually moves an engineer from "solid and trusted" to "seen as ready for the next level" — the same visibility, proof, and trust-building he had to learn the hard way across 4 pivots in 8 years

### Education
- **M.Eng.** — Mechanical Engineering, Iowa State University, Ames, IA
- **B.S.** — Mechanical Engineering, Iowa State University, Ames, IA
- **Systems Engineering Certificate** — California Institute of Technology (Caltech)

### Technical Skills
- Programming: C, Python, MATLAB, Simulink, R, VBScript, DIAdem
- Tools: Azure DevOps, Git, Subversion, Mercurial, Jenkins, CANalyzer
- Methodologies: DevEx, PV&V, Systems Engineering, CI, Root Cause Analysis

### Core Positioning
"I am not an HR person, I am not a recruiter, I am not a contract head hunter, I am an engineer. I got an engineering degree and landed the job. I have hired people at John Deere as an engineer, not an HR person. I have interviewed people as an engineering manager. I have coached other engineering students, interns, and entry level employees as an engineer myself, as a staff engineer myself, as an engineering manager myself. This isn't HR and recruiter talk about how to be an engineer that stands out, this is coming from an engineer, a senior engineer, a staff engineer, an engineering manager."

### Personal Story
- Grew up in the Midwest. Decent at math → engineering degree
- Nobody taught him how to actually land a job — no 4.0 GPA, limited internship experience, no mentor. Sent out the same generic resume to every posting and heard nothing back. Figured out what worked and landed at John Deere. *(Brief — this is the on-ramp, not the main story.)*
- The real story is the 8 years after that: 4 promotions, 4 discipline pivots (Mechanical → Embedded Software → Systems Engineering → Engineering Leadership/Management)
- Each pivot required the same pattern this program now teaches: master the current role fast, make the impact visible to people outside his immediate team, and earn trust from senior leaders before the title caught up
- He learned this by doing it wrong first — doing good technical work and assuming it would speak for itself, watching other people get the visible projects, then figuring out what actually got him noticed and trusted with more
- Later sat on hiring panels and in promotion/calibration conversations as a manager — saw the same pattern from the other side: good engineers passed over not for lack of skill, but for lack of visible proof
- Started coaching because he kept seeing engineers stuck in the exact spot he used to be stuck in — good work, no promotion, no idea why

---

## 3. Brand Identity & Design System

### Design System Name: "Emerald Flow"

### Logo
- **Mark:** Dark emerald green rounded square with white "L²" text
- **Wordmark:** "Launch" (bold, slate 900) + "ToLead" (light weight, brand-secondary teal)
- **Favicon:** SVG — `#064e3b` rounded rect, white "L²" in Plus Jakarta Sans, 800 weight
- **Usage:** `<div class="bg-brand-accent text-brand-primary w-8 h-8 rounded-lg"><span class="font-bold">L²</span></div>`

### Color Palette

| Token | Hex | Tailwind | Usage |
|-------|-----|----------|-------|
| `brand-primary` | `#064e3b` | Emerald 900 | Primary buttons, headers, footer bg, logo bg |
| `brand-secondary` | `#14b8a6` | Teal 500 | Hover states, accents, check icons, gradient endpoints |
| `brand-accent` | `#a3e635` | Lime 400 | Highlight badges, CTA alt, footer wordmark |
| `brand-light` | `#ecfdf5` | Emerald 50 | Section backgrounds, card fills |
| `brand-surface` | `#ffffff` | White | Default surface |

**Additional UI colors used:**
- `slate-900` — dark text, dark sections (hero alternatives, pricing blocks)
- `slate-600` — body text
- `slate-50` — alternate section backgrounds
- `amber-500` / `amber-400` — testimonial badges, star ratings, bonus section
- `red-500` — scarcity pulse dot, pain point markers
- `red-400` — "✗" markers in "what you've tried" sections
- Gradient: `from-brand-primary to-brand-secondary` — accent text, section headers
- Gradient: `from-emerald-50 to-teal-50` — offer card backgrounds
- Gradient: `from-emerald-900 to-slate-900` — popup backgrounds
- Gradient: `from-emerald-600 to-teal-600` — final CTA block

### Typography

| Font | Source | Weights | Usage |
|------|--------|---------|-------|
| Plus Jakarta Sans | Google Fonts CDN | 300, 400, 500, 600, 700, 800 | Primary — all body text, headings, UI |
| Space Grotesk | Google Fonts CDN | 500, 700 | Monospace-style numbers in scoring/audit displays |

### Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `soft` | `0 4px 20px -2px rgba(6, 78, 59, 0.1)` | Subtle elevation |
| `card` | `0 10px 40px -10px rgba(6, 78, 59, 0.15)` | Card elevation |
| `fresh` | `0 0 20px rgba(20, 184, 166, 0.25)` | Glow accent |

### Background Patterns
- **Dots:** `radial-gradient(#14b8a6 1px, transparent 1px)` at 20px spacing, used at 10-20% opacity
- **Blobs:** bg-teal-100 and bg-lime-100 rounded-full blur-3xl circles at 60% opacity, positioned at corners

### Visual Patterns
- Rounded corners: `rounded-2xl` (cards), `rounded-full` (buttons, avatars), `rounded-lg` (smaller elements)
- Border widths: `border-2` for emphasis cards, `border` for standard cards
- Image treatment: `border-4 border-slate-800 shadow-2xl` for hero photos, `border-3 border-emerald-400` for testimonial avatars
- Animation: `animate-pulse` on red dot (scarcity badge)
- Hover: `hover:-translate-y-0.5 hover:shadow-xl` on CTAs

### Icons
- **Library:** Lucide (CDN: `unpkg.com/lucide@latest`, loaded with `defer`)
- **Usage:** `<i data-lucide="icon-name" class="w-5 h-5"></i>`, initialized via `lucide.createIcons()`
- **Common icons:** check-circle, shield-check, download, arrow-right, gift, quote, mail, linkedin, youtube, instagram, facebook, graduation-cap, code-2, play-circle, video, file-text

---

## 4. Tech Stack & Architecture

### Frontend
- **HTML5** — static pages, no build step, no framework
- **Tailwind CSS** — CDN (`cdn.tailwindcss.com`) + custom config in `tailwind-config.js`
- **No JavaScript build pipeline** — vanilla JS only
- **No bundler** — raw HTML/JS/CSS files

### Hosting & Deployment
- **GitHub Pages** with custom domain
- **Repository:** `github.com/themanci/LaunchToLead`, branch: `main`
- **CNAME:** `launchtolead.io`
- **Deployments:** Push to `main` → auto-deploy via GitHub Pages

### Third-Party Services
| Service | Purpose | ID/Config |
|---------|---------|-----------|
| Google Analytics 4 | Traffic analytics | `G-L8V47TR52C` |
| Meta Pixel | Facebook/Instagram ad tracking | `3141490496240983` |
| Kit (ConvertKit) | Email capture & sequences | Form `#8815632` |
| Calendly | ✅ Confirmed removed (July 2026) — no longer referenced anywhere in `navigation.js` or any live page. This row is historical only. | `calendly.com/themanci-launchtolead/career-launch-call` (retired) |
| Skool | Free community | `skool.com/launch-to-lead-community-6905` |
| Google Calendar | ✅ Confirmed removed (July 2026) — no longer referenced anywhere in `navigation.js` or any live page. Historical only. | Retired |
| Stripe | Payment processing | Product pages created |

### Analytics Architecture
- **Internal traffic exclusion:** Cookie `ltl_internal=true` disables GA4 via `window['ga-disable-G-L8V47TR52C']=true`
- **GA4 events tracked:** `offer_page_click`, `thankyou_page_view` (with UTM attribution)
- **Meta Pixel events:** PageView (all pages), ViewContent (key pages with content_name/category), Lead (booking clicks — ⚠️ "booking clicks" is stale language now that there's no discovery call, but the Lead event itself may still fire on application starts), plus fbc/fbp parameter passing for Event Match Quality
- **UTM Tracker** (`utm-tracker.js`): Captures utm_source/medium/campaign/content/term; stores in localStorage with 30-day TTL; derives human-readable `traffic_source` labels; exposes `window.getUtmData()` API. LinkedIn's `li_fat_id` parameter capture is no longer relevant and can be dropped.

### Navigation Structure
Shared component (`navigation.js`) injected into `#navigation-container`:
- **Desktop:** About, Success Stories, Legal, "Join Us" CTA button → links directly to `offer/index.html`. ✅ Confirmed (July 2026): the old "Book a Free Call" / Calendly CTA is gone — `navigation.js` now only builds nav for `index.html`, `success-stories.html`, `about.html`, `legal.html`, with the CTA pointing straight at the current offer page.
- **Mobile:** Same items, hamburger menu
- **Active page highlighting:** Automatic based on URL

---

## 5. Social Media Presence

| Platform | Handle/URL | Status |
|----------|------------|--------|
| Skool Community | `skool.com/launch-to-lead-community-6905` | Active — free community |
| LinkedIn Company | `linkedin.com/company/110177288` | Active — primary ad platform |
| YouTube | `youtube.com/@launchtolead` | Active |
| TikTok | `tiktok.com/@launch.to.lead1` | Active |
| Instagram | `instagram.com/launch.to.lead/` | Active |
| X (Twitter) | `x.com/LaunchToLead` | Active |
| Facebook | `facebook.com/profile.php?id=61585810773337` | Active |

---

## 6. Programs & Offers

## 6A. The Promotion-Ready Engineer Blueprint (PRIMARY — active offer)

**The core product. All marketing and advertising is focused here.** Program name: **The Promotion-Ready Engineer Blueprint**. "Promotion-Ready Engineer" alone still refers to the outcome/Yellow Goal in the Magic Model (Section 16 vault, `CLIENTS_--_Magic_Model_Details.txt`) — use the full Blueprint name for the product itself.

**Canonical source:** `CLIENTS_--_Offer_Doc.txt` — treat this as the authoritative copy. `CLIENTS_--_Offer_Diamond_Full_Context.txt` and `CLIENTS_--_Offer_Genie_Full_Context.txt` are the supporting build-out conversations and should be kept in sync with it.

#### Promise
"In 12 weeks, build your Promotion-Ready Plan. In 6 months, use it at work to create the next-level work, visible impact, and senior trust to make a real promotion case." (Not a promise that the company promotes them — the promise is the controllable part: proof, visibility, and trust.)

#### Format
6-month founder cohort. Weekly Zoom calls. First 12 weeks = Build Sprint (kickoff call + 9 core missions + closeout session). Next 12 weeks = Application Sprint, applying the plan inside their actual job. Skool community access included from day one.

#### The 3 Program Layers (maps to the Magic Model — see `CLIENTS_--_Magic_Model_Details.txt`)
1. **Next-Level Work** — get out of low-leverage tasks: master current workload, make work teachable to others, expand scope.
2. **Known for Impact** — stop letting useful work disappear into tickets and Slack threads: demonstrate value, spread impact, reach leaders.
3. **Trusted by Seniors** — turn "solid engineer" into "person we trust with more": meet commitments, own outcomes, influence others.

#### Pricing & Payment (Founder's Case Study Group)
- **$2,000 paid in full**, or **5 payments of $500** ($2,500 total — paid-in-full saves $500)
- **Capacity:** 6 founder spots. Cohort starts August 12, 2026; enrollment closes August 9, 2026 or when spots fill.
- **After this founder cohort:** standard price moves to $6,000.

#### Bonuses
1. **Founder Fast-Track Roadblock Audit** — worth $750 — private 60-min 1:1 before the cohort starts, first 3 founders only
2. **Promotion Impact Audit Tool** — worth $500 — for all cohort members, opens August 12; ranks 3 real projects on promotion strength (scope, leverage, business impact, visibility, leadership signal, gaps)
3. **Performance Review Game Plan** — worth $750 — for all cohort members; a guided template/process they complete when a review or manager checkpoint approaches, reviewed by Mansour
4. **Mock Behavioral Interview** — worth $750 — full 1:1 behavioral interview at the end of the program, first 3 founders only

> **Open question:** the live IBB resume-bullet audit tool at launchtolead.io (Cloudflare Workers, static front-end) and the new "Promotion Impact Audit Tool" bonus may be the same tool rebranded, or two different deliverables. Needs a decision before build — see On the Horizon.

#### Guarantee
"Give the program 60 days. If you show up, complete Missions 1–6, ask for help when you're stuck, and still don't feel like you have a clear Promotion-Ready Plan plus a stronger way to make your impact visible, I'll buy it back from you in full. No hard feelings."

#### The 3 Reds (felt obstacles blocking the outcome)
1. Low-Leverage Tasks
2. Invisible Impact
3. Unproven Leadership

- **Prove next-level capability** — Impact Bullet Builder™, Master Workload, Train Others, Expand Scope
- **Make impact known** — Demonstrate Value, Spread Impact, Reach Leaders, High-Impact Story Framework™, Competency Story Map™
- **Earn senior trust** — Meet Commitments, Own Outcomes, Influence Others, Power Pause + Story Arsenal™, Numbered Roadmap™, Research Your Worth System™

> **Note:** Method-to-mission sequencing (which named methods live in which of the 9 core missions) hasn't been rebuilt yet for the new 12-week Build Sprint structure. This needs the same remap work the old session-based version already went through once.

---

## 7. Target Customer Avatar

**Single avatar — per L2_content_creation_guide_v5.md. All content and offer copy is written for this person only.**

### The Invisible Performer
- **Profile:** 2–5 years into engineering. Technically solid, good reviews, trusted to deliver — not yet seen as a promotion-ready leader.
- **Core pain:** Manager keeps saying "you're doing great," but the promotion isn't happening. Good work isn't getting credited past their own team or manager.
- **Pain points:** Stuck in low-leverage tasks, impact is invisible outside their team, unproven with senior leaders, doesn't know how to advocate for themselves without sounding cringe.
- **Emotional state:** Quietly wondering if being good at the job isn't enough. Doesn't want to become "the annoying self-promoter with a personal brand and a ring light."
- **Budget sensitivity:** Moderate — employed, will pay $2K–$3K if it's tied to a believable $15K–$30K promotion, not sold as motivation.
- **LinkedIn ad prefix:** not yet defined — needs your input on targeting segments before it can be filled in. See Section 11.

---

## 8. The Impact Bullet Builder (IBB) Framework

**The proprietary resume framework at the center of everything Launch to Lead does.**

### The Formula
```
Accomplishment + Metric + How + Why = IMPACT
```

| Component | What It Answers | Example |
|-----------|----------------|---------|
| **Accomplishment** | What did you DO? (not "responsible for") | Redesigned the thermal monitoring pipeline... |
| **Metric** | How much? How many? What %? What $? | ...reducing false alarms by 74%... |
| **How** | What tools, methods, or skills did you use? | ...using Python-based anomaly detection in MATLAB... |
| **Why** | Why does the CEO care? Business impact. | ...saving $1.2M/year in unnecessary shutdowns. |

### Three Tiers of Value
- **★ "You Did What Was Asked"** (0-30 score) — Duty descriptions, ignored by recruiters (or by a promotion committee)
- **★★ "You Went Above and Beyond"** (31-60 score) — Tasks + some numbers, considered
- **★★★ "You Spread the Impact Far and Wide"** (61-100 score) — Full formula, gets hired — or, for the current avatar, gets used as promotion-case proof

> **Avatar-agnostic note:** This framework is reusable as-is for both external resumes (old avatar) and internal promotion cases (current avatar). The formula and scoring don't need to change — only the framing/CTA around them does. See Section 9C.

### Key Principles
1. **Personal Ownership** — Flag any "we/team/group" language. Replace with specific personal contribution.
2. **Problem Context / "So What?"** — Paint the pain/problem FIRST (stakes, before/after, scale).
3. **Action Verbs** — Never start with "Responsible for," "Duties included," "Assisted with," "Helped with."
4. **Skills in Context** — Don't just list tools. Show them IN the bullets.
5. **BS Meter** — No vague claims without proof. "Excellent communicator" means nothing.

### Resume Audit Scoring (8 criteria, each /10)
1. Accomplishments (not duties)
2. Metrics / Quantification
3. How / Method shown
4. Why / Business Impact
5. Personal Ownership
6. Problem Context
7. Action Verb strength
8. Skills shown in context

---

## 9. Lead Magnets — ⚠️ ARCHIVED, needs a new lead magnet built for the current avatar

**All three lead magnets below are archived, not active.** They were built for the old job-search avatar and don't fit The Invisible Performer. Keeping the specs here as reference in case any mechanics (delivery method, automation, tool build pattern) are reusable, but none should be run as-is.

**TODO: build a new micro lead magnet for the current avatar/offer once the rest of this doc is settled.** Should follow the 9B pattern (fully automated, solves one specific problem, routes to the current offer doc) but built around a Promotion-Ready Engineer pain point — the Promotion Impact Audit Tool bonus (Section 6A) is the natural starting point if it can be split into a free/limited public version.

### 9A. Impact Bullet Builder Starter Guide — ARCHIVED
- **Format:** 15-page PDF, free, instant download
- **Delivery:** Kit form → email delivery
- **Landing page:** `landing/impact-bullet-equation.html`
- **Thank you page:** `landing/thank-you.html`
- **Content:** The IBB formula and scoring (Section 8) — mechanically reusable, the formula doesn't care about avatar
- **Why archived:** conversion-bridge copy pitches "Interview Stories/Examples" and "Mock Interview Preparation" — old job-search offer, not the current one

### 9B. Micro Lead Magnet (rotating monthly AI tool) — ARCHIVED, but the *mechanism* is the template for the new lead magnet
- **Format:** Custom AI tool that completely solves one small, specific problem
- **Delivery:** Fully automated — triggered by content CTA (comment or reply)
- **Routing:** Auto-routes recipient to the full offer doc after delivery
- **Cadence:** Rotates monthly (new tool each month)
- **Why archived:** no specific tool currently built for this avatar — this is the slot the new lead magnet TODO above should fill

### 9C. Free Resume/Impact Audit (manual bridge) — ARCHIVED
- **Process:** Candidate sends 3 project details or a resume → manual audit → personalized report
- **Why archived:** the protocol files (`resume_audit_protocol_full_v2.txt`, `resume_audit_protocol_light_v2.txt`) are back in the project but still carry the old CTA ("Career Launch Call" / 21-Day Accelerator) — see Section 15 for the update needed. Also functionally overlaps with the paid Promotion Impact Audit Tool bonus in Section 6A — if this comes back as a lead magnet, decide whether it's the same tool at a free tier or a genuinely separate deliverable.

> **Note:** The old Accelerate Path Starter narrative (Mansour's own promotion story: Scrum Master/Product Owner → Software PV&V Supervisor at John Deere) is still good raw material for the new lead magnet or regular content — it's literally his own promotion case, unlike the archived items above.

---

## 10. Funnel Architecture

**Instagram-only. All content, all channels — everything above this line is obsolete.** Rebuilt per Mansour's current process:

### Full Funnel Flow
```
Instagram organic content (exclusive platform — no other paid/organic channels active)
  ├→ Comment "KEYWORD" → Micro Lead Magnet (automated delivery)
  │                          └→ Routes to full offer doc
  ├→ Comment "KEYWORD" → directly to full offer doc (for hot/outcome-heavy posts)
  └→ DM conversation (Mansour-initiated or reader-initiated) → offer doc link sent directly

All three paths converge on the full offer doc (launchtolead.io)
  └→ Step 1: Application (no payment due)
      └→ Step 2: Mansour reviews
          └→ Step 3: Accepted → payment + Skool setup → cohort start
```

- **No LinkedIn funnel.** The old Document Ads, Lead Gen Forms, and LinkedIn Insight Tag conversion events (Section 4/11) are dead — Instagram is the exclusive platform now.
- **No standalone website funnel.** No popup, no "See If You're a Fit" homepage CTA as a separate path — website traffic isn't a described channel anymore. (Flag: confirm whether `launchtolead.io` is still the offer doc's home, or whether the offer doc lives somewhere else now.)
- **No discovery call.** The old "Career Launch Call" / Calendly booking step is gone — this is a no-call, application-based enrollment model straight from `CLIENTS_--_Offer_Doc.txt`: apply → Mansour reviews → accepted → pay + join. ✅ Confirmed (July 2026): Calendly is fully removed from the live site, not just stale in this doc.
- **Not accepted:** directed to free content on Instagram or the website — no separate waitlist/feedback flow defined beyond that.

### Micro Lead Magnet delivery mechanic
Per Section 9B (archived spec, mechanic still valid) and the new memory note on Instagram automation: comment-triggered DM automation via native Meta Business Suite (free, works for Instagram Business/Creator accounts linked to a Facebook Page) is the preferred tool for the "comment KEYWORD" → automated delivery step, unless real limitations are hit — then ManyChat (largest third-party option) or Chatfuel (most defensible alternative, long-standing Meta Business Partner) are the fallbacks.

---

## 11. Ad Strategy

No paid ad campaigns active. Distribution is organic Instagram content (Section 10) with occasional post-boosting — not a structured ad program with variants, targeting, or creative specs. LinkedIn ads are fully discontinued, not paused; the prior 15-variant Document Ads campaign, ad creative specs, and LinkedIn UTM tracking template are gone, not archived for reference, since none of it transfers to Instagram boosting.

If a real Instagram ad strategy gets built later (structured targeting, creative variants, budget), it belongs in this section — currently empty by design.

---

## 13. Key Clients & Testimonials

### Featured Clients (with photos and detailed stories)

**Relevant to current avatar (promotion outcomes) — lead with these:**

| Client | Transformation | Key Quote |
|--------|---------------|-----------|
| **Karen B.** | Junior engineer at John Deere → Senior engineer at Google | "I went from feeling insecure to walking into interviews very confident and clear about my value." *(quote is job-search framed — may need a promotion-specific quote if she's re-interviewed)* |
| **Austin V.** | Stuck senior engineer → Promoted to staff engineer | Named in `CLIENTS_--_Offer_Doc.txt` as a core proof point — no quote/photo on file yet, needs capturing |
| **Jonah B. & AJ M.** | Entry-level engineers → Promoted to junior engineers | AJ quote: "Mansour taught me visibility and self-advocacy." Jonah quote on file ("0% chance...") is job-search framed, needs updating if reused. |

**Legacy — job-landing outcomes, not promotion outcomes. Kept intentionally for future use (e.g. a job-search angle or testimonial variety), not currently used for the primary avatar's content/ads without reframing:**

| Client | Transformation | Key Quote |
|--------|---------------|-----------|
| **Sarah K.** | New Grad → $106K Total Comp at Ford Motor Company | "Mansour helped me position myself as the ideal candidate." |
| **Gavin P.** | Engineering Intern → Software Engineer at Fortune 500 | "Anyone who works with him will be getting a coach who truly listens, shares generously, and believes in helping people reach their full potential." |
| **Mohamed I.** | Contract Engineer → Permanent + Software Pivot | "My interview skills got better and felt more confident." |
| **Ebuka O.** | Maximized Internship Impact at Fortune 100 Company | N/A |

### Video Testimonial
- Karen B. — Full video testimonial used on success stories page and offer page
- File: `video_scripts/karen_confidence_compressed.mp4`
- ⚠️ Script content is job-search framed (interview confidence). If reused for the new offer, needs recutting or a new intro/outro that reframes it around her John Deere → Google promotion, or replacing with an Austin V. story once captured.

### Completion Feedback (from Google Forms) — legacy, job-search program feedback
- **Mohammed Abdelmagid:** Overall 5/5, NPS 8/10, Value 5/5. "Every session had great vibes." "I feel like I've made a friend." Session 3 (mock interview) rated highest.
- **Osaid Samman:** Overall 5/5, NPS 8/10, Value 5/5. "He has a lot of experience and learning from his experiences has been very valuable."
- **Top insight:** Mock interview is the #1 value driver. Resume transformation is #2.
- **Feedback themes:** Pre-work can feel tedious (Mohammed), Session 2 front-loads theory (Mohammed rated 3/5), clients want pre-built templates not just instructions (Osaid), clients want video walkthroughs for written materials.
- Note: this feedback describes the old 1-on-1/session structure, not the new cohort. Kept as historical signal and for potential future angles rather than deleted.

> **Not yet documented here:** Subodh Kulkarni (PhD engineer, John Deere — competency story review + cover letter rewrite for an internal role) and Josh (mechanical engineering) are current clients per other project context but don't have transformation/quote entries in this table. Add once outcomes and disclaimer-cleared quotes are available. Amir is documented elsewhere as pseudonymous by explicit request — do not add identifying details here.

---

## 14. Email Templates & Sequences

### Email Nurture Sequence — ⚠️ PLACEHOLDER, awaiting rebuild from Mansour
Old 8-email structure removed — it was entirely job-search framed (resume audit offers, Sarah K. story, "book a Career Launch Call") and doesn't fit the current funnel (Section 10) or offer. Mansour will rebuild this from scratch. Leaving this as an empty placeholder rather than guessing content — nothing below is live until filled in.

- Entry point: (TBD)
- Sequence length/cadence: (TBD)
- Content per email: (TBD)

---

## 15. Resume Audit Protocol — ⚠️ files back in project, content still old

`resume_audit_protocol_full_v2.txt` and `resume_audit_protocol_light_v2.txt` are back in the project. Confirmed their content is still the original job-search version — this is an update job, not a from-scratch rebuild. The scoring mechanics (0-100 scale, IBB sub-scores, 8-criteria scorecard, pass/fail rubric per bullet component) are avatar-agnostic and don't need to change. What needs updating:

### Full Audit (`resume_audit_protocol_full_v2.txt`) — mechanics fine, no CTA to fix
No CTA in this file by design ("this is delivery, not marketing") — mechanics only, nothing avatar-specific to change here.

### Lead Magnet Audit (`resume_audit_protocol_light_v2.txt`) — CTA needs rewriting
Current CTA section still reads:
- Heading "Want Help Fixing All of This?"
- Pitches the old **21-Day Accelerator Program** (3×90-min 1:1: Resume Rebuilt, Interview Stories Mastered, Live Mock Interview)
- Links to `launchtolead.io/coaching` with old UTM params, redirecting to "the offer page where they can... book a Career Launch Call"

All of this needs replacing with the current offer (Section 6A) and current funnel (Section 10) — no more 21-Day Accelerator, no more Career Launch Call, route to the current offer doc application instead.

### Voice & Tone Guidelines — mostly reusable, one direct conflict flagged
- **Write in 2nd person** — "you" / "your"
- **Tone:** Helpful friend who happens to be an expert — factual, direct, never inflammatory/condescending
- **Banned words:** disaster, filler, dead, kills/killer, pure filler, BS, thin, red flag, zero value
- **Resolved:** "invisible" is no longer banned — it's fine to use in audit feedback as well as marketing/positioning, matching "Invisible Impact" / "The Invisible Performer" as core brand terms.
- **Frame problems as opportunities** — not deficiencies
- **CTA calls it a "Career Launch Call"** — needs renaming/removing along with the rest of the CTA section above

---

## 16. Named Methods & Frameworks

**Kept as a full vault of IP, not trimmed.** Not everything here is in active use, but the names/frameworks stay on record in case they apply to the current avatar later — no need to re-invent a wheel that's already been named and thought through once.

### Resume Methods
- The Impact Bullet Builder™ (4-Part Formula)
- The Me-in-We Extractor™
- The Boring-to-Standout Bullet Upgrade™
- The Hidden Metrics Finder™
- The Domain Translator™
- The 4-Minute Tailored Bullet System™
- The Universal Translator + ATS Pass™
- The Passion Proof Finder™

### Interview Methods
- The Power Pause + Story Arsenal™
- The Numbered Roadmap™ ("I took 5 key actions...")
- The Master Story Vault™
- The High-Impact Story Framework™
- The Competency Story Map™
- The Visual Aid Binder™
- The Interview Cheat Sheet™
- The Daily Story Practice™
- The Human Element Questions™
- The Technical Gauntlet™
- The Digital Stage Presence™
- The 3-Tier Impact Ladder™

### Job Search Methods — vault, not currently used
Not used in the current offer, kept in case a future job-search-focused product is built or individual methods get repurposed.
- The Job Sourcing Strategy™
- The Application Pipeline™
- The Application Timing Strategy™
- The Warm Intro Protocol™
- The Referral Request Script™
- The Networking Mindset Shift™
- The Resource Activation System™
- The Companion Cover Letter™
- The Career Center Activation Checklist™
- The Job Board Hierarchy™

### Promotion-Ready Engineer Methods (current primary offer — from `CLIENTS_--_Magic_Model_Details.txt`)
- Master Workload
- Train Others
- Expand Scope
- Demonstrate Value *(maps to The Impact Bullet Builder™)*
- Spread Impact
- Reach Leaders
- Meet Commitments
- Own Outcomes
- Influence Others

---

## 17. Objection Handling & FAQ (updated entries only)

| Objection | Response Framework |
|-----------|-------------------|
| "What if it doesn't work?" | Give the program 60 days. If you show up, complete Missions 1–6, and ask for help when you're stuck, and still don't have a clear Promotion-Ready Plan plus a stronger way to make your impact visible, I'll buy it back in full. |
| "Can't afford it right now" | A stalled promotion can mean $10K–$30K/year in missed income. $2,000 founder pricing (or 5×$500) is a fraction of that. |
| "Don't have enough time" | Weekly Zoom calls — 12 weeks to build the plan, 12 more to apply it inside your actual job, not a second job on top of your job. |
| "How much does it cost?" | Founder's Case Study price: $2,000 paid in full, or 5 payments of $500 ($2,500 total). Moves to $6,000 after this first cohort. |
| "Why 6 months?" | 12 weeks is enough to build the plan, but real promotion proof needs at least one work cycle to actually create — 6 months gives that runway instead of a rushed, unbelievable promise. |
| "Is this 1-on-1 or a group program?" | It's a small founder cohort (6 spots) with weekly group calls and Skool community access from day one. |
| "Will this guarantee I get promoted?" | No — nobody honest can promise that. What's guaranteed is the part you control: the proof you create, how your impact gets seen, and whether senior people trust you as ready for more. |
| "Does this work for any engineering discipline?" | Yes — the framework is about proving next-level work, visibility, and trust, not discipline-specific technical skills. It's worked across mechanical, software, systems, and other engineering disciplines. |
| "What if I've only been at my company a year or two?" | This isn't for brand-new engineers still surviving their first year or two, and it's not for people getting weak performance reviews who need to fix the basics first. If you're doing solid, well-reviewed work and still not moving up, that's the gap this closes. |
| "What if I'm thinking about leaving my company instead of getting promoted there?" | The same proof — next-level work, visible impact, senior trust — strengthens your case whether you're pursuing an internal promotion or leveraging it externally. The program is built around your current role either way. |

---

## 18. Key Business Assumptions & Decisions

1. **6-month founder cohort structure.** Not 1-on-1 ongoing coaching, not a self-paced course. 6 founder spots for the first cohort, fixed enrollment window (starts Aug 12, closes Aug 9, 2026), Skool community included for the full 6 months. First 12 weeks = Build Sprint (9 core missions); next 12 weeks = Application Sprint. Two bonuses (Roadblock Audit, Mock Behavioral Interview) are limited to the first 3 founders only — everything else is available to all 6.

---

## 19. File Structure Reference

### Core Pages (active, public-facing — July 2026)
| File | Purpose |
|------|---------|
| `index.html` | Homepage — sales page |
| `about.html` | Mansour Manci bio, credentials, career story |
| `success-stories.html` | Client testimonials with photos, video, full stories |
| `legal.html` | Terms, Privacy, Disclaimer, Refund Policy |
| `offer/index.html` | The Promotion-Ready Engineer Blueprint offer page |
| `offer/apply.html` | Application form (Step 1 of the funnel — no payment due) |
| `offer/vsl.html` | Pre-application video page — currently a placeholder graphic ( "Video coming soon" ), real VSL to be recorded and dropped in later |

**Archived (no longer live):** `vault.html`, `social.html`, `free.html`, `leak/index.html` — all moved to `archive/retired-pages/`. `vault.html`'s old redirect target (`landing/impact-bullet-equation.html`) no longer exists either (also archived).

**Clean redirect URLs (July 2026):** `join/index.html` → `offer/index.html`, `apply/index.html` → `offer/index.html`, `promotion/index.html` → `offer/index.html`. All three point to the main offer page, not the application form directly. Use these (`launchtolead.io/join`, `/apply`, `/promotion`) as the shareable links in DMs/bio/ads; internal nav links point directly at `offer/index.html` to avoid an extra redirect hop.

### Landing Pages
The entire `landing/` directory is now archived (`landing/archive/`) — `landing/offer.html`, `landing/impact-bullet-equation.html`, and `landing/thank-you.html` no longer exist as live pages. The current offer funnel lives entirely under `offer/` (see Core Pages above).

### JavaScript Modules
| File | Purpose |
|------|---------|
| `navigation.js` | Shared nav component, active page highlighting, social dropdown |
| `lead-magnet.js` | Lead magnet popup system (Kit form #8815632) |
| `meta-pixel.js` | Meta Pixel initialization + event tracking |
| `linkedin-insight-tag.js` | LinkedIn Insight Tag + li_fat_id cookie preservation |
| `utm-tracker.js` | UTM capture, localStorage storage, traffic source derivation |
| `tailwind-config.js` | Tailwind custom theme (colors, fonts, shadows, patterns) |

### Key Documentation
| File | Purpose |
|------|---------|
| `README.md` | Project overview, tech stack, deployment |
| `FUNNEL_ACTION_PLAN.md` | Complete funnel strategy (v5, March 2026) |
| `BRAND_CONTEXT.md` | This file |

### Key Directories
| Directory | Contents |
|-----------|---------|
| `ads/` | 35 ad HTML files (meta ad creatives) |
| `apply/`, `join/`, `promotion/` | Clean shareable redirect URLs — each just an `index.html` that instantly forwards to the real `offer/` page (see Core Pages above) |
| `archive/retired-pages/` | Fully retired pages no longer live anywhere: `vault.html`, `social.html`, `free.html`, `leak/index.html` |
| `client_materials/` | ⚠️ Directory previously held pre/post session materials for Launch and Accelerate paths — Accelerate content here is now obsolete since the offer was removed; Launch (legacy job-search) content still applies to the old avatar only |
| `clients/` | Individual client files (resumes, audits, comparisons) |
| `company-graphics/` | LinkedIn banner, Skool covers, Stripe product images |
| `email_templates/` | Kit delivery, promo, post-booking, survey emails |
| `landing/` | ⚠️ Fully archived (`landing/archive/`) — no live pages remain here; the active offer funnel is under `offer/` |
| `lead-magnets/` | Active lead magnet files, PDF generation, LinkedIn ad variants |
| `methods/` | ⚠️ Emptied (July 2026) — both The Launch Method and The Accelerate Method documents moved to `methods/archive/`; nothing live remains in this directory |
| `mockups/` | Design mockups, OBS overlays, video overlay templates |
| `offer/` | **Active offer funnel** — `index.html` (offer page), `apply.html` (application form), `vsl.html` (pre-application video, currently placeholder) |
| `offers/` | Grand Slam Offer documents (Launch and Accelerate) |
| `pictures/` | Mansour headshots and photos |
| `proposals/` | University partnership proposals, Google Forms guides |
| `protocols/` | Resume audit protocol, discovery call protocol, feedback forms |
| `referral-program/` | Referral tracking and email templates |
| `social-media/` | Content for LinkedIn, Instagram, TikTok, X, YouTube, Facebook, Skool |
| `testimonials/` | Client testimonial text files, photos, feedback data |
| `tracker/` | Weekly metrics tracker |
| `video_scripts/` | VSL scripts, Karen testimonial video, video graphics |

---

## 20. Naming Conventions & Terminology

| Term | Meaning |
|------|---------|
| The Promotion-Ready Engineer Blueprint | **New — the actual program/product name**, distinct from "Promotion-Ready Engineer" (which is the outcome/Yellow Goal in the Magic Model, Section 6A). Use the full Blueprint name when naming the product; use "Promotion-Ready Engineer" when describing the result/destination. |
| The Invisible Performer | The current primary avatar — 2–5 yr engineers stuck without promotion (Section 7) |
| Launch Path | ⚠️ Legacy — the prior Engineering Career Accelerator program for the job-search avatar. Still referenced in Section 19's file structure (unchanged, real repo), so kept here for lookup. |
| Accelerate Path | ⚠️ Removed entirely (July 2026) — was a future offer for engineers stuck without promotion; retired due to full overlap with the new primary avatar/offer. Still referenced in Section 19's file structure (unchanged, real repo), so kept here for lookup. |
| Impact Bullet Builder (IBB) | The 4-part resume/impact bullet formula — reusable across both avatars |
| Three Tiers of Value | ★ / ★★ / ★★★ rating system for resume/impact bullets |
| Grand Slam Offer | Hormozi-inspired offer framework document (historical reference) — referenced in Section 19's file structure |
| The Offer Diamond | The 5-lens offer-scoring framework (Promise/Guarantee/Bonuses/Payment/Urgency) used to build the current offer — see `CLIENTS_--_Offer_Diamond_Full_Context.txt` |
| The Magic Model | Yellow/Green/Red/Blue offer-mapping framework — current locked model in `CLIENTS_--_Magic_Model_Details.txt` |
| The L² Vault | Historical name for free resources page (now redirects to lead magnet) |
| Emerald Flow | The design system name |
| Kit | ConvertKit (email marketing platform, rebranded to "Kit") |
| VSL | Video Sales Letter — referenced in Section 19's file structure (unchanged, real repo); unclear if a VSL still exists in the current Instagram/application funnel, see Section 10 |
| ltl_internal | Cookie to exclude internal traffic from analytics |
| Micro Lead Magnet | Automated tool — content CTA → automated delivery → routes to offer doc. Currently archived (Section 9), pending a new build for the current avatar. |

---

## 21. Design Patterns for New Pages

When creating new pages, follow these established patterns:

### HTML Template Structure
```html
<!DOCTYPE html>
<html lang="en" class="scroll-smooth scroll-pt-32">
<head>
    <!-- GA4 internal exclusion -->
    <script>if(document.cookie.includes('ltl_internal=true'))window['ga-disable-G-L8V47TR52C']=true;</script>
    <!-- GA4 -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-L8V47TR52C"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-L8V47TR52C');
    </script>
    <!-- Meta Pixel -->
    <script async src="meta-pixel.js"></script>
    <noscript>...</noscript>
    
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title | Launch to Lead Engineering</title>
    <link rel="icon" type="image/svg+xml" href="favicon.svg">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="tailwind-config.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <script defer src="https://unpkg.com/lucide@latest"></script>
</head>
<body class="bg-slate-50 text-slate-600 font-sans antialiased">
    <div id="navigation-container"></div>
    <script src="navigation.js"></script>
    
    <!-- Format badge — ⚠️ placeholder copy, confirm final wording before shipping -->
    <div class="bg-slate-900 text-white py-2 text-center px-4">
        <span class="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-wider md:tracking-widest">
            <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0"></span>
            Founder Cohort &mdash; Only 6 Spots
        </span>
    </div>
    
    <main>
        <!-- Content -->
    </main>
    
    <!-- Footer -->
    <footer class="bg-brand-primary text-white py-12">...</footer>
    
    <script>
        if (typeof lucide !== "undefined") lucide.createIcons();
        else document.addEventListener("DOMContentLoaded", function() {
            if (typeof lucide !== "undefined") lucide.createIcons();
            else setTimeout(function() { lucide.createIcons(); }, 100);
        });
    </script>
</body>
</html>
```

### CTA Button Styles
```html
<!-- Primary CTA (filled) -->
<a href="landing/offer.html?source=site" class="px-8 py-4 bg-brand-primary text-white font-bold rounded-full hover:bg-brand-secondary transition shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg">
    See If You're a Fit
</a>

<!-- Secondary CTA (outlined) -->
<a href="landing/impact-bullet-equation.html" class="px-8 py-4 bg-white text-brand-primary font-bold rounded-full border-2 border-brand-primary hover:bg-emerald-50 transition shadow-md hover:shadow-lg hover:-translate-y-0.5 text-lg inline-flex items-center justify-center gap-2">
    <i data-lucide="download" class="w-5 h-5"></i> FREE Resume Guide
</a>
```

### Section Background Alternation
1. `bg-white` — default sections
2. `bg-slate-50` — alternate sections
3. `bg-gradient-to-br from-slate-900 to-slate-800 text-white` — dark sections (pain, pricing)
4. `bg-gradient-to-br from-emerald-50 to-teal-50` — accent sections (offer cards)
5. `bg-brand-light` — testimonials sections
6. `bg-gradient-to-br from-emerald-600 to-teal-600 text-white` — final CTA blocks
