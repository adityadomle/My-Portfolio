"use client";

import { ProjectCard } from "@/components/project-card";
import HeadingBadge from "@/components/heading-badge";
import { FolderGit2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
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
    title: "AI Resume Analyzer",
    description:
      "An AI-powered resume analysis tool that evaluates resumes based on various parameters, providing feedback and suggestions for improvement.",
    imageUrl: "",
    videoUrl: "/projects/ai-resume-analyzer.mp4",
    tags: ["React", "Next.js", "Tailwind CSS", "OpenAI API"],
    link: "https://ai-resume-analyzer.vercel.app",
    githubLink: "https://github.com/adityadomle/ai-resume-analyzer",
    date: "10/08/2025",
  },
  {
    id: "2",
    title: "Nike Reimagined",
    description:
      "A modern redesign concept of Nike’s web experience built with React & Tailwind CSS — sleek UI, fluid animations, and mobile-first performance.",
    imageUrl: "",
    videoUrl: "/projects/nike-reimagined.mp4",
    tags: ["React", "Tailwind CSS", "Vite"],
    link: "https://nike-reimagined-mu.vercel.app",
    githubLink: "https://github.com/adityadomle/nike-reimagined",
    date: "15/06/2025",
  },
  {
    id: "3",
    title: "Freshmart Store",
    description:
      "Freshmart Store is a modern grocery store web app with a clean and responsive UI, built using React, Vite, Redux, and Tailwind CSS. It features smooth routing and efficient state management.",
    imageUrl: "",
    videoUrl: "/projects/freshmart-store.mp4",
    tags: ["React", "Vite", "Redux", "Tailwind CSS"],
    link: "https://freshmart-store.vercel.app",
    githubLink: "https://github.com/adityadomle/freshmart-store",
    date: "20/07/2025",
  },
  {
    id: "4",
    title: "BizFlow",
    description:
      "BizFlow is a sleek, responsive business landing page built with React, Tailwind CSS, and Framer Motion. Designed with modular components and smooth animations, it’s ideal for startups, agencies, and SaaS businesses aiming for a premium online presence.",
    imageUrl: "",
    videoUrl: "/projects/bizflow.mp4",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://biz-flow-alpha.vercel.app",
    githubLink: "https://github.com/adityadomle/BizFlow",
    date: "01/06/2025",
  },
  {
    id: "5",
    title: "GitHub Profile Viewer",
    description:
      "View any GitHub profile instantly using a clean UI built with HTML, CSS & JavaScript! This project showcases a simple yet effective way to display GitHub user profiles with a focus on performance and usability.",
    imageUrl: "",
    videoUrl: "/projects/clean-react-ui.mp4",
    tags: ["Html", "Tailwind CSS", "JavaScript"],
    link: "https://adityadomle.github.io/GitHub-Profile-Viewer/",
    githubLink: "https://github.com/adityadomle/GitHub-Profile-Viewer",
    date: "12/05/2025",
  },
  {
    id: "6",
    title: "Travel Planner",
    description:
      "A comprehensive travel planning application that allows users to plan trips, manage itineraries, and discover destinations.",
    imageUrl: "",
    videoUrl: "/projects/travel-planner.mp4",
    tags: ["React", "Tailwind CSS", "Ui Ux"],
    link: "https://tripventureo.vercel.app/",
    githubLink: "https://github.com/adityadomle/Travel-planner",
    date: "03/06/2025",
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
                className={`transition-all duration-500 ease-in-out transform ${isVisible
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