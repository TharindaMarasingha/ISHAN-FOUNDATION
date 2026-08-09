import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ClosingBand } from "@/components/contact/ClosingBand";
import Image from "next/image";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Connect With Us',
  description: 'Connect with ISHAN — reach out for programmes, partnerships, research, volunteering, retreats, or to join the movement for humanity and nature.',
  alternates: {
    canonical: 'https://ishanfoundation.lk/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <div className="-mt-24">
        <section className="relative w-full overflow-hidden" style={{ minHeight: '100vh' }}>
          <div className="absolute inset-0">
            <Image
              src="/images/cone.webp"
              alt="Connect with ISHAN"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(10,4,2,0.3)] to-[rgba(10,4,2,0.8)]" />
          
          <div className="relative z-10 flex flex-col justify-end pb-16 pl-12 md:pb-20 md:pl-16" style={{ minHeight: '100vh' }}>

            <h1>
              <span className="text-[#F5F1E9] block font-display font-normal leading-tight text-4xl md:text-5xl lg:text-6xl max-w-4xl [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Connect With
              </span>
              <span className="text-[#F3D8DB] [text-shadow:0_2px_4px_rgba(0,0,0,0.5)] block font-display font-normal leading-tight text-4xl md:text-5xl lg:text-6xl">
                ISHAN
              </span>
            </h1>

            <p className="font-display italic text-white/90 text-xl md:text-2xl leading-relaxed mt-4 mb-3 max-w-2xl [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
              Let's Build the Future Together
            </p>

            <p className="font-sans font-light text-white/80 text-sm md:text-base leading-relaxed max-w-xl mt-2 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
              Every meaningful journey begins with a conversation. Whether you are an individual seeking personal growth, an institution exploring collaboration, a professional looking to contribute, or an organisation committed to creating positive impact, we welcome the opportunity to connect with you.
            </p>
          </div>
        </section>
        
        <div className="w-full bg-white relative z-20">
          <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 lg:gap-8">
              <ContactForm />
              <ContactInfo />
            </div>
          </section>

          <ClosingBand />
        </div>
      </div>
    </>
  );
}
