# COS Tutorial

`cos-tutorial` is a small guided learning app built with Next.js 14, React 18, and Tailwind CSS. It walks a user through a Culture Operating System using two tracks:

- Behavior principles
- Decision principles

The app is structured as a short, linear tutorial with a home screen, category overviews, principle detail pages, and a completion screen.

## What This Project Does

The tutorial is designed to teach team culture concepts through a constrained path rather than a free-form content site. A user:

1. Starts on the overview page.
2. Chooses a principle track.
3. Opens principle details one at a time.
4. Uses guided calls to action to continue through the flow.
5. Ends on a completion screen.

All tutorial copy and flow metadata live in a central content module so the route components remain thin.

## Stack

- Next.js 14 App Router
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Vitest + Testing Library
- Playwright

## Project Structure

```text
cos-tutorial/
├── app/
│   ├── page.tsx
│   ├── behavior/page.tsx
│   ├── behavior/[id]/page.tsx
│   ├── decision/page.tsx
│   ├── decision/[id]/page.tsx
│   ├── goodbye/page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
├── lib/
│   └── content.ts
├── public/
├── tests/
│   ├── unit/
│   └── e2e/
└── package.json
```

## Main Routes

- `/`
  Tutorial overview page with the two entry cards.
- `/behavior`
  List page for behavior principles.
- `/behavior/[id]`
  Detail page for an individual behavior principle.
- `/decision`
  List page for decision principles.
- `/decision/[id]`
  Detail page for an individual decision principle.
- `/goodbye`
  Completion screen for the tutorial.

## Content Model

The source of truth for the tutorial lives in [`lib/content.ts`](./lib/content.ts).

This file contains:

- `siteTitle`
  Shared title text used across layout components.
- `homeContent`
  Home page description, prompt text, and entry cards.
- `categories`
  The behavior and decision tracks, including their list-page messaging and principle arrays.
- `goodbyeContent`
  Completion screen content.
- `getCategory()` and `getPrinciple()`
  Lookup helpers used by route files.

Each principle currently stores:

- `id`
- `title`
- `body`
- `accountable`
- `measurement`
- `nextHref`
- `nextLabel`
- `secondaryHref`
- `secondaryLabel`

If you want to add more tutorial steps, start in `lib/content.ts` and then update any route-level assumptions about the allowed IDs.

## Component Responsibilities

- `PageShell.tsx`
  Shared outer layout, background treatment, and sidebar placement.
- `SidebarRail.tsx`
  Section progress and cross-route navigation.
- `PageHeader.tsx`
  Per-page heading and contextual help area.
- `SectionHero.tsx`
  Top-of-page summary block with supporting illustration.
- `PrincipleListItem.tsx`
  Clickable row used on category overview pages.
- `PrincipleDetail.tsx`
  Principle body, accountable owner, measurement, and action buttons.
- `CompletionCelebration.tsx`
  Final completion screen with celebratory treatment and restart links.
- `InstructionCallout.tsx`, `ActionButton.tsx`, `PrincipleCard.tsx`
  Reusable supporting UI pieces for guided interactions.

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev`
  Start the Next.js development server.
- `npm run build`
  Create a production build.
- `npm run start`
  Serve the production build.
- `npm run lint`
  Run Next.js ESLint checks.
- `npm run test`
  Run the Vitest suite once.
- `npm run test:watch`
  Run Vitest in watch mode.
- `npm run test:e2e`
  Run the Playwright suite.

## Testing

Unit tests live in [`tests/unit`](./tests/unit) and currently focus on content helpers.

End-to-end tests live in [`tests/e2e`](./tests/e2e) and cover the guided tutorial flow in the browser.

Recommended verification sequence before shipping:

```bash
npm run lint
npm run test
npm run test:e2e
```

If you want a production confidence check as well, run:

```bash
npm run build
```

## How To Extend The Tutorial

### Add or edit principle content

Update the relevant objects in [`lib/content.ts`](./lib/content.ts).

### Add a new principle within an existing track

1. Add the new principle object to the correct category in `lib/content.ts`.
2. Update any hard-coded `generateStaticParams()` values in the route files.
3. Update any `instructionMap` entries in the detail routes.
4. Check that `nextHref` and `secondaryHref` still form the intended tutorial path.

### Add a new track

1. Extend the `CategorySlug` type.
2. Add the new category entry in `lib/content.ts`.
3. Create list and detail routes under `app/`.
4. Update `SidebarRail.tsx` so the new section appears in progress navigation.
5. Add coverage in unit and e2e tests.

## Design Notes

The UI is intentionally tutorial-like rather than CMS-like:

- prominent page headers
- guided action buttons
- strong section framing
- lightweight motion for progress and completion
- short, fixed route tree

When making UI changes, preserve the sense that the app is guiding the user through a sequence.

## Known Operational Notes

- The app uses static route params for principle detail pages.
- Detail pages currently assume principle IDs of `"1"` and `"2"` in route guards and `generateStaticParams()`.
- Content growth beyond those IDs requires code updates, not just data updates.

## License

See the repository root [`LICENSE`](../LICENSE).
