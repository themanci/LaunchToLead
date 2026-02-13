# Launch to Lead Engineering

Modern, professional website for Launch to Lead Engineering career coaching business.

## 🚀 About

Launch to Lead Engineering provides career coaching for:
- **Students**: Launch your engineering career at top companies
- **Career Transitioners**: Pivot disciplines (mechanical → software, test → development, etc.)
- **Professionals**: Accelerate to leadership roles with proven promotion frameworks

## 🛠️ Tech Stack

- **Frontend**: HTML5, Tailwind CSS (CDN + custom config), Alpine.js for interactivity
- **Design**: "Emerald Flow" design system - emerald/teal/lime color palette
- **Icons**: FontAwesome 6.4.0
- **Typography**: Plus Jakarta Sans (Google Fonts)
- **Hosting**: GitHub Pages (free, fast, reliable)
- **Forms**: Direct LinkedIn/Email contact
- **Booking**: Direct scheduling via contact page
- **Payments**: Stripe, Venmo, or Zelle (arranged after discovery call)

## 📁 Project Structure

```
launch-to-lead/
├── index.html              # Homepage with 3D carousel
├── launch.html             # Services for students/early career
├── pivot.html              # Services for career transitioners
├── accelerate.html         # Services for promotion-seekers
├── about.html              # About Mansour Manci
├── packages.html           # Pricing for all tracks
├── contact.html            # Contact options
├── success-stories.html    # Testimonials (launching soon)
├── faq.html                # Frequently asked questions with search/filter
├── tailwind-config.js      # Tailwind custom configuration
├── carousel.js             # 3D Cover Flow carousel
├── faq.js                  # FAQ accordion interactivity
├── DESIGN_SYSTEM.md        # Complete design system documentation
├── BACKLOG.md              # Feature roadmap
└── README.md               # This file
```

## 🎨 Design Features

- **Color Palette**: "Emerald Flow" - Emerald 900 (#064e3b), Teal 500 (#14b8a6), Lime 400 (#a3e635)
- **Typography**: Plus Jakarta Sans (300-800 weights)
- **Architecture**: Pure Tailwind CSS + minimal custom CSS (18 lines for FAQ interactivity)
- **Responsive**: Mobile-first design with consistent spacing scale
- **Accessibility**: Semantic HTML landmarks, ARIA attributes, proper contrast
- **Performance**: Tailwind CDN, minimal dependencies
- **Components**: Documented in DESIGN_SYSTEM.md

## 🚀 Deployment to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to https://github.com/themanci
2. Click "New Repository"
3. Name it: `coaching-business` (or any name you prefer)
4. Set to **Public**
5. Don't initialize with README (we have our own)
6. Click "Create Repository"

### Step 2: Push Code to GitHub

Open terminal in the `launch-to-lead` folder and run:

```bash
git init
git add .
git commit -m "Initial commit - Launch to Lead Engineering website"
git branch -M main
git remote add origin https://github.com/themanci/coaching-business.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to repository Settings
2. Click "Pages" in left sidebar
3. Under "Source", select `main` branch and `/ (root)` folder
4. Click "Save"
5. Wait 2-3 minutes for deployment

Your site will be live at: `https://themanci.github.io/coaching-business/`

## 🔧 Post-Deployment Configuration

### 1. Set Up Calendly

1. Create account at https://calendly.com
2. Set up your availability
3. Get your Calendly link (e.g., `https://calendly.com/your-name`)
4. Replace placeholders in all service pages with Calendly embed code

### 2. Set Up Formspree (Contact Form)

1. Create account at https://formspree.io
2. Create new form
3. Copy form endpoint URL
4. In `contact.html`, replace `YOUR_FORM_ID` with your Formspree form ID

### 3. Set Up Stripe Payment Links

1. Create Stripe account at https://stripe.com
2. Create Payment Links for each package:
   - Launch: Single ($85), Resume ($150), Interview ($320), Full ($450)
   - Pivot: Single ($135), Strategy ($375), Complete ($600)
   - Accelerate: Single ($150), Promotion ($400), Leadership ($700), Retainer ($500/mo)
3. Add payment links to booking sections

### 4. Optional: Custom Domain

If you want a custom domain (e.g., `launchtolead.com`):

1. Buy domain from Namecheap, Google Domains, etc. (~$12/year)
2. In GitHub repo settings → Pages, add custom domain
3. Update DNS records at your domain registrar
4. Wait 24 hours for DNS propagation

## 📝 Content Updates

### Adding Testimonials

Edit `success-stories.html` and replace the placeholder section with real testimonials following the example structure provided.

### Updating Your Photo

1. Add your headshot image to the folder (e.g., `headshot.jpg`)
2. In `about.html`, add an `<img>` tag in the intro section
3. Update CSS if needed for styling

### Blogging / Resources

To add a blog or free resources:
1. Create `resources.html` page
2. Create individual blog post pages
3. Update navigation in all pages

## 🎯 SEO Optimization

Current optimizations:
- Semantic HTML structure
- Meta descriptions on all pages
- Proper heading hierarchy
- Alt text ready for images

Future improvements:
- Add Google Analytics
- Create sitemap.xml
- Add structured data (JSON-LD)
- Submit to Google Search Console

## 📱 Testing

Test the site on:
- Desktop: Chrome, Firefox, Safari, Edge
- Mobile: iOS Safari, Android Chrome
- Tablet: iPad, Android tablets

Check:
- All links work
- Forms submit correctly
- Responsive design looks good
- Loading speed is fast

## 🆘 Support

For questions or updates, reach out to:
- Email: LaunchToLeadEngineering@gmail.com
- LinkedIn: www.linkedin.com/in/launchtolead

## 📄 License

© 2025 Launch to Lead Engineering. All rights reserved.
