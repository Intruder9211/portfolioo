"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import ScrollHeroZoom from "@/components/ScrollHeroZoom";
import Image from "next/image";
import { ExternalLink, Sparkles, Filter } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { useTheme } from "@/context/ThemeContext";
import { PROJECTS, STUDENT_PROFILE, ProjectItem } from "@/data/portfolioData";

export default function ProjectsPage() {
  const { currentTheme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...new Set(PROJECTS.map((p) => p.category))];

  const displayedProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

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
                alt="Projects Background"
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
                Portfolio Catalog
              </span>
              <h1
                className="font-heading text-4xl sm:text-6xl font-normal mt-3 max-w-3xl leading-tight"
                style={{ color: currentTheme.deepText }}
              >
                Crafted Systems & Applications
              </h1>
              <p
                className="mt-4 text-base sm:text-lg max-w-2xl font-body leading-relaxed"
                style={{ color: currentTheme.mutedText }}
              >
                Explore selected full-stack web applications, AI projects, and digital platforms engineered by {STUDENT_PROFILE.name}.
              </p>

              {/* Quick Metrics Bar */}
              <div
                className="mt-8 pt-6 border-t flex flex-wrap items-center gap-8 text-sm"
                style={{ borderColor: currentTheme.cardBorder }}
              >
                <div>
                  <span className="font-heading text-2xl font-bold" style={{ color: currentTheme.deepText }}>
                    {PROJECTS.length}
                  </span>
                  <span className="ml-2 text-xs font-body" style={{ color: currentTheme.mutedText }}>
                    Production Projects
                  </span>
                </div>
                <div>
                  <span className="font-heading text-2xl font-bold" style={{ color: currentTheme.deepText }}>
                    100%
                  </span>
                  <span className="ml-2 text-xs font-body" style={{ color: currentTheme.mutedText }}>
                    Responsive & Live
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollHeroZoom>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-3">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 border cursor-pointer"
                style={{
                  backgroundColor: isActive ? currentTheme.deepText : currentTheme.baseCard,
                  color: isActive ? currentTheme.background : currentTheme.deepText,
                  borderColor: isActive ? currentTheme.deepText : currentTheme.cardBorder,
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {displayedProjects.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl group"
                style={{
                  backgroundColor: currentTheme.baseCard,
                  borderColor: currentTheme.cardBorder,
                }}
              >
                <div className="relative aspect-video w-full overflow-hidden bg-neutral-900">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 right-3 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider rounded-full bg-black/75 text-white backdrop-blur-md">
                    {p.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-heading text-xl font-bold mb-2" style={{ color: currentTheme.deepText }}>
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-body leading-relaxed mb-4" style={{ color: currentTheme.mutedText }}>
                      {p.description}
                    </p>

                    {p.subDescription && p.subDescription.length > 0 && (
                      <ul className="space-y-1.5 border-t pt-3 mb-4" style={{ borderColor: currentTheme.cardBorder }}>
                        {p.subDescription.map((sub, sIdx) => (
                          <li key={sIdx} className="text-[11px] font-body text-neutral-400 flex items-start gap-1.5">
                            <span className="text-emerald-400">•</span>
                            <span>{sub}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span
                          key={t.id}
                          className="px-2.5 py-1 rounded-md text-[10px] font-mono font-medium border"
                          style={{
                            backgroundColor: currentTheme.background,
                            borderColor: currentTheme.cardBorder,
                            color: currentTheme.deepText,
                          }}
                        >
                          {t.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: currentTheme.cardBorder }}>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full border hover:scale-105 transition-transform"
                      style={{
                        backgroundColor: currentTheme.primaryAccent,
                        borderColor: currentTheme.primaryAccent,
                        color: "#fff",
                      }}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Site</span>
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full border hover:scale-105 transition-transform"
                      style={{
                        backgroundColor: currentTheme.background,
                        borderColor: currentTheme.cardBorder,
                        color: currentTheme.deepText,
                      }}
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </PageTransition>
  );
}
