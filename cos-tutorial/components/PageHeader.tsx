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
    <div className="mx-auto max-w-4xl rounded-2xl border border-surface-border bg-[linear-gradient(180deg,#ffffff_0%,#f8fbfc_100%)] px-6 py-7 text-center shadow-[0_12px_30px_rgba(15,23,42,0.06)] sm:px-8">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-accent-strong">
        {eyebrow}
      </p>
      <h1 className="mt-4 text-[1.3rem] font-semibold leading-[1.25] tracking-tight text-text-primary sm:text-[1.45rem] lg:text-[1.65rem]">
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
