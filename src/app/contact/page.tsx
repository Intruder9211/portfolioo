"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import ScrollHeroZoom from "@/components/ScrollHeroZoom";
import Image from "next/image";
import confetti from "canvas-confetti";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function ContactPage() {
  const { currentTheme } = useTheme();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

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
                Inquiries & Collaborations
              </span>
              <h1
                className="font-heading text-4xl sm:text-6xl font-normal mt-3 max-w-2xl leading-tight"
                style={{ color: currentTheme.deepText }}
              >
                Let's build something extraordinary.
              </h1>
              <p
                className="mt-4 text-base sm:text-lg max-w-2xl font-body leading-relaxed"
                style={{ color: currentTheme.mutedText }}
              >
                Have a project inquiry, freelance contract, or want to discuss fullstack engineering and motion design?
                Transmit your message below.
              </p>
            </div>
          </div>
        </ScrollHeroZoom>

        {/* Content & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2
              className="font-heading text-2xl font-bold"
              style={{ color: currentTheme.deepText }}
            >
              Direct Connect
            </h2>
            <p
              className="text-sm leading-relaxed font-body"
              style={{ color: currentTheme.mutedText }}
            >
              Open for selective client projects, software engineering roles, and innovative web application contracts.
            </p>

            <div className="space-y-4 pt-2">
              <motion.div
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 p-4 rounded-2xl border transition-all cursor-pointer"
                style={{
                  backgroundColor: currentTheme.baseCard,
                  borderColor: currentTheme.cardBorder,
                }}
              >
                <div
                  className="w-12 h-12 rounded-2xl border flex items-center justify-center"
                  style={{
                    backgroundColor: currentTheme.background,
                    borderColor: currentTheme.cardBorder,
                  }}
                >
                  <Mail className="w-5 h-5" style={{ color: currentTheme.primaryAccent }} />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider font-body opacity-60">
                    Email
                  </div>
                  <a
                    href="mailto:alex@probey.services"
                    className="text-sm font-bold hover:underline font-body"
                    style={{ color: currentTheme.deepText }}
                  >
                    alex@probey.services
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 p-4 rounded-2xl border transition-all"
                style={{
                  backgroundColor: currentTheme.baseCard,
                  borderColor: currentTheme.cardBorder,
                }}
              >
                <div
                  className="w-12 h-12 rounded-2xl border flex items-center justify-center"
                  style={{
                    backgroundColor: currentTheme.background,
                    borderColor: currentTheme.cardBorder,
                  }}
                >
                  <MapPin className="w-5 h-5" style={{ color: currentTheme.primaryAccent }} />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider font-body opacity-60">
                    Location
                  </div>
                  <div
                    className="text-sm font-bold font-body"
                    style={{ color: currentTheme.deepText }}
                  >
                    Hybrid / Available Globally for Remote Engagements
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Form with Rounded Border & Shadows */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 md:p-10 rounded-3xl border shadow-xl relative"
            style={{
              backgroundColor: currentTheme.baseCard,
              borderColor: currentTheme.cardBorder,
              boxShadow: `0 10px 30px rgba(0,0,0,0.04)`,
            }}
          >
            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                <CheckCircle2
                  className="w-14 h-14 animate-bounce"
                  style={{ color: currentTheme.primaryAccent }}
                />
                <h3
                  className="font-heading text-2xl font-bold"
                  style={{ color: currentTheme.deepText }}
                >
                  Message Dispatched!
                </h3>
                <p
                  className="text-sm max-w-sm font-body"
                  style={{ color: currentTheme.mutedText }}
                >
                  Thank you for reaching out. I have received your message and will respond promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full border text-xs font-bold uppercase tracking-wider transition-all cursor-pointer font-body"
                  style={{
                    backgroundColor: currentTheme.deepText,
                    color: currentTheme.background,
                    borderColor: currentTheme.deepText,
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    className="block text-xs uppercase tracking-wider font-bold mb-2 font-body"
                    style={{ color: currentTheme.deepText }}
                  >
                    Your Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border text-sm focus:outline-none transition-all font-body"
                    style={{
                      backgroundColor: currentTheme.background,
                      borderColor: currentTheme.cardBorder,
                      color: currentTheme.deepText,
                    }}
                  />
                </div>

                <div>
                  <label
                    className="block text-xs uppercase tracking-wider font-bold mb-2 font-body"
                    style={{ color: currentTheme.deepText }}
                  >
                    Your Email
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border text-sm focus:outline-none transition-all font-body"
                    style={{
                      backgroundColor: currentTheme.background,
                      borderColor: currentTheme.cardBorder,
                      color: currentTheme.deepText,
                    }}
                  />
                </div>

                <div>
                  <label
                    className="block text-xs uppercase tracking-wider font-bold mb-2 font-body"
                    style={{ color: currentTheme.deepText }}
                  >
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your project, timeline, or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border text-sm focus:outline-none transition-all resize-none font-body"
                    style={{
                      backgroundColor: currentTheme.background,
                      borderColor: currentTheme.cardBorder,
                      color: currentTheme.deepText,
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 uppercase tracking-widest text-xs font-bold rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg cursor-pointer font-body"
                  style={{
                    backgroundColor: currentTheme.deepText,
                    color: currentTheme.background,
                    boxShadow: `0 8px 24px ${currentTheme.accentGlow}`,
                  }}
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Inquiry</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
