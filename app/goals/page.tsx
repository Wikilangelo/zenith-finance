import { AppShell } from "@/components/layout/app-shell";
import { GoalsSurface } from "@/features/goals/goals-surface";

export default function GoalsPage() {
  return (
    <AppShell>
      <GoalsSurface />
    </AppShell>
  );
}
