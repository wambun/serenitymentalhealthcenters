# Serenity Mental Health Centers - Website Documentation

> A premium $50,000 website rebuild for Serenity Mental Health Centers, migrated from their old WordPress site to a modern Next.js 15 application.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Data Architecture](#data-architecture)
5. [Page Structure](#page-structure)
6. [Component Architecture](#component-architecture)
7. [UI/UX Improvements](#uiux-improvements)
8. [Styling System](#styling-system)
9. [Animations](#animations)
10. [Key Features](#key-features)
11. [Deployment](#deployment)
12. [Future Development](#future-development)

---

## Project Overview

This project is a complete website rebuild for Serenity Mental Health Centers, a psychiatric care provider with 30+ locations across 8 states. The site was rebuilt from scratch using modern web technologies, pulling content and data from their existing WordPress site at `serenitymentalhealthcenters.com`.

### Key Goals
- Modern, premium look and feel
- Fast performance with static site generation
- Comprehensive provider directory linked to locations
- Easy content management through TypeScript data files
- Mobile-first responsive design
- Accessibility compliance

### Live URL
- **Production**: https://serenitymentalhealth.vercel.app
- **Repository**: https://github.com/wambun/serenitymentalhealthcenters

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 15** | React framework with App Router |
| **React 19** | UI component library |
| **TypeScript** | Type-safe JavaScript |
| **Tailwind CSS** | Utility-first CSS framework |
| **Framer Motion** | Animation library |
| **Lucide React** | Icon library |
| **tsparticles** | Neural network particle animation |
| **lottie-react** | Lottie animation support |
| **Vercel** | Hosting and deployment |

### Package Dependencies
```json
{
  "@tsparticles/react": "^3.0.0",
  "@tsparticles/slim": "^3.7.1",
  "framer-motion": "^11.x",
  "lottie-react": "^2.4.0",
  "lucide-react": "^0.x",
  "next": "15.5.9",
  "react": "^19.0.0",
  "tailwindcss": "^3.4.x"
}
```

---

## Project Structure

```
serenitymentalhealth/
├── app/                          # Next.js App Router pages
│   ├── (routes)/                 # Route groups
│   ├── about/                    # About page
│   ├── appointment/              # Appointment booking
│   ├── careers/                  # Careers page
│   ├── conditions/               # Conditions listing
│   │   └── [slug]/              # Individual condition pages
│   ├── contact/                  # Contact page
│   ├── insurance/                # Insurance information
│   ├── locations/                # Locations listing
│   │   └── [state]/             # State-level pages
│   │       └── [location]/      # Individual location pages
│   ├── providers/                # Providers listing
│   │   └── [slug]/              # Individual provider profiles
│   ├── resources/                # Patient resources
│   ├── testimonials/             # Patient stories
│   ├── treatments/               # Treatments listing
│   │   └── [slug]/              # Individual treatment pages
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Homepage
│
├── components/                   # React components
│   ├── animations/              # Animation components
│   │   ├── BrainAnimation.tsx   # Lottie brain animation
│   │   └── NeuralNetwork.tsx    # Particle network animation
│   ├── landing/                 # Landing page sections
│   │   ├── Hero.tsx             # Hero section with brain animation
│   │   ├── Features.tsx         # Features grid
│   │   ├── Services.tsx         # Services section
│   │   ├── Testimonials.tsx     # Testimonials carousel
│   │   ├── CTASection.tsx       # Call-to-action section
│   │   ├── NewsletterSection.tsx # Newsletter signup
│   │   └── index.ts             # Barrel export
│   ├── page/                    # Page-level components
│   │   └── PageHeader.tsx       # Reusable page headers
│   └── shared/                  # Shared components
│       ├── Header.tsx           # Site header/navigation
│       └── Footer.tsx           # Site footer
│
├── data/                        # Data files (TypeScript)
│   ├── config/                  # Configuration
│   │   ├── headerNavLinks.ts    # Header navigation
│   │   └── footerLinks.ts       # Footer navigation
│   ├── conditions.ts            # Mental health conditions
│   ├── insurance.ts             # Insurance carriers by state
│   ├── locations.ts             # All clinic locations
│   ├── providers.ts             # All providers with images
│   └── treatments.ts            # Treatment options
│
├── public/                      # Static assets
│   ├── animations/              # Lottie JSON files
│   │   ├── brain.json           # Brain animation
│   │   └── neuron.json          # Neuron animation
│   └── images/
│       ├── locations/           # Location/state images
│       ├── providers/           # Provider headshots (95 images)
│       └── logo.svg             # Site logo
│
├── scripts/                     # Build/utility scripts
│   ├── crawl-old-site.mjs       # Firecrawl site crawler
│   ├── download-provider-images.mjs  # Provider image downloader
│   └── update-provider-images.mjs    # Update providers.ts with images
│
├── styles/                      # Global styles
│   └── globals.css              # Tailwind imports + custom styles
│
└── tailwind.config.ts           # Tailwind configuration
```

---

## Data Architecture

### Locations (`data/locations.ts`)

The location system is hierarchical: **States → Locations**

```typescript
interface Location {
  id: string;           // e.g., "az-gilbert"
  name: string;         // e.g., "Gilbert"
  state: string;        // e.g., "Arizona"
  address: string;      // Full street address
  city: string;         // City name
  zip: string;          // ZIP code
  phone: string;        // Contact phone
  hours?: string;       // Operating hours
  services?: string[];  // Services offered at this location
  image?: string;       // Location image path
}

interface StateInfo {
  id: string;           // e.g., "arizona"
  name: string;         // e.g., "Arizona"
  abbreviation: string; // e.g., "AZ"
  image?: string;       // State hero image
  locations: Location[];
}
```

**States covered**: Arizona, Colorado, Florida, Georgia, Nevada, Texas, Utah, Virginia

**Helper functions**:
- `getAllLocations()` - Get all locations across all states
- `getStateBySlug(slug)` - Get state by ID
- `getLocationById(id)` - Get specific location
- `getStatesCount()` / `getLocationsCount()` - Counts

### Providers (`data/providers.ts`)

Providers are linked to locations via `locationIds`.

```typescript
interface Provider {
  id: string;           // e.g., "teejay-tripp"
  name: string;         // Full name
  credentials: string;  // e.g., "MD", "DO", "PMHNP"
  title: string;        // e.g., "Psychiatrist", "Nurse Practitioner"
  role: 'psychiatrist' | 'nurse-practitioner' | 'chief-medical-officer';
  image?: string;       // Headshot path
  bio?: string;         // Optional biography
  specialties?: string[];
  locationIds: string[]; // Links to location IDs
  featured?: boolean;   // Featured on providers page
}
```

**Provider count**: 100+ providers across all locations

**Helper functions**:
- `getProviderById(id)` - Get specific provider
- `getProvidersByLocation(locationId)` - Get all providers at a location
- `getProvidersByState(stateId)` - Get all providers in a state
- `getFeaturedProviders()` - Get featured providers
- `getPsychiatrists()` / `getNursePractitioners()` - Filter by role

### Provider-Location Relationship

The relationship is **many-to-many**:
- A provider can work at multiple locations (e.g., Dr. TeeJay Tripp works at 4 locations)
- A location has multiple providers

**Example usage**:
```typescript
// Get providers at Gilbert location
const gilbertProviders = getProvidersByLocation('az-gilbert');

// Get locations for a specific provider
const provider = getProviderById('teejay-tripp');
const locations = provider.locationIds.map(id => getLocationById(id));
```

### Insurance (`data/insurance.ts`)

Insurance carriers organized by state.

```typescript
interface InsuranceCarrier {
  name: string;
  logo?: string;
}

interface InsuranceByState {
  state: string;
  abbreviation: string;
  carriers: string[];
}
```

### Conditions (`data/conditions.ts`)

Mental health conditions with detailed content for each.

```typescript
interface Condition {
  slug: string;
  name: string;
  description: string;
  symptoms: string[];
  treatments: string[];
  heroImage?: string;
}
```

**Conditions**: Depression, Anxiety, PTSD, Bipolar Disorder, OCD, ADHD

### Treatments (`data/treatments.ts`)

Treatment options offered.

```typescript
interface Treatment {
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  heroImage?: string;
}
```

**Treatments**: TMS Therapy, Ketamine Therapy, Medication Management, ADHD Management

---

## Page Structure

### Homepage (`/`)
- Hero section with brain Lottie animation
- Neural network particle background
- Floating stat cards (94% success rate, 10,000+ patients)
- Services overview
- Testimonials
- CTA sections
- Newsletter signup

### About (`/about`)
- Company story and mission
- Leadership team
- Values and approach
- Stats and achievements

### Treatments (`/treatments`)
- Treatment cards grid
- Links to individual treatment pages

### Treatment Detail (`/treatments/[slug]`)
- Treatment overview
- How it works
- Benefits
- FAQ
- Related conditions
- CTA to book appointment

### Conditions (`/conditions`)
- Condition cards grid
- Links to individual condition pages

### Condition Detail (`/conditions/[slug]`)
- Condition overview
- Symptoms
- Treatment options
- Related resources
- CTA

### Providers (`/providers`)
- Stats section (provider count, states, etc.)
- Featured providers with large cards
- Psychiatrists section with photos
- Nurse practitioners section with photos
- Find by location section (state grid)
- Join our team CTA

### Provider Profile (`/providers/[slug]`)
- Large profile photo
- Name, credentials, title
- Specialties badges
- Practice locations with addresses
- Services offered
- Other providers at same locations
- Book appointment CTA

### Locations (`/locations`)
- State cards with images
- Location count per state
- Links to state pages

### State Locations (`/locations/[state]`)
- State hero with image
- All locations in grid
- Each card shows:
  - Address, phone, hours
  - Services offered
  - Provider count preview
  - Link to location detail

### Location Detail (`/locations/[state]/[location]`)
- Full clinic details
- Contact card with call/directions buttons
- Services section with icons
- Providers section:
  - Psychiatrists with photos
  - Nurse practitioners with photos
- Insurance information
- Other locations in state

### Insurance (`/insurance`)
- Major carrier logos
- Benefits of using insurance
- Insurance by state (expandable)
- Payment options
- FAQ

### Resources (`/resources`)
- Crisis hotlines (988, Crisis Text Line, etc.)
- Educational resources
- Family/caregiver support
- College student resources
- Community organizations
- Patient portal link

### Careers (`/careers`)
- Why join Serenity
- Benefits
- Open positions with apply links
- Locations hiring (state grid)
- Culture section with stats

### Contact (`/contact`)
- Contact form
- General phone number
- Location finder

### Appointment (`/appointment`)
- Appointment request form
- Insurance verification info

---

## Component Architecture

### Layout Components

**Header** (`components/shared/Header.tsx`)
- Fixed position with scroll effect
- Logo with custom typography:
  - "SERENITY" in purple (primary-600), bold, tracking-[0.2em]
  - "MENTAL HEALTH" in amber-600, smaller, tracking-[0.25em]
- Desktop navigation from `headerNavLinks.ts`
- Mobile hamburger menu with Framer Motion animation
- Phone number and "Get Started" CTA

**Footer** (`components/shared/Footer.tsx`)
- Same logo styling as header
- 4-column link structure from `footerLinks.ts`
- Social links
- Contact information
- Copyright

**PageHeader** (`components/page/PageHeader.tsx`)
- Reusable gradient header for interior pages
- Title and description
- Consistent styling across all pages

### Landing Components

**Hero** (`components/landing/Hero.tsx`)
- Split layout: text left, brain animation right
- Neural network particle background
- Floating stat cards with Framer Motion
- Decorative rings and badge
- CTA buttons

**BrainAnimation** (`components/animations/BrainAnimation.tsx`)
- Layered Lottie animation (brain + neurons)
- Pulsing glow effects
- Floating particles
- Synapse spark effects

**NeuralNetwork** (`components/animations/NeuralNetwork.tsx`)
- tsparticles network animation
- Purple node particles
- Connected lines between particles
- Subtle mouse interaction

### Other Landing Components
- `Features.tsx` - Feature cards grid
- `Services.tsx` - Services overview
- `Testimonials.tsx` - Testimonial carousel
- `CTASection.tsx` - Call-to-action block
- `NewsletterSection.tsx` - Email signup form

---

## UI/UX Improvements

### Visual Design

1. **Premium Color Palette**
   - Primary: Purple (#7c3aed range)
   - Accent: Amber/Gold (#d97706 range)
   - Neutral: Gray scale
   - Success: Green for status indicators

2. **Typography**
   - Logo: All-caps with letter-spacing
   - Headers: Bold with tight tracking
   - Body: Clean, readable sans-serif
   - Custom text size scale (body-sm, body-md, heading-sm, etc.)

3. **Card Design**
   - Rounded corners (xl, 2xl)
   - Subtle shadows on hover
   - Border transitions
   - Gradient backgrounds where appropriate

4. **Spacing**
   - Consistent section padding (py-16, py-20)
   - Max-width containers (max-w-[1400px])
   - Responsive padding (px-4, sm:px-6, lg:px-8)

### Animations

1. **Brain Lottie Animation**
   - Main brain animation from LottieFiles
   - Overlaid neuron animation
   - CSS glow effects with animation
   - Floating particles

2. **Neural Network Background**
   - Interactive particle network
   - Purple nodes with connections
   - Subtle parallax on scroll

3. **Micro-interactions**
   - Hover scale on cards
   - Arrow icon translations
   - Button hover states
   - Smooth color transitions

4. **Page Transitions**
   - Framer Motion on mobile menu
   - Fade-in animations on scroll (where applicable)

### User Experience

1. **Navigation**
   - Clear primary navigation
   - "Providers" link added to header
   - Breadcrumbs on detail pages
   - Back links on nested pages

2. **Provider Discovery**
   - Browse by role (psychiatrist/NP)
   - Browse by location
   - See providers at each clinic
   - Direct links from location to provider profiles

3. **Contact Accessibility**
   - Phone numbers clickable (tel: links)
   - Directions links to Google Maps
   - Multiple contact CTAs throughout

4. **Visual Hierarchy**
   - Featured providers highlighted
   - Clear section separation
   - Consistent badge/tag styling

### Accessibility

1. **Semantic HTML**
   - Proper heading hierarchy
   - Landmark regions
   - Button vs link distinction

2. **Interactive Elements**
   - Focus states on all interactive elements
   - Sufficient color contrast
   - Touch-friendly targets

3. **Images**
   - Alt text on all images
   - Next.js Image optimization
   - Fallback icons for missing images

---

## Styling System

### Tailwind Configuration

Custom color palette in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6',  // Main purple
    600: '#7c3aed',
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#4c1d95',
  },
  neutral: {
    // Gray scale
  }
}
```

### Typography Scale

Custom font sizes defined:

```css
.text-display-lg { /* Large display text */ }
.text-display-sm { /* Small display text */ }
.text-heading-lg { /* Large headings */ }
.text-heading-md { /* Medium headings */ }
.text-heading-sm { /* Small headings */ }
.text-body-lg { /* Large body text */ }
.text-body-md { /* Medium body text */ }
.text-body-sm { /* Small body text */ }
.text-body-xs { /* Extra small text */ }
```

### Common Patterns

**Cards**:
```tsx
className="bg-white rounded-xl p-6 border border-neutral-100 hover:shadow-lg transition-all"
```

**Buttons (Primary)**:
```tsx
className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-full font-medium hover:bg-primary-600 transition-colors"
```

**Buttons (Secondary)**:
```tsx
className="inline-flex items-center gap-2 px-6 py-3 bg-white text-neutral-700 rounded-full font-medium border border-neutral-200 hover:border-primary-300 transition-colors"
```

**Section Container**:
```tsx
className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8"
```

---

## Animations

### Lottie Animations

Located in `/public/animations/`:
- `brain.json` - Main brain visualization
- `neuron.json` - Neuron/synapse overlay

Used in `BrainAnimation.tsx` component.

### tsparticles Configuration

Neural network effect in `NeuralNetwork.tsx`:

```typescript
particles: {
  color: { value: "#8b5cf6" },  // Purple
  links: {
    color: "#8b5cf6",
    distance: 150,
    enable: true,
    opacity: 0.3,
  },
  move: { enable: true, speed: 1 },
  number: { value: 80 },
  opacity: { value: 0.5 },
  size: { value: { min: 1, max: 3 } },
}
```

### Framer Motion

Used for:
- Mobile menu open/close
- Stat cards on hero (floating effect)
- Hover animations

---

## Key Features

### 1. Provider-Location Linking
- Providers linked to multiple locations
- Locations show all their providers
- Bi-directional navigation

### 2. Provider Headshots
- 95 headshots downloaded from old site
- Automatic fallback to icon if missing
- Optimized via Next.js Image

### 3. Comprehensive Location Data
- 30+ locations across 8 states
- Full addresses, phone numbers, hours
- Services offered per location

### 4. Insurance Information
- 25+ carriers organized by state
- Easy lookup by state

### 5. Static Site Generation
- All pages pre-rendered at build time
- Fast page loads
- SEO optimized

### 6. Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Touch-friendly interactions

---

## Deployment

### Vercel Configuration

The site is deployed on Vercel with automatic deployments from the `main` branch.

**Build Command**: `npm run build`
**Output**: Static export with ISR support

### Environment Variables

Required in `.env.local`:
```
FIRECRAWL_API_KEY=xxx  # For crawling (development only)
```

### Deployment Process

1. Push to `main` branch
2. Vercel automatically builds
3. Preview URL generated
4. Production deployment on success

---

## Future Development

### Adding a New Provider

1. Add entry to `data/providers.ts`:
```typescript
{
  id: 'new-provider-slug',
  name: 'First Last',
  credentials: 'MD',
  title: 'Psychiatrist',
  role: 'psychiatrist',
  image: '/images/providers/new-provider-slug.jpg',
  locationIds: ['az-gilbert', 'az-chandler'],
  specialties: ['Depression', 'Anxiety'],
}
```

2. Add headshot image to `/public/images/providers/`

### Adding a New Location

1. Add to appropriate state in `data/locations.ts`:
```typescript
{
  id: 'state-city',
  name: 'City Name',
  state: 'State',
  city: 'City',
  address: '123 Main St, Suite 100',
  zip: '12345',
  phone: '555-123-4567',
  hours: 'Mon-Fri: 9AM-5PM',
  services: ['TMS Therapy', 'Medication Management'],
}
```

2. Update providers that work at this location by adding the ID to their `locationIds`

### Adding a New State

1. Add new state object to `data/locations.ts`:
```typescript
{
  id: 'newstate',
  name: 'New State',
  abbreviation: 'NS',
  image: '/images/locations/newstate.jpg',
  locations: [
    // ... locations
  ],
}
```

2. Add state image to `/public/images/locations/`

3. Add insurance carriers to `data/insurance.ts`

### Content Updates

Most content can be updated by editing the TypeScript files in `/data/`:
- `locations.ts` - Clinic information
- `providers.ts` - Provider information
- `insurance.ts` - Insurance carriers
- `conditions.ts` - Condition content
- `treatments.ts` - Treatment content
- `config/headerNavLinks.ts` - Navigation
- `config/footerLinks.ts` - Footer links

### Styling Changes

- Global styles: `styles/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component-specific: Edit the component files

---

## Scripts Reference

### Download Provider Images
```bash
node scripts/download-provider-images.mjs
```
Downloads provider headshots from the old site.

### Update Provider Images in Data
```bash
node scripts/update-provider-images.mjs
```
Updates `providers.ts` with image paths.

### Crawl Old Site (requires Firecrawl API key)
```bash
FIRECRAWL_API_KEY=xxx node scripts/crawl-old-site.mjs
```
Crawls the old WordPress site for content.

---

## Contact

For questions about this project, contact the development team.

**Repository**: https://github.com/wambun/serenitymentalhealthcenters
**Live Site**: https://serenitymentalhealth.vercel.app
