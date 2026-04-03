interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  helpText: string;
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

export default function PageHeader({
  eyebrow,
  title,
  description,
  helpText,
}: PageHeaderProps) {
  return (
    <section className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-start">
      <div className="rounded-[1.6rem] border border-surface-border bg-surface-card px-6 py-5 shadow-[0_14px_28px_rgba(15,23,42,0.06)]">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent-strong">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-text-primary sm:text-[2rem]">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 max-w-2xl text-sm leading-7 text-text-muted sm:text-[0.95rem]">
            {description}
          </p>
        ) : null}
      </div>

      <aside className="rounded-[1.4rem] border border-callout-border bg-callout-bg px-4 py-4 shadow-[0_10px_24px_rgba(37,99,235,0.08)]">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-accent-strong ring-1 ring-callout-border">
            <InfoIcon />
          </span>
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent-strong">
              Current Prompt
            </p>
            <p className="mt-1 text-sm leading-6 text-text-primary">{helpText}</p>
          </div>
        </div>
      </aside>
    </section>
  );
}
