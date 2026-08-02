import React, { useState } from "react";
import { CONTACT } from "../../data";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Inquiry sent successfully! We will get back to you shortly.");
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
            <div className="flex items-center gap-4 text-zinc-300">
              <Mail className="w-4 h-4 text-[#FF4500]" />
              <span>{CONTACT.email}</span>
            </div>
            <div className="flex items-center gap-4 text-zinc-300">
              <Phone className="w-4 h-4 text-[#FF4500]" />
              <span>{CONTACT.phone}</span>
            </div>
            <div className="flex items-center gap-4 text-zinc-300">
              <MapPin className="w-4 h-4 text-[#FF4500]" />
              <span>{CONTACT.address}</span>
            </div>
            <div className="flex items-center gap-4 text-zinc-300">
              <Clock className="w-4 h-4 text-[#FF4500]" />
              <span>{CONTACT.hours}</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="p-8 bg-[#111111] border border-[#2A2A2A] space-y-4">
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
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-zinc-900 border border-[#2A2A2A] focus:border-[#FF4500] text-zinc-100 px-4 py-3 text-sm outline-none transition-colors"
              placeholder="john@example.com"
            />
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

          <button
            type="submit"
            className="w-full py-4 bg-[#FF4500] hover:bg-[#E63946] text-black font-bold font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
          >
            Submit Inquiry <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
