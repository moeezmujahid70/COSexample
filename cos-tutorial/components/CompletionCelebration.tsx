"use client";

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
    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-callout-border bg-callout-bg text-accent-strong shadow-[0_14px_26px_rgba(37,99,235,0.12)]">
      <span className="text-4xl" role="img" aria-label="Thumbs up">
        👍
      </span>
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
      </motion.div>
    </motion.section>
  );
}
