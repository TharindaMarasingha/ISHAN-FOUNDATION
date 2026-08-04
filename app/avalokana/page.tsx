import Image from "next/image";
import { AboutExperience } from "@/components/avalokana/AboutExperience";
import { IncludedElements } from "@/components/avalokana/IncludedElements";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Antahakarana Avalokana',
  description: 'Antahakarana Avalokana — ISHAN\'s signature inner immersion experience for self-discovery, meditation, contemplation, and conscious transformation.',
  alternates: {
    canonical: 'https://ishanfoundation.lk/avalokana',
  },
}

export default function AvalokanaPage() {
  return (
    <div className="-mt-24">
      <section className="relative w-full overflow-hidden" style={{ minHeight: '100vh' }}>
        <div className="absolute inset-0">
          <Image
            src="/images/Avalokana.webp"
            alt="Antahakarana Avalokana"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-[rgba(10,4,2,0.55)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,4,2,0.80)] via-[rgba(10,4,2,0.45)] to-transparent" />
        
        <div className="relative z-10 flex flex-col justify-end pb-16 pl-12 md:pb-20 md:pl-16" style={{ minHeight: '100vh' }}>
          <span className="inline-flex w-fit border border-primary rounded-full px-4 py-1.5 mb-4 text-primary text-xs uppercase tracking-wider">
            THE INNER IMMERSION
          </span>
          
          <h1>
            <span className="text-white block font-display font-normal leading-tight text-4xl md:text-5xl lg:text-6xl max-w-3xl">
              Antahakarana
            </span>
            <span className="text-primary block font-display font-normal leading-tight text-4xl md:text-5xl lg:text-6xl">
              Avalokana
            </span>
          </h1>

          <p className="font-display italic text-white/80 text-xl md:text-2xl leading-relaxed mt-4 mb-3 max-w-2xl">
            ISHAN's Signature Immersive Experience
          </p>

          <p className="font-sans font-light text-white/65 text-sm md:text-base leading-relaxed max-w-xl mt-2">
            A signature immersive experience designed for profound self-discovery, inner reflection, holistic wellbeing, and conscious transformation.
          </p>
        </div>
      </section>
      <AboutExperience />
      <GoldDivider />
      <IncludedElements />

      {/* Note Box Section */}
      <section className="pb-24 px-6 max-w-4xl mx-auto text-center">
        <RevealOnScroll>
          <div className="p-8 bg-softAccent border border-divider rounded-2xl inline-block max-w-3xl shadow-sm">
            <p className="font-sans font-light text-heading leading-relaxed md:text-lg">
              <span className="font-medium text-primary">Note:</span> Antahakarana Avalokana is ISHAN's inner reflection experience. It is distinct from Samanvaya, which is ISHAN's five-elements transformational retreat.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* Closing CTA */}
      <section className="py-32 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
        <SectionHeading
          eyebrow="Take the Next Step"
          heading="Begin Your Journey"
          description="Ready to embark on this journey of self-discovery? Reach out to us or explore our other transformational experiences."
          align="center"
        />
        <RevealOnScroll delay={0.2} className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
          <Button href="/samanvaya" variant="primary">
            Explore Samanvaya
          </Button>
          <Button href="/contact" variant="ghost">
            Register Interest
          </Button>
        </RevealOnScroll>
      </section>
    </div>
  );
}
