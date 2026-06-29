import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { RevealOnScroll } from "../ui/RevealOnScroll";

export function WhoWeAre() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="flex flex-col">
          <SectionHeading
            eyebrow="Who We Are"
            heading="A Global Movement for Humanity & Nature"
          />
          <RevealOnScroll delay={0.2} className="mt-8">
            <p className="font-sans font-light text-deepAmber leading-relaxed mb-6">
              ISHAN is a global society dedicated to fostering a holistic and sustainable way of life. By bridging ancient wisdom with contemporary practices, we strive to empower individuals and communities to live consciously.
            </p>
            <p className="font-sans font-light text-deepAmber leading-relaxed mb-10">
              Our initiatives span spiritual education, environmental preservation, holistic health, and social welfare, all united under a single vision of a harmonised future for our planet.
            </p>
            <Button href="/about" variant="ghost">Read More →</Button>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <RevealOnScroll delay={0.3}>
            <Card className="h-full">
              <h4 className="font-display text-burntOrange uppercase tracking-widest mb-3">Vision</h4>
              <p className="font-sans font-light text-sm text-deepAmber leading-relaxed">
                To cultivate a world where humanity and nature exist in conscious harmony through wisdom and wellness.
              </p>
            </Card>
          </RevealOnScroll>
          <RevealOnScroll delay={0.4}>
            <Card className="h-full">
              <h4 className="font-display text-burntOrange uppercase tracking-widest mb-3">Mission</h4>
              <p className="font-sans font-light text-sm text-deepAmber leading-relaxed">
                Empowering individuals and communities through education, holistic health, and environmental stewardship.
              </p>
            </Card>
          </RevealOnScroll>
          <RevealOnScroll delay={0.5}>
            <Card className="h-full">
              <h4 className="font-display text-burntOrange uppercase tracking-widest mb-3">Philosophy</h4>
              <p className="font-sans font-light text-sm text-deepAmber leading-relaxed">
                Rooted in timeless spiritual teachings, adapting universal truths to modern challenges for enduring wellbeing.
              </p>
            </Card>
          </RevealOnScroll>
          <RevealOnScroll delay={0.6}>
            <Card className="h-full">
              <h4 className="font-display text-burntOrange uppercase tracking-widest mb-3">Approach</h4>
              <p className="font-sans font-light text-sm text-deepAmber leading-relaxed">
                An integrated ecosystem of pathways, serving diverse needs while driving collective global transformation.
              </p>
            </Card>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
