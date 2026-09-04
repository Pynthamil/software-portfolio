"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

type TabKey = "sync" | "ai" | "extract" | "orca";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("sync");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much the hero container is scrolled into the viewport
      const totalDist = windowHeight;
      const currentPos = windowHeight - rect.top;
      const progress = Math.min(Math.max(currentPos / totalDist, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tabs: { key: TabKey; label: string; icon: React.ReactNode }[] = [
    {
      key: "sync",
      label: "Notion Sync",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      key: "ai",
      label: "Semantic Parsing",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
        </svg>
      ),
    },
    {
      key: "extract",
      label: "Task Extraction",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 11 12 14 22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
      ),
    },
    {
      key: "orca",
      label: "Orca.ai",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3" />
          <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3" />
        </svg>
      ),
    },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const currentVideo =
    activeTab === "sync"
      ? "/project-assets/semantic/demo1.mov"
      : activeTab === "ai"
      ? "/project-assets/semantic/demo2.mov"
      : activeTab === "extract"
      ? "/project-assets/semantic/demo3.mov"
      : null;

  // Compute smooth scale and max-width expansion on scroll
  const scaleValue = 0.94 + scrollProgress * 0.06;

  return (
    <section ref={containerRef} className="w-full [font-family:var(--font-dm-sans)] flex justify-center">
      {/* Outer Blue Gradient Container with Scroll-driven Expansion */}
      <div
        style={{
          transform: `scale(${scaleValue})`,
          transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className="w-full max-w-[1380px] bg-gradient-to-br from-[#CCE4FF] via-[#E2EDFF] to-[#BDDCFF] rounded-[32px] sm:rounded-[48px] p-4 sm:p-8 md:p-12 lg:p-16 border border-blue-200/80 shadow-2xl shadow-blue-500/10 relative overflow-hidden flex flex-col items-center will-change-transform"
      >
        {/* Subtle decorative background ambient glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl pointer-events-none" />

        {/* Top Tab Switcher Segmented Control */}
        <div className="relative mb-6 z-10">
          <div className="bg-white/85 backdrop-blur-md p-1.5 rounded-2xl border border-white/80 shadow-md flex items-center gap-1.5 sm:gap-2">
            {tabs.map((t) => {
              const isActive = activeTab === t.key;
              return (
                <button
                  key={t.key}
                  onClick={() => setActiveTab(t.key)}
                  aria-label={t.label}
                  title={t.label}
                  className={`relative p-2.5 sm:p-3 rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#006BFF] text-white shadow-md shadow-blue-500/25 scale-105"
                      : "text-zinc-600 hover:text-zinc-950 hover:bg-white/60"
                  }`}
                >
                  {t.icon}
                </button>
              );
            })}
          </div>
        </div>

        {/* Inner Main White Card */}
        <div className="w-full bg-white rounded-[24px] sm:rounded-[36px] p-6 sm:p-10 md:p-12 lg:p-14 shadow-xl border border-white/90 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          {/* Left Column: Semantic Email Description & Story */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            {/* Category Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF4FF] text-[#006BFF] text-xs sm:text-sm font-semibold w-fit">
              <span className="w-2 h-2 rounded-full bg-[#006BFF] animate-pulse" />
              {activeTab === "sync" && "AI & NLP Copilot · Notion Sync"}
              {activeTab === "ai" && "Semantic Parsing · Context Recognition"}
              {activeTab === "extract" && "Actionable Task Architecture"}
              {activeTab === "orca" && "Marine Research Platform · Orca.ai"}
            </div>

            {/* Headline */}
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 leading-[1.15]">
                {activeTab === "sync" && "Turn inbox noise into meaningful action."}
                {activeTab === "ai" && "Understand emails before you even open them."}
                {activeTab === "extract" && "Never lose an important deadline again."}
                {activeTab === "orca" && "Making ocean research conversational & fast."}
              </h2>

              <p className="text-zinc-600 text-base sm:text-lg leading-relaxed pt-1">
                {activeTab === "sync" &&
                  "Our inboxes store information, but fail to turn it into meaningful action. Semantic Email extracts tasks, deadlines, and key context using semantic parsing, synchronizing them directly into your Notion workspace."}
                {activeTab === "ai" &&
                  "Using LLM-powered context recognition, high-signal requests are parsed from long threads, filtering out noise and calendar notifications automatically."}
                {activeTab === "extract" &&
                  "Automatically detects action items, assigns priority weights, and generates concise one-click summaries."}
                {activeTab === "orca" &&
                  "Orca.ai centralizes fragmented marine science research, telemetry datasets, and conservation reports into an interactive conversational interface."}
              </p>
            </div>

            {/* Metadata Tags */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm font-mono text-zinc-500">
              <span>Next.js 15</span>
              <span>TypeScript</span>
              <span>Notion API</span>
              <span>FastAPI</span>
              <span>Shipped 2026</span>
            </div>

            {/* CTA Link */}
            <div className="pt-2">
              <Link
                href={activeTab === "orca" ? "/projects/orca" : "/projects/semantic-email"}
                className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-zinc-900 hover:text-[#006BFF] transition-colors border-b-2 border-zinc-900 hover:border-[#006BFF] pb-0.5 w-fit group"
              >
                <span>{activeTab === "orca" ? "Explore Orca.ai case study" : "View full case study"}</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Video Mockup / Preview Card */}
          <div className="lg:col-span-6 flex items-center justify-center w-full">
            {currentVideo ? (
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setIsHovered(false)}
                className="w-full max-w-[480px] aspect-square rounded-2xl overflow-hidden relative shadow-lg bg-zinc-100 border border-zinc-200/80 group cursor-none select-none"
              >
                <video
                  ref={videoRef}
                  key={currentVideo}
                  src={currentVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover pointer-events-none"
                />

                {/* Custom White Circle Cursor on Hover */}
                {isHovered && (
                  <div
                    className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-100"
                    style={{
                      left: `${mousePos.x}px`,
                      top: `${mousePos.y}px`,
                    }}
                  >
                    <div className="w-8 h-8 rounded-full border border-white bg-white/80 backdrop-blur-xs shadow-md" />
                  </div>
                )}
              </div>
            ) : (
              /* Orca Preview Card */
              <Link
                href="/projects/orca"
                className="w-full max-w-[480px] aspect-square rounded-2xl overflow-hidden relative shadow-lg bg-gradient-to-b from-[#095F76] to-[#74B1C3] p-6 flex flex-col items-center justify-center group"
              >
                <img
                  src="/orca_ai/logo_and_name.svg"
                  alt="Orca.ai Preview"
                  className="w-3/4 h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
