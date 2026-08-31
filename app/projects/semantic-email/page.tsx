import Image from "next/image";
import Link from "next/link";
import UserPersonaCarousel from "@/components/UserPersonaCarousel";
import ScrollBackToTopSection from "@/components/ScrollBackToTopSection";
import ProjectSidebar from "@/components/ProjectSidebar";
import StampBlogAd from "@/components/StampBlogAd";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our inboxes store information, but fail to turn it into meaningful action. | Projects",
  description: "A smart system that turns your chaotic inbox into a lightweight second brain by extracting tasks, deadlines, and context.",
  openGraph: {
    title: "Our inboxes store information, but fail to turn it into meaningful action. | Projects",
    description: "A smart system that turns your chaotic inbox into a lightweight second brain by extracting tasks, deadlines, and context.",
    url: "/projects/semantic-email",
    images: [
      {
        url: "/project-assets/semantic/cover2.svg",
        width: 1994,
        height: 1286,
        alt: "Semantic Email Cover",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our inboxes store information, but fail to turn it into meaningful action. | Projects",
    description: "A smart system that turns your chaotic inbox into a lightweight second brain by extracting tasks, deadlines, and context.",
    images: ["/project-assets/semantic/cover2.svg"],
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

export default function SemanticEmailProjectPage() {
  return (
    <div className="flex flex-col flex-1 items-center bg-[#F7F6F4] [font-family:var(--font-dm-sans)] px-6 pt-28 md:pt-32 pb-16 w-full relative">
      <ProjectSidebar items={navItems} />

      <div className="w-full flex flex-col items-center gap-8">
        
        {/* Big Cover Image */}
        <div id="overview" className="max-w-5xl w-full relative rounded-md overflow-hidden scroll-mt-32">
          <Image
            src="/project-assets/semantic/cover2.svg"
            alt="Semantic Email Cover"
            width={1994}
            height={1286}
            className="w-full h-auto object-contain block rounded-md"
            priority
          />
        </div>

        {/* Main Article Content Container - Compact max-w-2xl */}
        <article className="max-w-2xl w-full text-left flex flex-col gap-10">
          
          {/* Header */}
          <header className="flex flex-col gap-6 relative">
            {/* Related Blog Ad Banner (Positioned on the right, aligned with header title) */}
            <aside className="hidden xl:block absolute left-[calc(100%+2rem)] 2xl:left-[calc(100%+3.5rem)] top-0 w-80 2xl:w-[350px] select-none">
              <StampBlogAd
                href="/blog/semantic-email-struggles"
                imageSrc="/post_covers/post1.svg"
                imageAlt="Related Blog - Struggles"
                text="Read the related blog to know more about my struggles"
              />
            </aside>

            <div className="flex flex-col gap-1">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#18181B] leading-tight">
                Our inboxes store information, but fail to turn it into meaningful action.
              </h1>
              <p className="text-lg sm:text-xl text-[#71717A]">
                A smart system that turns your chaotic inbox into a lightweight second brain by extracting tasks, deadlines, and context.
              </p>
            </div>

            {/* Project Metadata Info Card */}
            <div className="bg-white rounded-md border border-zinc-200/80 p-4 sm:p-5 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 shadow-xs">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
                  Duration
                </span>
                <span className="text-sm sm:text-base text-zinc-700 font-medium">
                  Aug 2026
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

        {/* The Challenge Section (Problem) */}
        <section id="problem" className="w-full flex flex-col gap-6 scroll-mt-32">

          <div className="-mx-3 sm:-mx-6 md:-mx-10 w-[calc(100%+1.5rem)] sm:w-[calc(100%+3rem)] md:w-[calc(100%+5rem)] max-w-none relative rounded-lg overflow-hidden self-center">
            <Image
              src="/project-assets/semantic/chall.svg"
              alt="The Challenge Visual Overview"
              width={829}
              height={248}
              className="w-full h-auto object-contain block rounded-lg"
              priority
            />
          </div>
          <div className="-mx-3 sm:-mx-6 md:-mx-10 w-[calc(100%+1.5rem)] sm:w-[calc(100%+3rem)] md:w-[calc(100%+5rem)] max-w-none relative rounded-lg overflow-hidden self-center">
            <Image
              src="/project-assets/semantic/scenario2.svg"
              alt="The Everyday Problem Scenario"
              width={1792}
              height={1234}
              className="w-full h-auto object-contain block rounded-lg"
            />
          </div>
        </section>

        {/* Content */}
        <div className="prose prose-zinc [font-family:var(--font-dm-sans)] text-zinc-700 flex flex-col gap-8 text-lg leading-relaxed max-w-none">
          
          {/* Research & Approach Section */}
          <div id="approach" className="scroll-mt-32 flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 pt-2 items-start">
              <h2 className="text-2xl md:text-3xl font-bold text-[#18181B] m-0">
                Research
              </h2>
              <div className="md:col-span-2 text-zinc-600 text-base md:text-lg leading-relaxed flex flex-col gap-3">
                <p className="m-0">
                  My discovery process involved analyzing real student and faculty workflows across dozens of active inboxes. I identified that over 75% of cognitive overload comes from low-signal emails masking high-priority action items, urgent deadlines, and essential follow-ups.
                </p>
                <p className="m-0">
                  I synthesized these findings into targeted user personas to design a lightweight copilot interface that turns passive incoming text into structured action items, clear priorities, and frictionless task management.
                </p>
              </div>
            </div>

            {/* User Personas Carousel */}
            <UserPersonaCarousel />
          </div>

          {/* Pain Points Section */}
          <div className="flex flex-col gap-4">
            <div className="-mx-3 sm:-mx-6 md:-mx-10 w-[calc(100%+1.5rem)] sm:w-[calc(100%+3rem)] md:w-[calc(100%+5rem)] max-w-none relative rounded-lg overflow-hidden my-1 self-center">
              <Image
                src="/project-assets/semantic/painpts.svg"
                alt="Common frustrations and challenges"
                width={829}
                height={155}
                className="w-full h-auto object-contain block rounded-lg"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-xl w-full mx-auto">
              <div className="bg-white p-5 sm:p-6 rounded-2xl flex flex-col gap-2.5">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#F59E0B]">1</span>
                <span className="text-lg sm:text-xl font-bold text-[#18181B] leading-snug">Inbox overload</span>
              </div>
              <div className="bg-white p-5 sm:p-6 rounded-2xl flex flex-col gap-2.5">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#F59E0B]">2</span>
                <span className="text-lg sm:text-xl font-bold text-[#18181B] leading-snug">Lost Context</span>
              </div>
              <div className="bg-white p-5 sm:p-6 rounded-2xl flex flex-col gap-2.5">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#F59E0B]">3</span>
                <span className="text-lg sm:text-xl font-bold text-[#18181B] leading-snug">Action items get lost</span>
              </div>
              <div className="bg-white p-5 sm:p-6 rounded-2xl flex flex-col gap-2.5">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#F59E0B]">4</span>
                <span className="text-lg sm:text-xl font-bold text-[#18181B] leading-snug">Information is fragmented</span>
              </div>
            </div>
          </div>

          <hr className="border-zinc-200 my-2" />

          {/* Exploration Section */}
          <div id="exploration" className="flex flex-col gap-4 scroll-mt-32">
            <div className="-mx-3 sm:-mx-6 md:-mx-10 w-[calc(100%+1.5rem)] sm:w-[calc(100%+3rem)] md:w-[calc(100%+5rem)] max-w-none relative rounded-lg overflow-hidden my-1 self-center">
              <Image
                src="/project-assets/semantic/scenario.svg"
                alt="Email Scenarios and Triggers"
                width={829}
                height={155}
                className="w-full h-auto object-contain block rounded-lg"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-xl w-full mx-auto">
              <div className="bg-white p-5 sm:p-6 rounded-2xl flex flex-col gap-2.5">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#4084F3]">1</span>
                <span className="text-lg sm:text-xl font-bold text-[#18181B] leading-snug">Meeting Coordination</span>
              </div>
              <div className="bg-white p-5 sm:p-6 rounded-2xl flex flex-col gap-2.5">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#4084F3]">2</span>
                <span className="text-lg sm:text-xl font-bold text-[#18181B] leading-snug">Action Items &amp; Tasks</span>
              </div>
              <div className="bg-white p-5 sm:p-6 rounded-2xl flex flex-col gap-2.5">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#4084F3]">3</span>
                <span className="text-lg sm:text-xl font-bold text-[#18181B] leading-snug">Urgent Deadlines</span>
              </div>
              <div className="bg-white p-5 sm:p-6 rounded-2xl flex flex-col gap-2.5">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#4084F3]">4</span>
                <span className="text-lg sm:text-xl font-bold text-[#18181B] leading-snug">Receipts &amp; Documentation</span>
              </div>
            </div>

            <p>
              From meeting coordination and task assignments to urgent deadline notices, the pipeline automatically detects message urgency and maps unstructured context into structured actions.
            </p>
          </div>

          <hr className="border-zinc-200 my-2" />

          {/* The Solution Section */}
          <div id="solution" className="flex flex-col gap-4 scroll-mt-32">
            <div className="-mx-3 sm:-mx-6 md:-mx-10 w-[calc(100%+1.5rem)] sm:w-[calc(100%+3rem)] md:w-[calc(100%+5rem)] max-w-none relative rounded-lg overflow-hidden my-2 self-center">
              <Image
                src="/project-assets/semantic/soln.svg"
                alt="The Solution Visual Overview"
                width={829}
                height={248}
                className="w-full h-auto object-contain block rounded-lg"
              />
            </div>
            <p>
              Rather than forcing users to change their email provider, the <strong>Semantic Email Life-Management System</strong> operates as a lightweight, intelligent copilot in the background.
            </p>
            <p>
              It reads incoming emails, understands semantic intent using LLM function calling, and pipes structured data directly into Notion databases and calendar events without requiring manual intervention.
            </p>

            {/* Demo Videos */}
            <div className="flex flex-col gap-12 my-4">
              {/* Demo 1 */}
              <div className="flex flex-col gap-6">
                <div className="w-full aspect-square relative rounded-3xl overflow-hidden self-center bg-black/5">
                  <video
                    src="/project-assets/semantic/demo1.mov"
                    controls
                    playsInline
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover rounded-3xl block"
                  />
                </div>
                <p className="m-0">
                  As new emails land in the inbox, the background pipeline intercepts incoming messages and parses unstructured text through NLP models to automatically organize priorities and track context in real time.
                </p>
              </div>

              {/* Demo 2 */}
              <div className="flex flex-col gap-6">
                <div className="w-full aspect-square relative rounded-3xl overflow-hidden self-center bg-black/5">
                  <video
                    src="/project-assets/semantic/demo2.mov"
                    controls
                    playsInline
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover rounded-3xl block"
                  />
                </div>
                <p className="m-0">
                  Opening an email reveals a structured breakdown, including automatic summaries, actionable next steps, shared resources, conversation threads, and a communication frequency heatmap, with one-tap access to compose a reply.
                </p>
              </div>

              {/* Demo 3 */}
              <div className="flex flex-col gap-6">
                <div className="w-full aspect-square relative rounded-3xl overflow-hidden self-center bg-black/5">
                  <video
                    src="/project-assets/semantic/demo3.mov"
                    controls
                    playsInline
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover rounded-3xl block"
                  />
                </div>
                <p className="m-0">
                  The copilot automatically interprets the surrounding thread context and intent. Clicking &ldquo;Generate the content&rdquo; instantly produces a natural, tailored draft without requiring manual prompt writing or instructions.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-zinc-200 my-2" />

          {/* Outcomes & What I Learned Section */}
          <div id="outcome" className="flex flex-col gap-6 pt-2 scroll-mt-32">
            <h2 className="text-2xl md:text-3xl font-bold text-[#18181B] m-0">
              Outcomes &amp; What I Learned
            </h2>

            <p className="m-0 text-zinc-600 text-base md:text-lg leading-relaxed">
              Designing the Semantic Email Life-Management System provided deep insights into crafting human-centered AI interfaces that solve cognitive overload rather than adding new complexity.
            </p>

            <div className="flex flex-col gap-4 my-2">
              <div className="-mx-3 sm:-mx-6 md:-mx-10 w-[calc(100%+1.5rem)] sm:w-[calc(100%+3rem)] md:w-[calc(100%+5rem)] max-w-none relative rounded-md overflow-hidden self-center">
                <Image
                  src="/project-assets/semantic/insight1.svg"
                  alt="Key Outcome &amp; Learning 1"
                  width={2652}
                  height={482}
                  className="w-full h-auto object-contain block rounded-md"
                />
              </div>

              <div className="-mx-3 sm:-mx-6 md:-mx-10 w-[calc(100%+1.5rem)] sm:w-[calc(100%+3rem)] md:w-[calc(100%+5rem)] max-w-none relative rounded-md overflow-hidden self-center">
                <Image
                  src="/project-assets/semantic/insight2.svg"
                  alt="Key Outcome &amp; Learning 2"
                  width={2652}
                  height={482}
                  className="w-full h-auto object-contain block rounded-md"
                />
              </div>

              <div className="-mx-3 sm:-mx-6 md:-mx-10 w-[calc(100%+1.5rem)] sm:w-[calc(100%+3rem)] md:w-[calc(100%+5rem)] max-w-none relative rounded-md overflow-hidden self-center">
                <Image
                  src="/project-assets/semantic/insight3.svg"
                  alt="Key Outcome &amp; Learning 3"
                  width={2652}
                  height={482}
                  className="w-full h-auto object-contain block rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Scroll Back to Top & Thanks for Reading */}
          <ScrollBackToTopSection
            nextProjectAd={{
              href: "/projects/orca",
              image: "/orca_ad.svg",
              alt: "Orca.ai Marine Biology Platform",
            }}
          />

        </div>
      </article>
    </div>
  </div>
);
}
