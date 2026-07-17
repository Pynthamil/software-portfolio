import Image from "next/image";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Header Image - Fullview */}
      <div className="w-full h-[700px] md:h-[850px] lg:h-[1000px] relative overflow-hidden">
        <Image
          src="/img2.svg"
          alt="Header Background Banner"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Content wrapper */}
      <div className="flex flex-col items-center px-12 pt-6 md:pt-10 lg:pt-12 pb-8 md:pb-16 lg:pb-20 gap-12 w-full">
        
        {/* Text content wrapper - standard width (max-w-2xl) */}
        <div className="max-w-2xl w-full text-left flex flex-col gap-12">

        {/* Intro */}
        <div>
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-8 [font-family:var(--font-dm-sans)]">
            Hi, this is Pynthamil!
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 text-justify">
            I am a curious being who loves bringing the crazy ideas existing in my mind into reality through the sheer power of code.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="https://github.com/pynthamil"
              className="text-blue-600 hover:underline dark:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              /GitHub
            </a>
            <a
              href="https://linkedin.com/in/pynthamil"
              className="text-blue-600 hover:underline dark:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              /LinkedIn
            </a>
            <a
              href="https://leetcode.com/u/HashKnight/"
              className="text-blue-600 hover:underline dark:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              /LeetCode
            </a>
            <a
              href="https://twitter.com/pynthamil"
              className="text-blue-600 hover:underline dark:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              /Twitter
            </a>
            <a
              href="https://my-blog-tan-tau.vercel.app"
              className="text-blue-600 hover:underline dark:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              /blog
            </a>
          </div>
        </div>

        {/* Section: Who am I */}
        <section id="about" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 [font-family:var(--font-dm-sans)]">
            who am i and what do i do for a living?
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 italic mb-4">
            a little less mystery about me
          </p>
          <ul className="plus-list space-y-2 text-zinc-700 dark:text-zinc-300">
            <li>My name is Pynthamil Pavendan!</li>
            <li>I'm a student developer who enjoys turning ideas into things people can actually use</li>
            <li>I like building interfaces that feel simple, fast, and intentional</li>
            <li>I spend most of my time working with modern web technologies, experimenting with interaction design, and refining the small details that make products feel polished</li>
            <li>I'm especially interested in how design and engineering come together to create experiences that feel effortless</li>
            <li>Currently focused on building projects that are useful, visually clean, and quietly memorable</li>
          </ul>
        </section>

        {/* Section: Outside of screens */}
        <section>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 [font-family:var(--font-dm-sans)]">
            things i enjoy outside of screens
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 italic mb-4">
            when the laptop finally closes
          </p>
          <ul className="plus-list space-y-2 text-zinc-700 dark:text-zinc-300">
            <li>I love reading books, watching movies, writing, and drawing</li>
            <li>I'm very curious so I love to constantly explore new things</li>
            <li>I don't believe the saying "curiosity kills the cat" — haha</li>
          </ul>
        </section>

        {/* Section: Fun facts */}
        <section>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 [font-family:var(--font-dm-sans)]">
            fun facts about me
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 italic mb-4">
            the lore drops
          </p>
          <ul className="plus-list space-y-2 text-zinc-700 dark:text-zinc-300">
            <li>music taste: a bit of everything → if it sounds good, I'm listening</li>
            <li>I love singing and dancing like nobody's watching (because usually nobody is)</li>
            <li>introvert… who also loves to yap when the topic is interesting</li>
            <li>personality type: INTJ</li>
            <li>I enjoy challenging myself just for the plot</li>
            <li>currently in my 3rd year of college, about to enter my final year — slightly terrifying & slightly exciting</li>
          </ul>
        </section>

        {/* Section: Projects */}
        <section id="projects" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 [font-family:var(--font-dm-sans)]">
            selected projects
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 italic mb-4">
            turning caffeine into code
          </p>
          <ul className="plus-list space-y-3 text-zinc-700 dark:text-zinc-300">
            <li>
              <strong>Project Alpha</strong> — A minimal, fast, and intentional web application built with modern tech.
              <a href="#" className="ml-2 text-blue-600 hover:underline dark:text-blue-400 text-sm">View →</a>
            </li>
            <li>
              <strong>Project Beta</strong> — An experimental interface exploring effortless design and user interactions.
              <a href="#" className="ml-2 text-blue-600 hover:underline dark:text-blue-400 text-sm">View →</a>
            </li>
            <li>
              <strong>Project Gamma</strong> — A tool that solves a very specific problem I had at 2:17 am.
              <a href="#" className="ml-2 text-blue-600 hover:underline dark:text-blue-400 text-sm">View →</a>
            </li>
          </ul>
        </section>

        {/* Section: About my blog */}
        <section>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 [font-family:var(--font-dm-sans)]">
            about my blog
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 italic mb-4">
            my brain leaving sticky notes for itself
          </p>
          <ul className="plus-list space-y-2 text-zinc-700 dark:text-zinc-300">
            <li>I write about things I'm learning, things I'm building, and things I randomly become obsessed with at 2:17 am</li>
            <li>sometimes it's about tech, sometimes design, sometimes a thought that refuses to leave me alone until I write it down</li>
            <li>it's less "expert advice" and more "let me see if this idea makes sense outside my head"</li>
            <li>mostly curiosity. occasionally clarity. always slightly unhinged but in a productive way</li>
          </ul>
        </section>

        {/* Section: Latest Blog Posts */}
        <section id="blog" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 [font-family:var(--font-dm-sans)]">
            latest posts
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 italic mb-6">
            from the digital notebook
          </p>
          <div className="flex flex-col gap-8">
            {/* Post 1 */}
            <a href="https://my-blog-tan-tau.vercel.app/posts/my-first-post" target="_blank" rel="noopener noreferrer" className="group flex flex-col sm:flex-row gap-4 sm:items-center">
              <div className="w-full sm:w-64 shrink-0">
                <Image src="https://my-blog-tan-tau.vercel.app/banners/Post1.svg" alt="So...Here I Am on the Internet" width={400} height={300} className="w-full aspect-video object-cover rounded-lg group-hover:opacity-80 transition-opacity" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  So...Here I Am on the Internet
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 line-clamp-2">
                  a little about me, what I enjoy, and why I started this blog
                </p>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-2">Read post →</p>
              </div>
            </a>
            
            {/* Post 2 */}
            <a href="https://my-blog-tan-tau.vercel.app/posts/readme-aesthetic" target="_blank" rel="noopener noreferrer" className="group flex flex-col sm:flex-row gap-4 sm:items-center">
              <div className="w-full sm:w-64 shrink-0">
                <Image src="https://my-blog-tan-tau.vercel.app/banners/post2.svg" alt="readme, but make it aesthetic ✨" width={400} height={300} className="w-full aspect-video object-cover rounded-lg group-hover:opacity-80 transition-opacity" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  readme, but make it aesthetic ✨
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 line-clamp-2">
                  not everything has to be loud to be meaningful.
                </p>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-2">Read post →</p>
              </div>
            </a>

            {/* Post 3 */}
            <a href="https://my-blog-tan-tau.vercel.app/posts/git-commit-go" target="_blank" rel="noopener noreferrer" className="group flex flex-col sm:flex-row gap-4 sm:items-center">
              <div className="w-full sm:w-64 shrink-0">
                <Image src="https://my-blog-tan-tau.vercel.app/banners/post5.svg" alt="Git Commit Go" width={400} height={300} className="w-full aspect-video object-cover rounded-lg group-hover:opacity-80 transition-opacity" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Git Commit Go
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 line-clamp-2">
                  A quick guide on how to interact with GitHub programmatically using their REST API.
                </p>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-2">Read post →</p>
              </div>
            </a>
          </div>
        </section>

        {/* Section: Currently learning */}
        <section>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 [font-family:var(--font-dm-sans)]">
            what i am currently learning
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 italic mb-4">
            learning, unlearning, relearning
          </p>
          <ul className="plus-list space-y-2 text-zinc-700 dark:text-zinc-300">
            <li>currently learning how to make things feel simple without making them boring</li>
            <li>exploring better ways to structure code, design cleaner interfaces, and build products that feel intentional from the first click</li>
            <li>trying to understand why some digital experiences feel effortless while others feel confusing, even when they do the same thing</li>
            <li>also learning to be okay with not knowing everything yet and building anyway</li>
          </ul>
        </section>

      </div>
    </div>
      
    {/* Curved Footer */}
    <Footer />
  </div>
  );
}
