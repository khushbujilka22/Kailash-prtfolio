import React from "react";
import { MANIFESTO } from "../../data";
import { ScrollReveal } from "../Reveal";

export default function Manifesto() {
  return (
    <section id="manifesto" className="py-24 px-6 max-w-7xl mx-auto border-b border-[#2A2A2A]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-xs font-mono text-[#FF4500] uppercase tracking-widest">[ OUR MANIFESTO ]</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-100 mt-2">
            BUILT ON EXCELLENCE
          </h2>
        </div>
        <p className="text-zinc-400 text-sm font-mono max-w-md">
          Our core principles guide every cut, turn, and finish we deliver to industries worldwide.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {MANIFESTO.map((item, idx) => (
          <ScrollReveal key={item.no} delay={idx * 0.1} className="p-8 bg-[#111111] border border-[#2A2A2A] relative group hover:border-[#FF4500] transition-colors">
            <div className="text-4xl font-mono font-extrabold text-[#FF4500]/40 group-hover:text-[#FF4500] transition-colors mb-6">
              {item.no}
            </div>
            <h3 className="text-xl font-bold text-zinc-100 mb-3">{item.title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{item.body}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
