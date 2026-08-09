import React from "react";

interface MasonryProps {
  children: React.ReactNode[];
  className?: string;
}

const Masonry = ({ children, className = "" }: MasonryProps) => {
  return (
    <div
      className={`
        columns-1 
        sm:columns-2 
        md:columns-3 
        gap-6 
        ${className}
      `}
    >
      {children.map((child, index) => (
        <div key={index} className="break-inside-avoid mb-6">
          {child}
        </div>
      ))}
    </div>
  );
};

export { Masonry };
