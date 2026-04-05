"use client";

import { useEffect, useRef, useState } from "react";
import BrandLockup from "@/components/BrandLockup";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SectionKey = "welcome" | "overview" | "behavior" | "decision" | "goodbye";

const sections: Array<{ key: SectionKey; title: string; href: string }> = [
  { key: "welcome", title: "Welcome", href: "/" },
  { key: "overview", title: "Overview", href: "/overview" },
  { key: "behavior", title: "Behavior", href: "/behavior" },
  { key: "decision", title: "Decision", href: "/decision" },
  { key: "goodbye", title: "Complete", href: "/goodbye" },
];

function getActiveSection(pathname: string): SectionKey {
  if (pathname.startsWith("/overview")) return "overview";
  if (pathname.startsWith("/behavior")) return "behavior";
  if (pathname.startsWith("/decision")) return "decision";
  if (pathname.startsWith("/goodbye")) return "goodbye";
  return "welcome";
}

export default function TopNav() {
  const pathname = usePathname();
  const activeSection = getActiveSection(pathname);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    }

    if (!mobileMenuOpen) {
      return;
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-30 border-b border-surface-border/80 bg-surface-page/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6 sm:py-4">
        <div className="flex items-center justify-between gap-3 sm:block">
          <div className="min-w-0 self-start">
            <BrandLockup
              compact
              titleClassName="text-[0.95rem] sm:text-sm"
            />
          </div>

          <div ref={menuRef} className="relative sm:hidden">
            <button
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
              aria-label="Open navigation menu"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="surface-lift inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-surface-border bg-surface-card text-text-primary shadow-[0_6px_20px_rgba(15,23,42,0.05)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-page"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-none stroke-current"
                aria-hidden="true"
              >
                {mobileMenuOpen ? (
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <path
                    d="M4.5 7h15M4.5 12h15M4.5 17h15"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>

            {mobileMenuOpen ? (
              <nav
                id="mobile-nav-menu"
                className="absolute right-0 top-[calc(100%+0.55rem)] z-40 w-[220px] rounded-2xl border border-surface-border bg-surface-card p-2 shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
                aria-label="Mobile navigation"
              >
                {sections.map((section) => {
                  const active = section.key === activeSection;
                  return (
                    <Link
                      key={section.key}
                      href={section.href}
                      className={`flex h-11 items-center rounded-xl px-3 text-sm font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-card ${
                        active
                          ? "bg-accent-subtle text-accent-strong"
                          : "text-text-primary hover:bg-surface-tint"
                      }`}
                    >
                      {section.title}
                    </Link>
                  );
                })}
              </nav>
            ) : null}
          </div>
        </div>

        <nav
          className="hidden flex-wrap items-center gap-1 rounded-full border border-surface-border bg-surface-card p-1 shadow-[0_6px_20px_rgba(15,23,42,0.05)] sm:flex sm:w-auto sm:flex-wrap sm:items-center sm:rounded-full"
          aria-label="Main navigation"
        >
          {sections.map((section) => {
            const active = section.key === activeSection;
            return (
              <Link
                key={section.key}
                href={section.href}
                className={`inline-flex h-9 items-center justify-center rounded-full px-3.5 text-sm font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-card ${
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
