# Funnel Action Plan — March 2026 (v4)

> **v4 updated March 12, 2026.** Execution in progress.
> 3 document ads only (try-this, closer-to-graduation, resume-is-the-problem).
> Manual audit via `audit@launchtolead.io`. mailto: tracking in PDF last page.
> Lead magnet audit template created. generate-pdfs.js updated with per-variant tracking.
> **v4 changes:** IBB guide polished (starburst callouts restructured & resized, spacing fix).
> Audit CTA redirected from Calendly → offer page. Audit voice changed to 2nd person.
> Protocol updated with Voice & Tone section. Soufiane example audit fully updated.

---

## Phase 1: Convert to All-Document Ads on LinkedIn

### 1A — PDF Generation (DONE)
- [x] Updated `lead-magnets/generate-pdfs.js` to render 3 variants with per-variant tracking
- [x] **3 active ads** (slugs used in all tracking):
  - `try-this` — Early engineers (1-2 years experience, not satisfied)
  - `closer-to-graduation` — Engineering students approaching graduation
  - `resume-is-the-problem` — Recent grads still job hunting
- [x] Last page of PDF rewritten with dual CTAs:
  - **Primary:** "Get Your Free Resume Audit" → `mailto:audit@launchtolead.io` with subject `Resume Audit Request [Source: {slug}]`
  - **Secondary:** "Learn More About the Full Program" → offer page with UTM
- [x] Each variant renders a separate PDF with unique tracking links burned in
- [ ] **TODO:** Run `node generate-pdfs.js linkedin` to generate the 3 PDFs
- [ ] **TODO:** Upload new PDFs to LinkedIn Campaign Manager as document ads

### 1A½ — IBB Guide Polish (DONE — v4)
- [x] Starburst "FREE RESUME AUDIT" callouts added to 3 pages (cover, mid-guide, late-guide)
  - Moved INSIDE `.page` divs as `position: absolute` overlays (prevents phantom pages)
  - Cover: 180px, mid/late: 156px, no rotation, top-right corner
  - Message: "FREE RESUME AUDIT / Included with this PDF! / See last page"
- [x] Spacing fix on last page title: `<span style="margin-left: 0.15em;">Resume</span>` (CSS margin survives `tracking-tight`)
- [x] IBB terminology aligned across audit template, protocol, and example audits (★ system, 4-part formula)
- [ ] **TODO:** Verify IBB pages fit within default PDF margins (Ctrl+P test)

### 1B — LinkedIn Confirmation Page URLs
- [ ] Set "Learn More" URL per ad in LinkedIn Campaign Manager:
  - try-this: `https://launchtolead.io/landing/offer.html?utm_source=linkedin&utm_medium=paid&utm_campaign=resume-guide&utm_content=try-this-confirmation`
  - closer-to-graduation: `https://launchtolead.io/landing/offer.html?utm_source=linkedin&utm_medium=paid&utm_campaign=resume-guide&utm_content=closer-to-graduation-confirmation`
  - resume-is-the-problem: `https://launchtolead.io/landing/offer.html?utm_source=linkedin&utm_medium=paid&utm_campaign=resume-guide&utm_content=resume-is-the-problem-confirmation`

### 1C — Swap ads
- [ ] Launch 3 document ads
- [ ] Monitor 48-72 hours — confirm lead gen form working and leads flowing to Kit
- [ ] Kill ALL single image ads once document ads confirmed live
- [ ] Budget: ~$45-50/day split across 3 ad sets

### 1D — Retire old pages
- [ ] Remove lead magnet landing page (landing/impact-bullet-equation.html) from active funnel — keep file
- [ ] Remove thank-you page (landing/thank-you.html) from active funnel — keep file
- [ ] Add "Get Free Resume Guide" Kit form on homepage (index.html) for organic visitors
  - UTM: `utm_source=website&utm_medium=homepage-form`

### 1E — Set up audit email
- [ ] **TODO:** Create `audit@launchtolead.io` email address (Google Workspace / forwarding)
- [ ] Configure email forwarding to Mansour's main inbox if using alias

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
| Document Ad — Early Engineers | linkedin | paid | resume-guide | try-this |
| Document Ad — Graduating Soon | linkedin | paid | resume-guide | closer-to-graduation |
| Document Ad — Recently Graduated | linkedin | paid | resume-guide | resume-is-the-problem |
| LinkedIn Confirmation — Early Eng. | linkedin | paid | resume-guide | try-this-confirmation |
| LinkedIn Confirmation — Grad Soon | linkedin | paid | resume-guide | closer-to-graduation-confirmation |
| LinkedIn Confirmation — Recent Grad | linkedin | paid | resume-guide | resume-is-the-problem-confirmation |
| PDF Last Page — Offer Link | pdf | lead-magnet | resume-guide | {slug} |
| PDF Last Page — Audit mailto: | *(tracked via email subject line: `[Source: {slug}]`)* | | | |
| LinkedIn Organic Post | linkedin | organic | — | post |
| Website Homepage Form | website | direct | — | homepage-form |
| Audit Report CTA → Offer Page | audit | email | free-audit | {candidate-slug} |

### Funnel Flow
```
LinkedIn Document Ad (3 variants: try-this, closer-to-graduation, resume-is-the-problem)
  └→ Lead Gen Form (name + email → Kit)
      ├→ "Learn More" button → Offer Page (with UTM per ad)
      └→ Kit delivers PDF (unique per variant — tracking links burned in)
          ├→ PDF last page → Primary CTA: mailto:audit@launchtolead.io [Source: {slug}]
          ├→ PDF last page → Secondary CTA: Offer page with UTM
          └→ Kit email sequence starts
              ├→ Email 3 → "Reply with your resume for a free audit"
              └→ Email 6 → "Book a 15-min call" (offer page link)
                              ↓
                        Resume arrives at audit@launchtolead.io
                        Subject line contains [Source: {slug}] for tracking
                              ↓
                        Manual Audit using lead-magnet-audit-template.html
                        (3-5 issues, top 3-5 bullets rewritten, scorecard)
                              ↓
                        Audit PDF emailed back to candidate
                        CTA at bottom: "See Full Program Details"
                        (Offer page link with utm_content={candidate-slug})
                              ↓
                        Offer Page → Watch VSL → Qualify → Career Launch Call → $997 Coaching Offer
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
| `lead-magnets/generate-pdfs.js` | Generates 3 PDF variants with per-ad tracking links |
| `lead-magnets/active/impact-bullet-builder.html` | Main guide HTML (last page has dual CTAs) |
| `lead-magnets/active/cover-try-this.html` | Cover page for early engineers ad |
| `lead-magnets/active/cover-closer-to-graduation.html` | Cover page for graduating soon ad |
| `lead-magnets/active/cover-resume-is-the-problem.html` | Cover page for recently graduated ad |
| `resumes/lead-magnet-audit-template.html` | Lighter audit template for cold leads (CTA → offer page) |
| `resumes/potential_clients/soufiane_talmoust_audit_v2.html` | Example lead magnet audit (2nd person, offer page CTA) |
| `protocols/resume-audit-protocol.md` | Full audit protocol + lead magnet version + voice/tone guide |
| `landing/offer.html` | Program offer page — destination for all audit CTAs |
| `FUNNEL_ACTION_PLAN.md` | This file |
