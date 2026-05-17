import { AppShell } from "@/components/layout/app-shell";
import { ActivityFeed } from "@/features/activity/activity-feed";

export default function ActivityPage() {
  return (
    <AppShell>
      <ActivityFeed />
    </AppShell>
  );
}
