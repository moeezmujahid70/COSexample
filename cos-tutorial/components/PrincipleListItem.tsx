import Link from "next/link";

interface PrincipleListItemProps {
  number: number;
  title: string;
  href: string;
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
  guideTargetId,
}: PrincipleListItemProps) {
  const isPrimary = number === 1;

  return (
    <Link
      href={href}
      data-guide-target={guideTargetId}
      className="group block cursor-pointer rounded-[1.5rem] border border-surface-border bg-surface-card shadow-[0_8px_20px_rgba(15,23,42,0.05)] transition-all duration-200 hover:border-accent hover:shadow-[0_12px_28px_rgba(37,99,235,0.10)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-page"
    >
      <div className="flex items-start gap-4 p-5 sm:p-6">
        {/* Icon block */}
        <div
          className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl transition-colors duration-200 ${
            isPrimary
              ? "bg-accent text-white group-hover:bg-accent-hover"
              : "border border-surface-border bg-surface-tint text-text-muted group-hover:border-accent group-hover:text-accent"
          }`}
        >
          <PrincipleIcon number={number} />
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-text-muted">
            Principle {number}
          </p>
          <h3 className="mt-1.5 text-base font-semibold leading-snug tracking-tight text-text-primary transition-colors duration-200 group-hover:text-accent sm:text-lg">
            {title}
          </h3>
        </div>

        {/* Chevron */}
        <div className="flex flex-shrink-0 items-center self-center pl-1 text-text-muted transition-colors duration-200 group-hover:text-accent">
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" aria-hidden="true">
            <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
