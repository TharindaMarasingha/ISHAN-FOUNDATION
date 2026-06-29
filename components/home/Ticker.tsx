const VALUES = [
  "Pristine Wisdom",
  "Preventive Wellness",
  "Proactive Wellbeing",
  "Productive Welfare",
  "Collective Consciousness",
  "Shared Responsibilities",
  "Coherent Communities",
  "Sustainable Systems",
];

export function Ticker() {
  const tickerContent = [...VALUES, ...VALUES, ...VALUES]; // Tripled to ensure seamless loop

  return (
    <div className="w-full overflow-hidden bg-darkBrown/5 border-y border-sacredGold/20 py-4 flex items-center group relative">
      <div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
        {tickerContent.map((value, i) => (
          <div key={i} className="flex items-center">
            <span className="font-display uppercase tracking-widest text-sacredGold text-sm px-6">
              {value}
            </span>
            <span className="text-sacredGold/50 text-xs">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
