import { MemoryCard } from "@/features/feed/components/memory-card";
import { memories } from "@/features/product/mock-data";
import { SectionHeading } from "@/features/product/section-heading";

export function FeedSurface() {
  return (
    <div className="space-y-section">
      <section>
        <p className="text-sm font-semibold text-muted-foreground">Feed</p>
        <h1 className="mt-2 text-title-lg font-extrabold sm:text-display-sm">
          Memoria finanziaria
        </h1>
        <p className="mt-2 max-w-2xl text-body font-medium text-muted-foreground">
          Un journal di pattern, scelte e momenti che raccontano come cambia la
          vita condivisa.
        </p>
      </section>

      <SectionHeading
        description="Memorie mock generate come contesto, non come cronologia bancaria."
        title="Momenti salvati"
      />
      <div className="grid gap-4 lg:grid-cols-2">
        {memories.map((memory) => (
          <MemoryCard key={memory.title} {...memory} />
        ))}
      </div>
    </div>
  );
}
