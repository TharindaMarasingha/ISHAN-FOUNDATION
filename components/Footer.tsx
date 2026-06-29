import Link from "next/link";

const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Arogya Ashram", href: "/arogya" },
  { label: "Inner Immersion", href: "/samanvaya" },
  { label: "USS", href: "/uss" },
  { label: "Connect", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-darkBrown border-t border-sacredGold/40 text-softApricot mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        <div className="flex flex-col">
          <span className="font-display text-4xl text-sacredGold uppercase tracking-widest">
            ISHAN
          </span>
          <span className="italic text-sm text-softApricot mt-2 opacity-80">
            International Society of Humanity and Nature
          </span>
        </div>
        
        <nav className="flex flex-wrap gap-x-8 gap-y-4">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm tracking-widest uppercase transition-colors duration-300 hover:text-sacredGold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burntOrange focus-visible:ring-offset-2 focus-visible:ring-offset-darkBrown"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-sacredGold/10 overflow-hidden py-4">
        <div className="whitespace-nowrap px-6 animate-pulse-slow opacity-60">
          <p className="text-xs tracking-[0.3em] uppercase">
            Pristine Wisdom · Preventive Wellness · Proactive Wellbeing · Productive Welfare · Collective Consciousness · Shared Responsibilities · Coherent Communities · Sustainable Systems
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs border-t border-sacredGold/10">
        <p className="italic text-sacredGold text-lg font-display">
          "One Humanity · One Nature · One Conscious Future"
        </p>
        <div className="flex flex-col items-center md:items-end text-center md:text-right opacity-60 gap-1 uppercase tracking-widest">
          <p>© 2026 ISHAN – International Society of Humanity and Nature. All Rights Reserved.</p>
          <p>A global movement towards conscious living.</p>
        </div>
      </div>
    </footer>
  );
}
