import { desktopNavItems } from "@/components/navigation/nav-items";
import { cn } from "@/lib/utils";

export function DesktopSidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-border/80 bg-card lg:flex lg:flex-col">
      <div className="px-7 py-8">
        <p className="text-2xl font-extrabold text-primary">Zenith</p>
        <p className="mt-1 text-xs font-medium text-muted-foreground">
          Shared Finance
        </p>
      </div>

      <nav className="flex-1 space-y-2 px-4" aria-label="Primary">
        {desktopNavItems.map((item) => (
          <button
            className={cn(
              "zenith-focus flex h-12 w-full items-center gap-3 rounded-input px-4 text-left text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
              item.active &&
                "bg-muted text-primary shadow-[inset_3px_0_0_hsl(var(--primary))]",
            )}
            key={item.label}
            type="button"
          >
            <item.icon className="size-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-5">
        <div className="rounded-card bg-muted p-4">
          <p className="text-sm font-bold">Marco</p>
          <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            Premium plan
          </p>
        </div>
      </div>
    </aside>
  );
}
