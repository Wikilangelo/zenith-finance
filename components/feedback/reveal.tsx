"use client";

import { motion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className={className}
      initial={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.28, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
