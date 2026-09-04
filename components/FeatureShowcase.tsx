"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function FeatureShowcase() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs = [
    {
      id: "green-smiley",
      name: "Orca Marine Platform",
      themeGradient: "from-[#E3F2E6] via-[#D2ECDA] to-[#AEE0C2]",
      activeRing: "ring-2 ring-[#92A11F]/60",
      activeBg: "bg-[#D8E192]",
      imageSrc: "/otherassets/semantic_hero.svg",
      linkUrl: "/projects/orca",
      altText: "Orca Hero",
      smileyIcon: "/otherassets/green_smiley.svg",
    },
    {
      id: "pink-smiley",
      name: "Semantic Email Copilot",
      themeGradient: "from-[#FFE7F3] via-[#FED6EA] to-[#FCAFD7]",
      activeRing: "ring-2 ring-[#B30759]/60",
      activeBg: "bg-[#FFAEDB]",
      imageSrc: "/otherassets/semantic_hero.svg",
      linkUrl: "/projects/semantic-email",
      altText: "Semantic Email Hero",
      smileyIcon: "/otherassets/pink_smiley.svg",
    },
  ];

  const currentTab = tabs[activeTab];

  return (
    <div className="w-full max-w-[1240px] mx-auto select-none [font-family:var(--font-dm-sans)]">
      {/* Outer Card with Soft Gradient Background */}
      <div
        className={`w-full bg-gradient-to-br ${currentTab.themeGradient} transition-all duration-700 rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 md:p-10 lg:p-12 relative overflow-hidden flex flex-col items-center shadow-none`}
      >
        {/* Top Floating Tab Selector Pill with generous spacing */}
        <div className="relative z-20 mb-6 sm:mb-8 md:mb-10">
          <div className="bg-white/95 backdrop-blur-md p-1.5 sm:p-2 rounded-full flex items-center gap-3 border border-white/80 shadow-none">
            {/* Tab 0: Green Smiley */}
            <button
              onClick={() => setActiveTab(0)}
              aria-label="Green Smiley Tab"
              className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center p-2.5 transition-all duration-300 cursor-pointer shadow-none ${
                activeTab === 0
                  ? "bg-[#D8E192] scale-110 ring-2 ring-[#92A11F]/60"
                  : "hover:bg-zinc-100 opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src="/otherassets/green_smiley.svg"
                alt="Green Smiley"
                width={36}
                height={36}
                className="w-full h-full object-contain"
              />
            </button>

            {/* Tab 1: Pink Smiley */}
            <button
              onClick={() => setActiveTab(1)}
              aria-label="Pink Smiley Tab"
              className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center p-2.5 transition-all duration-300 cursor-pointer shadow-none ${
                activeTab === 1
                  ? "bg-[#FFAEDB] scale-110 ring-2 ring-[#B30759]/60"
                  : "hover:bg-zinc-100 opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src="/otherassets/pink_smiley.svg"
                alt="Pink Smiley"
                width={36}
                height={36}
                className="w-full h-full object-contain"
              />
            </button>
          </div>
        </div>

        {/* Semantic Hero SVG replacing the previous white container */}
        <div className="w-full rounded-[20px] sm:rounded-[26px] overflow-hidden bg-white z-10 transition-all duration-500 shadow-none">
          <Link
            href={currentTab.linkUrl}
            className="block w-full group cursor-pointer"
          >
            <Image
              src={currentTab.imageSrc}
              alt={currentTab.altText}
              width={2201}
              height={1094}
              className="w-full h-auto object-contain block rounded-[20px] sm:rounded-[26px] transition-transform duration-300 group-hover:scale-[1.008]"
              priority
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
