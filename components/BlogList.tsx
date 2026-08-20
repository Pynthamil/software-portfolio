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
        <div
          key={startIndex + index}
          className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 rounded-2xl bg-white border border-zinc-200/90 shadow-sm w-full"
        >
          <Link
            href={blog.link}
            className="w-full sm:w-[220px] md:w-[230px] shrink-0 aspect-[16/10] relative rounded-xl overflow-hidden bg-[#F0F2FF] block"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
            />
          </Link>
          <div className="flex flex-col justify-between flex-1 py-0.5 text-left w-full h-full">
            <div>
              <Link href={blog.link} className="block w-fit">
                <h2 className="text-xl sm:text-2xl font-bold text-[#18181B] hover:text-[#5569FF] transition-colors leading-tight [font-family:var(--font-dm-sans)]">
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
