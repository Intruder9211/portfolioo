"use client";

import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import ScrollHeroZoom from "@/components/ScrollHeroZoom";
import Image from "next/image";
import { Terminal, Lightbulb, GraduationCap, Building2, Code2, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { useTheme } from "@/context/ThemeContext";
import { STUDENT_PROFILE, SKILLS_DATA, EXPERIENCE_DATA } from "@/data/portfolioData";

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
            {/* Background image */}
            <div className="absolute inset-0 z-0 opacity-15 mix-blend-multiply pointer-events-none">
              <Image
                src="/assets/coding-pov.png"
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
                About {STUDENT_PROFILE.name}
              </span>
              <h1
                className="font-heading text-4xl sm:text-6xl font-normal mt-3 leading-tight"
                style={{ color: currentTheme.deepText }}
              >
                {STUDENT_PROFILE.title}
              </h1>
              <p
                className="mt-6 text-base sm:text-lg leading-relaxed font-body font-medium"
                style={{ color: currentTheme.deepText }}
              >
                {STUDENT_PROFILE.summary}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={STUDENT_PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-xs font-semibold tracking-wider uppercase backdrop-blur-sm"
                  style={{
                    backgroundColor: currentTheme.background,
                    borderColor: currentTheme.cardBorder,
                    color: currentTheme.deepText,
                  }}
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={STUDENT_PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-xs font-semibold tracking-wider uppercase backdrop-blur-sm"
                  style={{
                    backgroundColor: currentTheme.background,
                    borderColor: currentTheme.cardBorder,
                    color: currentTheme.deepText,
                  }}
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollHeroZoom>

        {/* Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STUDENT_PROFILE.coreValues.map((v, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl border transition-all duration-300"
              style={{
                backgroundColor: currentTheme.baseCard,
                borderColor: currentTheme.cardBorder,
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-base mb-4"
                style={{
                  backgroundColor: `${currentTheme.primaryAccent}22`,
                  color: currentTheme.primaryAccent,
                  border: `1px solid ${currentTheme.cardBorder}`,
                }}
              >
                {v.num}
              </div>
              <h3 className="font-heading text-xl font-bold mb-2" style={{ color: currentTheme.deepText }}>
                {v.title}
              </h3>
              <p className="text-sm font-body leading-relaxed" style={{ color: currentTheme.mutedText }}>
                {v.description}
              </p>
            </div>
          ))}
        </div>

        {/* Technical Mastery Radar / Grid */}
        <div
          className="p-10 md:p-14 rounded-3xl border"
          style={{
            backgroundColor: currentTheme.baseCard,
            borderColor: currentTheme.cardBorder,
          }}
        >
          <div className="mb-8">
            <span
              className="text-xs uppercase tracking-[0.25em] font-bold"
              style={{ color: currentTheme.primaryAccent }}
            >
              Technology Radar
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl mt-2" style={{ color: currentTheme.deepText }}>
              Skills & Engineering Stack
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS_DATA.map((skill, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl border transition-all hover:scale-[1.02]"
                style={{
                  backgroundColor: currentTheme.background,
                  borderColor: currentTheme.cardBorder,
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-mono font-bold"
                    style={{ backgroundColor: `${skill.c}25`, color: skill.c, border: `1px solid ${skill.c}44` }}
                  >
                    {skill.s}
                  </span>
                  <span
                    className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: currentTheme.baseCard, color: currentTheme.mutedText }}
                  >
                    {skill.g}
                  </span>
                </div>
                <h4 className="font-heading text-base font-bold mb-1" style={{ color: currentTheme.deepText }}>
                  {skill.n}
                </h4>
                <p className="text-xs font-body leading-relaxed" style={{ color: currentTheme.mutedText }}>
                  {skill.d}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Academic Milestone */}
        <div
          className="p-10 md:p-14 rounded-3xl border"
          style={{
            backgroundColor: currentTheme.baseCard,
            borderColor: currentTheme.cardBorder,
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-7 h-7" style={{ color: currentTheme.primaryAccent }} />
            <div>
              <span
                className="text-xs uppercase tracking-[0.25em] font-bold"
                style={{ color: currentTheme.primaryAccent }}
              >
                Education
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl" style={{ color: currentTheme.deepText }}>
                Academic Foundation
              </h2>
            </div>
          </div>

          {EXPERIENCE_DATA.filter((e) => e.subTitle).map((edu, idx) => (
            <div key={idx} className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="font-heading text-xl font-bold" style={{ color: currentTheme.deepText }}>
                    {edu.title}
                  </h3>
                  <p className="text-sm font-semibold" style={{ color: currentTheme.primaryAccent }}>
                    {edu.job} — {edu.subTitle}
                  </p>
                </div>
                <span
                  className="px-3 py-1 rounded-full text-xs font-mono border self-start sm:self-auto"
                  style={{
                    backgroundColor: currentTheme.background,
                    borderColor: currentTheme.cardBorder,
                    color: currentTheme.mutedText,
                  }}
                >
                  {edu.date}
                </span>
              </div>

              <ul className="space-y-2 mt-4">
                {edu.contents.map((item, cIdx) => (
                  <li key={cIdx} className="flex items-start gap-2.5 text-sm font-body" style={{ color: currentTheme.mutedText }}>
                    <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: currentTheme.primaryAccent }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
