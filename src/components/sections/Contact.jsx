import React, { useState } from "react";
import { CONTACT } from "../../data";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock, Send, ExternalLink, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    // Regex checking for valid format name@domain.extension
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, email: value });
    if (emailError) {
      if (validateEmail(value)) {
        setEmailError("");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Strict Email Validation Check
    if (!validateEmail(formData.email)) {
      setEmailError("Please enter a valid email address (e.g. name@domain.com)");
      toast.error("Invalid email address! Please enter a valid email.");
      return;
    }

    setEmailError("");
    
    // Construct prefilled mailto link to send email directly to kailashengineeringworks2022@gmail.com
    const subject = encodeURIComponent(`New Inquiry from ${formData.name} (${formData.company || 'Individual'})`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'N/A'}\n\nSpecifications / Requirements:\n${formData.message}`
    );
    
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    
    toast.success("Opening email client to send inquiry to " + CONTACT.email);
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <span className="text-xs font-mono text-[#FF4500] uppercase tracking-widest">[ GET IN TOUCH ]</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-100 mt-2 mb-6">
            REQUEST A QUOTE
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-8">
            Have custom technical specifications or CAD drawings? Send us your requirement for a competitive quote.
          </p>

          <div className="space-y-6 font-mono text-xs">
            {/* Email link */}
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-4 text-zinc-300 hover:text-[#FF4500] transition-colors group">
              <Mail className="w-4 h-4 text-[#FF4500]" />
              <span>{CONTACT.email}</span>
            </a>

            {/* Phone link */}
            <a href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`} className="flex items-center gap-4 text-zinc-300 hover:text-[#FF4500] transition-colors group">
              <Phone className="w-4 h-4 text-[#FF4500]" />
              <span>{CONTACT.phone}</span>
            </a>

            {/* Clickable Google Maps Location Link */}
            <a
              href={CONTACT.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 text-zinc-300 hover:text-[#FF4500] transition-colors group leading-relaxed max-w-md"
            >
              <MapPin className="w-4 h-4 text-[#FF4500] shrink-0 mt-0.5" />
              <div className="flex items-center gap-2">
                <span>{CONTACT.address}</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#FF4500] opacity-70 group-hover:opacity-100 shrink-0" />
              </div>
            </a>

            {/* Working Hours */}
            <div className="flex items-center gap-4 text-zinc-300">
              <Clock className="w-4 h-4 text-[#FF4500]" />
              <span>{CONTACT.hours}</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="p-8 bg-[#111111] border border-[#2A2A2A] space-y-4 shadow-2xl">
          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase">Full Name</label>
            <input
              required
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-zinc-900 border border-[#2A2A2A] focus:border-[#FF4500] text-zinc-100 px-4 py-3 text-sm outline-none transition-colors"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase">Email Address</label>
            <input
              required
              type="email"
              value={formData.email}
              onChange={handleEmailChange}
              onBlur={() => {
                if (formData.email && !validateEmail(formData.email)) {
                  setEmailError("Please enter a valid email address (e.g. name@domain.com)");
                } else {
                  setEmailError("");
                }
              }}
              className={`w-full bg-zinc-900 border text-zinc-100 px-4 py-3 text-sm outline-none transition-colors ${
                emailError 
                  ? "border-red-500 focus:border-red-500" 
                  : "border-[#2A2A2A] focus:border-[#FF4500]"
              }`}
              placeholder="john@example.com"
            />
            {emailError && (
              <div className="flex items-center gap-1.5 mt-2 text-red-500 font-mono text-xs">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{emailError}</span>
              </div>
            )}
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase">Company Name</label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full bg-zinc-900 border border-[#2A2A2A] focus:border-[#FF4500] text-zinc-100 px-4 py-3 text-sm outline-none transition-colors"
              placeholder="Acme Manufacturing"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase">Specifications / Details</label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-zinc-900 border border-[#2A2A2A] focus:border-[#FF4500] text-zinc-100 px-4 py-3 text-sm outline-none transition-colors"
              placeholder="Specify component material, quantity, and tolerances..."
            />
          </div>

          {/* Theme matched primary CTA button */}
          <button
            type="submit"
            className="w-full py-4 bg-[#FF4500] hover:bg-[#FF5714] text-black font-black font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 transition-all duration-300 shadow-lg shadow-[#FF4500]/25"
          >
            SUBMIT INQUIRY <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
