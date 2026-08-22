import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "So...Here I Am on the Internet | Blog",
  description: "Hey there, this is Pynthamil 👋 I love coding, especially the feeling of bringing an idea from my mind into existence.",
  openGraph: {
    title: "So...Here I Am on the Internet | Blog",
    description: "Hey there, this is Pynthamil 👋 I love coding, especially the feeling of bringing an idea from my mind into existence.",
    url: "/blog/so-here-i-am",
    images: ["/post_covers/post1.svg"],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "So...Here I Am on the Internet | Blog",
    description: "Hey there, this is Pynthamil 👋 I love coding, especially the feeling of bringing an idea from my mind into existence.",
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
              alt="So...Here I Am on the Internet"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">
              So...Here I Am on the Internet
            </h1>
            <span className="text-zinc-500">August 15, 2026</span>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-zinc font-mono text-zinc-700 flex flex-col gap-8 text-lg leading-relaxed">
          
          <p>Hey there, this is Pynthamil 👋</p>
          
          <p>
            I love coding, especially the feeling of bringing an idea from my mind into existence. 
            There is something magical about watching a random thought turn into a feature, a design, or a tiny corner of the internet that did not exist before.
          </p>

          <p>
            I am very much a <em>build what I need</em> kind of person. If I cannot find something that works the way I want, my first instinct is: <strong>fine… I will just build it myself.</strong>
          </p>

          <p>
            So this blog is basically me building my way out of frustration and documenting everything along the way. Kind of like the iconic energy of Cassie from Blogilates, but in tech form with fewer workouts and more debugging.
          </p>

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">Why this blog exists</h2>
            <p>I have always wanted a space where I could:</p>
            <ul style={{ listStyleType: '"+ "' }} className="ml-5 space-y-2 text-zinc-600">
              <li>share what I am learning</li>
              <li>document experiments</li>
              <li>talk about ideas that may or may not work</li>
              <li>receive encouragement</li>
              <li>receive constructive criticism</li>
            </ul>
          </div>

          <p>Think of this as a safe space to try, fail, learn, repeat.</p>

          <div className="bg-zinc-100 p-6 rounded-lg border border-zinc-200 text-sm">
            <p className="text-zinc-500 mb-2">Or in dev terms:</p>
            <code className="text-blue-600 whitespace-pre">
{`while(alive) {
   try()
   fail()
   debug()
   try_again()
}`}
            </code>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">Aside from coding and designing in Figma</h2>
            <p>Here are the things that make up most of my personality / hobbies and favourite things:</p>
            <ul style={{ listStyleType: '"+ "' }} className="ml-5 space-y-2 text-zinc-600">
              <li>binge watching shows and movies</li>
              <li>drawing (proud artist moment)</li>
              <li>reading books</li>
              <li>listening to audiobooks (especially immersive ones from GraphicAudio)</li>
              <li>reading manhwas</li>
              <li>collecting aesthetic inspiration on Pinterest for about a decade now</li>
            </ul>
            <p className="italic text-zinc-500 mt-2">If you have recommendations, please drop them. I mostly enjoy fantasy with rich world building, structured magic systems, and a tiny bit of romance as a subplot.</p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">Fun facts about me</h2>
            <ul style={{ listStyleType: '"+ "' }} className="ml-5 space-y-2 text-zinc-600">
              <li>favourite boy band: Enhypen</li>
              <li>music taste: everything</li>
              <li>I love singing and dancing like nobody is watching</li>
              <li>introvert who also loves to yap</li>
              <li>personality type: INTJ</li>
              <li>I enjoy challenging myself just for the plot</li>
              <li>currently in 4th year (slightly terrifying, slightly exciting)</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">What you will find here</h2>
            <p>This blog will mostly document:</p>
            <ul style={{ listStyleType: '"+ "' }} className="ml-5 space-y-2 text-zinc-600">
              <li>things I build</li>
              <li>things I try to build</li>
              <li>things that refuse to work</li>
              <li>things that finally work after many commits</li>
              <li>design experiments</li>
              <li>dev notes</li>
              <li>lessons learned the hard way</li>
              <li>resources that helped me</li>
              <li>curiosity driven deep dives</li>
              <li>basically learning in public</li>
            </ul>
            <p className="mt-4">
              If something I share helps even one person who feels stuck like I did at some point, that would mean a lot.
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-8 pt-8 border-t border-zinc-200">
            <h2 className="text-2xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">You can request posts too</h2>
            <p>
              If there is something you would like me to write about, explore, or build, feel free to suggest it.
            </p>
            <p>I cannot promise perfection, but I can promise:</p>
            <ul style={{ listStyleType: '"+ "' }} className="ml-5 space-y-2 text-zinc-600">
              <li>effort</li>
              <li>curiosity</li>
              <li>honest documentation of the process</li>
            </ul>
          </div>

          <p className="font-bold text-zinc-900 text-xl mt-6">
            Thanks for being here 🤍
          </p>
          <p className="italic">
            If you are also figuring things out as you go,<br/>
            welcome.
          </p>

        </div>
      </article>
    </div>
  );
}
