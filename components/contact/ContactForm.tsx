"use client";

import React, { useState } from "react";
import { Button } from "../ui/Button";
type FormData = {
  name: string;
  email: string;
  organisation: string;
  role: string;
  message: string;
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    organisation: "",
    role: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.role) newErrors.role = "Please select an option";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // Clear error on change
    if (errors[e.target.name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-6 w-full" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="font-sans text-xs uppercase tracking-widest text-deepAmber">
            Full Name <span className="text-burntOrange">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`bg-peach border ${errors.name ? 'border-red-500/50' : 'border-burntOrange/20'} rounded-sm px-4 py-3 font-sans font-light text-deepAmber focus:outline-none focus:border-burntOrange focus:ring-1 focus:ring-burntOrange/50 transition-colors`}
            placeholder="Jane Doe"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && <span id="name-error" className="text-xs text-red-500">{errors.name}</span>}
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="font-sans text-xs uppercase tracking-widest text-deepAmber">
            Email Address <span className="text-burntOrange">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`bg-peach border ${errors.email ? 'border-red-500/50' : 'border-burntOrange/20'} rounded-sm px-4 py-3 font-sans font-light text-deepAmber focus:outline-none focus:border-burntOrange focus:ring-1 focus:ring-burntOrange/50 transition-colors`}
            placeholder="jane@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && <span id="email-error" className="text-xs text-red-500">{errors.email}</span>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col space-y-2">
          <label htmlFor="organisation" className="font-sans text-xs uppercase tracking-widest text-deepAmber">
            Organisation <span className="text-deepAmber/40">(Optional)</span>
          </label>
          <input
            type="text"
            id="organisation"
            name="organisation"
            value={formData.organisation}
            onChange={handleChange}
            className="bg-peach border border-burntOrange/20 rounded-sm px-4 py-3 font-sans font-light text-deepAmber focus:outline-none focus:border-burntOrange focus:ring-1 focus:ring-burntOrange/50 transition-colors"
            placeholder="Your Company / Institution"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="role" className="font-sans text-xs uppercase tracking-widest text-deepAmber">
            I am a... <span className="text-burntOrange">*</span>
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className={`bg-peach border ${errors.role ? 'border-red-500/50' : 'border-burntOrange/20'} rounded-sm px-4 py-3 font-sans font-light text-deepAmber focus:outline-none focus:border-burntOrange focus:ring-1 focus:ring-burntOrange/50 transition-colors appearance-none`}
            aria-invalid={!!errors.role}
            aria-describedby={errors.role ? "role-error" : undefined}
          >
            <option value="" disabled>Select an area of interest</option>
            <option value="Wellness Programmes">Wellness Programmes</option>
            <option value="Leadership Development">Leadership Development</option>
            <option value="Educational Initiatives">Educational Initiatives</option>
            <option value="Retreats & Immersive Experiences">Retreats & Immersive Experiences</option>
            <option value="Community Development">Community Development</option>
            <option value="Research & Publications">Research & Publications</option>
            <option value="Institutional Partnerships">Institutional Partnerships</option>
            <option value="Environmental Projects">Environmental Projects</option>
            <option value="Volunteering">Volunteering</option>
            <option value="Professional Collaboration">Professional Collaboration</option>
            <option value="Philanthropic Support">Philanthropic Support</option>
          </select>
          {errors.role && <span id="role-error" className="text-xs text-red-500">{errors.role}</span>}
        </div>
      </div>

      <div className="flex flex-col space-y-2 flex-grow">
        <label htmlFor="message" className="font-sans text-xs uppercase tracking-widest text-deepAmber">
          Message <span className="text-burntOrange">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`bg-peach border ${errors.message ? 'border-red-500/50' : 'border-burntOrange/20'} rounded-sm px-4 py-3 font-sans font-light text-deepAmber focus:outline-none focus:border-burntOrange focus:ring-1 focus:ring-burntOrange/50 transition-colors resize-y min-h-[120px]`}
          placeholder="How can we collaborate?"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && <span id="message-error" className="text-xs text-red-500">{errors.message}</span>}
      </div>

      <div className="pt-4 flex flex-col items-center sm:items-start">
        <Button type="submit" variant="primary" magnetic={false}>
          Submit Inquiry
        </Button>
      </div>
    </form>
  );
}
