"use client";

import { useState } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

export default function BeforeAfterSlider({ 
  beforeImage = "/portfolio/p1.avif", 
  afterImage = "/portfolio/p3.avif",
  beforeLabel = "Before (Thyroid & Excess Weight)",
  afterLabel = "After (20kg Lost & Balanced Hormones)"
}) {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className="relative w-full max-w-2xl aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-premium border border-pink-100/30 group">
      {/* Before Image (Base) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={beforeImage}
          alt="Before Transformation"
          fill
          priority
          sizes="(max-w-768px) 100vw, 670px"
          className="object-cover pointer-events-none select-none"
        />
        <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold text-white tracking-wider uppercase shadow-sm border border-white/10">
          {beforeLabel}
        </div>
      </div>

      {/* After Image (Clipped Overlay) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden select-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={afterImage}
          alt="After Transformation"
          fill
          priority
          sizes="(max-w-768px) 100vw, 670px"
          className="object-cover pointer-events-none"
        />
        <div className="absolute bottom-6 right-6 bg-primary/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold text-white tracking-wider uppercase shadow-sm border border-pink-400/20">
          {afterLabel}
        </div>
      </div>

      {/* Slider Line Divider */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white pointer-events-none shadow-[0_0_15px_rgba(0,0,0,0.4)]"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Handle Button - custom glowing ring with logo colors */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-2xl border-4 border-white cursor-ew-resize group-hover:scale-105 group-hover:bg-secondary transition-all duration-300">
          {/* Pulsing glow ring */}
          <span className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-50" />
          <MoveHorizontal className="w-6 h-6 animate-pulse" />
        </div>
      </div>

      {/* Accessible Invisible Input Range */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleSliderChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
        aria-label="Before and after transformation slider"
      />
    </div>
  );
}
