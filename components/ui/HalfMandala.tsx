import React from "react";

export function HalfMandala({ className = "" }: { className?: string }) {
  // Center is at (500, 500)
  // We want petals pointing outwards to the left (angles from 90 to 270 degrees)
  
  // Round to 3 decimal places to avoid SSR hydration mismatches
  const round = (num: number) => Math.round(num * 1000) / 1000;

  const renderPetals = (count: number, innerRadius: number, outerRadius: number, petalWidth: number) => {
    return Array.from({ length: count }).map((_, i) => {
      // angle ranges from PI/2 (90) to 3*PI/2 (270)
      const angle = Math.PI / 2 + (i * Math.PI) / (count - 1);
      
      const cx1 = round(Math.cos(angle - petalWidth) * innerRadius);
      const cy1 = round(Math.sin(angle - petalWidth) * innerRadius);
      
      const cx2 = round(Math.cos(angle + petalWidth) * innerRadius);
      const cy2 = round(Math.sin(angle + petalWidth) * innerRadius);
      
      const px = round(Math.cos(angle) * outerRadius);
      const py = round(Math.sin(angle) * outerRadius);
      
      const cpRadius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const cpAngle1 = angle - petalWidth * 0.8;
      const cpAngle2 = angle + petalWidth * 0.8;

      const cpx1 = round(Math.cos(cpAngle1) * cpRadius);
      const cpy1 = round(Math.sin(cpAngle1) * cpRadius);
      const cpx2 = round(Math.cos(cpAngle2) * cpRadius);
      const cpy2 = round(Math.sin(cpAngle2) * cpRadius);
      
      return (
        <path
          key={i}
          d={`M ${cx1} ${cy1} Q ${cpx1} ${cpy1} ${px} ${py} Q ${cpx2} ${cpy2} ${cx2} ${cy2}`}
          stroke="currentColor"
          fill="none"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      );
    });
  }

  return (
    <svg viewBox="0 0 500 1000" className={className} xmlns="http://www.w3.org/2000/svg">
      <g stroke="currentColor" fill="none" transform="translate(500, 500)">
        {/* Core circles */}
        <circle r="40" strokeWidth="4" />
        <circle r="70" strokeWidth="2" strokeDasharray="4,6" />
        <circle r="100" strokeWidth="3" />
        <circle r="220" strokeWidth="1.5" />
        <circle r="320" strokeWidth="3" />
        <circle r="440" strokeWidth="1.5" strokeDasharray="8,12" />

        {/* Petal layer 1 */}
        {renderPetals(9, 100, 220, 0.15)}
        
        {/* Petal layer 2 */}
        {renderPetals(15, 220, 320, 0.08)}
        
        {/* Petal layer 3 (outer) */}
        {renderPetals(23, 320, 440, 0.05)}
        
        {/* Decorative dots (circles) - Inner */}
        {Array.from({ length: 14 }).map((_, i) => {
           const angle = Math.PI / 2 + (i * Math.PI) / 13;
           return <circle key={'dot1'+i} cx={round(Math.cos(angle) * 160)} cy={round(Math.sin(angle) * 160)} r="6" fill="currentColor" stroke="none" />
        })}

        {/* Decorative dots (circles) - Outer */}
        {Array.from({ length: 22 }).map((_, i) => {
           const angle = Math.PI / 2 + (i * Math.PI) / 21;
           return <circle key={'dot2'+i} cx={round(Math.cos(angle) * 380)} cy={round(Math.sin(angle) * 380)} r="8" fill="currentColor" stroke="none" />
        })}
      </g>
    </svg>
  );
}
