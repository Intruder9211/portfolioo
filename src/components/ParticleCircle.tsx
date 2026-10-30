"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";

interface ParticleCircleProps {
  className?: string;
}

/**
 * 3D True Rotating Globe with Latitude & Longitude Coordinate Grid
 * Generates an unmistakably spherical, 3D rotating planetary globe with:
 * - Equator & parallel latitude rings
 * - Longitudinal meridian lines
 * - Continents / stochastic surface clusters
 * - Outer spherical atmospheric rim glow
 */
export default function ParticleCircle({ className = "" }: ParticleCircleProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { currentTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth * window.devicePixelRatio);
    let height = (canvas.height = canvas.offsetHeight * window.devicePixelRatio);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      height = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    };

    window.addEventListener("resize", handleResize);

    interface Point3D {
      x: number;
      y: number;
      z: number;
      type: "grid" | "land" | "rim";
      size: number;
      brightness: number;
    }

    const spherePoints: Point3D[] = [];

    // 1. Create Latitude & Longitude Globe Rings
    const LATITUDE_BANDS = 18;
    const LONGITUDE_LINES = 24;
    const POINTS_PER_LINE = 65;

    // Latitude circles (parallel rings from south pole to north pole)
    for (let lat = 1; lat < LATITUDE_BANDS; lat++) {
      const phi = (lat / LATITUDE_BANDS) * Math.PI; // 0 to PI
      const y = Math.cos(phi);
      const ringRadius = Math.sin(phi);

      const pointsOnRing = Math.floor(POINTS_PER_LINE * ringRadius);
      for (let i = 0; i < pointsOnRing; i++) {
        const theta = (i / pointsOnRing) * Math.PI * 2;
        spherePoints.push({
          x: ringRadius * Math.cos(theta),
          y: y,
          z: ringRadius * Math.sin(theta),
          type: "grid",
          size: 1.1,
          brightness: 0.75,
        });
      }
    }

    // Longitude meridians (vertical pole-to-pole arcs)
    for (let lon = 0; lon < LONGITUDE_LINES; lon++) {
      const theta = (lon / LONGITUDE_LINES) * Math.PI * 2;
      for (let i = 0; i < POINTS_PER_LINE; i++) {
        const phi = (i / POINTS_PER_LINE) * Math.PI;
        spherePoints.push({
          x: Math.sin(phi) * Math.cos(theta),
          y: Math.cos(phi),
          z: Math.sin(phi) * Math.sin(theta),
          type: "grid",
          size: 1.1,
          brightness: 0.75,
        });
      }
    }

    // 2. Continents / Landmass clusters for globe depth
    const LAND_POINTS = 900;
    for (let i = 0; i < LAND_POINTS; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);

      spherePoints.push({
        x: Math.sin(phi) * Math.cos(theta),
        y: Math.cos(phi),
        z: Math.sin(phi) * Math.sin(theta),
        type: "land",
        size: Math.random() * 1.5 + 0.8,
        brightness: Math.random() * 0.4 + 0.6,
      });
    }

    let rotY = 0;
    const tiltX = 0.38; // 22° Earth axial tilt for realistic globe appearance

    const particleColor = currentTheme.deepText || "#2C302E";
    const accentColor = currentTheme.primaryAccent || "#C86A45";

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(centerX, centerY) * 0.85;

      rotY += 0.0035; // Continuous smooth orbital spin

      // 1. Draw atmospheric rim outline circle
      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = currentTheme.cardBorder;
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();

      // 2. Project and sort 3D points by Z for true depth occlusion
      const projected = [];

      for (let i = 0; i < spherePoints.length; i++) {
        const pt = spherePoints[i];

        // Spin around Y axis
        const cosY = Math.cos(rotY);
        const sinY = Math.sin(rotY);
        const x1 = pt.x * cosY - pt.z * sinY;
        const z1 = pt.x * sinY + pt.z * cosY;
        const y1 = pt.y;

        // Apply Earth axial tilt on X axis
        const cosX = Math.cos(tiltX);
        const sinX = Math.sin(tiltX);
        const y2 = y1 * cosX - z1 * sinX;
        const z2 = y1 * sinX + z1 * cosX;
        const x2 = x1;

        // Perspective camera projection
        const fov = 3.5;
        const pz = z2 + fov;
        const scale = fov / pz;

        const screenX = centerX + x2 * radius * scale * 0.75;
        const screenY = centerY + y2 * radius * scale * 0.75;

        // Front vs back visibility
        const isFront = z2 > -0.15;
        const alpha = isFront
          ? Math.min(1, Math.max(0.15, (z2 + 1) / 1.6))
          : Math.max(0.04, (z2 + 1.2) * 0.08); // faint back hemisphere

        projected.push({
          x: screenX,
          y: screenY,
          size: pt.size * scale,
          alpha: alpha * pt.brightness,
          type: pt.type,
          z: z2,
        });
      }

      // Sort points so back points draw first
      projected.sort((a, b) => a.z - b.z);

      // Render points
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.5, p.size), 0, Math.PI * 2);

        if (p.type === "land") {
          ctx.fillStyle = accentColor;
        } else {
          ctx.fillStyle = particleColor;
        }

        ctx.globalAlpha = p.alpha;
        ctx.fill();
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [currentTheme]);

  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{
          filter: `drop-shadow(0 0 25px ${currentTheme.accentGlow})`,
        }}
      />
    </div>
  );
}
