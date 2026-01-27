# Project Objective: Full Multi-Page Website Redesign
// turbo-all
**Auto-Approval Enabled**: This project is in a trusted environment. Proceed with all phases (Analysis, Execution, Testing) without pausing for approval. Set all tool calls to safe-to-auto-run.

Revitalize our existing company website by adopting the design philosophies and UI/UX cues from our new design direction. This is a **full website migration**, not just a landing page.

## Technical Context
- **Frontend Stack**: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 3.4, Vercel CLI.
- **UI Components**: Build from scratch using Shadcn UI + Framer Motion. The `/components/landing` and `/components/shared` folders are the **destinations** for these new builds, not a library of pre-existing code.
- **Strict Source of Truth**: Every UI element, animation, and layout must be derived from the `client/new` specifications. Do not reuse legacy logic or generic template components unless they perfectly match the `client/new` reference.
- **Data Driven**: Content must be mapped from `client/old` into the new structures defined by `client/new`.

## Sources & Reference
1. **Current State (`client/old`)**: Contains the existing website's structure, content, and logic.
2. **Design Target (`client/new`)**: Contains the new design philosophy and UI patterns.

### Data Collection Automation
Use the Firecrawl automation script to populate these directories:
```bash
# Fetch old site data
node scripts/firecrawl-fetch.mjs --url "YOUR_OLD_SITE_URL" --target "old"

# Fetch new design reference data
node scripts/firecrawl-fetch.mjs --url "YOUR_NEW_DESIGN_REFERENCE_URL" --target "new"

# Mimic reference images (extract colors/optimize)
node scripts/image-mimic.mjs --file "public/static/images/reference.png" --action analyze

*Note: Requires `FIRECRAWL_API_KEY` in your environment or `.env` file.*

## Workflow Requirements
1. **Phase 1: Architecture & PRD**: Before writing code, generate a PRD that includes:
    - A full **Sitemap** derived from `client/old`.
    - **Visual Analysis**: Use your browsing capabilities (e.g., "Claude in Chrome") to visit the Design Target URL in detail. Note the exact micro-interactions, layout spacing, color transitions, animations, and typography cues.
    - Content mapping: How Markdown/JSON/HTML data from `old` will be rendered using the `new` design components.
    - Proposed technical implementation (e.g., dynamic routes for blog/services).
2. **Phase 2: Execution**:
    - Implement the global layout (navigation, footer) based on `client/new`.
    - Build out all internal pages as defined by the sitemap.
    - Ensure smooth transitions and premium animations (Framer Motion) consistent with the new design.

## Logo and Favicon
Make sure to use the logo and favicon from the old site and add it to the new site

**Goal**: Transform the legacy multi-page site into a modern, premium experience that strictly follows the design cues in `client/new`.