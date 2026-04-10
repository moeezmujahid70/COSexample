import CompletionCelebration from "@/components/CompletionCelebration";
import PageShell from "@/components/PageShell";
import { goodbyeContent } from "@/lib/content";

export default function GoodbyePage() {
  return (
    <PageShell>
      <div className="flex min-h-[60vh] items-center justify-center">
        <CompletionCelebration
          title={goodbyeContent.label}
          contact={{
            name: "Gerald (Jerry) Wagner, PhD",
            email: "jerry.wagner@culturesinaction.com",
          }}
        />
      </div>
    </PageShell>
  );
}
