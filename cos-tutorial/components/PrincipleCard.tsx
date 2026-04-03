import Link from "next/link";

interface PrincipleCardProps {
  label: string;
  href: string;
  guideTargetId?: string;
}

export default function PrincipleCard({
  label,
  href,
  guideTargetId,
}: PrincipleCardProps) {
  return (
    <Link
      href={href}
      data-guide-target={guideTargetId}
      className="group flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-[1.9rem] border border-surface-border bg-surface-card transition-colors duration-200 hover:border-accent hover:bg-accent-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-page"
    >
      <div className="border-b border-surface-border bg-[linear-gradient(135deg,#eff6ff_0%,#f8f9fa_100%)] px-6 py-5">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent-strong">
          Explore
        </p>
        <h2 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-text-primary transition-colors duration-200 group-hover:text-accent">
          {label}
        </h2>
      </div>
      <div className="flex items-center justify-between px-6 py-5">
        <span className="text-sm leading-6 text-text-muted">
          Review the principles and open the guided details.
        </span>
        <span className="ml-4 rounded-full border border-surface-border bg-surface-page px-2.5 py-1 text-xs font-semibold text-text-muted transition-colors duration-200 group-hover:border-accent group-hover:bg-white group-hover:text-accent">
          Open
        </span>
      </div>
    </Link>
  );
}
