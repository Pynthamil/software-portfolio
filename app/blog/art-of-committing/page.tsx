import Image from "next/image";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Art of Committing | Blog",
  description: "A simple and calm guide to using Git and version control.",
  openGraph: {
    title: "The Art of Committing | Blog",
    description: "A simple and calm guide to using Git and version control.",
    url: "/blog/art-of-committing",
    images: ["/post_covers/post6.svg"],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Art of Committing | Blog",
    description: "A simple and calm guide to using Git and version control.",
    images: ["/post_covers/post6.svg"],
  },
};

export default function BlogPost() {
  return (
    <div className="flex flex-col flex-1 items-center bg-[#F7F6F4] font-mono px-6 pt-28 md:pt-32 pb-16 w-full">
      <div className="max-w-3xl w-full flex flex-col items-center gap-8">
        
        {/* Back link */}
        <div className="w-full max-w-2xl flex justify-start">
          <Link href="/blog" className="text-zinc-500 hover:text-zinc-900 transition-colors inline-flex items-center gap-2 w-fit">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            Back to blog
          </Link>
        </div>

        {/* Big Cover Image - wider than written content */}
        <div className="w-full max-w-3xl h-[340px] sm:h-[400px] md:h-[440px] relative rounded-2xl overflow-hidden border border-zinc-200 shadow-xs">
          <Image
            src="/post_covers/post4.svg"
            alt="The Art of Committing"
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
              <span className="px-2 py-1 text-xs font-semibold bg-[#E5D4FF] text-zinc-900 rounded-md">Development</span>
              <span className="px-2 py-1 text-xs font-semibold bg-[#E5D4FF] text-zinc-900 rounded-md">Git</span>
              <span className="px-2 py-1 text-xs font-semibold bg-[#E5D4FF] text-zinc-900 rounded-md">Version Control</span>
              <span className="px-2 py-1 text-xs font-semibold bg-[#E5D4FF] text-zinc-900 rounded-md">GitHub</span>
              <span className="px-2 py-1 text-xs font-semibold bg-[#E5D4FF] text-zinc-900 rounded-md">Tutorial</span>
            </div>
            
            <div className="flex flex-col gap-1">
              <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)] leading-tight">
                The Art of Committing
              </h1>
              <p className="text-xl text-zinc-600 italic">
                version control, but make it make sense
              </p>
            </div>

            <div className="flex items-center justify-between w-full text-sm text-zinc-500 pt-1 border-b border-zinc-200/60 pb-3">
              <div className="flex items-center gap-2">
                <span>July 10, 2026</span>
                <span aria-hidden="true">&bull;</span>
                <span>4 min read</span>
              </div>
              <ShareButton title="The Art of Committing" />
            </div>
          </header>

        {/* Content */}
        <div className="prose prose-zinc font-mono text-zinc-700 flex flex-col gap-8 text-lg leading-relaxed">
          
          <blockquote className="border-l-4 border-purple-400 pl-4 italic text-zinc-600 my-4">
            version control, but make it make sense
          </blockquote>
          
          <p>At first, Git might seem very scary and daunting.</p>
          <p>
            You see words like <span className="italic">commit</span>, <span className="italic">branch</span>, <span className="italic">merge</span>, <span className="italic">rebase</span>… and suddenly you're scared to even touch the keyboard.
          </p>
          <p>
            But once it clicks, everything falls into place like the pieces of a puzzle you've been spending your time trying to solve.
          </p>
          <p>
            Version control isn’t just about saving code — it’s about telling the story of how your ideas evolve.
          </p>
          <p>
            And honestly? There’s something oddly satisfying about committing your work and watching your progress stack up.
          </p>
          <p className="font-bold">Tiny commits. Big growth.</p>

          <hr className="border-zinc-200 my-4" />

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">What even is a commit?</h2>
            <p>A <strong>commit</strong> is basically a saved checkpoint of your project.</p>
            <p>Think of it like:</p>
            <ul style={{ listStyleType: '"+ "' }} className="ml-5 space-y-2 text-zinc-600">
              <li>a save button for your code</li>
              <li>a time machine for your project</li>
              <li>proof that you did something productive today</li>
            </ul>
            <p className="mt-4">Each commit captures:</p>
            <ul style={{ listStyleType: '"+ "' }} className="ml-5 space-y-2 text-zinc-600">
              <li>what changed</li>
              <li>when it changed</li>
              <li>why it changed (if your commit message is good)</li>
            </ul>
            <p className="mt-4">
              Instead of one giant messy save, Git encourages small meaningful updates.<br/>
              Because progress looks better in chapters than in chaos.
            </p>
          </div>

          <hr className="border-zinc-200 my-4" />

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">Basic Commands (tiny cheat sheet)</h2>
            <div className="bg-zinc-100 p-4 rounded-lg border border-zinc-200 text-sm overflow-x-auto">
              <code className="text-blue-600">git init<br/>git add .<br/>git commit -m "message"<br/>git push origin main</code>
            </div>
            <p>Simple, but powerful.</p>
          </div>

          <hr className="border-zinc-200 my-4" />

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">Step 1 — Initialize the repository</h2>
            <p>First, I start by initializing the project repository that I’m working on, on my local device.</p>
            <p>This converts a normal project folder into a Git repository so changes can be tracked.</p>
            <p>Project Repository → Git Repository</p>
            <div className="bg-zinc-100 p-4 rounded-lg border border-zinc-200 text-sm overflow-x-auto">
              <code className="text-blue-600">git init</code>
            </div>
          </div>

          <hr className="border-zinc-200 my-4" />

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">Step 2 — Stage the files</h2>
            <p>Next, I stage the files whose changes I want Git to track.</p>
            <p>Think of staging like selecting which updates you want included in the next checkpoint.</p>
            <p>Changed/New Files → staged files for tracking new changes → changes now tracked</p>
            <div className="bg-zinc-100 p-4 rounded-lg border border-zinc-200 text-sm overflow-x-auto">
              <code className="text-blue-600">git add .</code>
            </div>
            <p>or specific files</p>
            <div className="bg-zinc-100 p-4 rounded-lg border border-zinc-200 text-sm overflow-x-auto">
              <code className="text-blue-600">git add index.js</code>
            </div>
          </div>

          <hr className="border-zinc-200 my-4" />

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">Step 3 — Write meaningful commit messages</h2>
            <p>Now I write a clean, clear, and concise commit message to make a note of what changes I made.</p>
            <p>Good commit messages help both present-you and future-you understand what happened.</p>
            <p className="mt-4">Examples:</p>
            <div className="bg-zinc-100 p-4 rounded-lg border border-zinc-200 text-sm overflow-x-auto">
              <code className="text-green-600">feat: add profile picture upload<br/>fix: correct typo in navbar<br/>chore: update dependencies</code>
            </div>
            <p className="mt-4">Quick guide:</p>
            <ul style={{ listStyleType: '"+ "' }} className="ml-5 space-y-2 text-zinc-600">
              <li><strong>feat</strong> → adding a new feature or functionality</li>
              <li><strong>fix</strong> → correcting something that was broken</li>
              <li><strong>chore</strong> → changes that don’t affect the app behaviour directly (configs, dependencies, build tasks)</li>
            </ul>
            <div className="bg-zinc-100 p-4 rounded-lg border border-zinc-200 text-sm overflow-x-auto mt-4">
              <code className="text-blue-600">git commit -m "feat: add search bar"</code>
            </div>
          </div>

          <hr className="border-zinc-200 my-4" />

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">Step 4 — Push changes to GitHub</h2>
            <p>After writing a good commit message, I push the changes to the main branch.</p>
            <p>This uploads the local changes to the remote repository (GitHub).</p>
            <div className="bg-zinc-100 p-4 rounded-lg border border-zinc-200 text-sm overflow-x-auto">
              <code className="text-blue-600">git push origin main</code>
            </div>
            <p>Now the changes are backed up and visible online.</p>
          </div>

          <hr className="border-zinc-200 my-4" />

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">Creating a repository on GitHub</h2>
            <p>If you don’t already have a repo:</p>
            <p>GitHub → click the <strong>+</strong> icon → New repository</p>
            <p className="mt-4">Choose:</p>
            <ul style={{ listStyleType: '"+ "' }} className="ml-5 space-y-2 text-zinc-600">
              <li>repository name</li>
              <li>visibility (public or private)</li>
              <li>optional description</li>
            </ul>
            <p className="mt-4">Then connect your local project to this repo.</p>
          </div>

          <hr className="border-zinc-200 my-4" />

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">Working in collaborative environments (pull requests)</h2>
            <p>If you’re contributing to a repository where you don’t have direct permission to modify the main branch, you create a pull request.</p>
            <p>A pull request allows maintainers to review your changes before merging them into the main branch.</p>
            <p>This helps keep projects stable and organized.</p>
          </div>

          <hr className="border-zinc-200 my-4" />

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">Always sync before starting work</h2>
            <p>Before I start working in my local repository, I always make sure to sync and pull changes first.</p>
            <p>Sometimes (almost all the time) when I forget this step, I run into merge conflicts.</p>
            <p>And then I wish myself good luck… because I will definitely be needing it and probably 10 years of life span 🤡</p>
            <div className="bg-zinc-100 p-4 rounded-lg border border-zinc-200 text-sm overflow-x-auto">
              <code className="text-blue-600">git pull origin main</code>
            </div>
          </div>

          <hr className="border-zinc-200 my-4" />

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">Quick summary workflow</h2>
            <div className="bg-zinc-100 p-4 rounded-lg border border-zinc-200 text-sm overflow-x-auto">
              <code className="text-blue-600">git init<br/>git add .<br/>git commit -m "I'm so done"<br/>git push origin main</code>
            </div>
            <p>Repeat until the project magically works.</p>
          </div>

          <hr className="border-zinc-200 my-4" />

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">Helpful learning resources</h2>
            
            <h3 className="text-xl font-bold text-zinc-900 mt-2">Articles / Blogs</h3>
            <ul style={{ listStyleType: '"+ "' }} className="ml-5 space-y-2 text-zinc-600">
              <li><a href="#" className="text-blue-600 hover:underline">Complete Tutorial of Git and GitHub for Basic to Advanced — Sachinsoni</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">I don’t Git it — Rick Martinez</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Git Full Tutorial — How to Use Git in a Real Project — Saikiran Kalidindi</a></li>
            </ul>

            <h3 className="text-xl font-bold text-zinc-900 mt-4">YouTube Tutorials</h3>
            <ul style={{ listStyleType: '"+ "' }} className="ml-5 space-y-2 text-zinc-600">
              <li><a href="#" className="text-blue-600 hover:underline">Git and GitHub Crash Course — freeCodeCamp</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Git and GitHub for beginners — Amigoscode</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Git and GitHub course — Javascript Mastery</a></li>
            </ul>
          </div>

          <hr className="border-zinc-200 my-4" />

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">Bonus: customizing your GitHub README</h2>
            <p>If you want your GitHub profile to look aesthetic, interactive, and actually fun to explore, I wrote about how I customized mine:</p>
            <p>
              <Link href="/blog/readme-aesthetic" className="text-blue-600 hover:underline font-bold break-all">
                readme, but make it aesthetic ✨
              </Link>
            </p>
            <p className="mt-2 text-zinc-500">Fair warning: you may spend way too long tweaking badges and layouts.<br/>But honestly… worth it.</p>
          </div>

          <hr className="border-zinc-200 my-4" />

          <p className="font-bold text-zinc-900 text-xl pb-8">
            Tiny commits today = confident developer tomorrow 🚀
          </p>

        </div>
      </article>
      </div>
    </div>
  );
}
