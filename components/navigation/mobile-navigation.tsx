"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { mobileNavItems } from "@/components/navigation/nav-items";
import { cn } from "@/lib/utils";

export function MobileNavigation() {
  const pathname = usePathname() ?? "/";

  return (
    <motion.nav
      animate={{ y: 0, opacity: 1 }}
      aria-label="Mobile primary"
      className="fixed inset-x-0 bottom-0 z-30 border-t border-border/80 bg-card/95 px-3 pb-[max(env(safe-area-inset-bottom),0.75rem)] pt-3 shadow-[0_-16px_40px_-30px_hsl(var(--primary)/0.45)] backdrop-blur lg:hidden"
      initial={{ y: 12, opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <div className="mx-auto grid max-w-md grid-cols-5 gap-1">
        {mobileNavItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              className={cn(
                "zenith-focus flex min-h-14 flex-col items-center justify-center gap-1 rounded-input text-[11px] font-bold text-muted-foreground transition-colors",
                isActive && "bg-muted text-primary",
                item.label === "Add" &&
                  "hover:bg-primary/92 relative mx-auto -mt-7 size-14 rounded-full bg-primary text-primary-foreground shadow-soft",
              )}
              href={item.href}
              key={item.label}
            >
              <item.icon className="size-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
