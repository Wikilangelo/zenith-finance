import {
  Activity,
  Bot,
  ChartSpline,
  CircleUserRound,
  Home,
  PlusCircle,
  Settings,
} from "lucide-react";

export const desktopNavItems = [
  { label: "Dashboard", href: "/", icon: Home },
  { label: "Activity", href: "/activity", icon: Activity },
  { label: "Add Expense", href: "/activity", icon: PlusCircle },
  { label: "AI Insights", href: "/insights", icon: Bot },
  { label: "Goals", href: "/goals", icon: ChartSpline },
  { label: "Settings", href: "/profile", icon: Settings },
];

export const mobileNavItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Feed", href: "/feed", icon: ChartSpline },
  { label: "Add", href: "/activity", icon: PlusCircle },
  { label: "AI", href: "/insights", icon: Bot },
  { label: "Profile", href: "/profile", icon: CircleUserRound },
];
