import { SectionHeading } from "../ui/SectionHeading";
import { NumberedCard } from "../ui/NumberedCard";
import { RevealOnScroll } from "../ui/RevealOnScroll";

const PILLARS = [
  { number: "01", title: "Holistic Healing & Wellness", description: "Yoga, Ayurveda, Naturopathy, Mental & Emotional well-being." },
  { number: "02", title: "Preventive Healthcare", description: "Wellness awareness, lifestyle disease prevention, integrative systems." },
  { number: "03", title: "Healthcare Infrastructure", description: "Holistic hospitals, integrative clinics, mobile healthcare, rehab facilities." },
  { number: "04", title: "Education & Research", description: "Wellness universities, Yoga/Ayurveda institutes, consciousness studies." },
  { number: "05", title: "Sustainability & Eco Development", description: "Organic farming, sustainable communities, herbal cultivation." },
  { number: "06", title: "Wellness Tourism & Retreats", description: "Ashram/meditation retreats, spiritual tourism, nature healing." },
  { number: "07", title: "Humanitarian & Social Impact", description: "Rural/Youth/Women empowerment, disaster relief, community healthcare." },
  { number: "08", title: "Digital & Global Initiatives", description: "Online platforms, global collaborations, wellness media, research partnerships." },
];

export function EightPillars() {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <SectionHeading
            align="center"
            eyebrow="Strategic Framework"
            heading="The Eight Pillars of the Ecosystem"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, index) => (
            <RevealOnScroll key={pillar.number} delay={index * 0.05} className="h-full">
              <NumberedCard {...pillar} className="h-full shadow-sm hover:shadow-deepAmber/5" />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
