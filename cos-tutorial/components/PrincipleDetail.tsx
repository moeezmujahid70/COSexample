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
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl border border-surface-border bg-surface-card p-4 shadow-[0_1px_2px_rgba(17,24,39,0.04)] sm:p-5">
      {children}
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
    <div className="space-y-4">
      <DetailPanel>
        <p className="text-[1.05rem] leading-9 text-text-primary">{body}</p>
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
  );
}
