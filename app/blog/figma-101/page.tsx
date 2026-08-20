import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Figma 101 | Blog",
  description: "A template for new posts",
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
              src="/post_covers/post7.svg"
              alt="Figma 101"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">
              Figma 101 : Understanding the Tool
            </h1>
            <span className="text-zinc-500">August 12, 2026</span>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-zinc font-mono text-zinc-700 flex flex-col gap-8 text-lg leading-relaxed">
          
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

          <div className="flex flex-col gap-4 mt-6 pt-6 border-t border-zinc-200">
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
    </div>
  );
}
