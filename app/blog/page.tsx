import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Blog | Pynthamil Pavendan",
  description: "my brain leaving sticky notes for itself",
};

const categories = [
  {
    id: "development",
    title: "Latest Development blogs",
    blogs: [
      {
        title: "Git Commit Go",
        description: "A quick guide on how to interact with GitHub programmatically using their REST API.",
        image: "/post_covers/post5.svg",
        link: "/blog/git-commit-go"
      },
      {
        title: "The Art of Committing",
        description: "A simple and calm guide to using Git and version control.",
        image: "/post_covers/post4.svg",
        link: "/blog/art-of-committing"
      },
    ]
  },
  {
    id: "design",
    title: "Latest Design blogs",
    blogs: [
      {
        title: "readme, but make it aesthetic ✨",
        description: "not everything has to be loud to be meaningful.",
        image: "/post_covers/post2.svg",
        link: "/blog/readme-aesthetic"
      },
      {
        title: "Figma 101",
        description: "First steps in creating aesthetic and minimal design systems in Figma.",
        image: "/post_covers/post7.svg",
        link: "/blog/figma-101"
      },
    ]
  },
  {
    id: "insights",
    title: "Latest Insights blogs",
    blogs: [
      {
        title: "the idea ecosystem",
        description: "How I use Notion to keep my projects and ideas calm and minimal.",
        image: "/post_covers/post3.svg",
        link: "/blog/idea-ecosystem"
      },
    ]
  },
  {
    id: "other",
    title: "Latest Other blogs",
    blogs: [
      {
        title: "So...Here I Am on the Internet",
        description: "a little about me, what I enjoy, and why I started this blog",
        image: "/post_covers/post1.svg",
        link: "/blog/so-here-i-am"
      },
    ]
  }
];

export default function BlogPage() {
  return (
    <div className="flex flex-col flex-1 items-center bg-[#F7F6F4] font-mono dark:bg-[#0a0a0a] px-4 sm:px-6 pt-28 md:pt-32 pb-16 w-full">
      <div className="max-w-3xl w-full text-left flex flex-col gap-10">
        
        {categories.map((category) => (
          <section key={category.id} className="flex flex-col gap-4 w-full">
            {/* Category Header */}
            <div className="flex justify-between items-end w-full">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white [font-family:var(--font-dm-sans)]">
                {category.title}
              </h2>
            </div>

            {/* Blog Cards List */}
            <div className="flex flex-col gap-4">
              {category.blogs.map((blog, index) => (
                <Link
                  href={blog.link}
                  key={index}
                  className="group flex flex-col sm:flex-row items-center sm:items-start gap-5 p-4 sm:p-5 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 w-full"
                >
                  <div className="w-full sm:w-[240px] md:w-[260px] shrink-0 aspect-[16/10] relative rounded-2xl overflow-hidden bg-[#F0F2FF] dark:bg-zinc-800">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-1 h-full py-1 text-left w-full">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-[#5569FF] dark:group-hover:text-[#8191FF] transition-colors [font-family:var(--font-dm-sans)]">
                        {blog.title}
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
                        {blog.description}
                      </p>
                    </div>
                    <span className="text-[#3B82F6] dark:text-[#60A5FA] font-medium text-sm sm:text-base mt-4 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read post &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}

      </div>
    </div>
  );
}


