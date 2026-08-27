"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CodedexCover from "@/components/CodedexCover";

interface ProjectItem {
  id: string;
  name: string;
  category: string;
  date: string;
  description: string;
  image: string;
  video?: string;
  link: string;
  bgClass: string;
}

const projects: ProjectItem[] = [
  {
    id: "semantic",
    name: "Our inboxes store information, but fail to turn it into meaningful action.",
    category: "SEMANTIC EMAIL COPILOT",
    date: "SPRING 2026",
    description: "An intelligent email copilot that transforms noisy inboxes into structured action items, deadlines, and Notion tasks using semantic NLP parsing.",
    image: "/project-assets/semantic/cover2.svg",
    video: "/project-assets/semantic/demo1.mov",
    link: "/projects/semantic-email",
    bgClass: "bg-[#FFDFE0]",
  },
  {
    id: "codedex",
    name: "Designing CodeDex for Accessible, On-the-Go Learning",
    category: "CODÉDEX",
    date: "FALL 2025",
    description: "A playful and engaging learning platform project built for Codédex.",
    image: "/project-assets/codedex/Iphone 14.svg",
    link: "/projects/codedex",
    bgClass: "bg-[#F7FFE0]",
  },
];

function ProjectHoverCard({ project }: { project: ProjectItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    if (project.video) {
      setIsHovered(true);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      }
    }
  };

  const handleMouseLeave = () => {
    if (project.video) {
      setIsHovered(false);
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  };

  if (project.id === "codedex") {
    return (
      <Link
        href={project.link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`w-full relative rounded-3xl overflow-hidden ${project.bgClass} block group aspect-square`}
      >
        <CodedexCover />
      </Link>
    );
  }

  return (
    <Link
      href={project.link}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`w-full relative rounded-3xl overflow-hidden ${project.bgClass} block group aspect-square`}
    >
      {/* Cover Image (Default - zoomed to fill card) */}
      <Image
        src={project.image}
        alt={project.name}
        width={1994}
        height={1286}
        className={`w-full h-full object-contain scale-[1.35] sm:scale-[1.4] origin-center block rounded-3xl transition-opacity duration-300 ${
          isHovered && project.video ? "opacity-0" : "opacity-100"
        }`}
        priority
      />

      {/* Video (Plays on Hover if available) */}
      {project.video && (
        <video
          ref={videoRef}
          src={project.video}
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover rounded-3xl transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        />
      )}
    </Link>
  );
}

export default function ProjectsPage() {
  return (
    <div className="flex flex-col flex-1 items-center bg-[#F7F6F4] [font-family:var(--font-dm-sans)] px-4 sm:px-6 md:px-10 lg:px-12 pt-24 sm:pt-28 pb-20 w-full min-h-screen">
      <div className="w-full max-w-none flex flex-col gap-12">
        
        {/* Project Cards Grid (Side by side 2 col - Full Width) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 sm:gap-x-8 lg:gap-x-10 gap-y-12 w-full">
          {projects.map((project) => (
            <div
              key={project.link}
              className="flex flex-col gap-3 w-full text-left"
            >
              <ProjectHoverCard project={project} />

              <div className="flex flex-col gap-1 text-left w-full pt-1">
                <span className="text-xs uppercase font-mono tracking-widest text-[#8E8E93]">
                  {project.category} &ndash; {project.date}
                </span>
                <Link href={project.link} className="block w-fit">
                  <h2 className="text-2xl sm:text-3xl font-medium text-[#18181B] hover:text-[#5569FF] transition-colors leading-tight">
                    {project.name}
                  </h2>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
