"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import AboutBlogHeader from "@/components/AboutBlogHeader";
import CurrentlyLearningHeader from "@/components/CurrentlyLearningHeader";
import WhoAmIHeader from "@/components/WhoAmIHeader";
import ContactHeader from "@/components/ContactHeader";
import FunFactsHeader from "@/components/FunFactsHeader";
import OutsideScreensHeader from "@/components/OutsideScreensHeader";
import HiThisIsPynthamil from "@/components/HiThisIsPynthamil";
import SelectedWorksHeader from "@/components/SelectedWorksHeader";
import ExperienceHeader from "@/components/ExperienceHeader";
import EducationHeader from "@/components/EducationHeader";
import FeaturedWritingHeader from "@/components/FeaturedWritingHeader";
import PhotoDumpHeader from "@/components/PhotoDumpHeader";
import ResumeBanner from "@/components/ResumeBanner";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  // Sync page with hash in URL if direct link / navigation happens
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.slice(1);
      if (hash === "blog") {
        setCurrentPage(2);
      } else if (["about", "experience", "education", "projects", "contact"].includes(hash)) {
        setCurrentPage(1);
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= 2) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col w-full relative">
      {/* Resume Banner (Right Side) */}
      <aside className="hidden xl:block fixed right-6 2xl:right-10 top-32 z-30 w-72 2xl:w-84 select-none">
        <a
          href="https://drive.google.com/file/d/1UG_8apujjGO0uE6IiS-yg7QQfLVzhcl5/view"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white dark:bg-zinc-850 rounded-lg p-3 shadow-sm border border-zinc-200/70 dark:border-zinc-700/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
        >
          <div className="rounded-md overflow-hidden">
            <ResumeBanner className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
          </div>
        </a>
      </aside>

      {/* Content wrapper */}
      <div className="flex flex-col items-center px-12 pt-16 md:pt-24 lg:pt-32 pb-8 md:pb-16 lg:pb-20 gap-12 w-full min-h-[85vh]">
        {/* Text content wrapper - standard width (max-w-3xl) */}
        <div className="max-w-3xl w-full text-left flex flex-col gap-12 text-2xl">
          {currentPage === 1 ? (
            /* ============================================================ */
            /* PAGE 1: PRIMARY / IMPORTANT DETAILS                           */
            /* ============================================================ */
            <>
              {/* Intro */}
              <div className="max-w-xl pl-6 sm:pl-10">
                <HiThisIsPynthamil className="w-full max-w-[390px] h-auto text-[#6082FF]" />
                <p className="mt-4 text-zinc-700 dark:text-zinc-300">
                  I am a curious being who loves bringing the crazy ideas existing in my mind into reality through the sheer power of code.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href="https://github.com/Pynthamil"
                    className="text-blue-600 hover:underline dark:text-blue-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    /GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pynthamil-pavendan-55795228a/"
                    className="text-blue-600 hover:underline dark:text-blue-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    /LinkedIn
                  </a>
                  <a
                    href="https://leetcode.com/u/HashKnight/"
                    className="text-blue-600 hover:underline dark:text-blue-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    /LeetCode
                  </a>
                  <a
                    href="https://twitter.com/pynthamil"
                    className="text-blue-600 hover:underline dark:text-blue-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    /Twitter
                  </a>
                  <Link
                    href="/blog"
                    className="text-blue-600 hover:underline dark:text-blue-400"
                  >
                    /blog
                  </Link>
                </div>
              </div>

              {/* Section: Who am I */}
              <details id="about" className="scroll-mt-28 group">
                <summary className="list-none outline-none [&::-webkit-details-marker]:hidden cursor-pointer select-none block">
                  <WhoAmIHeader className="w-full h-auto block" />
                </summary>
                <div className="pt-6 pb-4 px-4 md:px-8">
                  <ul style={{ listStyleType: '"+ "' }} className="ml-5 space-y-2 text-zinc-700 dark:text-zinc-300">
                    <li>My name is Pynthamil Pavendan!</li>
                    <li>I'm a student developer who enjoys turning ideas into things people can actually use</li>
                    <li>I like building interfaces that feel simple, fast, and intentional</li>
                    <li>I spend most of my time working with modern web technologies, experimenting with interaction design, and refining the small details that make products feel polished</li>
                    <li>I'm especially interested in how design and engineering come together to create experiences that feel effortless</li>
                    <li>Currently focused on building projects that are useful, visually clean, and quietly memorable</li>
                  </ul>
                </div>
              </details>

              {/* Section: Experience */}
              <details id="experience" className="scroll-mt-28 group">
                <summary className="list-none outline-none [&::-webkit-details-marker]:hidden cursor-pointer select-none block">
                  <ExperienceHeader className="w-full h-auto block" />
                </summary>
                <div className="pt-6 pb-4 px-4 md:px-8">
                  <div className="flex flex-col gap-6">
                    {/* Experience Item 1 */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-lg shrink-0 overflow-hidden relative">
                          <Image src="/otherassets/node.png" alt="Node Logo" fill className="object-cover" />
                        </div>
                        <div>
                          <h3 className="font-bold text-xl text-zinc-900 dark:text-zinc-50">Founder</h3>
                          <p className="text-zinc-600 dark:text-zinc-400">Node &middot; Full-time</p>
                        </div>
                      </div>
                      <div className="text-zinc-500 dark:text-zinc-400 sm:text-right">
                        Aug 2026 &mdash; Present &middot; 1 mo
                      </div>
                    </div>

                    {/* Experience Item 2 */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-lg shrink-0 overflow-hidden relative">
                          <Image src="/otherassets/scientiflow.png" alt="Scientiflow Logo" fill className="object-cover" />
                        </div>
                        <div>
                          <h3 className="font-bold text-xl text-zinc-900 dark:text-zinc-50">Frontend Developer</h3>
                          <p className="text-zinc-600 dark:text-zinc-400">Scientiflow &middot; Internship</p>
                        </div>
                      </div>
                      <div className="text-zinc-500 dark:text-zinc-400 sm:text-right">
                        May 2025 &mdash; Jul 2025 &middot; 3 mos
                      </div>
                    </div>
                  </div>
                </div>
              </details>

              {/* Section: Education */}
              <details id="education" className="scroll-mt-28 group">
                <summary className="list-none outline-none [&::-webkit-details-marker]:hidden cursor-pointer select-none block">
                  <EducationHeader className="w-full h-auto block" />
                </summary>
                <div className="pt-6 pb-4 px-4 md:px-8">
                  <div className="flex flex-col gap-6">
                    {/* Education Item */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-lg shrink-0 overflow-hidden relative bg-white">
                          <Image src="/otherassets/vellore_institute_of_technology_logo.jpeg" alt="VIT Logo" fill className="object-cover" />
                        </div>
                        <div>
                          <h3 className="font-bold text-xl text-zinc-900 dark:text-zinc-50">Vellore Institute of Technology</h3>
                          <p className="text-zinc-600 dark:text-zinc-400">Bachelor of Technology in Computer Science</p>
                        </div>
                      </div>
                      <div className="text-zinc-500 dark:text-zinc-400 sm:text-right whitespace-nowrap shrink-0">
                        2023 — 2027
                      </div>
                    </div>
                  </div>
                </div>
              </details>

              {/* Section: Selected Works */}
              <details id="projects" className="scroll-mt-28 group">
                <summary className="list-none outline-none [&::-webkit-details-marker]:hidden cursor-pointer select-none block">
                  <SelectedWorksHeader className="w-full h-auto block" />
                </summary>
                <div className="pt-6 pb-4 px-4 md:px-8">
                  <ul style={{ listStyleType: '"+ "' }} className="ml-5 space-y-3 text-zinc-700 dark:text-zinc-300">
                    <li>
                      <strong>Node</strong> — An app to find your next team of avengers to conquer a hackathon.
                      <a href="#" className="ml-2 text-blue-600 hover:underline dark:text-blue-400 text-lg">View →</a>
                    </li>
                    <li>
                      <strong>Semantic Email Life-Management System</strong> — A smart system that turns your chaotic inbox into a lightweight second brain by extracting tasks, deadlines, and context.
                      <a href="#" className="ml-2 text-blue-600 hover:underline dark:text-blue-400 text-lg">View →</a>
                    </li>
                    <li>
                      <strong>Project Gamma</strong> — A tool that solves a very specific problem I had at 2:17 am.
                      <a href="#" className="ml-2 text-blue-600 hover:underline dark:text-blue-400 text-lg">View →</a>
                    </li>
                  </ul>
                </div>
              </details>

              {/* Section: Contact */}
              <details id="contact" className="scroll-mt-28 group">
                <summary className="list-none outline-none [&::-webkit-details-marker]:hidden cursor-pointer select-none block">
                  <ContactHeader className="w-full h-auto block" />
                </summary>
                <div className="pt-6 pb-4 px-4 md:px-8">
                  <div className="rounded-lg overflow-hidden bg-[#2D2D2D] border border-zinc-700/50 shadow-xl font-mono text-sm md:text-base">
                    <div className="bg-[#3A3A3A] px-4 py-2 flex items-center">
                      <p className="text-zinc-300 m-0">&gt; /contact</p>
                    </div>
                    <div className="p-4 md:p-6 text-zinc-300">
                      <ul className="list-disc ml-5 space-y-3">
                        <li>
                          You can reach me at:
                          <ul className="list-none ml-0 sm:ml-2 mt-3 space-y-2">
                            <li><span className="text-[#8FBCBB]">Email:</span> <a href="mailto:pavendanpynthamil@gmail.com" className="text-[#D08770] hover:underline transition-colors">pavendanpynthamil@gmail.com</a></li>
                            <li><span className="text-[#8FBCBB]">GitHub:</span> <a href="https://github.com/Pynthamil" target="_blank" rel="noopener noreferrer" className="text-[#D08770] hover:underline transition-colors">Pynthamil</a></li>
                            <li><span className="text-[#8FBCBB]">LinkedIn:</span> <a href="https://www.linkedin.com/in/pynthamil-pavendan-55795228a/" target="_blank" rel="noopener noreferrer" className="text-[#D08770] hover:underline transition-colors">pynthamil-pavendan</a></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </details>
            </>
          ) : (
            /* ============================================================ */
            /* PAGE 2: SECONDARY / CASUAL & EXPLORATORY DETAILS             */
            /* ============================================================ */
            <>
              {/* Section: About my blog */}
              <details className="scroll-mt-28 group">
                <summary className="list-none outline-none [&::-webkit-details-marker]:hidden cursor-pointer select-none block">
                  <AboutBlogHeader className="w-full h-auto block" />
                </summary>
                <div className="pt-6 pb-4 px-4 md:px-8">
                  <ul style={{ listStyleType: '"+ "' }} className="ml-5 space-y-2 text-zinc-700 dark:text-zinc-300">
                    <li>I write about things I'm learning, things I'm building, and things I randomly become obsessed with at 2:17 am</li>
                    <li>sometimes it's about tech, sometimes design, sometimes a thought that refuses to leave me alone until I write it down</li>
                    <li>it's less "expert advice" and more "let me see if this idea makes sense outside my head"</li>
                    <li>mostly curiosity. occasionally clarity. always slightly unhinged but in a productive way</li>
                  </ul>
                </div>
              </details>

              {/* Section: Featured Writing */}
              <details id="blog" className="scroll-mt-28 group">
                <summary className="list-none outline-none [&::-webkit-details-marker]:hidden cursor-pointer select-none block">
                  <FeaturedWritingHeader className="w-full h-auto block" />
                </summary>
                <div className="pt-6 pb-4 px-4 md:px-8 flex flex-col gap-6">
                  <div className="flex flex-col gap-6">
                    {/* Post 1 */}
                    <Link href="/blog/so-here-i-am" className="group flex flex-col sm:flex-row gap-6 sm:items-center bg-white dark:bg-zinc-850 rounded-2xl p-5 sm:p-6 shadow-sm border border-zinc-200/70 dark:border-zinc-700/50 hover:shadow-md transition-all">
                      <div className="w-full sm:w-72 shrink-0">
                        <Image src="/post_covers/post1.svg" alt="So...Here I Am on the Internet" width={400} height={300} className="w-full aspect-video object-cover rounded-xl group-hover:opacity-90 transition-opacity" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h3 className="font-bold text-2xl md:text-3xl text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          So...Here I Am on the Internet
                        </h3>
                        <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 mt-1 line-clamp-2">
                          a little about me, what I enjoy, and why I started this blog
                        </p>
                        <p className="text-base md:text-lg font-medium text-blue-600 dark:text-blue-400 mt-2">Read post →</p>
                      </div>
                    </Link>
                    
                    {/* Post 2 */}
                    <Link href="/blog/readme-aesthetic" className="group flex flex-col sm:flex-row gap-6 sm:items-center bg-white dark:bg-zinc-850 rounded-2xl p-5 sm:p-6 shadow-sm border border-zinc-200/70 dark:border-zinc-700/50 hover:shadow-md transition-all">
                      <div className="w-full sm:w-72 shrink-0">
                        <Image src="/post_covers/post2.svg" alt="readme, but make it aesthetic ✨" width={400} height={300} className="w-full aspect-video object-cover rounded-xl group-hover:opacity-90 transition-opacity" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h3 className="font-bold text-2xl md:text-3xl text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          readme, but make it aesthetic ✨
                        </h3>
                        <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 mt-1 line-clamp-2">
                          not everything has to be loud to be meaningful.
                        </p>
                        <p className="text-base md:text-lg font-medium text-blue-600 dark:text-blue-400 mt-2">Read post →</p>
                      </div>
                    </Link>

                    {/* Post 3 */}
                    <Link href="/blog/git-commit-go" className="group flex flex-col sm:flex-row gap-6 sm:items-center bg-white dark:bg-zinc-850 rounded-2xl p-5 sm:p-6 shadow-sm border border-zinc-200/70 dark:border-zinc-700/50 hover:shadow-md transition-all">
                      <div className="w-full sm:w-72 shrink-0">
                        <Image src="/post_covers/post5.svg" alt="Git Commit Go" width={400} height={300} className="w-full aspect-video object-cover rounded-xl group-hover:opacity-90 transition-opacity" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h3 className="font-bold text-2xl md:text-3xl text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          Git Commit Go
                        </h3>
                        <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 mt-1 line-clamp-2">
                          A quick guide on how to interact with GitHub programmatically using their REST API.
                        </p>
                        <p className="text-base md:text-lg font-medium text-blue-600 dark:text-blue-400 mt-2">Read post →</p>
                      </div>
                    </Link>
                  </div>
                  {/* View all at bottom center */}
                  <div className="flex justify-center pt-2">
                    <Link href="/blog" className="text-xl md:text-2xl font-normal text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5">
                      View all <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </details>

              {/* Section: Fun facts */}
              <details className="scroll-mt-28 group">
                <summary className="list-none outline-none [&::-webkit-details-marker]:hidden cursor-pointer select-none block">
                  <FunFactsHeader className="w-full h-auto block" />
                </summary>
                <div className="pt-6 pb-4 px-4 md:px-8">
                  <ul style={{ listStyleType: '"+ "' }} className="ml-5 space-y-2 text-zinc-700 dark:text-zinc-300">
                    <li>music taste: a bit of everything → if it sounds good, I'm listening</li>
                    <li>I love singing and dancing like nobody's watching (because usually nobody is)</li>
                    <li>introvert… who also loves to yap when the topic is interesting</li>
                    <li>personality type: INTJ</li>
                    <li>I enjoy challenging myself just for the plot</li>
                    <li>I love chess</li>
                    <li>most of my illustrations are inspired by Headspace</li>
                    <li>currently in my final year of college — slightly terrifying & slightly exciting</li>
                  </ul>
                </div>
              </details>

              {/* Section: Outside of screens */}
              <details className="scroll-mt-28 group">
                <summary className="list-none outline-none [&::-webkit-details-marker]:hidden cursor-pointer select-none block">
                  <OutsideScreensHeader className="w-full h-auto block" />
                </summary>
                <div className="pt-6 pb-4 px-4 md:px-8">
                  <ul style={{ listStyleType: '"+ "' }} className="ml-5 space-y-2 text-zinc-700 dark:text-zinc-300">
                    <li>I love reading books, watching movies, writing, and drawing</li>
                    <li>I'm very curious so I love to constantly explore new things</li>
                    <li>I don't believe the saying "curiosity kills the cat" — haha</li>
                  </ul>
                </div>
              </details>

              {/* Section: Currently learning */}
              <details className="scroll-mt-28 group">
                <summary className="list-none outline-none [&::-webkit-details-marker]:hidden cursor-pointer select-none block">
                  <CurrentlyLearningHeader className="w-full h-auto block" />
                </summary>
                <div className="pt-6 pb-4 px-4 md:px-8">
                  <ul style={{ listStyleType: '"+ "' }} className="ml-5 space-y-2 text-zinc-700 dark:text-zinc-300">
                    <li>currently learning how to make things feel simple without making them boring</li>
                    <li>exploring better ways to structure code, design cleaner interfaces, and build products that feel intentional from the first click</li>
                    <li>trying to understand why some digital experiences feel effortless while others feel confusing, even when they do the same thing</li>
                    <li>also learning to be okay with not knowing everything yet and building anyway</li>
                  </ul>
                </div>
              </details>

              {/* Section: Proof I go outside (Photo Dump) */}
              <details className="scroll-mt-28 group">
                <summary className="list-none outline-none [&::-webkit-details-marker]:hidden cursor-pointer select-none block">
                  <PhotoDumpHeader className="w-full h-auto block" />
                </summary>
                <div className="pt-6 pb-4 px-4 md:px-8">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {[
                      "/otherassets/photo-dump/48311c09-95f1-4ba9-b4e8-eabcbfd0313f.JPG",
                      "/otherassets/photo-dump/IMG-20250615-WA0139.jpg",
                      "/otherassets/photo-dump/IMG-20250629-WA0240.jpg",
                      "/otherassets/photo-dump/20250622_124021.jpg",
                      "/otherassets/photo-dump/IMG-20250629-WA0260.jpg",
                      "/otherassets/photo-dump/IMG-20250629-WA0302.jpg",
                      "/otherassets/photo-dump/IMG_2939.jpeg",
                      "/otherassets/photo-dump/IMG_4564.JPG",
                      "/otherassets/photo-dump/IMG_7248.JPG",
                    ].map((src, idx) => (
                      <div
                        key={idx}
                        className="relative aspect-square rounded-2xl overflow-hidden shadow-sm border border-zinc-200/60 dark:border-zinc-700/60 bg-zinc-100 dark:bg-zinc-800 group/photo hover:scale-[1.02] transition-transform duration-300"
                      >
                        <Image
                          src={src}
                          alt={`Photo Dump ${idx + 1}`}
                          fill
                          className="object-cover group-hover/photo:scale-105 transition-transform duration-300"
                          sizes="(max-width: 640px) 50vw, 33vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </details>
            </>
          )}

          {/* Page Marker (1 | 2) */}
          <div className="flex justify-center items-center gap-4 mt-6 mb-2 select-none">
            <button
              type="button"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous page"
              className={`text-lg px-2 py-1 transition-colors ${
                currentPage === 1
                  ? "text-zinc-300 dark:text-zinc-700 cursor-not-allowed"
                  : "text-zinc-400 hover:text-[#5569FF] dark:hover:text-[#8191FF] cursor-pointer"
              }`}
            >
              &lsaquo;
            </button>

            {[1, 2].map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => handlePageChange(page)}
                className={`flex items-center justify-center w-9 h-9 rounded-full text-sm font-bold transition-all cursor-pointer ${
                  currentPage === page
                    ? "bg-[#5569FF] text-white shadow-xs"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-[#5569FF] dark:hover:text-[#8191FF] hover:bg-[#EEF2FF] dark:hover:bg-zinc-800"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              type="button"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === 2}
              aria-label="Next page"
              className={`text-lg px-2 py-1 transition-colors ${
                currentPage === 2
                  ? "text-zinc-300 dark:text-zinc-700 cursor-not-allowed"
                  : "text-zinc-400 hover:text-[#5569FF] dark:hover:text-[#8191FF] cursor-pointer"
              }`}
            >
              &rsaquo;
            </button>
          </div>
        </div>
      </div>

      {/* Curved Footer */}
      <Footer />
    </div>
  );
}
