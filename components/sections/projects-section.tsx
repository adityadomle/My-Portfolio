"use client";

import { ProjectCard } from "@/components/project-card";
import HeadingBadge from "@/components/heading-badge";
import { FolderGit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  videoUrl?: string;
  tags: string[];
  link?: string;
  githubLink?: string;
  date?: string;
};

const projects: Project[] = [
  {
    id: "1",
    title: "Resumind",
    description:
      "Smart analyzer reviews your resume and gives instant tips using the Puter API. Built with React + TypeScript.",
    imageUrl: "/projects/img1.png",
    videoUrl: "",
    tags: ["React", "Tailwind CSS", "Puter API", "TypeScript"],
    link: "https://ai-resume-analyzer-psi-one.vercel.app/",
    githubLink: "https://github.com/adityadomle/ai-resume-analyzer",
    date: "05/08/2025",
  },
  {
    id: "2",
    title: "Nike Reimagined",
    description:
      "A high-performance AI Chat App built with the T3 Stack, featuring multi-LLM support, real-time streaming, and chat branching. Includes secure authentication, conversation history, and a responsive UI with markdown and code highlighting support.",
    imageUrl: "/projects/nike.png",
    videoUrl: "",
    tags: ["React", "Vite", "Tailwind", "Vercel", "UiUx"],
    link: "https://nike-reimagined-mu.vercel.app/",
    githubLink: "https://github.com/adityadomle/nike-reimagined",
    date: "10/08/2025",
  },
  {
    id: "3",
    title: "Freshmart Store",
    description:
      "A modern grocery store web app with a clean and responsive UI, built using React, Vite, Redux, and Tailwind CSS. Features smooth routing and efficient state management.",
    imageUrl: "/projects/freshmart.png",
    videoUrl: "",
    tags: ["React", "Vite", "Redux", "Tailwind CSS"],
    link: "https://freshmart-store.vercel.app", // 👈 deployed link
    githubLink: "https://github.com/adityadomle/freshmart-store",
    date: "15/06/2025",
  },
  {
    id: "4",
    title: "TripVentureo",
    description:
      "A responsive travel planner web app built with React and Tailwind CSS. Explore beautiful destinations, view curated experiences, and plan trips easily.",
    imageUrl: "/projects/travel.png",
    videoUrl: "",
    tags: ["React", "Vite", "Tailwind CSS"],
    link: "https://tripventureo.vercel.app", // 👈 deployed link
    githubLink: "https://github.com/adityadomle/Travel-planner",
    date: "20/06/2025",
  },
  {
    id: "5",
    title: "BizFlow",
    description:
      "A sleek, responsive business landing page/dashboard built with React, Tailwind CSS, and Framer Motion. Perfect for startups, agencies, or SaaS products.",
    imageUrl: "/projects/bizflow.png",
    videoUrl: "",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://bizflow.vercel.app", // 👈 deployed link
    githubLink: "https://github.com/adityadomle/BizFlow",
    date: "05/07/2025",
  },
  {
    id: "6",
    title: "Clean React UI",
    description:
      "A minimal and responsive UI template built using React and Tailwind CSS. Designed for clean design, fast performance, and easy customization.",
    imageUrl: "/projects/cleanui.png",
    videoUrl: "",
    tags: ["React", "Tailwind CSS", "UI Template"],
    link: "https://clean-react-ui.vercel.app", // 👈 deployed link
    githubLink: "https://github.com/adityadomle/clean-react-ui",
    date: "10/07/2025",
  },
];

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const initialProjectsToShow = 3;

  const projectsToShow = showAll
    ? projects
    : projects.slice(0, initialProjectsToShow);
  const canShowMore = projects.length > initialProjectsToShow;

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section
      id="projects"
      className="w-full pt-10 flex flex-col items-start justify-start gap-y-10"
    >
      <div className="flex flex-col items-start justify-start gap-5">
        <HeadingBadge
          title="Projects"
          icon={<FolderGit2 size={14} color="#A21CAF" />}
        />
        <div className="space-y-2">
          <h3 className="text-3xl font-semibold">
            My{" "}
            <span className="text-[#08090a] dark:text-slate-200">Projects</span>
          </h3>
          <p className="text-[#737373] dark:text-[#A1A1AA] text-sm">
            Explore some of the projects I&apos;ve worked on. These showcase my
            skills and expertise in various domains of software development.
          </p>
        </div>
      </div>

      <div className="w-full space-y-6">
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-1 gap-2 w-full">
          {projects.map((project) => {
            const isVisible = projectsToShow.some((p) => p.id === project.id);
            return (
              <div
                key={project.id}
                className={`transition-all duration-500 ease-in-out transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 h-0 -translate-y-4 overflow-hidden pointer-events-none"
                }`}
              >
                <ProjectCard project={project} />
              </div>
            );
          })}
        </div>

        {canShowMore && (
          <div className="flex justify-start w-full">
            <Button
              variant="ghost"
              onClick={toggleShowAll}
              className="relative overflow-hidden h-10 px-4 py-2 rounded-sm border border-gray-200/80 dark:border-gray-500/10 bg-white/50 dark:bg-[#0a0a0a]/50 text-[#737373] dark:text-[#A1A1AA] hover:text-[#08090a] dark:hover:text-slate-200 hover:border-gray-900/30 dark:hover:border-gray-500/20 transition-all duration-300 ease-in-out group cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                {showAll ? "Show Less" : "Show More"}
              </span>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
