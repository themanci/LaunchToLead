# Launch to Lead — Funnel & Site Update Checklist

## Funnel Flow Overview
```
Meta Ads → Landing Page 1 (Impact Bullet Equation lead magnet)
  ├── Not actively applying → Thank You page (free guide only)
  └── Actively applying → Landing Page 2 (Offer page with qualifier)
        ├── Not Qualified → Soft rejection + Skool/socials
        └── Qualified → Google Calendar booking
              └── Landing Page 3 / Email (VSL to prep for sales call)

Main Site ("Ready To Launch? →" CTA) → Landing Page 2 (offer.html?source=site, no banner)
  ├── Not Qualified → Soft rejection + Skool/socials
  └── Qualified → Google Calendar booking
        └── Landing Page 3 / Email (VSL to prep for sales call)
```

---

## ✅ COMPLETED

### Landing Pages & Forms
- [x] Landing Page 1: `landing/impact-bullet-equation.html` — Kit form, lead magnet
- [x] Landing Page 1 question: "Are you actively applying for engineering jobs?" (Yes→offer, No→thank-you)
- [x] Thank You page: `landing/thank-you.html` — Generic, dots background
- [x] Landing Page 2: `landing/offer.html` — Hormozi-style, qualifying form, calendar gating
- [x] Kit Form 1 wired (Form ID 8815632, custom fields: `phone_number`, `actively_applying`)
- [x] Kit Form 2 wired (Form ID 9087434, custom fields: `last_name`, `phone_number`, `situation`, `timeline`, `commitment`, `willing_to_invest`, `qualified`)
- [x] Kit incentive email rewritten
- [x] Qualifying form: contact fields (phone, first/last name, email) + 4 questions
- [x] Qualification logic: `timeline !== 'thinking' && commitment !== 'no' && willingToInvest !== 'no'`
- [x] Not-qualified result: Warm message + Skool card + social links + main site link
- [x] Budget Q replaced with "willing to invest in coaching" (softer question)
- [x] FAQ pricing removed — says "pricing discussed on strategy call"

### Main Site Updates
- [x] Generic offer page: URL param toggle (`?source=site` hides confirmation banner)
- [x] All main site CTAs → "Ready To Launch? →" → `landing/offer.html?source=site`
  - index.html (scarcity banner, hero, mid-page, final CTA, footer)
  - about.html (scarcity banner, hero, mid-page, final CTA, footer)
  - success-stories.html (scarcity banner, mid-page, final CTA, footer)
  - vault.html (scarcity banner, mid-page, footer, popup CTA)
  - social.html (scarcity banner, main CTA, footer)
  - legal.html (main CTA, footer)
  - navigation.js (desktop + mobile nav CTAs)
  - lead-magnet.js (popup CTA)
- [x] GA4 tracking updated: `offer_page_click` event (replaces `strategy_call_click`)
- [x] Meta Pixel tracking updated: tracks `offer.html` clicks (replaces `calendar.app.google`)
- [x] Popup removed from index.html
- [x] Index.html video → image placeholder (`professional_standing.png` with gradient overlay)
- [x] About.html video → image placeholder (`casual_roof.jpg` with "Meet Mansour" overlay)
- [x] "Fortune 100 Ag OEM" → "Fortune 100 company" on all public pages (index, about, offer, vault, success-stories)

### Git
- [x] Previous commit: `4ccc0df` — landing page funnel + qualifying form + Kit integration

---

## 🔨 TO DO — Landing Pages & Funnel

### 1. [ ] Create Landing Page 3: Post-Booking Prep Page
- **Purpose:** After someone books via Google Calendar, send them to a page (or email) with a VSL that preps them for the strategy call
- **Decision needed:** Standalone landing page vs. n8n-triggered email (or both?)
- **Content:** VSL video, what to expect on the call, how to prepare
- **File:** `landing/booking-confirmed.html` (if page) or n8n automation (if email)

### 4. [x] Simplify Google Calendar Booking Questions
- **Simplified to:** Dream role + Dream companies (removed 3 redundant questions)
- **Done in Google Calendar settings**

---

## 🔨 TO DO — Main Site Updates

### 8. [ ] Figure Out Free Resources Page (vault.html)
- **Purpose:** Decide how the free resources / vault page fits into the new funnel
- **Questions:**
  - Does it still link to lead magnets directly?
  - Should it funnel people through the offer page instead?
  - Does it need to be simplified or removed?
- **Decision needed before implementation**

---

## 🔨 TO DO — External / Non-Code

### 9. [ ] Update Meta Ads
- **Purpose:** Streamline ads to point to `landing/impact-bullet-equation.html`
- **Action:** Update ad creative & URLs in Meta Ads Manager
- **Not code — done in Meta Ads Manager dashboard**

---

## 🔨 TO DO — Git & Deploy

### 10. [ ] Commit Current Batch of Changes
- **Branch:** `website-updates`
- **Changes since last commit (`4ccc0df`):** CTA overhaul, video removal, Ag OEM fixes, GA4/Meta tracking updates, offer page refinements
- **Status:** Ready to commit

### 11. [ ] Push to GitHub & Merge
- **Push** `website-updates` → remote
- **Merge** to `main` when ready to go live

---

## 🧹 LOW PRIORITY / OPTIONAL
- [ ] Fix "Ag OEM" in internal docs (lead-magnets, methods, mockups) — not public-facing

---

## Notes
- Google Calendar link: https://calendar.app.google/uzaLZUWSUH3ZbaGr6
- Kit Form 1 (Landing Page 1): 8815632
- Kit Form 2 (Offer Page): 9087434
- GA4: G-L8V47TR52C
- Meta Pixel: 3141490496240983
- Skool: https://www.skool.com/launch-to-lead-community-6905/about?ref=c9899dd4e0bf4fe9a69a6315529fab96
- Generic offer URL: landing/offer.html?source=site
