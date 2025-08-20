"use client";

import HeadingBadge from "@/components/heading-badge";
import { IconBrandNextjs } from "@tabler/icons-react";
import {
  SiExpress,
  SiMongodb,
  SiTypescript,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import {
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  RiSupabaseFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { FiFigma } from "react-icons/fi";
import { VscVscode } from "react-icons/vsc";
import { BiLogoPostgresql } from "react-icons/bi";
import { Lightbulb } from "lucide-react";
import {
  SiFramer,
  SiRadixui,
  SiMui,
  SiAppwrite,
} from "react-icons/si";

type Skill = {
  name: string;
  icon?: React.ReactNode | string;
};

type SkillCategory = {
  name: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      { name: "JavaScript", icon: <IoLogoJavascript color="#F7DF1E" /> },
      { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
      { name: "Python", icon: <FaPython color="#3776AB" /> },
      { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
      { name: "CSS", icon: <FaCss3 color="#1572B6" /> },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: <FaReact color="#61DAFB" /> },
      { name: "Next.js", icon: <IconBrandNextjs color="#ffffff" /> },
      { name: "TailwindCSS", icon: <RiTailwindCssFill color="#06B6D4" /> },
      { name: "Framer Motion", icon: <SiFramer color="#0055FF" /> },
      { name: "shadcn/ui", icon: <span className="text-purple-500">⚡</span> },
      { name: "Material UI", icon: <SiMui color="#007FFF" /> },
      { name: "Radix UI", icon: <SiRadixui color="#000000" /> },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
      { name: "Express.js", icon: <SiExpress color="#ffffff" /> },
      { name: "PostgreSQL", icon: <BiLogoPostgresql color="#4169E1" /> },
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
      { name: "Supabase", icon: <RiSupabaseFill color="#3ECF8E" /> },
      { name: "Appwrite", icon: <SiAppwrite color="#F02E65" /> },
    ],
  },
  {
    name: "Tools & Platforms",
    skills: [
      { name: "Git", icon: <FaGitAlt color="#F05032" /> },
      { name: "GitHub", icon: <FaGithub color="#ffffff" /> },
      { name: "VS Code", icon: <VscVscode color="#007ACC" /> },
      { name: "Figma", icon: <FiFigma color="#F24E1E" /> },
      { name: "Vercel", icon: <span className="text-black">▲</span> },
      { name: "Netlify", icon: <span className="text-green-500">▵</span> },
      { name: "V0", icon: <span className="text-pink-500 font-bold">V0</span> },
      { name: "Hoppscotch", icon: <span className="text-orange-500">⚡</span> },
    ],
  },
];

const SkillTag = ({ name, icon }: Skill) => {
  return (
    <div className="inline-flex items-center gap-2 rounded-sm bg-white dark:bg-[#0a0a0a] border border-gray-200/80 dark:border-slate-500/10 px-3 py-1.5 transition-all duration-300 hover:border-gray-900/30 dark:hover:border-slate-500/10 hover:bg-gray-50 dark:hover:bg-[#111111] cursor-pointer">
      {icon && (
        <span className="flex items-center justify-center size-6 p-1 rounded-sm bg-gray-100 dark:bg-[#191a1a] text-xs font-medium text-[#08090a] dark:text-slate-200">
          {icon}
        </span>
      )}
      <span className="text-sm font-medium text-[#08090a] dark:text-gray-200">
        {name}
      </span>
    </div>
  );
};

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="w-full pt-10 flex flex-col items-start justify-start gap-y-10"
    >
      <div className="flex flex-col items-start justify-start gap-5">
        <HeadingBadge
          title="Skills"
          icon={<Lightbulb size={14} color="#2563EB" />}
        />
        <div className="space-y-2">
          <h3 className="text-3xl font-semibold">
            <span className="text-[#08090a] dark:text-slate-200">Skills</span> I
            have
          </h3>
          <p className="text-[#737373] dark:text-[#A1A1AA] text-sm">
            Technologies and tools I&apos;ve worked with and enjoy using
          </p>
        </div>
      </div>

      <div className="w-full space-y-5">
        {skillCategories.map((category) => (
          <div key={category.name} className="space-y-3">
            <h4 className="text-lg font-medium text-[#08090a] dark:text-white flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-[#08090a] dark:bg-slate-100"></span>
              {category.name}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <SkillTag key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Experience highlights */}
      <div className="w-full mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { value: "2+", label: "Years Experience" },
          { value: "20+", label: "Projects" },
          { value: "10+", label: "Clients" },
          { value: "15+", label: "Technologies" },
        ].map((highlight) => (
          <div
            key={highlight.label}
            className="group relative p-6 rounded-sm border border-gray-200/20 dark:border-gray-500/10 bg-white dark:bg-[#0a0a0a] hover:border-gray-900/30 dark:hover:border-gray-500/20 transition-all duration-300 text-center overflow-hidden dark:hover:bg-[#111111]"
          >
            <div className="relative z-10">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#08090a] to-[#737373] dark:from-slate-300 dark:to-slate-200 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                {highlight.value}
              </div>
              <div className="text-xs font-medium text-[#737373] dark:text-gray-400 mt-2 group-hover:text-[#08090a] dark:group-hover:text-white transition-colors duration-300">
                {highlight.label}
              </div>
            </div>
            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#08090a]/30 dark:via-slate-300/10 to-transparent scale-x-0 group-hover:scale-x-100 opacity-0 group-hover:opacity-100 transition-all duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}
