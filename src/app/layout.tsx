import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import { ThemeProvider } from "@/context/ThemeContext";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import TransitionOverlay from "@/components/TransitionOverlay";

export const metadata: Metadata = {
  title: "Portfolio | Crafted with Precision",
  description: "Animated portfolio website built with Next.js, Framer Motion, and GSAP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col relative overflow-x-hidden antialiased">
        <ThemeProvider>
          {/* 5-Column 20% Staggered Page Transition Overlay */}
          <TransitionOverlay />

          <SmoothScroll>
            <Navbar />
            <div className="relative z-10 flex-1 flex flex-col">
              {children}
            </div>
            <ThemeSwitcher />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
