import PageHeader from "@/components/PageHeader";
import PageShell from "@/components/PageShell";
import PrincipleDetail from "@/components/PrincipleDetail";
import { PrincipleId, getCategory, getPrinciple } from "@/lib/content";
import { notFound } from "next/navigation";

export const dynamicParams = false;

const instructionMap: Record<PrincipleId, string> = {
  "1": "Read this Behavioral Principle and its details below.",
  "2": "Read this Behavioral Principle and its details below.",
};

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}

export default function BehaviorDetailPage({
  params,
}: {
  params: { id: string };
}) {
  if (params.id !== "1" && params.id !== "2") {
    notFound();
  }

  const category = getCategory("behavior");
  const principle = getPrinciple("behavior", params.id);

  return (
    <PageShell>
      <div className="space-y-5">
        <PageHeader
          eyebrow={`Behavioral Principle ${params.id} of ${category.principles.length}`}
          title={principle.title}
          description="Read the principle details, review ownership, and use the action controls below to continue the tutorial."
          helpText={instructionMap[params.id]}
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
        />
      </div>
    </PageShell>
  );
}
