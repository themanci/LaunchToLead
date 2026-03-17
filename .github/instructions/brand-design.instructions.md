---
description: "Use when creating HTML pages, designing graphics, building mockups, creating company graphics, landing pages, email templates, ad creatives, OBS overlays, LinkedIn banners, Skool covers, or any visual/HTML design work for Launch to Lead. Covers the Emerald Flow design system, Tailwind patterns, page templates, and component library."
applyTo: ["company-graphics/**", "mockups/**", "landing/**/*.html", "email_templates/**/*.html"]
---
# Brand Design & HTML Instructions

## Reference Before Designing

Read `BRAND_CONTEXT.md` Section 3 (Design System) and Section 21 (Design Patterns) for the full specification.

## Color System — "Emerald Flow"

```js
brand: {
    primary:   '#064e3b',  // Emerald 900 — primary buttons, headers, footer, logo bg
    secondary: '#14b8a6',  // Teal 500 — hover states, accents, check icons, gradients
    accent:    '#a3e635',  // Lime 400 — highlight badges, CTA alt, footer wordmark
    light:     '#ecfdf5',  // Emerald 50 — section backgrounds, card fills
    surface:   '#ffffff'   // White — default surface
}
```

### Additional Palette
- `slate-900` — dark text, dark hero sections, pricing blocks
- `slate-600` — body text (default)
- `slate-50` — alternate section backgrounds
- `amber-500/400` — testimonial badges, star ratings, bonus sections
- `red-500` — scarcity pulse dot, pain markers
- `red-400` — "✗" markers

### Gradients
- **Accent text:** `bg-gradient-to-r from-brand-primary to-brand-secondary` with `text-transparent bg-clip-text`
- **Card fills:** `bg-gradient-to-br from-emerald-50 to-teal-50`
- **Dark sections:** `bg-gradient-to-br from-slate-900 to-slate-800`
- **Popup/modal bg:** `bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900`
- **Final CTA block:** `bg-gradient-to-br from-emerald-600 to-teal-600`

## Typography

- **Primary font:** `'Plus Jakarta Sans', system-ui, sans-serif` — weights 300-800
- **Numbers/scores:** `'Space Grotesk', monospace` — weights 500, 700
- **Load via:** Google Fonts CDN with `display=swap`
- **Body class:** `font-sans antialiased`

## Component Patterns

### Page Shell
Every page must include:
1. Analytics scripts (GA4, Meta Pixel, LinkedIn Insight Tag) with internal traffic exclusion
2. `<div id="navigation-container"></div><script src="navigation.js"></script>`
3. Coaching format badge: pulsing red dot + "1-on-1 Live Coaching — Only 10 Spots / Month"
4. Footer with 3-column grid (brand + tagline, Company links, Connect links + CTA)
5. Lucide icon initialization script at bottom

### Buttons
```html
<!-- Primary CTA (filled) -->
<a class="px-8 py-4 bg-brand-primary text-white font-bold rounded-full hover:bg-brand-secondary transition shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg">
    See If You're a Fit
</a>

<!-- Secondary CTA (outlined) -->
<a class="px-8 py-4 bg-white text-brand-primary font-bold rounded-full border-2 border-brand-primary hover:bg-emerald-50 transition shadow-md hover:shadow-lg hover:-translate-y-0.5 text-lg inline-flex items-center justify-center gap-2">
    <i data-lucide="download" class="w-5 h-5"></i> FREE Resume Guide
</a>
```

### Section Background Alternation
1. `bg-white` — default
2. `bg-slate-50` — alternate
3. `bg-gradient-to-br from-slate-900 to-slate-800 text-white` — dark (pain, pricing)
4. `bg-gradient-to-br from-emerald-50 to-teal-50` — accent (offer cards)
5. `bg-brand-light` — testimonials
6. `bg-gradient-to-br from-emerald-600 to-teal-600 text-white` — final CTA

### Background Decoration
```html
<!-- Dot pattern -->
<div class="absolute inset-0 bg-dots opacity-20" style="background-size: 20px 20px;"></div>

<!-- Corner blobs -->
<div class="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-teal-100 rounded-full blur-3xl opacity-60" aria-hidden="true"></div>
<div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-lime-100 rounded-full blur-3xl opacity-60" aria-hidden="true"></div>
```

### Cards
- **Standard:** `bg-white rounded-2xl border border-slate-200 shadow-md p-6`
- **Featured:** `bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl border-2 border-emerald-300 shadow-xl p-8`
- **Dark:** `bg-slate-900 text-white rounded-2xl p-6`

### Testimonial Cards
- Avatar: `w-14 h-14 rounded-full object-cover border-3 border-emerald-400`
- Star rating: `text-amber-400 text-xs` with `★★★★★`
- Quote: `text-slate-700 italic`
- Name: `font-bold text-slate-900`
- Result: `text-sm text-emerald-600 font-semibold`

### Images
- Hero photos: `border-4 border-slate-800 shadow-2xl rounded-2xl object-cover object-top`
- Aspect ratios: `style="aspect-ratio: 4/3"` for hero, `style="aspect-ratio: 9/16"` for vertical video
- Always include `alt`, `loading="lazy"` (except hero LCP image which gets `fetchpriority="high"`)

## Logo Usage

```html
<!-- Full logo (header/footer) -->
<a href="index.html" class="flex items-center gap-2">
    <div class="bg-brand-accent text-brand-primary w-8 h-8 rounded-lg flex items-center justify-center">
        <span class="font-bold">L²</span>
    </div>
    <span class="font-bold text-lg text-white">Launch<span class="font-light text-brand-accent">ToLead</span></span>
</a>

<!-- Compact logo (landing pages) -->
<div class="bg-brand-primary text-white w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm shadow-sm">L²</div>
<span class="text-xl font-bold text-slate-900">Launch<span class="font-light text-brand-secondary">ToLead</span></span>
```

## Scarcity Badge (required on every page)

```html
<div class="bg-slate-900 text-white py-2 text-center px-4">
    <span class="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-wider md:tracking-widest">
        <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0"></span>
        1-on-1 Live Coaching &mdash; Only 10 Spots / Month
    </span>
</div>
```

## Company Graphics Specs

- **LinkedIn Banner:** 1584×396px recommended
- **LinkedIn Company Logo:** 300×300px square
- **Skool Community Cover:** 1920×1080px
- **Skool Course Cover:** 1200×630px
- **Social Share Image:** 1200×630px (`social-share.png`)
- **Stripe Product Image:** 640×320px minimum

## Print/PDF Considerations

For content that will be printed or exported to PDF (audits, proposals, methods):
- Include print-friendly CSS: `@media print { ... }`
- Hide navigation, badges, and interactive elements in print
- Ensure colors have sufficient contrast when printed
- Test with Ctrl+P before delivering

## Spacing Scale

- Section padding: `py-12` to `py-16` (consistent vertical rhythm)
- Container: `max-w-6xl mx-auto px-4` (main content), `max-w-4xl` (narrower), `max-w-3xl` (text-heavy)
- Card gaps: `gap-4` to `gap-8`
- Text spacing: `mb-2` to `mb-4` for headings, `space-y-2` to `space-y-4` for lists

## Responsive Patterns

- Mobile-first (Tailwind default)
- Grid: `grid md:grid-cols-2` or `grid md:grid-cols-3` — single column on mobile
- Flex layout: `flex flex-col md:flex-row` for hero split layouts
- Text scaling: `text-2xl md:text-4xl` for major headings
- Hide on mobile: `hidden md:block` (sparingly)
