"use client";

import Image from "next/image";

interface ScrollBackToTopSectionProps {
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
}

export default function ScrollBackToTopSection({
  imageSrc = "/project-assets/semantic/back.svg",
  imageAlt = "Thanks for reading illustration",
  imageWidth = 407,
  imageHeight = 330,
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
    </div>
  );
}
