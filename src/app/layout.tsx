import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import { ThemeProvider } from "@/context/ThemeContext";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import TransitionOverlay from "@/components/TransitionOverlay";

export const metadata: Metadata = {
  title: "Mohit Singh | Full Stack & AI Developer",
  description:
    "Portfolio of Mohit Singh - Full Stack Developer & AI Enthusiast specializing in React.js, Next.js, Node.js, and modern intelligent web systems.",
  keywords: [
    "Mohit Singh",
    "Portfolio",
    "Full Stack Developer",
    "React.js",
    "Next.js",
    "Node.js",
    "AI Developer",
    "Software Engineer",
    "Web Developer",
  ],
  authors: [{ name: "Mohit Singh" }],
  openGraph: {
    type: "website",
    title: "Mohit Singh | Full Stack & AI Developer",
    description: "Explore selected full-stack web applications, AI projects, and engineering journey of Mohit Singh.",
    images: ["/assets/coding-pov.png"],
  },
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
