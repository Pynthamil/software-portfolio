import Image from "next/image";

interface OrcaCoverProps {
  className?: string;
}

export default function OrcaCover({ className = "" }: OrcaCoverProps) {
  return (
    <div
      className={`w-full h-full relative overflow-hidden bg-gradient-to-b from-[#095F76] to-[#74B1C3] select-none flex items-center justify-center ${className}`}
    >
      <Image
        src="/orca_ai/orca_ai.svg"
        alt="orca.ai"
        width={1600}
        height={1600}
        className="w-full h-full object-cover block rounded-2xl transition-transform duration-300 group-hover:scale-[1.02]"
        priority
        unoptimized
      />
    </div>
  );
}
