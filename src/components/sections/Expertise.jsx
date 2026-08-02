import React from "react";
import { EXPERTISE } from "../../data";
import { ScrollReveal } from "../Reveal";
import { Wrench } from "lucide-react";

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 px-6 max-w-7xl mx-auto border-b border-[#2A2A2A]">
      <div className="mb-16">
        <span className="text-xs font-mono text-[#FF4500] uppercase tracking-widest">[ CAPABILITIES ]</span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-100 mt-2">
          MACHINING EXPERTISE
        </h2>
      </div>

      <div className="space-y-4">
        {EXPERTISE.map((item, idx) => (
          <ScrollReveal key={item.code} delay={idx * 0.05} className="p-6 bg-[#111111] border border-[#2A2A2A] hover:border-[#FF4500] flex items-center justify-between group transition-colors">
            <div className="flex items-center gap-6">
              <span className="font-mono text-xs text-[#FF4500] bg-zinc-900 px-3 py-1 border border-[#2A2A2A]">
                {item.code}
              </span>
              <h3 className="text-lg font-bold text-zinc-100 group-hover:text-[#FF4500] transition-colors">
                {item.name}
              </h3>
            </div>
            <Wrench className="w-5 h-5 text-zinc-600 group-hover:text-[#FF4500] transition-colors" />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
