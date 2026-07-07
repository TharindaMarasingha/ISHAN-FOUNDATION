import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { Button } from "../ui/Button";

const PARTNER_TYPES = ["Investors", "Architects & Eco-Designers", "Wellness Practitioners", "Future Residents", "Philanthropists", "Government Entities"];

export function Partnership() {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-12">
          <SectionHeading
            align="center"
            eyebrow="Co-Creation"
            heading="Investment & Partnership"
            description="A project of this scale requires a coalition of the willing. We invite visionary investors, conscious creators, and future residents to co-create this unprecedented township."
          />
        </div>

        <RevealOnScroll delay={0.2} className="mb-16">
          <div className="flex flex-wrap justify-center gap-3">
            {PARTNER_TYPES.map((pt) => (
              <span key={pt} className="px-4 py-2 rounded-full border border-burntOrange/20 text-xs md:text-sm text-deepAmber tracking-widest uppercase transition-colors duration-300 hover:bg-burntOrange/5 hover:border-burntOrange/40 cursor-default">
                {pt}
              </span>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
