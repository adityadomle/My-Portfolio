"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Menu, X } from "lucide-react";
import MobileNav from "./mobile-nav";

interface NavbarProps {
  developerInitial?: string; // ✅ Added this
  sections?: {
    id: string;
    label: string;
  }[];
}

type SectionPosition = {
  id: string;
  top: number;
  bottom: number;
  height: number;
};

export function Navbar({
  developerInitial = "A", // ✅ Default value
  sections = [
    { id: "intro", label: "Intro" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ],
}: NavbarProps) {
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState("intro");
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Scroll effect
  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionPositions = sections
        .map((section) => {
          const element = document.getElementById(section.id);
          if (!element) return null;
          const rect = element.getBoundingClientRect();
          return {
            id: section.id,
            top: rect.top + window.scrollY,
            bottom: rect.bottom + window.scrollY,
            height: rect.height,
          };
        })
        .filter((s): s is SectionPosition => s !== null);

      if (!sectionPositions.length) return;

      const viewportCenter = window.scrollY + window.innerHeight / 2;

      const sortedSections = [...sectionPositions].sort((a, b) => {
        const aCenter = a.top + a.height / 2;
        const bCenter = b.top + b.height / 2;
        return Math.abs(aCenter - viewportCenter) - Math.abs(bCenter - viewportCenter);
      });

      const mostVisible = sortedSections[0];
      if (mostVisible && mostVisible.id !== activeSection) setActiveSection(mostVisible.id);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections, activeSection, mounted]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!mounted) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    const navbarHeight = 80;
    const offset = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
    window.scrollTo({ top: offset, behavior: "smooth" });
    setActiveSection(id);
  };

  if (!mounted) return null;

  return (
    <>
      <nav
        className={cn(
          "fixed top-3 sm:top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-[95%] max-w-[670px] py-2 px-4 rounded-sm transition-all duration-300 overflow-hidden",
          scrolled
            ? "bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border border-gray-200/50 dark:border-gray-500/10 shadow-lg"
            : "bg-white/60 dark:bg-[#0a0a0a]/60 backdrop-blur-sm border border-gray-200/60 dark:border-gray-500/10"
        )}
        onMouseMove={handleMouseMove}
      >
        {/* Logo */}
        <div className="flex-shrink-0 relative">
          <Link
            href="#"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-[#08090a] dark:bg-slate-100 text-white dark:text-black font-semibold"
          >
            {developerInitial} {/* ✅ Use the developerInitial prop */}
          </Link>
        </div>

        {/* Sections */}
        <div className="hidden sm:flex items-center space-x-1">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={`#${section.id}`}
              className={cn(
                "px-3 py-1.5 text-sm rounded-full transition-all duration-300",
                activeSection === section.id
                  ? "text-black dark:text-white bg-gray-100 dark:bg-[#191a1a]"
                  : "text-[#737373] dark:text-[#A1A1AA] hover:text-black dark:hover:text-white"
              )}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(section.id);
              }}
            >
              {section.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <button
          className="sm:hidden relative z-50 w-10 h-10 flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <MobileNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} sections={sections} />
    </>
  );
}
