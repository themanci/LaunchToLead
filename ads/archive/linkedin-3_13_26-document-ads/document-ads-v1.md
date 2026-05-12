# LinkedIn Document Ads V1 — March 13, 2026

## Strategy
- **Ad Format:** Document Ads (carousel-style PDF preview in feed)
- **Lead Magnet:** Impact Bullet Builder Guide
- **Landing:** LinkedIn Lead Gen Form → delivers PDF
- **Campaign Structure:** 1 ad set, wide targeting, let LinkedIn optimize delivery
- **Testing Phase 1:** Callouts only (body copy + graphic style held constant)
- **Preview Pages:** Pages 1–6 of merged PDF (Cover → IBB Title Page → Problem → Three Tiers → Attribution → The 4-Part Formula). Showing the actual formula so it doesn't feel gatekeepy.

---

## Finalized Callouts (15 total — 5 per avatar)

### Graduating Soon (5)

1. **Engineering students** — applying to countless jobs and hearing nothing? The market isn't your only issue.
2. **Engineers graduating this Spring** — school taught you Engineering, not how to get hired. There's a formula for that.
3. **Engineering graduate students** — your resume reads like a job description. That won't land you any interviews.
4. **Engineers graduating soon** — I've audited 100+ resumes. Most of them have the same issue.
5. **Engineers nearing graduation** — your GPA won't land you interviews. Fixing your resume will.

### Recent Graduates (5)

1. **Recent engineering grads** — still applying with no interviews? You have a resume problem.
2. **Engineering graduates** — no job lined up? Applying to more jobs isn't the answer.
3. **Recent engineering grads** — your resume reads like a job description. That's why it's getting ignored.
4. **Engineering grads** — I help engineers turn "managed a project" into a resume bullet that gets interviews.
5. **Engineering recent grads** — the job market isn't the only reason you're not getting interviews. Let me show you.

### Early Engineers (5)

1. **Engineers with 1–3 years experience** — stuck in a role you've outgrown? Your resume is keeping you trapped.
2. **Early-career engineers** — having experience and showing it on your resume are two very different things.
3. **Engineers looking to switch roles** — your resume lists what you did. It should show what changed because you were there.
4. **Engineers with a few years under your belt** — I've helped engineers land roles at Google, SpaceX, GE, Ford, and Deere. They all had the same resume mistakes.
5. **Engineer ready for a better role?** Your resume hasn't been updated since you got hired. That's costing you interviews.

---

## To-Do List

### 1. Introductory Text (Body Copy)
Write one body copy template to use across all 15 callouts in Phase 1 (constant while testing callouts).

Structure:
- **Line 1:** Callout (swapped per ad — see above)
- **Line 2:** Pain amplification OR legitimacy statement (Mansour's preference: lean into legitimacy early for engineer skepticism)
- **Line 3:** Introduce the free guide ("I built a free guide called the Impact Bullet Builder...")
- **Body:** Social proof / specifics / credibility
- **CTA:** Download prompt

Decisions needed:
- [ ] Write line 2 options (pain vs. legitimacy vs. combo)
- [ ] Choose social proof rotation (vary from Karen/Sarah — use Gavin, Jonah, AJ, or anonymized data?)
- [ ] Write the full introductory text template
- [ ] Confirm character limits for document ad introductory text (may differ from single image ads)

---

## Body Copy Drafts (3 Options)

_Callout is on page 1 of the document PDF, NOT in the introductory text._
_600 character limit on LinkedIn introductory text._

---

### OPTION A — "Skepticism Acknowledged + Credential Stack" (~590 chars)

Okay, you're skeptical — you should be. I would be too. You're an engineer. You were trained to question everything. I know because I'm an engineer too. Check my profile.

I'm not some coach whose only experience is coaching people. I spent 10 years as an engineer, 8 at John Deere in various roles, earning 4 promotions over that time.

I used all of that experience to build this guide. In it are the frameworks and concepts I applied to my resume to get promoted at Deere and coached other engineers to use on their resumes to get offers at Google, SpaceX, Ford, and GE.

It's a free PDF. It either helps your resume land you more interviews or you lose 2 minutes of your life. Not a huge loss.

---

### OPTION B — "Skepticism + 3 Reasons + Credential" (~595 chars)

Okay, you're skeptical — you should be. You're an engineer, we're trained to question everything. Check my profile. I'm an engineer too.

Here's the truth — most engineering resumes fail for 3 reasons: bullets describe responsibilities, not accomplishments. No metrics — no numbers, percentages, or scale. Nothing demonstrates the impact you've had.

I spent 8 years at John Deere, earned 4 promotions, and put everything I learned about what makes a resume land interviews into this free guide. Engineers have used it to get offers at Deere, Google, SpaceX, Ford, and GE.

It's free. It either improves your resume or you lose 2 minutes. Probably worth the risk.

---

### FINAL BODY COPY (User's version — use this)

You're skeptical. As engineers, we're trained to question everything. I'm an engineer too.  Check my profile.

Here's the thing - most engineering resumes fail for 3 reasons. They list duties, not accomplishments. They have no metrics. They don't show what changed because you were there.

I spent 8 years and 4 promotions at John Deere, developing the framework in this free guide. Engineers have used it to land offers at Deere, Google, SpaceX, Ford, and GE.

It only takes 2 minutes to review. It will either help you land more interviews or waste 2 minutes of your time.  Probably worth the risk.

### 2. Graphic Style (Constant for Phase 1)
~~Pick ONE visual style for the document preview thumbnail / first page.~~

**DONE.** Style: Simple black background, white text, teal (#14b8a6) accent on audience identifier, L² brand at bottom-right, headshot (122px circle) + "Mansour Manci / Engineering Career Coach" at bottom-left. Plus Jakarta Sans font. Letter-size (8.5" × 11") for PDF merge. Matches existing cover page style.

- 15 HTML files created in `lead-magnets/active/linkedin-ads-variants/doc-v2/`
- Naming: `cover-gradsoon-{1-5}.html`, `cover-recentgrad-{1-5}.html`, `cover-earlyeng-{1-5}.html`
- PDF generator updated: `node generate-pdfs.js doc-v2` builds all 15 merged PDFs to `lead-magnets/pdfs/linkedin-variants/`
- Each merged PDF = 16 pages (1 cover + 15 guide pages)
- Base guide: `pdfs/Impact-Bullet-Builder_V2.pdf` (pre-printed, appended as-is)

### 3. Document Preview Settings
- [x] Preview pages 1–6 of merged PDF: Cover → IBB Title → Problem → Three Tiers → Attribution → The 4-Part Formula
- [x] LinkedIn auto-previews all pages with swipe; headline shows "Preview X of 16 pages"
- [x] Formula page renders cleanly as standalone preview — creates natural "want the rest? download" moment

### 4. Lead Gen Form — Confirmation Page Redesign
~~The confirmation message shown after form submission. Currently needs a redesign.~~

**DONE.** Confirmation page copy:
- **Headline (auto):** Information sent to Launch To Lead
- **Body:** "You got the guide! Here's what to do next. Open it up and go to page 7, the full formula. Go ahead and rewrite one bullet. Start with your most recent role. Don't forget to check out the free resume audit at the end! If you need more help, check out my full program by clicking below."
- **CTA Button:** Learn more (or "See the program")
- **CTA URL:** `https://launchtolead.io/coaching?utm_source=linkedin&utm_medium=lead_gen_form&utm_campaign=2026_q1_leads_doc_v2&utm_content=confirmation`
- ~~**Note:** Verify page 6 is correct after adding callout page to front of PDF.~~
- **VERIFIED:** Page 7 is correct — cover page shifts original page 6 → page 7.

### 5. Lead Gen Form — Description Redesign
~~The description text shown on the lead gen form itself (before the user fills in their info).~~

**DONE.** Form description copy:
- **Headline:** Get Your Free Resume Guide...in under 30 seconds.
- **Description:** The framework that engineers have used to land offers at John Deere, Google, SpaceX, Ford, and GE. BONUS FREE resume audit details inside as well.
- **Fields:** Email (required), First name, Last name, LinkedIn profile URL

### 6. Build & Launch
- [x] Generate all 15 merged PDFs → `lead-magnets/pdfs/linkedin-variants/IBB-{slug}.pdf` (16 pages each)
- [x] Set up LinkedIn conversion tracking for Offer Page Visit (URL contains `launchtolead.io/landing/offer`)
- [x] Create campaign in Campaign Manager: "2026 Q1 Leads (Document V2)"
- [x] Create lead gen form with updated description + confirmation page
- [x] Upload all 15 document PDFs as ads in the campaign
- [x] Ad naming convention: `DocAd_[avatar][number]_13Mar2026`
- [x] Set introductory text = FINAL BODY COPY (same for all 15)
- [x] Headline: `FREE Resume Guide for Engineers` (same for all 15)
- [x] Attach lead gen form to each ad
- [x] Set targeting: wide engineering audience, single ad set (`callout_test_all_eng`)
- [x] Attach all 3 conversions: IBB Download, Offer Page Visit, Booking Confirmed
- [x] Set daily budget
- [x] **LAUNCHED — March 14, 2026** ✅
- [ ] Monitor for 48–72 hours (by March 16–17) before drawing conclusions on callout winners
- [ ] Identify top-performing callouts per avatar group
- [ ] Pause underperformers, scale winners

---

## Notes
- Phase 2 (after callout winners identified): Test body copy variations
- Phase 3: Test first-page images / graphic styles
- Single ad set, wide audience — let LinkedIn optimize delivery across all 15
- No emojis, no profanity, professional but direct tone
- Social proof should rotate away from overused Karen/Sarah testimonials
- Ad set tracking params: `utm_term={{AD_SET_NAME}}&account_id={{ACCOUNT_ID}}&utm_campaign={{CAMPAIGN_NAME}}&utm_content={{AD_NAME}}&utm_source=LinkedIn&utm_medium=paid_social`
