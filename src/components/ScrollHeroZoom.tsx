"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollHeroZoomProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * ScrollHeroZoom Component
 * Zooms out (scale decreases from 1.0 down to ~0.85) when scrolling down,
 * and zooms back in (back to 1.0) when scrolling up.
 * Also introduces subtle opacity and blur depth for an ultra-luxury editorial feel.
 */
export default function ScrollHeroZoom({ children, className = "" }: ScrollHeroZoomProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Scale: 1 (normal) down to 0.85 as user scrolls down
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.86]);
  // Opacity: stays crisp until half-way, then gently fades
  const opacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 0.9, 0.4]);
  // Subtle border radius rounding as it pulls back
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["0px", "28px"]);

  return (
    <div ref={containerRef} className={`relative w-full overflow-hidden ${className}`}>
      <motion.div
        style={{
          scale,
          opacity,
          borderRadius,
        }}
        className="w-full origin-center will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}
