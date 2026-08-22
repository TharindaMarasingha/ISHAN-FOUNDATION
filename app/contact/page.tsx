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
        <section className="relative w-full min-h-[100svh] flex flex-col justify-end overflow-hidden" style={{ minHeight: '100vh' }}>
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
          
          {/* Mobile Standard Scrim (Adjusted to keep BG visible). Desktop uses original gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent md:bg-gradient-to-b md:from-transparent md:via-[rgba(10,4,2,0.3)] md:to-[rgba(10,4,2,0.8)]" />
          
          <div className="relative z-10 w-full px-6 pb-24 pt-32 md:pb-20 md:pl-16 md:px-12 max-w-[95%] sm:max-w-sm md:max-w-3xl">

            <h1 className="font-display font-normal leading-tight text-white text-4xl sm:text-5xl md:text-6xl mb-4 drop-shadow-lg [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
              <span className="text-[#F8F7F2] block">
                Connect With <br className="md:hidden" />
              </span>
              <span className="text-[#F3D8DB] block">
                ISHAN
              </span>
            </h1>

            <p className="font-display italic text-[#F8F7F2]/90 text-base md:text-xl md:text-2xl leading-relaxed mb-6 max-w-2xl drop-shadow [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
              Let's Build the Future Together
            </p>

            <div className="w-12 h-px bg-[#F8F7F2]/40 mb-6"></div>

            <p className="font-sans font-light text-[#F8F7F2]/70 text-sm md:text-base leading-relaxed max-w-xl drop-shadow-sm pr-2 md:pr-0 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
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
