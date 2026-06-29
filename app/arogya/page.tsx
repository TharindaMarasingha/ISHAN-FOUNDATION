import { PageHero } from "@/components/arogya/PageHero";
import { Offerings } from "@/components/arogya/Offerings";
import { Approach } from "@/components/arogya/Approach";
import { Impact } from "@/components/arogya/Impact";
import { ArogyaCTA } from "@/components/arogya/ArogyaCTA";
import { GoldDivider } from "@/components/ui/GoldDivider";

export const metadata = {
  title: "Arogya Ashram — ISHAN",
  description: "Arogya Ashram International - Dedicated to holistic wellness education and preventive healthcare.",
};

export default function ArogyaPage() {
  return (
    <>
      <PageHero />
      <Offerings />
      <GoldDivider />
      <Approach />
      <Impact />
      <ArogyaCTA />
    </>
  );
}
