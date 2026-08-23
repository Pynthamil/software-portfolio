"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface Persona {
  id: string;
  title: string;
  icon: string;
  image: string;
  alt: string;
}

const personas: Persona[] = [
  {
    id: "persona-faculty",
    title: "The Academic Faculty",
    icon: "🧑‍🏫",
    image: "/project-assets/semantic/up2.svg",
    alt: "User Persona - The Academic Faculty",
  },
  {
    id: "persona-high-school",
    title: "The High School Student",
    icon: "🎒",
    image: "/project-assets/semantic/up1.svg",
    alt: "User Persona - The High School Student",
  },
  {
    id: "persona-overwhelmed",
    title: "The Overwhelmed Student",
    icon: "📚",
    image: "/project-assets/semantic/up3.svg",
    alt: "User Persona - The Overwhelmed Student",
  },
];

export default function UserPersonaCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) {
      setScrollProgress(0);
      setCanScrollLeft(false);
      setCanScrollRight(false);
      return;
    }

    const progress = (el.scrollLeft / maxScroll) * 100;
    setScrollProgress(Math.min(100, Math.max(0, progress)));
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < maxScroll - 10);
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.75;
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full flex flex-col gap-4 relative my-2">
      {/* Scrollable Container Wrapper with wider breakout width */}
      <div className="relative w-full -mx-4 sm:-mx-10 md:-mx-16 lg:-mx-24 w-[calc(100%+2rem)] sm:w-[calc(100%+5rem)] md:w-[calc(100%+8rem)] lg:w-[calc(100%+12rem)] max-w-none self-center">
        {/* Navigation Buttons */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll personas left"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-zinc-900/60 hover:bg-zinc-900/80 text-white flex items-center justify-center backdrop-blur-md shadow-lg transition-all"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}

        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll personas right"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-zinc-900/60 hover:bg-zinc-900/80 text-white flex items-center justify-center backdrop-blur-md shadow-lg transition-all"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}

        {/* Horizontal Scroll Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 sm:gap-7 overflow-x-auto snap-x snap-mandatory px-4 sm:px-6 md:px-8 py-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {personas.map((persona, index) => (
            <div
              key={`${persona.id}-${index}`}
              className="flex-none w-[340px] sm:w-[420px] md:w-[480px] snap-start flex flex-col gap-2.5"
            >
              {/* Persona Label Header */}
              <div className="flex items-center gap-2 px-1 font-bold text-zinc-900 text-base sm:text-lg">
                <span>{persona.icon}</span>
                <span>{persona.title}</span>
              </div>

              {/* Persona Card */}
              <div className="w-full relative rounded-lg overflow-hidden border border-zinc-200 bg-white">
                <Image
                  src={persona.image}
                  alt={persona.alt}
                  width={581}
                  height={896}
                  className="w-full h-auto object-contain block rounded-lg"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scrollbar Progress Indicator Bar */}
      <div className="w-48 sm:w-64 h-1.5 bg-zinc-200/80 rounded-full overflow-hidden self-center">
        <div
          className="h-full bg-zinc-700 rounded-full transition-all duration-150 ease-out"
          style={{
            width: "35%",
            transform: `translateX(${scrollProgress * 1.85}%)`,
          }}
        />
      </div>
    </div>
  );
}
