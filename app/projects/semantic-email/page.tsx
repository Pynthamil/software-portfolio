import Image from "next/image";
import Link from "next/link";
import UserPersonaCarousel from "@/components/UserPersonaCarousel";

export const metadata = {
  title: "Semantic Email Life-Management System | Projects",
  description: "A smart system that turns your chaotic inbox into a lightweight second brain by extracting tasks, deadlines, and context.",
};

export default function SemanticEmailProjectPage() {
  return (
    <div className="flex flex-col flex-1 items-center bg-[#F7F6F4] [font-family:var(--font-dm-sans)] px-6 pt-28 md:pt-32 pb-16 w-full">
      <div className="w-full flex flex-col items-center gap-8">
        
        {/* Big Cover Image */}
        <div className="max-w-5xl w-full relative rounded-lg overflow-hidden">
          <Image
            src="/project-assets/semantic/cover2.svg"
            alt="Semantic Email Life-Management System Cover"
            width={1994}
            height={1286}
            className="w-full h-auto object-contain block rounded-lg"
            priority
          />
        </div>

        {/* Main Article Content Container - Compact max-w-2xl */}
        <article className="max-w-2xl w-full text-left flex flex-col gap-10">
          
          {/* Header */}
          <header className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#18181B]">
                Semantic Email Life-Management System
              </h1>
              <p className="text-lg sm:text-xl text-[#71717A]">
                A smart system that turns your chaotic inbox into a lightweight second brain by extracting tasks, deadlines, and context.
              </p>
            </div>
          </header>

        {/* The Challenge Section with Dotted SVG Banner */}
        <section className="w-full flex flex-col gap-6">
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
        </section>

        {/* Content */}
        <div className="prose prose-zinc [font-family:var(--font-dm-sans)] text-zinc-700 flex flex-col gap-8 text-lg leading-relaxed max-w-none">
          
          {/* Research Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 pt-2 items-start">
            <h2 className="text-2xl md:text-3xl font-bold text-[#18181B] m-0">
              Research
            </h2>
            <div className="md:col-span-2 text-zinc-600 text-base md:text-lg leading-relaxed flex flex-col gap-3">
              <p className="m-0">
                Our discovery process involved analyzing real student and developer workflows across dozens of active inboxes. We identified that over 75% of cognitive overload comes from low-signal emails masking high-priority action items.
              </p>
              <p className="m-0">
                We synthesized these findings to formulate an automated semantic parsing pipeline that converts passive incoming text into structured task objects with clear deadlines and priority scores.
              </p>
            </div>
          </div>

          {/* User Personas Carousel */}
          <UserPersonaCarousel />

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

          {/* Scenarios Section */}
          <div className="flex flex-col gap-4">
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

            {/* Scenario 1 & 2 Visuals */}
            <div className="flex flex-col gap-6 my-2">
              <div className="-mx-3 sm:-mx-6 md:-mx-10 w-[calc(100%+1.5rem)] sm:w-[calc(100%+3rem)] md:w-[calc(100%+5rem)] max-w-none relative rounded-lg overflow-hidden self-center">
                <Image
                  src="/project-assets/semantic/scenario1.svg"
                  alt="Email Scenario 1"
                  width={1760}
                  height={1234}
                  className="w-full h-auto object-contain block rounded-lg"
                />
              </div>

              <div className="-mx-3 sm:-mx-6 md:-mx-10 w-[calc(100%+1.5rem)] sm:w-[calc(100%+3rem)] md:w-[calc(100%+5rem)] max-w-none relative rounded-lg overflow-hidden self-center">
                <Image
                  src="/project-assets/semantic/scenario2.svg"
                  alt="Email Scenario 2"
                  width={1792}
                  height={1234}
                  className="w-full h-auto object-contain block rounded-lg"
                />
              </div>
            </div>
          </div>

          <hr className="border-zinc-200 my-2" />

          {/* The Solution Section */}
          <div className="flex flex-col gap-4">
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

            {/* Demo Video */}
            <div className="-mx-3 sm:-mx-6 md:-mx-10 w-[calc(100%+1.5rem)] sm:w-[calc(100%+3rem)] md:w-[calc(100%+5rem)] max-w-none relative rounded-lg overflow-hidden my-2 self-center bg-black/5">
              <video
                src="/project-assets/semantic/demo1.mov"
                controls
                playsInline
                autoPlay
                muted
                loop
                className="w-full h-auto rounded-lg block"
              />
            </div>
          </div>

        </div>
      </article>
    </div>
  </div>
);
}
