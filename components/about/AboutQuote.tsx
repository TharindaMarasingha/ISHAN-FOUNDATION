import { RevealOnScroll } from "../ui/RevealOnScroll";

export function AboutQuote() {
  return (
    <section className="bg-heading py-32 px-6 flex items-center justify-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        <span className="font-display text-9xl text-secondary absolute -top-16 left-1/2 -translate-x-1/2 pointer-events-none">
          "
        </span>
        <RevealOnScroll>
          <p className="font-display italic text-3xl md:text-5xl text-white leading-relaxed relative z-10">
            True transformation occurs when we stop viewing ourselves as separate from nature, and begin living as a conscious expression of it.
          </p>
          <p className="mt-12 font-sans text-xs uppercase tracking-[0.3em] text-secondary">
            ISHAN — Core Philosophy
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
