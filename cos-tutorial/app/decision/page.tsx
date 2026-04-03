import PageHeader from "@/components/PageHeader";
import PageShell from "@/components/PageShell";
import PrincipleListItem from "@/components/PrincipleListItem";
import SectionHero from "@/components/SectionHero";
import { getCategory } from "@/lib/content";

export default function DecisionPage() {
  const category = getCategory("decision");

  return (
    <PageShell>
      <div className="space-y-5">
        <PageHeader
          eyebrow="Decision Track"
          title={category.label}
          description="Review how the team documents decisions and gathers input before moving into the detailed decision principles."
          helpText={category.listInstruction}
          helpTargetId="decision-principle-1"
        />

        <SectionHero
          eyebrow="Track Summary"
          title="Decision principles"
          description={category.listBodyText}
          imageSrc="/illustration-decision.svg"
          imageAlt="Abstract illustration showing structured decision panels."
        />

        <div className="space-y-3">
          {category.principles.map((principle, index) => (
            <PrincipleListItem
              key={principle.id}
              number={index + 1}
              title={principle.title}
              href={`/decision/${principle.id}`}
              guideTargetId={`decision-principle-${principle.id}`}
            />
          ))}
        </div>
      </div>
    </PageShell>
  );
}
