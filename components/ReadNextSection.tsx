import Image from "next/image";
import Link from "next/link";
import { ALL_BLOGS, BlogPostItem } from "@/data/blogs";

interface ReadNextSectionProps {
  currentSlug: string;
  maxPosts?: number;
}

export default function ReadNextSection({
  currentSlug,
  maxPosts = 2,
}: ReadNextSectionProps) {
  // Find current post to know its category
  const currentPost = ALL_BLOGS.find(
    (b) => b.slug === currentSlug || b.link.includes(currentSlug)
  );

  // Filter out current post
  const otherPosts = ALL_BLOGS.filter(
    (b) => b.slug !== currentSlug && !b.link.includes(currentSlug)
  );

  // Prioritize same category if available, then other posts
  const sameCategory = otherPosts.filter(
    (b) => currentPost && b.category === currentPost.category
  );
  const differentCategory = otherPosts.filter(
    (b) => !currentPost || b.category !== currentPost.category
  );

  const suggestedPosts = [...sameCategory, ...differentCategory].slice(
    0,
    maxPosts
  );

  if (suggestedPosts.length === 0) return null;

  return (
    <div className="w-full max-w-3xl mt-12 pt-12 border-t border-zinc-200/80 flex flex-col gap-6 font-mono">
      <div className="flex flex-col gap-1 text-left">
        <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">
          if you liked this, read next...
        </h3>
        <p className="text-xs sm:text-sm text-zinc-500">
          more notes, builds, and experiments from my corner of the internet
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {suggestedPosts.map((post) => (
          <Link
            key={post.slug}
            href={post.link}
            className="group flex flex-col bg-white rounded-2xl border border-zinc-200/80 hover:border-[#5569FF]/50 p-4 transition-all duration-200 hover:-translate-y-0.5 shadow-xs"
          >
            <div className="w-full h-44 relative rounded-xl overflow-hidden border border-zinc-100 bg-zinc-50 mb-3.5">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="flex flex-col gap-1.5 flex-1">
              <span className="text-[11px] font-semibold text-[#5569FF] uppercase tracking-wider">
                {post.category}
              </span>
              <h4 className="text-base sm:text-lg font-bold text-zinc-900 group-hover:text-[#5569FF] transition-colors leading-snug [font-family:var(--font-dm-sans)]">
                {post.title}
              </h4>
              <p className="text-xs text-zinc-600 line-clamp-2 mt-auto pt-1 leading-relaxed">
                {post.description}
              </p>
              <div className="inline-flex items-center gap-1 text-xs text-zinc-900 group-hover:text-[#5569FF] font-medium pt-2 transition-colors">
                <span>Read note</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
