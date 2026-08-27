export interface BlogPostItem {
  slug: string;
  title: string;
  description: string;
  image: string;
  link: string;
  category: "dev" | "design" | "insights" | "other";
  date?: string;
}

export const ALL_BLOGS: BlogPostItem[] = [
  {
    slug: "so-here-i-am",
    title: "So...Here I Am on the Internet",
    description: "a little about me, what I enjoy, and why I started this blog",
    image: "/post_covers/post1.svg",
    link: "/blog/so-here-i-am",
    category: "other",
    date: "August 15, 2026",
  },
  {
    slug: "readme-aesthetic",
    title: "readme, but make it aesthetic ✨",
    description: "not everything has to be loud to be meaningful.",
    image: "/post_covers/post2.svg",
    link: "/blog/readme-aesthetic",
    category: "design",
    date: "June 8, 2026",
  },
  {
    slug: "git-commit-go",
    title: "Git Commit Go",
    description: "A quick guide on how to interact with GitHub programmatically using their REST API.",
    image: "/post_covers/post5.svg",
    link: "/blog/git-commit-go",
    category: "dev",
    date: "July 11, 2026",
  },
  {
    slug: "art-of-committing",
    title: "The Art of Committing",
    description: "A simple and calm guide to using Git and version control.",
    image: "/post_covers/post4.svg",
    link: "/blog/art-of-committing",
    category: "dev",
    date: "July 10, 2026",
  },
  {
    slug: "figma-101",
    title: "Figma 101",
    description: "First steps in creating aesthetic and minimal design systems in Figma.",
    image: "/post_covers/post7.svg",
    link: "/blog/figma-101",
    category: "design",
    date: "August 12, 2026",
  },
  {
    slug: "semantic-email-struggles",
    title: "My Struggles Building Semantic Email",
    description: "what broke, what worked, and what I learned building an AI inbox copilot ✨",
    image: "/post_covers/post1.svg",
    link: "/blog/semantic-email-struggles",
    category: "insights",
    date: "August 2026",
  },
  {
    slug: "idea-ecosystem",
    title: "the idea ecosystem",
    description: "How I use Notion to keep my projects and ideas calm and minimal.",
    image: "/post_covers/post3.svg",
    link: "/blog/idea-ecosystem",
    category: "insights",
    date: "June 11, 2026",
  },
];
