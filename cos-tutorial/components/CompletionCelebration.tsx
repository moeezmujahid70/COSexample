"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const confettiPieces = [
  { left: "10%", color: "#2563EB", x: "-18px", rotate: "-120deg", delay: "0.02s" },
  { left: "20%", color: "#BFDBFE", x: "22px", rotate: "160deg", delay: "0.15s" },
  { left: "32%", color: "#E7D9C2", x: "-10px", rotate: "-90deg", delay: "0.08s" },
  { left: "48%", color: "#2563EB", x: "16px", rotate: "180deg", delay: "0.22s" },
  { left: "60%", color: "#F7F3EC", x: "-22px", rotate: "-140deg", delay: "0.12s" },
  { left: "74%", color: "#BFDBFE", x: "10px", rotate: "120deg", delay: "0.28s" },
  { left: "86%", color: "#2563EB", x: "-14px", rotate: "-170deg", delay: "0.18s" },
];

function CompletionBadge() {
  return (
    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-callout-border bg-callout-bg text-accent shadow-[0_14px_26px_rgba(37,99,235,0.12)]">
      <svg
        viewBox="0 0 24 24"
        className="h-9 w-9 fill-none stroke-current"
        aria-hidden="true"
      >
        <path
          d="M7 11.5l3.5 3.5L17.5 8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="9" strokeWidth="1.8" />
      </svg>
    </div>
  );
}

export default function CompletionCelebration({
  title,
}: {
  title: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="relative overflow-hidden rounded-[2rem] border border-surface-border bg-surface-card px-6 py-12 text-center shadow-[0_18px_36px_rgba(15,23,42,0.07)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-44">
        {confettiPieces.map((piece, index) => (
          <span
            key={index}
            className="completion-confetti absolute top-3 block h-5 w-2 rounded-full"
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

      <motion.div
        initial={shouldReduceMotion ? false : { scale: 0.92, opacity: 0 }}
        animate={shouldReduceMotion ? undefined : { scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.08, ease: "easeOut" }}
        className="relative mx-auto flex w-full max-w-lg flex-col items-center"
      >
        <CompletionBadge />
        <p className="mt-6 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-text-muted">
          Session Complete
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-text-primary">
          {title}
        </h2>
        <p className="mt-3 max-w-md text-sm leading-7 text-text-muted">
          You have completed the COS tutorial. Thank you.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(37,99,235,0.35)] transition-all duration-200 hover:bg-accent-hover hover:shadow-[0_6px_20px_rgba(37,99,235,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" aria-hidden="true">
              <path d="M1 4v6h6M23 20v-6h-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10M23 14l-4.64 4.36A9 9 0 0 1 3.51 15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Run tutorial again
          </Link>
          <Link
            href="/behavior"
            className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface-card px-6 py-2.5 text-sm font-semibold text-text-primary transition-all duration-200 hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            Review behavior principles
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
}
