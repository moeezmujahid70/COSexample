# COS Tutorial — Claude Code Context

**Client:** Jerry Wagner
**Project:** Interactive COS (Culture Operating System) Tutorial
**Deployed to:** Vercel → future domain COSexample.com
**License:** Proprietary All Rights Reserved — no usage rights granted to anyone

---

## Commands

All commands run from inside `cos-tutorial/`:

```bash
cd cos-tutorial

# Development
npm run dev          # Start dev server on http://localhost:3000

# Build & check
npm run build        # Production build
npm run lint         # ESLint

# Tests
npm run test         # Vitest unit tests (content integrity)
npx playwright test  # Playwright e2e — full 9-screen navigation smoke test
npx playwright test --ui  # Playwright with interactive UI

# Deploy
# Push to main → Vercel auto-deploys (no manual deploy step needed)
# Vercel Root Directory must be set to: cos-tutorial/
```

---

## Architecture

**Next.js 14 App Router** — static export via Vercel's native build (no `output: 'export'`).

- The Next.js app lives in `cos-tutorial/` — this is the Vercel Root Directory.
- All content is hardcoded in `cos-tutorial/lib/content.ts` — **single source of truth**. Never scatter content into component files.
- No backend, no database, no CMS. Client will not edit content — all changes go through the developer.
- Screen transitions: Framer Motion `AnimatePresence` (mode="wait") keyed to `usePathname()` — 200ms fade + vertical shift.
- Font: Inter via `next/font/google` with CSS variable `--font-inter`.

---

## File Structure

```
cos-tutorial/                       ← Next.js app root (Vercel Root Directory)
  app/
    layout.tsx                      # Root layout: Inter font, globals.css, PageTransitionWrapper
    globals.css                     # Tailwind directives + custom animations
    page.tsx                        # Screen 1 & 5: Suspense wrapper around HomeContent
    behavior/
      page.tsx                      # Screen 2: Behavior principles list
      [id]/page.tsx                 # Screens 3 & 4: BP detail (dynamicParams = false)
    decision/
      page.tsx                      # Screen 6: Decision principles list
      [id]/page.tsx                 # Screens 7 & 8: DP detail (dynamicParams = false)
    goodbye/
      page.tsx                      # Screen 9: Goodbye + confetti celebration
  components/
    PageTransitionWrapper.tsx       # 'use client' — AnimatePresence keyed to pathname
    PageShell.tsx                   # Two-column layout: SidebarRail + main content
    PageHeader.tsx                  # Eyebrow, title, description + InstructionCallout
    SidebarRail.tsx                 # 'use client' — sticky left nav with progress tracker
    InstructionCallout.tsx          # Styled guidance box (callout-bg / callout-border)
    SectionHero.tsx                 # Card with eyebrow, title, body text + SVG illustration
    HomeContent.tsx                 # 'use client' — reads ?from= param, renders home cards
    PrincipleCard.tsx               # Large clickable card (Home: Behavior / Decision)
    PrincipleListItem.tsx           # Clickable row for principle list screens
    PrincipleDetail.tsx             # Full detail: title, body, accountable, measurement, buttons
    ActionButton.tsx                # Button with variant prop (primary | secondary) + href
    CompletionCelebration.tsx       # Goodbye screen: confetti animation + thumbs-up
  lib/
    content.ts                      # All TypeScript types + all hardcoded content
  public/
    illustration-overview.svg       # Home screen hero illustration
    illustration-behavior.svg       # Behavior list hero illustration
    illustration-decision.svg       # Decision list hero illustration
  tests/
    unit/content.test.ts            # Vitest: no broken hrefs, all fields present
    e2e/tutorial-flow.spec.ts       # Playwright: full 9-screen navigation smoke test
  tailwind.config.ts                # Custom color tokens, font-sans → Inter
  playwright.config.ts
  vitest.config.ts
```

---

## Screen Flow & Navigation

All screens share title: **"Our R&D Team Culture"** — no variations.

```
Screen 1 — Home (/)
├── Behavior Principles → /behavior           (Screen 2)
└── Decision Principles → /decision           (Screen 6)

Screen 2 — Behavior List (/behavior)
├── Principle 1 → /behavior/1                 (Screen 3)
└── Principle 2 → /behavior/2                 (Screen 4)

Screen 3 — BP Detail (/behavior/1)
└── "Next Behavioral Principle" → /behavior/2 (Screen 4)

Screen 4 — BP Detail (/behavior/2)
└── "Back to Principles Tabs" → /?from=behavior (Screen 5)

Screen 5 — Home Revisited (/?from=behavior)
├── Decision Principles → /decision           (Screen 6)
└── Behavior Principles → /behavior           (Screen 2)

Screen 6 — Decision List (/decision)
├── Principle 1 → /decision/1                 (Screen 7)
└── Principle 2 → /decision/2                 (Screen 8)

Screen 7 — DP Detail (/decision/1)
└── "Next Decision Principle" → /decision/2   (Screen 8)

Screen 8 — DP Detail (/decision/2)
├── "End Session" → /goodbye                  (Screen 9)
└── "Back to Principles Tab" → /?from=behavior (Screen 5)

Screen 9 — Goodbye (/goodbye)
```

---

## Design Tokens (cos-tutorial/tailwind.config.ts)

| Token            | Hex       | Usage                                 |
| ---------------- | --------- | ------------------------------------- |
| `surface-page`   | `#F8F9FA` | Page background                       |
| `surface-card`   | `#FFFFFF` | Cards and panels                      |
| `surface-border` | `#E4E7EB` | Card borders                          |
| `surface-tint`   | `#EEF3F8` | Sidebar progress bar background       |
| `text-primary`   | `#111827` | Headings, principle titles            |
| `text-muted`     | `#6B7280` | Body paragraphs, metadata             |
| `accent`         | `#2563EB` | Hover borders, button bg, active link |
| `accent-hover`   | `#1D4ED8` | Button hover state                    |
| `accent-subtle`  | `#EFF6FF` | Card hover background tint            |
| `accent-strong`  | `#1E3A8A` | Dark accent for eyebrow labels        |
| `callout-bg`     | `#F0F4FF` | Instruction callout background        |
| `callout-border` | `#BFDBFE` | Instruction callout left border       |
| `guide-bg`       | `#F7F3EC` | "How to use" section background       |
| `guide-border`   | `#E7D9C2` | "How to use" section border           |

Typography: Inter font — scale `text-sm` → `text-2xl`, weights `font-medium` / `font-semibold`.

---

## Gotchas

**Screen 5 is not a separate route.** It's the same `/` route as Screen 1, differentiated by `?from=behavior` query param. `HomeContent.tsx` is a `'use client'` component that reads `useSearchParams()` and switches instruction text. It must be wrapped in `<Suspense>` inside `app/page.tsx` — required to preserve static prerendering. Without the Suspense wrapper, Next.js will error at build time.

**Dynamic routes have `dynamicParams = false`.** `cos-tutorial/app/behavior/[id]/page.tsx` and `cos-tutorial/app/decision/[id]/page.tsx` both export `dynamicParams = false` alongside `generateStaticParams`. This makes Next.js return 404 for any id outside `1` and `2` — avoids accidental hydration of invalid pages.

**PageTransitionWrapper must be a `'use client'` component** that reads `usePathname()`. It cannot be a Server Component. Keep it as a thin wrapper — don't add business logic here.

**`cos-tutorial/lib/content.ts` is the only place content lives.** If a screen's text, button label, or navigation href needs changing, it changes only in `lib/content.ts`. Never hardcode content strings in component or page files.

---

## Execution Mandates

**Subagent-driven development:** Use `superpowers:subagent-driven-development` — one subagent per task from the implementation plan. Review output between tasks before dispatching the next subagent. Do not batch tasks.

**Frontend design skill:** Use `ui-ux-pro-max` before writing any JSX/TSX for visual components. The UI must look like enterprise SaaS — not a template, not a slide deck.

**Implementation plan:** `/Users/moeezmujahid/.claude/plans/imperative-roaming-alpaca.md`

**Current build status:** All 9 screens complete. 8/8 unit tests pass. 10/10 e2e tests pass. Production build clean. 3 commits pending push to origin/main.
