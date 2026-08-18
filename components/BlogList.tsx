"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export interface BlogPost {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface BlogListProps {
  blogs: BlogPost[];
}

const POSTS_PER_PAGE = 5;

export default function BlogList({ blogs }: BlogListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogs.length / POSTS_PER_PAGE);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentBlogs = blogs.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-2xl w-full flex flex-col gap-4">
      {currentBlogs.map((blog, index) => (
        <Link
          href={blog.link}
          key={startIndex + index}
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

      {/* Pagination Page Marker */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-6 mb-2 select-none">
          <button
            type="button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
            className={`text-lg px-2 py-1 transition-colors ${
              currentPage === 1
                ? "text-zinc-300 dark:text-zinc-700 cursor-not-allowed"
                : "text-zinc-400 hover:text-[#5569FF] dark:hover:text-[#8191FF] cursor-pointer"
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
                  : "text-zinc-600 dark:text-zinc-400 hover:text-[#5569FF] dark:hover:text-[#8191FF] hover:bg-[#EEF2FF] dark:hover:bg-zinc-800"
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
                ? "text-zinc-300 dark:text-zinc-700 cursor-not-allowed"
                : "text-zinc-400 hover:text-[#5569FF] dark:hover:text-[#8191FF] cursor-pointer"
            }`}
          >
            &rsaquo;
          </button>
        </div>
      )}
    </div>
  );
}
