import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Projects | Pynthamil Pavendan",
  description: "Things I've designed, built, and shipped.",
};

interface ProjectItem {
  title: string;
  tagline: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  status: string;
  bgClass: string;
}

const projects: ProjectItem[] = [
  {
    title: "Semantic Email Life-Management System",
    tagline: "Inbox to Second Brain",
    description: "A smart system that turns your chaotic inbox into a lightweight second brain by extracting tasks, deadlines, and context automatically.",
    image: "/project-assets/semantic/cover2.svg",
    link: "/projects/semantic-email",
    tags: ["Python", "FastAPI", "NLP", "Notion API"],
    status: "Prototype",
    bgClass: "bg-[#FFDFE0]",
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col flex-1 items-center bg-[#F7F6F4] [font-family:var(--font-dm-sans)] px-4 pt-24 pb-16 w-full min-h-screen">
      <div className="max-w-3xl w-full flex flex-col gap-6">
        
        {/* Header */}
        <div className="flex flex-col gap-2 pt-4 pb-2 text-left">
          <Link href="/" className="text-zinc-500 hover:text-[#5569FF] transition-colors inline-flex items-center gap-2 mb-2 w-fit text-sm">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            Back to home
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#18181B] [font-family:var(--font-dm-sans)]">
            Selected Projects
          </h1>
          <p className="text-base sm:text-lg text-[#71717A] [font-family:var(--font-dm-sans)]">
            Things I&apos;ve designed, built, and shipped.
          </p>
        </div>

        {/* Project Cards List */}
        <div className="flex flex-col gap-5">
          {projects.map((project) => (
            <div
              key={project.link}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-sm w-full"
            >
              <Link
                href={project.link}
                className={`w-full sm:w-[250px] md:w-[270px] shrink-0 aspect-[16/10] relative rounded-xl overflow-hidden ${project.bgClass} flex items-center justify-center p-2 block`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-1"
                />
              </Link>

              <div className="flex flex-col justify-between flex-1 py-0.5 text-left w-full h-full">
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-[11px] font-semibold bg-[#E5D4FF] text-zinc-900 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link href={project.link} className="block w-fit">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#18181B] hover:text-[#5569FF] transition-colors leading-tight [font-family:var(--font-dm-sans)]">
                      {project.title}
                    </h2>
                  </Link>

                  <p className="text-[#71717A] text-sm mt-1.5 leading-relaxed [font-family:var(--font-dm-sans)]">
                    {project.description}
                  </p>
                </div>

                <Link
                  href={project.link}
                  className="text-[#5569FF] hover:text-[#3730A3] text-sm font-medium mt-4 inline-flex items-center gap-1 transition-colors w-fit [font-family:var(--font-dm-sans)]"
                >
                  View project &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
