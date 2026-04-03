Execute Task 1 of the COS Tutorial build plan: scaffold the Next.js project.

The plan is at: /Users/moeezmujahid/.claude/plans/imperative-roaming-alpaca.md

Run these steps in order. Announce each step before running it.

**Step 1 — Scaffold Next.js**

Run inside /Users/moeezmujahid/Projects/COSexample/:
```
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir no --import-alias "@/*" --yes
```

Wait for it to complete. If it asks any interactive questions, answer: yes to all defaults.

**Step 2 — Install runtime dependency**

```
npm install framer-motion
```

**Step 3 — Install dev dependencies**

```
npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/jest-dom @playwright/test
```

**Step 4 — Install Playwright browser**

```
npx playwright install chromium
```

**Step 5 — Verify dev server starts**

```
npm run dev
```

Open http://localhost:3000 — confirm the default Next.js page loads. Then stop the server (Ctrl+C).

**Step 6 — Commit scaffold**

The git repo is already initialized and the LICENSE, .gitignore, and COS_project_spec.md are already committed. Stage only the new scaffold files:

```
git add app/ components/ public/ lib/ package.json package-lock.json next.config.ts tsconfig.json tailwind.config.ts postcss.config.mjs next-env.d.ts eslint.config.mjs
git commit -m "feat: scaffold Next.js 14 project with TypeScript, Tailwind, Framer Motion"
```

After committing, tell the user: "Scaffold complete. Ready for Task 2 — Tailwind design tokens."
