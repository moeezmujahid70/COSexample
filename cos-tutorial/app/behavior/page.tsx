import PageHeader from "@/components/PageHeader";
import PageShell from "@/components/PageShell";
import PrincipleListItem from "@/components/PrincipleListItem";
import SectionHero from "@/components/SectionHero";
import { getCategory } from "@/lib/content";

export default function BehaviorPage() {
  const category = getCategory("behavior");

  return (
    <PageShell>
      <div className="space-y-5">
        <PageHeader
          eyebrow="Behavior Track"
          title={category.label}
          description="Review the expected team behaviors, then open a principle to see its accountable owner and measurement."
          helpText={category.listInstruction}
        />

        <SectionHero
          eyebrow="Track Summary"
          title="Behavior principles"
          description={category.listBodyText}
          imageSrc="/illustration-behavior.svg"
          imageAlt="Abstract illustration showing a behavior principles menu."
        />

        <div className="space-y-3">
          {category.principles.map((principle, index) => (
            <PrincipleListItem
              key={principle.id}
              number={index + 1}
              title={principle.title}
              href={`/behavior/${principle.id}`}
            />
          ))}
        </div>
      </div>
    </PageShell>
  );
}
