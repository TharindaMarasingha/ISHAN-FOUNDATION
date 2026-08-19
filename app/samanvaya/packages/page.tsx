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
    { q: "What's included in the package?", a: "Accommodation, all meals, private transportation between destinations, entry fees to included sites, and guidance from our expert teachers throughout the journey." },
    { q: "What's the cancellation policy?", a: "Please contact us for cancellation and refund details, as spaces are strictly limited." },
    { q: "What is the group size?", a: "To ensure deep integration and personal guidance, we keep our journeys intimate with a maximum of 12 guests per group." }
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <div key={i} className="bg-surface rounded-2xl border border-divider shadow-sm overflow-hidden">
          <button 
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
          >
            <span className="font-display text-lg text-heading">{faq.q}</span>
            <svg 
              className={`w-5 h-5 text-primary transform transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} 
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div 
            className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${openIndex === i ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <p className="font-sans text-sm text-heading/80">{faq.a}</p>
          </div>
        </div>
      ))}
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {packages.map((pkg, index) => (
            <RevealOnScroll key={pkg.id} delay={index * 0.1}>
              <div className={`relative flex flex-col h-full rounded-3xl ${pkg.popular ? 'p-[2px] bg-gradient-to-br from-[#9FBB90] to-[#d4af37] shadow-xl md:-translate-y-4 z-20' : 'bg-transparent border border-divider shadow-sm z-10'}`}>
                
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1a362d] text-white text-xs font-sans font-bold uppercase tracking-widest py-1.5 px-6 text-center rounded-full z-30 whitespace-nowrap shadow-md">
                    Most Popular
                  </div>
                )}
                
                <div className="relative flex flex-col h-full bg-[#F7F4EC] rounded-[22px] overflow-hidden">
                  <div className="relative h-48 mx-4 mt-4 overflow-hidden shrink-0 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                  <div className="absolute inset-0 bg-black/10 z-10 transition-opacity hover:opacity-0 duration-500"></div>
                  <Image src={pkg.image || "/images/saman.webp"} alt={pkg.name} fill className="object-cover transition-transform duration-700 hover:scale-105" />

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
        {/* What's included */}
        <RevealOnScroll delay={0.2} className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-center font-display text-3xl text-heading mb-10">What's included</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { label: "Accommodation", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
                { label: "All meals", icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" },
                { label: "Guided daily practices", icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                { label: "Private transport", icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" },
                { label: "Expert guides", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
                { label: "Home practice toolkit", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center p-6 bg-surface rounded-2xl border border-divider text-center transition-transform hover:-translate-y-1 hover:shadow-md">
                  <div className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center mb-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <span className="font-sans text-sm text-heading font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Meet your guides */}
        <RevealOnScroll delay={0.2} className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-center font-display text-3xl text-heading mb-10">Meet your guides</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Shreeji Sevakanand", role: "Grandmaster Guardian", initials: "SS", cred: "International Holistic Wellbeing Mentor", image: "/images/team-sevakanand.jpg" },
                { name: "Dr. S. Kobayashi", role: "Japanese Yogini", initials: "SK", cred: "Zen Mind-Body Specialist", image: null },
                { name: "Indrani Sharma", role: "Himalayan Yogini", initials: "IS", cred: "Advanced Breathwork Instructor", image: null }
              ].map((guide, idx) => (
                <div key={idx} className="flex flex-col items-center p-6 bg-surface rounded-2xl border border-divider text-center">
                  {guide.image ? (
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-4 relative shadow-sm">
                      <Image src={guide.image} alt={guide.name} fill className="object-cover" />
                    </div>
                  ) : (
                    <div className="w-20 h-20 bg-softAccent text-primary font-display text-2xl rounded-full flex items-center justify-center mb-4">
                      {guide.initials}
                    </div>
                  )}
                  <h4 className="font-display text-lg text-heading">{guide.name}</h4>
                  <p className="font-sans text-xs uppercase tracking-widest text-primary mt-1 mb-2">{guide.role}</p>
                  <p className="font-sans text-xs text-heading/70 px-2">{guide.cred}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Guest Feedback */}
        <RevealOnScroll delay={0.3} className="mb-24">
          <div className="max-w-5xl mx-auto px-6">
            <h3 className="text-center font-display text-3xl md:text-4xl text-heading mb-12">Guest experiences</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { quote: "The deepest integration of nature and inner silence I have ever experienced. A true homecoming.", name: "Sarah J.", location: "London, UK" },
                { quote: "Not just a retreat, but a total reset of my nervous system. The guidance was incredibly profound.", name: "Mark D.", location: "Sydney, AU" },
                { quote: "I arrived exhausted and left with a clarity that has stayed with me ever since.", name: "Elena R.", location: "Berlin, DE" }
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-surface p-8 rounded-3xl border border-divider relative">
                  <svg className="w-8 h-8 text-primary/10 absolute top-6 left-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="font-display italic text-lg text-heading leading-relaxed mb-6 relative z-10 pt-4">
                    "{testimonial.quote}"
                  </p>
                  <div className="font-sans text-xs uppercase tracking-widest text-primary font-semibold">{testimonial.name}</div>
                  <div className="font-sans text-[10px] text-heading/60 mt-1">{testimonial.location}</div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Compare Packages */}
        <RevealOnScroll delay={0.2} className="mb-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-10">
              <h3 className="font-display text-3xl md:text-4xl text-heading mb-3">Compare packages</h3>
              <p className="font-sans text-heading/80">Accommodation, all meals, private transport, and expert guides are included in all packages.</p>
            </div>
            
            {/* Desktop Table */}
            <div className="hidden sm:block bg-surface rounded-3xl border border-divider shadow-sm overflow-hidden">
              <table className="w-full text-left font-sans text-sm">
                <thead>
                  <tr className="border-b border-divider bg-white/50">
                    <th className="p-6 font-medium text-heading/80 w-1/4">Key Differences</th>
                    <th className="p-6 font-medium text-heading w-1/4">South Island</th>
                    <th className="p-6 font-medium text-heading w-1/4">Central Heritage</th>
                    <th className="p-6 font-medium text-heading bg-softAccent/40 w-1/4">Whole Island</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5 text-heading/80">
                  <tr>
                    <td className="p-6 font-medium">Duration</td>
                    <td className="p-6">8 Days</td>
                    <td className="p-6">8 Days</td>
                    <td className="p-6 bg-softAccent/40 font-medium text-primary">14 Days</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium">Destinations visited</td>
                    <td className="p-6">4</td>
                    <td className="p-6">4</td>
                    <td className="p-6 bg-softAccent/40 font-medium text-primary">7</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium">Post-retreat add-ons</td>
                    <td className="p-6 text-black/20">—</td>
                    <td className="p-6 text-black/20">—</td>
                    <td className="p-6 bg-softAccent/40 text-primary font-medium">Included</td>
                  </tr>
                  <tr className="bg-surface/20">
                    <td className="p-6 font-medium">Price</td>
                    <td className="p-6 font-display text-xl text-heading">USD 1,250</td>
                    <td className="p-6 font-display text-xl text-heading">USD 1,250</td>
                    <td className="p-6 bg-softAccent/40 font-display text-xl text-heading">USD 2,100</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="sm:hidden space-y-6">
              {[
                { title: 'South Island', days: '8 Days', dests: '4', price: 'USD 1,250', addons: false },
                { title: 'Central Heritage', days: '8 Days', dests: '4', price: 'USD 1,250', addons: false },
                { title: 'Whole Island', days: '14 Days', dests: '7', price: 'USD 2,100', addons: true, popular: true },
              ].map((pkg, i) => (
                <div key={i} className={`bg-surface rounded-3xl border ${pkg.popular ? 'border-primary shadow-md shadow-primary/10 bg-softAccent/40' : 'border-divider shadow-sm'} p-6`}>
                  <h4 className="font-display text-2xl text-heading mb-4">{pkg.title}</h4>
                  <ul className="space-y-3 font-sans text-sm text-heading/80">
                    <li className="flex justify-between border-b border-divider pb-2"><span className="font-medium">Duration</span> <span className={pkg.popular ? "text-primary font-medium" : ""}>{pkg.days}</span></li>
                    <li className="flex justify-between border-b border-divider pb-2"><span className="font-medium">Destinations</span> <span className={pkg.popular ? "text-primary font-medium" : ""}>{pkg.dests}</span></li>
                    <li className="flex justify-between border-b border-divider pb-2"><span className="font-medium">Add-ons included</span> <span className={pkg.addons ? "text-primary font-medium" : "text-black/20"}>{pkg.addons ? 'Yes' : '—'}</span></li>
                    <li className="flex justify-between pt-2"><span className="font-medium">Price</span> <span className="font-display text-lg text-heading">{pkg.price}</span></li>
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="font-sans text-xs uppercase tracking-widest text-primary hover:text-primary transition-colors">
                Back to packages &uarr;
              </button>
            </div>
          </div>
        </RevealOnScroll>

        {/* Post-Retreat Add-Ons */}
        <RevealOnScroll delay={0.2} className="mb-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-softAccent/30 rounded-3xl p-8 md:p-12 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/3">
                <h3 className="font-display text-2xl md:text-3xl text-heading mb-3">Continue the journey</h3>
                <p className="font-sans text-sm text-heading/80">Support your integration back home with our post-retreat immersions.</p>
              </div>
              <div className="md:w-2/3 flex flex-wrap gap-3">
                {['Mid Journey', 'ISHAN GLOW', 'ISHAN CARE', 'ISHAN BRIDGE', 'ISHAN CIRCLE'].map((addon, i) => (
                  <span key={i} className="bg-white border border-primary/20 px-4 py-2 rounded-full font-sans text-xs uppercase tracking-widest text-primary font-semibold shadow-sm">
                    {addon}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* How it works */}
        <RevealOnScroll delay={0.2} className="mb-24">
          <div className="max-w-5xl mx-auto px-6">
            <h3 className="text-center font-display text-3xl md:text-4xl text-heading mb-12">How it works</h3>
            
            <div className="flex flex-col md:flex-row justify-between relative">
              <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[1px] bg-primary/20 z-0"></div>
              
              {[
                { num: '01', title: 'Choose your journey', desc: 'Pick the package that fits your time and goals.' },
                { num: '02', title: 'Reserve your spot', desc: 'Fill in your details and secure your place.' },
                { num: '03', title: 'Confirm your journey', desc: 'Complete payment and receive your booking confirmation.' },
                { num: '04', title: 'Begin your experience', desc: 'Arrive in Sri Lanka and start your journey.' }
              ].map((step, i) => (
                <div key={i} className="flex-1 relative z-10 flex flex-col items-center text-center px-4 mb-10 md:mb-0">
                  <div className="w-16 h-16 bg-surface border border-primary/30 text-primary font-display text-2xl rounded-full flex items-center justify-center mb-6 shadow-sm">
                    {step.num}
                  </div>
                  <h4 className="font-sans font-semibold text-heading text-sm uppercase tracking-widest mb-3">{step.title}</h4>
                  <p className="font-sans text-heading/80 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Before you go */}
        <RevealOnScroll delay={0.2} className="mb-24">
          <div className="max-w-4xl mx-auto px-6">
            <h3 className="text-center font-display text-3xl md:text-4xl text-heading mb-12">Before you go</h3>
            
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 bg-surface rounded-3xl border border-divider p-8 md:p-12 shadow-sm">
              <div className="flex-1">
                <h4 className="font-sans font-semibold text-primary text-sm uppercase tracking-widest mb-6">What to bring</h4>
                <ul className="space-y-4">
                  {[
                    'Comfortable, breathable clothing',
                    'Sturdy walking shoes',
                    'A reusable water bottle',
                    'Personal toiletries and medication',
                    'A light jacket for cooler evenings'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-sm font-sans font-light text-heading/80">
                      <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="hidden md:block w-[1px] bg-black/5"></div>
              
              <div className="flex-1">
                <h4 className="font-sans font-semibold text-primary text-sm uppercase tracking-widest mb-6">Good to know</h4>
                <ul className="space-y-4">
                  {[
                    'Small groups, maximum 12 people per journey',
                    'Starting and ending point: Negombo',
                    'Best time to travel: year-round, November to March is driest',
                    'Moderate fitness level recommended, no prior experience needed',
                    'All activities are optional — go at your own pace'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-sm font-sans font-light text-heading/80">
                      <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* FAQ */}
        <RevealOnScroll delay={0.2} className="mb-24">
          <div className="max-w-3xl mx-auto px-6">
            <h3 className="text-center font-display text-3xl md:text-4xl text-heading mb-12">Frequently asked questions</h3>
            <FaqAccordion />
          </div>
        </RevealOnScroll>
        </div>

        {/* Final CTA */}
        <RevealOnScroll delay={0.4} className="w-full">
          <div className="w-full py-20 md:py-24 px-6 bg-surface border-y border-divider text-center relative overflow-clip scroll-mt-32" id="reserve">
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#DE5680]/10 via-surface to-transparent pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl text-heading mb-4">Ready to begin your journey?</h2>
              <p className="font-sans text-sm text-heading/80 mb-10">Next departure: October 2026 - 3 spots remaining.</p>
              
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-block px-10 py-4 rounded-full font-sans text-xs uppercase tracking-widest bg-[#DE5680] text-white hover:brightness-105 transition-all shadow-md [text-shadow:0_1px_3px_rgba(0,0,0,0.3)] mb-4"
              >
                Reserve your spot
              </button>
              
              <p className="font-sans text-xs text-heading/70 mb-4">Pay a deposit now. Our concierge will contact you within 24 hours.</p>
              
              <div className="flex items-center justify-center text-primary/70 mb-12">
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="font-sans text-[10px] uppercase tracking-widest font-semibold">Secure 256-bit encrypted payment</span>
              </div>
              
              <div className="max-w-xl mx-auto pt-8 border-t border-primary/20">
                <p className="font-display italic text-lg text-heading/80">"Energy can neither be created nor destroyed; it can only be transformed."</p>
              </div>

              <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                <a href="https://wa.me/94000000000" target="_blank" rel="noopener noreferrer" className="flex items-center px-6 py-3 rounded-full border border-primary text-sm font-sans text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat with us
                </a>
                <a href="tel:+94000000000" className="flex items-center px-6 py-3 rounded-full border border-primary text-sm font-sans text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call
                </a>
                <a href="mailto:info@ishanfoundation.lk" className="flex items-center px-6 py-3 rounded-full border border-primary text-sm font-sans text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </a>
              </div>
            </div>
          </div>
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
