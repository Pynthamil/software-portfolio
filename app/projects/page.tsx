"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectItem {
  title: string;
  tagline: string;
  description: string;
  image: string;
  video: string;
  link: string;
  tags: string[];
  status: string;
  bgClass: string;
}

const projects: ProjectItem[] = [
  {
    title: "Semantic Email Life-Management System",
    tagline: "Inbox to Second Brain",
    description: "A smart system that turns your chaotic inbox into a lightweight second brain by extracting tasks, deadlines, and context automatically.",
    image: "/project-assets/semantic/cover2.svg",
    video: "/project-assets/semantic/demo1.mov",
    link: "/projects/semantic-email",
    tags: ["Python", "FastAPI", "NLP", "Notion API"],
    status: "Prototype",
    bgClass: "bg-[#FFDFE0]",
  },
];

function ProjectHoverCard({ project }: { project: ProjectItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <Link
      href={project.link}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-full relative rounded-2xl overflow-hidden bg-[#FFDFE0] block group aspect-[1994/1286]"
    >
      {/* Cover Image (Default) */}
      <Image
        src={project.image}
        alt={project.title}
        width={1994}
        height={1286}
        className={`w-full h-full object-contain block rounded-2xl transition-opacity duration-300 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
        priority
      />

      {/* Video (Plays on Hover) */}
      <video
        ref={videoRef}
        src={project.video}
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover rounded-2xl transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
    </Link>
  );
}

export default function ProjectsPage() {
  return (
    <div className="flex flex-col flex-1 items-center bg-[#F7F6F4] [font-family:var(--font-dm-sans)] px-4 pt-24 pb-16 w-full min-h-screen">
      <div className="max-w-3xl w-full flex flex-col gap-6">
        
        {/* Header */}
        <div className="flex flex-col gap-2 pt-4 pb-2 text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#18181B] [font-family:var(--font-dm-sans)]">
            Projects
          </h1>
          <p className="text-base sm:text-lg text-[#71717A] [font-family:var(--font-dm-sans)]">
            Things I&apos;ve designed, built, and shipped.
          </p>
        </div>

        {/* Project Cards List */}
        <div className="flex flex-col gap-10">
          {projects.map((project) => (
            <div
              key={project.link}
              className="flex flex-col gap-6 w-full text-left"
            >
              <ProjectHoverCard project={project} />

              <div className="flex flex-col gap-3 text-left w-full">
                <Link href={project.link} className="block w-fit">
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#18181B] hover:text-[#5569FF] transition-colors leading-tight [font-family:var(--font-dm-sans)]">
                    {project.title}
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
