import { Hero } from "@/components/contact/Hero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ClosingBand } from "@/components/contact/ClosingBand";

export const metadata = {
  title: "Contact & Connect — ISHAN",
  description: "Connect with ISHAN. We welcome inquiries from wellness practitioners, institutional partners, investors, media, and seekers.",
};

export default function ContactPage() {
  return (
    <div className="-mt-24">
      <Hero />
      
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 lg:gap-8">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>

      <ClosingBand />
    </div>
  );
}
