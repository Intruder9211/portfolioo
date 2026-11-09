"use client";

import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import ScrollHeroZoom from "@/components/ScrollHeroZoom";
import Image from "next/image";
import { Briefcase, Calendar, ExternalLink, CheckCircle, Award } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { EXPERIENCE_DATA } from "@/data/portfolioData";

export default function ExperiencePage() {
  const { currentTheme } = useTheme();

  return (
    <PageTransition>
      <div className="space-y-16">
        {/* Scroll Zoom Hero Section with Editorial Background Image */}
        <ScrollHeroZoom>
          <div
            className="p-10 md:p-16 rounded-3xl border relative overflow-hidden shadow-sm"
            style={{
              backgroundColor: currentTheme.baseCard,
              borderColor: currentTheme.cardBorder,
            }}
          >
            {/* Background image overlay */}
            <div className="absolute inset-0 z-0 opacity-20 mix-blend-multiply">
              <Image
                src="/assets/coding-pov.png"
                alt="Experience Background"
                fill
                priority
                className="object-cover object-center"
              />
            </div>

            <div className="relative z-10">
              <span
                className="text-xs uppercase tracking-[0.25em] font-semibold"
                style={{ color: currentTheme.primaryAccent }}
              >
                Track Record & Career
              </span>
              <h1
                className="font-heading text-4xl sm:text-6xl font-normal mt-3 max-w-2xl leading-tight"
                style={{ color: currentTheme.deepText }}
              >
                Experience & Academic History
              </h1>
              <p
                className="mt-4 text-base sm:text-lg max-w-2xl font-body leading-relaxed"
                style={{ color: currentTheme.mutedText }}
              >
                Bridging computer science engineering foundations with high-velocity production web development.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <span
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold font-body"
                  style={{
                    backgroundColor: currentTheme.background,
                    borderColor: currentTheme.cardBorder,
                    color: currentTheme.deepText,
                  }}
                >
                  <Award className="w-3.5 h-3.5" style={{ color: currentTheme.primaryAccent }} />
                  <span>Full Stack & AI Development</span>
                </span>
                <span
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold font-body"
                  style={{
                    backgroundColor: currentTheme.background,
                    borderColor: currentTheme.cardBorder,
                    color: currentTheme.deepText,
                  }}
                >
                  <Briefcase className="w-3.5 h-3.5" style={{ color: currentTheme.primaryAccent }} />
                  <span>Modern JavaScript / TypeScript Ecosystem</span>
                </span>
              </div>
            </div>
          </div>
        </ScrollHeroZoom>

        {/* Timeline List */}
        <div className="space-y-8">
          {EXPERIENCE_DATA.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 md:p-10 rounded-3xl border transition-all duration-300"
              style={{
                backgroundColor: currentTheme.baseCard,
                borderColor: currentTheme.cardBorder,
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b pb-6" style={{ borderColor: currentTheme.cardBorder }}>
                <div>
                  <div className="flex items-center gap-3">
                    <span
                      className="text-xs uppercase tracking-wider font-mono font-bold px-3 py-1 rounded-full border"
                      style={{
                        backgroundColor: currentTheme.background,
                        borderColor: currentTheme.cardBorder,
                        color: currentTheme.primaryAccent,
                      }}
                    >
                      {exp.date}
                    </span>
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold mt-2" style={{ color: currentTheme.deepText }}>
                    {exp.title}
                  </h2>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm font-semibold" style={{ color: currentTheme.primaryAccent }}>
                      {exp.job}
                    </span>
                    {exp.subTitle && (
                      <span className="text-sm" style={{ color: currentTheme.mutedText }}>
                        • {exp.subTitle}
                      </span>
                    )}
                  </div>
                </div>

                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full border transition-colors hover:scale-105 self-start"
                    style={{
                      backgroundColor: currentTheme.background,
                      borderColor: currentTheme.cardBorder,
                      color: currentTheme.deepText,
                    }}
                  >
                    <span>Visit Company</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              <div className="mt-6">
                <h3 className="text-xs uppercase tracking-wider font-semibold mb-3 font-body" style={{ color: currentTheme.deepText }}>
                  Key Contributions & Focus Areas
                </h3>
                <ul className="space-y-3">
                  {exp.contents.map((c, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-body" style={{ color: currentTheme.mutedText }}>
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: currentTheme.primaryAccent }} />
                      <span className="leading-relaxed">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
