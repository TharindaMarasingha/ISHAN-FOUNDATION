import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`relative overflow-hidden border border-divider bg-heading/5 p-8 sm:p-10 transition-all duration-500 ease-out shadow-[0_2px_10px_rgba(46,26,14,0.03)] group/card motion-safe:hover:-translate-y-1.5 motion-safe:hover:shadow-[0_12px_35px_rgba(46,26,14,0.08)] hover:border-primary/50 ${className}`}
    >
      {/* Shine sweep pseudo-element equivalent */}
      <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/5 to-transparent motion-safe:group-hover/card:translate-x-[150%] transition-transform duration-[1.5s] ease-in-out pointer-events-none" />
      
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </div>
  );
}
