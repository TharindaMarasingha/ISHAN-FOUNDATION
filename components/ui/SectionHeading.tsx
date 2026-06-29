import React, { ReactNode } from "react";
import { RevealOnScroll } from "./RevealOnScroll";

interface SectionHeadingProps {
  eyebrow: string;
  heading: string | ReactNode;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const flexClass = align === "center" ? "items-center" : "items-start";

  return (
    <RevealOnScroll className={`flex flex-col ${flexClass}`}>
      <span
        className={`font-display italic text-burntOrange tracking-[0.2em] text-sm uppercase mb-4 ${alignClass}`}
      >
        {eyebrow}
      </span>
      <h2
        className={`font-display font-light text-deepAmber text-4xl md:text-5xl lg:text-6xl mb-6 ${alignClass}`}
      >
        {heading}
      </h2>
      {description && (
        <p
          className={`font-sans font-light text-deepAmber max-w-xl leading-relaxed ${alignClass}`}
        >
          {description}
        </p>
      )}
    </RevealOnScroll>
  );
}
