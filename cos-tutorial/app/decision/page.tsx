import PageShell from "@/components/PageShell";
import PrincipleListItem from "@/components/PrincipleListItem";
import TrackComment from "@/components/TrackComment";
import { getCategory } from "@/lib/content";

export default function DecisionPage() {
  const category = getCategory("decision");

  return (
    <PageShell>
      <div className="space-y-5">
        <TrackComment title="Decision Principles for the R&D Team" />

        <div className="space-y-3">
          {category.principles.map((principle, index) => (
            <PrincipleListItem
              key={principle.id}
              number={index + 1}
              title={principle.title}
              href={`/decision/${principle.id}`}
              accountable={principle.accountable}
              measurement={principle.measurement}
              employeeFeedback={principle.employeeFeedback}
            />
          ))}
        </div>
      </div>
    </PageShell>
  );
}
