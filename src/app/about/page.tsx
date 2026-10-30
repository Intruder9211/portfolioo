"use client";

import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import ScrollHeroZoom from "@/components/ScrollHeroZoom";
import Image from "next/image";
import { Terminal, Lightbulb, GraduationCap, Building2, Code2, CheckCircle2 } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { STUDENT_PROFILE } from "@/data/portfolioData";

const skills = [
  "Next.js (App Router)",
  "React 19",
  "TypeScript",
  "Tailwind CSS v4",
  "Node.js & Express",
  "Framer Motion",
  "GSAP Timelines",
  "PostgreSQL & Prisma",
  "REST APIs & WebSockets",
  "Docker & Git",
  "UI/UX Prototyping",
  "Client Requirements Engineering",
];

export default function AboutPage() {
  const { currentTheme } = useTheme();

  return (
    <PageTransition>
      <div className="space-y-20">
        {/* Scroll Zoom Hero Banner with Ultra-Legible Overlay */}
        <ScrollHeroZoom>
          <div
            className="p-10 md:p-16 rounded-3xl border relative overflow-hidden shadow-sm"
            style={{
              backgroundColor: currentTheme.baseCard,
              borderColor: currentTheme.cardBorder,
            }}
          >
            {/* Background image with soft multiply blending so it never obstructs text */}
            <div className="absolute inset-0 z-0 opacity-15 mix-blend-multiply pointer-events-none">
              <Image
                src="/hero_light.jpg"
                alt="Architecture Hero Background"
                fill
                priority
                className="object-cover object-center"
              />
            </div>

            {/* Readability backdrop gradient */}
            <div
              className="absolute inset-0 z-0 pointer-events-none opacity-80"
              style={{
                backgroundImage: `linear-gradient(to right, ${currentTheme.baseCard} 60%, transparent)`,
              }}
            />

            <div className="relative z-10 max-w-4xl">
              <span
                className="text-xs uppercase tracking-[0.25em] font-bold"
                style={{ color: currentTheme.primaryAccent }}
              >
                Background & Profile
              </span>
              <h1
                className="font-heading text-4xl sm:text-6xl font-normal mt-3 leading-tight"
                style={{ color: currentTheme.deepText }}
              >
                Tech Student & Production Engineer.
              </h1>
              <p
                className="mt-6 text-base sm:text-lg leading-relaxed font-body font-medium"
                style={{ color: currentTheme.deepText }}
              >
                {STUDENT_PROFILE.summary}
              </p>

              <div
                className="mt-8 flex flex-wrap gap-4 pt-6 border-t text-xs font-body font-semibold"
                style={{ borderColor: currentTheme.cardBorder }}
              >
                <div
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full border shadow-sm"
                  style={{
                    backgroundColor: currentTheme.background,
                    borderColor: currentTheme.cardBorder,
                    color: currentTheme.deepText,
                  }}
                >
                  <GraduationCap className="w-4 h-4" style={{ color: currentTheme.primaryAccent }} />
                  <span>Computer Science Undergraduate</span>
                </div>

                <div
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full border shadow-sm"
                  style={{
                    backgroundColor: currentTheme.background,
                    borderColor: currentTheme.cardBorder,
                    color: currentTheme.deepText,
                  }}
                >
                  <Building2 className="w-4 h-4" style={{ color: currentTheme.primaryAccent }} />
                  <span>Associate Engineer at Probey Services</span>
                </div>

                <div
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full border shadow-sm"
                  style={{
                    backgroundColor: currentTheme.background,
                    borderColor: currentTheme.cardBorder,
                    color: currentTheme.deepText,
                  }}
                >
                  <Code2 className="w-4 h-4" style={{ color: currentTheme.primaryAccent }} />
                  <span>20+ Fullstack & Frontend Deployments</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollHeroZoom>

        {/* Core Pillars with High-Contrast Text */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Building2,
              title: "Client-Centric Delivery",
              desc: "14+ successful client deliverables engineered at Probey Services, aligning business requirements with performant web architectures.",
            },
            {
              icon: Terminal,
              title: "Engineering Fundamentals",
              desc: "Combining strong CS data structures & algorithms from university with contemporary TypeScript and modern Next.js production patterns.",
            },
            {
              icon: Lightbulb,
              title: "Fluid Motion & Aesthetics",
              desc: "Creating websites that leave an impression with GSAP, Framer Motion, micro-interactions, and 60 FPS hardware acceleration.",
            },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-8 rounded-3xl border transition-all duration-300 shadow-sm cursor-pointer"
              style={{
                backgroundColor: currentTheme.baseCard,
                borderColor: currentTheme.cardBorder,
                boxShadow: `0 4px 20px rgba(0,0,0,0.03)`,
              }}
            >
              <item.icon className="w-8 h-8 mb-4" style={{ color: currentTheme.primaryAccent }} />
              <h3
                className="font-heading text-xl font-bold mb-3"
                style={{ color: currentTheme.deepText }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm leading-relaxed font-body font-medium"
                style={{ color: currentTheme.mutedText }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Technical Arsenal with High Contrast Chips */}
        <div
          className="pt-8 border-t"
          style={{ borderColor: currentTheme.cardBorder }}
        >
          <h2
            className="font-heading text-2xl font-bold mb-6"
            style={{ color: currentTheme.deepText }}
          >
            Technical Skills & Arsenal
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.03 * index }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-5 py-2.5 text-sm rounded-full border font-bold transition-all shadow-sm cursor-pointer font-body"
                style={{
                  backgroundColor: currentTheme.baseCard,
                  borderColor: currentTheme.cardBorder,
                  color: currentTheme.deepText,
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
