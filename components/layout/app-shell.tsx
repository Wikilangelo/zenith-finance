import { Bell, Plus, UserCircle } from "lucide-react";

import { DesktopSidebar } from "@/components/navigation/desktop-sidebar";
import { MobileNavigation } from "@/components/navigation/mobile-navigation";
import { Button } from "@/components/ui/button";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <DesktopSidebar />
      <div className="min-h-screen pb-24 lg:pb-0 lg:pl-64">
        <header className="sticky top-0 z-20 border-b border-border/70 bg-background/90 backdrop-blur lg:hidden">
          <div className="flex h-16 items-center justify-between px-5">
            <span className="text-2xl font-extrabold tracking-normal text-primary">
              Zenith
            </span>
            <div className="flex items-center gap-2">
              <Button aria-label="Notifications" size="icon" variant="ghost">
                <Bell className="size-5" />
              </Button>
              <Button aria-label="Profile" size="icon" variant="ghost">
                <UserCircle className="size-5" />
              </Button>
            </div>
          </div>
        </header>

        <main className="mx-auto w-full max-w-6xl px-5 py-7 sm:px-8 lg:px-10 lg:py-10">
          {children}
        </main>

        <Button
          aria-label="Add expense"
          className="fixed bottom-8 right-8 hidden size-14 rounded-[18px] shadow-soft lg:inline-flex"
          size="icon"
        >
          <Plus className="size-6" />
        </Button>
      </div>
      <MobileNavigation />
    </div>
  );
}
