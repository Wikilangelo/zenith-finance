"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

type AIThinkingStateProps = {
  title?: string;
  description?: string;
};

export function AIThinkingState({
  title = "Zenith sta riflettendo",
  description = "Analisi mock dei pattern recenti, senza inviare dati reali.",
}: AIThinkingStateProps) {
  return (
    <Card className="overflow-hidden border-primary/15 bg-primary text-primary-foreground shadow-lift">
      <CardContent className="relative p-5">
        <div className="relative flex items-start gap-4">
          <motion.div
            animate={{ scale: [1, 1.06, 1], opacity: [0.72, 1, 0.72] }}
            className="bg-white/12 flex size-11 shrink-0 items-center justify-center rounded-full"
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="size-5" />
          </motion.div>
          <div className="min-w-0">
            <Badge
              className="border-white/16 bg-white/12 text-primary-foreground"
              variant="outline"
            >
              AI state
            </Badge>
            <h2 className="mt-3 text-title-sm font-extrabold">{title}</h2>
            <p className="text-primary-foreground/78 mt-1 text-sm font-medium">
              {description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

type AIInsightStateProps = {
  title: string;
  description: string;
};

export function AIInsightState({ title, description }: AIInsightStateProps) {
  return (
    <Card className="border-sage-100 bg-sage-50/70 shadow-none">
      <CardContent className="flex gap-4 p-5">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-card text-sage-700">
          <Sparkles className="size-5" />
        </div>
        <div>
          <Badge variant="sage">Suggerimento AI</Badge>
          <h2 className="mt-3 font-extrabold text-primary">{title}</h2>
          <p className="mt-1 text-sm font-medium text-muted-foreground">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
