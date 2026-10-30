"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import EyeFollower from "@/components/EyeFollower";

const leftNavItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

const rightNavItems = [
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { currentTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const allNavItems = [...leftNavItems, ...rightNavItems];

  // Prevent background scrolling when offcanvas drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-500 backdrop-blur-md border-b"
        style={{
          backgroundColor: `${currentTheme.background}EE`,
          borderColor: currentTheme.cardBorder,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          {/* Desktop Left Nav Links (Home, About) */}
          <nav className="hidden md:flex items-center gap-8 w-1/3 justify-start">
            {leftNavItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className="relative text-xs uppercase tracking-[0.2em] font-semibold py-1 group font-body transition-colors"
                  style={{
                    color: isActive ? currentTheme.deepText : currentTheme.mutedText,
                  }}
                >
                  <span>{item.name}</span>
                  {isActive ? (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px]"
                      style={{ backgroundColor: currentTheme.primaryAccent }}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  ) : (
                    <div
                      className="absolute -bottom-1 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                      style={{ backgroundColor: currentTheme.primaryAccent }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Center Logo with Interactive Cursor-Tracking Eyes */}
          <div className="flex justify-center md:w-1/3">
            <Link href="/" className="flex items-center gap-3 group focus:outline-none">
              <EyeFollower />
              <span
                className="font-heading text-lg sm:text-xl font-bold tracking-[0.25em] uppercase"
                style={{ color: currentTheme.deepText }}
              >
                STUDIO
              </span>
            </Link>
          </div>

          {/* Desktop Right Nav Links (Projects, Experience, Contact) */}
          <nav className="hidden md:flex items-center gap-8 w-1/3 justify-end">
            {rightNavItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className="relative text-xs uppercase tracking-[0.2em] font-semibold py-1 group font-body transition-colors"
                  style={{
                    color: isActive ? currentTheme.deepText : currentTheme.mutedText,
                  }}
                >
                  <span>{item.name}</span>
                  {isActive ? (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px]"
                      style={{ backgroundColor: currentTheme.primaryAccent }}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  ) : (
                    <div
                      className="absolute -bottom-1 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                      style={{ backgroundColor: currentTheme.primaryAccent }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-full border focus:outline-none cursor-pointer transition-transform active:scale-90"
              style={{
                borderColor: currentTheme.cardBorder,
                backgroundColor: currentTheme.baseCard,
                color: currentTheme.deepText,
              }}
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Off-Canvas Drawer (Slides in from Right on Mobile) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[100] md:hidden">
            {/* Backdrop Dimmer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />

            {/* Off-Canvas Panel Sliding from Right */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="absolute top-0 right-0 bottom-0 w-[82vw] max-w-sm border-l shadow-2xl p-6 sm:p-8 flex flex-col justify-between"
              style={{
                backgroundColor: currentTheme.background,
                borderColor: currentTheme.cardBorder,
                boxShadow: `-10px 0 40px ${currentTheme.accentGlow}`,
              }}
            >
              {/* Header inside Drawer */}
              <div>
                <div className="flex items-center justify-between pb-6 border-b" style={{ borderColor: currentTheme.cardBorder }}>
                  <div className="flex items-center gap-2.5">
                    <EyeFollower className="w-8 h-8" />
                    <span
                      className="font-heading text-sm font-bold tracking-[0.2em] uppercase"
                      style={{ color: currentTheme.deepText }}
                    >
                      STUDIO
                    </span>
                  </div>

                  {/* Close button */}
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full border focus:outline-none cursor-pointer transition-transform active:scale-90"
                    style={{
                      borderColor: currentTheme.cardBorder,
                      backgroundColor: currentTheme.baseCard,
                      color: currentTheme.deepText,
                    }}
                    aria-label="Close navigation menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Staggered Navigation Links */}
                <nav className="mt-8 flex flex-col space-y-3">
                  {allNavItems.map((item, index) => {
                    const isActive = pathname === item.path;
                    return (
                      <motion.div
                        key={item.path}
                        initial={{ opacity: 0, x: 25 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.08 * (index + 1), duration: 0.3 }}
                      >
                        <Link
                          href={item.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between p-3.5 rounded-2xl border transition-all cursor-pointer font-body group"
                          style={{
                            backgroundColor: isActive ? currentTheme.baseCard : "transparent",
                            borderColor: isActive ? currentTheme.primaryAccent : currentTheme.cardBorder,
                            color: isActive ? currentTheme.deepText : currentTheme.mutedText,
                          }}
                        >
                          <div className="flex items-center gap-3">
                            <span
                              className="w-2 h-2 rounded-full"
                              style={{
                                backgroundColor: isActive ? currentTheme.primaryAccent : "transparent",
                              }}
                            />
                            <span className="font-heading text-lg font-bold tracking-wide">
                              {item.name}
                            </span>
                          </div>

                          <ArrowRight
                            className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                              isActive ? "opacity-100" : "opacity-30"
                            }`}
                            style={{ color: currentTheme.primaryAccent }}
                          />
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              {/* Drawer Footer Status & Quick Info */}
              <div
                className="pt-6 border-t font-body space-y-3"
                style={{ borderColor: currentTheme.cardBorder }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full animate-ping"
                    style={{ backgroundColor: currentTheme.primaryAccent }}
                  />
                  <span className="text-xs font-semibold" style={{ color: currentTheme.deepText }}>
                    Available for New Opportunities
                  </span>
                </div>
                <p className="text-[11px] leading-relaxed" style={{ color: currentTheme.mutedText }}>
                  Associate Engineer at Probey Services • Next.js & Creative Frontend
                </p>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
