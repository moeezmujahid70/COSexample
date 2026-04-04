import type { CSSProperties } from "react";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function PageHeader({
  eyebrow,
  title,
  description,
}: PageHeaderProps) {
  return (
    <div className="surface-enter mx-auto max-w-4xl rounded-2xl border border-surface-border bg-[linear-gradient(180deg,#ffffff_0%,#f8fbfc_100%)] px-5 py-6 text-center shadow-[0_12px_30px_rgba(15,23,42,0.06)] sm:px-8 sm:py-7" style={{ "--enter-delay": "0.04s" } as CSSProperties}>
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-accent-strong">
        {eyebrow}
      </p>
      <h1 className="mt-3 text-[1.14rem] font-semibold leading-[1.22] tracking-tight text-text-primary sm:mt-4 sm:text-[1.45rem] lg:text-[1.65rem]">
        {title}
      </h1>
      {description ? (
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-text-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
