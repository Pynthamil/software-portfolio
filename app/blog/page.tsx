import BlogList from "@/components/BlogList";
import { ALL_BLOGS } from "@/data/blogs";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Pynthamil Pavendan",
  description: "my brain leaving sticky notes for itself",
  openGraph: {
    title: "Blog | Pynthamil Pavendan",
    description: "my brain leaving sticky notes for itself",
    url: "/blog",
    images: ["/post_covers/post1.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Pynthamil Pavendan",
    description: "my brain leaving sticky notes for itself",
    images: ["/post_covers/post1.svg"],
  },
};

export default function BlogPage() {
  return (
    <div className="flex flex-col flex-1 items-center bg-[#F7F6F4] font-mono px-4 pt-32 sm:pt-36 pb-16 w-full min-h-screen">
      <BlogList blogs={ALL_BLOGS} />
    </div>
  );
}
