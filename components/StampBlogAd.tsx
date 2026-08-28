"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface StampBlogAdProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  text: string;
  className?: string;
}

function generateStampPath(w: number, h: number, r = 3.5, pad = 6) {
  if (w <= 0 || h <= 0) return "";
  const x0 = pad;
  const x1 = w - pad;
  const y0 = pad;
  const y1 = h - pad;
  const availW = x1 - x0;
  const availH = y1 - y0;

  const nx = Math.max(2, Math.round(availW / 14));
  const ny = Math.max(2, Math.round(availH / 14));
  const stepX = availW / (nx - 1);
  const stepY = availH / (ny - 1);

  let d = `M ${x0} ${y0}`;

  // Top edge (teeth arc upwards/outwards)
  for (let i = 0; i < nx; i++) {
    const cx = x0 + i * stepX;
    d += ` L ${(cx - r).toFixed(1)} ${y0} A ${r} ${r} 0 0 0 ${(cx + r).toFixed(1)} ${y0}`;
  }
  d += ` L ${x1} ${y0}`;

  // Right edge (teeth arc rightwards/outwards)
  for (let i = 0; i < ny; i++) {
    const cy = y0 + i * stepY;
    d += ` L ${x1} ${(cy - r).toFixed(1)} A ${r} ${r} 0 0 0 ${x1} ${(cy + r).toFixed(1)}`;
  }
  d += ` L ${x1} ${y1}`;

  // Bottom edge (teeth arc downwards/outwards)
  for (let i = nx - 1; i >= 0; i--) {
    const cx = x0 + i * stepX;
    d += ` L ${(cx + r).toFixed(1)} ${y1} A ${r} ${r} 0 0 0 ${(cx - r).toFixed(1)} ${y1}`;
  }
  d += ` L ${x0} ${y1}`;

  // Left edge (teeth arc leftwards/outwards)
  for (let i = ny - 1; i >= 0; i--) {
    const cy = y0 + i * stepY;
    d += ` L ${x0} ${(cy + r).toFixed(1)} A ${r} ${r} 0 0 0 ${x0} ${(cy - r).toFixed(1)}`;
  }
  d += ` Z`;

  return d;
}

export default function StampBlogAd({
  href,
  imageSrc,
  imageAlt,
  text,
  className = "",
}: StampBlogAdProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState<{ w: number; h: number }>({
    w: 320,
    h: 114,
  });

  useEffect(() => {
    if (!containerRef.current) return;

    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          setDimensions({
            w: Math.round(rect.width),
            h: Math.round(rect.height),
          });
        }
      }
    };

    updateSize();

    const observer = new ResizeObserver(updateSize);
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const pad = 6;
  const stampPath = generateStampPath(dimensions.w, dimensions.h, 3.5, pad);

  return (
    <Link
      href={href}
      className={`block relative group no-underline transition-all duration-300 ease-out hover:-translate-y-1 select-none ${className}`}
    >
      <div
        ref={containerRef}
        className="relative w-full p-5 sm:p-6 flex items-center gap-3.5"
      >
        {/* SVG Stamp Background with Scalloped Edge */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_2px_7px_rgba(0,0,0,0.06)] group-hover:drop-shadow-[0_6px_14px_rgba(0,0,0,0.1)] transition-all duration-300 overflow-visible"
          width={dimensions.w}
          height={dimensions.h}
          viewBox={`0 0 ${dimensions.w} ${dimensions.h}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Stamp Base */}
          {stampPath && (
            <path
              d={stampPath}
              fill="#FFFFFF"
              stroke="#E4E4E7"
              strokeWidth="1.2"
            />
          )}

          {/* Inner Dashed Postal Line */}
          {dimensions.w > 2 * (pad + 4) && dimensions.h > 2 * (pad + 4) && (
            <rect
              x={pad + 4}
              y={pad + 4}
              width={dimensions.w - 2 * (pad + 4)}
              height={dimensions.h - 2 * (pad + 4)}
              fill="none"
              stroke="#E4E4E7"
              strokeWidth="1"
              strokeDasharray="2.5 2.5"
              rx="2"
            />
          )}
        </svg>

        {/* Inner Content */}
        <div className="relative z-10 flex items-center gap-3.5 w-full">
          {/* Thumbnail framed in mini-stamp style */}
          <div className="w-24 sm:w-28 h-18 sm:h-20 shrink-0 rounded-md overflow-hidden relative bg-[#E0E7FF] border border-zinc-200/80 shadow-2xs">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <p className="text-sm sm:text-base font-semibold text-[#18181B] group-hover:text-[#5569FF] transition-colors leading-snug m-0 [font-family:var(--font-dm-sans)]">
            {text}
          </p>
        </div>
      </div>
    </Link>
  );
}
