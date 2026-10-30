"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export default function TransitionOverlay() {
  const pathname = usePathname();
  const { currentTheme } = useTheme();
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setAnimating(true);
    const timer = setTimeout(() => {
      setAnimating(false);
    }, 1100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      {animating && (
        <div className="fixed inset-0 z-[9999] pointer-events-none flex flex-row w-screen h-screen">
          {[0, 1, 2, 3, 4].map((index) => {
            return (
              <motion.div
                key={index}
                className="h-full relative origin-bottom"
                style={{
                  width: "20%",
                  backgroundColor: currentTheme.deepText, // Uses deep structure text color
                  borderRight: index < 4 ? `1px solid rgba(255,255,255,0.08)` : "none",
                }}
                initial={{ scaleY: 0 }}
                animate={{
                  scaleY: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 1.0,
                  times: [0, 0.45, 0.6, 1],
                  delay: index * 0.08,
                  ease: [0.65, 0, 0.35, 1],
                }}
              >
                {/* Accent line on leading edge */}
                <div
                  className="absolute top-0 left-0 right-0 h-1.5"
                  style={{ backgroundColor: currentTheme.primaryAccent }}
                />
              </motion.div>
            );
          })}
        </div>
      )}
    </AnimatePresence>
  );
}
