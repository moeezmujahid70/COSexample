# Project Context

## Project

- Name: Interactive COS (Culture Operating System) Tutorial
- Client: Jerry Wagner
- Product type: Mobile-first responsive internal-tool style web app
- Deployment target: Vercel, future domain `COSexample.com`
- License: Proprietary, all rights reserved

## Product Goal

Build a small interactive website that teaches users about an R&D team's Culture Operating System through a fixed 9-screen flow. The experience is content-driven, text-focused, and should feel like real software UI rather than a slide deck, tutorial shell, or marketing page.

## Core Requirements

- Title on every screen: `Our R&D Team Culture`
- Content is fixed and hardcoded
- No backend, database, or CMS
- Mobile-first responsive layout
- Hover states on all clickable elements
- Professional, understated UI
- Internal business-tool presentation with dense but readable layout

## Intended Tech Stack

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- Vercel for deployment
- Vitest for content integrity tests
- Playwright for end-to-end navigation smoke tests

## Planned Architecture

- Single source of truth for all tutorial copy and links: `cos-tutorial/lib/content.ts`
- Dynamic principle detail routes for behavior and decision sections
- Home revisit state uses `/?from=behavior` query param rather than a separate route
- Detail routes should statically define valid params and reject unknown IDs
- Employee feedback popup content should also live in `lib/content.ts`

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

- Home screen title and two track cards
- Two behavior principles with:
  - title
  - principle body text
  - accountable team leader
  - measurement
  - employee feedback entries
  - next/back navigation labels and hrefs
- Two decision principles with the same detail structure
- Goodbye screen with a completion state and single restart action

## UX Direction

- Clean, minimal, internal-software feel
- Text-first presentation with clear hierarchy
- Understated visual language
- Design should support both mobile and laptop well
- Avoid tutorial-style helper panels, slide-deck styling, and marketing-site patterns
- Prefer centered hero/comment cards where they improve focus and reduce clutter
- Use subtle polish only: restrained gradients, light shadows, small motion
- Use `ui-ux-pro-max` as the design reference for UI refreshes and visual cleanup
- Favor alignment, whitespace discipline, and icon consistency over decorative effects

## Known Implementation Constraints

- `cos-tutorial/lib/content.ts` should remain the only source of content strings
- Detail routes should use static params and `dynamicParams = false`
- Home screen should remain minimal: centered title plus two track cards
- Decision/Behavior list screens should use:
  - one centered comment card
  - principle rows with inline icon, title, `Open` action, and popup buttons underneath
- Principle detail screens should use:
  - one centered first/header card
  - one full-width content card beneath it
  - no `Action / Initiative` label
  - smaller title text in the first/header card than earlier tutorial versions
- Popup triggers belong on the list screens, not the detail screens
- Popup buttons should be green-shaded and labeled `Accountable`, `Measurement`, and `Feedback`
- Popup modals should use icons in both the header and content rows
- Completion screen should use a restrained success-state treatment with subtle confetti and only one button: `Run again`
- List-row principle icon should use the transparent `search-focus-icon` asset without an enclosing bordered box
- List-row icons should align directly with the principle text, not sit inside framed icon containers
- Remove helper copy when the client explicitly marks it for deletion; keep surfaces visually quiet

## Design Tokens From Context

- `surface-page`: `#F8F9FA`
- `surface-card`: `#FFFFFF`
- `surface-border`: `#E4E7EB`
- `surface-tint`: `#EEF3F8`
- `text-primary`: `#111827`
- `text-muted`: `#6B7280`
- `accent`: `#0891B2`
- `accent-hover`: `#0E7490`
- `accent-subtle`: `#ECFEFF`
- `accent-strong`: `#164E63`
- `success`: `#22C55E`
- `success-hover`: `#16A34A`
- `success-subtle`: `#F0FDF4`
- `success-border`: `#BBF7D0`
- Font direction: Inter

## Testing Expectations

- Unit tests should validate content completeness and href integrity
- Playwright should cover the full 9-screen smoke flow
- After visual changes, rerun `npm run test` and `npm run build`
- Build may occasionally fail due to stale `.next` artifacts; isolated missing-module errors from `.next/server/*` can be cache issues rather than code regressions

## Current Repository State

- The app scaffold exists in `cos-tutorial/`
- Core shared UI currently lives in:
  - `components/HomeContent.tsx`
  - `components/TopNav.tsx`
  - `components/PageHeader.tsx`
  - `components/PrincipleListItem.tsx`
  - `components/PrinciplePopups.tsx`
  - `components/PrincipleDetail.tsx`
  - `components/CompletionCelebration.tsx`
- Track/list support components currently include:
  - `components/TrackComment.tsx`
  - `components/PrincipleCard.tsx`
  - `components/ActionButton.tsx`
- Source context files reviewed:
  - `CLAUDE.md`
  - `COS_project_spec.md`

## Session Learnings

- The client consistently prefers subtraction over addition:
  - remove helper labels
  - remove repeated headings
  - remove bordered wrappers around decorative icons
- A centered top card works better than a left-heavy tutorial header on the 4 principle detail screens
- The home screen should stay extremely minimal:
  - centered `Our R&D Team Culture`
  - two clean centered track cards only
- The list screens should communicate popup behavior through clear green buttons and icon usage rather than explanatory text
- Popup terminology should stay short and business-like:
  - `Accountable`
  - `Measurement`
  - `Feedback`
- The client prefers reused, consistent patterns across the four principle detail screens rather than screen-specific flourishes

## Working Assumptions

- The implementation should follow the screen flow and architecture described in `CLAUDE.md` unless the spec explicitly overrides wording
- The spec is the source of truth for end-user content
- `CLAUDE.md` is the source of truth for implementation constraints, routing shape, and testing expectations
