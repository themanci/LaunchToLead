# Launch to Lead — Complete Brand Context

> **Purpose:** Single-source brand bible for feeding to LLMs. Covers identity, design, programs, pricing, avatars, funnel, tracking, content, protocols, and every key business decision.
> **Last updated:** June 2026

---

## 1. Company Overview

- **Brand Name:** Launch to Lead Engineering (LaunchToLead, L²)
- **Domain:** launchtolead.io
- **Tagline:** "1-on-1 engineering career coaching. Resume rebuilds, interview prep, and mock interviews."
- **Business Model:** Premium 1-on-1 coaching for engineers — NOT group programs, NOT courses, NOT subscription
- **Scarcity:** Only 10 spots per month (enforced capacity constraint)
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

### 6A. Engineering Career Accelerator (PRIMARY — Launch Path)

**The core product. All marketing and advertising is focused here.**

- **Price:** $997 (or 3 payments of $349)
- **Format:** 3 × 90-minute 1-on-1 sessions over 21 days
- **Capacity:** 10 clients/month

#### Program Structure

| Week | Session | Focus |
|------|---------|-------|
| 1 | Your Resume Rebuilt | Turn boring job responsibilities into highly impactful accomplishments using the Impact Bullet Builder formula |
| 2 | Interview Stories/Examples Mastered | Build master story bank, structure stories to show value in the format interviewers want |
| 3 | Live Mock Interview with Direct Feedback | Real interview simulation with real-time critique and gap-fixing |

#### Core Deliverables
1. 3 × 90-minute 1-on-1 coaching sessions
2. Complete resume rebuild
3. 15+ STAR examples mapped & memorized
4. Full behavioral mock interview with feedback
5. All session recordings + notes
6. Email support between sessions

#### Bonus Materials (40+)
- Quick-Start Resume Template
- Interview Story Template
- Cover Letter Builder
- LinkedIn Optimization Guide
- First 90 Days Success Plan
- Salary Negotiation Scripts
- …and 30+ more checklists & templates

#### Guarantee
"Finish all 3 sessions, and if you don't leave with everything above and the complete confidence to crush any interview, I will keep working with you until you do."

#### Client Materials Breakdown

**Pre-Session 1 (sent immediately on enrollment):**
- Application Pipeline, Application Timing Strategy, Asset Mindset Shift, Career Center Activation Checklist, Job Board Hierarchy, Job Sourcing Strategy, Networking Mindset Shift, Resource Activation System, Warm Intro Protocol, Email Welcome

**Post-Session 1:**
- Companion Cover Letter, Company Research Deep-Dive, New Grad-Friendly Company List, Email Followup

**Pre-Session 2:**
- Competency Story Map, High-Impact Story Framework, Interview Types Guide, Numbered Roadmap, Phone Screen Prep Guide, Three-Tier Impact Ladder, Email Prep

**Post-Session 2:**
- Career Fair Prep, Digital Stage Presence, Elevator Pitch Structure, Follow-Up Protocol, Human Element, Phone Screen Questions, Referral Request Script, Technical Gauntlet, Visual Aid Binder, Email Followup

**Pre-Session 3:**
- Burnout Prevention System, Entry-Level Negotiation Scripts, Offer Comparison Tool, Rejection Reframe System, Research Your Worth System, Email Prep

**Post-Session 3:**
- Comparison Trap Escape, Digital Footprint Audit, External Pressure Scripts, First 90-Day Plan, Gap Explanation Scripts, Ghosting Response, Offer Timeline Scripts, Post-Interview Followup, Email Followup

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
- Current Situation Assessment, Green Light Audit, Hard Work Mindset Reset, Visibility Pyramid Overview, Email Template

### 6C. Pivot Path (FUTURE — Coming Soon)

Story-driven method about pivoting disciplines within engineering (e.g., Mechanical → Software) without formal retraining. Uses the "Trojan Horse" methodology — build skills in current role, demonstrate proof, then approach target team. Currently a narrative lead magnet only, no program structure yet.

---

## 7. Target Customer Avatars

### Avatar 1: Engineering Student Graduating Soon
- **Profile:** Engineering major (any discipline), 0-1 years until graduation
- **Pain points:** No job lined up, can't turn coursework/projects into resume content, career fairs feel intimidating, low GPA anxiety, no internship experience
- **Emotional state:** Anxious, uncertain, watching classmates get offers
- **Budget sensitivity:** High — student income
- **LinkedIn ad prefix:** `gradsoon-`

### Avatar 2: Recent Engineering Graduate
- **Profile:** 0-1 year post-graduation, engineering degree
- **Pain points:** Still applying with no interviews, resume reads like a job description, sent 100+ applications into the void, losing ~$7,000/month while searching
- **Emotional state:** Frustrated, defeated, dodging "how's the job hunt going?"
- **Budget sensitivity:** High — unemployed or underemployed
- **LinkedIn ad prefix:** `recentgrad-`

### Avatar 3: Early-Career Engineer (1-3 years)
- **Profile:** Employed engineer, 1-3 years experience
- **Pain points:** Stuck in role they've outgrown, having experience vs knowing how to show it, resume hasn't been updated since college, want better company/role
- **Emotional state:** Frustrated, invisible, underpaid, impatient
- **Budget sensitivity:** Medium — employed but early career
- **LinkedIn ad prefix:** `earlyeng-`

### Avatar 4: Stuck Mid-Career Engineer (Accelerate Path — future)
- **Profile:** 5+ years, 2-3+ years without promotion
- **Pain points:** Watching less-skilled peers advance, getting good reviews but no promotions, imposter syndrome, invisible to leadership
- **Emotional state:** Resentful, frustrated, considering leaving
- **Budget sensitivity:** Low — established income
- **Status:** Not actively marketed yet

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

### 9B. Free Resume Audit (BRIDGE — manual)
- **Process:** Candidate emails resume → manual audit using protocol → personalized HTML report → PDF export
- **Protocol:** `protocols/resume-audit-protocol.md` (7 sections, 0-100 scoring)
- **Template:** `resumes/lead-magnet-audit-template.html` (lighter version: 3-5 issues, top 3-5 bullets rewritten)
- **CTA in audit:** "Want Help Fixing All of This?" → offer page with UTM
- **Turnaround:** "Within 12 hours, usually much sooner"

### 9C. Accelerate Path Starter (narrative lead magnet)
- Story about getting promoted from Scrum Master/Product Owner to Software PV&V Supervisor at John Deere
- Themes: volunteering for responsibilities, building visibility, compound effect of demonstrated skills

### 9D. Pivot Path Starter (narrative lead magnet)
- Story about pivoting from mechanical engineering to embedded software at John Deere
- Themes: self-teaching, "Trojan Horse" methodology, skill demonstration before formal role change

---

## 10. Funnel Architecture

### Full Funnel Flow
```
LinkedIn Document Ad (15 variants, 3 avatars)
  └→ LinkedIn Lead Gen Form (email, first name, last name, LinkedIn URL)
      ├→ Confirmation page CTA → /coaching → Offer Page
      └→ PDF delivered (variant cover + IBB V2 guide)
          ├→ PDF last page → mailto:audit@launchtolead.io (free audit)
          ├→ PDF last page → Offer page
          └→ Kit email sequence (6 emails over 10 days — not yet built)
              ├→ Email 3-5: Resume audit offer
              └→ Email 6: Direct booking CTA

Separately:
Website → Lead Magnet Popup → Kit Form → PDF download → Thank-you page → Offer Page
Website → "See If You're a Fit" CTA → Offer Page
```

### Offer Page Flow (`landing/offer.html`)
1. Coaching format badge ("1-on-1 Live Coaching — Only 10 Spots / Month")
2. Hero: "Let me tell you about my full coaching program" + VSL video
3. Pain section: "What You're Doing Isn't Working" (5 pain points)
4. Social proof: Alumni testimonials (Karen, Sarah, Gavin, Jonah, AJ)
5. Program structure: 3 weeks breakdown
6. Karen video testimonial (full story)
7. Meet your coach + deliverables checklist + guarantee
8. Your Investment: ROI math ($7K/month lost) → **$997** revealed, or 3 × $349
9. Qualifying form (see below)
10. FAQ / Objection handling (6 objections + 2 FAQs)
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
- "The Shot Glass Close" — 3 concentrated sessions, no upsell
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
The homepage follows Alex Hormozi's $100M Offers value equation:

$$\text{Value} = \frac{\text{Dream Outcome} \times \text{Perceived Likelihood}}{\text{Time Delay} \times \text{Effort \& Sacrifice}}$$

| Section | Hormozi Lever | Content |
|---------|--------------|---------|
| 1. Hero | Dream Outcome ↑ | "TAKE YOUR ENGINEERING CAREER TO THE NEXT LEVEL" + photo + 3 biggest reasons + dual CTA |
| 2. What You've Tried | — | 6 things that don't work (AI resumes, Easy Apply, Googled behavioral Qs, wrong advice, format tweaking, waiting) |
| 3. The Offer | All 4 levers | 3 weeks breakdown + deliverables + 40+ bonuses + guarantee |
| 4. About Coach | Perceived Likelihood ↑ | Mansour bio: 8 years, 4 promotions, both sides of hiring table |
| 5. Social Proof | Perceived Likelihood ↑ | Featured testimonials (Gavin, Jonah) + quick result cards (Ebuka, Gavin, Sarah) |
| 6. FAQ | Handle Objections | 6 Qs covering experience, majors, timing, session count, guarantee, target audience |
| 7. Final CTA | All 4 levers | "If you're tired of repeating what you already know doesn't work, try something that does." |

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
- **Top insight:** Mock interview (Session 3) is the #1 value driver. Resume transformation is the #2.
- **Feedback themes:** Pre-work can feel tedious (Mohammed), Session 2 front-loads theory (Mohammed rated 3/5), clients want pre-built templates not just instructions (Osaid), clients want video walkthroughs for written materials.

---

## 14. Email Templates

| Template | Purpose |
|----------|---------|
| `kit-lead-magnet-delivery-template.html` | Automated PDF delivery after form submission |
| `engineering-career-accelerator-promo-email.html` | Promotional email for the program |
| `post-booking-email.html` | Sent after Career Launch Call is booked |
| `post-coaching-survey-email.html` | Sent after program completion for feedback |

### Planned Email Nurture Sequence (NOT YET BUILT)
6 emails over 10 days:
1. Immediate: Download link + "In a few days I'll show you something that makes it 10x more useful"
2. +1 day: One specific tip + before/after example
3. +3 days: Introduce the resume audit, show 1 example
4. +5 days: Client story (Sarah K.)
5. +7 days: 3 common resume mistakes
6. +10 days: Direct ask — book a free Career Launch Call

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

These are proprietary method names used throughout the program:

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

## 17. Objection Handling & FAQ

| Objection | Response Framework |
|-----------|-------------------|
| "Can't I figure this out on my own?" | Yes — but trial and error costs ~$7K/month. Coaching compresses the timeline. |
| "What if it doesn't work?" | Guarantee: keeps working at no extra charge until all deliverables are met. |
| "Can't afford it right now" | You're losing $6-8K/month in missed income. $997 = less than half a week of waiting. |
| "Already tried coaching/resume services" | Most use HR frameworks, not engineering-specific. Mansour hires engineers as an engineer. |
| "Don't have time for 21 days" | Less than 5 hours total commitment. 3 sessions. |
| "Is this for my engineering major?" | All disciplines. The frameworks are universal. |
| "How much does it cost?" | $997 or 3 payments of $349. |
| "What if I don't have much experience?" | Most engineers undervalue what they have. We can brainstorm independent projects too. |
| "How far in advance should I start?" | Ideally 3-6 months before career fairs or heavy application season. |
| "Why 3 sessions instead of more?" | Against stringing clients along for "lifetime value." Concentrated, efficient, 21 days, done. |

---

## 18. Key Business Assumptions & Decisions

1. **Focus on Launch Path first.** Accelerate and Pivot paths exist in design but marketing/ads only go to Engineering Career Accelerator (Launch) until it shows consistent return.
2. **LinkedIn is the only paid ad platform.** Document ads were chosen for native, high-engagement format. No Meta/Google ads currently.
3. **Manual processes over automation.** Resume audits are manual. Email nurture sequence not yet built. "Start manual, automate when volume justifies it (3+/week → n8n)."
4. **No group coaching, no courses, no subscriptions.** Purely 1-on-1, premium, time-boxed.
5. **Free Skool community for ongoing support.** After 3 paid sessions, clients join free community — no ongoing paid relationship.
6. **6-second resume rule.** The hook: "Your resume has 6 seconds to impress."
7. **$7,000/month lost income framing.** Based on U.S. Bureau of Labor Statistics average for entry-level engineering roles.
8. **Results disclaimer on all testimonial pages:** "Individual experiences presented here may not be typical. Your results may vary."
9. **Referral program exists** (`referral-program/`) — tracks client referrals with client list and email template.
10. **University partnerships being explored** — proposals for student clubs (GOECE, GradSWE) with format for guest workshops and club-to-client pipeline.

---

## 19. File Structure Reference

### Core Pages
| File | Purpose |
|------|---------|
| `index.html` | Homepage — Hormozi-style sales page |
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
|-----------|----------|
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
| Grand Slam Offer | Hormozi-inspired offer framework document |
| The L² Vault | Historical name for free resources page (now redirects to lead magnet) |
| Emerald Flow | The design system name |
| Kit | ConvertKit (email marketing platform, rebranded to "Kit") |
| VSL | Video Sales Letter (on offer page) |
| Document Ads | LinkedIn ad format — PDF carousel in-feed |
| ltl_internal | Cookie to exclude internal traffic from analytics |

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
