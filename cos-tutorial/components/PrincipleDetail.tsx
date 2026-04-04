import ActionButton from "@/components/ActionButton";

interface PrincipleDetailProps {
  title: string;
  body: string;
  accountable: string;
  measurement: string;
  nextHref?: string;
  nextLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  nextGuideTargetId?: string;
  secondaryGuideTargetId?: string;
}

function DetailPanel({
  label,
  children,
  icon,
}: {
  label: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-surface-border bg-surface-card p-5 shadow-[0_1px_2px_rgba(17,24,39,0.04)] sm:p-6">
      <div className="flex items-center gap-2">
        {icon ? (
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-surface-page text-accent-strong ring-1 ring-surface-border">
            {icon}
          </span>
        ) : null}
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-text-muted">
          {label}
        </p>
      </div>
      <div className="mt-3">{children}</div>
    </section>
  );
}

export default function PrincipleDetail({
  title,
  body,
  accountable,
  measurement,
  nextHref,
  nextLabel,
  secondaryHref,
  secondaryLabel,
  nextGuideTargetId,
  secondaryGuideTargetId,
}: PrincipleDetailProps) {
  return (
    <div className="grid gap-5 xl:grid-cols-[minmax(0,1.45fr)_19rem]">
      <div className="space-y-4 sm:space-y-5">
        <DetailPanel
          label="Action / Initiative"
          icon={
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-none stroke-current"
              aria-hidden="true"
            >
              <path
                d="M6 12h12M12 6l6 6-6 6"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        >
          <p className="text-sm leading-7 text-text-primary">{body}</p>
        </DetailPanel>

        {(nextHref || secondaryHref) && (
          <div className="flex flex-wrap gap-3 pt-2">
            {nextHref && nextLabel ? (
              <ActionButton href={nextHref} guideTargetId={nextGuideTargetId}>
                {nextLabel}
              </ActionButton>
            ) : null}
            {secondaryHref && secondaryLabel ? (
              <ActionButton
                href={secondaryHref}
                variant="secondary"
                guideTargetId={secondaryGuideTargetId}
              >
                {secondaryLabel}
              </ActionButton>
            ) : null}
          </div>
        )}
      </div>

      <div className="space-y-4">
        <DetailPanel
          label="Accountable"
          icon={
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-none stroke-current"
              aria-hidden="true"
            >
              <path
                d="M12 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM6 19.5c1.1-2.3 3.3-3.5 6-3.5s4.9 1.2 6 3.5"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        >
          <p className="text-sm font-medium leading-6 text-text-primary">
            {accountable}
          </p>
        </DetailPanel>

        <DetailPanel
          label="Measurement"
          icon={
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-none stroke-current"
              aria-hidden="true"
            >
              <path
                d="M7 7h10M7 12h6M7 17h10"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <circle cx="17" cy="12" r="2" strokeWidth="1.8" />
            </svg>
          }
        >
          <p className="text-sm leading-6 text-text-primary">{measurement}</p>
        </DetailPanel>
      </div>
    </div>
  );
}
