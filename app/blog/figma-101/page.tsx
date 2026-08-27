import Image from "next/image";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";
import ProjectSidebar from "@/components/ProjectSidebar";
import ReadNextSection from "@/components/ReadNextSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Figma 101 | Blog",
  description: "A template for new posts",
  openGraph: {
    title: "Figma 101 | Blog",
    description: "A template for new posts",
    url: "/blog/figma-101",
    images: ["/post_covers/post7.svg"],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Figma 101 | Blog",
    description: "A template for new posts",
    images: ["/post_covers/post7.svg"],
  },
};

const navItems = [
  { id: "overview", label: "OVERVIEW" },
  { id: "design-file", label: "DESIGN FILE" },
  { id: "frames", label: "FRAMES" },
  { id: "shapes", label: "SHAPES & TEXT" },
  { id: "exercise", label: "EXERCISE" },
];

export default function BlogPost() {
  return (
    <div className="flex flex-col flex-1 items-center bg-[#F7F6F4] font-mono px-6 pt-28 md:pt-32 pb-16 w-full relative">
      <ProjectSidebar items={navItems} backHref="/blog" backLabel="BLOG" />

      <div className="max-w-3xl w-full flex flex-col items-center gap-8">
        
        {/* Big Cover Image - wider than written content */}
        <div id="overview" className="w-full max-w-3xl h-[340px] sm:h-[400px] md:h-[440px] relative rounded-2xl overflow-hidden border border-zinc-200 shadow-xs scroll-mt-32">
          <Image
            src="/post_covers/post7.svg"
            alt="Figma 101"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Main Article Content Container */}
        <article className="max-w-2xl w-full text-left flex flex-col gap-10">
          
          {/* Header */}
          <header className="flex flex-col gap-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)] leading-tight">
              Figma 101 : Understanding the Tool
            </h1>
            <div className="flex items-center justify-between w-full text-sm text-zinc-500 pt-1 border-b border-zinc-200/60 pb-3">
              <span>August 12, 2026</span>
              <ShareButton title="Figma 101 : Understanding the Tool" />
            </div>
          </header>

        {/* Content */}
        <div className="prose prose-zinc font-mono text-zinc-700 flex flex-col gap-8 text-lg leading-relaxed">
          
          <div id="design-file" className="flex flex-col gap-4 scroll-mt-32">
            <p>
              First of all, you need to have an account to start designing on Figma. I used my google account to sign in.
            </p>
            <p>
              Let’s start by creating a design file.
            </p>

            <div className="w-full relative rounded-lg overflow-hidden border border-zinc-200">
              <Image
                src="/post_assets/img7.1.svg"
                alt="Figma 101 start"
                width={800}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>

            <p>This is what it looks like inside the design file.</p>

            <div className="w-full relative rounded-lg overflow-hidden border border-zinc-200">
              <Image
                src="/post_assets/img7.2.svg"
                alt="Inside the design file"
                width={800}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <div id="frames" className="flex flex-col gap-4 scroll-mt-32">
            <p>Next, let us create a frame which will be the base on which we will be working on.</p>

            <div className="w-full relative rounded-lg overflow-hidden border border-zinc-200">
              <Image
                src="/post_assets/img7.3.svg"
                alt="Creating a frame"
                width={800}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>

            <p>There a lot of options like desktop, mobile phone, watch etc.</p>

            <div className="w-full relative rounded-lg overflow-hidden border border-zinc-200">
              <Image
                src="/post_assets/img7.4.svg"
                alt="Frame options"
                width={800}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <div id="shapes" className="flex flex-col gap-4 scroll-mt-32">
            <div className="w-full relative rounded-lg overflow-hidden border border-zinc-200">
              <Image
                src="/post_assets/img7.5.svg"
                alt="Shapes menu"
                width={800}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>

            <p>Now let’s talk about shapes and colours.</p>

            <div className="w-full relative rounded-lg overflow-hidden border border-zinc-200">
              <Image
                src="/post_assets/img7.6.svg"
                alt="Shapes and colours"
                width={800}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>

            <p>Text.</p>

            <div className="w-full relative rounded-lg overflow-hidden border border-zinc-200">
              <Image
                src="/post_assets/img7.7.svg"
                alt="Text tool"
                width={800}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="w-full relative rounded-lg overflow-hidden border border-zinc-200">
              <Image
                src="/post_assets/img7.8.svg"
                alt="Text properties"
                width={800}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>

            <p>Assets.</p>
            <p>Layers.</p>
          </div>

          <div id="exercise" className="flex flex-col gap-4 mt-6 pt-6 border-t border-zinc-200 scroll-mt-32">
            <h2 className="text-2xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">Exercise:</h2>
            <p>Create a splash screen and a simple welcome screen.</p>
          </div>

          <div className="flex flex-col gap-4 mt-2">
            <h3 className="text-xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">Making a splash screen</h3>
            <video 
              controls 
              src="/post_assets/vid7.1.mov" 
              className="w-full rounded-lg my-6 border border-[rgba(132,148,255,0.2)] bg-[rgba(255,255,255,0.02)]" 
            />
          </div>

        </div>
      </article>

      {/* Read Next Section */}
      <ReadNextSection currentSlug="figma-101" />
      </div>
    </div>
  );
}
