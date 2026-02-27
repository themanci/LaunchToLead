# LinkedIn Ads Setup Guide — LaunchToLead.io

> Complete step-by-step to go from zero to running LinkedIn ads with full conversion tracking.
> Written for your specific site architecture (GitHub Pages, ConvertKit, static HTML).

---

## Table of Contents

1. [Overview: How LinkedIn Tracking Works](#1-overview)
2. [Step 1: Create a LinkedIn Campaign Manager Account](#step-1)
3. [Step 2: Install the LinkedIn Insight Tag (Your "Pixel")](#step-2)
4. [Step 3: Set Up Conversion Tracking](#step-3)
5. [Step 4: Create Your First Campaign](#step-4)
6. [Step 5: Verify Everything Works](#step-5)
7. [LinkedIn CAPI (Conversions API) — Do You Need It?](#capi)
8. [File Changes Summary](#file-changes)

---

<a id="1-overview"></a>
## 1. Overview: How LinkedIn Tracking Works

LinkedIn's tracking system has two parts, just like Meta:

| Concept | Meta Equivalent | LinkedIn Equivalent |
|---------|----------------|-------------------|
| Base tracking pixel | Meta Pixel (`fbq('init', ...)`) | **Insight Tag** (`_linkedin_partner_id`) |
| Page view tracking | `fbq('track', 'PageView')` | Automatic with Insight Tag |
| Conversion events | `fbq('track', 'Lead')` | **Conversion tracking** (URL rules or event-specific pixel) |
| Server-side tracking | CAPI (Conversions API) | **LinkedIn CAPI** (optional, covered below) |

**Your funnel for LinkedIn ads:**
```
LinkedIn Ad Click
    → launchtolead.io/free (Impact Bullet Equation landing page)
        → User fills out form (first name, email)
            → /landing/thank-you.html (confirmation + CTA — LEAD CONVERSION)
                → /landing/offer.html (full sales page + qualifying form)
                    → /landing/booking-confirmed.html (Career Launch Call booked — BOOKING CONVERSION)
```

You want to track TWO conversion events:
1. **Lead** — anyone who submits the lead magnet form (fires on thank-you page load)
2. **Booking** — anyone who books a Career Launch Call (fires on booking-confirmed page load)

---

<a id="step-1"></a>
## Step 1: Create a LinkedIn Campaign Manager Account

> ⏱ ~5 minutes

1. Go to **[linkedin.com/campaignmanager](https://www.linkedin.com/campaignmanager/)**
2. Click **"Create Account"**
3. Fill in:
   - **Account Name:** `LaunchToLead`
   - **Currency:** `USD`
   - **LinkedIn Page:** Select your LaunchToLead LinkedIn Company Page
     - If you don't have a Company Page yet: create one at [linkedin.com/company/setup](https://www.linkedin.com/company/setup/new/) first (name: "Launch to Lead", category: "Education/Career Coaching")
4. Click **"Agree & Create Account"**
5. You'll land in Campaign Manager — note your **Account ID** in the URL (you'll see it as a number like `512345678`)

### Add a Payment Method
1. In Campaign Manager, click the **gear icon** (⚙) → **"Billing center"**
2. Click **"Add credit card"**
3. Enter your card details
4. LinkedIn doesn't charge you until your ads run — this just unlocks the ability to launch campaigns

---

<a id="step-2"></a>
## Step 2: Install the LinkedIn Insight Tag (Your "Pixel")

> ⏱ ~3 minutes to get the tag, already done in code for you

### 2a. Get Your Partner ID

1. In Campaign Manager, click **"Analyze"** in the left sidebar → **"Insight Tag"**
2. Click **"Install my Insight Tag"** (or "Manage Insight Tag")
3. You'll see a screen with your **Partner ID** — it's a number like `7654321`
4. Select **"I will install the tag myself"**
5. LinkedIn shows you the JavaScript snippet — you just need the **Partner ID number** from it

The snippet looks like this:
```html
<script type="text/javascript">
_linkedin_partner_id = "YOUR_PARTNER_ID";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);
</script>
<script type="text/javascript">
(function(l) { ... })(window.lintrk);
</script>
```

**Copy just the number** (e.g., `7654321`).

### 2b. Add It to Your Site

I've already created a file called `linkedin-insight-tag.js` in your project root. You just need to:

1. Open `linkedin-insight-tag.js`
2. It's already set to `8832100` — no changes needed
3. The script is already added to all your pages (see [File Changes Summary](#file-changes))

That's it — the Insight Tag will now:
- Track page views on every page
- Build a retargeting audience automatically
- Enable conversion tracking (next step)

### 2c. Verify the Tag is Working

1. Install the **[LinkedIn Insight Tag Helper](https://chrome.google.com/webstore/detail/linkedin-insight-tag-help/)** Chrome extension
2. Visit `launchtolead.io` — the extension icon should turn green
3. Click the icon to confirm it says "Tag found" with your Partner ID
4. In Campaign Manager → Analyze → Insight Tag, you should see domains listed within 24 hours

---

<a id="step-3"></a>
## Step 3: Set Up Conversion Tracking

> ⏱ ~10 minutes

You need two conversions:

### Conversion 1: Lead (Form Submitted)

This fires when someone submits the lead magnet form and lands on the thank-you page.

1. In Campaign Manager, go to **"Analyze"** → **"Conversion tracking"**
2. Click **"Create Conversion"**
3. Fill in:
   - **Name:** `Lead - Impact Bullet Builder Download`
   - **Conversion type:** Select **"Lead"**
   - **Value (optional):** Leave blank or enter `5` (estimated value of a lead for your records)
   - **Attribution model:** Use **"Last touch - each campaign"**
   - **Attribution window:** `30 days` post-click, `7 days` post-view
4. Under **"Define your conversion"**, choose **"Use an event-specific pixel"**
   - LinkedIn will generate an event-specific pixel with a `conversion_id`
   - **Copy the `conversion_id` number** — it looks like: `19876543`
   - This is already integrated in the `linkedin-insight-tag.js` — just replace the placeholder
5. Alternatively, choose **"Use a page load trigger"** and enter the URL:
   - URL contains: `/landing/thank-you.html`
   - This method is simpler (no code change needed) but slightly less precise

**Recommended: Use the event-specific pixel** — it fires at the exact moment of form submission, matching how we fire the Meta Lead pixel. The code is already wired up in `linkedin-insight-tag.js`.

### Conversion 2: Career Launch Call Booked

When someone books a coaching call:

1. Create conversion:
   - **Name:** `Career Launch Call Booked`
   - **Conversion type:** Select **"Schedule"****
   - **Value:** `200`
2. Define: URL contains `/landing/booking-confirmed.html`

---

<a id="step-4"></a>
## Step 4: Create Your First Campaign

> ⏱ ~15 minutes

### 4a. Campaign Group

1. In Campaign Manager, click **"Advertise"** → **"Create"** → **"Campaign"**
2. **Campaign Group Name:** `Impact Bullet Builder - Lead Gen`

### 4b. Campaign Setup

1. **Objective:** Select **"Website conversions"**
   - This tells LinkedIn to optimize for people most likely to convert (submit your form)
   - Alternative: "Lead generation" uses LinkedIn's native forms — DON'T use this. You want traffic to YOUR landing page so you control the experience and capture full data in ConvertKit.

2. **Conversion tracking:** Select the "Lead - Impact Bullet Builder Download" conversion you created in Step 3

3. **Campaign Name:** Name each campaign after the ad creative, e.g.:
   - `IBB - Financial Bleed (Ad 01)`
   - `IBB - Invisible Resume (Ad 02)`
   - etc.

### 4c. Audience Targeting

This is where LinkedIn shines vs Meta — you can target by job title, degree, industry.

**Recommended audience for LaunchToLead:**

| Setting | Value |
|---------|-------|
| **Location** | United States (or add Canada, UK if you coach internationally) |
| **Profile language** | English |
| **Job function** | Engineering |
| **Seniority** | Entry-level, Senior (this captures new grads + early career) |
| **Years of experience** | 0-5 years |
| **Degree** | Bachelor's, Master's |
| **Fields of study** | Mechanical Engineering, Electrical Engineering, Computer Engineering, Aerospace Engineering, Civil Engineering, Chemical Engineering, Industrial Engineering, Software Engineering, Biomedical Engineering |

**Optional narrow further:**
- **Member skills:** Add relevant skills like "MATLAB", "SolidWorks", "AutoCAD", "Python", "CAD", "FEA"
- **Member groups:** Engineering job seeker groups

**Estimated audience size:** You want 50K–500K. If it's too small, widen seniority or add more fields of study. If too large, add skills filters.

**Exclusions:**
- Exclude people who work at companies with 10,000+ employees (optional — they may not need career coaching)
- Exclude your existing connections if you want purely cold traffic

### 4d. Ad Format & Placement

| Setting | Value |
|---------|-------|
| **Ad format** | **Single Image Ad** (your 1080×1080 graphics) |
| **Placement** | LinkedIn audience network: **OFF** (keep ads on LinkedIn only for now) |

### 4e. Budget & Schedule

**For testing (first 2 weeks):**

| Setting | Value |
|---------|-------|
| **Budget type** | Daily budget |
| **Daily budget** | `$20–$50/day` (start at $20, scale if CPA is good) |
| **Schedule** | Start immediately, run continuously |
| **Bid strategy** | **Maximum delivery** (let LinkedIn auto-bid to start) |

> **Expected costs:** LinkedIn CPCs are typically $3–$8 for this audience. With a $20/day budget, expect 3–7 clicks/day. With a 20-30% landing page conversion rate, that's 1-2 leads/day at $10-20/lead. This is higher than Meta but the lead quality is significantly better for B2P (business-to-professional) offers.

### 4f. Create the Ad

1. Click **"Create new ad"**
2. Fill in:
   - **Name:** `Ad 01 - Financial Bleed`
   - **Introductory text:** Paste the ad copy from `ads/linkedin/linkedin-ads-copy.md` (Version A, B, or C)
   - **Destination URL:** `https://launchtolead.io/free`
   - **Image:** Upload the screenshot of your `linkedin-ad-01.html` graphic (1080×1080)
   - **Headline:** Choose from the options in the .md file (e.g., "This Is What 6 Months Unemployed Actually Costs")
   - **Description:** `Free 14-page resume framework for engineers` (shows below headline)
   - **Call to action button:** Select **"Download"** or **"Learn More"**

3. Repeat for each ad variation you want to test

### 4g. Testing Strategy

**Week 1-2: Creative Testing**
- Run all 5 ad creatives with Version A copy
- $20/day split across all 5 ads
- After 1,000 impressions per ad, pause the bottom 2 performers
- Keep the top 3 running

**Week 3-4: Copy Testing**
- For your top 3 creatives, test Version B and C copy
- Keep the winning creative + copy combination

**Week 5+: Audience Testing**
- Duplicate winning campaigns with different audience segments
- Test: by field of study, by seniority, by years of experience

---

<a id="step-5"></a>
## Step 5: Verify Everything Works

### Pre-Launch Checklist

- [ ] LinkedIn Campaign Manager account created
- [ ] Payment method added
- [ ] Partner ID copied from Insight Tag page
- [ ] `linkedin-insight-tag.js` updated with your Partner ID
- [ ] Conversion IDs added to the script (if using event-specific pixels)
- [ ] Code pushed to GitHub → deployed to launchtolead.io
- [ ] Chrome extension confirms Insight Tag fires on launchtolead.io
- [ ] Chrome extension confirms Insight Tag fires on launchtolead.io/free
- [ ] Submit test lead → confirm conversion fires in Campaign Manager (may take up to 24h to appear)
- [ ] Ad creative uploaded (1080×1080 screenshots of your HTML graphics)
- [ ] Ad copy pasted from linkedin-ads-copy.md
- [ ] Campaign set to "Website conversions" objective
- [ ] Audience targeting configured per recommendations above
- [ ] Daily budget set ($20–$50)
- [ ] Campaign launched!

### Post-Launch Monitoring (First 48 Hours)

1. Check Campaign Manager → your campaign → **"Conversions"** column
2. Check Google Analytics → Realtime → filter by source "linkedin"
3. Check ConvertKit → subscribers → look for new leads
4. Verify the LinkedIn Insight Tag Helper shows green on your landing page

---

<a id="capi"></a>
## LinkedIn CAPI (Conversions API) — Do You Need It?

### What It Is
LinkedIn's Conversions API (CAPI) lets you send conversion events server-side, bypassing browser limitations like ad blockers, cookie restrictions, and iOS privacy changes. It's the same concept as Meta's CAPI.

### Do You Need It Right Now?
**No — not yet.** Here's why:

| Factor | Your Situation |
|--------|---------------|
| Traffic volume | Low to start (~3-7 clicks/day) — CAPI matters more at scale |
| Audience | Desktop-heavy (engineers on LinkedIn) — fewer ad blockers than mobile |
| Platform | Static HTML on GitHub Pages — no server to run CAPI from |
| Cookie landscape | LinkedIn's first-party cookies work fine for now |
| Complexity | Would require a serverless function (Cloudflare Worker, AWS Lambda, etc.) |

### When to Add CAPI
Consider adding it when:
- You're spending $100+/day on LinkedIn ads
- You notice a gap between ConvertKit leads and LinkedIn-reported conversions (>30% difference)
- LinkedIn releases easier CAPI integration (they're behind Meta on this)

### How It Would Work (Future Reference)
1. Set up a **Cloudflare Worker** or **Netlify Function** as a server-side endpoint
2. On form submission, your landing page sends a POST to your endpoint with:
   - Email (hashed), first name, LinkedIn click ID (`li_fat_id` cookie)
3. Your endpoint forwards the conversion to LinkedIn's CAPI endpoint:
   - `POST https://api.linkedin.com/rest/conversionEvents`
   - Requires an OAuth 2.0 access token from your Campaign Manager
4. LinkedIn matches the conversion server-side — no browser dependency

**Bottom line: Start with the Insight Tag + event-specific pixel. Add CAPI later if needed.**

---

<a id="file-changes"></a>
## File Changes Summary

### New Files Created
| File | Purpose |
|------|---------|
| `linkedin-insight-tag.js` | Base Insight Tag + conversion event tracking (like meta-pixel.js) |
| `LINKEDIN_ADS_SETUP.md` | This guide |

### Modified Files (Insight Tag added)
| File | What Changed |
|------|-------------|
| `index.html` | Added `<script src="linkedin-insight-tag.js">` |
| `about.html` | Added `<script src="linkedin-insight-tag.js">` |
| `success-stories.html` | Added `<script src="linkedin-insight-tag.js">` |
| `vault.html` | Added `<script src="linkedin-insight-tag.js">` |
| `legal.html` | Added `<script src="linkedin-insight-tag.js">` |
| `social.html` | Added `<script src="linkedin-insight-tag.js">` |
| `landing/impact-bullet-equation.html` | Added tag + conversion event on form submit |
| `landing/thank-you.html` | Added tag + conversion event on page load |
| `landing/offer.html` | Added tag (page view tracking only — no conversion event) |
| `landing/booking-confirmed.html` | Added tag + booking conversion event |

### Action Required From You
1. Get your **Partner ID** from Campaign Manager → Analyze → Insight Tag
2. ~~Replace `YOUR_PARTNER_ID_HERE` in `linkedin-insight-tag.js`~~ ✅ Done — set to `8832100`
3. (Optional) Get conversion IDs and replace the placeholders in the same file
4. Push to GitHub

---

## Quick Reference: LinkedIn vs Meta Setup Comparison

| Item | Meta (done ✅) | LinkedIn (this guide) |
|------|---------------|----------------------|
| Account | Meta Business Manager | LinkedIn Campaign Manager |
| Base pixel | `meta-pixel.js` (Pixel ID: `3141490496240983`) | `linkedin-insight-tag.js` (Partner ID: TBD) |
| Pixel fires on | All pages via `<script>` tag | All pages via `<script>` tag |
| Lead event | `fbq('track', 'Lead')` on form submit | `lintrk('track', { conversion_id: ... })` on form submit |
| Server-side | Not implemented yet | Not needed yet |
| Retargeting | Automatic with pixel | Automatic with Insight Tag |
| GA4 | `G-L8V47TR52C` on all pages | Same — no change needed |
