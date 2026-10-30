"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

interface EyeFollowerProps {
  className?: string;
}

export default function EyeFollower({ className = "" }: EyeFollowerProps) {
  const { currentTheme } = useTheme();
  const leftEyeRef = useRef<HTMLDivElement>(null);
  const rightEyeRef = useRef<HTMLDivElement>(null);

  const [pupilPositions, setPupilPositions] = useState({
    left: { x: 0, y: 0 },
    right: { x: 0, y: 0 },
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const calcPupilOffset = (eyeEl: HTMLDivElement | null) => {
        if (!eyeEl) return { x: 0, y: 0 };
        const rect = eyeEl.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const deltaX = e.clientX - eyeCenterX;
        const deltaY = e.clientY - eyeCenterY;

        const angle = Math.atan2(deltaY, deltaX);
        const distance = Math.min(4, Math.hypot(deltaX, deltaY) / 18); // maximum eye movement radius

        return {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
        };
      };

      setPupilPositions({
        left: calcPupilOffset(leftEyeRef.current),
        right: calcPupilOffset(rightEyeRef.current),
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className={`relative w-10 h-10 rounded-full border flex items-center justify-center gap-1.5 transition-all duration-300 shadow-sm ${className}`}
      style={{
        backgroundColor: currentTheme.baseCard,
        borderColor: currentTheme.cardBorder,
        boxShadow: `0 3px 12px ${currentTheme.accentGlow}`,
      }}
    >
      {/* Left Eye */}
      <div
        ref={leftEyeRef}
        className="w-3.5 h-3.5 rounded-full bg-white border flex items-center justify-center overflow-hidden shadow-inner relative"
        style={{ borderColor: currentTheme.cardBorder }}
      >
        <div
          className="w-1.5 h-1.5 rounded-full transition-transform duration-75 ease-out"
          style={{
            backgroundColor: currentTheme.deepText,
            transform: `translate(${pupilPositions.left.x}px, ${pupilPositions.left.y}px)`,
          }}
        />
      </div>

      {/* Right Eye */}
      <div
        ref={rightEyeRef}
        className="w-3.5 h-3.5 rounded-full bg-white border flex items-center justify-center overflow-hidden shadow-inner relative"
        style={{ borderColor: currentTheme.cardBorder }}
      >
        <div
          className="w-1.5 h-1.5 rounded-full transition-transform duration-75 ease-out"
          style={{
            backgroundColor: currentTheme.deepText,
            transform: `translate(${pupilPositions.right.x}px, ${pupilPositions.right.y}px)`,
          }}
        />
      </div>
    </div>
  );
}
