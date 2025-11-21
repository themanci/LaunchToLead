# Launch to Lead - Design System

## Brand Colors

The design system is built on a primary "Emerald Flow" theme, representing growth, stability, and fresh starts.

### Primary Palette
- **Brand Primary (Emerald 900)**: `#064e3b` - Used for headings, primary buttons, and strong accents.
- **Brand Secondary (Teal 500)**: `#14b8a6` - Used for gradients, icons, and secondary actions.
- **Brand Accent (Lime 400)**: `#a3e635` - Used for highlights, "fresh" accents, and attention-grabbing elements.
- **Brand Light (Emerald 50)**: `#ecfdf5` - Used for page backgrounds and subtle sections.
- **Surface (White)**: `#ffffff` - Used for cards and content areas.

### Sub-Brand Palettes (Legacy/Specific Use)
*Note: The main site uses the Primary Palette for consistency. These are reserved for specific sub-brand differentiation if needed.*

- **Pivot (Amber)**:
  - Primary: `#b45309` (Amber 700)
  - Secondary: `#f59e0b` (Amber 500)
  - Light: `#fffbeb` (Amber 50)

- **Accelerate (Indigo)**:
  - Primary: `#4338ca` (Indigo 700)
  - Secondary: `#6366f1` (Indigo 500)
  - Light: `#eef2ff` (Indigo 50)

## Typography
- **Font Family**: 'Plus Jakarta Sans', sans-serif.
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold), 800 (Extra Bold).

## UI Elements

### Shadows
- **Soft**: `0 4px 20px -2px rgba(6, 78, 59, 0.1)` - Subtle depth for cards.
- **Card**: `0 10px 40px -10px rgba(6, 78, 59, 0.15)` - Hover states and floating elements.
- **Fresh**: `0 0 20px rgba(20, 184, 166, 0.25)` - Glow effect for primary actions.

### Backgrounds
- **Dots Pattern**: Radial gradient using Teal 500.

## Spacing Scale

The design system uses Tailwind's default spacing scale with semantic guidelines:

### Standard Spacing Units
- **1** (4px) - Tight spacing between inline elements, badge padding
- **2** (8px) - Compact component spacing, small gaps
- **3** (12px) - Default text-to-element spacing
- **4** (16px) - Standard padding for buttons, form inputs
- **6** (24px) - Section element spacing, card padding
- **8** (32px) - Component margins, grid gaps
- **12** (48px) - Section padding (small screens)
- **16** (64px) - Section padding (large screens)
- **20** (80px) - Hero section vertical padding (small screens)
- **24** (96px) - Hero section vertical padding (large screens)
- **32** (128px) - Large section spacing (desktop)

### Usage Guidelines
- **Hero sections**: `py-20 lg:py-24` (standard across all pages)
- **Content sections**: `py-12 lg:py-16` or `py-16 lg:py-24` for emphasis
- **Card padding**: `p-6 lg:p-8` for standard cards
- **Grid gaps**: `gap-6 lg:gap-8` for card grids
- **Element margins**: `mb-6` for headings, `mb-4` for paragraphs
- **Container max-width**: `max-w-7xl` (standard), `max-w-3xl` (hero text), `max-w-2xl` (narrow content)

## Component Patterns

### Hero Section
**Structure**:
```html
<section class="relative bg-brand-light py-20 lg:py-24 overflow-hidden">
  <!-- Decorative background (dots pattern) -->
  <div class="absolute inset-0 bg-dots opacity-40"></div>
  
  <!-- Decorative blobs (with pointer-events-none and aria-hidden) -->
  <div class="absolute -top-24 -right-24 w-96 h-96 bg-brand-secondary/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
  
  <!-- Content -->
  <div class="relative z-10 container mx-auto px-4">
    <div class="max-w-3xl mx-auto text-center">
      <!-- Badge, Heading, Description, CTA -->
    </div>
  </div>
</section>
```

**Key properties**:
- Background: `bg-brand-light` with `bg-dots` overlay
- Padding: `py-20 lg:py-24` (standard)
- Decorative elements: Always `pointer-events-none` and `aria-hidden="true"`
- Content container: `relative z-10` to ensure clickability above decorations
- Text max-width: `max-w-3xl` for hero sections

### Card Component
**Structure**:
```html
<div class="bg-white rounded-xl p-6 lg:p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1">
  <!-- Icon or image -->
  <div class="mb-4">
    <i class="fas fa-icon text-3xl text-brand-secondary"></i>
  </div>
  
  <!-- Heading -->
  <h3 class="text-xl font-bold text-brand-primary mb-3">Card Title</h3>
  
  <!-- Description -->
  <p class="text-gray-600 mb-4">Card description text...</p>
  
  <!-- Optional CTA -->
  <a href="#" class="text-brand-secondary hover:text-brand-primary font-semibold">
    Learn More →
  </a>
</div>
```

**Key properties**:
- Background: Always `bg-white`
- Border radius: `rounded-xl` (standard for cards)
- Padding: `p-6 lg:p-8`
- Shadow: `shadow-soft` default, `hover:shadow-card` on hover
- Hover effect: `hover:-translate-y-1` with `transition-all duration-300`

### CTA Banner
**Structure**:
```html
<section class="relative py-24 bg-brand-primary overflow-hidden">
  <!-- Decorative blobs -->
  <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-secondary/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
  
  <div class="relative z-10 container mx-auto px-4 text-center">
    <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">Call to Action</h2>
    <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Description text</p>
    <a href="#" class="inline-block bg-white text-brand-primary px-8 py-4 rounded-full font-semibold hover:shadow-fresh transition-all duration-300">
      Primary Action
    </a>
  </div>
</section>
```

**Key properties**:
- Background: `bg-brand-primary` (emerald 900)
- Text: White for contrast
- Button: White background with `text-brand-primary`, `rounded-full`
- Button hover: `hover:shadow-fresh` (teal glow effect)

### Footer Grid
**Structure**: 4-column grid on desktop, stacked on mobile
- Column 1: Brand/tagline
- Column 2: Quick Links (About, FAQ, Success Stories, Contact)
- Column 3: Services (Launch, Pivot, Accelerate)
- Column 4: Connect (LinkedIn with icon, Email with icon, GitHub with icon)

**Key properties**:
- Grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8`
- Background: `bg-brand-primary` with white text
- Links: `hover:text-brand-accent` (lime 400)
- Icons: FontAwesome with `mr-2` spacing

### Badge Component
```html
<span class="inline-block bg-brand-secondary/10 text-brand-secondary px-4 py-2 rounded-full text-sm font-semibold mb-6">
  Badge Text
</span>
```

### FAQ Accordion
**Key properties**:
- Uses Alpine.js for state management
- Chevron rotation: `transform transition-transform duration-200`
- Answer reveal: `x-show` with `x-transition`
- Search/filter functionality in `faq.js`

### Timeline (Horizontal)
**Key properties**:
- Grid layout: `grid grid-cols-1 md:grid-cols-3 gap-8`
- Connector lines between steps (hidden on mobile)
- Circle indicators with brand colors
- Number badges inside circles

### Pricing Card
**Key properties**:
- Similar to Card Component but with pricing emphasis
- Large price display: `text-4xl lg:text-5xl font-bold`
- Feature list with checkmark icons
- CTA button at bottom

### Navigation Header
**Key properties**:
- Sticky positioning: `sticky top-0 z-50`
- Background: `bg-white/95 backdrop-blur-sm`
- Mobile menu: Alpine.js toggle with hamburger icon
- Active state: `text-brand-secondary`

## Interactive States

### Hover States
- **Links**: `hover:text-brand-secondary` (body text) or `hover:text-brand-accent` (footer links)
- **Buttons**: `hover:shadow-fresh` (primary) or `hover:-translate-y-0.5` (secondary)
- **Cards**: `hover:shadow-card hover:-translate-y-1`
- **Icons**: `hover:text-brand-primary` or `hover:scale-110`

### Focus States
- **Buttons/Links**: `focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2`
- **Form inputs**: `focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20`

### Active States
- **Navigation links**: `text-brand-secondary font-semibold`
- **Buttons**: `active:translate-y-0` (removes hover transform on click)

### Disabled States
- **Buttons**: `opacity-50 cursor-not-allowed`
- **Form inputs**: `bg-gray-100 cursor-not-allowed`

## Motion & Transitions

### Standard Transitions
- **Default**: `transition-all duration-300 ease-in-out`
- **Fast**: `duration-200` for UI feedback (accordion, dropdowns)
- **Slow**: `duration-500` for page transitions

### Transform Effects
- **Hover lift**: `-translate-y-1` (cards), `-translate-y-0.5` (buttons)
- **Scale**: `hover:scale-110` (icons), `hover:scale-105` (images)
- **Rotation**: Chevron icons rotate 180deg on accordion open

### Shadow Transitions
- Default → Hover: `shadow-soft` → `shadow-card`
- Buttons: No shadow → `shadow-fresh` on hover
- All shadows transition with `transition-all duration-300`

## Border Radius

### Radius Scale
- **sm** (`rounded-sm`, 0.125rem/2px) - Subtle rounding for small elements
- **md** (`rounded-md`, 0.375rem/6px) - Default for buttons, badges
- **lg** (`rounded-lg`, 0.5rem/8px) - Larger buttons, form inputs
- **xl** (`rounded-xl`, 0.75rem/12px) - **Standard for cards**
- **2xl** (`rounded-2xl`, 1rem/16px) - Large cards, sections
- **full** (`rounded-full`, 9999px) - **Primary CTA buttons, badges, decorative blobs**

### Usage Guidelines
- **Cards**: Always `rounded-xl`
- **Primary buttons**: Always `rounded-full`
- **Secondary buttons**: `rounded-lg`
- **Badges**: `rounded-full`
- **Form inputs**: `rounded-lg`
- **Decorative elements**: `rounded-full` for organic blob shapes

## Sub-Brand Palette Usage

The primary Emerald Flow palette is used across the entire site for consistency. Sub-brand palettes (Pivot Amber, Accelerate Indigo) are **reserved for future differentiation** if individual service pages need unique branding.

### When to Use Sub-Brands
- **Pivot (Amber)**: Could be used on `pivot.html` for transition/career change emphasis
- **Accelerate (Indigo)**: Could be used on `accelerate.html` for leadership/growth emphasis
- **Default**: Use Emerald Flow for all current implementations

### Override Pattern (If Needed)
To apply a sub-brand palette to a specific page:
1. Override `--brand-primary`, `--brand-secondary`, `--brand-accent` CSS variables
2. Or use Tailwind utilities directly: `bg-amber-700`, `text-indigo-500`, etc.
3. Maintain same component structure, only swap colors

**Current Status**: All pages use Emerald Flow. Sub-brands documented for potential future use.

## Deprecations & Migration Notes

### Removed Features
- **bottom-nav.js** (November 2025) - Smooth scroll navigation removed after redesign eliminated bottom nav concept. All navigation now handled by sticky header.

### Legacy Code
- **styles.css** (4,138 lines) - Pre-Tailwind CSS file, mostly unused after migration. Pending full audit and consolidation in Phase 3.
  - Contains some legacy component styles (timeline, FAQ)
  - Font family conflict: Uses `Inter` while Tailwind config uses `Plus Jakarta Sans`
  - Status: Functional but inefficient, scheduled for cleanup

### Migration Guidelines
- **New components**: Use Tailwind utilities exclusively, reference this design system doc
- **Existing components**: Gradually migrate inline styles to Tailwind classes
- **Font family**: Standardize on Plus Jakarta Sans (Tailwind config), remove Inter references
- **Colors**: Always use `bg-brand-*` or Tailwind utilities, avoid hex codes in HTML

## CSS Architecture

### Decision: Pure Tailwind + Minimal Custom CSS
As of Phase 3 (November 2025), the project uses a **pure Tailwind CSS approach** with minimal custom CSS only for JavaScript-driven interactive states.

**Rationale:**
- 100% consistency with design system tokens
- No CSS maintenance overhead (4,138-line styles.css deleted)
- Faster development with utility-first approach
- Better performance (only load what's used with JIT compilation when built)
- Easier onboarding for contributors familiar with Tailwind

### Custom CSS Exceptions
Only the FAQ accordion requires minimal custom CSS for JavaScript-driven states (18 lines):

```css
/* FAQ Interactive States - Tailwind-compatible custom styles */
.faq-filter-btn.active {
    background-color: #064e3b;
    color: white;
    border-color: #064e3b;
}
.faq-item.active .faq-icon {
    transform: rotate(180deg);
}
.faq-item.active .faq-answer {
    max-height: 500px;
}
```

This exists inline in `faq.html` `<head>` section because:
1. JavaScript in `faq.js` adds `.active` class dynamically
2. Tailwind's arbitrary variants would require complex setup
3. Only affects one page, minimal impact

### Font Family Standard
**Plus Jakarta Sans** (via Tailwind config) is the official font family. All legacy references to `Inter` have been removed.

### Migration Notes
- **Before Phase 3**: Mixed Tailwind + 4,138-line legacy styles.css
- **After Phase 3**: Pure Tailwind + 18 lines custom CSS for FAQ interactivity
- **Result**: 99.5% reduction in custom CSS

## Configuration
The technical implementation of these design choices is centralized in `tailwind-config.js`.
