# Product Requirements Document (PRD)
# Serenity Mental Health Centers Website Redesign

## Project Overview
Transform the Serenity Mental Health Centers website by adopting the HealthWell Framer template design while preserving all original content. The result should be visually indistinguishable from the HealthWell design reference, with Serenity's content and branding.

---

## Phase 1: Architecture & PRD

### 1.1 Sitemap (Derived from client/old)

```
serenitymentalhealthcenters.com/
├── / (Home)
├── /about (About Us)
├── /treatments/ (Treatments Overview)
│   ├── /treatments/tms-therapy
│   ├── /treatments/ketamine-therapy
│   ├── /treatments/medication-management
│   ├── /treatments/structured-gratitude
│   └── /treatments/adhd-management
├── /conditions/ (Conditions Overview)
│   ├── /conditions/depression
│   ├── /conditions/anxiety
│   ├── /conditions/bipolar-disorder
│   ├── /conditions/ptsd
│   ├── /conditions/ocd
│   └── /conditions/adhd
├── /locations (Find a Location)
├── /testimonials (Patient Stories)
├── /blog (Mental Health Resources)
├── /contact (Contact Us)
├── /appointment (Request Appointment)
├── /insurance (Insurance Plans)
├── /careers (Careers)
├── /privacy (Privacy Policy)
└── /terms (Terms of Service)
```

### 1.2 Visual Analysis Summary

#### Design Reference: HealthWell Template

**Color System (Mapped for Serenity):**
| HealthWell | Hex Code | Serenity Usage |
|------------|----------|----------------|
| Primary Green | #46b96e | Primary brand color, CTAs, accents |
| Dark Green | #389458 | Hover states, secondary accents |
| White | #ffffff | Main backgrounds |
| Off-white | #f7f7f7 | Section backgrounds |
| Dark Text | #1a1a1a | Headlines |
| Gray Text | #666666 | Body text, descriptions |
| Border Gray | #e5e5e5 | Dividers, card borders |

**Typography:**
- Font: Inter (to be implemented via Google Fonts)
- Headlines: 700 weight, 48-72px
- Subheadings: 600 weight, 24-32px
- Body: 400 weight, 16-18px
- Line height: 1.5-1.7

**Spacing System:**
- Section padding: 80-120px vertical
- Content max-width: 1200px
- Component gaps: 24-48px
- Card padding: 24-32px

**Animation Patterns (Framer Motion):**
- Fade-in on scroll
- Subtle hover lifts on cards
- Smooth section transitions
- Button hover state animations

---

### 1.3 Content Mapping

#### Homepage Sections

| HealthWell Section | Serenity Content |
|-------------------|------------------|
| **Hero** | "Take Back Your Life" / "Healing Your Mental Health" |
| **Hero Subtext** | "Personalized treatment plans that really work. Our experienced psychiatrists provide comprehensive, evidence-based mental health care." |
| **Stats Bar** | Years Experience (7+), Patients Helped (10,000+), Locations (8+ States), Success Rate |
| **Mission Section** | "Empowering your mental wellness journey with personalized, compassionate care." |
| **Feature 1: Health Tracking** | → TMS Therapy section |
| **Feature 2: Appointment** | → Ketamine Therapy section |
| **Feature 3: Resources** | → Medication Management section |
| **Testimonials** | Sharon, Ryan, Michael testimonials |
| **Pricing Section** | → Treatment options overview (no pricing, just treatment cards) |
| **FAQ** | Mental health FAQs |
| **Blog/Insights** | Latest mental health blog posts |
| **Newsletter** | "Stay informed about mental health" |
| **Footer** | Contact info, nav links, locations |

#### About Page Mapping

| HealthWell Section | Serenity Content |
|-------------------|------------------|
| **Mission Hero** | "Our Mission: Accessible, personalized mental health care" |
| **Our Story** | Founded in 2017, expanded to multiple states, evidence-based approach |
| **Team Section** | Provider profiles (if available) or "Expert Team" description |
| **Testimonials** | Patient success stories |

#### Treatments Page (Maps to Features)

| HealthWell Section | Serenity Content |
|-------------------|------------------|
| **Hero** | "Advanced Treatment Options" |
| **Feature Sections** | TMS, Ketamine, Medication Management, Gratitude, ADHD |

#### Conditions Page (New page following Features pattern)

| Section | Content |
|---------|---------|
| **Hero** | "Conditions We Treat" |
| **Condition Cards** | Depression, Anxiety, Bipolar, PTSD, OCD, ADHD |

#### Contact Page

| HealthWell Section | Serenity Content |
|-------------------|------------------|
| **Contact Form** | Name, Email, Phone, Message |
| **Contact Info** | Phone: 844-310-1649, Multiple locations |
| **Map** | Multi-location map or location selector |

---

### 1.4 Technical Implementation Plan

#### Directory Structure
```
/app
├── page.tsx                    # Homepage
├── about/page.tsx              # About page
├── treatments/
│   ├── page.tsx                # Treatments overview
│   └── [slug]/page.tsx         # Individual treatment pages
├── conditions/
│   ├── page.tsx                # Conditions overview
│   └── [slug]/page.tsx         # Individual condition pages
├── locations/page.tsx          # Locations page
├── testimonials/page.tsx       # Testimonials page
├── blog/
│   ├── page.tsx                # Blog listing
│   └── [slug]/page.tsx         # Individual blog posts
├── contact/page.tsx            # Contact page
├── appointment/page.tsx        # Request appointment
├── insurance/page.tsx          # Insurance info
├── careers/page.tsx            # Careers page
├── privacy/page.tsx            # Privacy policy
└── terms/page.tsx              # Terms of service

/components
├── landing/
│   ├── Hero.tsx
│   ├── StatsBar.tsx
│   ├── FeatureSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── PricingSection.tsx      # → TreatmentCards.tsx
│   ├── FAQSection.tsx
│   ├── BlogSection.tsx
│   ├── AppDownloadSection.tsx  # → CTASection.tsx
│   └── NewsletterSection.tsx
├── shared/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Input.tsx
│   └── Container.tsx

/data
├── treatments.ts               # Treatment content data
├── conditions.ts               # Condition content data
├── testimonials.ts             # Testimonial data
├── locations.ts                # Location data
└── faqs.ts                     # FAQ content
```

#### Component Development Priority

**Phase 2A: Global Layout (Week 1)**
1. Update colors.js with new palette
2. Header component (navigation)
3. Footer component
4. Container/layout components

**Phase 2B: Homepage Components (Week 1-2)**
1. Hero section
2. Stats bar
3. Feature sections (reusable)
4. Testimonials section
5. Treatment cards (adapted from pricing)
6. FAQ accordion
7. Newsletter section

**Phase 2C: Internal Pages (Week 2-3)**
1. About page
2. Treatments pages
3. Conditions pages
4. Contact page
5. Other utility pages

---

### 1.5 Data Files Structure

#### treatments.ts
```typescript
export const treatments = [
  {
    id: 'tms-therapy',
    title: 'TMS Therapy',
    shortDescription: 'A breakthrough approach to alleviating depression',
    fullDescription: '...',
    benefits: ['Non-invasive', 'FDA-approved', 'No sedation required'],
    image: '/images/treatments/tms.jpg',
  },
  // ... more treatments
];
```

#### conditions.ts
```typescript
export const conditions = [
  {
    id: 'depression',
    title: 'Depression',
    shortDescription: 'Symptoms including sadness, suicidal thoughts, and guilt',
    fullDescription: '...',
    treatments: ['tms-therapy', 'ketamine-therapy', 'medication-management'],
    image: '/images/conditions/depression.jpg',
  },
  // ... more conditions
];
```

---

### 1.6 Animation Specifications (Framer Motion)

```typescript
// Fade in on scroll
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

// Stagger children
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Card hover
const cardHover = {
  whileHover: { y: -4, boxShadow: '0 10px 40px rgba(0,0,0,0.1)' },
  transition: { duration: 0.2 }
};
```

---

### 1.7 Responsive Breakpoints

```css
/* Mobile First */
/* Base: < 640px */
/* sm: 640px */
/* md: 768px */
/* lg: 1024px */
/* xl: 1280px */
/* 2xl: 1536px */
```

---

### 1.8 Assets Required

#### Images to Source/Create
- [ ] Hero background/imagery (mental health themed)
- [ ] Treatment images (TMS, Ketamine, etc.)
- [ ] Condition illustrations
- [ ] Team/provider photos
- [ ] Testimonial photos
- [ ] Location photos
- [ ] Blog post thumbnails
- [ ] Logo (from old site)
- [ ] Favicon (from old site)

#### Icons
- Use Lucide React icons (consistent with Shadcn UI)
- Custom icons if needed for treatments/conditions

---

## Phase 2: Execution Plan

### Step 1: Setup & Configuration
- [ ] Update Tailwind config with new color palette
- [ ] Configure Inter font
- [ ] Set up Framer Motion
- [ ] Update site settings/metadata

### Step 2: Global Components
- [ ] Build Header with navigation
- [ ] Build Footer
- [ ] Create reusable Button component
- [ ] Create Card component
- [ ] Create Container component

### Step 3: Homepage
- [ ] Hero section
- [ ] Stats bar
- [ ] Feature sections
- [ ] Testimonials
- [ ] Treatment overview cards
- [ ] FAQ section
- [ ] Newsletter section

### Step 4: Internal Pages
- [ ] About page
- [ ] Treatments listing & detail pages
- [ ] Conditions listing & detail pages
- [ ] Contact page
- [ ] Other pages

### Step 5: Testing & Polish
- [ ] Responsive testing
- [ ] Animation refinement
- [ ] Accessibility audit
- [ ] Performance optimization
- [ ] SEO verification

---

## Success Criteria

1. **Visual Match**: The site should be visually indistinguishable from the HealthWell template design
2. **Content Accuracy**: All Serenity Mental Health content preserved and properly displayed
3. **Performance**: Lighthouse scores 90+ across all categories
4. **Accessibility**: WCAG AA compliance
5. **Responsive**: Fully functional across all device sizes
6. **SEO**: Proper meta tags, structured data, sitemap

---

## References

- Design Reference: https://healthwell.framer.website/
- Original Site: https://serenitymentalhealthcenters.com/
- Content Source: `/client/old/content.md`
- Design Specs: `/client/new/design-reference.md`
- Screenshots: `/client/new/*.png`, `/client/old/*.png`
