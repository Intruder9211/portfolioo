"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import ScrollHeroZoom from "@/components/ScrollHeroZoom";
import Image from "next/image";
import confetti from "canvas-confetti";
import { Mail, MapPin, Send, CheckCircle2, Copy, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/SocialIcons";
import { useTheme } from "@/context/ThemeContext";
import { STUDENT_PROFILE } from "@/data/portfolioData";

export default function ContactPage() {
  const { currentTheme } = useTheme();
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(STUDENT_PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
      });
    } catch {
      // fallback
    }
  };

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
                alt="Contact Background"
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
                Let's Connect
              </span>
              <h1
                className="font-heading text-4xl sm:text-6xl font-normal mt-3 max-w-2xl leading-tight"
                style={{ color: currentTheme.deepText }}
              >
                Get In Touch with Mohit Singh
              </h1>
              <p
                className="mt-4 text-base sm:text-lg max-w-2xl font-body leading-relaxed"
                style={{ color: currentTheme.mutedText }}
              >
                Whether you have an inquiry, open role, freelance challenge, or want to explore modern web engineering,
                my inbox is always open.
              </p>
            </div>
          </div>
        </ScrollHeroZoom>

        {/* Content & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Direct Links & Info */}
          <div className="space-y-8">
            <div
              className="p-8 rounded-3xl border space-y-6"
              style={{
                backgroundColor: currentTheme.baseCard,
                borderColor: currentTheme.cardBorder,
              }}
            >
              <h2 className="font-heading text-2xl font-bold" style={{ color: currentTheme.deepText }}>
                Direct Contact
              </h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-2xl border" style={{ backgroundColor: currentTheme.background, borderColor: currentTheme.cardBorder }}>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5" style={{ color: currentTheme.primaryAccent }} />
                    <span className="text-sm font-body font-medium" style={{ color: currentTheme.deepText }}>
                      {STUDENT_PROFILE.email}
                    </span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl border hover:scale-105 transition-transform cursor-pointer"
                    style={{ borderColor: currentTheme.cardBorder }}
                    title="Copy Email"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" style={{ color: currentTheme.deepText }} />
                    )}
                  </button>
                </div>
              </div>

              <div className="pt-4 border-t space-y-3" style={{ borderColor: currentTheme.cardBorder }}>
                <span className="text-xs uppercase tracking-wider font-semibold" style={{ color: currentTheme.mutedText }}>
                  Profiles & Socials
                </span>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={STUDENT_PROFILE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold hover:scale-105 transition-transform"
                    style={{ backgroundColor: currentTheme.background, borderColor: currentTheme.cardBorder, color: currentTheme.deepText }}
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub ↗</span>
                  </a>
                  <a
                    href={STUDENT_PROFILE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold hover:scale-105 transition-transform"
                    style={{ backgroundColor: currentTheme.background, borderColor: currentTheme.cardBorder, color: currentTheme.deepText }}
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn ↗</span>
                  </a>
                  <a
                    href={STUDENT_PROFILE.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold hover:scale-105 transition-transform"
                    style={{ backgroundColor: currentTheme.background, borderColor: currentTheme.cardBorder, color: currentTheme.deepText }}
                  >
                    <InstagramIcon className="w-4 h-4" />
                    <span>Instagram ↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div
            className="p-8 md:p-10 rounded-3xl border"
            style={{
              backgroundColor: currentTheme.baseCard,
              borderColor: currentTheme.cardBorder,
            }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <div
                  className="w-16 h-16 rounded-full mx-auto flex items-center justify-center"
                  style={{ backgroundColor: `${currentTheme.primaryAccent}22`, color: currentTheme.primaryAccent }}
                >
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold" style={{ color: currentTheme.deepText }}>
                  Message Transmitted!
                </h3>
                <p className="text-sm font-body max-w-sm mx-auto" style={{ color: currentTheme.mutedText }}>
                  Thank you for reaching out. Mohit Singh will get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", message: "" });
                  }}
                  className="mt-4 px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase border cursor-pointer hover:scale-105"
                  style={{ backgroundColor: currentTheme.background, borderColor: currentTheme.cardBorder, color: currentTheme.deepText }}
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="font-heading text-2xl font-bold" style={{ color: currentTheme.deepText }}>
                  Send a Message
                </h2>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-semibold font-body" style={{ color: currentTheme.deepText }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-xl border text-sm font-body outline-none focus:ring-2 transition-all"
                    style={{
                      backgroundColor: currentTheme.background,
                      borderColor: currentTheme.cardBorder,
                      color: currentTheme.deepText,
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-semibold font-body" style={{ color: currentTheme.deepText }}>
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 rounded-xl border text-sm font-body outline-none focus:ring-2 transition-all"
                    style={{
                      backgroundColor: currentTheme.background,
                      borderColor: currentTheme.cardBorder,
                      color: currentTheme.deepText,
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-semibold font-body" style={{ color: currentTheme.deepText }}>
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project or inquiry..."
                    className="w-full px-4 py-3 rounded-xl border text-sm font-body outline-none focus:ring-2 transition-all resize-none"
                    style={{
                      backgroundColor: currentTheme.background,
                      borderColor: currentTheme.cardBorder,
                      color: currentTheme.deepText,
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-xs font-semibold tracking-widest uppercase transition-all duration-300 hover:scale-[1.02] active:scale-98 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                  style={{
                    backgroundColor: currentTheme.deepText,
                    color: currentTheme.background,
                  }}
                >
                  <span>Transmit Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
