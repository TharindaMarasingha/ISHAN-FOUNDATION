import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";

export function OurApproach() {
  return (
    <section className="py-24 px-6 md:px-12 bg-surface border-y border-divider">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-16 items-start">
        {/* Left Column */}
        <div className="flex flex-col space-y-6">
          <SectionHeading
            eyebrow="Methodology"
            heading="Bridging the Scientific and the Sacred"
          />
          <RevealOnScroll delay={0.1}>
            <p className="font-sans font-light text-heading/80 leading-relaxed text-lg italic text-primary">
              &quot;Where empirical rigor meets the infinite depths of subjective realization.&quot;
            </p>
          </RevealOnScroll>
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-8">
          <RevealOnScroll delay={0.2}>
            <p className="font-sans font-light text-heading/80 leading-relaxed text-lg">
              For centuries, the exploration of consciousness was relegated to the domain of mysticism, while science focused exclusively on the material world. Universal Spiritual Science (USS) dissolves this artificial boundary. We believe that true understanding emerges only when the objective rigor of the scientific method is applied to the profound subjective truths discovered through advanced contemplative practices.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.3}>
            <p className="font-sans font-light text-heading/80 leading-relaxed text-lg">
              Our approach does not seek to reduce spiritual experiences to mere neurological phenomena. Rather, we use scientific frameworks as a language to translate ancient, ineffable wisdom into practical, verifiable protocols for modern humanity. By uniting researchers, philosophers, and advanced practitioners, we are building a robust epistemology for conscious evolution.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="flex-1 p-6 border-l-2 border-primary bg-softAccent">
                <h4 className="font-display text-xl text-heading mb-2">First-Person Inquiry</h4>
                <p className="font-sans font-light text-sm text-heading/80">Direct, disciplined observation of consciousness through meditation and introspection.</p>
              </div>
              <div className="flex-1 p-6 border-l-2 border-secondary bg-softAccent">
                <h4 className="font-display text-xl text-heading mb-2">Third-Person Analysis</h4>
                <p className="font-sans font-light text-sm text-heading/80">Neurological, biological, and psychological mapping of contemplative states.</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
