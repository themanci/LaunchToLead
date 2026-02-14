# Launch to Lead — Funnel & Site Update Checklist

## Funnel Flow Overview
```
Meta Ads → Landing Page 1 (Impact Bullet Equation lead magnet)
  ├── $0 budget → Thank You page (free guide only)
  └── $500+ budget → Landing Page 2 (Offer page with qualifier)
        ├── Not Qualified → Soft rejection + Skool/socials
        └── Qualified → Google Calendar booking
              └── Landing Page 3 / Email (VSL to prep for sales call)

Main Site ("Ready To Launch" CTA) → Landing Page 2b (Generic offer page, no banner)
  ├── Not Qualified → Soft rejection + Skool/socials
  └── Qualified → Google Calendar booking
        └── Landing Page 3 / Email (VSL to prep for sales call)
```

---

## ✅ COMPLETED
- [x] Landing Page 1: `landing/impact-bullet-equation.html` — Kit form, lead magnet, budget routing
- [x] Thank You page: `landing/thank-you.html` — Generic, dots background
- [x] Landing Page 2: `landing/offer.html` — Hormozi-style, qualifying form, calendar gating
- [x] Kit form wired (Form ID 8815632, custom fields: phone_number, budget)
- [x] Kit incentive email rewritten
- [x] Popup removed from index.html
- [x] Qualifying form: contact fields + 4 questions with correct qualification logic
- [x] Not-qualified result: Skool, socials, main site links
- [x] FAQ pricing updated to $1,000

---

## 🔨 TO DO — Landing Pages & Funnel

### 1. [ ] Create Landing Page 3: Post-Booking Prep Page
- **Purpose:** After someone books via Google Calendar, send them to a page (or email) with a VSL that preps them for the strategy call
- **Decision needed:** Standalone landing page vs. n8n-triggered email (or both?)
- **Content:** VSL video, what to expect on the call, how to prepare
- **File:** `landing/booking-confirmed.html` (if page) or n8n automation (if email)

### 2. [ ] Create Generic Offer Page (no lead magnet banner)
- **Purpose:** Version of offer.html without the "Confirmed: Your Impact Bullet Builder..." banner at top — for use from main site
- **File:** `landing/offer-direct.html` (or parameterize offer.html with URL param)
- **Decision needed:** Separate file or single file with URL param toggle?
- **Everything else stays the same:** qualifying form, calendar gating, FAQ, social proof

### 3. [ ] Update Main Site CTAs
- **Purpose:** Change all "Book Your Strategy Call" / "Book a Free Call" / "See If You Qualify" buttons on index.html to something like "Ready To Launch?" that funnels to the generic offer page
- **Scope:** index.html hero CTA, any other CTA buttons/sections across site
- **Also check:** about.html, success-stories.html, vault.html, other pages for CTA consistency

### 4. [ ] Simplify Google Calendar Booking Questions
- **Purpose:** Remove redundant qualification questions from Google Calendar signup since users already answered them on offer page
- **Action:** Review current Google Calendar questions and strip down to minimum (name, email already known — just confirm they're booking)
- **Note:** This is done in Google Calendar settings, not code

---

## 🔨 TO DO — Main Site Updates

### 5. [ ] Remove Video from Index Page
- **Purpose:** Main homepage video is being replaced — VSLs will live in landing pages instead
- **Action:** Replace video section with image placeholders
- **File:** index.html

### 6. [ ] Remove Video from About Page
- **Purpose:** Same as above — no video needed on about page
- **Action:** Replace video section with image placeholders
- **File:** about.html
- **Note:** Keep Karen's video on success-stories.html

### 7. [ ] Change "Fortune 100 Ag OEM" References
- **Purpose:** "Ag OEM" is confusing — simplify to "Fortune 100 company" or similar
- **Scope:** Search ALL files for "Ag OEM" and replace
- **Files to check:** index.html, about.html, success-stories.html, methods/, testimonials/, etc.

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

### 10. [ ] Commit All Landing Page Work
- **Branch:** `website-updates`
- **Uncommitted files:** `landing/impact-bullet-equation.html`, `landing/thank-you.html`, `landing/offer.html`, modified `index.html`, this checklist
- **Last commit:** `6d17e07`

### 11. [ ] Push to GitHub & Merge
- **Push** `website-updates` → remote
- **Merge** to `main` when ready to go live

---

## Notes
- Google Calendar link: https://calendar.app.google/uzaLZUWSUH3ZbaGr6
- Kit Form ID: 8815632
- GA4: G-L8V47TR52C
- Meta Pixel: 3141490496240983
- Skool: https://www.skool.com/launch-to-lead-community-6905/about?ref=c9899dd4e0bf4fe9a69a6315529fab96
