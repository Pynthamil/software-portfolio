"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

export interface BlogPost {
  title: string;
  description: string;
  image: string;
  link: string;
  category?: string;
  tags?: string[];
}

interface BlogListProps {
  blogs: BlogPost[];
}

const POSTS_PER_PAGE = 5;

export default function BlogList({ blogs }: BlogListProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Extract categories dynamically
  const categories = useMemo(() => {
    const cats = new Set<string>();
    blogs.forEach((b) => {
      if (b.category) cats.add(b.category);
    });
    return ["All", ...Array.from(cats)];
  }, [blogs]);

  // Filter blogs based on category and optional search query
  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesCategory =
        selectedCategory === "All" ||
        blog.category === selectedCategory ||
        blog.tags?.includes(selectedCategory);

      const matchesSearch =
        searchQuery.trim() === "" ||
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.category?.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [blogs, selectedCategory, searchQuery]);

  const totalPages = Math.ceil(filteredBlogs.length / POSTS_PER_PAGE);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentBlogs = filteredBlogs.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <div className="max-w-2xl w-full flex flex-col gap-6">
      {/* Header Controls: Filters & Search */}
      <div className="flex flex-col gap-4 w-full">
        {/* Search Input */}
        <div className="relative w-full">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search posts..."
            className="w-full bg-white border border-zinc-200/90 rounded-xl px-4 py-2.5 pl-10 text-sm font-mono text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#5569FF] focus:ring-2 focus:ring-[#5569FF]/10 transition-all shadow-2xs"
          />
          <svg
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" strokeWidth="2" />
            <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
          </svg>
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-zinc-400 hover:text-zinc-600 px-1.5 py-0.5 rounded cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 flex-wrap">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            const count =
              category === "All"
                ? blogs.length
                : blogs.filter(
                    (b) => b.category === category || b.tags?.includes(category)
                  ).length;

            return (
              <button
                key={category}
                type="button"
                onClick={() => handleCategorySelect(category)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium tracking-wide transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? "bg-[#5569FF] text-white shadow-xs"
                    : "bg-white text-zinc-600 hover:text-zinc-900 border border-zinc-200/80 hover:border-zinc-300 hover:bg-zinc-50"
                }`}
              >
                <span>{category}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-zinc-100 text-zinc-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Blog Cards List */}
      {filteredBlogs.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-12 rounded-2xl bg-white border border-zinc-200/90 shadow-xs text-center gap-2">
          <span className="text-2xl">🔍</span>
          <h3 className="text-lg font-bold text-zinc-800 [font-family:var(--font-dm-sans)]">
            No posts found
          </h3>
          <p className="text-sm text-zinc-500 font-mono">
            Try adjusting your search or category filter.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="mt-2 text-xs font-mono text-[#5569FF] hover:underline cursor-pointer"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-4 w-full">
          {currentBlogs.map((blog, index) => (
            <div
              key={startIndex + index}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 rounded-2xl bg-white border border-zinc-200/90 shadow-sm w-full group hover:border-[#5569FF]/30 transition-all duration-200"
            >
              <Link
                href={blog.link}
                className="w-full sm:w-[220px] md:w-[230px] shrink-0 aspect-[16/10] relative rounded-xl overflow-hidden bg-[#F0F2FF] block"
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <div className="flex flex-col justify-between flex-1 py-0.5 text-left w-full h-full">
                <div>
                  {blog.category && (
                    <span className="text-[11px] font-mono font-semibold tracking-wider uppercase text-[#5569FF] bg-[#5569FF]/10 px-2 py-0.5 rounded-md inline-block mb-1.5">
                      {blog.category}
                    </span>
                  )}
                  <Link href={blog.link} className="block w-fit">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#18181B] group-hover:text-[#5569FF] transition-colors leading-tight [font-family:var(--font-dm-sans)]">
                      {blog.title}
                    </h2>
                  </Link>
                  <p className="text-[#71717A] text-sm mt-1.5 leading-relaxed [font-family:var(--font-dm-sans)]">
                    {blog.description}
                  </p>
                </div>
                <Link
                  href={blog.link}
                  className="text-[#5569FF] hover:text-[#3730A3] text-sm font-medium mt-3 inline-flex items-center gap-1 transition-colors w-fit [font-family:var(--font-dm-sans)]"
                >
                  Read post &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination Page Marker */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-4 mb-2 select-none font-mono">
          <button
            type="button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
            className={`text-lg px-2 py-1 transition-colors ${
              currentPage === 1
                ? "text-zinc-300 cursor-not-allowed"
                : "text-zinc-400 hover:text-[#5569FF] cursor-pointer"
            }`}
          >
            &lsaquo;
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => handlePageChange(page)}
              className={`flex items-center justify-center w-9 h-9 rounded-full text-sm font-bold transition-all cursor-pointer ${
                currentPage === page
                  ? "bg-[#5569FF] text-white shadow-xs"
                  : "text-zinc-600 hover:text-[#5569FF] hover:bg-[#EEF2FF]"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            type="button"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next page"
            className={`text-lg px-2 py-1 transition-colors ${
              currentPage === totalPages
                ? "text-zinc-300 cursor-not-allowed"
                : "text-zinc-400 hover:text-[#5569FF] cursor-pointer"
            }`}
          >
            &rsaquo;
          </button>
        </div>
      )}
    </div>
  );
}
