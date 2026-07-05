import Link from "next/link";

export function ContactInfo() {
  return (
    <div className="flex flex-col h-full space-y-12 pl-0 lg:pl-12">
      {/* Direct Contact */}
      <div className="flex flex-col space-y-6">
        <h3 className="font-display font-light text-3xl text-deepAmber border-b border-burntOrange/20 pb-4">
          Direct Inquiries
        </h3>
        
        <div className="flex flex-col space-y-1">
          <span className="font-sans text-xs uppercase tracking-widest text-burntOrange">Email</span>
          <Link href="mailto:info@ishanfoundation.lk" className="font-sans font-light text-deepAmber hover:text-mandarin transition-colors">
            info@ishanfoundation.lk
          </Link>
        </div>

        <div className="flex flex-col space-y-1">
          <span className="font-sans text-xs uppercase tracking-widest text-burntOrange">Website</span>
          <Link href="https://ishanfoundation.lk" target="_blank" rel="noopener noreferrer" className="font-sans font-light text-deepAmber hover:text-mandarin transition-colors">
            ishanfoundation.lk
          </Link>
        </div>
      </div>

      {/* Ecosystem Links */}
      <div className="flex flex-col space-y-6 p-8 bg-darkBrown/5 border border-burntOrange/20">
        <h4 className="font-display italic text-xl text-deepAmber mb-2">Explore the Ecosystem</h4>
        <nav className="flex flex-col space-y-4">
          <Link href="/arogya" className="font-sans font-light text-sm text-deepAmber hover:text-burntOrange flex items-center justify-between group">
            Arogya Ashram International
            <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
          </Link>
          <Link href="/uss" className="font-sans font-light text-sm text-deepAmber hover:text-burntOrange flex items-center justify-between group">
            Universal Spiritual Science (USS)
            <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
          </Link>
          <Link href="/samanvaya" className="font-sans font-light text-sm text-deepAmber hover:text-burntOrange flex items-center justify-between group">
            Samanvaya
            <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
          </Link>
          <Link href="/vrindavan" className="font-sans font-light text-sm text-deepAmber hover:text-burntOrange flex items-center justify-between group">
            Sri Vrindavan Project
            <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
          </Link>
        </nav>
      </div>

      {/* Closing Line */}
      <div className="mt-auto pt-8">
        <p className="font-display italic text-sacredGold text-lg leading-relaxed">
          Together, we are cultivating a world where humanity and nature exist in conscious harmony.
        </p>
      </div>
    </div>
  );
}
