import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "readme, but make it aesthetic ✨ | Blog",
  description: "not everything has to be loud to be meaningful.",
};

export default function BlogPost() {
  return (
    <div className="flex flex-col flex-1 items-center bg-[#F7F6F4] font-mono dark:bg-[#0a0a0a] px-6 pt-28 md:pt-32 pb-16 w-full">
      <article className="max-w-2xl w-full text-left flex flex-col gap-10">
        
        {/* Back link */}
        <Link href="/blog" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors inline-flex items-center gap-2 mb-4 w-fit">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Back to blog
        </Link>

        {/* Header */}
        <header className="flex flex-col gap-6">
          <div className="w-full h-[350px] relative rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800">
            <Image
              src="/post_covers/post2.svg"
              alt="readme, but make it aesthetic ✨"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 text-xs font-semibold bg-[#E5D4FF] text-zinc-900 rounded-md">Design</span>
              <span className="px-2 py-1 text-xs font-semibold bg-[#E5D4FF] text-zinc-900 rounded-md">GitHub</span>
              <span className="px-2 py-1 text-xs font-semibold bg-[#E5D4FF] text-zinc-900 rounded-md">Personal</span>
            </div>
            
            <div className="flex flex-col gap-1">
              <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 [font-family:var(--font-dm-sans)]">
                readme, but make it aesthetic ✨
              </h1>
            </div>

            <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400 mt-2">
              <span>June 8, 2026</span>
              <span aria-hidden="true">&bull;</span>
              <span>3 min read</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-zinc dark:prose-invert font-mono text-zinc-700 dark:text-zinc-300 flex flex-col gap-8 text-lg leading-relaxed">
          
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

          <blockquote className="border-l-4 border-purple-400 pl-4 italic text-zinc-600 dark:text-zinc-400 my-4">
            <p>I didn’t want to overcrowd my README.</p>
            <p>It’s not my resume.</p>
            <p>It’s just a small space on the internet that represents me.</p>
          </blockquote>

          <p>So I chose minimalism.</p>

          <hr className="border-zinc-200 dark:border-zinc-800 my-4" />

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 [font-family:var(--font-dm-sans)]">minimal, but intentional</h2>
            <p>Things I definitely wanted in my README:</p>
            <ul style={{ listStyleType: '"+ "' }} className="ml-5 space-y-2 text-zinc-600 dark:text-zinc-400">
              <li>a banner</li>
              <li>a text gif</li>
              <li>my tech stack</li>
              <li>contact details</li>
            </ul>
            <p className="mt-4">Simple. Clean. Enough.</p>
          </div>

          <hr className="border-zinc-200 dark:border-zinc-800 my-4" />

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 [font-family:var(--font-dm-sans)]">banner side quest</h2>
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

          <hr className="border-zinc-200 dark:border-zinc-800 my-4" />

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 [font-family:var(--font-dm-sans)]">icons doing their thing</h2>
            <p>Next came the small details the ones that quietly make everything feel cohesive.</p>
            <p>
              I generated my tech stack icons using: <a href="https://skillicons.dev/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">https://skillicons.dev/</a>
            </p>
            <p>
              I selected only the tools I genuinely use, keeping everything authentic and uncluttered.
            </p>
            <p>
              I also found pixel-style social icons that complemented the banner aesthetic perfectly.
            </p>
            <p className="mt-4">To bring everything together:</p>
            <ul style={{ listStyleType: '"+ "' }} className="ml-5 space-y-2 text-zinc-600 dark:text-zinc-400">
              <li>a text SVG for personality</li>
              <li>subtle animated dividers for visual rhythm</li>
              <li>balanced spacing to keep everything breathable</li>
            </ul>
          </div>

          <hr className="border-zinc-200 dark:border-zinc-800 my-4" />

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 [font-family:var(--font-dm-sans)]">final build</h2>
            <p>The final result feels calm, cohesive, and very <span className="italic">me</span>.</p>
            <p>
              You can see the finished README here: <a href="https://github.com/Pynthamil" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400 font-bold">https://github.com/Pynthamil</a>
            </p>
          </div>

        </div>
      </article>
    </div>
  );
}
