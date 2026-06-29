import { SectionHeading } from "../ui/SectionHeading";
import { NumberedCard } from "../ui/NumberedCard";
import { RevealOnScroll } from "../ui/RevealOnScroll";

const PILLARS = [
  {
    number: "01",
    title: "Wisdom",
    description: "Preserving and disseminating timeless spiritual and practical knowledge.",
  },
  {
    number: "02",
    title: "Wellness",
    description: "Promoting holistic health—physical, mental, and spiritual.",
  },
  {
    number: "03",
    title: "Humanity",
    description: "Fostering compassionate communities and collective social responsibility.",
  },
  {
    number: "04",
    title: "Nature",
    description: "Cultivating sustainable ecosystems and deep ecological awareness.",
  },
];

export function FourPillars() {
  return (
    <section className="bg-deepAmber/[0.02] py-24 px-6 border-y border-burntOrange/10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Our Foundation"
          heading="Four Core Pillars"
          description="The foundational principles that guide every initiative, program, and partnership within the ISHAN ecosystem."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, index) => (
            <RevealOnScroll key={pillar.number} delay={index * 0.1} className="h-full">
              <NumberedCard {...pillar} className="h-full" />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
