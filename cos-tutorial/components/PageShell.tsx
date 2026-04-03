import { siteTitle } from "@/lib/content";
import SidebarRail from "@/components/SidebarRail";

export default function PageShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#eff6ff,transparent_34%),radial-gradient(circle_at_bottom_right,#f7f3ec,transparent_32%),#f8f9fa]">
      <div className="mx-auto max-w-[1280px] px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
        <header className="mb-4 rounded-[1.75rem] border border-surface-border bg-white/90 backdrop-blur shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
          <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-6">
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent-strong">
                Culture Operating System
              </p>
              <h1 className="mt-1 text-lg font-semibold tracking-tight text-text-primary sm:text-2xl">
                {siteTitle}
              </h1>
            </div>
            <div className="hidden rounded-full border border-guide-border bg-guide-bg px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent-strong lg:block">
              Interactive Learning Path
            </div>
          </div>
        </header>

        <div className="grid gap-5 lg:grid-cols-[18rem_minmax(0,1fr)] xl:grid-cols-[19.5rem_minmax(0,1fr)]">
          <SidebarRail />
          <main className="min-w-0">{children}</main>
        </div>
      </div>
    </div>
  );
}
