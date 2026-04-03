import PageHeader from "@/components/PageHeader";
import PageShell from "@/components/PageShell";
import PrincipleDetail from "@/components/PrincipleDetail";
import { PrincipleId, getCategory, getPrinciple } from "@/lib/content";
import { notFound } from "next/navigation";

export const dynamicParams = false;

const instructionMap: Record<PrincipleId, string> = {
  "1": "Read this Decision Principle and its details below.",
  "2": "Read this Decision Principle and use the buttons below when done.",
};

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}

export default function DecisionDetailPage({
  params,
}: {
  params: { id: string };
}) {
  if (params.id !== "1" && params.id !== "2") {
    notFound();
  }

  const category = getCategory("decision");
  const principle = getPrinciple("decision", params.id);

  return (
    <PageShell>
      <div className="space-y-5">
        <PageHeader
          eyebrow={`Decision Principle ${params.id} of ${category.principles.length}`}
          title={principle.title}
          description="Use this screen to review the decision principle in full and then continue or return using the guided controls."
          helpText={instructionMap[params.id]}
          helpTargetId={params.id === "1" ? "decision-next" : "decision-end"}
        />

        <PrincipleDetail
          title={principle.title}
          body={principle.body}
          accountable={principle.accountable}
          measurement={principle.measurement}
          nextHref={principle.nextHref}
          nextLabel={principle.nextLabel}
          secondaryHref={principle.secondaryHref}
          secondaryLabel={principle.secondaryLabel}
          nextGuideTargetId={params.id === "1" ? "decision-next" : "decision-end"}
          secondaryGuideTargetId={params.id === "2" ? "decision-return" : undefined}
        />
      </div>
    </PageShell>
  );
}
