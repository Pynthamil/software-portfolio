import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Struggles Building Semantic Email | Blog",
  description: "A candid behind-the-scenes look into the challenges, failures, and lessons learned while building the Semantic Email Copilot.",
  openGraph: {
    title: "My Struggles Building Semantic Email | Blog",
    description: "A candid behind-the-scenes look into the challenges, failures, and lessons learned while building the Semantic Email Copilot.",
    url: "/blog/semantic-email-struggles",
    images: ["/post_covers/post1.svg"],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Struggles Building Semantic Email | Blog",
    description: "A candid behind-the-scenes look into the challenges, failures, and lessons learned while building the Semantic Email Copilot.",
    images: ["/post_covers/post1.svg"],
  },
};

export default function BlogPost() {
  return (
    <div className="flex flex-col flex-1 items-center bg-[#F7F6F4] font-mono px-6 pt-28 md:pt-32 pb-16 w-full">
      <article className="max-w-2xl w-full text-left flex flex-col gap-10">
        
        {/* Back link */}
        <Link href="/blog" className="text-zinc-500 hover:text-zinc-900 transition-colors inline-flex items-center gap-2 mb-4 w-fit">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Back to blog
        </Link>

        {/* Header */}
        <header className="flex flex-col gap-6">
          <div className="w-full h-[350px] relative rounded-lg overflow-hidden border border-zinc-200">
            <Image
              src="/post_covers/post1.svg"
              alt="My Struggles Building Semantic Email"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 text-xs font-semibold bg-[#E5D4FF] text-zinc-900 rounded-md">Behind the Scenes</span>
              <span className="px-2 py-1 text-xs font-semibold bg-[#E5D4FF] text-zinc-900 rounded-md">AI &amp; NLP</span>
              <span className="px-2 py-1 text-xs font-semibold bg-[#E5D4FF] text-zinc-900 rounded-md">Semantic Email</span>
            </div>
            
            <div className="flex flex-col gap-1">
              <h1 className="text-4xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">
                My Struggles Building Semantic Email
              </h1>
              <p className="text-xl text-zinc-600 italic">
                what broke, what worked, and what I learned building an AI inbox copilot ✨
              </p>
            </div>

            <div className="flex items-center gap-4 text-sm text-zinc-500 mt-2">
              <span>August 2026</span>
              <span aria-hidden="true">&bull;</span>
              <span>Work in Progress</span>
            </div>
          </div>
        </header>

        {/* Content - Coming Soon */}
        <div className="prose prose-zinc font-mono text-zinc-700 flex flex-col gap-8 text-lg leading-relaxed">
          <blockquote className="border-l-4 border-purple-400 pl-4 italic text-zinc-600 my-2">
            building something that looks simple on the surface usually means fighting through a mountain of unseen complexity underneath.
          </blockquote>

          <div className="flex flex-col items-center justify-center p-8 sm:p-12 rounded-2xl bg-white border border-zinc-200/80 shadow-xs text-center gap-3 my-4">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#5569FF] bg-[#5569FF]/10 px-3 py-1 rounded-full">
              Coming Soon
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 m-0 [font-family:var(--font-dm-sans)]">
              Post in Progress ✨
            </h2>
            <p className="text-zinc-600 text-base sm:text-lg max-w-md m-0">
              I&apos;m currently writing down the full behind-the-scenes story &mdash; from NLP hallucination hurdles and prompt iteration to designing a UI that doesn&apos;t feel overwhelming.
            </p>
            <Link
              href="/projects/semantic-email"
              className="text-[#5569FF] hover:text-[#3730A3] text-sm font-medium mt-2 inline-flex items-center gap-1 transition-colors"
            >
              &larr; View the Semantic Email Case Study
            </Link>
          </div>
        </div>

      </article>
    </div>
  );
}
