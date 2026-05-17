"use client";

import { motion } from "framer-motion";
import {
  Car,
  Home,
  Plane,
  ShoppingBag,
  ShoppingBasket,
  Sparkles,
  Utensils,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { DesignSystemShowcase } from "@/features/design-system/design-system-showcase";

const categories = [
  { label: "Casa", amount: "€850", icon: Home, progress: "74%" },
  { label: "Spesa", amount: "€320", icon: ShoppingBasket, progress: "48%" },
  { label: "Delivery", amount: "€145", icon: Utensils, progress: "82%" },
  { label: "Viaggi", amount: "€210", icon: Plane, progress: "18%" },
  { label: "Auto", amount: "€120", icon: Car, progress: "34%" },
  { label: "Shopping", amount: "€197", icon: ShoppingBag, progress: "61%" },
];

const transactions = [
  { merchant: "Conad Supermercato", category: "Spesa", amount: "-€42,50" },
  { merchant: "Sushi Zen", category: "Delivery", amount: "-€38,00" },
  { merchant: "Amazon.it", category: "Shopping", amount: "-€124,99" },
];

export function DashboardOverview() {
  return (
    <div className="space-y-8">
      <section className="flex flex-col gap-2">
        <p className="text-sm font-semibold text-muted-foreground">Buonasera</p>
        <h1 className="text-3xl font-extrabold text-foreground sm:text-4xl">
          Marco
        </h1>
        <p className="max-w-2xl text-sm font-medium text-muted-foreground">
          Ecco la situazione delle vostre finanze condivise.
        </p>
      </section>

      <section className="grid gap-5 lg:grid-cols-[1fr_280px]">
        <motion.div
          className="rounded-card border border-border bg-card p-6 shadow-card sm:p-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground">
                Spesa mensile
              </p>
              <p className="mt-5 text-5xl font-extrabold text-primary">
                €1.842,00
              </p>
              <p className="mt-3 text-sm font-bold text-sage-700">
                Sotto il budget previsto di 200€
              </p>
            </div>
            <Badge variant="sage">-12%</Badge>
          </div>
          <div className="mt-8 flex h-24 items-end gap-3">
            {[42, 56, 50, 64, 47, 34, 27].map((height, index) => (
              <div
                className="flex-1 rounded-t-md bg-primary/10"
                key={`${height}-${index}`}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </motion.div>

        <Card>
          <CardContent className="p-6">
            <p className="text-sm font-extrabold">Bilancio di coppia</p>
            <p className="mt-6 text-sm font-medium text-muted-foreground">
              Marco ha anticipato
            </p>
            <p className="mt-1 text-2xl font-extrabold text-primary">€184,00</p>
            <div className="mt-8 space-y-3">
              <Button className="w-full">Regola spese</Button>
              <Button className="w-full" variant="secondary">
                Invia reminder
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-extrabold">Categorie principali</h2>
          <Button size="sm" variant="ghost">
            Vedi tutte
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
          {categories.map((category) => (
            <article
              className="rounded-card border border-border bg-card p-4 shadow-card"
              key={category.label}
            >
              <div className="flex size-10 items-center justify-center rounded-input bg-muted text-sage-700">
                <category.icon className="size-5" />
              </div>
              <p className="mt-4 text-sm font-extrabold">{category.label}</p>
              <p className="mt-2 text-lg font-extrabold text-primary">
                {category.amount}
              </p>
              <Progress
                className="mt-3 h-1.5"
                value={Number.parseInt(category.progress, 10)}
              />
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-extrabold">Attività recente</h2>
          <Badge variant="outline">
            <Sparkles className="size-3.5" />
            AI categorizzato
          </Badge>
        </div>
        <div className="overflow-hidden rounded-card border border-border bg-card shadow-card">
          {transactions.map((transaction) => (
            <div
              className="flex items-center justify-between gap-4 border-b border-border/70 p-5 last:border-b-0"
              key={transaction.merchant}
            >
              <div>
                <p className="font-extrabold">{transaction.merchant}</p>
                <p className="mt-1 text-sm font-medium text-muted-foreground">
                  {transaction.category} · oggi
                </p>
              </div>
              <p className="text-xl font-extrabold text-foreground">
                {transaction.amount}
              </p>
            </div>
          ))}
        </div>
      </section>

      <DesignSystemShowcase />
    </div>
  );
}
