"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe, Award, ShieldCheck } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import ScrollHeroZoom from "@/components/ScrollHeroZoom";

export default function HomePage() {
  const { currentTheme } = useTheme();

  return (
    <div
      className="relative min-h-screen flex flex-col transition-colors duration-500 overflow-hidden"
      style={{ backgroundColor: currentTheme.background, color: currentTheme.deepText }}
    >
      {/* 1. SCROLL-DRIVEN ZOOM HERO SECTION WITH EDITORIAL BACKGROUND IMAGE */}
      <ScrollHeroZoom>
        <section className="relative min-h-screen flex flex-col justify-between pt-24 overflow-hidden">
          {/* Background image with theme overlay blend */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero_light.jpg"
              alt="Sculptural Editorial Art Background"
              fill
              priority
              className="object-cover object-center filter contrast-[1.03] brightness-[0.98]"
            />
            {/* Soft ambient tint matching active theme */}
            <div
              className="absolute inset-0 opacity-40 transition-colors duration-700 mix-blend-multiply"
              style={{ backgroundColor: currentTheme.baseCard }}
            />
            {/* Smooth bottom gradient fade to background */}
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
                backgroundColor: currentTheme.background,
                borderColor: currentTheme.cardBorder,
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-ping"
                style={{ backgroundColor: currentTheme.primaryAccent }}
              />
              <span
                className="text-xs uppercase tracking-[0.25em] font-semibold font-body"
                style={{ color: currentTheme.deepText }}
              >
                Computer Science & Web Engineering
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight max-w-4xl leading-[1.05]"
              style={{ color: currentTheme.deepText }}
            >
              A website makes it real
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-10"
            >
              <Link
                href="/projects"
                className="group relative inline-flex items-center justify-center px-10 py-4 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl font-body"
                style={{
                  backgroundColor: currentTheme.deepText,
                  color: currentTheme.background,
                  boxShadow: `0 8px 24px ${currentTheme.accentGlow}`,
                }}
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-5 text-xs sm:text-sm md:text-base font-body tracking-wide"
              style={{ color: currentTheme.mutedText }}
            >
              1+ Year Experience • 14+ Client Deployments • 6 Open Source Inventions
            </motion.p>
          </main>

          <footer className="relative z-10 w-full text-center pb-12 px-6">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xs sm:text-sm font-body max-w-xl mx-auto tracking-wide leading-relaxed"
              style={{ color: currentTheme.mutedText }}
            >
              Delivering scalable production web solutions at Probey Services alongside academic engineering studies.
            </motion.p>
          </footer>
        </section>
      </ScrollHeroZoom>

      {/* 2. CIRCULAR MOVING PARTICLES SECTION (BLACK BACKGROUND WITH 30PX RADIUS & 20PX MARGIN) */}
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

        {/* Content Centered in Particle Sphere */}
        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center justify-center space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-heading text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight leading-[1.1] text-white"
          >
            Start your free website trial today
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-sm sm:text-base md:text-lg font-body tracking-wide font-medium text-neutral-300"
          >
            Engineering scalable web architectures with fluid user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="pt-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl font-body bg-white text-black hover:bg-neutral-200 cursor-pointer"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 3. HIGHLIGHT CARDS (ROUNDED BORDER + HOVER EFFECT) */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-28 space-y-20">
        <div className="text-center space-y-3">
          <span
            className="text-xs uppercase tracking-[0.3em] font-semibold font-body"
            style={{ color: currentTheme.primaryAccent }}
          >
            Highlights & Core Values
          </span>
          <h2
            className="font-heading text-3xl sm:text-5xl"
            style={{ color: currentTheme.deepText }}
          >
            Engineered for reliability & fluid aesthetics
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Globe,
              title: "14+ Production Deployments",
              desc: "Battle-tested client systems engineered at Probey Services, spanning enterprise portals, e-commerce, and IoT telemetry.",
            },
            {
              icon: Award,
              title: "Award Caliber Motion",
              desc: "Interactive spring physics, smooth momentum scroll, and WebGL particle shaders crafted with precision.",
            },
            {
              icon: ShieldCheck,
              title: "Fullstack Architecture",
              desc: "Deep hands-on experience with Next.js App Router, TypeScript, PostgreSQL, and scalable REST/WebSocket APIs.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="p-8 rounded-3xl border transition-all duration-300 cursor-pointer"
              style={{
                backgroundColor: currentTheme.baseCard,
                borderColor: currentTheme.cardBorder,
                boxShadow: `0 4px 20px rgba(0,0,0,0.04)`,
              }}
            >
              <item.icon className="w-8 h-8 mb-5" style={{ color: currentTheme.primaryAccent }} />
              <h3
                className="font-heading text-xl font-bold mb-3"
                style={{ color: currentTheme.deepText }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm leading-relaxed font-body"
                style={{ color: currentTheme.mutedText }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
