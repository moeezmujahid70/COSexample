# Project Context

## Project

- Name: Interactive COS (Culture Operating System) Tutorial
- Client: Jerry Wagner
- Product type: Mobile-first responsive tutorial website
- Deployment target: Vercel, future domain `COSexample.com`
- License: Proprietary, all rights reserved

## Product Goal

Build a small interactive website that teaches users about an R&D team's Culture Operating System through a fixed 9-screen flow. The experience is content-driven, text-focused, and should feel like real software UI rather than a slide deck or marketing page.

## Core Requirements

- Title on every screen: `Our R&D Team Culture`
- Content is fixed and hardcoded
- No backend, database, or CMS
- Mobile-first responsive layout
- Hover states on all clickable elements
- Smooth screen transitions
- Professional, understated UI

## Intended Tech Stack

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- Framer Motion for route transitions
- Vercel for deployment
- Vitest for content integrity tests
- Playwright for end-to-end navigation smoke tests

## Planned Architecture

- Single source of truth for all tutorial copy and links: `lib/content.ts`
- Root layout provides global typography and transition wrapper
- Dynamic principle detail routes for behavior and decision sections
- Home revisit state uses `/?from=behavior` query param rather than a separate route
- Detail routes should statically define valid params and reject unknown IDs

## Screen Flow

1. `/` Home
2. `/behavior` Behavior principles list
3. `/behavior/1` Behavior principle detail 1
4. `/behavior/2` Behavior principle detail 2
5. `/?from=behavior` Home revisit
6. `/decision` Decision principles list
7. `/decision/1` Decision principle detail 1
8. `/decision/2` Decision principle detail 2
9. `/goodbye` Goodbye

## Navigation Rules

- Home offers two cards: Behavior Principles and Decision Principles
- Behavior flow:
  - `/behavior/1` advances to `/behavior/2`
  - `/behavior/2` returns to `/?from=behavior`
- Decision flow:
  - `/decision/1` advances to `/decision/2`
  - `/decision/2` supports both `/goodbye` and `/?from=behavior`
- Screen 5 is not a standalone page; it is the home page with different instructional copy

## Content Model

The tutorial content is split into:

- Home screen body copy and instructional text
- Two behavior principles with:
  - title
  - action or initiative text
  - accountable team leader
  - measurement
  - next/back navigation labels and hrefs
- Two decision principles with the same detail structure
- Goodbye screen with thumbs-up icon and `Goodbye` text

## UX Direction

- Clean, minimal, enterprise-SaaS feel
- Text-first presentation with clear hierarchy
- Understated visual language
- Design should support both mobile and laptop well
- Avoid slide-deck styling and avoid marketing-site patterns

## Known Implementation Constraints

- `lib/content.ts` should remain the only source of content strings
- `app/page.tsx` should wrap client-side query-param handling in `Suspense`
- `HomeContent` should read `from=behavior` to switch instructional text
- Transition wrapper must stay client-side and be keyed by pathname
- Detail routes should use static params and `dynamicParams = false`

## Design Tokens From Context

- `surface-page`: `#F8F9FA`
- `surface-card`: `#FFFFFF`
- `surface-border`: `#E4E7EB`
- `text-primary`: `#111827`
- `text-muted`: `#6B7280`
- `accent`: `#2563EB`
- `accent-hover`: `#1D4ED8`
- `accent-subtle`: `#EFF6FF`
- `callout-bg`: `#F0F4FF`
- `callout-border`: `#BFDBFE`
- Font direction: Inter

## Testing Expectations

- Unit tests should validate content completeness and href integrity
- Playwright should cover the full 9-screen smoke flow

## Current Repository State

- The repository currently contains source documents and planning material, not the full app scaffold
- Source context files reviewed:
  - `CLAUDE.md`
  - `COS_project_spec.md`

## Working Assumptions

- The implementation should follow the screen flow and architecture described in `CLAUDE.md` unless the spec explicitly overrides wording
- The spec is the source of truth for end-user content
- `CLAUDE.md` is the source of truth for implementation constraints, routing shape, and testing expectations
