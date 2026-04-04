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
    "inline-flex min-h-10 w-full items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-page sm:w-auto";

  const variantStyles = {
    primary:
      `${baseStyles} cursor-pointer bg-success text-white hover:bg-success-hover focus-visible:ring-success`,
    secondary:
      `${baseStyles} cursor-pointer border border-surface-border bg-surface-card text-text-primary hover:border-accent hover:bg-surface-page focus-visible:ring-accent`,
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
