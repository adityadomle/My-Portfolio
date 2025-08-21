"use client";

import { IntroSection } from "@/components/sections/Intro-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-40">

      {/* Intro */}
      <IntroSection />
      <hr className="w-full border-gray-300/90 dark:border-gray-300/10 mt-10" />

      {/* About */}
      <AboutSection />
      <hr className="w-full border-gray-300/90 dark:border-gray-300/10 mt-10" />

      {/* Experience (Above Skills) */}
      <ExperienceSection />
      <hr className="w-full border-gray-300/90 dark:border-gray-300/10 mt-10" />

      {/* Skills */}
      <SkillsSection />
      <hr className="w-full border-gray-300/90 dark:border-gray-300/10 mt-10" />

      {/* Projects */}
      <ProjectsSection />
      <hr className="w-full border-gray-300/90 dark:border-gray-300/10 mt-10" />

      {/* Services */}
      <ServicesSection />
      <hr className="w-full border-gray-300/90 dark:border-gray-300/10 mt-10" />

      {/* Contact */}
      <ContactSection />
    </main>
  );
}
