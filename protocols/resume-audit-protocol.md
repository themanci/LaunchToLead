# LaunchToLead Resume Audit Protocol

> **Trigger phrase:** "Run our Launch to Lead resume audit"  
> **Input:** A resume file in `resumes/potential_clients/`  
> **Output:** An HTML analysis file saved in the same folder as the resume

---

## Step 1: Read the Resume

- Read the entire resume file provided by the user.
- Note the candidate's name, degree(s), target role, work experience, projects, skills, and awards.

---

## Step 2: Load the Impact Bullet Builder™ Principles

Read `lead-magnets/active/impact-equation-quick-start-v4.html` to refresh all scoring criteria. The core framework:

### The Formula (every bullet must have all 4)

```
Accomplishment + Metric + How + Why = IMPACT
```

| Component        | What it answers                                  | Example                                         |
| ---------------- | ------------------------------------------------ | ------------------------------------------------ |
| **Accomplishment** | What did you DO? (not "responsible for")         | Redesigned the thermal monitoring pipeline...    |
| **Metric**         | How much? How many? What %? What $?              | ...reducing false alarms by 74%...               |
| **How**            | What tools, methods, or skills did you use?       | ...using Python-based anomaly detection in MATLAB... |
| **Why**            | Why does the CEO care? Business impact.           | ...saving $1.2M/year in unnecessary shutdowns.   |

### Key Principles to Check

1. **Me-in-We Extractor™** — Flag any "we/team/group" language. Replace with the candidate's specific personal contribution. "Assisted with" is a resume killer.
2. **Dragon Slayer Technique** — Paint the pain/problem FIRST, then show the accomplishment. The bigger the monster, the bigger the hero. 3 ways to add context:
   - Stakes: "On a $4.2M project with zero margin for delay..."
   - Before/After: "Reduced from 12 hours to 45 minutes..."
   - Scale: "Across 14 manufacturing sites..."
3. **Pyramid of Value** — Classify each bullet:
   - **Doer** (duties, ignored by recruiters) → "Responsible for maintaining..."
   - **Achiever** (tasks + some numbers, considered) → "Maintained 15 servers..."
   - **Impact Standard** (full formula, gets hired) → "Redesigned server architecture, reducing downtime by 74%..."
4. **BS Meter** — No vague claims without proof. "Excellent communicator" means nothing. Show it.
5. **Action Verbs** — Never start with "Responsible for," "Duties included," "Assisted with," "Helped with," "Contributed to," or "Supported." Use strong verbs: Engineered, Designed, Built, Automated, Reduced, etc.
6. **Skills in Context** — Don't just list tools in a Skills section. Show them IN the bullets. "PSS/E" alone = weak. "Ran 40+ PSS/E contingency simulations" = strong.

---

## Step 3: Analyze Every Bullet

Go through each bullet on the resume and evaluate it against all 4 components of the formula. For each bullet, determine:

- Is it a **duty description** or an **accomplishment**?
- Does it have a **metric** (number, %, $, time)?
- Does it show **how** (tools, methods)?
- Does it explain **why it matters** (business impact)?
- Does it use **passive/weak language** ("Assisted," "Helped," "Responsible for")?
- Is there any **"we/team" language** that hides personal contribution?
- Is there **Dragon Slayer context** (problem painted before the solution)?

---

## Step 4: Create the HTML Analysis File

Save as `resumes/potential_clients/{candidate_name}_analysis.html`

The HTML file must include these 7 sections in order:

### Section 1: Overall Score (out of 100)

Score the resume on a 0–100 scale with a visual progress bar. Include 4 sub-scores:

| Sub-score              | Weight | What to evaluate                                    |
| ---------------------- | ------ | --------------------------------------------------- |
| Accomplishments        | /10    | Are bullets accomplishments or duty descriptions?    |
| Metrics                | /10    | How many bullets have quantified numbers?            |
| How / Method           | /10    | Are tools and methods shown in context?              |
| Why / Business Impact  | /10    | Does the reader know why the CEO would care?         |

**Scoring tiers:**
- 0–30: **"The Doer"** — resume is functionally invisible
- 31–50: **"The Achiever"** — has some numbers but missing impact
- 51–75: **"Almost There"** — structure is right, needs polish
- 76–100: **"Impact Standard"** — ready to land interviews

Include a verdict banner at the bottom of this section with the tier name and a 2-3 sentence explanation.

### Section 2: Key Issues Identified

List 5–8 specific problems found on the resume, ordered by severity. Each issue should include:
- A numbered badge (red for critical, amber for moderate)
- Bold issue title
- 2-3 sentence explanation referencing the specific Impact Bullet Builder principle violated
- Quote the actual offending bullet text where possible

### Section 3: Rewritten Resume

Rewrite the ENTIRE resume using the Impact Bullet Builder formula. Rules:
- **Every bullet** gets rewritten with Accomplishment + Metric + How + Why
- **[X]** placeholder for any metric, number, or detail only the candidate would know
- Tag each bullet with a colored label:
  - 🟢 `REWRITTEN` — bullet has been transformed using the formula
  - 🟡 `CONSIDER REMOVING` — bullet is low-value and may not be worth keeping (show strikethrough + conditional rewrite)
  - 🔴 `REMOVE OR REWRITE` — bullet violates core principles and should be cut or completely redone
- Preserve the resume's structure (Education, Experience, Projects, Awards, Skills)
- Use the actual LaunchToLead design system: Plus Jakarta Sans font, emerald/lime brand colors, Tailwind CSS via CDN
- Make the Best accomplishment (award, biggest project, etc.) visually prominent — don't let it be buried

### Section 4: Before & After Examples

Pick the 3 most dramatic transformations and show them side-by-side:
- Red box: Original bullet (labeled "Doer Level")
- Green box: Rewritten bullet (labeled "Impact Standard")

This section demonstrates the value of the framework visually.

### Section 5: Action Items Summary

List 5–8 numbered action items the candidate needs to take, ordered by priority. Each item should have:
- A numbered circle badge
- Bold action title
- 2-3 sentence explanation of what to do and why

### Section 6: What's Already Working

List 3–5 positive things about the resume in a green-themed grid. Be specific — "Strong action verbs" is good, "good resume" is not. This keeps the analysis from feeling purely negative and highlights what to preserve.

### Section 7: Full Scorecard

A detailed scoring table with 8 criteria:

| Criteria                    | Score | Notes                        |
| --------------------------- | ----- | ---------------------------- |
| Accomplishments (not duties)| X/10  | Specific observation         |
| Metrics / Quantification    | X/10  | Specific observation         |
| How / Method Shown          | X/10  | Specific observation         |
| Why / Business Impact       | X/10  | Specific observation         |
| Me-in-We Extractor™         | X/10  | Specific observation         |
| Dragon Slayer Context       | X/10  | Specific observation         |
| Action Verbs                | X/10  | Specific observation         |
| Bullet Quality Consistency  | X/10  | Specific observation         |
| **OVERALL**                 | XX/100| Tier name + one-line verdict |

End with an emerald "Good News" banner that highlights the candidate's potential and what applying the framework would unlock.

### Footer

```
Analysis prepared by LaunchToLead | Impact Bullet Builder™ Framework
launchtolead.io/free
```

---

## Step 5: Design & Styling Requirements

- **Font:** Plus Jakarta Sans (headings) + Space Grotesk (numbers/scores)
- **Colors:** Emerald/lime green for positive, red for problems, amber for warnings, slate for neutral
- **Layout:** Tailwind CSS via CDN (`https://cdn.tailwindcss.com`)
- **Cards:** Rounded corners (`rounded-2xl`), subtle shadows (`shadow-lg`), white backgrounds
- **Header:** Emerald-900 background with L² logo mark and LaunchToLead branding
- **Score visualization:** Large number + progress bar + sub-score grid
- **Responsive:** Should look good at all screen sizes

---

## Step 5b: Print-Friendly PDF Export (REQUIRED)

Every audit HTML must be designed to export cleanly to PDF via Chrome's "Print to PDF" (Ctrl+P). **Do NOT use html2canvas/jsPDF for audit reports** — that approach is only for fixed-size carousels. CSS print works perfectly for standard letter pages.

### Required Elements

#### 1. Download PDF Button (fixed top-right)

```html
<button id="download-btn" onclick="window.print()">Download PDF</button>
```

Style it with the brand gradient:
```css
#download-btn {
    position: fixed; top: 20px; right: 20px; z-index: 9999;
    background: linear-gradient(135deg, #a3e635, #14b8a6); color: #052e16;
    font-family: 'Plus Jakarta Sans', sans-serif; font-size: 16px; font-weight: 800;
    padding: 14px 32px; border: none; border-radius: 50px; cursor: pointer;
    box-shadow: 0 8px 30px rgba(163,230,53,0.3);
    transition: transform 0.2s, box-shadow 0.2s;
}
#download-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(163,230,53,0.4); }
```

#### 2. Print CSS Block (copy into `<style>`)

```css
@media print {
    @page {
        size: letter;
        margin: 0.5in 0.65in;
    }

    body {
        background: white !important;
        color: #1e293b !important;
        padding: 0 !important;
        margin: 0 !important;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
    }

    #download-btn { display: none !important; }

    /* Page breaks — each major section starts a new page */
    .page-break { break-before: page; }

    /* Prevent cards from splitting across pages */
    .keep-together { break-inside: avoid; }
    .space-y-4 > div,
    .space-y-6 > div,
    .grid > div { break-inside: avoid; }

    /* Resume role blocks */
    section .mb-5 { break-inside: avoid; }

    /* Resume bullet items */
    ul.space-y-3 > li { break-inside: avoid; }

    /* Score table rows */
    tbody tr { break-inside: avoid; }

    /* Before/After example cards */
    .rounded-xl.overflow-hidden { break-inside: avoid; }

    /* Prevent orphaned headings */
    h2, h3, h4 { break-after: avoid; }

    /* Remove shadows for clean print */
    section {
        box-shadow: none !important;
        border: 1px solid #e2e8f0 !important;
    }

    .max-w-4xl { max-width: 100% !important; }

    /* Ensure colored verdict/banner backgrounds print */
    .bg-red-900, .bg-amber-800, .bg-emerald-900 {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
    }
}
```

#### 3. Section Page Break Classes

Add `page-break` class to **Sections 2–7** (Section 1 stays with the header on page 1):

```html
<!-- Section 1: NO page-break (stays with header) -->
<section class="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">

<!-- Sections 2-7: ADD page-break -->
<section class="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 page-break">
```

#### 4. Long Section Splits

For sections with lots of content (especially Section 3: Rewritten Resume), add inline `style="break-before: page;"` at natural break points:
- Before "Academic Projects" subsection
- Before any role block that would overflow the current page
- Before "Research" subsections on longer resumes

```html
<!-- Natural break point within rewritten resume -->
<div class="mb-6" style="break-before: page;">
    <h4>Academic Projects</h4>
    ...
</div>
```

### Why CSS Print (not html2canvas) for Audits

| Document Type | Method | Why |
|---|---|---|
| Carousels (1080×1080 slides) | html2canvas + jsPDF | Chrome can't handle custom page sizes |
| Audit reports (letter pages) | CSS `@media print` | Chrome handles standard letter/A4 perfectly |

CSS print gives you automatic text reflow, proper pagination, and zero file-size issues. The html2canvas approach is overkill for standard documents and creates unnecessarily large files.

---

## Step 6: Present Results

After creating the HTML file, give the user a brief summary:
1. The overall score and tier
2. The top 3 issues (one sentence each)
3. The biggest strength/opportunity
4. Confirm the file location

---

## Reference Files

- **Impact Bullet Builder source:** `lead-magnets/active/impact-equation-quick-start-v4.html`
- **Example completed audit (print-friendly v2):** `resumes/potential_clients/neehal_surayavanshi_analysis_v2.html`
- **Example completed audit (print-friendly v2):** `resumes/potential_clients/steven_de_alwis_analysis_v2.html`
- **Resume input folder:** `resumes/potential_clients/`
- **Print export protocol (carousels only):** `protocols/html-to-pdf-export.md`
