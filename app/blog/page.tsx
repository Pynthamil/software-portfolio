import BlogList, { BlogPost } from "@/components/BlogList";

export const metadata = {
  title: "Blog | Pynthamil Pavendan",
  description: "my brain leaving sticky notes for itself",
};

const blogs: BlogPost[] = [
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
      <BlogList blogs={blogs} />
    </div>
  );
}
