import Image from "next/image";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";
import ProjectSidebar from "@/components/ProjectSidebar";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "readme, but make it aesthetic ✨ | Blog",
  description: "not everything has to be loud to be meaningful.",
  openGraph: {
    title: "readme, but make it aesthetic ✨ | Blog",
    description: "not everything has to be loud to be meaningful.",
    url: "/blog/readme-aesthetic",
    images: ["/post_covers/post2.svg"],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "readme, but make it aesthetic ✨ | Blog",
    description: "not everything has to be loud to be meaningful.",
    images: ["/post_covers/post2.svg"],
  },
};

const navItems = [
  { id: "overview", label: "OVERVIEW" },
  { id: "minimal", label: "MINIMAL" },
  { id: "banner", label: "BANNER" },
  { id: "icons", label: "ICONS" },
  { id: "final-build", label: "FINAL BUILD" },
];

export default function BlogPost() {
  return (
    <div className="flex flex-col flex-1 items-center bg-[#F7F6F4] font-mono px-6 pt-28 md:pt-32 pb-16 w-full relative">
      <ProjectSidebar items={navItems} backHref="/blog" backLabel="BLOG" />

      <div className="max-w-3xl w-full flex flex-col items-center gap-8">
        
        {/* Big Cover Image - wider than written content */}
        <div id="overview" className="w-full max-w-3xl h-[340px] sm:h-[400px] md:h-[440px] relative rounded-2xl overflow-hidden border border-zinc-200 shadow-xs scroll-mt-32">
          <Image
            src="/post_covers/post2.svg"
            alt="readme, but make it aesthetic ✨"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Main Article Content Container */}
        <article className="max-w-2xl w-full text-left flex flex-col gap-10">
          
          {/* Header */}
          <header className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 text-xs font-semibold bg-[#E5D4FF] text-zinc-900 rounded-md">Design</span>
              <span className="px-2 py-1 text-xs font-semibold bg-[#E5D4FF] text-zinc-900 rounded-md">GitHub</span>
              <span className="px-2 py-1 text-xs font-semibold bg-[#E5D4FF] text-zinc-900 rounded-md">Personal</span>
            </div>
            
            <div className="flex flex-col gap-1">
              <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)] leading-tight">
                readme, but make it aesthetic ✨
              </h1>
            </div>

            <div className="flex items-center justify-between w-full text-sm text-zinc-500 pt-1 border-b border-zinc-200/60 pb-3">
              <div className="flex items-center gap-2">
                <span>June 8, 2026</span>
                <span aria-hidden="true">&bull;</span>
                <span>3 min read</span>
              </div>
              <ShareButton title="readme, but make it aesthetic ✨" />
            </div>
          </header>

        {/* Content */}
        <div className="prose prose-zinc font-mono text-zinc-700 flex flex-col gap-8 text-lg leading-relaxed">
          
          <p>
            It was one quiet evening when I finally decided it was time to update my README.<br/>
            It had been ages since I last touched it, and honestly… it didn’t feel like <span className="italic">me</span> anymore.
          </p>

          <p>
            Naturally, I went straight to my comfort place: <strong>Pinterest</strong>.<br/>
            I scrolled endlessly searching for inspiration, saving visuals, collecting ideas but surprisingly, nothing truly clicked.
          </p>

          <p>
            So I wandered over to <strong>Reddit</strong>, hoping to find something a little more unique. After exploring countless profiles, I finally came across a few that felt right clean, intentional, and aesthetically balanced in a way that matched my taste ;)
          </p>

          <p>
            Along the way, I discovered tons of cool widgets and fancy elements. But after a while, I realised something important:
          </p>

          <blockquote className="border-l-4 border-purple-400 pl-4 italic text-zinc-600 my-4">
            <p>I didn’t want to overcrowd my README.</p>
            <p>It’s not my resume.</p>
            <p>It’s just a small space on the internet that represents me.</p>
          </blockquote>

          <p>So I chose minimalism.</p>

          <hr className="border-zinc-200 my-4" />

          <div id="minimal" className="flex flex-col gap-4 scroll-mt-32">
            <h2 className="text-2xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">minimal, but intentional</h2>
            <p>Things I definitely wanted in my README:</p>
            <ul style={{ listStyleType: '"+ "' }} className="ml-5 space-y-2 text-zinc-600">
              <li>a banner</li>
              <li>a text gif</li>
              <li>my tech stack</li>
              <li>contact details</li>
            </ul>
            <p className="mt-4">Simple. Clean. Enough.</p>
          </div>

          <hr className="border-zinc-200 my-4" />

          <div id="banner" className="flex flex-col gap-4 scroll-mt-32">
            <h2 className="text-2xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">banner side quest</h2>
            <p>Finding the perfect banner took longer than expected.</p>
            <p>
              I found a wallpaper I absolutely loved on Pinterest but there was one small problem: it was a <strong>portrait mobile wallpaper</strong>, which didn’t quite fit the landscape format needed for a GitHub README banner.
            </p>
            <p>
              So I used <strong>Gemini</strong> to convert the image into a landscape ratio. While experimenting with different prompts and themes, most versions didn’t quite capture the vibe I wanted.
            </p>
            <p>
              But one of the earlier variations stood out subtle, calm, aesthetic.
            </p>
            <p>That became the banner.</p>
            <p>And just like that, it found its place in my <code>README.md</code>.</p>
          </div>

          <hr className="border-zinc-200 my-4" />

          <div id="icons" className="flex flex-col gap-4 scroll-mt-32">
            <h2 className="text-2xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">icons doing their thing</h2>
            <p>Next came the small details the ones that quietly make everything feel cohesive.</p>
            <p>
              I generated my tech stack icons using: <a href="https://skillicons.dev/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://skillicons.dev/</a>
            </p>
            <p>
              I selected only the tools I genuinely use, keeping everything authentic and uncluttered.
            </p>
            <p>
              I also found pixel-style social icons that complemented the banner aesthetic perfectly.
            </p>
            <p className="mt-4">To bring everything together:</p>
            <ul style={{ listStyleType: '"+ "' }} className="ml-5 space-y-2 text-zinc-600">
              <li>a text SVG for personality</li>
              <li>subtle animated dividers for visual rhythm</li>
              <li>balanced spacing to keep everything breathable</li>
            </ul>
          </div>

          <hr className="border-zinc-200 my-4" />

          <div id="final-build" className="flex flex-col gap-4 scroll-mt-32">
            <h2 className="text-2xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">final build</h2>
            <p>The final result feels calm, cohesive, and very <span className="italic">me</span>.</p>
            <p>
              You can see the finished README here: <a href="https://github.com/Pynthamil" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-bold">https://github.com/Pynthamil</a>
            </p>
          </div>

        </div>
      </article>
      </div>
    </div>
  );
}
