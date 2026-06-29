import { RevealOnScroll } from "../ui/RevealOnScroll";

export function VisionQuote() {
  return (
    <section className="bg-darkBrown py-32 px-6 flex items-center justify-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        <span className="font-display text-9xl text-sacredGold/20 absolute -top-16 left-1/2 -translate-x-1/2 pointer-events-none">
          "
        </span>
        <RevealOnScroll>
          <p className="font-display italic text-3xl md:text-5xl text-peach leading-relaxed relative z-10">
            To cultivate a world where humanity and nature exist in conscious harmony through wisdom, wellness, compassion, responsibility, and sustainable living.
          </p>
          <p className="mt-12 font-sans text-xs uppercase tracking-[0.3em] text-sacredGold">
            ISHAN — Vision Statement
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
