"use client";

import InstructionCallout from "@/components/InstructionCallout";
import PageHeader from "@/components/PageHeader";
import PrincipleCard from "@/components/PrincipleCard";
import SectionHero from "@/components/SectionHero";
import { homeContent } from "@/lib/content";
import { useSearchParams } from "next/navigation";

export default function HomeContent() {
  const searchParams = useSearchParams();
  const from = searchParams.get("from");
  const instruction =
    from === "behavior"
      ? homeContent.revisitedInstruction
      : homeContent.defaultInstruction;
  const helpTargetId =
    from === "behavior" ? "home-decision-card" : "home-behavior-card";

  return (
    <div className="space-y-5">
      <PageHeader
        eyebrow="Tutorial Overview"
        title="Learn the culture system through guided paths."
        description="Use the left navigation and the recommended step to move through the tutorial deliberately."
        helpText={instruction}
        helpTargetId={helpTargetId}
      />

      <SectionHero
        eyebrow="Culture Framework"
        title="Two principle tracks shape how the team works."
        description={homeContent.bodyText}
        imageSrc="/illustration-overview.svg"
        imageAlt="Abstract workspace illustration showing tutorial overview and navigation panels."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {homeContent.cards.map((card) => (
          <PrincipleCard
            key={card.href}
            label={card.label}
            href={card.href}
            guideTargetId={
              card.href === "/behavior"
                ? "home-behavior-card"
                : "home-decision-card"
            }
          />
        ))}
      </div>

      <section className="rounded-[1.7rem] border border-guide-border bg-guide-bg px-6 py-6 shadow-[0_12px_28px_rgba(120,98,62,0.08)]">
        <div className="grid gap-3 lg:grid-cols-[minmax(0,1.15fr)_repeat(3,minmax(0,0.9fr))]">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent-strong">
              How To Use This
            </p>
            <p className="mt-3 text-sm leading-6 text-text-primary">
              Pick a track, review the principles, and use the guidance prompts to move through the tutorial.
            </p>
          </div>
          <div className="rounded-2xl border border-white/70 bg-white/70 px-4 py-4">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-surface-page text-accent-strong ring-1 ring-surface-border">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-none stroke-current"
                  aria-hidden="true"
                >
                  <path d="M7 12h10M13 8l4 4-4 4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">
              1. Choose a track
              </p>
            </div>
            <p className="mt-2 text-sm leading-6 text-text-primary">
              Start with behavior or jump straight to decision principles.
            </p>
          </div>
          <div className="rounded-2xl border border-white/70 bg-white/70 px-4 py-4">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-surface-page text-accent-strong ring-1 ring-surface-border">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-none stroke-current"
                  aria-hidden="true"
                >
                  <path d="M6.5 12.5l3.2 3.2L17.5 8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">
              2. Follow the path
              </p>
            </div>
            <p className="mt-2 text-sm leading-6 text-text-primary">
              Use the action buttons or the left rail to continue, review, or return.
            </p>
          </div>
          <div className="rounded-2xl border border-white/70 bg-white/70 px-4 py-4">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-surface-page text-accent-strong ring-1 ring-surface-border">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-none stroke-current"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="8" strokeWidth="1.8" />
                  <path d="M12 10v4" strokeWidth="1.8" strokeLinecap="round" />
                  <circle cx="12" cy="7.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">
              3. Watch the prompt
              </p>
            </div>
            <p className="mt-2 text-sm leading-6 text-text-primary">
              The help panel beside the page title always shows the next recommended action.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
