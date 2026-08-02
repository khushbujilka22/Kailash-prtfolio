import React from "react";
import { AREAS } from "../../data";
import { ScrollReveal } from "../Reveal";
import { CheckCircle2 } from "lucide-react";

export default function AreasOfWork() {
  return (
    <section id="capabilities" className="py-24 px-6 max-w-7xl mx-auto border-b border-[#2A2A2A]">
      <div className="mb-12">
        <span className="text-xs font-mono text-[#FF4500] uppercase tracking-widest">[ MATERIALS & SECTORS ]</span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-100 mt-2">
          AREAS OF WORK
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {AREAS.map((area, idx) => (
          <ScrollReveal key={idx} delay={idx * 0.05} className="p-4 bg-[#111111] border border-[#2A2A2A] flex items-center gap-3">
            <CheckCircle2 className="w-4 h-4 text-[#FF4500]" />
            <span className="font-mono text-xs text-zinc-300 uppercase tracking-wider">{area}</span>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
