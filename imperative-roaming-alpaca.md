# Interactive COS Tutorial Implementation Plan

> **Execution mode:** Implement this plan task-by-task with review checkpoints between tasks. Use subagents only when a subtask is independent, well-bounded, and worth parallelizing. Steps use checkbox (`- [ ]`) syntax for tracking.

> **Frontend UI/UX:** REQUIRED SKILL: Use **ui-ux-pro-max** for all tasks that create or modify visual components (Tasks 6–14). Invoke it before writing JSX/TSX so the UI stays intentional and product-grade rather than generic.

**Goal:** Build a 9-screen, mobile-first interactive tutorial for a workplace Culture Operating System (COS), deployed to Vercel as a static Next.js app with no backend.

**Architecture:** Next.js 14 App Router with one URL per screen; all content hardcoded in `lib/content.ts`; client-side screen transitions via Framer Motion `AnimatePresence`; Screen 5 (Home Revisited) is the same `/` route with `?from=behavior` query param.

**Execution approach:** Implement sequentially, one task at a time, with a review checkpoint before proceeding to the next task. Subagents may be used selectively for sidecar work such as verification, test authoring, or isolated code slices, but should not be forced into the critical path.

**Tech Stack:** Next.js 14 (TypeScript), Tailwind CSS v3, Framer Motion, Inter font via `next/font/google`, Vitest (content tests), Playwright (e2e flow).

---

## Context

Jerry Wagner needs an interactive web tutorial to teach R&D team members about their Culture Operating System. The site has exactly 9 screens connected by a guided click-through flow. All content is fixed and hardcoded — no CMS, no database. Deployed to Vercel, future domain COSexample.com. Must look like real SaaS software (not a marketing page or slide deck), work on mobile and desktop, with hover states and smooth screen transitions throughout.

**Execution mandate:** Work one task at a time, with a review checkpoint between tasks. Do not batch tasks. Use subagents only when the work is clearly separable and does not block the immediate next implementation step.

**Design mandate:** Use `ui-ux-pro-max` before writing any component JSX (Tasks 6–14). The UI must look like enterprise SaaS — not a template, not a slide deck. The skill drives design decisions; the color tokens and component specs in this plan are starting constraints, not ceilings.

---

## Design Tokens

### Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `surface-page` | `#F8F9FA` | Page background |
| `surface-card` | `#FFFFFF` | Cards and panels |
| `surface-border` | `#E4E7EB` | Card borders |
| `text-primary` | `#111827` | Headings, principle titles |
| `text-muted` | `#6B7280` | Body paragraphs, metadata |
| `accent` | `#2563EB` | Hover borders, button bg, active link |
| `accent-subtle` | `#EFF6FF` | Card hover background tint |
| `callout-bg` | `#F0F4FF` | Instruction callout box background |
| `callout-border` | `#BFDBFE` | Instruction callout left border |

### Typography
- Font: **Inter** (via `next/font/google`)
- Scale: `text-sm` / `text-base` / `text-lg` / `text-xl` / `text-2xl` with `font-medium` / `font-semibold`

---

## File Structure

```
/Users/moeezmujahid/Projects/COSexample/
└── cos-tutorial/                      ← scaffold the app here
    ├── app/
    │   ├── layout.tsx                 # Root layout: Inter font, globals.css, PageTransitionWrapper
    │   ├── globals.css                # Tailwind directives + base font-family
    │   ├── page.tsx                   # Screen 1 & 5: Home — Suspense wrapper around HomeContent
    │   ├── behavior/
    │   │   ├── page.tsx               # Screen 2: Behavior principles list
    │   │   └── [id]/
    │   │       └── page.tsx           # Screens 3 & 4: BP detail, generateStaticParams([1,2])
    │   ├── decision/
    │   │   ├── page.tsx               # Screen 6: Decision principles list
    │   │   └── [id]/
    │   │       └── page.tsx           # Screens 7 & 8: DP detail, generateStaticParams([1,2])
    │   └── goodbye/
    │       └── page.tsx               # Screen 9: Goodbye — thumbs up icon + text
    ├── components/
    │   ├── PageTransitionWrapper.tsx  # 'use client': AnimatePresence keyed to usePathname()
    │   ├── PageShell.tsx              # Header "Our R&D Team Culture" + max-width container
    │   ├── InstructionCallout.tsx     # Styled guidance box shown at top of each screen
    │   ├── HomeContent.tsx            # 'use client': reads ?from= param, renders home cards
    │   ├── PrincipleCard.tsx          # Large clickable card (Home screen — Behavior / Decision)
    │   ├── PrincipleListItem.tsx      # Clickable row for principle list screens
    │   ├── PrincipleDetail.tsx        # Full detail layout: title, body, accountable, measurement, buttons
    │   └── ActionButton.tsx           # Button with variant prop (primary | secondary) + href
    ├── lib/
    │   └── content.ts                 # All types + all hardcoded content (single source of truth)
    ├── tests/
    │   ├── unit/
    │   │   └── content.test.ts        # Vitest: data integrity — no broken hrefs, all fields present
    │   └── e2e/
    │       └── tutorial-flow.spec.ts  # Playwright: full 9-screen navigation smoke test
    ├── tailwind.config.ts             # Custom color tokens, font-sans → Inter, content paths
    ├── next.config.ts                 # Minimal — no output:export (use Vercel's native build)
    ├── tsconfig.json                  # Strict TS, path alias @/ → root
    ├── package.json
    ├── postcss.config.js
    ├── playwright.config.ts
    └── vitest.config.ts
```

---

## Task 1: Scaffold the Next.js Project

**Files:**
- Create: `package.json`, `next.config.ts`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.js`, `app/globals.css`

- [ ] **Step 1: Initialize Next.js with TypeScript and Tailwind**

Run inside `/Users/moeezmujahid/Projects/COSexample/`:
```bash
npx create-next-app@latest cos-tutorial --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*" --yes
```
Expected: Project files generated inside `cos-tutorial/`. `package.json`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.js`, and `app/` are created there.

- [ ] **Step 2: Install additional dependencies**

Run inside `cos-tutorial/`:
```bash
npm install framer-motion
npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/jest-dom @playwright/test
```

- [ ] **Step 3: Add Playwright browsers**

Run inside `cos-tutorial/`:
```bash
npx playwright install chromium
```

- [ ] **Step 4: Verify dev server starts**

Run inside `cos-tutorial/`:
```bash
npm run dev
```
Expected: Server running at http://localhost:3000. Visit it — default Next.js page appears.

- [ ] **Step 5: Commit**

```bash
git add .
git commit -m "feat: scaffold Next.js 14 project with TypeScript, Tailwind, Framer Motion"
```

---

## Task 2: Configure Tailwind Design Tokens

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`

- [ ] **Step 1: Replace tailwind.config.ts with custom token config**

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'surface-page':   '#F8F9FA',
        'surface-card':   '#FFFFFF',
        'surface-border': '#E4E7EB',
        'text-primary':   '#111827',
        'text-muted':     '#6B7280',
        'accent':         '#2563EB',
        'accent-hover':   '#1D4ED8',
        'accent-subtle':  '#EFF6FF',
        'callout-bg':     '#F0F4FF',
        'callout-border': '#BFDBFE',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
```

- [ ] **Step 2: Update globals.css**

```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-surface-page text-text-primary font-sans antialiased;
  }
}
```

- [ ] **Step 3: Commit**

```bash
git add tailwind.config.ts app/globals.css
git commit -m "feat: configure Tailwind design tokens and base styles"
```

---

## Task 3: Define Types and Hardcode All Content

**Files:**
- Create: `lib/content.ts`

- [ ] **Step 1: Write content.ts with all types and hardcoded data**

```typescript
// lib/content.ts

export interface PrincipleDetail {
  id: string
  title: string
  body: string
  accountable: string
  measurement: string
  nextHref?: string
  nextLabel?: string
  secondaryHref?: string
  secondaryLabel?: string
}

export interface PrincipleCategory {
  slug: 'behavior' | 'decision'
  label: string
  listHref: string
  listInstruction: string
  listBodyText: string
  principles: PrincipleDetail[]
}

export interface HomeCard {
  label: string
  href: string
}

export interface HomeContent {
  bodyText: string
  defaultInstruction: string
  revisitedInstruction: string
  cards: HomeCard[]
}

export const homeContent: HomeContent = {
  bodyText:
    'The core building blocks for a workplace culture are the Decision Principles and the Behavior Principles. Decision Principles are the rules for how we make decisions. The Behavior Principles are the rules for how we behave. The team example is for an R&D team.',
  defaultInstruction: 'Mouse over Behavioral Principles and click it.',
  revisitedInstruction: 'Mouse over Decision Principles and click it.',
  cards: [
    { label: 'Decision Principles', href: '/decision' },
    { label: 'Behavior Principles', href: '/behavior' },
  ],
}

export const categories: PrincipleCategory[] = [
  {
    slug: 'behavior',
    label: 'Behavior Principles',
    listHref: '/behavior',
    listInstruction: 'Mouse over and click on the first Behavioral Principle.',
    listBodyText:
      'These might be examples for Behavioral Principles. They are short and clear phrases about how team members are expected to behave.',
    principles: [
      {
        id: '1',
        title: 'Bring up possible problems early — no surprises.',
        body: 'Information that could affect outcomes — risks, delays, disagreements, bad news — is shared as soon as it is known, not only when it is convenient, certain, or comfortable. If unclear, still share what is known and what is uncertain. Team members should never be caught off guard by something the team could have known.',
        accountable: 'Suzanne Figueroa, Senior Developer',
        measurement: 'Quarterly survey where employees score all culture actions and give feedback.',
        nextHref: '/behavior/2',
        nextLabel: 'Next Behavioral Principle',
      },
      {
        id: '2',
        title: 'If you see someone stuck, volunteer to help.',
        body: "This is about creating a culture of shared ownership — not \"that's their problem,\" but \"we move forward together.\" It encourages awareness, empathy, and initiative, while respecting the other person's autonomy (offer help, don't impose it).",
        accountable: 'Samuel Bass, Database Administrator',
        measurement: 'Quarterly survey where employees score all culture actions and give feedback.',
        nextHref: '/?from=behavior',
        nextLabel: 'Back to Principles Tabs',
      },
    ],
  },
  {
    slug: 'decision',
    label: 'Decision Principles',
    listHref: '/decision',
    listInstruction: 'Mouse over the first Decision Principle and click it.',
    listBodyText:
      'These might be examples for Decision Principles. They are short and clear phrases about how decisions are to be made.',
    principles: [
      {
        id: '1',
        title:
          'Document what was decided, why it was decided, and make that rationale accessible to all stakeholders so decisions are transparent and understandable.',
        body: 'Make the rationale for a decision accessible to all stakeholders so decisions are transparent and understandable. This means capturing not just the outcome, but the thinking behind it — including key considerations, tradeoffs, and alternatives that were evaluated. The purpose is to ensure that stakeholders can see how and why a decision was made, even if they were not directly involved or do not fully agree with the outcome.',
        accountable: 'Nancy Blake, Team Assistant',
        measurement: 'Quarterly survey where employees score all culture actions and give feedback.',
        nextHref: '/decision/2',
        nextLabel: 'Next Decision Principle',
      },
      {
        id: '2',
        title:
          'We seek input from all impacted stakeholders, but decisions move forward without requiring unanimous agreement.',
        body: 'Before making a decision, the team actively reaches out to the people who will be affected or who have relevant knowledge. Their perspectives are used to challenge assumptions, surface risks, and improve the quality of the decision. Input is sought early enough to influence the outcome, not after the direction is already set, and stakeholders are given enough context to provide meaningful, informed feedback. While all relevant perspectives are considered, consensus is not required.',
        accountable: 'Nancy Blake, Team Assistant',
        measurement: 'Quarterly survey where employees score all culture actions and give feedback.',
        nextHref: '/goodbye',
        nextLabel: 'End Session',
        secondaryHref: '/?from=behavior',
        secondaryLabel: 'Back to Principles Tab',
      },
    ],
  },
]
```

- [ ] **Step 2: Commit**

```bash
git add lib/content.ts
git commit -m "feat: add all hardcoded content and TypeScript types"
```

---

## Task 4: Content Integrity Tests

**Files:**
- Create: `vitest.config.ts`
- Create: `tests/unit/content.test.ts`

- [ ] **Step 1: Create vitest.config.ts**

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
})
```

- [ ] **Step 2: Add test script to package.json**

In `package.json`, add to the `"scripts"` object:
```json
"test": "vitest run",
"test:watch": "vitest"
```

- [ ] **Step 3: Write failing content integrity tests**

```typescript
// tests/unit/content.test.ts
import { describe, it, expect } from 'vitest'
import { homeContent, categories } from '@/lib/content'

const VALID_HREFS = [
  '/',
  '/?from=behavior',
  '/behavior',
  '/behavior/1',
  '/behavior/2',
  '/decision',
  '/decision/1',
  '/decision/2',
  '/goodbye',
]

describe('homeContent', () => {
  it('has bodyText, defaultInstruction, revisitedInstruction', () => {
    expect(homeContent.bodyText).toBeTruthy()
    expect(homeContent.defaultInstruction).toBeTruthy()
    expect(homeContent.revisitedInstruction).toBeTruthy()
  })

  it('has exactly 2 cards with valid hrefs', () => {
    expect(homeContent.cards).toHaveLength(2)
    homeContent.cards.forEach((card) => {
      expect(card.label).toBeTruthy()
      expect(VALID_HREFS).toContain(card.href)
    })
  })
})

describe('categories', () => {
  it('has exactly 2 categories: behavior and decision', () => {
    expect(categories).toHaveLength(2)
    expect(categories[0].slug).toBe('behavior')
    expect(categories[1].slug).toBe('decision')
  })

  it('each category has 2 principles', () => {
    categories.forEach((cat) => {
      expect(cat.principles).toHaveLength(2)
    })
  })

  it('every principle has required fields', () => {
    categories.forEach((cat) => {
      cat.principles.forEach((p) => {
        expect(p.id).toBeTruthy()
        expect(p.title).toBeTruthy()
        expect(p.body).toBeTruthy()
        expect(p.accountable).toBeTruthy()
        expect(p.measurement).toBeTruthy()
      })
    })
  })

  it('every nextHref is a valid route', () => {
    categories.forEach((cat) => {
      cat.principles.forEach((p) => {
        if (p.nextHref) expect(VALID_HREFS).toContain(p.nextHref)
        if (p.secondaryHref) expect(VALID_HREFS).toContain(p.secondaryHref)
      })
    })
  })

  it('behavior principle IDs are "1" and "2"', () => {
    const behavior = categories.find((c) => c.slug === 'behavior')!
    expect(behavior.principles.map((p) => p.id)).toEqual(['1', '2'])
  })

  it('decision principle IDs are "1" and "2"', () => {
    const decision = categories.find((c) => c.slug === 'decision')!
    expect(decision.principles.map((p) => p.id)).toEqual(['1', '2'])
  })
})
```

- [ ] **Step 4: Run tests — expect PASS (content is already defined)**

```bash
npm test
```
Expected: All 8 tests pass. If any fail, fix `lib/content.ts` before proceeding.

- [ ] **Step 5: Commit**

```bash
git add vitest.config.ts tests/unit/content.test.ts package.json
git commit -m "test: add content integrity unit tests with Vitest"
```

---

## Task 5: Root Layout — Font + PageTransitionWrapper

**Files:**
- Create: `components/PageTransitionWrapper.tsx`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Create PageTransitionWrapper**

```tsx
// components/PageTransitionWrapper.tsx
'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function PageTransitionWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
```

- [ ] **Step 2: Update app/layout.tsx**

```tsx
// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import PageTransitionWrapper from '@/components/PageTransitionWrapper'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Our R&D Team Culture',
  description: 'Interactive Culture Operating System tutorial for our R&D team.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <PageTransitionWrapper>{children}</PageTransitionWrapper>
      </body>
    </html>
  )
}
```

- [ ] **Step 3: Verify dev server — no errors, Inter font loads**

```bash
npm run dev
```
Visit http://localhost:3000 — default page renders with Inter font (inspect in browser DevTools → fonts).

- [ ] **Step 4: Commit**

```bash
git add components/PageTransitionWrapper.tsx app/layout.tsx
git commit -m "feat: add Inter font, root layout, and Framer Motion page transitions"
```

---

## Task 6: Shared UI Primitives — PageShell, InstructionCallout, ActionButton

**Files:**
- Create: `components/PageShell.tsx`
- Create: `components/InstructionCallout.tsx`
- Create: `components/ActionButton.tsx`

- [ ] **Step 1: Create PageShell**

```tsx
// components/PageShell.tsx
export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-surface-page">
      <header className="border-b border-surface-border bg-surface-card">
        <div className="mx-auto max-w-3xl px-4 py-4 sm:px-6">
          <h1 className="text-base font-semibold tracking-tight text-text-primary">
            Our R&amp;D Team Culture
          </h1>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
        {children}
      </main>
    </div>
  )
}
```

- [ ] **Step 2: Create InstructionCallout**

```tsx
// components/InstructionCallout.tsx
export default function InstructionCallout({ text }: { text: string }) {
  return (
    <div className="mb-6 rounded-md border-l-4 border-callout-border bg-callout-bg px-4 py-3">
      <p className="text-sm font-medium text-accent">{text}</p>
    </div>
  )
}
```

- [ ] **Step 3: Create ActionButton**

```tsx
// components/ActionButton.tsx
import Link from 'next/link'

interface ActionButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
}

export default function ActionButton({ href, children, variant = 'primary' }: ActionButtonProps) {
  const base = 'inline-block rounded-md px-5 py-2.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2'
  const styles = {
    primary: `${base} bg-accent text-white hover:bg-accent-hover`,
    secondary: `${base} border border-surface-border bg-surface-card text-text-primary hover:bg-surface-page`,
  }

  return (
    <Link href={href} className={styles[variant]}>
      {children}
    </Link>
  )
}
```

- [ ] **Step 4: Commit**

```bash
git add components/PageShell.tsx components/InstructionCallout.tsx components/ActionButton.tsx
git commit -m "feat: add PageShell, InstructionCallout, and ActionButton primitives"
```

---

## Task 7: PrincipleCard and PrincipleListItem Components

**Files:**
- Create: `components/PrincipleCard.tsx`
- Create: `components/PrincipleListItem.tsx`

- [ ] **Step 1: Create PrincipleCard**

```tsx
// components/PrincipleCard.tsx
import Link from 'next/link'

interface PrincipleCardProps {
  label: string
  href: string
}

export default function PrincipleCard({ label, href }: PrincipleCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-lg border border-surface-border bg-surface-card p-6 transition-all duration-150 hover:border-accent hover:bg-accent-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <span className="text-base font-semibold text-text-primary transition-colors group-hover:text-accent">
        {label}
      </span>
      <span className="mt-1 block text-sm text-text-muted">Click to explore →</span>
    </Link>
  )
}
```

- [ ] **Step 2: Create PrincipleListItem**

```tsx
// components/PrincipleListItem.tsx
import Link from 'next/link'

interface PrincipleListItemProps {
  number: number
  title: string
  href: string
}

export default function PrincipleListItem({ number, title, href }: PrincipleListItemProps) {
  return (
    <Link
      href={href}
      className="group flex items-start gap-4 rounded-lg border border-surface-border bg-surface-card p-5 transition-all duration-150 hover:border-accent hover:bg-accent-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-surface-page text-xs font-semibold text-text-muted ring-1 ring-surface-border group-hover:bg-accent group-hover:text-white group-hover:ring-accent">
        {number}
      </span>
      <span className="text-sm font-medium leading-relaxed text-text-primary group-hover:text-accent">
        {title}
      </span>
    </Link>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add components/PrincipleCard.tsx components/PrincipleListItem.tsx
git commit -m "feat: add PrincipleCard and PrincipleListItem interactive components"
```

---

## Task 8: PrincipleDetail Component

**Files:**
- Create: `components/PrincipleDetail.tsx`

- [ ] **Step 1: Create PrincipleDetail**

```tsx
// components/PrincipleDetail.tsx
import ActionButton from '@/components/ActionButton'

interface PrincipleDetailProps {
  title: string
  body: string
  accountable: string
  measurement: string
  nextHref?: string
  nextLabel?: string
  secondaryHref?: string
  secondaryLabel?: string
}

export default function PrincipleDetail({
  title,
  body,
  accountable,
  measurement,
  nextHref,
  nextLabel,
  secondaryHref,
  secondaryLabel,
}: PrincipleDetailProps) {
  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-surface-border bg-surface-card p-6">
        <p className="text-sm font-medium uppercase tracking-wide text-text-muted">Principle</p>
        <p className="mt-2 text-lg font-semibold leading-snug text-text-primary">{title}</p>
      </div>

      <div className="rounded-lg border border-surface-border bg-surface-card p-6">
        <p className="text-sm font-medium uppercase tracking-wide text-text-muted">
          Action / Initiative
        </p>
        <p className="mt-2 text-sm leading-relaxed text-text-primary">{body}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-surface-border bg-surface-card p-5">
          <p className="text-sm font-medium uppercase tracking-wide text-text-muted">Accountable</p>
          <p className="mt-1 text-sm font-medium text-text-primary">{accountable}</p>
        </div>
        <div className="rounded-lg border border-surface-border bg-surface-card p-5">
          <p className="text-sm font-medium uppercase tracking-wide text-text-muted">Measurement</p>
          <p className="mt-1 text-sm leading-relaxed text-text-primary">{measurement}</p>
        </div>
      </div>

      {(nextHref || secondaryHref) && (
        <div className="flex flex-wrap gap-3 pt-2">
          {nextHref && nextLabel && (
            <ActionButton href={nextHref} variant="primary">
              {nextLabel}
            </ActionButton>
          )}
          {secondaryHref && secondaryLabel && (
            <ActionButton href={secondaryHref} variant="secondary">
              {secondaryLabel}
            </ActionButton>
          )}
        </div>
      )}
    </div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/PrincipleDetail.tsx
git commit -m "feat: add PrincipleDetail layout component"
```

---

## Task 9: Home Page (Screens 1 & 5)

**Files:**
- Create: `components/HomeContent.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create HomeContent (client component — reads query param)**

```tsx
// components/HomeContent.tsx
'use client'

import { useSearchParams } from 'next/navigation'
import { homeContent } from '@/lib/content'
import InstructionCallout from '@/components/InstructionCallout'
import PrincipleCard from '@/components/PrincipleCard'

export default function HomeContent() {
  const searchParams = useSearchParams()
  const from = searchParams.get('from')
  const instruction =
    from === 'behavior' ? homeContent.revisitedInstruction : homeContent.defaultInstruction

  return (
    <div className="space-y-6">
      <InstructionCallout text={instruction} />

      <p className="text-sm leading-relaxed text-text-muted">{homeContent.bodyText}</p>

      <div className="grid gap-4 sm:grid-cols-2">
        {homeContent.cards.map((card) => (
          <PrincipleCard key={card.href} label={card.label} href={card.href} />
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Update app/page.tsx**

```tsx
// app/page.tsx
import { Suspense } from 'react'
import PageShell from '@/components/PageShell'
import HomeContent from '@/components/HomeContent'

export default function HomePage() {
  return (
    <PageShell>
      <Suspense fallback={<div className="h-8 animate-pulse rounded bg-surface-border" />}>
        <HomeContent />
      </Suspense>
    </PageShell>
  )
}
```

- [ ] **Step 3: Verify in browser**

```bash
npm run dev
```
Visit http://localhost:3000 — see the title header, instruction callout, body text, and two clickable cards. Visit http://localhost:3000/?from=behavior — instruction text changes to "Mouse over Decision Principles and click it."

- [ ] **Step 4: Commit**

```bash
git add components/HomeContent.tsx app/page.tsx
git commit -m "feat: implement home screen (Screens 1 & 5) with dynamic instruction"
```

---

## Task 10: Behavior Principles List Page (Screen 2)

**Files:**
- Create: `app/behavior/page.tsx`

- [ ] **Step 1: Create behavior list page**

```tsx
// app/behavior/page.tsx
import PageShell from '@/components/PageShell'
import InstructionCallout from '@/components/InstructionCallout'
import PrincipleListItem from '@/components/PrincipleListItem'
import { categories } from '@/lib/content'

export default function BehaviorPage() {
  const category = categories.find((c) => c.slug === 'behavior')!

  return (
    <PageShell>
      <div className="space-y-6">
        <InstructionCallout text={category.listInstruction} />

        <h2 className="text-xl font-semibold text-text-primary">{category.label}</h2>
        <p className="text-sm leading-relaxed text-text-muted">{category.listBodyText}</p>

        <div className="space-y-3">
          {category.principles.map((principle, index) => (
            <PrincipleListItem
              key={principle.id}
              number={index + 1}
              title={principle.title}
              href={`/behavior/${principle.id}`}
            />
          ))}
        </div>
      </div>
    </PageShell>
  )
}
```

- [ ] **Step 2: Verify in browser**

Visit http://localhost:3000/behavior — see instruction, "Behavior Principles" heading, body text, and two clickable list items.

- [ ] **Step 3: Commit**

```bash
git add app/behavior/page.tsx
git commit -m "feat: implement behavior principles list page (Screen 2)"
```

---

## Task 11: Behavior Principle Detail Pages (Screens 3 & 4)

**Files:**
- Create: `app/behavior/[id]/page.tsx`

- [ ] **Step 1: Create behavior detail dynamic route**

```tsx
// app/behavior/[id]/page.tsx
import { notFound } from 'next/navigation'
import PageShell from '@/components/PageShell'
import InstructionCallout from '@/components/InstructionCallout'
import PrincipleDetail from '@/components/PrincipleDetail'
import { categories } from '@/lib/content'

export const dynamicParams = false

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }]
}

interface Props {
  params: { id: string }
}

export default function BehaviorDetailPage({ params }: Props) {
  const category = categories.find((c) => c.slug === 'behavior')!
  const principle = category.principles.find((p) => p.id === params.id)

  if (!principle) notFound()

  const instructionMap: Record<string, string> = {
    '1': 'Read this Behavioral Principle and its details below.',
    '2': 'Read this Behavioral Principle and its details below.',
  }

  return (
    <PageShell>
      <div className="space-y-2">
        <InstructionCallout text={instructionMap[params.id] ?? ''} />
        <p className="text-xs font-medium uppercase tracking-wide text-text-muted">
          Behavioral Principle {params.id} of {category.principles.length}
        </p>
      </div>
      <div className="mt-4">
        <PrincipleDetail
          title={principle.title}
          body={principle.body}
          accountable={principle.accountable}
          measurement={principle.measurement}
          nextHref={principle.nextHref}
          nextLabel={principle.nextLabel}
          secondaryHref={principle.secondaryHref}
          secondaryLabel={principle.secondaryLabel}
        />
      </div>
    </PageShell>
  )
}
```

- [ ] **Step 2: Verify in browser**

Visit http://localhost:3000/behavior/1 — see Screen 3 (Suzanne Figueroa, "Bring up possible problems early"). Visit http://localhost:3000/behavior/2 — see Screen 4 (Samuel Bass, "Back to Principles Tabs" button). Click "Back to Principles Tabs" — lands on `/?from=behavior` with updated instruction text.

- [ ] **Step 3: Commit**

```bash
git add app/behavior/
git commit -m "feat: implement behavior principle detail pages (Screens 3 & 4)"
```

---

## Task 12: Decision Principles List Page (Screen 6)

**Files:**
- Create: `app/decision/page.tsx`

- [ ] **Step 1: Create decision list page**

```tsx
// app/decision/page.tsx
import PageShell from '@/components/PageShell'
import InstructionCallout from '@/components/InstructionCallout'
import PrincipleListItem from '@/components/PrincipleListItem'
import { categories } from '@/lib/content'

export default function DecisionPage() {
  const category = categories.find((c) => c.slug === 'decision')!

  return (
    <PageShell>
      <div className="space-y-6">
        <InstructionCallout text={category.listInstruction} />

        <h2 className="text-xl font-semibold text-text-primary">{category.label}</h2>
        <p className="text-sm leading-relaxed text-text-muted">{category.listBodyText}</p>

        <div className="space-y-3">
          {category.principles.map((principle, index) => (
            <PrincipleListItem
              key={principle.id}
              number={index + 1}
              title={principle.title}
              href={`/decision/${principle.id}`}
            />
          ))}
        </div>
      </div>
    </PageShell>
  )
}
```

- [ ] **Step 2: Verify in browser**

Visit http://localhost:3000/decision — see instruction, "Decision Principles" heading, body text, two list items.

- [ ] **Step 3: Commit**

```bash
git add app/decision/page.tsx
git commit -m "feat: implement decision principles list page (Screen 6)"
```

---

## Task 13: Decision Principle Detail Pages (Screens 7 & 8)

**Files:**
- Create: `app/decision/[id]/page.tsx`

- [ ] **Step 1: Create decision detail dynamic route**

```tsx
// app/decision/[id]/page.tsx
import { notFound } from 'next/navigation'
import PageShell from '@/components/PageShell'
import InstructionCallout from '@/components/InstructionCallout'
import PrincipleDetail from '@/components/PrincipleDetail'
import { categories } from '@/lib/content'

export const dynamicParams = false

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }]
}

interface Props {
  params: { id: string }
}

export default function DecisionDetailPage({ params }: Props) {
  const category = categories.find((c) => c.slug === 'decision')!
  const principle = category.principles.find((p) => p.id === params.id)

  if (!principle) notFound()

  const instructionMap: Record<string, string> = {
    '1': 'Read this Decision Principle and its details below.',
    '2': 'Read this Decision Principle and use the buttons below when done.',
  }

  return (
    <PageShell>
      <div className="space-y-2">
        <InstructionCallout text={instructionMap[params.id] ?? ''} />
        <p className="text-xs font-medium uppercase tracking-wide text-text-muted">
          Decision Principle {params.id} of {category.principles.length}
        </p>
      </div>
      <div className="mt-4">
        <PrincipleDetail
          title={principle.title}
          body={principle.body}
          accountable={principle.accountable}
          measurement={principle.measurement}
          nextHref={principle.nextHref}
          nextLabel={principle.nextLabel}
          secondaryHref={principle.secondaryHref}
          secondaryLabel={principle.secondaryLabel}
        />
      </div>
    </PageShell>
  )
}
```

- [ ] **Step 2: Verify in browser**

Visit http://localhost:3000/decision/1 — see Screen 7 (Nancy Blake, "Next Decision Principle" button). Visit http://localhost:3000/decision/2 — see Screen 8 (two buttons: "End Session" → /goodbye, "Back to Principles Tab" → /?from=behavior).

- [ ] **Step 3: Commit**

```bash
git add app/decision/
git commit -m "feat: implement decision principle detail pages (Screens 7 & 8)"
```

---

## Task 14: Goodbye Page (Screen 9)

**Files:**
- Create: `app/goodbye/page.tsx`

- [ ] **Step 1: Create goodbye page**

```tsx
// app/goodbye/page.tsx
import PageShell from '@/components/PageShell'

export default function GoodbyePage() {
  return (
    <PageShell>
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="text-6xl" role="img" aria-label="Thumbs up">
          👍
        </div>
        <h2 className="mt-6 text-2xl font-semibold text-text-primary">Goodbye</h2>
        <p className="mt-2 text-sm text-text-muted">
          You have completed the COS tutorial. Thank you.
        </p>
      </div>
    </PageShell>
  )
}
```

- [ ] **Step 2: Verify in browser**

Visit http://localhost:3000/goodbye — see thumbs up, "Goodbye" heading, and thank you message.

- [ ] **Step 3: Commit**

```bash
git add app/goodbye/page.tsx
git commit -m "feat: implement goodbye screen (Screen 9)"
```

---

## Task 15: End-to-End Navigation Tests

**Files:**
- Create: `playwright.config.ts`
- Create: `tests/e2e/tutorial-flow.spec.ts`

- [ ] **Step 1: Create playwright.config.ts**

```typescript
// playwright.config.ts
import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  retries: 0,
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile', use: { ...devices['Pixel 5'] } },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: true,
  },
})
```

- [ ] **Step 2: Add e2e test script to package.json**

```json
"test:e2e": "playwright test"
```

- [ ] **Step 3: Write the full tutorial flow smoke test**

```typescript
// tests/e2e/tutorial-flow.spec.ts
import { test, expect } from '@playwright/test'

test('full tutorial flow: behavior path then decision path', async ({ page }) => {
  // Screen 1 — Home
  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'Our R&D Team Culture' })).toBeVisible()
  await expect(page.getByText('Mouse over Behavioral Principles and click it.')).toBeVisible()
  await expect(page.getByRole('link', { name: 'Behavior Principles' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Decision Principles' })).toBeVisible()

  // Screen 2 — Behavior list
  await page.getByRole('link', { name: 'Behavior Principles' }).click()
  await expect(page).toHaveURL('/behavior')
  await expect(page.getByText('Behavior Principles')).toBeVisible()
  await expect(page.getByText('Bring up possible problems early')).toBeVisible()
  await expect(page.getByText('If you see someone stuck')).toBeVisible()

  // Screen 3 — BP1 detail
  await page.getByText('Bring up possible problems early').click()
  await expect(page).toHaveURL('/behavior/1')
  await expect(page.getByText('Suzanne Figueroa, Senior Developer')).toBeVisible()
  await expect(page.getByRole('link', { name: 'Next Behavioral Principle' })).toBeVisible()

  // Screen 4 — BP2 detail
  await page.getByRole('link', { name: 'Next Behavioral Principle' }).click()
  await expect(page).toHaveURL('/behavior/2')
  await expect(page.getByText('Samuel Bass, Database Administrator')).toBeVisible()
  await expect(page.getByRole('link', { name: 'Back to Principles Tabs' })).toBeVisible()

  // Screen 5 — Home revisited
  await page.getByRole('link', { name: 'Back to Principles Tabs' }).click()
  await expect(page).toHaveURL('/?from=behavior')
  await expect(page.getByText('Mouse over Decision Principles and click it.')).toBeVisible()

  // Screen 6 — Decision list
  await page.getByRole('link', { name: 'Decision Principles' }).click()
  await expect(page).toHaveURL('/decision')
  await expect(page.getByText('Decision Principles')).toBeVisible()
  await expect(page.getByText('Document what was decided')).toBeVisible()
  await expect(page.getByText('We seek input from all impacted stakeholders')).toBeVisible()

  // Screen 7 — DP1 detail
  await page.getByText('Document what was decided').click()
  await expect(page).toHaveURL('/decision/1')
  await expect(page.getByText('Nancy Blake, Team Assistant')).toBeVisible()
  await expect(page.getByRole('link', { name: 'Next Decision Principle' })).toBeVisible()

  // Screen 8 — DP2 detail
  await page.getByRole('link', { name: 'Next Decision Principle' }).click()
  await expect(page).toHaveURL('/decision/2')
  await expect(page.getByRole('link', { name: 'End Session' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Back to Principles Tab' })).toBeVisible()

  // Screen 9 — Goodbye
  await page.getByRole('link', { name: 'End Session' }).click()
  await expect(page).toHaveURL('/goodbye')
  await expect(page.getByText('Goodbye')).toBeVisible()
})

test('direct path: decision first', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: 'Decision Principles' }).click()
  await expect(page).toHaveURL('/decision')
  await page.getByText('Document what was decided').click()
  await expect(page).toHaveURL('/decision/1')
})

test('Screen 5 back-to-tabs from DP2', async ({ page }) => {
  await page.goto('/decision/2')
  await page.getByRole('link', { name: 'Back to Principles Tab' }).click()
  await expect(page).toHaveURL('/?from=behavior')
  await expect(page.getByText('Mouse over Decision Principles and click it.')).toBeVisible()
})

test('invalid behavior id returns 404', async ({ page }) => {
  const response = await page.goto('/behavior/99')
  expect(response?.status()).toBe(404)
})

test('invalid decision id returns 404', async ({ page }) => {
  const response = await page.goto('/decision/99')
  expect(response?.status()).toBe(404)
})
```

- [ ] **Step 4: Run e2e tests**

```bash
npm run test:e2e
```
Expected: All 5 tests pass on both chromium and mobile. If any fail, check navigation hrefs in `lib/content.ts` and page files.

- [ ] **Step 5: Commit**

```bash
git add playwright.config.ts tests/e2e/ package.json
git commit -m "test: add Playwright e2e smoke tests for full 9-screen tutorial flow"
```

---

## Task 16: Final Polish — Mobile Check + next.config

- [ ] **Step 1: Verify mobile layout**

Open http://localhost:3000 in browser DevTools → toggle mobile view (375px width). Check all 9 screens:
- Cards stack vertically on mobile (already handled by `sm:grid-cols-2`)
- Text is readable at `text-sm`
- Buttons are touch-friendly (min 44px tap target — `py-2.5 px-5` on ActionButton achieves this)
- No horizontal overflow

- [ ] **Step 2: Check next.config.ts is minimal**

The default `next.config.ts` from `create-next-app` is fine for Vercel deployment. Do NOT add `output: 'export'` — Vercel handles the build natively. Confirm the file looks like:

```typescript
// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {}

export default nextConfig
```

- [ ] **Step 3: Verify production build succeeds**

```bash
npm run build
```
Expected: Build completes with no errors. All routes shown as static (○) in the build output.

- [ ] **Step 4: Commit**

```bash
git add .
git commit -m "chore: verify production build and mobile layout"
```

---

## Task 17: Deploy to Vercel

- [ ] **Step 1: Push to GitHub**

Create a new GitHub repository named `COSexample` and push:
```bash
git remote add origin https://github.com/<username>/COSexample.git
git push -u origin main
```

- [ ] **Step 2: Connect to Vercel**

1. Go to vercel.com → New Project → Import the `COSexample` repository
2. Framework preset: **Next.js** (auto-detected)
3. Build command: `npm run build` (default)
4. Output directory: `.next` (default)
5. No environment variables needed
6. Click **Deploy**

- [ ] **Step 3: Verify deployment**

Visit the Vercel-provided `*.vercel.app` URL. Walk through all 9 screens manually. Check mobile view on phone.

- [ ] **Step 4: Note domain setup for later**

The client domain `COSexample.com` can be attached via Vercel Dashboard → Project → Settings → Domains when ready. No code changes needed.

---

## Verification Checklist

Run this manually before calling the project done:

| Check | How to verify |
|-------|---------------|
| All 9 screens render | Walk the full flow in the browser |
| Screen 5 shows updated instruction | Navigate to `/?from=behavior` — verify "Mouse over Decision Principles" text |
| Hover states on all clickable elements | Mouse over every card, list item, and button — see background/border change |
| Smooth transitions between screens | Navigate between any two pages — 200ms fade should be visible but quick |
| Mobile layout works | DevTools mobile (375px) — no overflow, stacked cards, readable text |
| All buttons navigate correctly | Test every button/link in every screen |
| Title on every screen | "Our R&D Team Culture" in header on all 9 pages |
| Production build clean | `npm run build` exits 0 with no errors or warnings |
| Unit tests pass | `npm test` — all 8 content integrity tests green |
| E2E tests pass | `npm run test:e2e` — all 5 flow tests green on desktop + mobile |

---

## Open Questions Before Coding

None remaining — all architectural decisions are resolved. The only future action is attaching the custom domain `COSexample.com` to Vercel after deployment, which requires no code changes.
