# Launch to Lead Engineering

Modern, professional website for Launch to Lead Engineering career coaching business.

## 🚀 About

Launch to Lead Engineering helps engineers at every stage land top-tier roles, break through career plateaus, and build strategic visibility — coached by a real engineer, not HR.

## 🛠️ Tech Stack

- **Frontend**: HTML5, Tailwind CSS (CDN + custom config)
- **Design**: "Emerald Flow" design system — emerald/teal/lime color palette
- **Icons**: Lucide (via CDN)
- **Typography**: Plus Jakarta Sans (Google Fonts)
- **Hosting**: GitHub Pages with custom domain (`launchtolead.io`)
- **Email Capture**: Kit (ConvertKit) forms
- **Booking**: Google Calendar direct scheduling
- **Analytics**: Google Analytics (gtag.js) + Meta Pixel
- **Community**: Skool

## 📁 Project Structure

```
launch-to-lead/
├── index.html              # Homepage — Hormozi-style single sales page
├── about.html              # About Mansour Manci
├── success-stories.html    # Client testimonials & transformations
├── vault.html              # Free resources / lead magnet downloads
├── social.html             # Social media links hub
├── legal.html              # Terms, Privacy, Disclaimer, Refund Policy
├── navigation.js           # Shared navigation component (injected via JS)
├── lead-magnet.js          # Lead magnet popup system (Kit form integration)
├── tailwind-config.js      # Tailwind custom configuration
├── sitemap.xml             # Search engine sitemap
├── robots.txt              # Crawler directives
├── CNAME                   # Custom domain (launchtolead.io)
├── DESIGN_SYSTEM.md        # Complete design system documentation
└── README.md               # This file
```

## 🎨 Design Features

- **Color Palette**: "Emerald Flow" — Emerald 900, Teal 500, Lime 400
- **Typography**: Plus Jakarta Sans (300–800 weights)
- **Architecture**: Pure Tailwind CSS + minimal custom CSS
- **Responsive**: Mobile-first design with consistent spacing scale
- **Accessibility**: Semantic HTML landmarks, ARIA attributes, proper contrast
- **Performance**: Tailwind CDN, minimal dependencies

## 🌐 Navigation

Desktop & mobile navigation (4 items + CTA):
- **About** → `about.html`
- **Success Stories** → `success-stories.html`
- **Free Resources** → `vault.html`
- **Social ▾** → `social.html` (dropdown with individual platform links)
- **Book a Free Call →** → Google Calendar

## 🚀 Deployment

Hosted on GitHub Pages with custom domain:
- **Live URL**: [https://launchtolead.io](https://launchtolead.io)
- **Repository**: [github.com/themanci/LaunchToLead](https://github.com/themanci/LaunchToLead)
- **Branch**: `main`
- **Domain**: Configured via CNAME file

## 📝 Content Updates

### Adding Testimonials
Edit `success-stories.html` following the existing card + full story pattern. All stories use unified emerald brand colors.

### Lead Magnet Popup
Configured in `lead-magnet.js`. Uses Kit form #8815632 for email capture. Popup appears on homepage with configurable delay and show-again rules.

### Free Resources
Managed in `vault.html`. Each resource card links to a standalone HTML lead magnet page in `lead-magnets/active/`.

## 🆘 Support

- **Email**: contact@launchtolead.io
- **LinkedIn**: [linkedin.com/company/110177288](https://www.linkedin.com/company/110177288)
- **Community**: [Skool](https://www.skool.com/launch-to-lead-community-6905/about)

## 📄 License

© 2026 Launch to Lead Engineering. All rights reserved.
