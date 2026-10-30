"use client";

import { motion } from "framer-motion";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="flex-1 w-full pt-28 pb-16 px-4 md:px-8 max-w-6xl mx-auto flex flex-col justify-center"
    >
      {children}
    </motion.main>
  );
}
