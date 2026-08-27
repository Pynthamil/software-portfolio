import Image from "next/image";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";
import ProjectSidebar from "@/components/ProjectSidebar";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "the idea ecosystem | Blog",
  description: "How I use Notion to keep my projects and ideas calm and minimal.",
  openGraph: {
    title: "the idea ecosystem | Blog",
    description: "How I use Notion to keep my projects and ideas calm and minimal.",
    url: "/blog/idea-ecosystem",
    images: ["/post_covers/post3.svg"],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "the idea ecosystem | Blog",
    description: "How I use Notion to keep my projects and ideas calm and minimal.",
    images: ["/post_covers/post3.svg"],
  },
};

const navItems = [
  { id: "overview", label: "OVERVIEW" },
  { id: "minimal-setup", label: "MINIMAL SETUP" },
  { id: "structure", label: "STRUCTURE" },
  { id: "statuses", label: "STATUSES" },
  { id: "capture", label: "CAPTURE IDEAS" },
  { id: "template", label: "PAGE TEMPLATE" },
];

export default function BlogPost() {
  return (
    <div className="flex flex-col flex-1 items-center bg-[#F7F6F4] font-mono px-6 pt-28 md:pt-32 pb-16 w-full relative">
      <ProjectSidebar items={navItems} backHref="/blog" backLabel="BLOG" />

      <div className="max-w-3xl w-full flex flex-col items-center gap-8">
        
        {/* Big Cover Image - wider than written content */}
        <div id="overview" className="w-full max-w-3xl h-[340px] sm:h-[400px] md:h-[440px] relative rounded-2xl overflow-hidden border border-zinc-200 shadow-xs scroll-mt-32">
          <Image
            src="/post_covers/post3.svg"
            alt="the idea ecosystem"
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
              <span className="px-2 py-1 text-xs font-semibold bg-[#E5D4FF] text-zinc-900 rounded-md">Insights</span>
              <span className="px-2 py-1 text-xs font-semibold bg-[#E5D4FF] text-zinc-900 rounded-md">Productivity</span>
              <span className="px-2 py-1 text-xs font-semibold bg-[#E5D4FF] text-zinc-900 rounded-md">Notion</span>
              <span className="px-2 py-1 text-xs font-semibold bg-[#E5D4FF] text-zinc-900 rounded-md">Organization</span>
            </div>
            
            <div className="flex flex-col gap-1">
              <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)] leading-tight">
                the idea ecosystem
              </h1>
              <p className="text-xl text-zinc-600 italic">
                how i organise my projects using notion ✨
              </p>
            </div>

            <div className="flex items-center justify-between w-full text-sm text-zinc-500 pt-1 border-b border-zinc-200/60 pb-3">
              <div className="flex items-center gap-2">
                <span>June 11, 2026</span>
                <span aria-hidden="true">&bull;</span>
                <span>4 min read</span>
              </div>
              <ShareButton title="the idea ecosystem" />
            </div>
          </header>

        {/* Content */}
        <div className="prose prose-zinc font-mono text-zinc-700 flex flex-col gap-8 text-lg leading-relaxed">
          
          <blockquote className="border-l-4 border-purple-400 pl-4 italic text-zinc-600 my-4">
            not everything has to be perfectly planned to be beautifully organised.
          </blockquote>
          
          <p>For the longest time, my projects lived everywhere.</p>
          
          <p>
            Some ideas were in notes apps.<br/>
            Some were half-written in markdown files.<br/>
            Some were just… existing in my brain, waiting for the <span className="italic">right moment</span>.
          </p>

          <p>And honestly?</p>
          <p>That system worked — until it didn’t.</p>
          
          <p>So I turned to <strong>Notion</strong>.</p>
          
          <p>Not because I wanted a productivity system that looked impressive, but because I wanted something that felt <span className="italic">calm</span>.</p>
          <p>Notion slowly became less of a tool and more of a quiet workspace where everything could exist without feeling overwhelming.</p>

          <hr className="border-zinc-200 my-4" />

          <div id="minimal-setup" className="flex flex-col gap-4 scroll-mt-32">
            <h2 className="text-2xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">why I keep my setup minimal</h2>
            <p>I don’t like complicated dashboards with 20 databases connected to each other.</p>
            <p>I don’t want to spend more time managing the system than actually building things.</p>
            <p>My rule is simple:</p>
            <p className="font-bold">if it takes more than a few seconds to capture an idea, the system is too complex.</p>
            
            <p>I only track what actually helps me ship projects:</p>
            <ul style={{ listStyleType: '"+ "' }} className="ml-5 space-y-2 text-zinc-600">
              <li>what I’m working on</li>
              <li>what’s done</li>
              <li>what’s next</li>
              <li>what tech I used</li>
              <li>what the project is about</li>
            </ul>
            <p className="mt-4">Anything more quickly turns into maintenance work instead of progress.</p>
          </div>

          <hr className="border-zinc-200 my-4" />

          <div id="structure" className="flex flex-col gap-4 scroll-mt-32">
            <h2 className="text-2xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">my main structure</h2>
            <p>Everything lives inside one main page called:</p>
            <p className="font-bold text-zinc-900">projects</p>
            
            <p>Inside it, I keep a single database with just a few properties:</p>
            
            <div className="overflow-x-auto my-4 border border-zinc-200 rounded-lg">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-zinc-100">
                    <th className="p-3 border-b border-zinc-200">property</th>
                    <th className="p-3 border-b border-zinc-200">purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200">
                  <tr>
                    <td className="p-3 font-semibold">status</td>
                    <td className="p-3 text-zinc-600">idea, building, paused, finished</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">priority</td>
                    <td className="p-3 text-zinc-600">low, medium, high</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">link</td>
                    <td className="p-3 text-zinc-600">github repo or live website</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">stack</td>
                    <td className="p-3 text-zinc-600">the tech stack used</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>That’s it.</p>
            <p>
              No complicated formulas.<br/>
              No overwhelming tags.
            </p>

            <img src="https://cdn.hashnode.com/uploads/covers/69bf9c294a1e513e41a8bb97/7a4fed91-a713-4ea4-928c-3c650b3473a6.png" alt="Notion setup overview 1" className="rounded-lg border border-zinc-200 my-4" />
            <img src="https://cdn.hashnode.com/uploads/covers/69bf9c294a1e513e41a8bb97/a9b633f5-9ba9-4103-99c5-d0afbe83d0cf.png" alt="Notion setup overview 2" className="rounded-lg border border-zinc-200 my-4" />

            <p>Just enough structure to keep things manageable.</p>
          </div>

          <hr className="border-zinc-200 my-4" />

          <div id="statuses" className="flex flex-col gap-4 scroll-mt-32">
            <h2 className="text-2xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">statuses I use</h2>
            <p>I try not to overthink this part.</p>
            
            <div className="flex flex-col gap-2 mt-2">
              <h3 className="text-xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">idea</h3>
              <p>
                random sparks of curiosity<br/>
                things I might build<br/>
                things I <span className="italic">probably</span> won’t build<br/>
                but still want to remember
              </p>
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <h3 className="text-xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">building</h3>
              <p>projects I am actively working on</p>
              <p className="italic text-zinc-500">this helps me see what currently has my attention</p>
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <h3 className="text-xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">paused</h3>
              <p>
                projects that are not abandoned<br/>
                just waiting for the right energy
              </p>
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <h3 className="text-xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">finished</h3>
              <p>completed projects, experiments, or posts</p>
              <p className="italic text-zinc-500">keeping them visible reminds me that progress does happen</p>
            </div>
          </div>

          <hr className="border-zinc-200 my-4" />

          <div id="capture" className="flex flex-col gap-4 scroll-mt-32">
            <h2 className="text-2xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">how I capture ideas quickly</h2>
            <p>Whenever an idea appears, I create a new page inside the projects database and write:</p>
            <ul style={{ listStyleType: '"+ "' }} className="ml-5 space-y-2 text-zinc-600">
              <li>what it is</li>
              <li>why it interests me</li>
              <li>any random thoughts</li>
            </ul>
            <p className="mt-4">
              Sometimes it's one line.<br/>
              Sometimes it's messy.<br/>
              Sometimes it makes no sense later.
            </p>
            <p>And that’s okay.</p>
            <p>The goal is not perfection, just <strong>not losing the idea</strong>.</p>
          </div>

          <hr className="border-zinc-200 my-4" />

          <div id="template" className="flex flex-col gap-4 scroll-mt-32">
            <h2 className="text-2xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">my project page template</h2>
            <p>Each project page usually contains:</p>
            
            <div className="flex flex-col gap-2 mt-2">
              <h3 className="text-xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">overview</h3>
              <p>what the project is about</p>
              <img src="https://cdn.hashnode.com/uploads/covers/69bf9c294a1e513e41a8bb97/c19461bf-8640-4236-bf3a-5a80f62efc45.png" alt="Project overview" className="rounded-lg border border-zinc-200 my-2" />
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <h3 className="text-xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">tasks</h3>
              <p>I divide the whole project into manageable action items</p>
              <img src="https://cdn.hashnode.com/uploads/covers/69bf9c294a1e513e41a8bb97/c9933037-d6e0-44f8-9959-71f2975193f0.png" alt="Tasks view" className="rounded-lg border border-zinc-200 my-2" />
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <h3 className="text-xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">goals</h3>
              <p>what I want this to become</p>
              <img src="https://cdn.hashnode.com/uploads/covers/69bf9c294a1e513e41a8bb97/06483187-17bc-4858-a587-23baed7bf0d9.png" alt="Goals view" className="rounded-lg border border-zinc-200 my-2" />
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <h3 className="text-xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">links</h3>
              <p>
                github<br/>
                figma<br/>
                references<br/>
                articles
              </p>
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <h3 className="text-xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">notes</h3>
              <p>
                random thoughts<br/>
                things to try<br/>
                things to improve
              </p>
            </div>
          </div>

          <hr className="border-zinc-200 my-4" />

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">why this works for me</h2>
            <p>This system works because it feels light.</p>
            <p>
              There’s no pressure to fill every field.<br/>
              No pressure to update everything perfectly.
            </p>
            <p>Just a space where ideas can exist.</p>
            <p>
              Some projects grow.<br/>
              Some don’t.
            </p>
            <p>But everything has a place.</p>
            <p>And that makes starting easier.</p>
          </div>

          <hr className="border-zinc-200 my-4" />

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">small things that made a big difference</h2>
            <ul style={{ listStyleType: '"+ "' }} className="ml-5 space-y-2 text-zinc-600">
              <li>keeping the layout minimal</li>
              <li>not adding unnecessary tags</li>
              <li>allowing unfinished ideas to exist</li>
              <li>using notion to have everything organised in a single space</li>
            </ul>
          </div>

          <hr className="border-zinc-200 my-4" />

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">final thoughts</h2>
            <p>organisation doesn’t have to be super aesthetic.</p>
            <p>Sometimes it’s just: a minimal setup, a simple structure, and a place where your ideas feel welcome.</p>
            <p>If your system feels comfortable, you’ll keep coming back to it.</p>
            <p>And that consistency matters more than complexity.</p>
            <p className="mt-4">If you're building your own system, start small.</p>
            <p>You can always add more later.</p>
            <p>But simple systems are the ones that last.</p>
          </div>

        </div>
      </article>
      </div>
    </div>
  );
}
