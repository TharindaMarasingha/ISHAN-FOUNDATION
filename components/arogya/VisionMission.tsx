import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { Card } from "../ui/Card";

const CORE_VALUES = [
  "Holistic Well-Being & Preventive Healthcare",
  "Humanitarian Service & Sustainability",
  "Conscious Living & Ethical Wellness",
  "Global Harmony & Cultural Preservation",
  "Integrated Human Development",
];

export function VisionMission() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-16 items-start">
        {/* Left Column */}
        <div className="flex flex-col space-y-8">
          <SectionHeading
            eyebrow="Vision & Mission"
            heading="A Multidimensional Platform for Human Evolution"
          />
          <RevealOnScroll delay={0.1}>
            <p className="font-sans font-light text-deepAmber/90 leading-relaxed text-lg">
              Arogya Ashram International is dedicated to creating sustainable wellness-driven ecosystems that contribute to the physical, mental, emotional, social, environmental, and spiritual wellbeing of humanity. We transcend traditional healthcare by focusing on proactive empowerment and holistic alignment.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="font-sans font-light text-deepAmber/80 leading-relaxed text-lg">
              Rooted in the ancient Arogyasala tradition of Sri Lanka — representing the world's earliest documented dedicated healing institutions — our model bridges this ancient indigenous wisdom with modern wellness science to provide scalable models of conscious living for the modern world.
            </p>
          </RevealOnScroll>
        </div>

        {/* Right Column */}
        <RevealOnScroll delay={0.3} className="h-full">
          <Card className="h-full flex flex-col p-8 sm:p-10 border-burntOrange/20">
            <h3 className="font-display uppercase tracking-widest text-deepAmber text-xl mb-8 border-b border-burntOrange/20 pb-4">
              Core Values
            </h3>
            <ul className="flex flex-col space-y-6 flex-grow justify-center">
              {CORE_VALUES.map((val) => (
                <li key={val} className="flex items-start text-sans font-light text-deepAmber/80 leading-relaxed text-base">
                  <span className="text-mandarin mr-4 text-xs mt-1.5">●</span>
                  <span>{val}</span>
                </li>
              ))}
            </ul>
          </Card>
        </RevealOnScroll>
      </div>
    </section>
  );
}
