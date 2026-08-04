import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { RevealOnScroll } from "../ui/RevealOnScroll";

const STORY_ITEMS = [
  {
    title: "Our Vision",
    description: "To cultivate a world where humanity and nature exist in conscious harmony. We envision a society that does not merely survive, but thrives on the principles of collective responsibility, deep ecological respect, and inner peace, setting a precedent for all future generations.",
  },
  {
    title: "Our Mission",
    description: "We are committed to empowering individuals, families, and global communities through transformative education, accessible holistic health, and rigorous environmental stewardship. By providing actionable pathways to wellness, we help society realign with its highest potential.",
  },
  {
    title: "Our Philosophy",
    description: "Rooted in the timeless spiritual teachings of the East, our philosophy adapts universal truths to contemporary challenges. We believe that true healing begins from within—when the mind and spirit are at peace, the body and the environment naturally follow into a state of equilibrium.",
  },
  {
    title: "Our Approach",
    description: "ISHAN operates as an integrated ecosystem of distinct but interconnected branches. Rather than addressing symptoms in isolation, we treat the whole—whether through physical healing at the Arogya Ashram, spiritual inquiry at USS, social welfare via Samanvaya, or ecological restoration in Sri Vrindavan.",
  },
];

export function OurStory() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeading
        eyebrow="Our Story & Mission"
        heading="Bridging the Ancient and the Future"
        description="We stand at the intersection of preservation and progress, safeguarding humanity's oldest truths to heal its newest wounds."
        align="center"
      />

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        {STORY_ITEMS.map((item, index) => (
          <RevealOnScroll key={item.title} delay={index * 0.15}>
            <Card className="h-full flex flex-col p-10">
              <h3 className="font-display uppercase tracking-widest text-xl text-primary mb-6 border-b border-divider pb-4 inline-block w-full">
                {item.title}
              </h3>
              <p className="font-sans font-light text-heading leading-relaxed text-base flex-grow">
                {item.description}
              </p>
            </Card>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
