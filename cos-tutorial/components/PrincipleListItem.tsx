import Image from "next/image";
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

export default function PrincipleListItem({
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
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center">
          <Image
            src="/assets/icons/search-focus-icon-transparent.svg"
            alt=""
            width={30}
            height={30}
            className="h-8 w-8"
            aria-hidden="true"
          />
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
