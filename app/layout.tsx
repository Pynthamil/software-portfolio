import type { Metadata } from "next";
import { Geist, JetBrains_Mono, DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://software-portfolio-ecru.vercel.app"),
  title: {
    default: "Pynthamil Pavendan",
    template: "%s | Pynthamil Pavendan",
  },
  description: "Software Developer & Designer Portfolio",
  icons: {
    icon: "/SmileyFace.svg",
    shortcut: "/SmileyFace.svg",
    apple: "/SmileyFace.svg",
  },
  openGraph: {
    title: "Pynthamil Pavendan",
    description: "Software Developer & Designer Portfolio",
    url: "https://software-portfolio-ecru.vercel.app",
    siteName: "Pynthamil Pavendan Portfolio",
    images: [
      {
        url: "/SmileyFace.svg",
        width: 705,
        height: 705,
        alt: "Pynthamil Pavendan Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Pynthamil Pavendan",
    description: "Software Developer & Designer Portfolio",
    images: ["/SmileyFace.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${jetbrainsMono.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F7F6F4] font-sans text-zinc-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
