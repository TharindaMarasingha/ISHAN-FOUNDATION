"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import Script from "next/script";
import { PackagesHero } from "@/components/samanvaya/PackagesHero";
import { TopographicJourney } from "@/components/samanvaya/TopographicJourney";

const packages = [
  {
    id: "south_island",
    name: "South Island Escape",
    days: "8 Days",
    location: "Galle & Mirissa Coast",
    price: 1000,
    route: ["Negombo", "Mirissa", "Ella", "Kandy", "Negombo"],
    image: "/images/sp1.webp",
    elements: ["Water", "Air"],
    benefits: [
      "Daily sunrise yoga by the ocean",
      "Ayurvedic wellness consultation",
      "Guided coastal meditation",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    id: "whole_island",
    name: "Whole Island Immersion",
    days: "14 Days",
    location: "Comprehensive Sri Lanka Journey",
    price: 2500,
    popular: true,
    route: ["Negombo", "Mirissa", "Ella", "Kandy", "Sigiriya", "Anuradhapura", "Negombo"],
    image: "/images/sp2.webp",
    elements: ["Water", "Air", "Earth"],
    benefits: [
      "Complete 5-elements integration",
      "Exclusive 1-on-1 mentorship",
      "Deep dive into all regions",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: "central_heritage",
    name: "Central Heritage Trail",
    days: "8 Days",
    location: "Kandy & Cultural Triangle",
    price: 1200,
    route: ["Negombo", "Kandy", "Sigiriya", "Anuradhapura", "Negombo"],
    image: "/images/sp3.webp",
    elements: ["Earth", "Fire"],
    benefits: [
      "Immersive ancient temple visits",
      "Silent nature walks in the hills",
      "Evening philosophical discourses",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "What's included?", a: "Each journey includes private transport, curated accommodation, guided retreat practices at every stop, and full support from arrival to departure." },
    { q: "Which journey should I choose?", a: "Whole Island suits those ready for the complete circuit. South Island is an ideal first immersion — coast into mountains. Central Island is for those drawn to heritage, ritual and ascent." },
    { q: "Who is the retreat for?", a: "Samanvaya is held for anyone seeking a guided return to their own energy — no prior practice required, only willingness." },
    { q: "How do I reserve?", a: "Reserve your spot through the button below. A member of our team will confirm details and next steps within 48 hours." },
    { q: "What happens after I enquire?", a: "Our concierge will connect with you to answer any final questions and arrange payment, after which you'll receive your preparation guide." }
  ];

  return (
    <div className="w-full">
      <div className="border-t border-divider">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} className="border-b border-divider bg-white">
              <button 
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
              >
                {/* Text stays dark, only icon provides accent */}
                <span className={`text-base md:text-lg font-display pr-4 transition-colors duration-300 ${isOpen ? 'text-heading' : 'text-heading/60 group-hover:text-heading'}`}>
                  {faq.q}
                </span>
                <span className={`text-[#DE5680] text-2xl font-light shrink-0 transition-transform duration-300`}>
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              
              {/* The Editorial Indent */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-heading/60 font-sans font-light text-sm md:text-base leading-relaxed pl-4 border-l border-heading/10">
                  {faq.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function PackagesPage() {
  const router = useRouter();
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [paypalLoaded, setPaypalLoaded] = useState(false);
  const [paymentPending, setPaymentPending] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    participants: 1,
  });

  const handleReserveClick = (pkgId: string) => {
    setSelectedPackage(pkgId);
    setIsFormOpen(true);
  };

  const selectedPkgData = packages.find((p) => p.id === selectedPackage);

  useEffect(() => {
    if (isFormOpen && paypalLoaded && selectedPkgData && formData.name && formData.email && formData.phone) {
      const container = document.getElementById("paypal-button-container");
      if (container) {
        container.innerHTML = ""; // Clear existing buttons
        // @ts-expect-error - paypal is loaded via script
        if (window.paypal) {
          // @ts-expect-error - paypal is loaded via script
          window.paypal.Buttons({
            createOrder: async () => {
              try {
                const response = await fetch("/api/paypal/create-order", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    packageId: selectedPackage,
                    participants: formData.participants,
                  }),
                });
                
                const orderData = await response.json();
                
                if (orderData.id) {
                  return orderData.id;
                } else {
                  const errorDetail = orderData?.details?.[0];
                  const errorMessage = errorDetail
                    ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
                    : JSON.stringify(orderData);
                  throw new Error(errorMessage);
                }
              } catch (error) {
                console.error(error);
                alert(`Could not initiate PayPal Checkout...${error}`);
              }
            },
            onApprove: async (data: { orderID: string }, actions: { restart: () => void }) => {
              try {
                setPaymentPending(true);
                const response = await fetch("/api/paypal/capture-order", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ 
                    orderID: data.orderID,
                    packageName: selectedPkgData?.name,
                    customerName: formData.name,
                    customerEmail: formData.email,
                    customerPhone: formData.phone,
                    participants: formData.participants,
                    amountPaid: selectedPkgData?.price ? selectedPkgData.price * formData.participants : 0
                  }),
                });

                const orderData = await response.json();
                const errorDetail = orderData?.details?.[0];

                if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
                  return actions.restart();
                } else if (errorDetail) {
                  throw new Error(`${errorDetail.description} (${orderData.debug_id})`);
                } else if (!orderData.purchase_units) {
                  throw new Error(JSON.stringify(orderData));
                } else {
                  // Successful capture!
                  router.push(`/samanvaya/packages/confirmation?orderId=${orderData.id}`);
                }
              } catch (error) {
                console.error(error);
                alert(`Sorry, your transaction could not be processed...${error}`);
              } finally {
                setPaymentPending(false);
              }
            }
          }).render("#paypal-button-container");
        }
      }
    }
  }, [isFormOpen, paypalLoaded, selectedPkgData, formData.participants, formData.name, formData.email, formData.phone, selectedPackage, router]);

  return (
    <div className="-mt-24">
      {/* Load PayPal Script */}
      <Script 
        src={`https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || 'test'}&currency=USD`}
        onLoad={() => setPaypalLoaded(true)}
        strategy="lazyOnload"
      />

      <PackagesHero />

      <div id="packages-content" className="pt-32 md:pt-[120px] pb-24 bg-white relative overflow-clip">


        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-12">
          <SectionHeading
            align="center"
            eyebrow="Samanvaya Immersions"
            heading="Choose Your Journey"
            description="Select the path that resonates with your current needs. Spaces are strictly limited."
          />
        </div>

        <div className="flex flex-col gap-y-16 md:grid md:grid-cols-3 md:gap-x-8 lg:gap-x-12 mb-20">
          {packages.map((pkg, index) => (
            <RevealOnScroll key={pkg.id} delay={index * 0.1}>
              <div className={`relative flex flex-col h-full rounded-3xl ${pkg.popular ? 'p-[2px] bg-gradient-to-br from-[#9FBB90] to-[#d4af37] shadow-xl md:-translate-y-4 z-20 mt-6 md:mt-0' : 'bg-transparent border border-divider shadow-sm z-10'}`}>
                
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1a362d] text-white text-xs font-sans font-bold uppercase tracking-widest py-1.5 px-6 text-center rounded-full z-30 whitespace-nowrap shadow-md">
                    Most Popular
                  </div>
                )}
                
                <div className="relative flex flex-col h-full bg-[#F7F4EC] rounded-[22px] overflow-hidden">
                  <div className="relative h-64 sm:h-72 md:h-48 mx-4 mt-4 overflow-hidden shrink-0 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                  <div className="absolute inset-0 bg-black/10 z-10 transition-opacity hover:opacity-0 duration-500"></div>
                  <Image src={pkg.image || "/images/saman.webp"} alt={pkg.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-700 hover:scale-105" />

                </div>

                
                  <div className={`p-10 flex-grow flex flex-col`}>
                  <div className="flex items-center gap-3 mb-4 mt-2">
                    <div className="text-primary">{pkg.icon}</div>
                    {pkg.elements && pkg.elements.length > 0 && (
                      <div className="text-[10px] font-sans text-primary/80 font-bold tracking-[0.2em] uppercase">
                        {pkg.elements.join(" · ")}
                      </div>
                    )}
                  </div>
                  
                  <div className="text-xs font-sans text-primary font-semibold tracking-widest uppercase mb-2">
                    {pkg.days} • {pkg.location}
                  </div>
                  
                  <h3 className="font-display text-2xl text-heading mb-6">
                    {pkg.name}
                  </h3>
                  
                  <div className="mb-6 flex-grow">
                    <ul className="space-y-4">
                      {pkg.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start text-sm font-sans font-light text-heading/80">
                          <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6 flex flex-wrap items-center gap-y-2 text-[10px] font-sans text-[#285c4d] font-medium">
                      {pkg.route.map((stop, i) => (
                        <React.Fragment key={i}>
                          <span className="flex items-center whitespace-nowrap">
                            <svg className="w-3 h-3 mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {stop}
                          </span>
                          {i < pkg.route.length - 1 && (
                            <span className="mx-1.5 text-secondary opacity-50">&rarr;</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-divider">
                    <div className="flex items-end justify-between mb-6">
                      <div>
                        <span className="text-sm font-sans text-heading/80">from</span>
                        <div className="font-display text-3xl text-heading">${pkg.price}</div>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => handleReserveClick(pkg.id)}
                      className={`w-full py-4 rounded-full font-sans text-xs uppercase tracking-widest transition-colors duration-300 ${
                        pkg.popular 
                          ? 'bg-[#1a362d] text-white hover:brightness-125 [text-shadow:0_1px_3px_rgba(0,0,0,0.3)]' 
                          : 'bg-transparent border border-green-900 text-green-900 hover:bg-green-900 hover:text-white'
                      }`}
                    >
                      Reserve my spot
                    </button>
                  </div>
                </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        </div>

        <TopographicJourney />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 pt-24">
        {/* What's included (Borderless Editorial Concept) */}
        <RevealOnScroll delay={0.2} className="mb-24 mt-12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-display text-heading">What's included</h2>
            </div>
            
            {/* The Borderless Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 md:gap-y-16 gap-x-6 md:gap-x-8 px-4 md:px-0">
              {[
                { name: "Accommodation", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
                { name: "All meals", icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" },
                { name: "Guided daily practices", icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                { name: "Private transport", icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" },
                { name: "Expert guides", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
                { name: "Home practice toolkit", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center justify-start text-center h-full group cursor-default">
                  
                  {/* Icon Container with subtle hover interaction */}
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#F8F7F2] flex items-center justify-center mb-4 md:mb-6 transition-all duration-300 group-hover:bg-[#2C3B2E] group-hover:shadow-xl shrink-0">
                    <svg 
                      className="w-6 h-6 md:w-8 md:h-8 text-[#2C3B2E] transition-colors duration-300 group-hover:text-[#F8F7F2]" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d={item.icon} />
                    </svg>
                  </div>
                  
                  {/* Clean, floating typography */}
                  <h3 className="text-sm md:text-lg font-sans font-medium text-gray-700 tracking-wide leading-snug max-w-[120px] md:max-w-none">
                    {item.name}
                  </h3>
                  
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Meet your guides (Editorial Portrait Concept) */}
        <RevealOnScroll delay={0.2} className="mb-24 mt-12">
          <div className="max-w-6xl mx-auto px-6">
            
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display text-heading">Meet your guides</h2>
            </div>

            {/* The Editorial Gallery */}
            <div className="flex md:grid md:grid-cols-3 gap-6 lg:gap-12 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 pt-4 -mx-6 px-6 md:mx-0 md:px-0 md:pb-0 md:pt-0">
              {[
                {
                  name: "Shreeji Sevakanand",
                  role: "GRANDMASTER GUARDIAN",
                  desc: "International Holistic Wellbeing Mentor",
                  image: "/images/guide_shreeji.jpg"
                },
                {
                  name: "Dr. S. Kobayashi",
                  role: "JAPANESE YOGINI",
                  desc: "Zen Mind-Body Specialist",
                  image: "/images/guide_kobayashi.jpg"
                },
                {
                  name: "Indrani Sharma",
                  role: "HIMALAYAN YOGINI",
                  desc: "Advanced Breathwork Instructor",
                  image: "/images/guide_indrani.jpg"
                }
              ].map((guide, index) => (
                <div 
                  key={index} 
                  className="group relative shrink-0 w-[85vw] sm:w-[60vw] md:w-full aspect-[4/5] overflow-hidden rounded-2xl cursor-pointer snap-center shadow-lg"
                >
                  {/* The Portrait Image */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={guide.image} 
                    alt={guide.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105 grayscale md:group-hover:grayscale-0"
                  />
                  
                  {/* The Bottom Gradient Shadow for Text Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 transition-opacity duration-500 md:group-hover:opacity-100"></div>

                  {/* The Typography */}
                  <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 text-left transform transition-transform duration-500 md:translate-y-2 md:group-hover:translate-y-0">
                    <p className="text-[#F8F7F2]/70 text-[10px] md:text-xs font-sans font-semibold tracking-widest uppercase mb-1.5 md:mb-2">
                      {guide.role}
                    </p>
                    <h3 className="text-2xl font-display text-white mb-1">
                      {guide.name}
                    </h3>
                    <p className="text-[#F8F7F2]/80 text-xs md:text-sm font-sans font-light">
                      {guide.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </RevealOnScroll>

        {/* Guest Feedback (Editorial Float Concept) */}
        <RevealOnScroll delay={0.3} className="mb-24 mt-12 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center mb-20">
              <h2 className="text-4xl font-display text-heading">Guest experiences</h2>
            </div>

            {/* The Borderless Editorial Gallery */}
            <div className="flex md:grid md:grid-cols-3 gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-12 pt-8 -mx-6 px-6 md:mx-0 md:px-0 md:pb-0 md:pt-0">
              {[
                {
                  quote: "The deepest integration of nature and inner silence I have ever experienced. A true homecoming.",
                  author: "SARAH J.",
                  location: "London, UK"
                },
                {
                  quote: "Not just a retreat, but a total reset of my nervous system. The guidance was incredibly profound.",
                  author: "MARK D.",
                  location: "Sydney, AU"
                },
                {
                  quote: "I arrived exhausted and left with a clarity that has stayed with me ever since.",
                  author: "ELENA R.",
                  location: "Berlin, DE"
                }
              ].map((testimonial, index) => (
                <div key={index} className="relative flex flex-col items-start h-full shrink-0 w-[85vw] sm:w-[60vw] md:w-full snap-center">
                  
                  {/* Massive Floating Quote Mark for Background Texture */}
                  <span className="absolute -top-8 -left-2 md:-top-12 md:-left-6 text-8xl md:text-9xl font-display text-surface opacity-100 select-none z-0">
                    &ldquo;
                  </span>
                  
                  {/* The Actual Quote */}
                  <p className="relative z-10 text-base md:text-lg lg:text-xl font-display text-heading/90 italic leading-relaxed mb-8 pr-4 md:pr-0">
                    "{testimonial.quote}"
                  </p>
                  
                  {/* Author Details pushed to the bottom organically */}
                  <div className="mt-auto relative z-10 flex flex-col gap-1">
                    <span className="text-[10px] md:text-xs font-sans font-bold tracking-widest text-heading uppercase">
                      {testimonial.author}
                    </span>
                    <span className="text-[10px] md:text-xs font-sans text-heading/60 tracking-wider">
                      {testimonial.location}
                    </span>
                  </div>
                  
                </div>
              ))}
            </div>

          </div>
        </RevealOnScroll>

        {/* Compare Packages (Editorial Line-Weight Concept) */}
        <RevealOnScroll delay={0.2} className="mb-24 pt-16 md:pt-32 relative">
          <div className="max-w-5xl mx-auto px-6 mb-12">
            
            {/* Section Header */}
            <div className="text-center">
              <h2 className="text-4xl font-display text-heading mb-4">Compare packages</h2>
              <p className="text-heading/80 font-sans font-light text-sm md:text-base px-4">
                Accommodation, all meals, private transport, and expert guides are included in all packages.
              </p>
            </div>
          </div>

          {/* The Editorial Table - Swipeable on Mobile */}
          <div className="w-full overflow-x-auto scrollbar-hide pl-6 md:pl-0">
            <div className="max-w-5xl mx-auto md:px-6">
              <table className="w-full text-left border-collapse min-w-[700px] pr-6 md:pr-0">
                
                {/* Table Header */}
                <thead>
                  <tr className="border-b border-divider">
                    <th className="py-6 pr-6 text-[10px] md:text-xs font-sans font-semibold text-heading/60 uppercase tracking-widest w-1/4 sticky left-0 bg-white z-10 shadow-[4px_0_8px_-4px_rgba(0,0,0,0.05)] md:static md:shadow-none">
                      Key Differences
                    </th>
                    <th className="py-6 px-6 text-base md:text-lg font-display text-heading font-medium w-1/4">
                      South Island
                    </th>
                    <th className="py-6 px-6 text-base md:text-lg font-display text-heading font-medium w-1/4">
                      Central Heritage
                    </th>
                    <th className="py-6 px-6 text-base md:text-lg font-display text-heading font-medium w-1/4">
                      Whole Island
                    </th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                  {[
                    { label: "Duration", south: "8 Days", central: "8 Days", whole: "14 Days" },
                    { label: "Destinations visited", south: "4", central: "4", whole: "7" },
                    { label: "Post-retreat add-ons", south: "—", central: "—", whole: "Included" },
                    { label: "Price", south: "USD 1,250", central: "USD 1,250", whole: "USD 2,100" },
                  ].map((row, index) => (
                    <tr 
                      key={index} 
                      className="border-b border-divider last:border-b-0 transition-colors md:hover:bg-surface/50"
                    >
                      {/* Label Column (Sticky) */}
                      <td className="py-6 md:py-8 pr-6 font-display text-heading text-sm md:text-lg sticky left-0 bg-white z-10 shadow-[4px_0_8px_-4px_rgba(0,0,0,0.05)] md:static md:shadow-none">
                        {row.label}
                      </td>
                      
                      {/* Standard Package Columns */}
                      <td className="py-6 md:py-8 px-6 text-heading/80 font-sans font-light text-sm md:text-base">
                        {row.south}
                      </td>
                      <td className="py-6 md:py-8 px-6 text-heading/80 font-sans font-light text-sm md:text-base">
                        {row.central}
                      </td>
                      
                      {/* Highlighted Premium Package Column */}
                      <td className="py-6 md:py-8 px-6 font-sans font-medium text-primary text-sm md:text-base">
                        {row.whole}
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          </div>

          {/* Bottom Navigation Link */}
          <div className="mt-12 text-center">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="font-sans text-[10px] md:text-xs font-bold text-heading/60 uppercase tracking-widest hover:text-heading transition-colors">
              Back to Packages &uarr;
            </button>
          </div>

        </RevealOnScroll>

        {/* Post-Retreat Add-Ons */}
        <RevealOnScroll delay={0.2} className="mb-24 pt-28 pb-20 md:pt-32 md:pb-48 bg-[url('/images/pac.webp')] bg-cover bg-bottom bg-no-repeat flex items-center justify-center px-6 relative w-[100vw] left-1/2 -translate-x-1/2">
          
          <div className="relative z-10 w-full max-w-sm md:max-w-2xl mx-auto bg-white/90 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-8 md:p-0 rounded-3xl md:rounded-none shadow-lg md:shadow-none border border-white/40 md:border-transparent text-center">
            
            {/* Typography */}
            <h3 className="text-3xl md:text-4xl font-display text-heading mb-3 md:mb-4">
              Continue the journey
            </h3>
            <p className="font-sans text-heading/70 md:text-heading/60 font-light text-sm md:text-base leading-relaxed mb-8 md:mb-10 max-w-md mx-auto">
              Support your integration back home with our post-retreat immersions.
            </p>

            {/* The Buttons: Mobile Stack / Desktop Cloud */}
            <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-3 md:gap-4">
              {['Mid Journey', 'Ishan Glow', 'Ishan Care', 'Ishan Bridge', 'Ishan Circle'].map((item, index) => (
                <a 
                  key={index}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="w-full md:w-auto py-3.5 px-4 md:px-6 md:py-3 rounded-full border border-heading/20 md:border-divider bg-white md:bg-transparent text-[10px] md:text-xs font-sans font-bold tracking-widest uppercase text-heading md:text-heading/60 hover:bg-heading hover:text-white md:hover:border-primary md:hover:bg-primary md:hover:text-white transition-all duration-300 shadow-sm md:shadow-none text-center"
                >
                  {item}
                </a>
              ))}
            </div>

          </div>
        </RevealOnScroll>

        {/* How it works */}
        <RevealOnScroll delay={0.2} className="mb-24 pt-16 md:pt-32 pb-12 md:pb-24 bg-white relative">
          <div className="max-w-5xl mx-auto px-6">
            <h3 className="text-center font-display text-3xl md:text-4xl text-heading mb-16 relative z-20 bg-white inline-block px-4 left-1/2 -translate-x-1/2">
              How it works
            </h3>
            
            <div className="relative">
              {/* Desktop horizontal line */}
              <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[1px] bg-primary/20 z-0"></div>
              
              {/* Mobile vertical line (The Thread) */}
              <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-px bg-primary/15 -translate-x-1/2 z-0"></div>
              
              <div className="flex flex-col md:flex-row justify-between w-full gap-12 md:gap-0 relative z-10">
                {[
                  { num: '01', title: 'Choose your journey', desc: 'Pick the package that fits your time and goals.' },
                  { num: '02', title: 'Reserve your spot', desc: 'Fill in your details and secure your place.' },
                  { num: '03', title: 'Confirm your journey', desc: 'Complete payment and receive your booking confirmation.' },
                  { num: '04', title: 'Begin your experience', desc: 'Arrive in Sri Lanka and start your journey.' }
                ].map((step, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center text-center">
                    
                    {/* The Number Circle */}
                    <div className="w-16 h-16 bg-white border border-primary/20 text-primary font-display text-2xl rounded-full flex items-center justify-center mb-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-transform hover:scale-105 z-10">
                      {step.num}
                    </div>
                    
                    {/* Text Wrappers with bg-white masking */}
                    <div className="bg-white px-4 z-10">
                      <h4 className="font-sans font-bold text-heading text-[10px] md:text-xs uppercase tracking-widest mb-2">
                        {step.title}
                      </h4>
                      <p className="font-sans text-heading/60 font-light text-sm max-w-[240px] mx-auto">
                        {step.desc}
                      </p>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Before you go (Editorial Split Concept) */}
        <RevealOnScroll delay={0.2} className="mb-24 pt-24 bg-white relative">
          <div className="max-w-5xl mx-auto px-8 md:px-12">
            
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl font-display text-heading">Before you go</h2>
            </div>

            {/* The Editorial Split Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-y-0">
              
              {/* Left Column: What to Bring */}
              <div className="md:pr-16 flex flex-col items-start">
                <h3 className="text-[10px] md:text-xs font-sans font-bold tracking-widest text-heading/60 uppercase mb-8">
                  What to bring
                </h3>
                <ul className="space-y-6">
                  {[
                    "Comfortable, breathable clothing",
                    "Sturdy walking shoes",
                    "A reusable water bottle",
                    "Personal toiletries and medication",
                    "A light jacket for cooler evenings"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group">
                      {/* Elegant, thin checkmark */}
                      <svg className="w-5 h-5 text-primary mr-5 mt-0.5 shrink-0 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-heading/80 font-sans font-light text-sm md:text-base leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Good to Know */}
              {/* Note the md:border-l and md:pl-16 which creates the elegant editorial divider */}
              <div className="md:border-l border-divider md:pl-16 flex flex-col items-start">
                <h3 className="text-[10px] md:text-xs font-sans font-bold tracking-widest text-heading/60 uppercase mb-8">
                  Good to know
                </h3>
                <ul className="space-y-6">
                  {[
                    "Small groups, maximum 12 people per journey",
                    "Starting and ending point: Negombo",
                    "Best time to travel: year-round, November to March is driest",
                    "Moderate fitness level recommended, no prior experience needed",
                    "All activities are optional — go at your own pace"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group">
                      {/* Elegant, thin checkmark */}
                      <svg className="w-5 h-5 text-primary mr-5 mt-0.5 shrink-0 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-heading/80 font-sans font-light text-sm md:text-base leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </RevealOnScroll>

        {/* FAQ */}
        <RevealOnScroll delay={0.2} className="pt-16 md:pt-32 pb-12 md:pb-24 bg-white px-6">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-center md:text-left font-display text-3xl md:text-4xl text-heading mb-12">
              Questions before you begin.
            </h3>
            <FaqAccordion />
          </div>
        </RevealOnScroll>
        </div>

        {/* Final CTA (Immersive Split Concept) */}
        <RevealOnScroll delay={0.4} className="w-full">
          <section className="relative w-full flex flex-col lg:flex-row items-stretch bg-white m-0 p-0 pt-28 lg:pt-0 scroll-mt-32" id="reserve">
            
            {/* LEFT COLUMN: The Organic Shaped Image */}
            <div className="w-full lg:w-1/2 relative min-h-[450px] lg:min-h-full p-4 lg:p-8">
              <div className="absolute inset-4 lg:inset-8 rounded-3xl rounded-tr-[5rem] rounded-bl-[2rem] lg:rounded-tl-none lg:rounded-bl-none lg:rounded-tr-[8rem] lg:rounded-br-[3rem] overflow-hidden shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/images/immersive_lotus_cta.jpg" 
                  alt="Samanvaya Serenity" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
            </div>

            {/* RIGHT COLUMN: The Editorial Conversion Area */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 lg:px-16 xl:px-24 py-8 lg:py-24">
              
              <h2 className="text-4xl lg:text-5xl font-display text-heading mb-4 leading-tight">
                Ready to begin your journey?
              </h2>
              <p className="font-sans text-heading/70 font-light mb-8 text-lg">
                Next departure: October 2026 - <span className="font-medium text-heading">3 spots remaining.</span>
              </p>

              <div className="mb-10 w-full">
                {/* Primary CTA (Full width on mobile) */}
                <div className="w-full sm:w-auto mb-6">
                  <button 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="w-full sm:w-auto bg-[#DE5680] hover:bg-[#c74c71] text-white px-10 py-4 rounded-full font-sans font-medium tracking-widest text-xs uppercase transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    RESERVE YOUR SPOT
                  </button>
                </div>
                
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <p className="font-sans text-[10px] sm:text-xs text-heading/50 font-bold tracking-widest uppercase">
                    Secure 256-bit encrypted payment
                  </p>
                </div>
              </div>

              {/* Divider */}
              <hr className="border-divider w-full mb-10" />

              {/* Quote */}
              <blockquote className="text-base sm:text-lg font-display text-heading/80 italic mb-10 border-l-2 border-primary pl-5 leading-relaxed">
                "Energy can neither be created nor destroyed; it can only be transformed."
              </blockquote>

              {/* Secondary Contact Actions (Flex grow on mobile) */}
              <div className="flex flex-wrap gap-3 w-full">
                <a href="https://wa.me/94000000000" target="_blank" rel="noopener noreferrer" className="flex-grow sm:flex-grow-0 justify-center flex items-center gap-2 border border-divider bg-transparent text-heading/70 px-6 py-3 rounded-full text-sm font-sans font-medium hover:border-heading hover:text-heading transition-all group">
                  <svg className="w-4 h-4 group-hover:text-heading" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  <span className="group-hover:text-heading">WhatsApp</span>
                </a>
                <a href="tel:+94000000000" className="flex-grow sm:flex-grow-0 justify-center flex items-center gap-2 border border-divider bg-transparent text-heading/70 px-6 py-3 rounded-full text-sm font-sans font-medium hover:border-heading hover:text-heading transition-all group">
                  <svg className="w-4 h-4 group-hover:text-heading" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <span className="group-hover:text-heading">Call</span>
                </a>
                <a href="mailto:info@ishanfoundation.lk" className="flex-grow sm:flex-grow-0 justify-center flex items-center gap-2 border border-divider bg-transparent text-heading/70 px-6 py-3 rounded-full text-sm font-sans font-medium hover:border-heading hover:text-heading transition-all group">
                  <svg className="w-4 h-4 group-hover:text-heading" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <span className="group-hover:text-heading">Email</span>
                </a>
              </div>

            </div>
          </section>
        </RevealOnScroll>

      {/* Booking Modal */}
      {isFormOpen && selectedPkgData && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-6 md:p-8 bg-black/60 backdrop-blur-sm transition-all duration-500">
          <div className="bg-surface rounded-3xl w-full max-w-sm relative flex flex-col shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] transition-all duration-500">
            <button 
              onClick={() => setIsFormOpen(false)}
              className="absolute top-5 right-5 text-black/50 hover:text-black transition-colors z-10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="p-5 md:p-6">
              <h2 className="font-display text-2xl text-heading mb-1.5">Reserve Your Spot</h2>
              <p className="font-sans text-xs text-heading/80 mb-5">
                {selectedPkgData.name} • ${selectedPkgData.price} per person
              </p>
              
              <div className="space-y-3 mb-5">
                <div>
                  <label className="block font-sans text-[10px] md:text-xs uppercase tracking-widest text-heading mb-1.5">Full Name</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white border-none rounded-xl px-4 py-2 font-sans text-sm focus:ring-2 focus:ring-primary outline-none"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block font-sans text-[10px] md:text-xs uppercase tracking-widest text-heading mb-1.5">Email Address</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white border-none rounded-xl px-4 py-2 font-sans text-sm focus:ring-2 focus:ring-primary outline-none"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block font-sans text-[10px] md:text-xs uppercase tracking-widest text-heading mb-1.5">Phone Number (with country code)</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-white border-none rounded-xl px-4 py-2 font-sans text-sm focus:ring-2 focus:ring-primary outline-none"
                    placeholder="+1 234 567 8900"
                  />
                </div>
                <div>
                  <label className="block font-sans text-[10px] md:text-xs uppercase tracking-widest text-heading mb-1.5">Number of Participants</label>
                  <select 
                    value={formData.participants}
                    onChange={(e) => setFormData({...formData, participants: parseInt(e.target.value)})}
                    className="w-full bg-white border-none rounded-xl px-4 py-2 font-sans text-sm focus:ring-2 focus:ring-primary outline-none"
                  >
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="pt-5 border-t border-divider">
                <div className="flex justify-between items-center mb-5">
                  <span className="font-sans text-sm font-medium text-heading">Total Due Today</span>
                  <span className="font-display text-2xl text-heading">${selectedPkgData.price * formData.participants}</span>
                </div>
                
                {formData.name && formData.email && formData.phone ? (
                  <div className="relative z-0 min-h-[150px]">
                    {paymentPending && (
                      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10 flex items-center justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                      </div>
                    )}
                    <div id="paypal-button-container" className="w-full"></div>
                  </div>
                ) : (
                  <div className="bg-softAccent/30 text-heading p-4 rounded-xl text-sm font-sans text-center">
                    Please fill out all fields above to proceed with secure payment.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

