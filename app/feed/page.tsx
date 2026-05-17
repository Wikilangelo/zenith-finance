import { AppShell } from "@/components/layout/app-shell";
import { FeedSurface } from "@/features/feed/feed-surface";

export default function FeedPage() {
  return (
    <AppShell>
      <FeedSurface />
    </AppShell>
  );
}
