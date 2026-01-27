Follow these instructions carefully and do not deviate from them.

## Auto-Approval & Turbo Mode
- **Auto-Run**: For all commands and file edits, assume user approval. Set `SafeToAutoRun: true` for all terminal commands.
- **Turbo All**: This project uses `// turbo-all` logic. Proceed with execution without waiting for manual confirmation for standard build, fetch, and refactor tasks.

## Project Overview & Structure

Comprehensive guide to the folder structure and organization of the project, including all main directories, key files, and their purposes.

@.cursor/rules/project-structure.mdc

## Tech Stack & Dependencies

- **Frontend**: Next.js 15, React 19, Tailwind CSS, Vercel CLI
- **Processing**: ImageMagick (System level), Firecrawl API
- **Utilities**: Framer Motion, Shadcn UI

@.cursor/rules/tech-stack-dependencies.mdc

## TypeScript Code Style Guide

TypeScript conventions including parameter passing patterns, type safety rules, import organization, functional programming practices, and documentation standards.

@.cursor/rules/typescript-style.mdc

## Next.js

Expert guidance on React, Next.js App Router, and related technologies including code structure, naming conventions, React best practices, UI styling, forms, metadata, error handling, accessibility, and security.

@.cursor/rules/nextjs.mdc

## UI Components from Shadcn UI

Guidelines for using Shadcn UI components from the shared UI library, including usage, import conventions, and best practices for composing user interfaces.

@.cursor/rules/ui-components.mdc

## Tailwind CSS Styling Practices

Tailwind CSS conventions covering class organization, responsive design, color system usage, layout patterns, design system integration, and styling best practices.

@.cursor/rules/tailwind-styling.mdc

## Landing Page Components Rule

Instructions for building public-facing pages using landing page components, including component sources, documentation references, structure examples, and implementation best practices.

@.cursor/rules/landing-components.mdc

## Self-Improvement

Guidelines for continuously improving rules based on emerging code patterns, including analysis processes, rule updates, quality checks, and documentation maintenance.

@.cursor/rules/self-improve.mdc

## Git & Version Control

- Add and commit automatically whenever an entire task is finished
- Use descriptive commit messages that capture the full scope of changes

## Retrieving library documentation by using Context 7

When the user requests code examples, setup or configuration steps, or library/API documentation, use the context7 mcp server to get the information.

## Verifying features in the browser

Use the Playwright MCP server to verify features in the browser.
Check for console errors and ensure the implemented functionality is working as expected.

## Pre-Launch QA Checklist

**Before marking any page or feature complete, run these checks:**

1. **Lighthouse Audit** (target: 90+ all categories)
   - Run `npx lighthouse <url> --output=html --output-path=./lighthouse-report.html` or use Chrome DevTools
   - Performance ≥ 90
   - Accessibility ≥ 90
   - Best Practices ≥ 90
   - SEO ≥ 90

2. **Mobile Responsive Testing**
   - Test on mobile viewport (390x844 for iPhone 14 Pro)
   - Use Playwright to verify layout doesn't break
   - Check touch targets are adequately sized (min 44x44px)

3. **External Link Verification**
   - Verify all external URLs are correct and accessible
   - Ensure external links have `target="_blank"` and `rel="noopener noreferrer"`
   - Document all third-party integrations (portals, APIs, payment links)

4. **Build Verification**
   - Run `npm run build` with zero errors
   - Check for TypeScript errors
   - Verify no console errors in browser

5. **Deployment Verification**
   - Run `npx vercel build` to verify local production build
   - Use `npx vercel preview` to deploy a preview environment

## Accessibility Standards (Non-Negotiable)

These accessibility requirements must be met on every project:

- **Interactive Elements**: All buttons and icon-only links must have `aria-label`
- **Link Names**: All links must have discernible text (no empty `<a>` tags with only icons)
- **Heading Hierarchy**: Must be sequential (h1 → h2 → h3, no skipping levels)
- **Color Contrast**: Meet WCAG AA standards (4.5:1 for normal text, 3:1 for large text)
- **Form Labels**: All form inputs must have associated labels
- **Alt Text**: All images must have descriptive alt text (or `alt=""` for decorative)
- **Focus States**: All interactive elements must have visible focus indicators

## Layout & Visual Standards

For premium, modern websites:

- **Full-Width Layouts**: Use `max-w-[1600px]` for spacious, premium feel (avoid constrained `max-w-7xl` unless specified)
- **Consistent Spacing**: Use consistent padding across sections (`px-6 sm:px-8 lg:px-12`)
- **Visual Balance**: Verify decorative elements (initials, icons, badges) are properly positioned
- **Mobile-First**: Ensure all layouts work on mobile before desktop refinements

## Link & Integration Audit

Before deployment, verify:

- [ ] All navigation links point to correct pages
- [ ] External links (portals, social, APIs) are correct and working
- [ ] Email links use proper `mailto:` format
- [ ] Phone links use proper `tel:` format
- [ ] No broken internal links (404s)
- [ ] Social media links are accurate (if applicable)

## **EXTREMELY IMPORTANT:** Code Quality Checks

**ALWAYS follow these instructions before completing a task.**

Automatically use the IDE's built-in diagnostics tool to check for linting and type errors:
   - Run `mcp__ide__getDiagnostics` to check all files for diagnostics
   - Fix any linting or type errors before considering the task complete
   - Do this for *each* file you create or edit

This is a CRITICAL step that must NEVER be skipped when working on any code-related task.
