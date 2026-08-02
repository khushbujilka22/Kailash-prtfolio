import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#2A2A2A] py-3.5 shadow-xl"
          : "bg-transparent py-6 border-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between transition-all duration-300">
        {/* Brand Logo - Flush Left Aligned */}
        <a href="#" className="flex items-center gap-3 -ml-0.5">
          <div className="w-9 h-9 bg-[#FF4500] text-black font-black flex items-center justify-center font-mono text-base tracking-tight shadow-md">
            K
          </div>
          <span className="font-extrabold text-xl tracking-wider text-white uppercase drop-shadow-lg">
            KAILASH<span className="text-[#FF4500]">.</span>
          </span>
        </a>

        {/* Right Nav with increased vertical gap between nav items and subtext */}
        <div className="hidden md:flex flex-col items-end gap-3">
          <nav className="flex items-center gap-8 text-xs font-mono tracking-widest text-zinc-200">
            <button onClick={() => scrollTo("manifesto")} className="hover:text-[#FF4500] uppercase transition-colors drop-shadow-md">
              WORK
            </button>
            <button onClick={() => scrollTo("products")} className="hover:text-[#FF4500] uppercase transition-colors drop-shadow-md">
              PRODUCTS
            </button>
            <button onClick={() => scrollTo("contact")} className="hover:text-[#FF4500] uppercase transition-colors drop-shadow-md">
              CONTACT
            </button>
          </nav>
          {/* CNC / VMC Subtext with increased top spacing */}
          <div className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase font-medium drop-shadow-sm">
            CNC / VMC / CASTING / FORGING
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-zinc-300 hover:text-white"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#111111]/95 backdrop-blur-md px-6 py-6 space-y-4 border-b border-[#2A2A2A]">
          <button onClick={() => scrollTo("manifesto")} className="block w-full text-left font-mono text-sm uppercase tracking-wider text-zinc-300 hover:text-[#FF4500]">
            WORK
          </button>
          <button onClick={() => scrollTo("products")} className="block w-full text-left font-mono text-sm uppercase tracking-wider text-zinc-300 hover:text-[#FF4500]">
            PRODUCTS
          </button>
          <button onClick={() => scrollTo("contact")} className="block w-full text-left font-mono text-sm uppercase tracking-wider text-zinc-300 hover:text-[#FF4500]">
            CONTACT
          </button>
        </div>
      )}
    </header>
  );
}
