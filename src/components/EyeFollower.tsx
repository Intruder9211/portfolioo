"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";

interface EyeFollowerProps {
  className?: string;
}

export default function EyeFollower({ className = "" }: EyeFollowerProps) {
  const { currentTheme } = useTheme();
  const leftEyeRef = useRef<HTMLDivElement>(null);
  const rightEyeRef = useRef<HTMLDivElement>(null);
  const leftPupilRef = useRef<HTMLDivElement>(null);
  const rightPupilRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number | null = null;
    let targetX = 0;
    let targetY = 0;

    const calcOffset = (eyeEl: HTMLDivElement | null, cursorX: number, cursorY: number) => {
      if (!eyeEl) return { x: 0, y: 0 };
      const rect = eyeEl.getBoundingClientRect();
      const eyeCenterX = rect.left + rect.width / 2;
      const eyeCenterY = rect.top + rect.height / 2;

      const deltaX = cursorX - eyeCenterX;
      const deltaY = cursorY - eyeCenterY;

      const angle = Math.atan2(deltaY, deltaX);
      const distance = Math.min(3.8, Math.hypot(deltaX, deltaY) / 20);

      return {
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
      };
    };

    const updatePupils = () => {
      if (leftEyeRef.current && leftPupilRef.current) {
        const leftOffset = calcOffset(leftEyeRef.current, targetX, targetY);
        leftPupilRef.current.style.transform = `translate3d(${leftOffset.x}px, ${leftOffset.y}px, 0)`;
      }

      if (rightEyeRef.current && rightPupilRef.current) {
        const rightOffset = calcOffset(rightEyeRef.current, targetX, targetY);
        rightPupilRef.current.style.transform = `translate3d(${rightOffset.x}px, ${rightOffset.y}px, 0)`;
      }

      rafId = null;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!rafId) {
        rafId = requestAnimationFrame(updatePupils);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
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
          ref={leftPupilRef}
          className="w-1.5 h-1.5 rounded-full will-change-transform"
          style={{
            backgroundColor: currentTheme.deepText,
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
          ref={rightPupilRef}
          className="w-1.5 h-1.5 rounded-full will-change-transform"
          style={{
            backgroundColor: currentTheme.deepText,
          }}
        />
      </div>
    </div>
  );
}
