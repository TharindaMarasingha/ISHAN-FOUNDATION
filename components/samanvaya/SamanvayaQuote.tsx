import { RevealOnScroll } from "../ui/RevealOnScroll";

export function SamanvayaQuote() {
  return (
    <section className="bg-darkBrown py-32 px-6 flex items-center justify-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        <span className="font-display text-9xl text-sacredGold/20 absolute -top-16 left-1/2 -translate-x-1/2 pointer-events-none">
          &quot;
        </span>
        <RevealOnScroll>
          <p className="font-display italic text-3xl md:text-5xl text-peach leading-relaxed relative z-10">
            It is only when the waters of the mind are completely still that we can see the reflection of our own true depths.
          </p>
          <p className="mt-12 font-sans text-xs uppercase tracking-[0.3em] text-sacredGold">
            The Essence of Samanvaya
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
