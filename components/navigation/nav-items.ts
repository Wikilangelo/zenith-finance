import {
  Activity,
  Bot,
  ChartSpline,
  Home,
  PlusCircle,
  Settings,
  UserCircle,
} from "lucide-react";

export const desktopNavItems = [
  { label: "Dashboard", icon: Home, active: true },
  { label: "Activity", icon: Activity, active: false },
  { label: "Add Expense", icon: PlusCircle, active: false },
  { label: "AI Insights", icon: Bot, active: false },
  { label: "Goals", icon: ChartSpline, active: false },
  { label: "Settings", icon: Settings, active: false },
];

export const mobileNavItems = [
  { label: "Home", icon: Home, active: true },
  { label: "Feed", icon: ChartSpline, active: false },
  { label: "Add", icon: PlusCircle, active: false },
  { label: "AI", icon: Bot, active: false },
  { label: "Profile", icon: UserCircle, active: false },
];
