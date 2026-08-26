"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export interface NavItem {
  id: string;
  label: string;
}

interface ProjectSidebarProps {
  items: NavItem[];
  backHref?: string;
  backLabel?: string;
}

export default function ProjectSidebar({
  items,
  backHref = "/projects",
  backLabel = "PROJECTS",
}: ProjectSidebarProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = items.length - 1; i >= 0; i--) {
        const item = items[i];
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= top) {
            setActiveId(item.id);
            return;
          }
        }
      }
      if (items.length > 0) {
        setActiveId(items[0].id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [items]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Fixed Left Sidebar */}
      <aside className="hidden lg:flex fixed left-6 xl:left-12 2xl:left-20 top-28 xl:top-32 z-30 flex-col gap-6 select-none font-mono text-left">
        {/* Back to Projects Button */}
        <Link
          href={backHref}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#E8E8E8] hover:bg-[#DCDCDC] text-xs font-bold text-zinc-700 tracking-wider transition-colors w-fit shadow-2xs"
        >
          <span className="text-sm leading-none">&larr;</span>
          <span>{backLabel}</span>
        </Link>

        {/* Navigation Items List */}
        <nav className="flex flex-col gap-5 pt-2">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`text-sm tracking-wider font-bold uppercase transition-all duration-200 block text-left ${
                  isActive
                    ? "text-zinc-900 translate-x-0.5"
                    : "text-[#8E8E93] hover:text-zinc-800"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </aside>

      {/* Mobile / Tablet Horizontal Navigation Bar */}
      <div className="lg:hidden w-full max-w-2xl px-4 mb-4 flex items-center justify-between font-mono">
        <Link
          href={backHref}
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#E8E8E8] text-xs font-bold text-zinc-700 tracking-wider"
        >
          <span>&larr;</span>
          <span>{backLabel}</span>
        </Link>
        <nav className="flex items-center gap-4 text-xs font-bold tracking-wider">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`uppercase transition-colors ${
                  isActive ? "text-zinc-900 border-b border-zinc-900" : "text-[#8E8E93]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </>
  );
}
