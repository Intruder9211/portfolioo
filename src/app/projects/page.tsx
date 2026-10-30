"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import ScrollHeroZoom from "@/components/ScrollHeroZoom";
import Image from "next/image";
import { ExternalLink, GitBranch, Building2, User, Sparkles } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import {
  CLIENT_PROJECTS_PROBEY,
  PERSONAL_PROJECTS,
  STUDENT_PROFILE,
  ProjectItem,
} from "@/data/portfolioData";

export default function ProjectsPage() {
  const { currentTheme } = useTheme();
  const [activeTab, setActiveTab] = useState<"all" | "client" | "personal">("all");

  const allProjects = [...CLIENT_PROJECTS_PROBEY, ...PERSONAL_PROJECTS];

  const displayedProjects =
    activeTab === "client"
      ? CLIENT_PROJECTS_PROBEY
      : activeTab === "personal"
      ? PERSONAL_PROJECTS
      : allProjects;

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
                Portfolio Catalog
              </span>
              <h1
                className="font-heading text-4xl sm:text-6xl font-normal mt-3 max-w-3xl leading-tight"
                style={{ color: currentTheme.deepText }}
              >
                Crafted with Precision. Delivered in Production.
              </h1>
              <p
                className="mt-4 text-base sm:text-lg max-w-2xl font-body leading-relaxed"
                style={{ color: currentTheme.mutedText }}
              >
                Showcasing <strong>{STUDENT_PROFILE.clientProjectsCount} client applications</strong> delivered at{" "}
                <span className="font-semibold" style={{ color: currentTheme.deepText }}>
                  {STUDENT_PROFILE.company}
                </span>{" "}
                and <strong>{STUDENT_PROFILE.personalProjectsCount} personal experimental builds</strong>.
              </p>

              {/* Quick Metrics Bar */}
              <div
                className="mt-8 pt-6 border-t flex flex-wrap items-center gap-8 text-sm"
                style={{ borderColor: currentTheme.cardBorder }}
              >
                <div>
                  <span
                    className="text-2xl font-bold font-heading"
                    style={{ color: currentTheme.deepText }}
                  >
                    14+
                  </span>
                  <p className="text-xs font-body" style={{ color: currentTheme.mutedText }}>
                    Client Deployments
                  </p>
                </div>
                <div
                  className="w-[1px] h-8"
                  style={{ backgroundColor: currentTheme.cardBorder }}
                />
                <div>
                  <span
                    className="text-2xl font-bold font-heading"
                    style={{ color: currentTheme.deepText }}
                  >
                    6
                  </span>
                  <p className="text-xs font-body" style={{ color: currentTheme.mutedText }}>
                    Personal Inventions
                  </p>
                </div>
                <div
                  className="w-[1px] h-8"
                  style={{ backgroundColor: currentTheme.cardBorder }}
                />
                <div>
                  <span
                    className="text-2xl font-bold font-heading"
                    style={{ color: currentTheme.deepText }}
                  >
                    1+ Yr
                  </span>
                  <p className="text-xs font-body" style={{ color: currentTheme.mutedText }}>
                    Service Industry Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollHeroZoom>

        {/* Tab Filter Navigation */}
        <div
          className="flex items-center justify-between flex-wrap gap-4 border-b pb-4"
          style={{ borderColor: currentTheme.cardBorder }}
        >
          <div className="flex items-center gap-2">
            {[
              { id: "all", label: `All Projects (${allProjects.length})` },
              {
                id: "client",
                label: `Client Works (${CLIENT_PROJECTS_PROBEY.length})`,
                icon: Building2,
              },
              {
                id: "personal",
                label: `Personal Projects (${PERSONAL_PROJECTS.length})`,
                icon: User,
              },
            ].map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className="px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-2 border cursor-pointer"
                  style={{
                    backgroundColor: isSelected ? currentTheme.deepText : "transparent",
                    color: isSelected ? currentTheme.background : currentTheme.mutedText,
                    borderColor: isSelected ? currentTheme.deepText : currentTheme.cardBorder,
                    boxShadow: isSelected ? `0 4px 12px ${currentTheme.accentGlow}` : "none",
                  }}
                >
                  {tab.icon && <tab.icon className="w-3.5 h-3.5" />}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <span className="text-xs font-body" style={{ color: currentTheme.mutedText }}>
            Showing <strong>{displayedProjects.length}</strong> items
          </span>
        </div>

        {/* Projects Grid with Rounded Border & Hover Lift */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {displayedProjects.map((proj: ProjectItem) => (
              <motion.div
                layout
                key={proj.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                whileHover={{ y: -6, scale: 1.015 }}
                transition={{ duration: 0.25 }}
                className="group flex flex-col justify-between p-7 rounded-3xl border transition-all duration-300 relative cursor-pointer"
                style={{
                  backgroundColor: currentTheme.baseCard,
                  borderColor: currentTheme.cardBorder,
                  boxShadow: `0 4px 20px rgba(0,0,0,0.03)`,
                }}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span
                      className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border"
                      style={{
                        color: currentTheme.deepText,
                        backgroundColor: currentTheme.background,
                        borderColor: currentTheme.cardBorder,
                      }}
                    >
                      {proj.category}
                    </span>
                    {proj.client && (
                      <span
                        className="text-[11px] font-medium truncate max-w-[160px] font-body"
                        style={{ color: currentTheme.mutedText }}
                      >
                        {proj.client}
                      </span>
                    )}
                  </div>

                  <h3
                    className="font-heading text-xl font-bold mt-2"
                    style={{ color: currentTheme.deepText }}
                  >
                    {proj.title}
                  </h3>

                  <p
                    className="text-sm mt-3 leading-relaxed font-body"
                    style={{ color: currentTheme.mutedText }}
                  >
                    {proj.description}
                  </p>

                  {proj.metrics && (
                    <div
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold font-body"
                      style={{ color: currentTheme.primaryAccent }}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{proj.metrics}</span>
                    </div>
                  )}
                </div>

                <div
                  className="mt-8 pt-4 border-t"
                  style={{ borderColor: currentTheme.cardBorder }}
                >
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-1 rounded-md border font-medium font-body"
                        style={{
                          backgroundColor: currentTheme.background,
                          borderColor: currentTheme.cardBorder,
                          color: currentTheme.deepText,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-5">
                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold hover:underline transition-colors"
                        style={{ color: currentTheme.deepText }}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </a>
                    )}
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold hover:underline transition-colors"
                        style={{ color: currentTheme.mutedText }}
                      >
                        <GitBranch className="w-3.5 h-3.5" />
                        Source
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </PageTransition>
  );
}
