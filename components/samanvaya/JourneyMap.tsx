"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// --- Design Tokens ---
const TOKENS = {
  paperWhite: "#FFFFFF",
  pearl: "#F5F1E9",
  mistGreen: "#DCE9D7",
  sageGreen: "#9FBB90",
  lotusGreen: "#5C8151",
  deepLeaf: "#33472C",
  blushPetal: "#F3D8DB",
  lotusBloom: "#DE5680",
};

// --- Types ---
type ElementType = 'Water' | 'Earth' | 'Fire' | 'Air' | 'Ether';
type PackageType = "all" | "whole" | "south" | "central";

interface City {
  id: string;
  name: string;
  element: ElementType;
  descriptor: string;
  x: number;
  y: number;
  videoUrl: string;
  iconId: string;
  labelOffset: { x: number; y: number };
}

// --- Data ---
const destinations: City[] = [
  { 
    id: "negombo", name: "Negombo", element: "Water", descriptor: "Arrival", 
    x: 85, y: 320, 
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    iconId: "boat", labelOffset: { x: -65, y: 0 } 
  },
  { 
    id: "galle", name: "Galle", element: "Water", descriptor: "Tide", 
    x: 110, y: 500, 
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    iconId: "fort", labelOffset: { x: -50, y: 15 } 
  },
  { 
    id: "mirissa", name: "Mirissa", element: "Water", descriptor: "Flow", 
    x: 170, y: 530, 
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    iconId: "wave", labelOffset: { x: 35, y: 25 }
  },
  { 
    id: "ella", name: "Ella", element: "Air", descriptor: "Perspective", 
    x: 240, y: 420, 
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    iconId: "hills", labelOffset: { x: 40, y: 0 }
  },
  { 
    id: "kandy", name: "Kandy", element: "Earth", descriptor: "Root", 
    x: 200, y: 340, 
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    iconId: "temple", labelOffset: { x: -55, y: -20 }
  },
  { 
    id: "sigiriya", name: "Sigiriya", element: "Fire", descriptor: "Ascent", 
    x: 210, y: 240, 
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    iconId: "rock", labelOffset: { x: 40, y: 0 }
  },
  { 
    id: "anuradhapura", name: "Anuradhapura", element: "Earth", descriptor: "Memory", 
    x: 150, y: 180, 
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    iconId: "stupa", labelOffset: { x: -75, y: -15 }
  },
  { 
    id: "trincomalee", name: "Trincomalee", element: "Ether", descriptor: "Horizon", 
    x: 310, y: 200, 
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    iconId: "horizon", labelOffset: { x: 45, y: -10 }
  }
];

// Routes define segments between cities. We assemble packages from segments.
// To easily color segments, we map them explicitly.
const routeSegments = [
  { id: "negombo-galle", path: "M 85,320 Q 90,420 110,500", pkgs: ["whole", "south"] },
  { id: "galle-mirissa", path: "M 110,500 Q 140,520 170,530", pkgs: ["whole", "south"] },
  { id: "mirissa-ella", path: "M 170,530 Q 220,490 240,420", pkgs: ["whole", "south"] },
  { id: "ella-kandy", path: "M 240,420 Q 220,380 200,340", pkgs: ["whole", "south"] },
  { id: "kandy-negombo-south", path: "M 200,340 Q 140,350 85,320", pkgs: ["south"] }, // South ends here
  { id: "kandy-sigiriya", path: "M 200,340 Q 210,290 210,240", pkgs: ["whole", "central"] },
  { id: "sigiriya-anuradhapura", path: "M 210,240 Q 180,200 150,180", pkgs: ["whole", "central"] },
  { id: "anuradhapura-trincomalee", path: "M 150,180 Q 230,170 310,200", pkgs: ["whole"] },
  { id: "trincomalee-negombo", path: "M 310,200 Q 200,220 85,320", pkgs: ["whole"] }, // Whole ends here
  { id: "negombo-kandy-central", path: "M 85,320 Q 140,310 200,340", pkgs: ["central"] }, // Central starts here
  { id: "anuradhapura-negombo-central", path: "M 150,180 Q 110,250 85,320", pkgs: ["central"] }, // Central ends here
];

// --- Custom Icons Component ---
const CityIcon = ({ iconId, color }: { iconId: string, color: string }) => {
  switch (iconId) {
    case 'boat':
      return <path d="M-6,2 Q0,6 6,2 L4,-4 L-4,-4 Z M0,-4 L0,-10 L4,-4" fill="none" stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>;
    case 'fort':
      return <path d="M-6,4 L6,4 L6,0 L4,0 L4,2 L2,2 L2,0 L-2,0 L-2,2 L-4,2 L-4,0 L-6,0 Z" fill="none" stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>;
    case 'wave':
      return <path d="M-6,2 Q-3,-4 0,2 T6,2" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>;
    case 'hills':
      return <path d="M-7,4 L-2,-4 L3,4 M-1,1 L4,-5 L8,3" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>;
    case 'temple':
      return <path d="M-5,4 L5,4 M-4,1 L4,1 M-6,4 L0,-6 L6,4 M-2,-2 L2,-2" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>;
    case 'rock':
      return <path d="M-5,4 L5,4 L4,-2 L2,-4 L-1,-4 L-2,-2 L-4,-2 Z" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>;
    case 'stupa':
      return <path d="M-5,4 L5,4 M-4,4 A 4 4 0 0 1 4 4 M0,0 L0,-6" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>;
    case 'horizon':
      return <path d="M-7,2 L7,2 M-3,2 A 3 3 0 0 1 3 2" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>;
    default:
      return <circle cx="0" cy="0" r="3" fill={color} />;
  }
};

// --- Main Component ---
export function JourneyMap() {
  const [activePackage, setActivePackage] = useState<PackageType>("all");
  const [hoveredDest, setHoveredDest] = useState<string | null>(null);
  
  // Reduced Motion Hook
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const isRouteActive = (pkgs: string[]) => {
    if (activePackage === "all") return true;
    return pkgs.includes(activePackage);
  };

  const isCityActive = (cityId: string) => {
    if (activePackage === "all") return true;
    // Find if any active route connects to this city
    return routeSegments.some(seg => 
      seg.pkgs.includes(activePackage) && 
      (seg.id.includes(cityId))
    );
  };

  return (
    <section className="pt-20 pb-32 relative overflow-hidden" style={{ backgroundColor: TOKENS.paperWhite }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-16">
          
          {/* Left Column: Typography & Controls */}
          <div className="w-full lg:w-5/12 flex flex-col items-center lg:items-start text-center lg:text-left z-20">
            <div className="w-full max-w-sm flex flex-col items-center lg:items-start">
              <span className="text-xs font-sans font-semibold tracking-[0.2em] uppercase mb-6" style={{ color: TOKENS.sageGreen }}>
                Follow the Journey
              </span>
              <h2 className="font-display text-5xl lg:text-6xl mb-6 leading-[1.1]" style={{ color: TOKENS.deepLeaf }}>
                The island <br/> becomes part of <br/> the journey.
              </h2>
              <p className="font-serif italic text-lg mb-16" style={{ color: TOKENS.lotusGreen }}>
                From the coast to the highlands and ancient heart of Sri Lanka.
              </p>

              {/* Package Selector */}
              <div className="flex flex-col gap-3 w-full">
                {[
                  { id: "all", label: "All Journeys" },
                  { id: "whole", label: "Whole Island" },
                  { id: "south", label: "South Island" },
                  { id: "central", label: "Central Heritage" }
                ].map((pkg) => (
                  <button
                    key={pkg.id}
                    onClick={() => setActivePackage(pkg.id as PackageType)}
                    className="py-4 px-6 text-sm uppercase tracking-widest font-sans transition-all duration-300 border rounded-full flex items-center justify-between group"
                    style={{
                      backgroundColor: activePackage === pkg.id ? TOKENS.deepLeaf : "transparent",
                      color: activePackage === pkg.id ? TOKENS.paperWhite : TOKENS.deepLeaf,
                      borderColor: activePackage === pkg.id ? TOKENS.deepLeaf : TOKENS.mistGreen,
                      boxShadow: activePackage === pkg.id ? "0 10px 15px -3px rgba(0, 0, 0, 0.1)" : "none",
                    }}
                    onMouseEnter={(e) => {
                      if (activePackage !== pkg.id) {
                        e.currentTarget.style.backgroundColor = TOKENS.pearl;
                        e.currentTarget.style.borderColor = TOKENS.sageGreen;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activePackage !== pkg.id) {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.borderColor = TOKENS.mistGreen;
                      }
                    }}
                  >
                    <span className="font-medium">{pkg.label}</span>
                    <div className="flex items-center gap-2">
                      {pkg.id !== "all" && (
                        <svg className={`w-4 h-4 transition-opacity duration-300`} 
                             style={{ opacity: activePackage === pkg.id ? 1 : 0 }} 
                             fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                      <div className="w-2 h-2 rounded-full transition-colors duration-300" 
                           style={{ backgroundColor: activePackage === pkg.id ? TOKENS.lotusGreen : TOKENS.sageGreen }} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: The Custom Map */}
          <div className="w-full lg:w-7/12 relative flex justify-center mt-12 lg:mt-0 z-10">
            <div className="relative w-full max-w-[700px]">
              
              <div className="relative w-full aspect-[4/5] shadow-sm rounded-3xl overflow-visible" style={{ backgroundColor: TOKENS.pearl }}>
                
                {/* SVG Map Base & Overlay */}
                <svg 
                  viewBox="0 0 400 600" 
                  className="absolute inset-0 w-full h-full"
                  style={{ overflow: "visible" }}
                >
                  {/* Custom Island Silhouette - Removed per user request */}

                  {/* Route Segments */}
                  {routeSegments.map(route => {
                    const active = isRouteActive(route.pkgs);
                    return (
                      <path 
                        key={route.id}
                        d={route.path}
                        fill="none"
                        stroke={active ? TOKENS.lotusGreen : TOKENS.mistGreen}
                        strokeWidth="2.5"
                        strokeDasharray="6 6"
                        opacity={active ? 1 : 0.4}
                        className="transition-all duration-300 ease-in-out pointer-events-none"
                      />
                    );
                  })}

                  {/* City Markers & Labels */}
                  {destinations.map((dest) => {
                    const active = isCityActive(dest.id);
                    const isHovered = hoveredDest === dest.id;

                    return (
                      <g 
                        key={dest.id}
                        className="transition-all duration-300"
                        style={{ opacity: active ? 1 : 0.25, cursor: active ? 'pointer' : 'default' }}
                        onMouseEnter={() => active && setHoveredDest(dest.id)}
                        onMouseLeave={() => setHoveredDest(null)}
                      >
                        {/* Hover Ring (CTA Lotus Bloom) */}
                        <circle 
                          cx={dest.x} 
                          cy={dest.y} 
                          r={isHovered ? "14" : "6"} 
                          fill={isHovered ? TOKENS.blushPetal : "none"} 
                          stroke={isHovered ? TOKENS.lotusBloom : "none"} 
                          strokeWidth="2"
                          className="transition-all duration-300"
                        />

                        {/* Main Dot / Icon Wrapper */}
                        <circle 
                          cx={dest.x} 
                          cy={dest.y} 
                          r="10" 
                          fill={active ? TOKENS.sageGreen : "none"}
                          stroke={active ? TOKENS.paperWhite : TOKENS.mistGreen}
                          strokeWidth="2"
                          className="transition-all duration-300 shadow-sm"
                        />
                        
                        {/* Custom Icon */}
                        <g transform={`translate(${dest.x}, ${dest.y})`}>
                          <CityIcon iconId={dest.iconId} color={active ? TOKENS.paperWhite : TOKENS.mistGreen} />
                        </g>

                        {/* Label Group */}
                        <g 
                          transform={`translate(${dest.x + dest.labelOffset.x}, ${dest.y + dest.labelOffset.y})`}
                          className={`transition-transform duration-300 ${isHovered ? "scale-105" : "scale-100"}`}
                        >
                          {/* Label Background */}
                          <rect 
                            x={dest.labelOffset.x > 0 ? -5 : -95} 
                            y="-16" 
                            width="100" 
                            height="44" 
                            fill={TOKENS.pearl} 
                            rx="6"
                            className="drop-shadow-sm"
                            opacity={active ? 0.95 : 0.8}
                          />
                          
                          {/* City Name */}
                          <text 
                            textAnchor={dest.labelOffset.x > 0 ? "start" : "end"} 
                            x={dest.labelOffset.x > 0 ? 5 : -10} 
                            y="0"
                            className="font-serif text-[13px] font-medium"
                            fill={TOKENS.deepLeaf}
                          >
                            {dest.name}
                          </text>

                          {/* Element Tag */}
                          <text 
                            textAnchor={dest.labelOffset.x > 0 ? "start" : "end"} 
                            x={dest.labelOffset.x > 0 ? 5 : -10} 
                            y="14"
                            className="font-sans text-[9px] uppercase tracking-[0.15em] font-bold"
                            fill={active ? TOKENS.lotusGreen : TOKENS.sageGreen}
                          >
                            {dest.element}
                          </text>

                          {/* Descriptor */}
                          <text 
                            textAnchor={dest.labelOffset.x > 0 ? "start" : "end"} 
                            x={dest.labelOffset.x > 0 ? 5 : -10} 
                            y="24"
                            className="font-serif italic text-[11px]"
                            fill={TOKENS.deepLeaf}
                          >
                            {dest.descriptor}
                          </text>
                        </g>
                      </g>
                    );
                  })}
                </svg>

                {/* Video Hover Overlays */}
                {destinations.map((dest) => {
                  const isHovered = hoveredDest === dest.id;
                  
                  // Calculate offset so the video card doesn't clip the map edge
                  const cardWidth = 140;
                  const cardHeight = 250;
                  
                  // Rough SVG-to-Pixels scaling ratio since the container is responsive
                  // We use percentages for positioning to make it responsive
                  const leftPos = `${(dest.x / 400) * 100}%`;
                  const topPos = `${(dest.y / 600) * 100}%`;
                  
                  // Determine anchor direction based on position
                  const anchorX = dest.x > 200 ? 'calc(-100% - 20px)' : '20px';
                  const anchorY = dest.y > 300 ? 'calc(-100% + 20px)' : '-20px';

                  return (
                    <div 
                      key={`video-${dest.id}`}
                      className="absolute z-30 pointer-events-none transition-all duration-300 origin-center shadow-2xl rounded-xl overflow-hidden bg-black"
                      style={{
                        left: leftPos,
                        top: topPos,
                        width: cardWidth,
                        height: cardHeight,
                        transform: `translate(${anchorX}, ${anchorY}) scale(${isHovered ? 1 : 0.9})`,
                        opacity: isHovered ? 1 : 0,
                        visibility: isHovered ? 'visible' : 'hidden'
                      }}
                    >
                      {/* Using a generic placeholder video url since we don't have local assets yet */}
                      {isHovered && (
                        <video
                          src={dest.videoUrl}
                          className="w-full h-full object-cover"
                          muted
                          loop={!prefersReducedMotion}
                          autoPlay={!prefersReducedMotion}
                          playsInline
                        />
                      )}
                      
                      {prefersReducedMotion && (
                         <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md" style={{ backgroundColor: TOKENS.lotusBloom }}>
                              <svg className="w-4 h-4 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                            </div>
                         </div>
                      )}
                      
                      {/* Gradient overlay for text legibility if needed in future */}
                      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-3 left-3 text-white font-sans text-xs font-semibold tracking-wider uppercase">
                        {dest.name}
                      </div>
                    </div>
                  );
                })}

                {/* Legend */}
                <div className="absolute bottom-6 right-6 p-4 rounded-xl shadow-sm pointer-events-none" style={{ backgroundColor: 'rgba(245, 241, 233, 0.9)', backdropFilter: 'blur(8px)' }}>
                  <h4 className="text-[10px] font-sans font-bold uppercase tracking-widest mb-3" style={{ color: TOKENS.deepLeaf }}>Journey Route</h4>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 rounded-full flex items-center justify-center" style={{ backgroundColor: TOKENS.lotusGreen }}>
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: TOKENS.paperWhite }} />
                    </div>
                    <span className="text-[11px] font-sans font-medium" style={{ color: TOKENS.deepLeaf }}>Destination</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-[2px] rounded-full border-b-[2px] border-dashed" style={{ borderColor: TOKENS.lotusGreen }} />
                    <span className="text-[11px] font-sans font-medium" style={{ color: TOKENS.deepLeaf }}>Travel Route</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
