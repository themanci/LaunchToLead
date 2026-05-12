# Launch to Lead — Design System

## Brand Colors

The design system is built on the "Emerald Flow" theme, representing growth, stability, and fresh starts.

### Primary Palette
- **Brand Primary (Emerald 900)**: `#064e3b` — Headings, primary buttons, strong accents
- **Brand Secondary (Teal 500)**: `#14b8a6` — Gradients, icons, secondary actions
- **Brand Accent (Lime 400)**: `#a3e635` — Highlights, "fresh" accents, attention-grabbing elements
- **Brand Light (Emerald 50)**: `#ecfdf5` — Page backgrounds, subtle sections
- **Surface (White)**: `#ffffff` — Cards, content areas

All pages use the Emerald Flow palette exclusively.

## Typography
- **Font Family**: 'Plus Jakarta Sans', sans-serif
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold), 800 (Extra Bold)
- **Source**: Google Fonts CDN

## Icons
- **Library**: Lucide (`https://unpkg.com/lucide@latest`)
- **Usage**: `<i data-lucide="icon-name">` + `lucide.createIcons()` call in page footer
- **Sizes**: `w-4 h-4` (inline), `w-5 h-5` (list items), `w-6 h-6` (feature cards)

## UI Elements

### Shadows
- **Soft**: `0 4px 20px -2px rgba(6, 78, 59, 0.1)` — Subtle depth for cards
- **Card**: `0 10px 40px -10px rgba(6, 78, 59, 0.15)` — Hover states, floating elements
- **Fresh**: `0 0 20px rgba(20, 184, 166, 0.25)` — Glow effect for primary actions

### Backgrounds
- **Dots Pattern**: `radial-gradient(#14b8a6 1px, transparent 1px)` at 20px spacing

## Spacing Scale

Tailwind default spacing with semantic guidelines:

| Context | Classes |
|---------|---------|
| Hero sections | `py-20 lg:py-24` |
| Content sections | `py-12 lg:py-16` or `py-16 lg:py-24` |
| Card padding | `p-6 lg:p-8` |
| Grid gaps | `gap-6 lg:gap-8` |
| Heading margins | `mb-6` |
| Paragraph margins | `mb-4` |
| Container max-width | `max-w-7xl` (standard), `max-w-3xl` (hero text) |

## Component Patterns

### Hero Section
```html
<section class="relative bg-brand-light py-20 lg:py-24 overflow-hidden">
  <div class="absolute inset-0 bg-dots opacity-40"></div>
  <div class="absolute -top-24 -right-24 w-96 h-96 bg-brand-secondary/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
  <div class="relative z-10 container mx-auto px-4">
    <div class="max-w-3xl mx-auto text-center">
      <!-- Badge, Heading, Description, CTA -->
    </div>
  </div>
</section>
```

### Card Component
```html
<div class="bg-white rounded-xl p-6 lg:p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1">
  <i data-lucide="icon-name" class="w-8 h-8 text-brand-secondary mb-4"></i>
  <h3 class="text-xl font-bold text-brand-primary mb-3">Title</h3>
  <p class="text-gray-600 mb-4">Description</p>
</div>
```

### CTA Banner
```html
<section class="relative py-24 bg-brand-primary overflow-hidden">
  <div class="relative z-10 container mx-auto px-4 text-center">
    <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">Call to Action</h2>
    <a href="https://calendar.app.google/uzaLZUWSUH3ZbaGr6" target="_blank"
       class="inline-block bg-white text-brand-primary px-8 py-4 rounded-full font-semibold hover:shadow-fresh transition-all duration-300">
      Book Your Free Career Launch Call →
    </a>
  </div>
</section>
```

### Footer Grid
**Structure**: 3-column grid on desktop, stacked on mobile
- Column 1: Brand + tagline
- Column 2: Company links (About, Success Stories, Free Resources, Skool, Legal)
- Column 3: Connect (social links + booking button)

```
grid md:grid-cols-3 gap-8
```

### Badge Component
```html
<span class="inline-block bg-brand-secondary/10 text-brand-secondary px-4 py-2 rounded-full text-sm font-semibold mb-6">
  Badge Text
</span>
```

### Navigation Header
- Sticky: `sticky top-0 z-50`
- Background: `bg-white/95 backdrop-blur-sm`
- Mobile menu: JavaScript toggle with hamburger icon
- Items: About | Success Stories | Free Resources | Social ▾ | Book a Free Call →

## Interactive States

### Hover
- **Links**: `hover:text-brand-secondary` (body) or `hover:text-brand-accent` (footer)
- **Buttons**: `hover:shadow-fresh` (primary) or `hover:-translate-y-0.5` (secondary)
- **Cards**: `hover:shadow-card hover:-translate-y-1`

### Focus
- **Buttons/Links**: `focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2`
- **Form inputs**: `focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20`

### Disabled
- **Buttons**: `opacity-50 cursor-not-allowed`

## Motion & Transitions

- **Default**: `transition-all duration-300 ease-in-out`
- **Fast**: `duration-200` (accordion, dropdowns)
- **Hover lift**: `-translate-y-1` (cards), `-translate-y-0.5` (buttons)
- **Scale**: `hover:scale-110` (icons)
- **Shadows**: `shadow-soft` → `shadow-card` with `transition-all duration-300`

## Border Radius

| Element | Class |
|---------|-------|
| Cards | `rounded-xl` |
| Primary buttons | `rounded-full` |
| Secondary buttons | `rounded-lg` |
| Badges | `rounded-full` |
| Form inputs | `rounded-lg` |
| Decorative blobs | `rounded-full` |

## CSS Architecture

### Pure Tailwind Approach
The project uses Tailwind CSS exclusively via CDN with custom configuration in `tailwind-config.js`. No external CSS files.

### Custom Configuration (`tailwind-config.js`)
Extends Tailwind with:
- `brand.*` color tokens (primary, secondary, accent, light, surface)
- `Plus Jakarta Sans` as default sans font
- Custom shadows (soft, card, fresh)
- Dots background pattern

### Font Standard
**Plus Jakarta Sans** is the only font family in use across all pages.
