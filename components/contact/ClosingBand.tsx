import { GoldDivider } from "../ui/GoldDivider";
import { RevealOnScroll } from "../ui/RevealOnScroll";

export function ClosingBand() {
  return (
    <>
      <GoldDivider />
      <section className="py-24 px-6 text-center bg-deepAmber/[0.02]">
        <RevealOnScroll>
          <div className="font-display italic text-2xl md:text-3xl text-deepAmber max-w-4xl mx-auto flex flex-col gap-6">
            <p>Every institution begins with an idea. Every movement begins with people. Every transformation begins with a single step.</p>
            <p>Thank you for visiting ISHAN. We invite you to walk this journey with us — as learners, practitioners, leaders, partners, volunteers, researchers, educators, and stewards.</p>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
