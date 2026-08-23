"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [views, setViews] = useState<number>(0);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    // Increment the view counter and fetch the latest count
    fetch("https://api.counterapi.dev/v1/pynthamil-portfolio-live/views/up")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch counter");
        return res.json();
      })
      .then((data) => {
        if (typeof data.count === "number") {
          setViews(data.count);
        }
      })
      .catch(() => {
        // Fallback to local storage silently if API is down
        const savedViews = localStorage.getItem("portfolio_views_count");
        if (savedViews) {
          const nextViews = parseInt(savedViews, 10) + 1;
          setViews(nextViews);
          localStorage.setItem("portfolio_views_count", nextViews.toString());
        } else {
          setViews(1);
          localStorage.setItem("portfolio_views_count", "1");
        }
      });
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
        className="relative w-full h-[1300px] sm:h-[1200px] overflow-hidden"
        style={{ clipPath: "url(#footer-curve)" }}
      >
        {/* Background Image (using img2.svg) */}
        <div className="absolute inset-0 w-full h-full opacity-100">
          <Image
            src="/img3.svg"
            alt="Footer Background Banner"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* 2. Footer Content Section (Solid background, text under image) */}
      <div className="w-full bg-white py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          
          {/* Main Footer Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-2xl font-sans text-zinc-600">
            {/* Column 1: Info */}
            <div className="flex flex-col gap-3">
              <span className="font-bold text-zinc-900 text-3xl">pyndulogs()</span>
              <p className="text-xl text-zinc-500">
                A student developer curious about interaction design and coding.
              </p>
              <p className="text-lg text-zinc-400 mt-2">
                © {new Date().getFullYear()} Pynthamil Pavendan. All rights reserved.
              </p>
            </div>

            {/* Column 2: Navigation */}
            <div className="flex flex-col gap-2 md:items-center">
              <div className="flex flex-col gap-2">
                <span className="font-bold text-zinc-900 text-3xl mb-1">Navigation</span>
                <Link href="/blog" className="hover:text-[#5569FF] transition-colors">/blog</Link>
                <Link href="/projects" className="hover:text-[#5569FF] transition-colors">/projects</Link>
                <Link href="/#about" className="hover:text-[#5569FF] transition-colors">/about</Link>
              </div>
            </div>

            {/* Column 3: Social & Stats */}
            <div className="flex flex-col gap-4 md:items-end">
              <div className="flex flex-col gap-2 md:items-end">
                <span className="font-bold text-zinc-900 text-3xl mb-1">Find Me</span>
                <a href="https://github.com/Pynthamil" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">GitHub</a>
                <a href="https://www.linkedin.com/in/pynthamil-pavendan-55795228a/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">LinkedIn</a>
                <a href="https://twitter.com/pyndu15" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Twitter</a>
                <a href="mailto:pavendanpynthamil@gmail.com" className="hover:text-blue-600 transition-colors">Email</a>
              </div>

              {/* View Counter Smooth Expanding Button */}
              <button
                onClick={() => setIsRevealed(!isRevealed)}
                aria-label={isRevealed ? "Hide page views count" : "Show page views count"}
                title={isRevealed ? "Click to hide views count" : "Click to view page views"}
                className={`h-10 bg-white hover:bg-zinc-50/90 text-zinc-900 rounded-md border border-zinc-200 shadow-xs flex items-center transition-all duration-300 ease-out cursor-pointer overflow-hidden active:scale-95 select-none ${
                  isRevealed ? "px-3 gap-2 min-w-[72px]" : "w-10 px-0 justify-center"
                }`}
              >
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
                  <svg className="w-5 h-5 text-zinc-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M 4 14 A 8 8 0 0 1 20 14" strokeWidth="2.5" />
                    <circle cx="12" cy="14" r="3.5" strokeWidth="2.5" />
                    <line
                      x1="3"
                      y1="3"
                      x2="21"
                      y2="21"
                      strokeWidth="2.8"
                      className={`transition-opacity duration-300 ease-out ${isRevealed ? "opacity-0" : "opacity-100"}`}
                    />
                  </svg>
                </div>
                <span
                  className={`font-semibold text-lg text-zinc-900 tracking-tight whitespace-nowrap overflow-hidden transition-all duration-300 ease-out ${
                    isRevealed ? "max-w-[120px] opacity-100 pr-1" : "max-w-0 opacity-0 pr-0"
                  }`}
                >
                  {views.toLocaleString()}
                </span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
