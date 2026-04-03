import Link from "next/link";

interface PrincipleListItemProps {
  number: number;
  title: string;
  href: string;
  guideTargetId?: string;
}

export default function PrincipleListItem({
  number,
  title,
  href,
  guideTargetId,
}: PrincipleListItemProps) {
  return (
    <Link
      href={href}
      data-guide-target={guideTargetId}
      className="group flex cursor-pointer items-start gap-4 rounded-[1.4rem] border border-surface-border bg-surface-card px-4 py-4 shadow-[0_8px_18px_rgba(15,23,42,0.04)] transition-colors duration-200 hover:border-accent hover:bg-accent-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-page sm:px-5"
    >
      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-surface-border bg-surface-page text-xs font-semibold text-text-muted transition-colors duration-200 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
        {number}
      </span>
      <span className="pt-1 text-sm font-medium leading-6 text-text-primary transition-colors duration-200 group-hover:text-accent">
        {title}
      </span>
    </Link>
  );
}
