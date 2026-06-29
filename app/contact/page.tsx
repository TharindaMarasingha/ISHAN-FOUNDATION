import { PageHero } from "@/components/contact/PageHero";
import { ContactLayout } from "@/components/contact/ContactLayout";
import { ClosingBand } from "@/components/contact/ClosingBand";

export const metadata = {
  title: "Contact — ISHAN",
  description: "Get in touch with ISHAN. Join our global network of seekers, healers, and builders.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero />
      <ContactLayout />
      <ClosingBand />
    </>
  );
}
