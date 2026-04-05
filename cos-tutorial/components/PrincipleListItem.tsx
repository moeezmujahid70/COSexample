import Link from "next/link";
import PrinciplePopups from "@/components/PrinciplePopups";

interface PrincipleListItemProps {
  number: number;
  total: number;
  title: string;
  href: string;
  accountable: string;
  measurement: string;
  employeeFeedback: string[];
  guideTargetId?: string;
}

export default function PrincipleListItem({
  number,
  total,
  title,
  href,
  accountable,
  measurement,
  employeeFeedback,
  guideTargetId,
}: PrincipleListItemProps) {
  return (
    <section className="rounded-xl border border-surface-border bg-surface-card shadow-[0_1px_2px_rgba(17,24,39,0.04)]">
      <Link
        href={href}
        data-guide-target={guideTargetId}
        className="group block cursor-pointer rounded-t-xl transition-colors duration-150 hover:bg-surface-page focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-page"
      >
        <div className="flex items-center gap-4 p-4 sm:p-5">
          <div className="min-w-0 flex-1 text-center">
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-accent-strong">
              Principle {number} of {total}
            </p>
            <h3 className="mt-1 text-base font-semibold leading-6 tracking-tight text-text-primary transition-colors duration-150 group-hover:text-accent sm:text-lg">
              {title}
            </h3>
          </div>
          <span className="self-center rounded-md border border-surface-border bg-surface-page px-2 py-1 text-[0.68rem] font-medium text-text-muted">
            Open
          </span>
        </div>
      </Link>
      <div className="border-t border-surface-border px-4 py-4 sm:px-5">
        <PrinciplePopups
          accountable={accountable}
          measurement={measurement}
          employeeFeedback={employeeFeedback}
          compact
        />
      </div>
    </section>
  );
}
