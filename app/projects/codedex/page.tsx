import Image from "next/image";
import ScrollBackToTopSection from "@/components/ScrollBackToTopSection";
import ProjectSidebar from "@/components/ProjectSidebar";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Designing CodeDex for Accessible, On-the-Go Learning | Projects",
  description: "A personal project designing a playful and engaging learning platform for Codédex.",
  openGraph: {
    title: "Designing CodeDex for Accessible, On-the-Go Learning | Projects",
    description: "A personal project designing a playful and engaging learning platform for Codédex.",
    url: "/projects/codedex",
    images: [
      {
        url: "/project-assets/codedex/cover3.svg",
        width: 1994,
        height: 1286,
        alt: "Designing CodeDex Cover",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Designing CodeDex for Accessible, On-the-Go Learning | Projects",
    description: "A personal project designing a playful and engaging learning platform for Codédex.",
    images: ["/project-assets/codedex/cover3.svg"],
  },
};

const navItems = [
  { id: "overview", label: "OVERVIEW" },
  { id: "problem", label: "PROBLEM" },
  { id: "approach", label: "APPROACH" },
  { id: "exploration", label: "EXPLORATION" },
  { id: "solution", label: "SOLUTION" },
  { id: "outcome", label: "OUTCOME" },
];

export default function CodedexProjectPage() {
  return (
    <div className="flex flex-col flex-1 items-center bg-[#F7F6F4] [font-family:var(--font-dm-sans)] px-6 pt-28 md:pt-32 pb-16 w-full relative">
      <ProjectSidebar items={navItems} />

      <div className="w-full flex flex-col items-center gap-8">
        {/* Big Cover Image */}
        <div id="overview" className="max-w-5xl w-full relative rounded-md overflow-hidden scroll-mt-32">
          <Image
            src="/project-assets/codedex/cover3.svg"
            alt="Designing CodeDex Cover"
            width={1994}
            height={1286}
            className="w-full h-auto object-contain block rounded-md"
            priority
          />
        </div>
        <article className="max-w-2xl w-full text-left flex flex-col gap-10">
          <header className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#18181B] leading-tight">
                Designing CodeDex for Accessible, On-the-Go Learning
              </h1>
              <p className="text-lg sm:text-xl text-[#71717A]">
                A personal project designing a playful and engaging learning platform for Codédex.
              </p>
            </div>

            {/* Project Metadata Info Card */}
            <div className="bg-white rounded-md border border-zinc-200/80 p-4 sm:p-5 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 shadow-xs">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
                  Duration
                </span>
                <span className="text-sm sm:text-base text-zinc-700 font-medium">
                  May 2026 &mdash; Present
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
                  Role
                </span>
                <span className="text-sm sm:text-base text-zinc-700 font-medium">
                  UX/UI Designer
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
                  Team
                </span>
                <span className="text-sm sm:text-base text-zinc-700 font-medium">
                  Solo Project
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
                  Tools
                </span>
                <span className="text-sm sm:text-base text-zinc-700 font-medium">
                  Figma
                </span>
              </div>
            </div>
          </header>

          <div className="flex flex-col gap-8 w-full">
            <div id="problem" className="scroll-mt-32 -mx-3 sm:-mx-6 md:-mx-10 w-[calc(100%+1.5rem)] sm:w-[calc(100%+3rem)] md:w-[calc(100%+5rem)] max-w-none relative rounded-md overflow-hidden self-center">
              <Image
                src="/project-assets/codedex/chall.svg"
                alt="The Challenge"
                width={829}
                height={212}
                className="w-full h-auto object-contain block rounded-md"
                priority
              />
            </div>

            <div id="approach" className="scroll-mt-32 flex flex-col gap-8 w-full">
              <div className="-mx-3 sm:-mx-6 md:-mx-10 w-[calc(100%+1.5rem)] sm:w-[calc(100%+3rem)] md:w-[calc(100%+5rem)] max-w-none relative rounded-md overflow-hidden self-center">
                <Image
                  src="/project-assets/codedex/soln.svg"
                  alt="The Solution"
                  width={829}
                  height={206}
                  className="w-full h-auto object-contain block rounded-md"
                />
              </div>

              <div className="-mx-3 sm:-mx-6 md:-mx-10 w-[calc(100%+1.5rem)] sm:w-[calc(100%+3rem)] md:w-[calc(100%+5rem)] max-w-none relative rounded-md overflow-hidden self-center">
                <Image
                  src="/project-assets/codedex/mascot1.svg"
                  alt="Meet Dexter Mascot"
                  width={829}
                  height={206}
                  className="w-full h-auto object-contain block rounded-md"
                />
              </div>
            </div>

            <div id="exploration" className="scroll-mt-32 -mx-4 sm:-mx-10 md:-mx-16 lg:-mx-24 w-[calc(100%+2rem)] sm:w-[calc(100%+5rem)] md:w-[calc(100%+8rem)] lg:w-[calc(100%+12rem)] max-w-none relative rounded-md overflow-hidden self-center">
              <Image
                src="/project-assets/codedex/codedex3.webp"
                alt="CodeDex Interface Overview"
                width={2400}
                height={1500}
                className="w-full h-auto object-contain block rounded-md"
              />
            </div>

            <div className="-mx-4 sm:-mx-10 md:-mx-16 lg:-mx-24 w-[calc(100%+2rem)] sm:w-[calc(100%+5rem)] md:w-[calc(100%+8rem)] lg:w-[calc(100%+12rem)] max-w-none grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 self-center">
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/project-assets/codedex/codedex1.webp"
                  alt="CodeDex Character Illustration 1"
                  width={1350}
                  height={1080}
                  className="w-full h-auto object-contain block rounded-lg"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/project-assets/codedex/codedex2.webp"
                  alt="CodeDex Character Illustration 2"
                  width={1350}
                  height={1080}
                  className="w-full h-auto object-contain block rounded-lg"
                />
              </div>
            </div>

            <div id="solution" className="scroll-mt-32 flex flex-col gap-8 w-full">
              <div className="-mx-3 sm:-mx-6 md:-mx-10 w-[calc(100%+1.5rem)] sm:w-[calc(100%+3rem)] md:w-[calc(100%+5rem)] max-w-none relative rounded-lg overflow-hidden self-center">
                <Image
                  src="/project-assets/codedex/cp2.svg"
                  alt="Color Palette"
                  width={829}
                  height={155}
                  className="w-full h-auto object-contain block rounded-lg"
                />
              </div>

              <div className="-mx-4 sm:-mx-10 md:-mx-16 lg:-mx-24 w-[calc(100%+2rem)] sm:w-[calc(100%+5rem)] md:w-[calc(100%+8rem)] lg:w-[calc(100%+12rem)] max-w-none relative rounded-lg overflow-hidden self-center">
                <Image
                  src="/project-assets/codedex/color-palette.webp"
                  alt="CodeDex Color Palette"
                  width={2442}
                  height={1973}
                  className="w-full h-auto object-contain block rounded-lg"
                />
              </div>
            </div>

            {/* More Coming Soon Section (Outcome) */}
            <div id="outcome" className="scroll-mt-32 flex flex-col items-center justify-center p-8 sm:p-10 rounded-2xl bg-white border border-zinc-200/80 shadow-xs text-center gap-3 my-4">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#5569FF] bg-[#5569FF]/10 px-3 py-1 rounded-full">
                Work in Progress
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 m-0">
                More Coming Soon ✨
              </h3>
              <p className="text-zinc-600 text-base sm:text-lg max-w-md m-0">
                Interactive prototypes, mobile onboarding flows, and the complete design system breakdown are currently being documented.
              </p>
            </div>
          </div>

          {/* Scroll Back to Top & Thanks for Reading */}
          <ScrollBackToTopSection />
        </article>
      </div>
    </div>
  );
}

