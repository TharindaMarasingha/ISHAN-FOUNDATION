import { CountUp } from "../ui/CountUp";

const STATS = [
  { value: 150, label: "Acres of Pristine Land", suffix: "" },
  { value: 0, label: "Carbon Footprint Target", suffix: "" },
  { value: 100, label: "Integrated Wellness & Living", suffix: "%" },
  { value: 1, label: "Unified Global Community", suffix: "" },
];

export function StatsScale() {
  return (
    <section className="py-24 px-6 md:px-12 bg-darkBrown border-y border-burntOrange/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, index) => (
            <CountUp
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 0.15}
              className="flex flex-col items-center text-center p-6 border-l border-burntOrange/20"
              valueClassName="font-display font-light text-6xl md:text-7xl text-sacredGold mb-4 flex items-baseline"
              labelClassName="font-sans text-xs uppercase tracking-[0.2em] text-peach/80"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
