"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex justify-center fixed top-0 z-50 px-4 pt-6">
      <header className="w-full max-w-2xl flex flex-col px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-sm transition-all duration-300">
        <div className="flex justify-between items-center w-full">
          <Link href="/" className="flex items-center gap-3 font-bold text-zinc-900 dark:text-zinc-50 text-2xl">
            <img src="/SmileyFace.svg" alt="Smiley Face Logo" className="w-8 h-8 rounded-lg" />
            pyndulogs()
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 text-lg text-zinc-600 dark:text-zinc-400">
            <Link href="#blog" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">blog</Link>
            <Link href="#projects" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">projects</Link>
            <Link href="#about" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">about</Link>
            <Link href="#contact" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">contact</Link>
            <a href="https://github.com/pynthamil" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors ml-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>

          {/* Mobile Menu Button & Icons */}
          <div className="flex md:hidden items-center gap-4 text-zinc-600 dark:text-zinc-400">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isOpen && (
          <div className="md:hidden flex flex-col mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800 gap-4 text-lg text-zinc-600 dark:text-zinc-400 pb-2">
            <Link href="#blog" onClick={() => setIsOpen(false)} className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors px-2 py-1">blog</Link>
            <Link href="#projects" onClick={() => setIsOpen(false)} className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors px-2 py-1">projects</Link>
            <Link href="#about" onClick={() => setIsOpen(false)} className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors px-2 py-1">about</Link>
            <Link href="#contact" onClick={() => setIsOpen(false)} className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors px-2 py-1">contact</Link>
            <div className="px-2 pt-2 flex items-center gap-4">
              <a href="https://github.com/pynthamil" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <span className="text-xs">GitHub</span>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
