# COSexample

This repository contains the working materials and implementation for an interactive Culture Operating System tutorial site.

The main product in this repo is [`cos-tutorial`](./cos-tutorial), a Next.js application that teaches an R&D team culture model through a fixed guided flow.

## Repository Overview

This repo is not just the application source. It also includes project context and specification documents used to define the product.

Top-level contents:

- [`cos-tutorial`](./cos-tutorial)
  The actual web application.
- [`COS_project_spec.md`](./COS_project_spec.md)
  Product specification describing the 9-screen tutorial flow, content, and UI expectations.
- [`PROJECT_CONTEXT.md`](./PROJECT_CONTEXT.md)
  Implementation context, architecture assumptions, design tokens, and testing expectations.
- [`CLAUDE.md`](./CLAUDE.md)
  Project-specific working notes and implementation guidance.
- [`LICENSE`](./LICENSE)
  Repository license file.

## Main Application

The app lives in [`cos-tutorial`](./cos-tutorial).

It is a:

- Next.js 14 App Router app
- TypeScript codebase
- Tailwind CSS UI
- Framer Motion-enhanced guided tutorial

The application currently covers:

1. Home screen
2. Behavior principles list
3. Behavior principle details
4. Home revisit state
5. Decision principles list
6. Decision principle details
7. Completion screen

For app-specific development setup, commands, route structure, testing, and extension guidance, see [`cos-tutorial/README.md`](./cos-tutorial/README.md).

## Product Goal

The product is a small, mobile-first responsive tutorial website that explains a workplace Culture Operating System through a fixed set of screens and interactions.

Key characteristics:

- hardcoded content
- no backend or CMS
- clear guided navigation
- enterprise-style, text-first UI
- designed for both mobile and desktop

## Screen Flow

The intended user flow is:

1. `/` overview
2. `/behavior`
3. `/behavior/1`
4. `/behavior/2`
5. `/?from=behavior`
6. `/decision`
7. `/decision/1`
8. `/decision/2`
9. `/goodbye`

The detailed screen definitions and copy live in [`COS_project_spec.md`](./COS_project_spec.md).

## Development

If you want to work on the app:

```bash
cd cos-tutorial
npm install
npm run dev
```

Then open `http://localhost:3000`.

Useful app commands:

- `npm run dev`
- `npm run lint`
- `npm run test`
- `npm run test:e2e`
- `npm run build`

## Notes

- The repository root is primarily for project coordination and documentation.
- The deployable product is the `cos-tutorial` app.
- Content and route-flow assumptions are intentionally centralized to keep the UI components thin.

## License

See [`LICENSE`](./LICENSE).
