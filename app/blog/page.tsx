import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Blog | Pynthamil Pavendan",
  description: "my brain leaving sticky notes for itself",
};

const blogs = [
  {
    title: "So...Here I Am on the Internet",
    description: "a little about me, what I enjoy, and why I started this blog",
    image: "/post_covers/post1.svg",
    link: "/blog/so-here-i-am",
  },
  {
    title: "readme, but make it aesthetic ✨",
    description: "not everything has to be loud to be meaningful.",
    image: "/post_covers/post2.svg",
    link: "/blog/readme-aesthetic",
  },
  {
    title: "Git Commit Go",
    description: "A quick guide on how to interact with GitHub programmatically using their REST API.",
    image: "/post_covers/post5.svg",
    link: "/blog/git-commit-go",
  },
  {
    title: "The Art of Committing",
    description: "A simple and calm guide to using Git and version control.",
    image: "/post_covers/post4.svg",
    link: "/blog/art-of-committing",
  },
  {
    title: "Figma 101",
    description: "First steps in creating aesthetic and minimal design systems in Figma.",
    image: "/post_covers/post7.svg",
    link: "/blog/figma-101",
  },
  {
    title: "the idea ecosystem",
    description: "How I use Notion to keep my projects and ideas calm and minimal.",
    image: "/post_covers/post3.svg",
    link: "/blog/idea-ecosystem",
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col flex-1 items-center bg-[#F7F6F4] font-mono dark:bg-[#0a0a0a] px-4 pt-24 pb-16 w-full min-h-screen">
      <div className="max-w-2xl w-full flex flex-col gap-4">
        {blogs.map((blog, index) => (
          <Link
            href={blog.link}
            key={index}
            className="group flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all duration-200 w-full"
          >
            <div className="w-full sm:w-[220px] md:w-[230px] shrink-0 aspect-[16/10] relative rounded-xl overflow-hidden bg-[#F0F2FF] dark:bg-zinc-800">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col justify-between flex-1 py-0.5 text-left w-full h-full">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50 leading-tight [font-family:var(--font-dm-sans)]">
                  {blog.title}
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-1.5 leading-relaxed [font-family:var(--font-dm-sans)]">
                  {blog.description}
                </p>
              </div>
              <span className="text-blue-600 dark:text-blue-400 text-sm font-medium mt-3 inline-flex items-center gap-1 group-hover:underline [font-family:var(--font-dm-sans)]">
                Read post &rarr;
              </span>
            </div>
          </Link>
        ))}

        {/* Page Marker */}
        <div className="flex justify-center items-center gap-6 mt-6 mb-2 select-none">
          <button
            type="button"
            aria-label="Previous page"
            className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 text-lg transition-colors cursor-pointer"
          >
            &lsaquo;
          </button>
          <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#E5D4FF] text-zinc-900 font-bold text-sm">
            1
          </span>
          <button
            type="button"
            aria-label="Next page"
            className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 text-lg transition-colors cursor-pointer"
          >
            &rsaquo;
          </button>
        </div>
      </div>
    </div>
  );
}

