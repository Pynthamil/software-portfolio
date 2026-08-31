"use client";

import Image from "next/image";
import Link from "next/link";

interface ScrollBackToTopSectionProps {
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  nextProjectAd?: {
    href: string;
    image: string;
    alt: string;
  };
}

export default function ScrollBackToTopSection({
  imageSrc = "/project-assets/semantic/back.svg",
  imageAlt = "Thanks for reading illustration",
  imageWidth = 407,
  imageHeight = 330,
  nextProjectAd,
}: ScrollBackToTopSectionProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full flex flex-col items-center justify-center text-center gap-6 pt-16 pb-8 select-none [font-family:var(--font-dm-sans)]">
      {/* Scroll Back to Top Interactive Button */}
      <button
        type="button"
        onClick={scrollToTop}
        className="inline-flex items-center gap-1.5 text-base sm:text-lg font-medium text-[#5569FF] hover:text-[#3730A3] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer bg-transparent border-none p-0 group"
      >
        <span className="group-hover:-translate-y-0.5 transition-transform duration-200" aria-hidden="true">
          &uarr;
        </span>
        <span className="underline underline-offset-4 decoration-[#5569FF]/40 group-hover:decoration-[#3730A3]">
          Scroll Back to Top
        </span>
      </button>

      {/* Thanks for reading! Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#18181B] tracking-tight m-0">
        Thanks for reading!
      </h2>

      {/* Illustration */}
      <div className="w-40 sm:w-48 md:w-56 h-auto flex items-center justify-center my-2 transition-transform duration-300 hover:scale-105">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className="w-full h-auto object-contain block"
        />
      </div>

      {/* Bottom Accent Divider */}
      <div className="w-12 h-1 bg-zinc-800 rounded-full mt-2" />

      {/* Next Project Ad - anchored to the right side of the bottom section (does not move on scroll) */}
      {nextProjectAd && (
        <div className="hidden xl:block absolute right-6 xl:right-10 2xl:right-16 bottom-12 sm:bottom-16 w-52 sm:w-56 2xl:w-60 select-none text-left z-20">
          <Link
            href={nextProjectAd.href}
            className="group relative block rounded-2xl overflow-hidden shadow-xl transition-all duration-200 hover:opacity-95 text-left"
          >
            {/* Slanted Arrow in Top Right */}
            <div className="absolute top-3.5 right-3.5 z-20 pointer-events-none text-white/80 group-hover:text-white transition-colors">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </div>

            <Image
              src={nextProjectAd.image}
              alt={nextProjectAd.alt}
              width={413}
              height={507}
              className="w-full h-auto object-contain block rounded-2xl"
              unoptimized
            />
          </Link>
        </div>
      )}

      {/* Mobile/Tablet Next Project Ad below */}
      {nextProjectAd && (
        <div className="xl:hidden mt-8 w-52 sm:w-56 select-none text-left">
          <Link
            href={nextProjectAd.href}
            className="group relative block rounded-2xl overflow-hidden shadow-xl text-left"
          >
            <div className="absolute top-3.5 right-3.5 z-20 pointer-events-none text-white/80">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </div>

            <Image
              src={nextProjectAd.image}
              alt={nextProjectAd.alt}
              width={413}
              height={507}
              className="w-full h-auto object-contain block rounded-2xl"
              unoptimized
            />
          </Link>
        </div>
      )}
    </div>
  );
}
