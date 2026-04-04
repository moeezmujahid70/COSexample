"use client";

import Link from "next/link";

export default function CompletionCelebration({
  title,
}: {
  title: string;
}) {
  return (
    <section className="rounded-xl border border-surface-border bg-surface-card px-6 py-8 shadow-[0_1px_2px_rgba(17,24,39,0.04)]">
      <div className="mx-auto max-w-2xl">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-success-border bg-success-subtle text-success-hover">
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6 fill-none stroke-current"
            aria-hidden="true"
          >
            <path
              d="M7 11.5l3.5 3.5L17.5 8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-text-muted">
          Session Complete
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-text-primary">
          {title}
        </h2>
        <p className="mt-2 max-w-lg text-sm leading-6 text-text-muted">
          You have completed the review flow for this workspace.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-success px-4 py-2 text-sm font-semibold text-white transition-colors duration-150 hover:bg-success-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-success focus-visible:ring-offset-2"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" aria-hidden="true">
              <path d="M1 4v6h6M23 20v-6h-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10M23 14l-4.64 4.36A9 9 0 0 1 3.51 15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Run tutorial again
          </Link>
          <Link
            href="/behavior"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-surface-border bg-surface-page px-4 py-2 text-sm font-semibold text-text-primary transition-colors duration-150 hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            Review behavior principles
          </Link>
        </div>
      </div>
    </section>
  );
}
