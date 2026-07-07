# Launch to Lead — Complete Brand Context

> **Purpose:** Single-source brand bible for feeding to LLMs. Covers identity, design, programs, pricing, avatars, funnel, tracking, content, protocols, and every key business decision.
> **Last updated:** May 2026

---

## 1. Company Overview

- **Brand Name:** Launch to Lead Engineering (LaunchToLead, L²)
- **Domain:** launchtolead.io
- **Tagline:** "An 8-week program to land your first full-time engineering role — resume, interview stories, and a weekly search system, done in a small cohort."
- **Business Model:** 8-week group cohort program for recent engineering graduates. NOT 1-on-1 ongoing coaching, NOT a course, NOT pre-recorded content. Structure: kickoff call, 6 weekly missions, wrap-up call, plus Skool community access for the cohort. One private 1:1 session exists only as a limited fast-action bonus (first 3 sign-ups), and 1:1 support is available free after the 8 weeks if any mission is still unclear.
- **Scarcity:** 10 seats per cohort. Cohorts run on fixed enrollment windows (see individual cohort dates — 2026 dates currently in market; update after each window closes).
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
- Built the program to teach everything he learned about landing engineering roles and standing out in interviews

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
- Nobody taught him how to actually land a job — no 4.0 GPA, limited internship experience, no mentor
- Sent out the same generic resume to every posting and heard nothing back
- Figured out what worked: tailored resumes, quantified experience with real numbers, strategic networking
- That's how he landed at John Deere — then spent 8 years learning promotions, discipline pivots, and hiring
- Started coaching because he kept seeing engineers make the same mistakes he made

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
| LinkedIn Insight Tag | LinkedIn ad tracking | Partner ID `8832100` |
| Kit (ConvertKit) | Email capture & sequences | Form `#8815632` |
| Calendly | Career Launch Call booking | `calendly.com/themanci-launchtolead/career-launch-call` |
| Skool | Free community | `skool.com/launch-to-lead-community-6905` |
| Google Calendar | Direct scheduling (nav CTA) | Direct link |
| Stripe | Payment processing | Product pages created |

### Analytics Architecture
- **Internal traffic exclusion:** Cookie `ltl_internal=true` disables GA4 via `window['ga-disable-G-L8V47TR52C']=true`
- **GA4 events tracked:** `offer_page_click`, `thankyou_page_view` (with UTM attribution)
- **Meta Pixel events:** PageView (all pages), ViewContent (key pages with content_name/category), Lead (booking clicks), plus fbc/fbp parameter passing for Event Match Quality
- **LinkedIn conversions (3):**
  - "Lead - Impact Bullet Builder Download" → URL contains `/landing/thank-you`
  - "Offer Page Visit" → URL contains `/landing/offer`
  - "Booking - Career Launch Call" → URL contains `/landing/booking-confirmed`
- **UTM Tracker** (`utm-tracker.js`): Captures utm_source/medium/campaign/content/term + li_fat_id; stores in localStorage with 30-day TTL; derives human-readable `traffic_source` labels; exposes `window.getUtmData()` API

### Navigation Structure
Shared component (`navigation.js`) injected into `#navigation-container`:
- **Desktop:** About, Success Stories, Free Resources, Social (dropdown with 7 platforms), Book a Free Call (CTA button)
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

## 6A. Engineering Career Accelerator (PRIMARY — Launch Path)

**The core product. All marketing and advertising is focused here.**

**Canonical source:** `CLIENTS_--_Offer_Doc.txt` — treat this as the authoritative copy. `CLIENTS_--_Offer_Diamond.txt` is a supporting snapshot and should be kept in sync with it (see bonus-value note below).

#### Promise
"In 8 weeks, build the resume, interview stories, and job search system to land more interviews with quality engineering companies — and turn those interviews into your first offer."

#### Format
8-week cohort. Kickoff call → 6 weekly missions → wrap-up/next-steps call. Skool community access included for the full cohort.

#### The 3 Mission Phases
1. **Get out of the Invisible Candidate Zone** — tighten the resume, clean up project presentation, target the right roles.
2. **Build the Engineering Storybank** — map skills into interview-ready examples (leadership, problem-solving, teamwork, technical judgment, failure recovery).
3. **Turn interviews into reps, not roulette** — interview strategy + live mock interviews.

#### Pricing & Payment
- **$3,000 paid in full**, or **$450/week for 8 weeks** (paid-in-full saves $600)
- **Capacity:** 10 seats per cohort

#### Bonuses (all live in the cohort, no separate purchase)
1. **Automated resume audit** — delivered immediately on enrollment (fast diagnostic)
2. **Impact Bullet Builder Framework (in-depth)** — $500 value
3. **Interview Story Builder Kit** — $500 value
4. **Engineering Job Search Command Centre** — $500 value
5. **Skool community access** — included, no separate value stated
6. **Fast-action bonus:** private 1:1 Resume Rebuild Session — $750 value — for the first 3 people who join before the early deadline each cohort

#### Guarantee
"Show up, go through the missions, and if you're not happy with the content or experience at any point, I'll buy the program back from you at full price, no questions asked. And if any mission is still unclear after 8 weeks, I'll work with you 1:1 for free until it's clear and complete."

#### The 3 Problems Blocking the Outcome
1. Not enough interviews
2. Using weak interview examples
3. Underperforming in interviews

*(Named-method mapping below is unchanged from prior version — still valid content, just delivered inside the cohort's weekly missions rather than 1-on-1 sessions.)*

- **Land more interviews with the resume** — Impact Bullet Builder™, Me-in-We Extractor™, Hidden Metrics Finder™, Job Sourcing Strategy™, Application Pipeline™, Warm Intro Protocol™, Referral Request Script™
- **Use strong interview examples** — High-Impact Story Framework™, 3-Tier Impact Ladder™, Competency Story Map™, Master Story Vault™, Interview Cheat Sheet™
- **Perform well in interviews** — Power Pause + Story Arsenal™, Numbered Roadmap™, Daily Story Practice™, Research Your Worth System™, Entry-Level Negotiation Scripts™

> **Note:** The prior "Client Materials Breakdown" (pre/post Session 1–3 sequencing) was already flagged as pending remap to the 4-session structure — it now needs a second remap, from sessions to the 6-weekly-mission cohort cadence. Content is still valid; sequencing needs rebuilding around the 3 mission phases above.

---

### 6B. Accelerate Path (FUTURE — Coming Soon)

**For engineers stuck without promotion 2-3+ years.**

- **Price:** $2,997 (or 3 × $999)
- **Format:** 3 × 90-minute 1-on-1 sessions + 30-day check-in call
- **Capacity:** 8 clients/month
- **Status:** Offer designed, marketing NOT active — waitlist only

#### Accelerate Path Structure
6 strategic phases with 76 named methods:
1. **The Visibility Pyramid** (10 methods) — Green Light Audit, Organic Broadcasting, Echo Email, Strategic Question Bank, Skip-Level Protocol, etc.
2. **The Promotion Protocol** (10 methods) — Role Saturation Threshold (85% Rule), Evidence Arsenal, Service-Based Scripts, Gap Analysis Contract, etc.
3. **The Strategic Expansion** (11 methods) — "Not My Job" Funeral, Opportunity Filter, Quality Firewall, Bad News Early Protocol, etc.
4. **The Reputation Wildfire** (8 methods) — Gravity Audit, Cross-Functional Bridge Builder, Reference Nudge, etc.
5. **The Soft Skills Engine** (17 methods) — Audience Awareness, TL;DR Structure, Technical Translation Engine, Influence Without Authority, etc.
6. **The Mindset Forge** (20 methods) — 8 mindsets to lose, 7 to gain, 5 IC→Manager transition shifts

#### Accelerate Pre-Session Materials
Current Situation Assessment, Green Light Audit, Hard Work Mindset Reset, Visibility Pyramid Overview, Email Template

---

### 6C. Pivot Path (FUTURE — Coming Soon)

Story-driven method about pivoting disciplines within engineering (e.g., Mechanical → Software) without formal retraining. Uses the "Trojan Horse" methodology — build skills in current role, demonstrate proof, then approach target team. Currently a narrative lead magnet only, no program structure yet.

---

## 7. Target Customer Avatar

**Single avatar — per L2_content_creation_guide_v4.md. All content and offer copy is written for this person only.**

### Recent Engineering Graduate
- **Profile:** 0–1 year post-graduation, engineering degree
- **Core pain:** Sent 100+ applications, zero callbacks, losing ~$7K/month in opportunity cost
- **Pain points:** Resume reads like a job description, not getting interviews, doesn't know how to present experience or perform in interviews
- **Emotional state:** Frustrated, defeated, dodging "how's the job hunt going?"
- **Budget sensitivity:** High — unemployed or underemployed
- **LinkedIn ad prefix:** `recentgrad-`

**Deprioritized — not active content/marketing targets:**
- *Graduating Soon* and *Early-Career (1–3 yr)* segments still exist as real people who may buy, but are no longer the avatar content is written for. Do not build new content, ads, or offer copy around them.
- *Almost-There Candidate* framing (getting interviews, not offers) in `CLIENTS_--_Upgraded_Avatar_Definition.txt` is explicitly rejected — do not use.
- *Stuck Mid-Career Engineer* remains reserved for the separate future Accelerate Path offer, not this avatar.

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
- **★ "You Did What Was Asked"** (0-30 score) — Duty descriptions, ignored by recruiters
- **★★ "You Went Above and Beyond"** (31-60 score) — Tasks + some numbers, considered
- **★★★ "You Spread the Impact Far and Wide"** (61-100 score) — Full formula, gets hired

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

## 9. Lead Magnets

### 9A. Impact Bullet Builder Starter Guide (PRIMARY)
- **Format:** 15-page PDF, free, instant download
- **Delivery:** Kit form → email delivery
- **Landing page:** `landing/impact-bullet-equation.html`
- **Thank you page:** `landing/thank-you.html`
- **Content:** The IBB formula, before/after examples across 6 engineering disciplines, Metric Finder Worksheet, fill-in-the-blank templates
- **Conversion bridge:** Thank-you page tells them the guide solves the resume problem but they still need: (1) Interview Stories/Examples, (2) Mock Interview Preparation → CTA to offer page
- **PDF generation:** `lead-magnets/generate-pdfs.js` merges variant cover pages with pre-printed V2 guide body

### 9B. Micro Lead Magnet (ROTATING — monthly)
- **Format:** Custom AI tool that completely solves one small, specific problem
- **Delivery:** Fully automated — triggered by content CTA (comment or reply)
- **Routing:** Auto-routes recipient to the full offer doc after delivery
- **Cadence:** Rotates monthly (new tool each month)
- **Purpose:** Mid-funnel bridge from content engagement → offer doc
- **CTA trigger:** Comment or reply to content (LinkedIn posts, emails, etc.)

### 9C. Free Resume Audit (BRIDGE — manual)
- **Process:** Candidate emails resume → manual audit using protocol → personalized HTML report → PDF export
- **Protocol:** `protocols/resume-audit-protocol.md` (7 sections, 0-100 scoring)
- **Template:** `resumes/lead-magnet-audit-template.html` (lighter version: 3-5 issues, top 3-5 bullets rewritten)
- **CTA in audit:** "Want Help Fixing All of This?" → offer page with UTM
- **Turnaround:** "Within 12 hours, usually much sooner"

### 9D. Accelerate Path Starter (narrative lead magnet)
- Story about getting promoted from Scrum Master/Product Owner to Software PV&V Supervisor at John Deere
- Themes: volunteering for responsibilities, building visibility, compound effect of demonstrated skills

### 9E. Pivot Path Starter (narrative lead magnet)
- Story about pivoting from mechanical engineering to embedded software at John Deere
- Themes: self-teaching, "Trojan Horse" methodology, skill demonstration before formal role change

---

## 10. Funnel Architecture

### Full Funnel Flow
```
All content (LinkedIn, short-form, long-form, email, everything)
  ├→ Directly to full offer doc (primary destination)
  └→ CTA to comment/reply → Micro Lead Magnet (rotating monthly AI tool)
                                └→ Auto-routes to full offer doc

LinkedIn Document Ad (15 variants, 3 avatars)
  └→ LinkedIn Lead Gen Form (email, first name, last name, LinkedIn URL)
      ├→ Confirmation page CTA → /coaching → Offer Page
      └→ PDF delivered (variant cover + IBB V2 guide)
          ├→ PDF last page → mailto:audit@launchtolead.io (free audit)
          ├→ PDF last page → Offer page
          └→ Kit email sequence (8 emails over 14 days — built in Kit)
              ├→ Emails 3-5: Resume audit offer
              └→ Email 8: Direct booking CTA

Separately:
Website → Lead Magnet Popup → Kit Form → PDF download → Thank-you page → Offer Page
Website → "See If You're a Fit" CTA → Offer Page
```

### Offer Page Flow (`landing/offer.html`)
1. Coaching format badge ("1-on-1 Live Coaching — Only 10 Spots / Month")
2. Hero: "Let me tell you about my full coaching program" + VSL video
3. Pain section: "What You're Doing Isn't Working" (5 pain points)
4. Social proof: Alumni testimonials (Karen, Sarah, Gavin, Jonah, AJ)
5. Program structure: 4-session month 1 breakdown
6. Karen video testimonial (full story)
7. Meet your coach + deliverables checklist + guarantee
8. Your Investment: ROI math ($7K/month lost) → **$997 month 1** revealed, **$495/month** optional continuation
9. Qualifying form (see below)
10. FAQ / Objection handling
11. Final CTA

### Qualifying Form Questions
1. "What best describes your current situation?" → Engineering student graduating soon / Recent engineering grad / Entry level engineer / Non-engineer gifting coaching
2. "How soon do you want to start?" → ASAP / 1-3 months / 3-6 months / Just thinking
3. "Are you willing to invest in coaching to fast-track your job search?" → Yes if it gets results / No only want free resources

**Qualified → Calendly embed** for Career Launch Call
**Not Qualified → Redirect** to free resources (Skool, social, website)

### Career Launch Call Protocol
- 15-minute hard stop for pre-qualified prospects
- "The Hormozi Frame" — You Are the Doctor, Tonality = Certain, Scarcity Is Real
- "The Shot Glass Close" — concentrated sessions, no upsell
- Phase 1 (0-3 min): Opening + 4 qualifying questions + red flags
- Phase 2 (3-7 min): Diagnose & Connect
- Phase 3 (7-15 min): Present program + close

---

## 11. Ad Strategy

### Platform: LinkedIn (Primary & Only)
- **Campaign:** "2026 Q1 Leads (Document V2)" — launched March 14, 2026
- **Ad format:** Document Ads (PDF carousels on LinkedIn feed)
- **Current test:** Callout testing — same body copy across all 15, different callout text per variant
- **Ad set:** `callout_test_all_eng` (single ad set, wide engineering targeting)
- **Phase plan:** (1) Test callouts → (2) Test body copy with winning callouts → (3) Test cover page graphics

### 15 Active LinkedIn Document Ads

**Graduating Soon (5):**
| Slug | Audience callout | Hook |
|------|-----------------|------|
| `gradsoon-1` | Engineering students | Applying to countless jobs |
| `gradsoon-2` | Engineers graduating this Spring | School taught engineering not hiring |
| `gradsoon-3` | Engineering graduate students | Resume reads like a job description |
| `gradsoon-4` | Engineers graduating soon | Audited 100+ resumes |
| `gradsoon-5` | Engineers nearing graduation | GPA won't land interviews |

**Recent Graduates (5):**
| Slug | Audience callout | Hook |
|------|-----------------|------|
| `recentgrad-1` | Recent engineering grads | Still applying with no interviews |
| `recentgrad-2` | Engineering graduates | No job lined up |
| `recentgrad-3` | Recent engineering grads | Resume reads like a job description |
| `recentgrad-4` | Engineering grads | Turn "managed a project" into interviews |
| `recentgrad-5` | Engineering recent grads | Job market isn't the only reason |

**Early Engineers (5):**
| Slug | Audience callout | Hook |
|------|-----------------|------|
| `earlyeng-1` | Engineers with 1–3 years | Stuck in a role you've outgrown |
| `earlyeng-2` | Early-career engineers | Having experience vs showing it |
| `earlyeng-3` | Engineers looking to switch | What you did vs what changed |
| `earlyeng-4` | Engineers with a few years | Google, SpaceX, GE, Ford, Deere |
| `earlyeng-5` | Engineer ready for a better role? | Resume hasn't been updated |

### Ad Creative Specs
- Cover pages: Black background, teal audience text, white hook text, Mansour headshot (bottom-left), L² brand element (bottom-right)
- HTML source: `lead-magnets/active/linkedin-ads-variants/doc-v2/cover-{slug}.html`
- Merged PDFs: `lead-magnets/pdfs/linkedin-variants/IBB-{slug}.pdf` (16 pages each)

### UTM Tracking on Ads
```
utm_term={{AD_SET_NAME}}&account_id={{ACCOUNT_ID}}&utm_campaign={{CAMPAIGN_NAME}}&utm_content={{AD_NAME}}&utm_source=LinkedIn&utm_medium=paid_social
```

---

## 12. Homepage Structure & Copywriting Approach

### Hormozi-Style Sales Page Architecture (index.html)

| Section | Lever | Content |
|---------|-------|---------|
| 1. Hero | Dream Outcome ↑ | Promise statement + photo + 3 biggest reasons + dual CTA |
| 2. What You've Tried | — | 6 things that don't work (AI resumes, Easy Apply, Googled behavioral Qs, wrong advice, format tweaking, waiting) |
| 3. The Offer | All levers | 4-session month 1 breakdown + deliverables + bonuses + guarantee |
| 4. About Coach | Perceived Likelihood ↑ | Mansour bio: 8 years, 4 promotions, both sides of hiring table |
| 5. Social Proof | Perceived Likelihood ↑ | Featured testimonials (Gavin, Jonah) + quick result cards (Ebuka, Gavin, Sarah) |
| 6. FAQ | Handle Objections | Covering experience, majors, timing, session count, guarantee, target audience |
| 7. Final CTA | All levers | "If you're tired of repeating what you already know doesn't work, try something that does." |

### Key Copywriting Patterns
- **Dual CTA everywhere:** Primary "See If You're a Fit" (emerald) + Secondary "FREE Resume Guide" (outlined)
- **Primary CTA text:** "See If You're a Fit" (not "Book a Call" — frames screening as qualifying)
- **Scarcity badge:** Always visible: "1-on-1 Live Coaching — Only 10 Spots / Month" with pulsing red dot
- **ROI framing:** "Every month without an engineering job costs ~$7,000" → $997 = half of 1 week of waiting
- **Pain→solution flow:** List what they've tried (all marked ✗) → acknowledge they're not bad ideas → position coaching as what's missing
- **3 biggest reasons framing:** (1) Resume doesn't stand out, (2) Can't frame experiences to show impact, (3) Interview performance doesn't stand out

---

## 13. Key Clients & Testimonials

### Featured Clients (with photos and detailed stories)

| Client | Transformation | Key Quote |
|--------|---------------|-----------|
| **Karen B.** | Stuck & Unsure → SpaceX, Google, GE & Bridgestone Offers | "I went from feeling insecure to walking into interviews very confident and clear about my value." |
| **Sarah K.** | New Grad → $106K Total Comp at Ford Motor Company | "Mansour helped me position myself as the ideal candidate." |
| **Gavin P.** | Engineering Intern → Software Engineer at Fortune 500 | "Anyone who works with him will be getting a coach who truly listens, shares generously, and believes in helping people reach their full potential." |
| **Jonah B.** | Mechanical Engineer → Software Engineer | "0% chance I would have broken into my current role without you." |
| **Mohamed I.** | Contract Engineer → Permanent + Software Pivot | "My interview skills got better and felt more confident." |
| **AJ M.** | Invisible → Promoted to Engineer II (18 months) | "Mansour taught me visibility and self-advocacy." |
| **Ebuka O.** | Maximized Internship Impact at Fortune 100 Company | N/A |

### Video Testimonial
- Karen B. — Full video testimonial used on success stories page and offer page
- File: `video_scripts/karen_confidence_compressed.mp4`

### Completion Feedback (from Google Forms)
- **Mohammed Abdelmagid:** Overall 5/5, NPS 8/10, Value 5/5. "Every session had great vibes." "I feel like I've made a friend." Session 3 (mock interview) rated highest.
- **Osaid Samman:** Overall 5/5, NPS 8/10, Value 5/5. "He has a lot of experience and learning from his experiences has been very valuable."
- **Top insight:** Mock interview is the #1 value driver. Resume transformation is #2.
- **Feedback themes:** Pre-work can feel tedious (Mohammed), Session 2 front-loads theory (Mohammed rated 3/5), clients want pre-built templates not just instructions (Osaid), clients want video walkthroughs for written materials.

---

## 14. Email Templates & Sequences

| Template | Purpose |
|----------|---------|
| `kit-lead-magnet-delivery-template.html` | Automated PDF delivery after form submission |
| `engineering-career-accelerator-promo-email.html` | Promotional email for the program |
| `post-booking-email.html` | Sent after Career Launch Call is booked |
| `post-coaching-survey-email.html` | Sent after program completion for feedback |

### Email Nurture Sequence (BUILT — live in Kit)
8 emails over 14 days. All leads routed to this sequence starting at Email 2 (all have already received the guide). Re-engagement email recommended first for leads older than 60-90 days.

1. Immediate: Download link + "In a few days I'll show you something that makes it 10x more useful"
2. +1 day: One specific tip + before/after example
3. +3 days: Introduce the resume audit, show 1 example
4. +5 days: Client story (Sarah K.)
5. +7 days: 3 common resume mistakes
6. +9 days: Resume audit offer (direct)
7. +11 days: Objection handling / social proof
8. +14 days: Direct ask — book a free Career Launch Call

---

## 15. Resume Audit Protocol

### Full Audit (for clients)
- **Protocol:** `protocols/resume-audit-protocol.md`
- **Output:** 7-section HTML analysis file with print CSS
- **Scoring:** 0-100 scale, 4 sub-scores (Accomplishments, Metrics, How/Method, Why/Impact), 8-criteria detailed scorecard
- **Sections:** (1) Overall Score, (2) Key Issues (5-8), (3) Rewritten Resume (full), (4) Before & After (3 examples), (5) Action Items (5-8), (6) What's Already Working (3-5), (7) Full Scorecard

### Lead Magnet Audit (lighter, for leads)
- 3-5 issues (not 5-8)
- Top 3-5 bullets rewritten (not all)
- 2-3 before/after examples
- Same scoring system and scorecard
- CTA: "Want Help Fixing All of This?" → offer page

### Voice & Tone Guidelines
- **Write in 2nd person** — "you" / "your"
- **Tone:** Helpful friend who happens to be an expert — factual, direct, never inflammatory/condescending
- **Do:** "This section is taking up space that could be working harder for you"
- **Don't:** "This section is a structural disaster"
- **Banned words:** disaster, filler, dead, invisible, kills/killer, pure filler, BS, thin, red flag, zero value
- **Frame problems as opportunities** — not deficiencies
- **No cheesy taglines** — engineering-appropriate, straight-to-the-point
- **CTA calls it a "Career Launch Call"**

---

## 16. Named Methods & Frameworks

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

### Job Search Methods
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

### Promotion Methods (Accelerate Path)
- The Visibility Pyramid
- The Promotion Protocol
- Role Saturation Threshold (85% Rule)
- Evidence Arsenal
- Green Light Audit
- The Strategic Expansion
- The Reputation Wildfire
- The Soft Skills Engine
- The Mindset Forge

---

## 17. Objection Handling & FAQ (updated entries only)

| Objection | Response Framework |
|-----------|-------------------|
| "What if it doesn't work?" | If you're not happy at any point, I'll buy the program back from you at full price, no questions asked. If any mission is still unclear after 8 weeks, I'll work with you 1:1 for free until it's resolved. |
| "Can't afford it right now" | You're losing $6–8K/month in missed income. $3,000 (or $450/week) is a fraction of one month's lost pay. |
| "Don't have enough time" | 8 weeks, one weekly call plus a weekly mission — built to move fast, not drag out the search. |
| "How much does it cost?" | $3,000 paid in full, or $450/week for 8 weeks. Paid-in-full saves $600. |
| "Why 8 weeks?" | It's a focused runway — three phases (resume, stories, interviews) — instead of months of guessing, rewriting, and reapplying on your own. |
| "Is this 1-on-1 or a group program?" | It's a small cohort (10 seats) with weekly group calls, Skool community access, and free 1:1 support after the program if anything's unclear. |

*(Remaining FAQ rows — discipline coverage, experience level, timing — are unchanged.)*

---

## 18. Key Business Assumptions & Decisions (updated entry only)

4. **8-week group cohort structure.** Not 1-on-1 ongoing coaching, not a self-paced course. 10 seats per cohort, fixed enrollment windows, Skool community included for the cohort duration. One private 1:1 session exists only as the fast-action bonus; further 1:1 is offered free post-program only if a mission is unresolved.

*(All other rows unchanged.)*

---

## 19. File Structure Reference

### Core Pages
| File | Purpose |
|------|---------|
| `index.html` | Homepage — sales page |
| `about.html` | Mansour Manci bio, credentials, career story |
| `success-stories.html` | Client testimonials with photos, video, full stories |
| `vault.html` | Redirects → `landing/impact-bullet-equation.html` |
| `social.html` | Social media links hub |
| `legal.html` | Terms, Privacy, Disclaimer, Refund Policy |

### Landing Pages
| File | Purpose |
|------|---------|
| `landing/offer.html` | Full offer page with VSL, qualifying form, Calendly |
| `landing/impact-bullet-equation.html` | Lead magnet landing page (free resume guide) |
| `landing/thank-you.html` | Post-download confirmation + coaching bridge |

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
| `client_materials/` | Pre/post session materials for Launch and Accelerate paths |
| `clients/` | Individual client files (resumes, audits, comparisons) |
| `coaching/` | Redirect to offer page |
| `company-graphics/` | LinkedIn banner, Skool covers, Stripe product images |
| `email_templates/` | Kit delivery, promo, post-booking, survey emails |
| `landing/` | Offer page, lead magnet page, thank-you page |
| `lead-magnets/` | Active lead magnet files, PDF generation, LinkedIn ad variants |
| `methods/` | The Launch Method and Accelerate Method documents |
| `mockups/` | Design mockups, OBS overlays, video overlay templates |
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
| Launch Path | The Engineering Career Accelerator program (primary product) |
| Accelerate Path | The promotion coaching program (future product) |
| Pivot Path | The discipline-change narrative (future product) |
| Career Launch Call | The booking/discovery call (15 min, pre-qualified) |
| Impact Bullet Builder (IBB) | The 4-part resume bullet formula |
| Three Tiers of Value | ★ / ★★ / ★★★ rating system for resume bullets |
| Grand Slam Offer | Hormozi-inspired offer framework document (historical reference) |
| The L² Vault | Historical name for free resources page (now redirects to lead magnet) |
| Emerald Flow | The design system name |
| Kit | ConvertKit (email marketing platform, rebranded to "Kit") |
| VSL | Video Sales Letter (on offer page) |
| Document Ads | LinkedIn ad format — PDF carousel in-feed |
| ltl_internal | Cookie to exclude internal traffic from analytics |
| Micro Lead Magnet | Monthly rotating AI tool — content CTA → automated delivery → routes to offer doc |

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
    <!-- LinkedIn Insight Tag -->
    <script async src="linkedin-insight-tag.js"></script>
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
    
    <!-- Coaching format badge -->
    <div class="bg-slate-900 text-white py-2 text-center px-4">
        <span class="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-wider md:tracking-widest">
            <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0"></span>
            1-on-1 Live Coaching &mdash; Only 10 Spots / Month
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
