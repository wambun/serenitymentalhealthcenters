# Next.js Starter Template

A production-ready starter template built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 15.5 (App Router) |
| Language | TypeScript 5.9 |
| UI Library | React 19 |
| Styling | Tailwind CSS 3.4 |
| Components | Shadcn UI + Radix UI |
| Animations | Framer Motion |
| Forms | React Hook Form + Zod |
| Charts | Recharts |
| Icons | Lucide React |
| Theme | next-themes (dark mode) |
| Analytics | Vercel Analytics |

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── newsletter/    # Newsletter subscription
│   │   └── og/            # Open Graph image generation
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── theme-providers.tsx
├── components/
│   ├── landing/           # 88 landing page components
│   │   ├── cta/          # Call-to-action sections
│   │   ├── feature/      # Feature showcases
│   │   ├── footer/       # Footer components
│   │   ├── navigation/   # Header/navigation
│   │   ├── pricing/      # Pricing sections
│   │   ├── social-proof/ # Testimonials, avatars
│   │   ├── testimonial/  # Testimonial components
│   │   └── ...           # Many more
│   └── shared/
│       ├── ui/           # 57 Shadcn UI components
│       ├── Header.tsx    # Site header
│       ├── Footer.tsx    # Site footer
│       └── ThemeSwitch.tsx
├── data/
│   └── config/
│       ├── metadata.js   # Site metadata
│       ├── pricingData.tsx
│       ├── headerNavLinks.ts
│       └── footerLinks.ts
├── lib/
│   └── utils.ts          # Utility functions (cn, etc.)
├── css/
│   └── globals.css       # Global styles + CSS variables
└── public/
    └── static/
        └── favicons/     # Favicon files
```

## Getting Started

### Prerequisites

- Node.js >= 22.0.0
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app runs at [http://localhost:6006](http://localhost:6006).

### Build

```bash
# Production build
npm run build

# Start production server
npm run serve
```

## Configuration

### Site Metadata

Edit `data/config/metadata.js`:

```js
const metadata = {
  title: 'Your App',
  description: 'Your app description',
  domain: 'example.com',
  businessName: 'Your App',
  siteUrl: 'https://example.com',
  // ... social links, etc.
};
```

### Navigation

- Header links: `data/config/headerNavLinks.ts`
- Footer links: `data/config/footerLinks.ts`

### Pricing

Configure pricing tiers in `data/config/pricingData.tsx`.

### Theme Colors

Customize colors in `tailwind.config.js` and `css/globals.css`.

## Available Components

### Landing Components (88)

Pre-built sections for landing pages:

- **CTA**: Primary CTA, Sale CTA, with 13 background variations
- **Features**: Feature lists, grids, showcases
- **Pricing**: Pricing tables, comparison tables
- **Testimonials**: Grid, list, inline testimonials
- **Social Proof**: Avatar stacks, rating badges, Product Hunt awards
- **Navigation**: Header with mobile menu
- **Footer**: Multi-column footer
- **Newsletter**: Email capture forms
- **FAQ**: Collapsible FAQ sections
- **Stats**: Statistics sections
- **Team**: Team member cards
- **Bento Grid**: Bento-style layouts

### Shadcn UI Components (57)

Form inputs, dialogs, tables, and more:

- Accordion, Alert, Avatar, Badge, Button
- Calendar, Card, Carousel, Checkbox, Collapsible
- Command, Dialog, Drawer, Dropdown Menu
- Form, Input, Label, Menubar, Navigation Menu
- Popover, Progress, Radio Group, Resizable
- Scroll Area, Select, Separator, Sheet, Skeleton
- Slider, Switch, Table, Tabs, Textarea
- Toast, Toggle, Tooltip

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run serve` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run pretty` | Format with Prettier |
| `npm run analyze` | Analyze bundle size |

## API Routes

### Newsletter (`/api/newsletter`)

POST endpoint for newsletter subscriptions.

### Open Graph (`/api/og`)

Dynamic OG image generation for social sharing.

## Deployment

This template is optimized for Vercel deployment:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## License

MIT

## Majic Prompt

## "Use the Firecrawl script to fetch data from [OLD_SITE_URL] for 'old' and [NEW_REFERENCE_URL] for 'new'. Then read prompt.md and start Phase 1."

## claude --dangerously-skip-permissions
