import React from "react";
import { Card } from "./Card";

interface NumberedCardProps {
  number: string;
  title: string;
  description: string;
  accent?: string;
  className?: string;
}

export function NumberedCard({
  number,
  title,
  description,
  accent,
  className = "",
}: NumberedCardProps) {
  return (
    <Card className={`relative overflow-hidden group flex flex-col h-full ${className}`}>
      <div
        className="font-display italic text-6xl md:text-7xl absolute -top-4 -right-2 text-deepAmber/5 group-hover:text-deepAmber/10 transition-all duration-500 pointer-events-none select-none motion-safe:group-hover:scale-105 motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:-translate-x-1"
        style={accent ? { color: `color-mix(in srgb, ${accent} 10%, transparent)` } : {}}
      >
        {number}
      </div>
      
      <div className="relative z-10 flex-grow flex flex-col justify-end">
        <h3 className="font-display uppercase tracking-widest text-deepAmber text-xl mb-4">
          {title}
        </h3>
        <p className="font-sans font-light text-sm text-deepAmber/80 leading-relaxed">
          {description}
        </p>
      </div>
    </Card>
  );
}
