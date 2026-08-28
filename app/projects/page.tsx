"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import CodedexCover from "@/components/CodedexCover";

interface ProjectItem {
  id: string;
  name: string;
  category: string;
  date: string;
  description: string;
  shortDescription?: string;
  image?: string;
  video?: string;
  link: string;
  bgClass: string;
  status: "building" | "completed";
}

const projects: ProjectItem[] = [
  {
    id: "semantic",
    name: "Our inboxes store information, but fail to turn it into meaningful action.",
    category: "Semantic Email Copilot",
    date: "SPRING 2026",
    description: "An intelligent email copilot that transforms noisy inboxes into structured action items, deadlines, and Notion tasks using semantic NLP parsing.",
    shortDescription: "Companion copilot for busy inboxes / shipped Spring 2026",
    video: "/project-assets/semantic/demo1_gradient.mov",
    link: "/projects/semantic-email",
    bgClass: "bg-gradient-to-br from-[#EDE7DD] to-[#F6F3EC] shadow-[0_4px_24px_rgba(0,0,0,0.035)]",
    status: "completed",
  },
  {
    id: "memories",
    name: "We can leave things behind, but not always the words we wish we’d said.",
    category: "Memories",
    date: "2026",
    description: "A digital archive capturing moments, visuals, and memories.",
    shortDescription: "A digital archive for personal memories & visual moments",
    video: "/project-assets/memories/demo1_gradient.mov",
    link: "https://x.com/pynwrites/status/2093377832898670830",
    bgClass: "bg-gradient-to-br from-[#FDE2E4] to-[#FEF3C7]",
    status: "building",
  },
  {
    id: "codedex",
    name: "Designing CodeDex for Accessible, On-the-Go Learning",
    category: "Codédex App",
    date: "FALL 2025",
    description: "A personal project designing a playful and engaging learning platform for Codédex.",
    shortDescription: "Playful mobile learning app for Codédex",
    image: "/project-assets/codedex/Iphone 14.svg",
    link: "/projects/codedex",
    bgClass: "bg-[#F7FFE0]",
    status: "completed",
  },
];

function ProjectHoverCard({ project }: { project: ProjectItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isManuallyPaused, setIsManuallyPaused] = useState(false);
  const isExternal = project.link?.startsWith("http");

  // Auto-play continuously for video-first projects (or projects without a separate image cover)
  useEffect(() => {
    if (project.video && !project.image && !isManuallyPaused && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [project.video, project.image, isManuallyPaused]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (project.video && !isManuallyPaused && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // If project has an image cover, pause video on unhover (unless user explicitly paused)
    // If project has no image cover (video-first), keep playing continuously
    if (project.image && project.video && !isManuallyPaused && videoRef.current) {
      videoRef.current.pause();
    }
  };

  const togglePlayPause = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!videoRef.current) return;

    if (isManuallyPaused || videoRef.current.paused) {
      videoRef.current.play().catch(() => {});
      setIsManuallyPaused(false);
    } else {
      videoRef.current.pause();
      setIsManuallyPaused(true);
    }
  };

  const cardContent = (
    <>
      {/* Cover Image if available */}
      {project.image && (
        <Image
          src={project.image}
          alt={project.name}
          width={1994}
          height={1286}
          className={`w-full h-full object-contain scale-[1.35] sm:scale-[1.4] origin-center block rounded-2xl transition-opacity duration-300 ${
            (isHovered || isManuallyPaused) && project.video ? "opacity-0" : "opacity-100"
          }`}
          priority
        />
      )}

      {/* Video (Plays continuously or on hover for image covers) */}
      {project.video && (
        <>
          <video
            ref={videoRef}
            src={project.video}
            autoPlay={!project.image}
            muted
            loop
            playsInline
            preload="auto"
            className={`absolute inset-0 w-full h-full object-cover rounded-2xl transition-opacity duration-300 ${
              project.image
                ? isHovered || isManuallyPaused
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
                : "opacity-100"
            }`}
          />

          {/* Pause / Play Button */}
          <button
            type="button"
            onClick={togglePlayPause}
            aria-label={isManuallyPaused ? "Play video preview" : "Pause video preview"}
            className={`absolute top-3.5 right-3.5 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black/85 active:scale-95 text-white flex items-center justify-center backdrop-blur-md border border-white/20 hover:border-white/35 hover:scale-105 transition-all duration-200 cursor-pointer ${
              isHovered || isManuallyPaused
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-90 pointer-events-none"
            }`}
          >
            {isManuallyPaused ? (
              <svg width="12" height="13" viewBox="0 0 12 13" fill="currentColor" className="ml-0.5 text-white">
                <path d="M2.5 1.5C2.5.9 3.2.5 3.7.8l7 4.7c.5.3.5 1 0 1.4l-7 4.7c-.5.3-1.2 0-1.2-.6v-10.2z" />
              </svg>
            ) : (
              <svg width="12" height="13" viewBox="0 0 12 13" fill="none" className="text-white">
                <rect x="1.5" y="1" width="3" height="11" rx="1.5" fill="currentColor" />
                <rect x="7.5" y="1" width="3" height="11" rx="1.5" fill="currentColor" />
              </svg>
            )}
          </button>
        </>
      )}
    </>
  );

  if (project.id === "codedex") {
    return (
      <Link
        href={project.link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`w-full relative rounded-2xl overflow-hidden ${project.bgClass} block group aspect-square`}
      >
        <CodedexCover />
      </Link>
    );
  }

  if (isExternal) {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`w-full relative rounded-2xl overflow-hidden ${project.bgClass} block group aspect-square cursor-pointer`}
      >
        {cardContent}
      </a>
    );
  }

  if (!project.link || project.link === "#") {
    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`w-full relative rounded-2xl overflow-hidden ${project.bgClass} block group aspect-square select-none`}
      >
        {cardContent}
      </div>
    );
  }

  return (
    <Link
      href={project.link}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`w-full relative rounded-2xl overflow-hidden ${project.bgClass} block group aspect-square`}
    >
      {cardContent}
    </Link>
  );
}

export default function ProjectsPage() {
  return (
    <div className="flex flex-col flex-1 items-center bg-[#F7F6F4] [font-family:var(--font-dm-sans)] px-4 sm:px-6 md:px-10 lg:px-12 pt-24 sm:pt-28 pb-20 w-full min-h-screen">
      <div className="w-full max-w-none flex flex-col gap-12">
        
        {/* Project Cards Grid (Side by side 2 col - Full Width) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 sm:gap-x-8 lg:gap-x-10 gap-y-12 w-full">
          {projects.map((project) => {
            const isExternal = project.link?.startsWith("http");

            return (
              <div
                key={project.id}
                className="flex flex-col gap-3 w-full text-left"
              >
                <ProjectHoverCard project={project} />

                <div className="flex flex-col gap-1 text-left w-full pt-1">
                  {isExternal ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-fit"
                    >
                      <h2 className="text-2xl sm:text-3xl font-medium text-[#18181B] hover:text-[#5569FF] transition-colors leading-tight">
                        {project.name}
                      </h2>
                    </a>
                  ) : project.link && project.link !== "#" ? (
                    <Link href={project.link} className="block w-fit">
                      <h2 className="text-2xl sm:text-3xl font-medium text-[#18181B] hover:text-[#5569FF] transition-colors leading-tight">
                        {project.name}
                      </h2>
                    </Link>
                  ) : (
                    <div className="block w-fit">
                      <h2 className="text-2xl sm:text-3xl font-medium text-[#18181B] leading-tight">
                        {project.name}
                      </h2>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
