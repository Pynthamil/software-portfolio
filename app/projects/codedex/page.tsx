import Image from "next/image";

export const metadata = {
  title: "Designing CodeDex for Accessible, On-the-Go Learning | Projects",
  description: "Designing CodeDex for Accessible, On-the-Go Learning.",
};

export default function CodedexProjectPage() {
  return (
    <div className="flex flex-col flex-1 items-center bg-[#F7F6F4] [font-family:var(--font-dm-sans)] px-6 pt-28 md:pt-32 pb-16 w-full">
      <div className="w-full flex flex-col items-center gap-8">
        <div className="max-w-5xl w-full relative rounded-lg overflow-hidden bg-[#F7FFE0]">
          <Image
            src="/project-assets/codedex/cover3.svg"
            alt="Designing CodeDex for Accessible, On-the-Go Learning Cover"
            width={1994}
            height={1286}
            className="w-full h-auto object-contain block rounded-lg"
            priority
          />
        </div>
        <article className="max-w-2xl w-full text-left flex flex-col gap-10">
          <header className="flex flex-col gap-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#18181B]">
              Designing CodeDex for Accessible, On-the-Go Learning
            </h1>
            <p className="text-lg sm:text-xl text-[#71717A]">
              Case study coming soon.
            </p>
          </header>
        </article>
      </div>
    </div>
  );
}

