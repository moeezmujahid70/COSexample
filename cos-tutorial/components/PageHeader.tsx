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
    <div className="rounded-xl border border-surface-border bg-surface-card px-5 py-4 shadow-[0_1px_2px_rgba(17,24,39,0.04)]">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-text-muted">
        {eyebrow}
      </p>
      <h1 className="mt-2 text-[1.85rem] font-semibold leading-tight tracking-tight text-text-primary sm:text-[2rem]">
        {title}
      </h1>
      {description ? (
        <p className="mt-2 max-w-3xl text-sm leading-6 text-text-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
