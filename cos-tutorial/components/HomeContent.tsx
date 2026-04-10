import BrandLockup from "@/components/BrandLockup";
import PrincipleCard from "@/components/PrincipleCard";
import { homeContent } from "@/lib/content";

export default function HomeContent() {
  return (
    <div className="space-y-6">
      <section className="surface-enter rounded-2xl border border-surface-border bg-[linear-gradient(180deg,#ffffff_0%,#f9fbfc_100%)] px-6 py-12 text-center shadow-[0_10px_30px_rgba(15,23,42,0.05)] sm:px-8 sm:py-14">
        <div className="flex justify-center">
          <BrandLockup
            align="center"
            priority
            titleAs="h1"
            imageSize={60}
            titleClassName="text-[2.3rem] sm:text-[2.85rem]"
          />
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        {homeContent.cards.map((card, index) => (
          <PrincipleCard
            key={card.href}
            label={card.label}
            href={card.href}
            enterDelay={index === 0 ? "0.06s" : "0.12s"}
          />
        ))}
      </section>
    </div>
  );
}
