import TopNav from "@/components/TopNav";

export default function IntroShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-surface-page">
      <TopNav />
      <main className="flex-1 px-4 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-5">
        <div className="mx-auto flex h-full w-full max-w-[1400px] flex-col">
          {children}
        </div>
      </main>
    </div>
  );
}
