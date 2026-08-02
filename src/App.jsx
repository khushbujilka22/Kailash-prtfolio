import React, { useEffect } from "react";
import Lenis from "lenis";
import { Toaster } from "sonner";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Manifesto from "./components/sections/Manifesto";
import Expertise from "./components/sections/Expertise";
import MarqueeStrip from "./components/sections/MarqueeStrip";
import ProductGallery from "./components/sections/ProductGallery";
import AreasOfWork from "./components/sections/AreasOfWork";
import Contact from "./components/sections/Contact";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="App bg-[#0A0A0A] text-[#F4F4F5] min-h-screen">
      <div className="grain" aria-hidden="true" />
      <Toaster
        position="bottom-right"
        theme="dark"
        toastOptions={{
          style: {
            borderRadius: 0,
            background: "#111111",
            border: "1px solid #2A2A2A",
            color: "#F4F4F5",
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "12px",
          },
        }}
      />
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Expertise />
        <MarqueeStrip />
        <ProductGallery />
        <AreasOfWork />
        <Contact />
      </main>
    </div>
  );
}
