import Link from "next/link";

interface ActionButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  guideTargetId?: string;
}

export default function ActionButton({
  href,
  children,
  variant = "primary",
  guideTargetId,
}: ActionButtonProps) {
  const baseStyles =
    "inline-flex min-h-11 items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-page";

  const variantStyles = {
    primary:
      `${baseStyles} cursor-pointer bg-accent text-white shadow-[0_14px_26px_rgba(37,99,235,0.18)] hover:bg-accent-hover`,
    secondary:
      `${baseStyles} cursor-pointer border border-surface-border bg-surface-card text-text-primary hover:border-accent hover:bg-accent-subtle`,
  };

  return (
    <Link
      href={href}
      data-guide-target={guideTargetId}
      className={variantStyles[variant]}
    >
      {children}
    </Link>
  );
}
