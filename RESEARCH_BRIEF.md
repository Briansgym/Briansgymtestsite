# Brian's Gym Test Site — Research Brief for Fresh Build

## CRITICAL RULES
- This is a FRESH BUILD. Do NOT reference, copy, or import any existing codebase.
- Build from scratch using Next.js 14+ (App Router) with TypeScript and Tailwind CSS.
- All content below is from research — use it directly in the build.

## Business Information

**Name:** Brian's Gym
**Tagline:** Sedalia's #1 Fitness Facility
**Address:** 1020 Thompson Blvd, Sedalia, MO 65301
**Phone:** 660-829-0997
**Email:** info@briansgym.com
**Domain (canonical):** briansgym.com
**Years in Business:** 20+ years, locally owned and operated
**Facility Size:** 26,000 sq ft
**Access:** 24-hour key card access for all members

## Hours
- **Mon–Thu Staffed:** 7:00am–11:00am & 4:00pm–9:00pm
- **Friday Staffed:** 8:00am–2:00pm
- **Saturday Staffed:** 8:00am–2:00pm
- **Sunday:** Key Card Access Only (unstaffed)
- **24-hour key card access** for all members outside staffed hours

## Social Media
- Facebook: https://www.facebook.com/BriansGymSedalia/
- Instagram: https://www.instagram.com/briansgym24hr/
- YouTube: https://www.youtube.com/@briansgym (video: https://www.youtube.com/embed/5NGfTQFhOtI)
- Google Maps: https://maps.app.goo.gl/yN1KRxpkgQSYnM127
- Geo: lat 38.7045, lng -93.2283

## Color Scheme — DEEPER/DARKER VERSIONS (premium energetic feel)

Take the current palette and darken it for a more premium, energetic look:

### Primary Brand (darkened from #2c79bf)
- `--color-primary: #1e5a99` (darker blue)
- `--color-primary-light: #2c79bf` (original blue as secondary)
- `--color-primary-dark: #143d6b` (deep navy blue)
- `--color-primary-glow: rgba(30, 90, 153, 0.35)`

### Dark Palette (slightly darker than current)
- `--color-navy: #070f1d` (darker than original #0a1628)
- `--color-navy-light: #0b1a30`
- `--color-navy-medium: #102240`
- `--color-dark-surface: #0c1424`

### Accents
- Energy accent: `#e63946` (energetic red-orange for CTAs — replaces the generic blue buttons)
- Success/green: `#10b981`
- Warning: `#f59e0b`

### Typography
- Headings: Inter (700-900 weight)
- Body: PT Sans

## Pages to Build (App Router Structure)

1. **Home (`/`)** — Hero with gym photo, stats counter (26,000 sq ft / 24/7 / 20+ yrs), video tour embed, features grid (24-hr access, 26,000 sq ft, Kid Zone, Personal Training), about teaser, programs preview, gym photo tour with category tabs (Weights & Cardio, Functional Turf, Kid Zone, Personal Training), testimonial, promo banner CTA
2. **About (`/about`)** — Full about story, community focus, highlights (locally owned, clean, SilverSneakers, military/senior discounts)
3. **Programs (`/programs`)** — Personal Training, Kid Zone Child Watch, SilverSneakers/Healthy Contributions
4. **Membership (`/membership`)** — Day passes ($8 day, $35 14-day), monthly memberships table, annual online specials ($485/year single), discounts
5. **Personal Training (`/personal-training`)** — 3 sessions for $75 new member special, how it works (free interview → custom plan → ongoing support), training for every level
6. **Free Trial (`/free-trial`)** — 3-day free trial form, what's included sidebar, visit info
7. **Contact (`/contact`)** — Location, phone, email, hours table, contact form
8. **FAQ (`/faq`)** — Accordion FAQ

## Pricing Data

### Day & Short-Term Passes
| Pass | Price | Details |
|------|-------|---------|
| Day Pass | $8 | Full facility access for one day |
| 14-Day Pass | $35 | 14 consecutive days, great for travelers |

### Monthly Memberships
| Type | Monthly | Enrollment | Details |
|------|---------|-----------|---------|
| Agreement Single | Contact for rate | $50 | 1-year agreement, $35 annual maintenance fee |
| Non-Agreement Single | $55/mo | $50 | Month-to-month, no contract |
| Non-Agreement Couples | $70/mo | $50 | Month-to-month, two members |
| Family Add-On | $15/mo per member | — | Add family members, $45/mo for 3 additional |
| Kid Zone Add-On | $20/mo | — | Covers 2 children, $15/mo each additional |

### Annual Online Specials
| Plan | Price | Normal | Savings |
|------|-------|--------|---------|
| 1-Year Single | $485/yr | $571.28/yr | Save $86+ |
| (Couples annual also available — price TBD) | | | |

### Discounts Available
- Military members
- Law enforcement
- Firefighters
- Teachers
- Seniors
- SilverSneakers / Healthy Contributions accepted

## Key Features to Highlight
1. **24-Hour Key Card Access** — Train on your schedule
2. **26,000 Sq Ft** — Spacious, never crowded
3. **Kid Zone** — Safe, supervised childcare ($20/mo covers 2 kids)
4. **Personal Training** — Certified trainers, 3 sessions for $75 new member special
5. **SilverSneakers** — Senior fitness program accepted
6. **Locally Owned 20+ Years** — Not a franchise, community gym
7. **Free 3-Day Trial** — No commitment, no credit card

## Testimonial
> "Brian's Gym is the best gym in Sedalia. The staff is friendly and helpful, the equipment is always clean and well-maintained, and the atmosphere is welcoming. I've been a member for years and wouldn't go anywhere else. It's like a second family!"
> — Janette S. Morgan, Member

## Competitor Context (Sedalia/KC area)
- Most local gyms are small, basic facilities with limited hours
- Brian's Gym differentiates: 24-hr access, large facility, Kid Zone, personal training, SilverSneakers
- Premium positioning: emphasize space, community, and accessibility
- Conversion focus: free trial → membership → personal training upsell

## Design Requirements
- **Mobile-first** responsive design
- **Fluid modern flow** — smooth scroll, reveal animations on scroll
- **Strong hero** with full-bleed gym photo, bold headline, dual CTA
- **Sticky header** with mobile hamburger menu
- **Conversion-focused** — CTAs everywhere: "Start Free Trial", "View Membership", "Join Now"
- **SEO-friendly** — proper meta tags, structured data (HealthClub schema.org), semantic HTML
- **Fast** — Next.js with optimized images, lazy loading
- **Accessible** — proper ARIA labels, keyboard navigation

## Form Integration
- Contact form: POST to https://formspree.io/f/xqevnqya
- Free trial form: POST to https://formspree.io/f/xzdlorrv
- Both forms: name, email, phone, message/details fields

## Schema.org Structured Data
Include HealthClub schema on home page:
- name, description, url, telephone, email
- address (1020 Thompson Blvd, Sedalia, MO 65301)
- geo (38.7045, -93.2283)
- openingHoursSpecification
- sameAs (Facebook, Instagram, YouTube)

## Tech Stack
- Next.js 14+ with App Router
- TypeScript
- Tailwind CSS
- React Icons or Lucide React for icons
- Framer Motion for scroll animations (optional, CSS animations OK too)
- No external image files needed — use gradient placeholders or Unsplash fitness images
- Deploy to Vercel
