"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { RevealOnScroll } from "../ui/RevealOnScroll";

export function ContactLayout() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.role) newErrors.role = "Please select your role";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log("Form Submitted:", formData);
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", organization: "", role: "", message: "" });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left: Contact Form */}
        <RevealOnScroll className="lg:col-span-7">
          <h2 className="font-display uppercase tracking-widest text-2xl text-deepAmber mb-8">
            Send a Message
          </h2>

          {isSuccess ? (
            <Card className="bg-sacredGold/10 border-sacredGold/30 text-center py-16">
              <h3 className="font-display italic text-3xl text-burntOrange mb-4">
                Thank You
              </h3>
              <p className="font-sans font-light text-deepAmber">
                Your message has been received. Our team will be in touch with you shortly.
              </p>
              <Button
                variant="ghost"
                onClick={() => setIsSuccess(false)}
                className="mt-8"
              >
                Send Another Message
              </Button>
            </Card>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-sans text-xs uppercase tracking-[0.2em] text-deepAmber mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-peach/50 border ${errors.name ? "border-red-500" : "border-burntOrange/20"} px-4 py-3 font-sans font-light text-deepAmber focus:outline-none focus:border-burntOrange focus:ring-1 focus:ring-burntOrange transition-colors`}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && <p id="name-error" className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block font-sans text-xs uppercase tracking-[0.2em] text-deepAmber mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-peach/50 border ${errors.email ? "border-red-500" : "border-burntOrange/20"} px-4 py-3 font-sans font-light text-deepAmber focus:outline-none focus:border-burntOrange focus:ring-1 focus:ring-burntOrange transition-colors`}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && <p id="email-error" className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="organization" className="block font-sans text-xs uppercase tracking-[0.2em] text-deepAmber mb-2">
                  Organisation (Optional)
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full bg-peach/50 border border-burntOrange/20 px-4 py-3 font-sans font-light text-deepAmber focus:outline-none focus:border-burntOrange focus:ring-1 focus:ring-burntOrange transition-colors"
                />
              </div>

              <div>
                <label htmlFor="role" className="block font-sans text-xs uppercase tracking-[0.2em] text-deepAmber mb-2">
                  I am a... *
                </label>
                <div className="relative">
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className={`w-full appearance-none bg-peach/50 border ${errors.role ? "border-red-500" : "border-burntOrange/20"} px-4 py-3 font-sans font-light text-deepAmber focus:outline-none focus:border-burntOrange focus:ring-1 focus:ring-burntOrange transition-colors rounded-none`}
                    aria-invalid={!!errors.role}
                    aria-describedby={errors.role ? "role-error" : undefined}
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="Individual">Individual</option>
                    <option value="Wellness Practitioner">Wellness Practitioner</option>
                    <option value="Institutional Partner">Institutional Partner</option>
                    <option value="Investor">Investor</option>
                    <option value="Media">Media</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-burntOrange">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
                {errors.role && <p id="role-error" className="text-red-500 text-xs mt-1">{errors.role}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block font-sans text-xs uppercase tracking-[0.2em] text-deepAmber mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full bg-peach/50 border ${errors.message ? "border-red-500" : "border-burntOrange/20"} px-4 py-3 font-sans font-light text-deepAmber focus:outline-none focus:border-burntOrange focus:ring-1 focus:ring-burntOrange transition-colors resize-y`}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && <p id="message-error" className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <div className="pt-4">
                <Button type="submit" variant="primary" disabled={isSubmitting} className="w-full sm:w-auto">
                  {isSubmitting ? "Sending..." : "Submit Inquiry"}
                </Button>
              </div>
            </form>
          )}
        </RevealOnScroll>

        {/* Right: Contact Information */}
        <RevealOnScroll delay={0.2} className="lg:col-span-5 flex flex-col gap-10">
          <div>
            <h2 className="font-display uppercase tracking-widest text-xl text-deepAmber mb-6 border-b border-burntOrange/20 pb-4">
              Direct Contact
            </h2>
            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="font-sans text-[0.65rem] uppercase tracking-[0.2em] text-burntOrange mb-1">General Inquiries</span>
                <a href="mailto:contact@ishan.global" className="font-sans font-light text-deepAmber hover:text-burntOrange transition-colors">
                  contact@ishan.global
                </a>
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-[0.65rem] uppercase tracking-[0.2em] text-burntOrange mb-1">Website</span>
                <a href="https://ishan.global" target="_blank" rel="noopener noreferrer" className="font-sans font-light text-deepAmber hover:text-burntOrange transition-colors">
                  www.ishan.global
                </a>
              </div>
            </div>
          </div>

          <Card className="bg-deepAmber/5 border-none p-6">
            <h2 className="font-display uppercase tracking-widest text-lg text-deepAmber mb-6">
              Explore the Ecosystem
            </h2>
            <nav className="flex flex-col gap-4">
              {[
                { label: "Arogya Ashram", href: "/arogya" },
                { label: "Universal Spiritual Science", href: "/uss" },
                { label: "Samanvaya Immersion", href: "/samanvaya" },
                { label: "Sri Vrindavan Project", href: "/sri-vrindavan" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-sans text-sm font-light text-deepAmber hover:text-burntOrange transition-colors flex items-center group"
                >
                  <span className="w-4 h-px bg-burntOrange/30 mr-3 transition-all duration-300 group-hover:w-6 group-hover:bg-burntOrange" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </Card>

          <div className="pt-6 border-t border-burntOrange/10">
            <p className="font-display italic text-lg text-burntOrange leading-relaxed">
              ISHAN is more than an organization; it is a global movement towards a conscious, harmonised future.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
