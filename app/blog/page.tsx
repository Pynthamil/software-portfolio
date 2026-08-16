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
      { title: "Git Commit Go", image: "/post_covers/post5.svg", link: "/blog/git-commit-go" },
      { title: "The Art of Committing", image: "/post_covers/post4.svg", link: "/blog/art-of-committing" },
    ]
  },
  {
    id: "design",
    title: "Latest Design blogs",
    blogs: [
      { title: "Figma 101", image: "/post_covers/post7.svg", link: "/blog/figma-101" },
      { title: "readme, but make it aesthetic ✨", image: "/post_covers/post2.svg", link: "/blog/readme-aesthetic" },
    ]
  },
  {
    id: "insights",
    title: "Latest Insights blogs",
    blogs: [
      { title: "the idea ecosystem", image: "/post_covers/post3.svg", link: "/blog/idea-ecosystem" },
    ]
  },
  {
    id: "other",
    title: "Latest Other blogs",
    blogs: [
      { title: "So...Here I Am on the Internet", image: "/post_covers/post1.svg", link: "/blog/so-here-i-am" },
    ]
  }
];

export default function BlogPage() {
  return (
    <div className="flex flex-col flex-1 items-center bg-white font-mono dark:bg-[#0a0a0a] px-6 py-8 md:px-12 md:py-16 lg:px-24 mt-16 w-full">
      <div className="max-w-6xl w-full text-left flex flex-col gap-24">
        
        {categories.map((category) => (
          <section key={category.id} className="flex flex-col gap-6 w-full">
            {/* Category Header */}
            <div className="flex justify-between items-end w-full mb-2">
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white [font-family:var(--font-dm-sans)]">
                {category.title}
              </h2>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.blogs.map((blog, index) => (
                <Link href={blog.link} key={index} className="group flex flex-col gap-4">
                  <div className="w-full aspect-[4/3] relative rounded-2xl overflow-hidden bg-white dark:bg-zinc-800 transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-indigo-500 dark:text-indigo-400 [font-family:var(--font-dm-sans)]">
                    {blog.title}
                  </h3>
                </Link>
              ))}
            </div>
            
            {/* Pagination Mockup */}
            <div className="flex justify-center items-center gap-4 mt-4 text-zinc-500 dark:text-zinc-600">
              <button className="p-2 hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors">&lsaquo;</button>
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#E5D4FF] text-zinc-900 font-bold">1</span>
              <button className="p-2 hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors">&rsaquo;</button>
            </div>
          </section>
        ))}

      </div>
    </div>
  );
}
