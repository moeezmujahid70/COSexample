import PageShell from "@/components/PageShell";
import { goodbyeContent } from "@/lib/content";

export default function GoodbyePage() {
  return (
    <PageShell>
      <section className="flex min-h-[60vh] flex-col items-center justify-center rounded-3xl border border-surface-border bg-surface-card px-6 py-12 text-center shadow-[0_1px_2px_rgba(17,24,39,0.04)]">
        <div
          className="flex h-20 w-20 items-center justify-center rounded-full border border-callout-border bg-callout-bg text-4xl"
          role="img"
          aria-label="Thumbs up"
        >
          {goodbyeContent.icon}
        </div>
        <p className="mt-6 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-text-muted">
          Session Complete
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-text-primary">
          {goodbyeContent.label}
        </h2>
        <p className="mt-3 max-w-md text-sm leading-7 text-text-muted">
          You have completed the COS tutorial. Thank you.
        </p>
      </section>
    </PageShell>
  );
}
