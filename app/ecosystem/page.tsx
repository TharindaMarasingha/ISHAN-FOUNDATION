import { PageHero } from "@/components/ecosystem/PageHero";
import { EcosystemSections } from "@/components/ecosystem/EcosystemSections";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Ecosystem',
  description: 'Explore the ISHAN ecosystem — Arogya Ashram International, Antahakarana Avalokana, Samanvaya, and Sri Vrindavan Project. One vision, multiple initiatives, shared purpose.',
  alternates: {
    canonical: '/ecosystem',
  },
}

export default function EcosystemPage() {
  return (
    <div className="-mt-24">
      <PageHero />
      <EcosystemSections />
    </div>
  );
}

