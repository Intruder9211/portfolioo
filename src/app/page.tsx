"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code, Sparkles, Terminal as TerminalIcon, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { useTheme } from "@/context/ThemeContext";
import ScrollHeroZoom from "@/components/ScrollHeroZoom";
import { STUDENT_PROFILE, PROJECTS, SKILLS_DATA } from "@/data/portfolioData";

export default function HomePage() {
  const { currentTheme } = useTheme();

  return (
    <div
      className="relative min-h-screen flex flex-col transition-colors duration-500 overflow-hidden"
      style={{ backgroundColor: currentTheme.background, color: currentTheme.deepText }}
    >
      {/* 1. HERO SECTION */}
      <ScrollHeroZoom>
        <section className="relative min-h-screen flex flex-col justify-between pt-24 overflow-hidden">
          {/* Background image with theme overlay blend */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/coding-pov.png"
              alt="Coding POV Background"
              fill
              priority
              className="object-cover object-center filter contrast-[1.05] brightness-[0.7]"
            />
            {/* Soft ambient tint matching active theme */}
            <div
              className="absolute inset-0 opacity-60 transition-colors duration-700"
              style={{ backgroundColor: currentTheme.background }}
            />
            {/* Smooth bottom gradient fade */}
            <div
              className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t to-transparent"
              style={{
                backgroundImage: `linear-gradient(to top, ${currentTheme.background}, transparent)`,
              }}
            />
          </div>

          {/* Hero Content */}
          <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto py-16 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border shadow-sm backdrop-blur-md"
              style={{
                backgroundColor: currentTheme.baseCard,
                borderColor: currentTheme.cardBorder,
              }}
            >
              <span
                className="w-2.5 h-2.5 rounded-full animate-ping"
                style={{ backgroundColor: currentTheme.primaryAccent }}
              />
              <span
                className="text-xs uppercase tracking-[0.25em] font-semibold font-body"
                style={{ color: currentTheme.deepText }}
              >
                Hi, I'm {STUDENT_PROFILE.name}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight max-w-4xl leading-[1.05]"
              style={{ color: currentTheme.deepText }}
            >
              Building Intelligent & Scalable Web Systems
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-sm sm:text-lg max-w-2xl font-body leading-relaxed"
              style={{ color: currentTheme.mutedText }}
            >
              {STUDENT_PROFILE.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                href="/projects"
                className="group relative inline-flex items-center justify-center px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl font-body rounded-full"
                style={{
                  backgroundColor: currentTheme.deepText,
                  color: currentTheme.background,
                  boxShadow: `0 8px 24px ${currentTheme.accentGlow}`,
                }}
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href={STUDENT_PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300 hover:scale-105 rounded-full border backdrop-blur-md"
                style={{
                  borderColor: currentTheme.cardBorder,
                  backgroundColor: currentTheme.baseCard,
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
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300 hover:scale-105 rounded-full border backdrop-blur-md"
                style={{
                  borderColor: currentTheme.cardBorder,
                  backgroundColor: currentTheme.baseCard,
                  color: currentTheme.deepText,
                }}
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </motion.div>

            {/* Quick Metrics */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-3xl">
              {STUDENT_PROFILE.stats.map((s, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl border text-center backdrop-blur-md"
                  style={{
                    backgroundColor: currentTheme.baseCard,
                    borderColor: currentTheme.cardBorder,
                  }}
                >
                  <p
                    className="font-heading text-2xl sm:text-3xl font-bold"
                    style={{ color: currentTheme.primaryAccent }}
                  >
                    {s.value}
                  </p>
                  <p className="text-xs font-body mt-1" style={{ color: currentTheme.mutedText }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </main>
        </section>
      </ScrollHeroZoom>

      {/* 2. CIRCULAR MOVING PARTICLES / ARCHITECTURE SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center py-20 px-6 overflow-hidden bg-black text-white rounded-[30px] m-[20px] shadow-2xl border border-white/10">
        {/* Circular Video Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div
            className="w-[300px] h-[300px] sm:w-[460px] sm:h-[460px] md:w-[600px] md:h-[600px] lg:w-[680px] lg:h-[680px] rounded-full overflow-hidden relative border shadow-2xl transition-all duration-500 bg-black"
            style={{
              borderColor: "rgba(255, 255, 255, 0.15)",
              boxShadow: `0 0 80px rgba(0, 0, 0, 0.9)`,
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/conversion-centered-mobile.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Content Centered */}
        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center justify-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-emerald-400">
              Neural Systems & Code Execution
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight leading-[1.1] text-white"
          >
            A Little About How I Build.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg font-body tracking-wide font-medium text-neutral-300 max-w-2xl mx-auto leading-relaxed"
          >
            {STUDENT_PROFILE.aboutPitch}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-4"
          >
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-10 py-4 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl font-body bg-white text-black hover:bg-neutral-200 cursor-pointer rounded-full"
            >
              <span>Read Full Philosophy</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 3. CORE PRINCIPLES */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 space-y-12">
        <div className="text-center space-y-3">
          <span
            className="text-xs uppercase tracking-[0.3em] font-semibold font-body"
            style={{ color: currentTheme.primaryAccent }}
          >
            Engineering Foundation
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl" style={{ color: currentTheme.deepText }}>
            Engineered for reliability & fluid aesthetics
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STUDENT_PROFILE.coreValues.map((v, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="p-8 rounded-3xl border transition-all duration-300"
              style={{
                backgroundColor: currentTheme.baseCard,
                borderColor: currentTheme.cardBorder,
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-base mb-5"
                style={{
                  backgroundColor: `${currentTheme.primaryAccent}22`,
                  color: currentTheme.primaryAccent,
                  border: `1px solid ${currentTheme.cardBorder}`,
                }}
              >
                {v.num}
              </div>
              <h3 className="font-heading text-xl font-bold mb-3" style={{ color: currentTheme.deepText }}>
                {v.title}
              </h3>
              <p className="text-sm leading-relaxed font-body" style={{ color: currentTheme.mutedText }}>
                {v.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. FEATURED PROJECTS PREVIEW */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span
              className="text-xs uppercase tracking-[0.25em] font-semibold font-body"
              style={{ color: currentTheme.primaryAccent }}
            >
              Selected Work
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl mt-2" style={{ color: currentTheme.deepText }}>
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold font-body hover:underline"
            style={{ color: currentTheme.primaryAccent }}
          >
            <span>View All ({PROJECTS.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.slice(0, 3).map((p) => (
            <div
              key={p.id}
              className="group rounded-3xl border overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col"
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
                <span className="absolute top-3 right-3 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider rounded-full bg-black/70 text-white backdrop-blur-md">
                  {p.category}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-xl font-bold mb-2" style={{ color: currentTheme.deepText }}>
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-body line-clamp-3 mb-4" style={{ color: currentTheme.mutedText }}>
                    {p.description}
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: currentTheme.cardBorder }}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold hover:underline"
                    style={{ color: currentTheme.primaryAccent }}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold hover:underline"
                    style={{ color: currentTheme.mutedText }}
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
