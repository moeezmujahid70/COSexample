import { Suspense } from "react";
import HomeContent from "@/components/HomeContent";
import PageShell from "@/components/PageShell";

export default function HomePage() {
  return (
    <PageShell>
      <Suspense
        fallback={
          <div className="h-28 animate-pulse rounded-3xl border border-surface-border bg-surface-card" />
        }
      >
        <HomeContent />
      </Suspense>
    </PageShell>
  );
}
