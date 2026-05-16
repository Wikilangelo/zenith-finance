import { AppShell } from "@/components/layout/app-shell";
import { DashboardOverview } from "@/features/dashboard/dashboard-overview";

export default function HomePage() {
  return (
    <AppShell>
      <DashboardOverview />
    </AppShell>
  );
}
