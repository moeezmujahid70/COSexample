import type { CSSProperties } from "react";
import Link from "next/link";

interface PrincipleCardProps {
  label: string;
  href: string;
  guideTargetId?: string;
  enterDelay?: string;
}

export default function PrincipleCard({
  label,
  href,
  guideTargetId,
  enterDelay,
}: PrincipleCardProps) {
  return (
    <Link
      href={href}
      data-guide-target={guideTargetId}
      className="surface-enter surface-lift group flex min-h-[220px] cursor-pointer items-center justify-center rounded-2xl border border-surface-border bg-[linear-gradient(180deg,#ffffff_0%,#f7fbfc_100%)] p-8 text-center shadow-[0_10px_30px_rgba(15,23,42,0.05)] hover:-translate-y-0.5 hover:border-[#67e8f9] hover:bg-accent-subtle hover:shadow-[0_16px_36px_rgba(8,145,178,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-page"
      style={{ "--enter-delay": enterDelay ?? "0s" } as CSSProperties}
    >
      <div className="space-y-4">
        <span className="mx-auto block h-px w-14 bg-[linear-gradient(90deg,transparent,#22D3EE,transparent)]" />
        <h2 className="text-3xl font-semibold leading-tight tracking-tight text-text-primary transition-colors duration-150 group-hover:text-accent-strong">
          {label}
        </h2>
        <span className="mx-auto block h-px w-14 bg-[linear-gradient(90deg,transparent,#22C55E,transparent)]" />
      </div>
    </Link>
  );
}
