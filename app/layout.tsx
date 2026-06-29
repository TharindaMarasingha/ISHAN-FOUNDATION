import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { ParallaxGeometry } from "@/components/ui/ParallaxGeometry";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "ISHAN - International Society of Humanity and Nature",
  description: "A spiritual wellness and conscious-living organisation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className={`${inter.className} min-h-full flex flex-col bg-peach text-deepAmber`}>
        <ScrollProgress />
        <CursorGlow />
        <ParallaxGeometry />
        
        <Navbar />
        {/* Added pt-24 (6rem) or pt-28 to clear the fixed navbar on inner pages. 
            On the homepage, the transparent nav overlaps the hero, so the hero itself 
            will need a negative margin or the page will handle it. */}
        <main className="flex-grow flex flex-col pt-24 relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
