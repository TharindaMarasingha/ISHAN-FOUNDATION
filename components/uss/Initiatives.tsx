import { SectionHeading } from "../ui/SectionHeading";
import { NumberedCard } from "../ui/NumberedCard";
import { RevealOnScroll } from "../ui/RevealOnScroll";

const INITIATIVES = [
  {
    number: "01",
    title: "Global Research Grants",
    description: "Funding independent scientific studies exploring the neurological and psychological impacts of prolonged contemplative practices.",
  },
  {
    number: "02",
    title: "The Wisdom Archive",
    description: "A digital repository preserving, translating, and analyzing rare manuscripts from ancient philosophical and spiritual traditions.",
  },
  {
    number: "03",
    title: "Ethics in Leadership",
    description: "Seminars and workshops designed to introduce principles of conscious decision-making to global corporate and political leaders.",
  },
  {
    number: "04",
    title: "Mindfulness in Education",
    description: "Developing curricula for schools and universities to integrate emotional intelligence and self-awareness into standard education.",
  },
];

export function Initiatives() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeading
        eyebrow="Active Programs"
        heading="Research & Initiatives"
        description="Translating theoretical inquiry into tangible programs that elevate human understanding and societal ethics."
        align="center"
      />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {INITIATIVES.map((initiative, index) => (
          <RevealOnScroll key={initiative.number} delay={index * 0.1} className="h-full">
            <NumberedCard {...initiative} className="h-full" />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
