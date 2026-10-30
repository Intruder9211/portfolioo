"use client";

import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import ScrollHeroZoom from "@/components/ScrollHeroZoom";
import Image from "next/image";
import { Briefcase, Calendar, MapPin, CheckCircle, Award } from "lucide-react";
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
            <div className="absolute inset-0 z-0 opacity-25 mix-blend-multiply">
              <Image
                src="/hero_light.jpg"
                alt="Architecture Hero Background"
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
                Industry Track Record
              </span>
              <h1
                className="font-heading text-4xl sm:text-6xl font-normal mt-3 max-w-2xl leading-tight"
                style={{ color: currentTheme.deepText }}
              >
                1+ Year Engineering at Probey Services
              </h1>
              <p
                className="mt-4 text-base sm:text-lg max-w-2xl font-body leading-relaxed"
                style={{ color: currentTheme.mutedText }}
              >
                Bridging academic computer science foundations with real-world production velocity. Delivering robust
                software for international client portfolios and enterprise partners.
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
                  <span>14+ Client Systems Delivered</span>
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
                  <span>Service-Based Solutions Expertise</span>
                </span>
              </div>
            </div>
          </div>
        </ScrollHeroZoom>

        {/* Timeline */}
        <div
          className="relative border-l ml-3 md:ml-4 pl-6 md:pl-8 space-y-12"
          style={{ borderColor: currentTheme.cardBorder }}
        >
          {EXPERIENCE_DATA.map((exp, idx) => (
            <motion.div
              key={exp.role + exp.period}
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline marker */}
              <div
                className="absolute -left-[31px] md:-left-[39px] top-2 w-3.5 h-3.5 rounded-full border-2 group-hover:scale-125 transition-all"
                style={{
                  borderColor: currentTheme.primaryAccent,
                  backgroundColor: currentTheme.background,
                }}
              />

              <motion.div
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-8 md:p-10 rounded-3xl border transition-all duration-300 shadow-sm cursor-pointer"
                style={{
                  backgroundColor: currentTheme.baseCard,
                  borderColor: currentTheme.cardBorder,
                  boxShadow: `0 4px 20px rgba(0,0,0,0.03)`,
                }}
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                  <h3
                    className="font-heading text-2xl font-bold"
                    style={{ color: currentTheme.deepText }}
                  >
                    {exp.role}
                  </h3>
                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-medium font-body"
                    style={{ color: currentTheme.mutedText }}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm mb-5 font-body">
                  <span
                    className="inline-flex items-center gap-1.5 font-bold"
                    style={{ color: currentTheme.deepText }}
                  >
                    <Briefcase className="w-3.5 h-3.5" style={{ color: currentTheme.primaryAccent }} />
                    {exp.company}
                  </span>
                  <span className="text-xs" style={{ color: currentTheme.mutedText }}>
                    ({exp.companyType})
                  </span>
                  <span
                    className="inline-flex items-center gap-1.5 text-xs"
                    style={{ color: currentTheme.mutedText }}
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                </div>

                <p
                  className="text-sm leading-relaxed mb-6 font-body"
                  style={{ color: currentTheme.deepText }}
                >
                  {exp.description}
                </p>

                {/* Key Highlights */}
                <div
                  className="space-y-2.5 mb-6 pt-4 border-t"
                  style={{ borderColor: currentTheme.cardBorder }}
                >
                  <h4
                    className="text-xs uppercase tracking-wider font-bold font-body"
                    style={{ color: currentTheme.deepText }}
                  >
                    Key Highlights & Impact
                  </h4>
                  {exp.achievements.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 text-sm font-body"
                      style={{ color: currentTheme.mutedText }}
                    >
                      <CheckCircle
                        className="w-4 h-4 shrink-0 mt-0.5"
                        style={{ color: currentTheme.primaryAccent }}
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-3 py-1.5 rounded-full border font-medium font-body"
                      style={{
                        backgroundColor: currentTheme.background,
                        borderColor: currentTheme.cardBorder,
                        color: currentTheme.deepText,
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
