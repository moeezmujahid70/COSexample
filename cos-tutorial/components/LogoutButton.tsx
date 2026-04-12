import Link from "next/link";

export default function LogoutButton({
  className = "",
}: {
  className?: string;
}) {
  return (
    <Link
      href="/goodbye"
      aria-label="Logout and go to the goodbye screen"
      className={`surface-lift inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-success-border bg-success px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(16,185,129,0.22)] transition-colors duration-150 hover:-translate-y-0.5 hover:bg-success-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-success focus-visible:ring-offset-2 focus-visible:ring-offset-surface-page sm:w-auto ${className}`.trim()}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 fill-none stroke-current"
        aria-hidden="true"
      >
        <path
          d="M10 17l5-5-5-5"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 12H4.75"
          strokeWidth="1.9"
          strokeLinecap="round"
        />
        <path
          d="M19.25 4.75v14.5"
          strokeWidth="1.9"
          strokeLinecap="round"
        />
      </svg>
      Logout
    </Link>
  );
}
