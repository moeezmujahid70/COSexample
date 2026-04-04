import PageShell from "@/components/PageShell";
import PrincipleListItem from "@/components/PrincipleListItem";
import TrackComment from "@/components/TrackComment";
import { getCategory } from "@/lib/content";

export default function BehaviorPage() {
  const category = getCategory("behavior");

  return (
    <PageShell>
      <div className="space-y-5">
        <TrackComment title="Behavior Principles for the R&D Team" />

        <div className="space-y-3">
          {category.principles.map((principle, index) => (
            <PrincipleListItem
              key={principle.id}
              number={index + 1}
              title={principle.title}
              href={`/behavior/${principle.id}`}
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
