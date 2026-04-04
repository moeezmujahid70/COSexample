"use client";

import BrandLockup from "@/components/BrandLockup";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SectionKey = "home" | "behavior" | "decision" | "goodbye";

const sections: Array<{ key: SectionKey; title: string; href: string }> = [
  { key: "home", title: "Overview", href: "/" },
  { key: "behavior", title: "Behavior", href: "/behavior" },
  { key: "decision", title: "Decision", href: "/decision" },
  { key: "goodbye", title: "Complete", href: "/goodbye" },
];

function getActiveSection(pathname: string): SectionKey {
  if (pathname.startsWith("/behavior")) return "behavior";
  if (pathname.startsWith("/decision")) return "decision";
  if (pathname.startsWith("/goodbye")) return "goodbye";
  return "home";
}

export default function TopNav() {
  const pathname = usePathname();
  const activeSection = getActiveSection(pathname);

  return (
    <header className="sticky top-0 z-30 border-b border-surface-border/80 bg-surface-page/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <div className="min-w-0">
          <BrandLockup
            compact
            titleClassName="truncate"
          />
        </div>

        <nav
          className="flex flex-wrap items-center gap-1 rounded-full border border-surface-border bg-surface-card p-1 shadow-[0_6px_20px_rgba(15,23,42,0.05)]"
          aria-label="Main navigation"
        >
          {sections.map((section) => {
            const active = section.key === activeSection;
            return (
              <Link
                key={section.key}
                href={section.href}
                className={`inline-flex h-9 items-center rounded-full px-3.5 text-sm font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-card ${
                  active
                    ? "bg-accent-subtle text-accent-strong"
                    : "text-text-muted hover:bg-surface-tint hover:text-text-primary"
                }`}
              >
                {section.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
