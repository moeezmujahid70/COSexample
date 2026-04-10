import { introLaunchContent } from "@/lib/content";
import IntroAutoAdvance from "@/components/IntroAutoAdvance";
import IntroShell from "@/components/IntroShell";

export default function IntroLaunchScreen() {
  return (
    <IntroShell>
      <IntroAutoAdvance
        href={introLaunchContent.nextHref}
        delayMs={introLaunchContent.durationMs}
      />

      <div className="flex flex-1 items-center justify-center">
        <section className="surface-enter w-full rounded-[2rem] border border-surface-border bg-[linear-gradient(180deg,#ffffff_0%,#f8fafb_100%)] px-6 py-12 shadow-[0_18px_40px_rgba(15,23,42,0.06)] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
            <div className="mb-6 h-1.5 w-24 rounded-full bg-success sm:mb-8 sm:w-32" />
            <h1 className="max-w-5xl text-balance text-[1.95rem] font-semibold leading-[1.08] tracking-tight text-text-primary sm:text-[3rem] lg:text-[4rem]">
              {introLaunchContent.message}
            </h1>
          </div>
        </section>
      </div>
    </IntroShell>
  );
}
