import PrincipleCard from "@/components/PrincipleCard";
import { homeContent, siteTitle } from "@/lib/content";

export default function HomeContent() {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-surface-border bg-[linear-gradient(180deg,#ffffff_0%,#f9fbfc_100%)] px-6 py-10 text-center shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
        <h1 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
          {siteTitle}
        </h1>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        {homeContent.cards.map((card) => (
          <PrincipleCard key={card.href} label={card.label} href={card.href} />
        ))}
      </section>
    </div>
  );
}
