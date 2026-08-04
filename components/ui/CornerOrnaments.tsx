import React from "react";

export function TopLeftCorner({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute z-0 ${className}`}>

      <svg 
        viewBox="0 0 350 450" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-full text-secondary opacity-[0.35] group-hover:opacity-[0.45] transition-opacity duration-1000 animate-float-tl"
      >
        <g stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
          {/* Main Branches */}
          <path d="M-20,40 C 40,30 120,60 180,130 C 220,175 280,180 320,120" />
          <path d="M-10,70 C 60,60 150,130 200,200" />
          <path d="M 50,55 C 90,40 140,80 180,50" />
          <path d="M 80,75 C 130,95 160,150 140,180" />
          
          {/* Spirals */}
          <path d="M 200,200 C 240,240 280,210 260,170 C 240,130 190,160 210,190 C 220,205 235,195 230,180" />
          
          {/* Leaves */}
          <path d="M 45,55 Q 55,40 65,55 Q 55,70 45,55 Z" fill="currentColor" stroke="none" />
          <path d="M 115,80 Q 130,65 135,85 Q 120,100 115,80 Z" fill="currentColor" stroke="none" />
          <path d="M 160,105 Q 175,90 180,110 Q 165,125 160,105 Z" fill="currentColor" stroke="none" />
          <path d="M 90,110 Q 105,105 100,120 Q 85,125 90,110 Z" fill="currentColor" stroke="none" />
          <path d="M 135,150 Q 150,145 145,160 Q 130,165 135,150 Z" fill="currentColor" stroke="none" />
          <path d="M 250,140 Q 265,125 275,140 Q 265,155 250,140 Z" fill="currentColor" stroke="none" />
          
          {/* Buds / Dots */}
          <circle cx="80" cy="45" r="2" fill="currentColor" stroke="none" />
          <circle cx="165" cy="70" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="145" cy="115" r="2" fill="currentColor" stroke="none" />
          <circle cx="185" cy="150" r="1.5" fill="currentColor" stroke="none" />

          {/* Hanging Elements */}
          <g className="animate-sway-1" style={{ transformOrigin: '115px 80px' }}>
            <line x1="115" y1="80" x2="115" y2="300" strokeWidth="0.75" />
            <path d="M 108,300 C 115,292 115,292 122,300 C 118,305 112,305 108,300 Z" fill="currentColor" stroke="none" />
            <path d="M 115,300 L 115,310" strokeWidth="0.75" />
            <circle cx="115" cy="280" r="1" fill="currentColor" stroke="none" />
          </g>
          
          <g className="animate-sway-2" style={{ transformOrigin: '160px 120px' }}>
            <line x1="160" y1="120" x2="160" y2="240" strokeWidth="0.75" />
            <path d="M 153,240 C 160,232 160,232 167,240 C 163,245 157,245 153,240 Z" fill="currentColor" stroke="none" />
            <path d="M 160,240 L 160,250" strokeWidth="0.75" />
            <circle cx="160" cy="220" r="1" fill="currentColor" stroke="none" />
          </g>
          
          <g className="animate-sway-3" style={{ transformOrigin: '190px 180px' }}>
            <line x1="190" y1="180" x2="190" y2="380" strokeWidth="0.75" />
            <path d="M 183,380 C 190,372 190,372 197,380 C 193,385 187,385 183,380 Z" fill="currentColor" stroke="none" />
            <path d="M 190,380 L 190,390" strokeWidth="0.75" />
            <circle cx="190" cy="360" r="1" fill="currentColor" stroke="none" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export function BottomRightCorner({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute z-0 ${className}`}>

      <svg 
        viewBox="0 0 350 450" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-full text-secondary opacity-[0.35] group-hover:opacity-[0.45] transition-opacity duration-1000 animate-float-br"
      >
        <g stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
          
          {/* Pure 180-degree rotation of the entire TopLeftCorner artwork */}
          <g transform="rotate(180 175 225)">
            {/* Main Branches */}
            <path d="M-20,40 C 40,30 120,60 180,130 C 220,175 280,180 320,120" />
            <path d="M-10,70 C 60,60 150,130 200,200" />
            <path d="M 50,55 C 90,40 140,80 180,50" />
            <path d="M 80,75 C 130,95 160,150 140,180" />
            
            {/* Spirals */}
            <path d="M 200,200 C 240,240 280,210 260,170 C 240,130 190,160 210,190 C 220,205 235,195 230,180" />
            
            {/* Leaves */}
            <path d="M 45,55 Q 55,40 65,55 Q 55,70 45,55 Z" fill="currentColor" stroke="none" />
            <path d="M 115,80 Q 130,65 135,85 Q 120,100 115,80 Z" fill="currentColor" stroke="none" />
            <path d="M 160,105 Q 175,90 180,110 Q 165,125 160,105 Z" fill="currentColor" stroke="none" />
            <path d="M 90,110 Q 105,105 100,120 Q 85,125 90,110 Z" fill="currentColor" stroke="none" />
            <path d="M 135,150 Q 150,145 145,160 Q 130,165 135,150 Z" fill="currentColor" stroke="none" />
            <path d="M 250,140 Q 265,125 275,140 Q 265,155 250,140 Z" fill="currentColor" stroke="none" />
            
            {/* Buds / Dots */}
            <circle cx="80" cy="45" r="2" fill="currentColor" stroke="none" />
            <circle cx="165" cy="70" r="1.5" fill="currentColor" stroke="none" />
            <circle cx="145" cy="115" r="2" fill="currentColor" stroke="none" />
            <circle cx="185" cy="150" r="1.5" fill="currentColor" stroke="none" />

            {/* Hanging Elements */}
            <g className="animate-sway-1" style={{ transformOrigin: '115px 80px' }}>
              <line x1="115" y1="80" x2="115" y2="300" strokeWidth="0.75" />
              <path d="M 108,300 C 115,292 115,292 122,300 C 118,305 112,305 108,300 Z" fill="currentColor" stroke="none" />
              <path d="M 115,300 L 115,310" strokeWidth="0.75" />
              <circle cx="115" cy="280" r="1" fill="currentColor" stroke="none" />
            </g>
            
            <g className="animate-sway-2" style={{ transformOrigin: '160px 120px' }}>
              <line x1="160" y1="120" x2="160" y2="240" strokeWidth="0.75" />
              <path d="M 153,240 C 160,232 160,232 167,240 C 163,245 157,245 153,240 Z" fill="currentColor" stroke="none" />
              <path d="M 160,240 L 160,250" strokeWidth="0.75" />
              <circle cx="160" cy="220" r="1" fill="currentColor" stroke="none" />
            </g>
            
            <g className="animate-sway-3" style={{ transformOrigin: '190px 180px' }}>
              <line x1="190" y1="180" x2="190" y2="380" strokeWidth="0.75" />
              <path d="M 183,380 C 190,372 190,372 197,380 C 193,385 187,385 183,380 Z" fill="currentColor" stroke="none" />
              <path d="M 190,380 L 190,390" strokeWidth="0.75" />
              <circle cx="190" cy="360" r="1" fill="currentColor" stroke="none" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
