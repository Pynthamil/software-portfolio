import Image from "next/image";
import ScrollBackToTopSection from "@/components/ScrollBackToTopSection";
import ProjectSidebar from "@/components/ProjectSidebar";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "orca.ai — Marine Science Intelligence Platform | Projects",
  description:
    "Marine science is full of information, but finding the right answers shouldn't feel like searching an ocean. An AI conversational research assistant for oceanographic discovery.",
  openGraph: {
    title: "orca.ai — Marine Science Intelligence Platform | Projects",
    description:
      "Marine science is full of information, but finding the right answers shouldn't feel like searching an ocean.",
    url: "/projects/orca",
    images: [
      {
        url: "/orca_ai/logo_and_name.svg",
        width: 2531,
        height: 1600,
        alt: "orca.ai Brand Cover",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "orca.ai — Marine Science Intelligence Platform | Projects",
    description:
      "Marine science is full of information, but finding the right answers shouldn't feel like searching an ocean.",
    images: ["/orca_ai/logo_and_name.svg"],
  },
};

const navItems = [
  { id: "overview", label: "OVERVIEW" },
  { id: "problem", label: "PROBLEM" },
  { id: "solution", label: "SOLUTION" },
  { id: "brand", label: "BRAND" },
  { id: "reflection", label: "REFLECTION" },
];

export default function OrcaProjectPage() {
  return (
    <div className="flex flex-col flex-1 items-center bg-[#F7F6F4] [font-family:var(--font-dm-sans)] px-6 pt-28 md:pt-32 pb-16 w-full relative">
      <ProjectSidebar items={navItems} />

      <div className="w-full flex flex-col items-center gap-8">
        {/* Top Hero Image - Brand Cover */}
        <div
          id="overview"
          className="max-w-5xl w-full relative rounded-2xl overflow-hidden scroll-mt-32 shadow-xs border border-zinc-200/80 bg-gradient-to-b from-[#095F76] to-[#74B1C3]"
        >
          <Image
            src="/orca_ai/logo_and_name.svg"
            alt="orca.ai Brand Overview"
            width={2531}
            height={1600}
            className="w-full h-auto object-contain block"
            priority
            unoptimized
          />
        </div>

        {/* Main Article Container */}
        <article className="max-w-2xl w-full text-left flex flex-col gap-10">
          {/* Header / Overview Section */}
          <section id="overview" className="scroll-mt-32 flex flex-col gap-4">
            <span className="text-xs uppercase font-mono tracking-widest text-zinc-500">
              OVERVIEW
            </span>

            <h1 className="text-2xl sm:text-3xl font-bold text-[#18181B] leading-snug">
              Orca.ai is an intelligent marine science research platform that turns fragmented ocean data into clear answers.
            </h1>

            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
              Marine science is full of observational data, but finding the right answers shouldn&apos;t feel like searching an ocean. Orca.ai centralizes fragmented research papers, telemetry datasets, and conservation reports into an intuitive conversational workspace with interactive charts. Built with Next.js, Tailwind CSS, and LLMs.
            </p>

            {/* App Icon + Link */}
            <a
              href="https://github.com/Pynthamil"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 group/app w-fit pt-2"
            >
              <div className="w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] rounded-2xl overflow-hidden shrink-0 shadow-xs flex items-center justify-center relative">
                <Image
                  src="/orca_ai/logo.svg"
                  alt="Orca.ai App Icon"
                  width={2336}
                  height={1904}
                  className="w-full h-full object-cover scale-[1.7]"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/0 group-hover/app:bg-black/[0.08] transition-colors duration-200 pointer-events-none rounded-2xl" />
              </div>
              <div className="flex flex-col text-left gap-0.5">
                <span className="flex items-center gap-1.5 font-bold text-lg sm:text-xl text-zinc-900 group-hover/app:text-[#095F76] transition-colors leading-tight">
                  <span>Orca.ai</span>
                  <svg
                    className="w-4 h-4 text-zinc-400 group-hover/app:text-[#095F76] group-hover/app:translate-x-0.5 group-hover/app:-translate-y-0.5 transition-all duration-200 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
                <span className="text-xs sm:text-sm uppercase font-mono tracking-wider text-zinc-500">
                  GITHUB
                </span>
              </div>
            </a>
          </section>

            {/* Problem Section */}
            <section id="problem" className="scroll-mt-32 flex flex-col gap-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#18181B] [font-family:var(--font-dm-sans)]">
                Problem
              </h2>
              <p className="text-zinc-700 text-base sm:text-lg leading-relaxed">
                Marine biology research is rich in scientific data, but much of it is fragmented across research papers, datasets, conservation reports, and different online sources. This makes it difficult for researchers, students, and curious users to quickly find reliable information, understand trends, and connect data with real-world marine conservation issues.
              </p>

              {/* Core Idea / Challenge Quote Card */}
              <div className="-mx-4 sm:-mx-10 md:-mx-16 lg:-mx-24 w-[calc(100%+2rem)] sm:w-[calc(100%+5rem)] md:w-[calc(100%+8rem)] lg:w-[calc(100%+12rem)] max-w-none self-center relative overflow-hidden rounded-2xl sm:rounded-3xl py-10 sm:py-14 px-7 sm:px-14 md:px-16 bg-gradient-to-b from-[#095F76] to-[#74B1C3] shadow-md my-4">
                {/* Decorative Organic Waves matching reference */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 900 400"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M-50,400 C200,400 350,220 580,130 C720,65 800,0 950,-20 L950,400 Z"
                    fill="white"
                    fillOpacity="0.1"
                  />
                  <path
                    d="M100,400 C320,330 460,160 680,70 C780,25 850,-10 950,-30 L950,400 Z"
                    fill="white"
                    fillOpacity="0.08"
                  />
                  <circle cx="120" cy="40" r="160" fill="white" fillOpacity="0.05" />
                </svg>

                <div className="relative z-10 flex flex-col gap-1 sm:gap-2">
                  <span className="text-7xl sm:text-8xl md:text-9xl font-serif text-white/35 leading-none select-none -mb-3 sm:-mb-6 md:-mb-8 block">
                    “
                  </span>
                  <blockquote className="text-2xl sm:text-3xl md:text-[2.15rem] font-medium text-white leading-snug tracking-tight m-0 max-w-3xl [font-family:var(--font-dm-sans)]">
                    “How might we make marine biology research easier to discover, understand, and explore through a single intelligent experience?”
                  </blockquote>
                </div>
              </div>
            </section>

            {/* Solution Section */}
            <section id="solution" className="scroll-mt-32 flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#18181B] [font-family:var(--font-dm-sans)]">
                  Solution
                </h2>
                <p className="text-zinc-700 text-base sm:text-lg leading-relaxed">
                  Orca.ai is an AI-powered marine biology research platform that brings fragmented scientific information, species data, and marine datasets into one intelligent, visual experience.
                </p>
                <p className="text-zinc-700 text-base sm:text-lg leading-relaxed">
                  Instead of requiring users to search through multiple papers and sources, Orca.ai enables them to ask questions, discover research, explore species, and understand complex datasets through interactive visualizations.
                </p>
              </div>

              {/* Full Width Visual Mockup */}
              <div className="-mx-4 sm:-mx-12 md:-mx-24 lg:-mx-36 xl:-mx-48 2xl:-mx-60 w-[calc(100%+2rem)] sm:w-[calc(100%+6rem)] md:w-[calc(100%+12rem)] lg:w-[calc(100%+18rem)] xl:w-[calc(100%+24rem)] 2xl:w-[calc(100%+30rem)] max-w-none relative rounded-2xl overflow-hidden border border-zinc-200/80 shadow-md bg-gradient-to-b from-[#095F76] to-[#74B1C3] self-center">
                <Image
                  src="/orca_ai/img2.svg"
                  alt="Orca.ai Interactive Chat and Analytics Workspace"
                  width={2336}
                  height={1775}
                  className="w-full h-auto object-contain block"
                  unoptimized
                />
              </div>

              {/* Feature Grid */}
              <div className="-mx-4 sm:-mx-10 md:-mx-16 lg:-mx-24 w-[calc(100%+2rem)] sm:w-[calc(100%+5rem)] md:w-[calc(100%+8rem)] lg:w-[calc(100%+12rem)] max-w-none self-center grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pt-2">
                <div className="py-4.5 sm:py-5 px-5 sm:px-6 rounded-2xl bg-white border border-zinc-200/80 shadow-xs flex flex-col gap-1.5 justify-center">
                  <div className="flex items-center gap-2 font-bold text-zinc-900 text-base sm:text-lg">
                    <span className="text-xl">🔎</span>
                    <span>AI-powered research</span>
                  </div>
                  <p className="text-zinc-600 text-sm sm:text-base m-0 leading-relaxed">
                    Ask natural-language questions and get contextual, research-backed answers.
                  </p>
                </div>

                <div className="py-4.5 sm:py-5 px-5 sm:px-6 rounded-2xl bg-white border border-zinc-200/80 shadow-xs flex flex-col gap-1.5 justify-center">
                  <div className="flex items-center gap-2 font-bold text-zinc-900 text-base sm:text-lg">
                    <span className="text-xl">🐋</span>
                    <span>Species intelligence</span>
                  </div>
                  <p className="text-zinc-600 text-sm sm:text-base m-0 leading-relaxed">
                    Explore species profiles, behaviors, habitats, populations, and conservation information.
                  </p>
                </div>

                <div className="py-4.5 sm:py-5 px-5 sm:px-6 rounded-2xl bg-white border border-zinc-200/80 shadow-xs flex flex-col gap-1.5 justify-center">
                  <div className="flex items-center gap-2 font-bold text-zinc-900 text-base sm:text-lg">
                    <span className="text-xl">📊</span>
                    <span>Interactive data visualization</span>
                  </div>
                  <p className="text-zinc-600 text-sm sm:text-base m-0 leading-relaxed">
                    Transform complex marine datasets into charts and visual insights that reveal trends and patterns.
                  </p>
                </div>

                <div className="py-4.5 sm:py-5 px-5 sm:px-6 rounded-2xl bg-white border border-zinc-200/80 shadow-xs flex flex-col gap-1.5 justify-center">
                  <div className="flex items-center gap-2 font-bold text-zinc-900 text-base sm:text-lg">
                    <span className="text-xl">🗂️</span>
                    <span>Centralized knowledge</span>
                  </div>
                  <p className="text-zinc-600 text-sm sm:text-base m-0 leading-relaxed">
                    Bring research papers, datasets, and relevant information into one organized platform.
                  </p>
                </div>

                <div className="py-4.5 sm:py-5 px-5 sm:px-6 rounded-2xl bg-white border border-zinc-200/80 shadow-xs flex flex-col gap-1.5 justify-center">
                  <div className="flex items-center gap-2 font-bold text-zinc-900 text-base sm:text-lg">
                    <span className="text-xl">🌊</span>
                    <span>Context-driven exploration</span>
                  </div>
                  <p className="text-zinc-600 text-sm sm:text-base m-0 leading-relaxed">
                    Connect scientific findings with geographic, ecological, and conservation context.
                  </p>
                </div>

                <div className="py-4.5 sm:py-5 px-5 sm:px-6 rounded-2xl bg-white border border-zinc-200/80 shadow-xs flex flex-col gap-1.5 justify-center">
                  <div className="flex items-center gap-2 font-bold text-zinc-900 text-base sm:text-lg">
                    <span className="text-xl">⚙️</span>
                    <span>End-to-end platform</span>
                  </div>
                  <p className="text-zinc-600 text-sm sm:text-base m-0 leading-relaxed">
                    Building both the frontend experience and backend systems that power data retrieval, processing, and AI features.
                  </p>
                </div>
              </div>
            </section>

            {/* Brand Section */}
            <section id="brand" className="scroll-mt-32 flex flex-col gap-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#18181B] [font-family:var(--font-dm-sans)] m-0">
                Creating the Brand
              </h2>
              <div className="w-full relative rounded-2xl overflow-hidden shadow-xs">
                <Image
                  src="/orca_ai/logo.svg"
                  alt="orca.ai Logo"
                  width={2336}
                  height={1904}
                  className="w-full h-auto object-contain block rounded-2xl"
                  unoptimized
                />
              </div>
            </section>

            {/* Reflection Section */}
            <section id="reflection" className="scroll-mt-32 flex flex-col gap-6 pt-4">
              <div className="flex flex-col gap-2">
                <span className="text-xs uppercase font-mono tracking-widest text-zinc-500">
                  REFLECTION
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#18181B] [font-family:var(--font-dm-sans)] m-0">
                  My key takeaways and learnings!
                </h2>
              </div>

              {/* 2-column Takeaways */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-1">
                <div className="flex flex-col gap-2">
                  <h3 className="text-base sm:text-lg font-semibold text-zinc-900 m-0">
                    Thinking on the spot is a skill
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed m-0">
                    I set myself a deadline of a week to get this right which meant I had to manage crisis and cut the scope down into the MVP. It helped me learn how to think quickly and make spontaneous decisions.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-base sm:text-lg font-semibold text-zinc-900 m-0">
                    Using AI as my developer
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed m-0">
                    I turned on my designer hat as if I worked in a company and collaborated with a developer. I would talk in its language and describe what I wanted.
                  </p>
                </div>
              </div>

              {/* Curious to know more card */}
              <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#095F76]/20 shadow-xs flex flex-col gap-3 mt-4">
                <span className="text-xs sm:text-sm font-mono uppercase tracking-wider font-bold text-[#095F76]">
                  CURIOUS TO KNOW MORE?
                </span>
                <p className="text-base sm:text-lg text-zinc-800 m-0 leading-relaxed">
                  Orca.ai is still in progress. To hear about launch or try a build,{" "}
                  <a
                    href="mailto:pavendanpynthamil@gmail.com"
                    className="underline font-semibold text-[#095F76] hover:text-[#064353] transition-colors"
                  >
                    get in touch
                  </a>
                  .
                </p>
              </div>
            </section>

          {/* Scroll Back to Top & Next Project Ad */}
          <ScrollBackToTopSection
            nextProjectAd={{
              href: "/projects/semantic-email",
              image: "/semantic_ad.svg",
              alt: "Semantic Email Copilot",
            }}
          />
        </article>
      </div>
    </div>
  );
}
