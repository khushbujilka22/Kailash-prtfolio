import React, { useState } from "react";
import { PRODUCTS } from "../../data";
import { ScrollReveal } from "../Reveal";

export default function ProductGallery() {
  const [filter, setFilter] = useState("ALL");

  const categories = ["ALL", "CI Casting", "SG Iron", "CNC Turned", "VMC Machined", "Forging", "MS Component"];

  const filteredProducts =
    filter === "ALL" ? PRODUCTS : PRODUCTS.filter((p) => p.spec.toLowerCase().includes(filter.toLowerCase()));

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
    </section>
  );
}
