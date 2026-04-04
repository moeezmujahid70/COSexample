import Link from "next/link";
import PrinciplePopups from "@/components/PrinciplePopups";

interface PrincipleListItemProps {
  number: number;
  title: string;
  href: string;
  accountable: string;
  measurement: string;
  employeeFeedback: string[];
  guideTargetId?: string;
}

function PrincipleIcon({ number }: { number: number }) {
  if (number === 1) {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" aria-hidden="true">
        <path
          d="M5 3h14v13l-7 4-7-4V3Z"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M12 8v4M12 15h.01" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" aria-hidden="true">
      <path
        d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="7" r="4" strokeWidth="1.8" />
      <path
        d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PrincipleListItem({
  number,
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
        <div className="flex items-start gap-4 p-4 sm:p-5">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-surface-border bg-surface-page text-text-muted transition-colors duration-150 group-hover:border-accent group-hover:text-accent">
          <PrincipleIcon number={number} />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold leading-6 tracking-tight text-text-primary transition-colors duration-150 group-hover:text-accent sm:text-lg">
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
