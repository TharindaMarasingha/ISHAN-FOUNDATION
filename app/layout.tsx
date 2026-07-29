import type { Metadata } from "next";
import { Raleway, Forum, Tenor_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CursorGlow } from "@/components/ui/CursorGlow";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  preload: false,
});

const forum = Forum({
  variable: "--font-forum",
  subsets: ["latin"],
  weight: ["400"],
  preload: false,
});

const tenor = Tenor_Sans({
  variable: "--font-tenor",
  subsets: ["latin"],
  weight: ["400"],
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ishanfoundation.lk'),
  title: {
    default: 'ISHAN — International Society of Humanity and Nature',
    template: '%s | ISHAN Foundation'
  },
  description: 'ISHAN is a global institution dedicated to harmonising humanity and nature through wisdom, wellness, ethical leadership, education, research, sustainability, and conscious community development.',
  keywords: [
    'ISHAN Foundation',
    'International Society of Humanity and Nature',
    'holistic wellness Sri Lanka',
    'spiritual wellness',
    'conscious living',
    'preventive wellness',
    'Arogya Ashram International',
    'Samanvaya retreat',
    'Sri Vrindavan Project',
    'wellness education',
    'conscious community',
    'sustainable living',
    'meditation retreat Sri Lanka',
    'yoga wellness Sri Lanka',
    'spiritual leadership',
    'ethical leadership',
    'wellness organisation',
    'humanity nature harmony'
  ],
  authors: [{ name: 'ISHAN Foundation' }],
  creator: 'ISHAN Foundation',
  publisher: 'ISHAN Foundation',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ishanfoundation.lk',
    siteName: 'ISHAN Foundation',
    title: 'ISHAN — International Society of Humanity and Nature',
    description: 'A global institution dedicated to harmonising humanity and nature through wisdom, wellness, ethical leadership, and conscious community development.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ISHAN Foundation — International Society of Humanity and Nature',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ISHAN — International Society of Humanity and Nature',
    description: 'A global institution dedicated to harmonising humanity and nature through wisdom, wellness, and conscious community development.',
    images: ['/images/og-image.jpg'],
  },
  icons: {
    icon: '/images/ishanlogo.webp',
    shortcut: '/images/ishanlogo.webp',
    apple: '/images/ishanlogo.webp',
  },
  manifest: '/site.webmanifest',
  other: {
    'p:domain_verify': 'bb470c980253505f362f0651e33e1832',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${forum.variable} ${tenor.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ISHAN Foundation",
              "alternateName": "International Society of Humanity and Nature",
              "url": "https://ishanfoundation.lk",
              "logo": "https://ishanfoundation.lk/images/ishanlogo.webp",
              "description": "A global institution dedicated to harmonising humanity and nature through wisdom, wellness, ethical leadership, education, research, sustainability, and conscious community development.",
              "foundingDate": "2026",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "LK",
                "addressRegion": "Sri Lanka"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "General Inquiry",
                "email": "info@ishanfoundation.lk",
                "url": "https://ishanfoundation.lk/contact"
              },
              "sameAs": [
                "https://ishanfoundation.lk"
              ],
              "knowsAbout": [
                "Holistic Wellness",
                "Preventive Health",
                "Yoga and Meditation",
                "Conscious Living",
                "Sustainable Development",
                "Spiritual Education",
                "Environmental Stewardship",
                "Leadership Development"
              ]
            })
          }}
        />
      </head>
      <body className={`${raleway.className} min-h-full flex flex-col text-deepAmber`}>
        <ScrollProgress />
        <CursorGlow />
        
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
