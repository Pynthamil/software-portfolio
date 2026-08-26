import Image from "next/image";

interface CodedexCoverProps {
  className?: string;
}

export default function CodedexCover({ className = "" }: CodedexCoverProps) {
  return (
    <div
      className={`w-full h-full relative overflow-hidden bg-[#F7FFE0] select-none flex items-end justify-center ${className}`}
    >
      {/* Top Gamify Badge (scaled larger) */}
      <div className="absolute top-[7%] sm:top-[8%] left-1/2 -translate-x-1/2 w-[54%] sm:w-[56%] max-w-[560px] z-10 pointer-events-none">
        <Image
          src="/project-assets/codedex/gamify.svg"
          alt="Gamify your Coding Journey"
          width={764}
          height={208}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* Left Smile Characters (attached to extreme left) */}
      <div className="absolute left-0 bottom-[10%] sm:bottom-[12%] w-[20%] sm:w-[22%] max-w-[220px] z-0 pointer-events-none">
        <Image
          src="/project-assets/codedex/smile-left.svg"
          alt="Mascots Left"
          width={483}
          height={545}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* Right Smile Characters (attached to extreme right, positioned higher up) */}
      <div className="absolute right-0 top-[24%] sm:top-[26%] w-[20%] sm:w-[22%] max-w-[220px] z-0 pointer-events-none">
        <Image
          src="/project-assets/codedex/smile-right.svg"
          alt="Mascots Right"
          width={483}
          height={567}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* iPhone 14 placed lower down at the bottom */}
      <div className="relative z-20 w-[47%] sm:w-[49%] max-w-[490px] flex items-end translate-y-[16%] sm:translate-y-[20%] pointer-events-none">
        <Image
          src="/project-assets/codedex/Iphone 14.svg"
          alt="Codédex Mobile App"
          width={561}
          height={974}
          className="w-full h-auto object-contain block align-bottom"
          priority
        />
      </div>
    </div>
  );
}
