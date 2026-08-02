import React from "react";

export default function MarqueeStrip() {
  const items = [
    "PRECISION CNC TURNING",
    "•",
    "VMC MACHINING",
    "•",
    "CASTING & FORGING",
    "•",
    "MICRON ACCURACY",
    "•",
    "CUSTOM COMPONENTS",
    "•",
  ];

  return (
    <div className="py-6 bg-[#111111] border-b border-[#2A2A2A] overflow-hidden whitespace-nowrap">
      <div className="inline-flex gap-8 animate-marquee font-mono text-sm text-zinc-400 uppercase tracking-widest">
        {[...items, ...items, ...items].map((text, index) => (
          <span key={index} className={text === "•" ? "text-[#FF4500]" : ""}>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
