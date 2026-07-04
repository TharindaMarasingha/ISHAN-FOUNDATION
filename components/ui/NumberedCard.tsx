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
        className="font-display italic text-6xl md:text-7xl absolute top-4 right-4 text-[#C77738]/10 group-hover:text-[#C77738]/20 transition-all duration-500 pointer-events-none select-none motion-safe:group-hover:scale-105 motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:-translate-x-1"
        style={accent ? { color: `color-mix(in srgb, ${accent} 10%, transparent)` } : {}}
      >
        {number}
      </div>
      
      <div className="relative z-10 flex-grow flex flex-col justify-between h-full pt-12 sm:pt-16">
        <div>
          <h3 className="font-display uppercase tracking-widest text-[#2E1A0E] text-lg font-medium mb-3">
            {title}
          </h3>
          <p className="font-sans font-light text-[15px] text-[#2E1A0E]/70 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
}
