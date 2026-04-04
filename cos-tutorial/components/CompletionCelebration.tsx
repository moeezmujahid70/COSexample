"use client";

import Link from "next/link";

const confettiPieces = [
  { left: "10%", color: "#10B981", x: "-18px", rotate: "-120deg", delay: "0.02s" },
  { left: "18%", color: "#A7F3D0", x: "20px", rotate: "160deg", delay: "0.08s" },
  { left: "31%", color: "#818CF8", x: "-10px", rotate: "-95deg", delay: "0.15s" },
  { left: "47%", color: "#10B981", x: "14px", rotate: "180deg", delay: "0.22s" },
  { left: "63%", color: "#C4B5FD", x: "-20px", rotate: "-140deg", delay: "0.1s" },
  { left: "79%", color: "#34D399", x: "12px", rotate: "120deg", delay: "0.28s" },
  { left: "88%", color: "#818CF8", x: "-12px", rotate: "-170deg", delay: "0.18s" },
];

export default function CompletionCelebration({
  title,
}: {
  title: string;
}) {
  return (
    <section className="relative overflow-hidden rounded-[1.75rem] border border-surface-border bg-[linear-gradient(180deg,#ffffff_0%,#f6fffb_100%)] px-6 py-10 shadow-[0_18px_40px_rgba(15,23,42,0.08)] sm:px-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40">
        {confettiPieces.map((piece, index) => (
          <span
            key={index}
            className="completion-confetti absolute top-4 block h-4 w-2 rounded-full"
            style={
              {
                left: piece.left,
                backgroundColor: piece.color,
                "--confetti-x": piece.x,
                "--confetti-rotate": piece.rotate,
                "--confetti-delay": piece.delay,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-2xl text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-success-border bg-success-subtle text-success-hover shadow-[0_10px_24px_rgba(16,185,129,0.16)]">
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
        <p className="mt-5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-accent-strong">
          Session Complete
        </p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-text-primary sm:text-[3.25rem]">
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-text-muted sm:text-[0.95rem]">
          The review flow is complete. You can restart the walkthrough at any time.
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-success px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(16,185,129,0.24)] transition-colors duration-150 hover:bg-success-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-success focus-visible:ring-offset-2"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" aria-hidden="true">
              <path d="M1 4v6h6M23 20v-6h-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10M23 14l-4.64 4.36A9 9 0 0 1 3.51 15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Run again
          </Link>
        </div>
      </div>
    </section>
  );
}
