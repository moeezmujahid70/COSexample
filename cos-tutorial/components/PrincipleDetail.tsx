import ActionButton from "@/components/ActionButton";
import LogoutButton from "@/components/LogoutButton";

interface PrincipleDetailProps {
  body: string;
  actionEyebrow?: string;
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
  actionEyebrow,
  nextHref,
  nextLabel,
  secondaryHref,
  secondaryLabel,
  nextGuideTargetId,
  secondaryGuideTargetId,
}: PrincipleDetailProps) {
  const showLogoutButton = nextHref !== "/goodbye";

  return (
    <div className="space-y-4">
      <DetailPanel>
        {actionEyebrow ? (
          <p className="mb-4 text-center text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-accent-strong">
            {actionEyebrow}
          </p>
        ) : null}
        <p className="text-[0.98rem] leading-8 text-text-primary sm:text-[1.05rem] sm:leading-9">
          {body}
        </p>
      </DetailPanel>

      {(nextHref || secondaryHref) && (
        <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:justify-end">
          {secondaryHref && secondaryLabel ? (
            <ActionButton
              href={secondaryHref}
              variant="secondary"
              guideTargetId={secondaryGuideTargetId}
            >
              {secondaryLabel}
            </ActionButton>
          ) : null}
          {nextHref && nextLabel ? (
            <ActionButton href={nextHref} guideTargetId={nextGuideTargetId}>
              {nextLabel}
            </ActionButton>
          ) : null}
          {showLogoutButton ? <LogoutButton /> : null}
        </div>
      )}
    </div>
  );
}
