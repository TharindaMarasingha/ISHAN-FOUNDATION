import { PageHero } from "@/components/uss/PageHero";
import { AreasOfStudy } from "@/components/uss/AreasOfStudy";
import { Approach } from "@/components/uss/Approach";
import { Initiatives } from "@/components/uss/Initiatives";
import { USSCTA } from "@/components/uss/USSCTA";
import { GoldDivider } from "@/components/ui/GoldDivider";

export const metadata = {
  title: "Universal Spiritual Science — ISHAN",
  description: "USS - Inner Knowledge Institute. Dedicated to consciousness studies, ethics, philosophy, and inner development.",
};

export default function USSPage() {
  return (
    <>
      <PageHero />
      <AreasOfStudy />
      <GoldDivider />
      <Approach />
      <Initiatives />
      <USSCTA />
    </>
  );
}
