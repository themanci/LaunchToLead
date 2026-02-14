# Referral Program — Launch to Lead

## How It Works

| Step | What Happens |
|------|-------------|
| 1 | You email a past client or contact using the email template |
| 2 | They get a unique referral link + code (e.g., `REF-GAVIN`) |
| 3 | The prospect clicks the link → lands on `refer.html` → sees the coaching pitch + their referral code |
| 4 | Prospect books a discovery call and mentions the code (or you see it in GA4) |
| 5 | If they buy → you Zelle/Venmo the referrer $200 |

## Files in This Folder

| File | Purpose |
|------|---------|
| `email-template.html` | Two email versions (past clients + professional contacts) with copy button. Open in browser to preview/copy. |
| `refer.html` | The landing page referred prospects see. Reads `?code=REF-NAME` from URL and displays it. Has GA4 tracking built in. |
| `README.md` | This file — execution playbook. |

## Generating Referral Codes

**Format:** `REF-FIRSTNAME` (all caps)

Examples:
- Gavin Patel → `REF-GAVIN`
- Jonah Brehm → `REF-JONAH`
- Karen Bickford → `REF-KAREN`

If two people share a first name, use `REF-FIRSTNAME-LASTINITIAL` (e.g., `REF-JOHN-M`).

**Referral link format:**
```
https://launchtolead.io/referral-program/refer.html?code=REF-GAVIN
```

## Tracking Referrals (Google Sheet)

Create a Google Sheet called **"LTL Referral Tracker"** with these columns:

| Referrer Name | Code | Email Sent Date | Expires | Referred Person | Call Date | Converted? | Payout Amount | Payout Method | Paid? | Paid Date |
|--------------|------|----------------|---------|----------------|-----------|-----------|--------------|--------------|-------|-----------|
| Gavin Patel | REF-GAVIN | 2/15/2026 | 5/16/2026 | — | — | — | $200 | — | — | — |

### Status tracking:
- **Expires** = Email Sent Date + 90 days
- **Converted?** = Yes/No (did the referred person buy coaching?)
- **Paid?** = Yes/No (did you send the $200?)

## GA4 Events (Auto-Tracked)

The landing page fires two custom GA4 events automatically:

| Event | When | Parameters |
|-------|------|-----------|
| `referral_page_view` | Someone visits the referral page | `referral_code` |
| `referral_cta_click` | Someone clicks "Book Your Free Strategy Call" | `referral_code`, `click_location` |

To see these in GA4: **Reports → Engagement → Events** → filter by `referral_page_view` or `referral_cta_click`.

## Execution Checklist

### One-Time Setup
- [ ] Create Google Sheet tracker (use column structure above)
- [ ] Make a list of past clients + contacts to email
- [ ] Test the referral landing page: `refer.html?code=REF-TEST`
- [ ] Deploy `referral-program/` folder to GitHub Pages

### For Each Referrer
- [ ] Generate their code: `REF-FIRSTNAME`
- [ ] Add row to Google Sheet tracker
- [ ] Open `email-template.html` in browser
- [ ] Pick Version A (past client) or Version B (professional contact)
- [ ] Replace `[FIRST_NAME]`, `[CODE]`, `[REFERRAL_LINK]`, `[EXPIRATION_DATE]`
- [ ] Copy plain text → paste into Gmail → send
- [ ] Mark "Email Sent Date" in tracker

### When a Referred Prospect Books
- [ ] Ask during discovery call: "How did you hear about us?" / "Do you have a referral code?"
- [ ] Log the referral in the Google Sheet
- [ ] If they convert → pay the referrer $200 → mark as paid

## Pricing & Terms

| Detail | Value |
|--------|-------|
| Payout per conversion | **$200** |
| Payment methods | Zelle or Venmo (referrer's choice) |
| Cap per referrer | **Unlimited** |
| Code expiration | **90 days** from email send date |
| When payout is sent | After referred client pays for coaching |

## Tips for Maximum Conversions

1. **Send emails in small batches** (5-10 at a time) — feels personal, not mass-blast
2. **Follow up once** after 2 weeks if they haven't responded — "Hey, just bumping this up"
3. **Text the link** to people you're close with — email is for the initial pitch, text is for close contacts
4. **Ask referrers to introduce you directly** via email — warm intro > cold link click
5. **Post about the program on LinkedIn** — "I'm paying $200 per referral" is attention-grabbing
