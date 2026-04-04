import ActionButton from "@/components/ActionButton";

interface PrincipleDetailProps {
  body: string;
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
    <section className="rounded-xl border border-surface-border bg-surface-card p-4 shadow-[0_1px_2px_rgba(17,24,39,0.04)] sm:p-5">
      <div className="flex items-center gap-2">
        {icon ? (
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-surface-page text-text-muted ring-1 ring-surface-border">
            {icon}
          </span>
        ) : null}
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-text-muted">
          {label}
        </p>
      </div>
      <div className="mt-3">{children}</div>
    </section>
  );
}

export default function PrincipleDetail({
  body,
  nextHref,
  nextLabel,
  secondaryHref,
  secondaryLabel,
  nextGuideTargetId,
  secondaryGuideTargetId,
}: PrincipleDetailProps) {
  return (
    <div className="grid gap-4 xl:grid-cols-[minmax(0,1.5fr)_17rem]">
      <div className="space-y-4">
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
          <p className="text-[0.97rem] leading-8 text-text-primary">{body}</p>
        </DetailPanel>

        {(nextHref || secondaryHref) && (
          <div className="flex flex-wrap gap-3 pt-1">
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

    </div>
  );
}
