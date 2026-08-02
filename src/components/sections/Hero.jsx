import React from "react";
import { ArrowRight, ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-[105px] pb-12 bg-black overflow-hidden select-none border-none outline-none">
      {/* Whole background CNC machining image extending fully behind header */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 scale-105 transition-transform duration-1000"
        style={{ backgroundImage: `url('/images/hero_bg.jpg')` }}
      />
      
      {/* Smooth side gradient overlay so text remains sharp while right machine details shine through */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />

      {/* Hero Content Layer - Flush Left Aligned Container with 15px top spacing below header */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-12 flex-1 flex flex-col justify-center pt-[15px]">
        {/* Top Tagline with 15px top margin */}
        <div className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#FF4500] uppercase mb-3 font-bold">
          EST. PRECISION ENGINEERING
        </div>

        {/* Big Bold Heading matching reference screenshot */}
        <h1 className="font-black text-6xl sm:text-8xl lg:text-[125px] xl:text-[145px] leading-[0.82] tracking-[-0.04em] text-left uppercase font-['Cabinet_Grotesk',sans-serif]">
          <span className="block text-white drop-shadow-lg">KAILASH</span>
          <span className="block text-white drop-shadow-lg">ENGINEERING</span>
          <span className="block text-[#FF4500] drop-shadow-lg">WORKS</span>
        </h1>
      </div>

      {/* Bottom Bar Layer */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-12 pt-6">
        {/* Thin Divider Line */}
        <div className="w-full h-[1px] bg-white/20 mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          {/* Bottom Left Paragraph */}
          <p className="text-zinc-200 text-sm sm:text-base font-sans font-medium leading-relaxed max-w-md drop-shadow">
            Precision-machined components engineered to the highest international standards — for a wide range of industries.
          </p>

          {/* Bottom Center Scroll Indicator */}
          <div 
            onClick={() => scrollTo("manifesto")}
            className="flex flex-col items-center justify-center cursor-pointer group hover:opacity-80 transition-opacity"
          >
            <span className="font-mono text-[10px] tracking-[0.3em] text-zinc-300 uppercase mb-1">
              SCROLL
            </span>
            <ArrowDown className="w-4 h-4 text-[#FF4500] group-hover:translate-y-1 transition-transform" />
          </div>

          {/* Bottom Right CTA Button */}
          <div className="flex justify-start md:justify-end">
            <button
              onClick={() => scrollTo("contact")}
              className="px-8 py-4 bg-[#FF4500] hover:bg-[#FF5714] text-black font-extrabold font-mono text-xs uppercase tracking-widest flex items-center gap-3 transition-all duration-300 shadow-lg shadow-[#FF4500]/30"
            >
              REQUEST A QUOTE <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
