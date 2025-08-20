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
    title: "Artifact UI",
    description:
      "Artifact UI is a modern UI component library designed to help developers and businesses build beautiful websites, web applications, and user interfaces with ease. it provides a comprehensive design system focused on aesthetics and performance.",
    imageUrl: "",
    videoUrl: "/projects/artifactui.mp4",
    tags: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    link: "https://artifactui.in",
    githubLink: "https://github.com/PrtHub",
    date: "13/02/2025",
  },
  {
    id: "2",
    title: "PXT Chat",
    description:
      "A high-performance AI Chat App built with the T3 Stack, featuring multi-LLM support, real-time streaming, and chat branching. Includes secure authentication, conversation history, and a responsive UI with markdown and code highlighting support.",
    imageUrl: "",
    videoUrl: "/projects/pxt.mp4",
    tags: ["Next.js", "TypeScript", "tRPC", "Drizzle", "NeonDB"],
    link: "https://pxt.vercel.app",
    githubLink: "https://github.com/PrtHub/pxt.chat",
    date: "15/03/2025",
  },
  {
    id: "3",
    title: "YooPlay",
    description:
      "YooPlay is a video streaming platform that allows users to discover and watch a wide range of videos. It provides a user-friendly interface for browsing and streaming videos, with features such as playlists, search, and user profiles.",
    imageUrl: "",
    videoUrl: "/projects/yoo.mp4",
    tags: ["Next.js", "tRPC", "Drizzle", "Mux", "NeonDB"],
    link: "https://yoo-play.vercel.app",
    githubLink: "https://github.com/PrtHub/streaming-platform",
    date: "22/05/2025",
  },
  {
    id: "4",
    title: "Helper",
    description:
      "Helper is a Platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
    imageUrl: "",
    videoUrl: "/projects/helper.mp4",
    tags: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    link: "https://helpernet.vercel.app",
    githubLink: "https://github.com/PrtHub/Helper",
    date: "13/02/2025",
  },
  {
    id: "5",
    title: "Bookwise",
    description:
      "Bookwise is a production-grade platform featuring a public-facing app and an admin interface. It offers advanced functionalities like seamless book borrowing with reminders and receipts, robust user management, automated workflows, and a modern, optimized tech stack for real-world scalability.",
    imageUrl: "",
    videoUrl: "/projects/bookwise.mp4",
    tags: ["Next.js", "Upstash", "NeonDB", "Drizzle"],
    link: "https://bookwise-lyart.vercel.app",
    githubLink: "https://github.com/PrtHub/bookwise",
    date: "13/02/2025",
  },
  {
    id: "6",
    title: "Real Estate Web Application",
    description:
      "Realo is an innovative platform designed to simplify real estate management. It offers a comprehensive solution for managing real estate properties, providing a seamless user experience for both property owners and seekers.",
    imageUrl: "",
    videoUrl: "/projects/realo.mp4",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://realo.onrender.com",
    githubLink: "https://github.com/PrtHub/realo",
    date: "13/02/2025",
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
