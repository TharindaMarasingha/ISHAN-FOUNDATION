import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { BrainCircuit, BookOpen, Scale, Microscope, ScrollText, Sparkles } from "lucide-react";

const AREAS_OF_STUDY = [
  {
    icon: BrainCircuit,
    title: "Consciousness Research",
    description: "Investigating the fundamental nature of awareness, the mind-body connection, and the states of expanded consciousness achieved through contemplative practice.",
  },
  {
    icon: Sparkles,
    title: "Contemplative Traditions",
    description: "A deep dive into the experiential methodologies of meditation, mindfulness, and breathwork utilized across ancient lineages to achieve inner transformation.",
  },
  {
    icon: BookOpen,
    title: "Comparative Philosophy",
    description: "Synthesizing the wisdom of Eastern metaphysics and Western philosophical thought to form a universal understanding of the human condition.",
  },
  {
    icon: Scale,
    title: "Ethics & Inner Development",
    description: "Studying how the cultivation of inner virtues—such as compassion, equanimity, and responsibility—translates into ethical action and social harmony.",
  },
  {
    icon: Microscope,
    title: "Scientific Studies of Meditation",
    description: "Partnering with neuroscientists and psychologists to empirically map the physiological and neurological benefits of sustained spiritual practices.",
  },
  {
    icon: ScrollText,
    title: "Ancient Wisdom Traditions",
    description: "Preserving and translating primary texts from ancient philosophical schools, making their timeless insights accessible to the modern seeker.",
  },
];

export function AreasOfStudy() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeading
        eyebrow="What We Study"
        heading="Domains of Inquiry"
        description="The Institute categorizes its research into distinct but overlapping fields, providing a comprehensive framework for understanding the self."
        align="center"
      />

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {AREAS_OF_STUDY.map((item, index) => {
          const Icon = item.icon;
          return (
            <RevealOnScroll key={item.title} delay={index * 0.1}>
              <Card className="h-full flex flex-col p-8 group">
                <div className="w-14 h-14 border border-burntOrange/20 rounded-full flex items-center justify-center mb-6 text-burntOrange group-hover:bg-burntOrange group-hover:text-peach transition-colors duration-300">
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display uppercase tracking-widest text-lg text-deepAmber mb-4">
                  {item.title}
                </h3>
                <p className="font-sans font-light text-deepAmber text-sm leading-relaxed flex-grow">
                  {item.description}
                </p>
              </Card>
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
}
