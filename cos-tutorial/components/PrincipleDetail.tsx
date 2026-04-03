import ActionButton from "@/components/ActionButton";
import Image from "next/image";

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
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-surface-border bg-surface-card p-5 shadow-[0_1px_2px_rgba(17,24,39,0.04)] sm:p-6">
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-text-muted">
        {label}
      </p>
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
        <DetailPanel label="Principle">
          <p className="text-xl font-semibold leading-8 tracking-tight text-text-primary">
            {title}
          </p>
        </DetailPanel>

        <DetailPanel label="Action / Initiative">
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
        <section className="overflow-hidden rounded-[1.6rem] border border-surface-border bg-surface-card shadow-[0_14px_30px_rgba(15,23,42,0.06)]">
          <div className="border-b border-surface-border bg-[linear-gradient(135deg,#eff6ff_0%,#f8f9fa_100%)] px-5 py-5">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent-strong">
              Guidance Snapshot
            </p>
            <div className="mt-4">
              <Image
                src="/illustration-decision.svg"
                alt="Abstract illustration representing guided principle review."
                width={240}
                height={180}
                className="h-auto w-full"
              />
            </div>
          </div>
          <div className="px-5 py-5">
            <p className="text-sm leading-6 text-text-primary">
              Review the principle first, then use the action buttons below to continue through the guided sequence.
            </p>
          </div>
        </section>

        <DetailPanel label="Accountable">
          <p className="text-sm font-medium leading-6 text-text-primary">
            {accountable}
          </p>
        </DetailPanel>

        <DetailPanel label="Measurement">
          <p className="text-sm leading-6 text-text-primary">{measurement}</p>
        </DetailPanel>
      </div>
    </div>
  );
}
