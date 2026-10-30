"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = {
  id: string;
  name: string;
  background: string;       // Page background
  baseCard: string;         // Cards and containers
  primaryAccent: string;    // Main buttons, active tabs, highlights
  secondaryAccent: string;  // Badges, borders, secondary elements
  deepText: string;         // High-contrast primary text & headlines
  mutedText: string;        // High-contrast readable body & subtitles
  cardBorder: string;       // Card borders
  accentGlow: string;       // Shadows
};

export const THEMES: Theme[] = [
  {
    id: "soft-sand",
    name: "1. Soft Sand & Terracotta",
    background: "#F5EBE6",
    baseCard: "#EADCD3",
    primaryAccent: "#C86A45", // Deepened for high contrast
    secondaryAccent: "#8A54A2",
    deepText: "#2E1A11", // Deep dark espresso for crisp readability
    mutedText: "#4A2F23", // Solid readable dark text
    cardBorder: "rgba(46, 26, 17, 0.15)",
    accentGlow: "rgba(200, 106, 69, 0.25)",
  },
  {
    id: "linen-sage",
    name: "2. Linen White & Sage",
    background: "#F9F8F6",
    baseCard: "#ECE9E3",
    primaryAccent: "#587250",
    secondaryAccent: "#4A5544",
    deepText: "#18201D", // Dark charcoal pine
    mutedText: "#2C3531", // Very crisp dark slate
    cardBorder: "rgba(24, 32, 29, 0.15)",
    accentGlow: "rgba(88, 114, 80, 0.25)",
  },
  {
    id: "dune-ochre",
    name: "3. Bleached Bone & Ochre",
    background: "#F7F5F0",
    baseCard: "#EAE0D2",
    primaryAccent: "#B37639",
    secondaryAccent: "#475569",
    deepText: "#24221E", // Dark driftwood
    mutedText: "#3D3A34", // Sharp readable tone
    cardBorder: "rgba(36, 34, 30, 0.15)",
    accentGlow: "rgba(179, 118, 57, 0.25)",
  },
  {
    id: "studio-terracotta",
    name: "4. Studio White & Raw Clay",
    background: "#FAF6F0",
    baseCard: "#EDE1D1",
    primaryAccent: "#B85430",
    secondaryAccent: "#8C381E",
    deepText: "#2E1513", // Rich dark clay
    mutedText: "#4A2E2B", // Highly legible
    cardBorder: "rgba(46, 21, 19, 0.15)",
    accentGlow: "rgba(184, 84, 48, 0.25)",
  },
  {
    id: "tatami-moss",
    name: "5. Tatami Cream & Forest Moss",
    background: "#F4F1EA",
    baseCard: "#E5E1D5",
    primaryAccent: "#434B3C",
    secondaryAccent: "#5A6153",
    deepText: "#171A19", // Deep obsidian
    mutedText: "#2C302E", // High clarity body text
    cardBorder: "rgba(23, 26, 25, 0.15)",
    accentGlow: "rgba(67, 75, 60, 0.25)",
  },
  {
    id: "ivory-ochre",
    name: "6. Soft Ivory & Warm Ochre",
    background: "#FBF9F6",
    baseCard: "#EFEADB",
    primaryAccent: "#BA7C31",
    secondaryAccent: "#6B4520",
    deepText: "#141A1A", // Solid raw charcoal
    mutedText: "#232B2B", // High-contrast body text
    cardBorder: "rgba(20, 26, 26, 0.15)",
    accentGlow: "rgba(186, 124, 49, 0.25)",
  },
  {
    id: "morning-mist",
    name: "7. Morning Mist & Frosted Sage",
    background: "#F5F5F5",
    baseCard: "#DEE5E1",
    primaryAccent: "#58786A",
    secondaryAccent: "#45534E",
    deepText: "#1A221E", // Iron ore black
    mutedText: "#333D38", // Sharp readable tone
    cardBorder: "rgba(26, 34, 30, 0.15)",
    accentGlow: "rgba(88, 120, 106, 0.25)",
  },
  {
    id: "parchment-amber",
    name: "8. Parchment & Amber Sunset",
    background: "#FAF8F5",
    baseCard: "#EFE6D5",
    primaryAccent: "#BD7926",
    secondaryAccent: "#785331",
    deepText: "#221C16", // Night shadow deep
    mutedText: "#3E362E", // Clean readable body
    cardBorder: "rgba(34, 28, 22, 0.15)",
    accentGlow: "rgba(189, 121, 38, 0.25)",
  },
  {
    id: "chalk-mudstone",
    name: "9. Pure Chalk & Mudstone",
    background: "#F9F9F9",
    baseCard: "#F0ECE6",
    primaryAccent: "#7E715B",
    secondaryAccent: "#5E5545",
    deepText: "#1F1B19", // Dark soil
    mutedText: "#3C3633", // Clear high contrast
    cardBorder: "rgba(31, 27, 25, 0.15)",
    accentGlow: "rgba(126, 113, 91, 0.25)",
  },
];

interface ThemeContextType {
  currentTheme: Theme;
  setThemeById: (id: string) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  currentTheme: THEMES[0],
  setThemeById: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(THEMES[0]);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio_palette_id");
    if (saved) {
      const match = THEMES.find((t) => t.id === saved);
      if (match) setCurrentTheme(match);
    }
  }, []);

  const setThemeById = (id: string) => {
    const found = THEMES.find((t) => t.id === id);
    if (found) {
      setCurrentTheme(found);
      localStorage.setItem("portfolio_palette_id", id);
    }
  };

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--theme-bg", currentTheme.background);
    root.style.setProperty("--theme-card", currentTheme.baseCard);
    root.style.setProperty("--theme-accent", currentTheme.primaryAccent);
    root.style.setProperty("--theme-accent-secondary", currentTheme.secondaryAccent);
    root.style.setProperty("--theme-text", currentTheme.deepText);
    root.style.setProperty("--theme-muted", currentTheme.mutedText);
    root.style.setProperty("--theme-border", currentTheme.cardBorder);
    root.style.setProperty("--theme-glow", currentTheme.accentGlow);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, setThemeById }}>
      <div
        style={{
          backgroundColor: currentTheme.background,
          color: currentTheme.deepText,
        }}
        className="min-h-screen transition-colors duration-500 font-body selection:bg-neutral-800 selection:text-white"
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
