import TopNav from "@/components/TopNav";

export default function PageShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-surface-page">
      <TopNav />
      <main className="mx-auto max-w-[1120px] px-4 py-5 sm:px-6 lg:py-6">
        {children}
      </main>
    </div>
  );
}
