import React, { useState } from "react";
import { PRODUCTS } from "../../data";
import { ScrollReveal } from "../Reveal";
import { Hammer, Send } from "lucide-react";

export default function ProductGallery() {
  const [filter, setFilter] = useState("ALL");

  const categories = ["ALL", "CI Casting", "SG Iron", "CNC Turned", "VMC Machined", "Forging", "MS Component"];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  // On CNC Turned press, display all components; otherwise filter by category
  const filteredProducts =
    filter === "ALL" || filter === "CNC Turned"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.spec.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="products" className="py-24 px-6 max-w-7xl mx-auto border-b border-[#2A2A2A]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs font-mono text-[#FF4500] uppercase tracking-widest">[ PRODUCTS & MANUFACTURED PARTS ]</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-100 mt-2">
            MANUFACTURED COMPONENTS
          </h2>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 font-mono text-xs uppercase tracking-wider border transition-colors ${
                filter === cat
                  ? "bg-[#FF4500] text-black border-[#FF4500] font-bold"
                  : "bg-zinc-900 text-zinc-400 border-[#2A2A2A] hover:border-zinc-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Custom UI Banner when Forging category is selected */}
      {filter === "Forging" ? (
        <ScrollReveal className="p-10 sm:p-14 bg-[#111111] border border-[#FF4500]/40 text-center flex flex-col items-center justify-center space-y-6 my-4 shadow-2xl">
          <div className="w-16 h-16 bg-[#FF4500]/10 border border-[#FF4500]/30 rounded-full flex items-center justify-center text-[#FF4500] mb-2">
            <Hammer className="w-8 h-8" />
          </div>
          
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono text-[#FF4500] uppercase tracking-widest font-bold">[ EXPANDING CAPABILITIES ]</span>
            <h3 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
              CUSTOM FORGING COMPONENTS
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              We are expanding our forging component manufacturing capacity! Let us know your custom forging requirements, die specifications, and raw material grades.
            </p>
          </div>

          <button
            onClick={scrollToContact}
            className="mt-4 px-8 py-4 bg-[#FF4500] hover:bg-[#FF5714] text-black font-extrabold font-mono text-xs uppercase tracking-widest flex items-center gap-3 transition-all duration-300 shadow-lg shadow-[#FF4500]/30"
          >
            LET US KNOW YOUR FORGING REQUIREMENTS <Send className="w-4 h-4" />
          </button>
        </ScrollReveal>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.05} className="bg-[#111111] border border-[#2A2A2A] overflow-hidden group hover:border-[#FF4500] transition-colors">
              {/* White studio container background for crisp product visibility */}
              <div className="h-64 bg-white relative overflow-hidden flex items-center justify-center p-4">
                <img
                  src={product.src}
                  alt={product.label}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 bg-black/90 px-3 py-1 text-[10px] font-mono text-white border border-white/20">
                  {product.spec}
                </span>
              </div>
              <div className="p-5 flex items-center justify-between bg-[#111111]">
                <h3 className="font-bold text-zinc-100 text-base">{product.label}</h3>
              </div>
            </ScrollReveal>
          ))}
        </div>
      )}
    </section>
  );
}
