# Funnel Action Plan — March 2026 (v5)

> **v5 updated March 14, 2026.** Document Ads V2 campaign LIVE.
> 15 document ads (5 per avatar) launched for callout testing.
> Pre-printed Impact-Bullet-Builder_V2.pdf used as base guide (no per-variant tracking in PDF).
> Tracking via LinkedIn Campaign Manager (ad-level attribution) + GA4 (UTMs via ad set tracking params) + LinkedIn Insight Tag conversions.
> Headshot + L² brand footer added to all cover pages.
> **v5 changes:** New campaign "2026 Q1 Leads (Document V2)" live with 15 ads.
> New LinkedIn conversion: Offer Page Visit (`launchtolead.io/landing/offer`).
> PDF generation simplified: cover page + pre-printed V2 guide (no re-rendering per variant).
> Output: `lead-magnets/pdfs/linkedin-variants/IBB-{slug}.pdf`

---

## Phase 1: Convert to All-Document Ads on LinkedIn

### 1A — PDF Generation (DONE)
- [x] Updated `lead-magnets/generate-pdfs.js` — now uses pre-printed `Impact-Bullet-Builder_V2.pdf` as base
- [x] **15 active ads** (V2 campaign — callout testing, constant body copy):

  **Graduating Soon (5):**
  - `gradsoon-1` — Engineering students / applying to countless jobs
  - `gradsoon-2` — Engineers graduating this Spring / school taught engineering not hiring
  - `gradsoon-3` — Engineering graduate students / resume reads like a job description
  - `gradsoon-4` — Engineers graduating soon / audited 100+ resumes
  - `gradsoon-5` — Engineers nearing graduation / GPA won't land interviews

  **Recent Graduates (5):**
  - `recentgrad-1` — Recent engineering grads / still applying with no interviews
  - `recentgrad-2` — Engineering graduates / no job lined up
  - `recentgrad-3` — Recent engineering grads / resume reads like a job description
  - `recentgrad-4` — Engineering grads / turn "managed a project" into interviews
  - `recentgrad-5` — Engineering recent grads / job market isn't the only reason

  **Early Engineers (5):**
  - `earlyeng-1` — Engineers with 1–3 years / stuck in a role you've outgrown
  - `earlyeng-2` — Early-career engineers / having experience vs showing it
  - `earlyeng-3` — Engineers looking to switch / what you did vs what changed
  - `earlyeng-4` — Engineers with a few years / Google, SpaceX, GE, Ford, Deere
  - `earlyeng-5` — Engineer ready for a better role? / resume hasn't been updated

- [x] Cover pages: black bg, teal audience text, white hook, headshot (bottom-left), L² brand (bottom-right)
- [x] HTML files: `lead-magnets/active/linkedin-ads-variants/doc-v2/cover-{slug}.html`
- [x] Merged PDFs: `lead-magnets/pdfs/linkedin-variants/IBB-{slug}.pdf` (16 pages each)
- [x] **3 legacy ads** still available (original campaign — may be paused/retired):
  - `try-this` — Early engineers (1-2 years experience)
  - `closer-to-graduation` — Engineering students approaching graduation
  - `resume-is-the-problem` — Recent grads still job hunting

### 1A½ — IBB Guide Polish (DONE — v4)
- [x] Starburst "FREE RESUME AUDIT" callouts added to 3 pages (cover, mid-guide, late-guide)
- [x] Spacing fix on last page title
- [x] IBB terminology aligned across audit template, protocol, and example audits
- [x] V2 guide printed to `pdfs/Impact-Bullet-Builder_V2.pdf` — used as base for all 15 variant PDFs

### 1B — LinkedIn Campaign Setup (DONE — v5)
- [x] Campaign: "2026 Q1 Leads (Document V2)"
- [x] Lead gen form: headline "Get Your Free Resume Guide...in under 30 seconds."
- [x] Confirmation page: directs to page 7 (formula page), CTA → `/coaching` → offer page
- [x] Headline: `FREE Resume Guide for Engineers` (same for all 15)
- [x] Introductory text: constant body copy across all 15 (testing callouts only)
- [x] Ad naming: `DocAd_[avatar][number]_13Mar2026`
- [x] Ad set: `callout_test_all_eng` (single ad set, wide engineering targeting)
- [x] Ad set tracking: `utm_term={{AD_SET_NAME}}&account_id={{ACCOUNT_ID}}&utm_campaign={{CAMPAIGN_NAME}}&utm_content={{AD_NAME}}&utm_source=LinkedIn&utm_medium=paid_social`
- [x] 3 conversions attached: IBB Download, Offer Page Visit (NEW), Booking Confirmed
- [x] **LAUNCHED — March 14, 2026** ✅

### 1C — Monitor & Optimize
- [ ] Monitor 48-72 hours (by March 16-17) — confirm leads flowing
- [ ] Identify top-performing callouts per avatar group
- [ ] Pause underperformers, concentrate budget on winners
- [ ] Phase 2: Test body copy variations with winning callouts
- [ ] Phase 3: Test cover page graphic styles with winning callout + body copy

---

## Phase 2: Build Email Nurture Sequence in Kit

### 2A — Write email copy
- [ ] Email 1 (immediate): Keep current download link email — add one line: "Read it this week. In a few days I'll show you something that makes it 10x more useful."
- [ ] Email 2 (+1 day): One specific tip from the guide + before/after example. End with "Reply with any questions."
- [ ] Email 3 (+3 days): Introduce the resume audit. Show 1 example before/after. CTA: "Reply to this email with your resume attached (PDF, Word doc, or screenshot). I'll send your personalized audit within 12 hours — usually much sooner."
- [ ] Email 4 (+5 days): Client story (Sarah K. — zero callbacks → $106K offer at Ford). Soft CTA to get audit or book call
- [ ] Email 5 (+7 days): 3 common resume mistakes you see coaching. Tie to 4-part formula. Soft CTA for audit
- [ ] Email 6 (+10 days): Direct ask — "I have X spots open this month. Book a free 15-min call to talk about your job search." Offer page link

### 2B — Configure in Kit
- [ ] Build automation sequence in Kit with timing delays
- [ ] Set trigger: new subscriber added to "Resume Guide" tag/form
- [ ] Ensure LinkedIn lead gen form → Kit integration is working (via Zapier, native integration, or webhook)
- [ ] Test full sequence with a test email address
- [ ] Activate for all new leads going forward

---

## Phase 3: Resume Audit — Manual Process + Formatting

### 3A — Audit protocol & template (DONE — updated v4)
- [x] Full audit protocol documented in `protocols/resume-audit-protocol.md` (7 sections, 0-100 scoring, 4 tiers)
- [x] Lead magnet audit template created: `resumes/lead-magnet-audit-template.html`
  - Lighter version: 3-5 issues (not 5-8), top 3-5 bullets rewritten (not all), 2-3 before/after examples
  - Same scoring system, scorecard, and "What's Working" section as full audit
  - Print-friendly CSS for Ctrl+P → PDF export
- [x] Protocol updated with lead magnet audit section documenting differences from full audit
- [x] **v4:** Audit voice changed to 2nd person ("you/your" not candidate's name)
- [x] **v4:** Audit CTA changed from Calendly → offer page (`launchtolead.io/landing/offer.html`)
  - CTA heading: "Want Help Fixing All of This?"
  - CTA button: "See Full Program Details" → offer page with UTM `utm_content={candidate-slug}`
  - CTA subtitle: "View the program, watch the video, and see if you're a fit."
  - Program summary box retained (21-Day Accelerator overview)
- [x] **v4:** Protocol updated with Voice & Tone section (2nd person, no cheesy taglines, professional)
- [x] **v4:** Protocol CTA guidance updated to point to offer page instead of Calendly

### 3B — Manual audit workflow
- [ ] Submission method: email reply to `audit@launchtolead.io` (mailto: links in PDFs track source via subject line)
- [ ] When resume arrives:
  1. Check subject line for `[Source: {slug}]` → know which ad they came from
  2. Copy `resumes/lead-magnet-audit-template.html` → `resumes/potential_clients/{name}_audit.html`
  3. Run analysis, fill in all `{{PLACEHOLDER}}` values
  4. Export PDF via Ctrl+P, email back to candidate
- [ ] Promise: "Within 12 hours, usually much sooner"
- [ ] Track: source (from subject line), submission date, audit sent date, call booked (Y/N)

### 3C — Example audit reports
- [x] Full audit examples already exist: `jacob_rothschild_analysis.html`, `neehal_surayavanshi_analysis_v2.html`, `steven_de_alwis_analysis_v2.html`
- [x] **v4:** Soufiane Talmoust example audit created and fully updated: `resumes/potential_clients/soufiane_talmoust_audit_v2.html`
  - 2nd person voice, CTA → offer page, aligned with IBB language (★ system, 4-part formula)
- [ ] Update old full audit examples (Neehal, Steven) with new voice/CTA style if reusing them

---

## Phase 4: Warm Outreach to Existing 43 Leads

- [ ] Draft a single, personal email offering the free audit (NOT the automated sequence — these leads are too old for a "welcome" drip)
- [ ] Copy:
  > "Hey [Name] — I just built a tool that scores engineering resumes against the same framework from the guide you downloaded. It shows exactly which bullets are weak, why, and how to rewrite them. Want me to run yours? Just reply with your resume attached."
- [ ] Send individually or as a personal-feeling Kit broadcast (no automated sequence trigger)
- [ ] For leads who came from LinkedIn organic: consider LinkedIn DM instead of email
- [ ] Track responses and audit requests

---

## Phase 5: Readiness Quiz Lead Magnet (Future — Revisit After 30 Days)

> **Parked.** Current lead magnet works for attention. Fix the post-download funnel first.
> Revisit when booking 2-3 calls/month consistently.

- [ ] Design "Engineering Job Search Readiness Quiz" concept
  - Covers: resume quality, interview story readiness, mock interview practice, application strategy
  - Output: personalized score + recommendations
- [ ] Determine quiz platform (Typeform, custom build, etc.)
- [ ] Design ad creative — likely needs single image ad to drive traffic to quiz page
- [ ] A/B test against current resume guide document ads
- [ ] Quiz result page → bridges to resume audit and/or offer page

---

## Phase 6: $97 Tripwire Offer (Future — Revisit After 60+ Days)

> **Shelved.** Zero booked calls currently — adding a paid step adds friction.
> Revisit only after consistently booking 3+ calls/month.

- [ ] Design 30-minute paid session: review audit + quiz results + career roadblocks
- [ ] $97 credited toward full $997 coaching program
- [ ] Position as standalone value, not just a "preview"
- [ ] Requires functioning upstream funnel first

---

## Tracking & Attribution Architecture

### UTM Parameter Reference
| Source | utm_source | utm_medium | utm_campaign | utm_content |
|---|---|---|---|---|
| Document Ad V2 (all 15) | LinkedIn | paid_social | {{CAMPAIGN_NAME}} | {{AD_NAME}} (e.g., DocAd_GradSoon1_13Mar2026) |
| Lead Gen Form Confirmation CTA | linkedin | lead_gen_form | 2026_q1_leads_doc_v2 | confirmation |
| Audit Report CTA → Offer Page | audit | email | free-audit | {candidate-slug} |
| PDF Last Page — Offer Link | pdf | lead-magnet | resume-guide | {slug} *(legacy 3-ad PDFs only)* |
| PDF Last Page — Audit mailto: | *(tracked via email subject line: `[Source: {slug}]`)* | | | |
| LinkedIn Organic Post | linkedin | organic | — | post |
| Website Homepage Form | website | direct | — | homepage-form |

### LinkedIn Conversion Tracking (3 conversions)
| Conversion Name | Type | URL Contains |
|---|---|---|
| IBB Download | Page load | `launchtolead.io/landing/thank-you` |
| Offer Page Visit | Page load | `launchtolead.io/landing/offer` |
| Booking Confirmed | Page load | `launchtolead.io/landing/booking-confirmed` |

### Funnel Flow
```
LinkedIn Document Ad V2 (15 variants — callout testing)
  └→ Lead Gen Form (email, first name, last name, LinkedIn profile URL)
      ├→ Confirmation page "Learn More" CTA → /coaching → Offer Page (UTM: confirmation)
      └→ PDF delivered (cover page + Impact Bullet Builder V2 guide)
          ├→ Guide last page → Primary CTA: mailto:audit@launchtolead.io
          ├→ Guide last page → Secondary CTA: Offer page
          └→ Kit email sequence (Phase 2 — not yet built)
                              ↓
                        Resume arrives at audit@launchtolead.io
                              ↓
                        Manual Audit using lead-magnet-audit-template.html
                        (3-5 issues, top bullets rewritten, scorecard)
                              ↓
                        Audit PDF emailed back to candidate
                        CTA: "See Full Program Details" → Offer page (utm_content={candidate-slug})
                              ↓
                        Offer Page → Watch VSL → Qualify → Career Launch Call → Coaching Offer
```

### Automation Trigger: Switch to n8n
When audit requests hit **3+ per week**, begin building automated pipeline:
- n8n IMAP trigger for email replies with attachments
- Automated text extraction + audit logic + report generation
- Auto-send results via SendGrid/Resend

---

## Key Principles
- PDF lead magnet stays — it works for getting attention and clicks
- Audit is the BRIDGE between the PDF and the call, not a replacement
- Trust escalation: free guide → personalized audit → conversation
- Engineers need value before pitch — no $997 ask until they've experienced the framework applied to THEIR resume
- Accept any file format (PDF, DOCX, screenshots) — every restriction loses submissions
- Track everything with UTMs + mailto subject lines — know which ad drives each audit request
- Start manual, automate when volume justifies it (3+ audits/week → n8n)
- The landing page and thank-you page are retired from the active funnel (kept as files, links removed)

---

## Key Files Reference

| File | Purpose |
|---|---|
| `lead-magnets/generate-pdfs.js` | Generates 15 V2 PDFs (cover + pre-printed guide) + 3 legacy PDFs |
| `lead-magnets/active/impact-bullet-builder.html` | Main guide HTML (last page has dual CTAs) |
| `lead-magnets/pdfs/Impact-Bullet-Builder_V2.pdf` | Pre-printed V2 guide (base for all 15 variant PDFs) |
| `lead-magnets/pdfs/linkedin-variants/IBB-{slug}.pdf` | 15 merged variant PDFs (cover + V2 guide) |
| `lead-magnets/active/linkedin-ads-variants/doc-v2/` | 15 cover page HTML files |
| `ads/linkedin/3_13_26_new_document_ads/document-ads-v1.md` | V2 campaign planning doc (callouts, body copy, launch checklist) |
| `resumes/lead-magnet-audit-template.html` | Lighter audit template for cold leads (CTA → offer page) |
| `protocols/resume-audit-protocol.md` | Full audit protocol + lead magnet version + voice/tone guide |
| `landing/offer.html` | Program offer page — destination for all CTAs |
| `coaching/index.html` | Redirect: `/coaching` → `/landing/offer.html` (preserves UTMs) |
| `FUNNEL_ACTION_PLAN.md` | This file |
