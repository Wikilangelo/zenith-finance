import {
  Coffee,
  HeartHandshake,
  Home,
  Landmark,
  Leaf,
  Plane,
  ReceiptText,
  ShoppingBasket,
  Sparkles,
  TrainFront,
  Utensils,
  WalletCards,
} from "lucide-react";

export const monthlySummary = {
  greeting: "Buongiorno Marco",
  subtitle: "Le vostre finanze condivise respirano meglio questa settimana.",
  totalSpent: "€1.842",
  comparison: "-12% rispetto a marzo",
  calmNote: "Sotto il ritmo previsto di €200",
  wellnessScore: 78,
  sharedBalance: "€184",
};

export const overviewCards = [
  {
    label: "Spesa del mese",
    value: "€1.842",
    detail: "Ritmo più stabile del solito",
    tone: "sage",
  },
  {
    label: "Risparmi messi da parte",
    value: "€420",
    detail: "Verso casa e viaggio",
    tone: "gold",
  },
  {
    label: "Spese condivise",
    value: "64%",
    detail: "Ben distribuite tra voi",
    tone: "teal",
  },
];

export const categories = [
  {
    label: "Casa",
    amount: "€850",
    note: "Affitto e bollette",
    progress: 74,
    icon: Home,
  },
  {
    label: "Spesa",
    amount: "€320",
    note: "Più regolare",
    progress: 48,
    icon: ShoppingBasket,
  },
  {
    label: "Cene fuori",
    amount: "€145",
    note: "Weekend più leggero",
    progress: 62,
    icon: Utensils,
  },
  {
    label: "Mobilità",
    amount: "€120",
    note: "Treno e carburante",
    progress: 34,
    icon: TrainFront,
  },
];

export const aiInsights = [
  {
    title: "Le cene fuori seguono i weekend più pieni",
    description:
      "Zenith nota che quando avete più impegni sociali, la spesa delivery cresce senza superare il comfort budget.",
    signal: "Pattern gentile",
    confidence: "Alta",
    icon: Sparkles,
  },
  {
    title: "Energia e casa sono più prevedibili",
    description:
      "Le spese domestiche sono diventate più stabili nelle ultime tre settimane.",
    signal: "Stabilità",
    confidence: "Media",
    icon: Leaf,
  },
  {
    title: "Un piccolo margine per il viaggio",
    description:
      "Spostare €35 da acquisti impulsivi al fondo viaggio manterrebbe lo stesso ritmo mensile.",
    signal: "Opportunità",
    confidence: "Media",
    icon: Plane,
  },
];

export const goals = [
  {
    name: "Viaggio a Kyoto",
    target: "€3.200",
    saved: "€1.840",
    progress: 58,
    note: "In linea per settembre",
    icon: Plane,
  },
  {
    name: "Fondo serenità",
    target: "€6.000",
    saved: "€4.260",
    progress: 71,
    note: "Copre 2,8 mesi",
    icon: Landmark,
  },
  {
    name: "Casa più leggera",
    target: "€900",
    saved: "€420",
    progress: 47,
    note: "Piccoli upgrade senza fretta",
    icon: Home,
  },
];

export const activityFeed = [
  {
    id: "a1",
    type: "reflection",
    title: "Settimana più calma del previsto",
    description:
      "Avete speso meno in delivery dopo due serate cucinate in casa. Il ritmo sembra più intenzionale.",
    amount: "€45 risparmiati",
    time: "Oggi, 09:12",
    icon: Sparkles,
    badge: "Riflessione AI",
  },
  {
    id: "a2",
    type: "transaction",
    title: "Colazione da Blue Bottle",
    description:
      "Una pausa breve prima del lavoro. Categoria: tempo libero condiviso.",
    amount: "-€14,50",
    time: "Ieri, 08:35",
    icon: Coffee,
    badge: "Momento",
  },
  {
    id: "a3",
    type: "milestone",
    title: "Fondo serenità sopra il 70%",
    description:
      "Un traguardo silenzioso: il fondo comune ora copre quasi tre mesi di spese essenziali.",
    amount: "71%",
    time: "Venerdì",
    icon: HeartHandshake,
    badge: "Milestone",
  },
  {
    id: "a4",
    type: "habit",
    title: "Spesa settimanale più regolare",
    description:
      "La routine del sabato mattina sta riducendo acquisti frammentati durante la settimana.",
    amount: "-18%",
    time: "Questa settimana",
    icon: ShoppingBasket,
    badge: "Abitudine",
  },
  {
    id: "a5",
    type: "transaction",
    title: "Abbonamento streaming",
    description:
      "Pagamento ricorrente riconosciuto. Zenith lo terrà nel riepilogo mensile.",
    amount: "-€15,99",
    time: "Lunedì",
    icon: ReceiptText,
    badge: "Ricorrente",
  },
];

export const memories = [
  {
    title: "Il mese in cui avete cucinato di più",
    description:
      "La spesa alimentare è salita leggermente, ma le uscite fuori sono diminuite: un cambio di ritmo più domestico.",
    meta: "Memoria di aprile",
    icon: Home,
  },
  {
    title: "Una settimana costruita intorno al viaggio",
    description:
      "Piccoli accantonamenti e meno acquisti spontanei hanno reso Kyoto più vicina senza sentirla come rinuncia.",
    meta: "Momento condiviso",
    icon: WalletCards,
  },
];
