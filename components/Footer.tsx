"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [views, setViews] = useState(1234);

  useEffect(() => {
    // Generate a slightly dynamic view counter for visual interest
    const savedViews = localStorage.getItem("portfolio_views");
    if (savedViews) {
      const nextViews = parseInt(savedViews, 10) + 1;
      setViews(nextViews);
      localStorage.setItem("portfolio_views", nextViews.toString());
    } else {
      const initialViews = Math.floor(Math.random() * 500) + 1000;
      setViews(initialViews);
      localStorage.setItem("portfolio_views", initialViews.toString());
    }
  }, []);

  return (
    <footer className="relative w-full mt-24">
      {/* SVG Clip Path Definition */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="footer-curve" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 Q 0.5,0.2 1,0 L 1,1 L 0,1 Z" />
          </clipPath>
        </defs>
      </svg>

      <div 
        className="relative w-full h-[800px] sm:h-[720px] overflow-hidden"
        style={{ clipPath: "url(#footer-curve)" }}
      >
        {/* Background Image (using homepage header image) */}
        <div className="absolute inset-0 w-full h-full opacity-100">
          <Image
            src="https://my-blog-tan-tau.vercel.app/banners/Post1.svg"
            alt="Footer Background Banner"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* 2. Footer Content Section (Solid background, text under image) */}
      <div className="w-full bg-white dark:bg-zinc-900 py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          
          {/* Main Footer Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-base font-mono text-zinc-650 dark:text-zinc-400">
            {/* Column 1: Info */}
            <div className="flex flex-col gap-3">
              <span className="font-bold text-zinc-900 dark:text-white text-xl">pyndulogs()</span>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                A student developer curious about interaction design and coding.
              </p>
              <p className="text-sm text-zinc-400 dark:text-zinc-500 mt-2">
                © {new Date().getFullYear()} Pynthamil Pavendan. All rights reserved.
              </p>
            </div>

            {/* Column 2: Navigation */}
            <div className="flex flex-col gap-2 md:items-center">
              <div className="flex flex-col gap-2">
                <span className="font-bold text-zinc-900 dark:text-white text-xl mb-1">Navigation</span>
                <Link href="#blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">/blog</Link>
                <Link href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">/projects</Link>
                <Link href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">/about</Link>
              </div>
            </div>

            {/* Column 3: Social & Stats */}
            <div className="flex flex-col gap-4 md:items-end">
              <div className="flex flex-col gap-2 md:items-end">
                <span className="font-bold text-zinc-900 dark:text-white text-xl mb-1">Find Me</span>
                <a href="https://github.com/pynthamil" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">GitHub</a>
                <a href="https://linkedin.com/in/pynthamil" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">LinkedIn</a>
                <a href="https://twitter.com/pynthamil" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Twitter</a>
              </div>

              {/* View Counter */}
              <div className="flex items-center gap-2 text-sm text-zinc-500 bg-zinc-50 dark:bg-zinc-950 px-3 py-1.5 rounded-md border border-zinc-200 dark:border-zinc-800/80" title="Page views count">
                <svg className="w-4 h-4 text-zinc-400 dark:text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>{views.toLocaleString()} views</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
