"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette } from "lucide-react";
import { useTheme, THEMES } from "@/context/ThemeContext";

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const { currentTheme, setThemeById } = useTheme();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center">
      {/* 9 Colors Opening Vertically Upwards (Pure Color Circles Only, No Text) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 15 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="mb-3 p-2.5 rounded-full border shadow-2xl backdrop-blur-2xl flex flex-col items-center gap-2"
            style={{
              backgroundColor: currentTheme.baseCard,
              borderColor: currentTheme.cardBorder,
              boxShadow: `0 16px 40px ${currentTheme.accentGlow}`,
            }}
          >
            {THEMES.map((theme, index) => {
              const isSelected = currentTheme.id === theme.id;
              return (
                <motion.button
                  key={theme.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (THEMES.length - index) * 0.025 }}
                  onClick={() => {
                    setThemeById(theme.id);
                    setOpen(false); // Close after selection
                  }}
                  className="relative p-0.5 focus:outline-none cursor-pointer"
                  title={theme.name}
                  aria-label={`Select ${theme.name}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.25 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center transition-all shadow-md"
                    style={{
                      backgroundColor: theme.primaryAccent,
                      borderColor: isSelected ? theme.deepText : "rgba(0,0,0,0.15)",
                      borderWidth: isSelected ? "3px" : "1.5px",
                    }}
                  >
                    {/* Inner active dot indicator */}
                    {isSelected && (
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: theme.deepText }}
                      />
                    )}
                  </motion.div>
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Main Button with Palette Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="group relative focus:outline-none cursor-pointer flex items-center justify-center p-1"
        aria-label="Toggle theme colors"
      >
        <motion.div
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.92 }}
          className="w-12 h-12 rounded-full border-2 shadow-2xl flex items-center justify-center transition-all"
          style={{
            backgroundColor: currentTheme.baseCard,
            borderColor: currentTheme.cardBorder,
            boxShadow: `0 8px 28px ${currentTheme.accentGlow}`,
          }}
        >
          <Palette
            className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45"
            style={{ color: currentTheme.primaryAccent }}
          />
        </motion.div>
      </button>
    </div>
  );
}
