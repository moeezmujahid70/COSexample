"use client";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  helpText: string;
  helpTargetId?: string;
}

function InfoIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-none stroke-current"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" strokeWidth="1.8" />
      <path d="M12 10v5" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="7.25" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function StepIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-none stroke-current"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  helpText,
  helpTargetId,
}: PageHeaderProps) {
  const flashTarget = () => {
    if (!helpTargetId) {
      return;
    }

    const target = document.querySelector<HTMLElement>(
      `[data-guide-target="${helpTargetId}"]`,
    );

    if (!target) {
      return;
    }

    target.classList.remove("guide-target-flash");
    // Force a reflow so repeated interactions restart the animation.
    void target.offsetWidth;
    target.classList.add("guide-target-flash");
  };

  const clearTarget = () => {
    if (!helpTargetId) {
      return;
    }

    const target = document.querySelector<HTMLElement>(
      `[data-guide-target="${helpTargetId}"]`,
    );

    target?.classList.remove("guide-target-flash");
  };

  return (
    <section className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_16.5rem] lg:items-stretch xl:grid-cols-[minmax(0,1fr)_17.5rem]">
      <div className="rounded-[1.45rem] border border-surface-border bg-surface-card px-5 py-4 shadow-[0_12px_24px_rgba(15,23,42,0.05)] sm:px-6 sm:py-5">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent-strong">
          {eyebrow}
        </p>
        <h2 className="mt-2.5 text-xl font-semibold tracking-tight text-text-primary sm:text-[1.7rem]">
          {title}
        </h2>
        {description ? (
          <p className="mt-2.5 max-w-2xl text-sm leading-6 text-text-muted sm:text-[0.92rem]">
            {description}
          </p>
        ) : null}
      </div>

      <aside
        className="cursor-pointer rounded-[1.3rem] border border-callout-border bg-callout-bg px-3.5 py-3.5 shadow-[0_8px_18px_rgba(37,99,235,0.07)] transition-colors duration-200 hover:bg-white focus-within:bg-white sm:px-4"
        onMouseEnter={flashTarget}
        onMouseLeave={clearTarget}
        onClick={flashTarget}
      >
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white text-accent-strong ring-1 ring-callout-border">
            <InfoIcon />
          </span>
          <div className="min-w-0">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent-strong">
              Recommended Next Step
            </p>
            <p className="mt-1 text-sm leading-5 text-text-primary">{helpText}</p>
            <div className="mt-2 flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-accent-strong">
              <StepIcon />
              <span>Hover to highlight</span>
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
}
