"use client";

import Link from "next/link";

const brandText = [
  { text: "GLOW WITH GARIMA", isLink: false },
  { text: "EXPLORE WHAT WE OFFER", isLink: true },
  { text: "1100+ LIVES SHAPED GLOBALLY", isLink: false },
  { text: "REVERSE THYROID & HORMONE IMBALANCES", isLink: false },
  { text: "BROWSE SPECIAL PROGRAMS", isLink: true },
  { text: "5+ YEARS OF EXPERT COACHING EXPERIENCE", isLink: false },
];

const philosophyText = [
  { text: "MIND & BODY SYNERGY", highlight: false },
  { text: "NO STARVATION DIETS", highlight: true },
  { text: "NATURAL THYROID BALANCE", highlight: false },
  { text: "YOG NIDRA & DEEP RECOVERY", highlight: false },
  { text: "SUSTAINABLE LIFESTYLE SHIFTS", highlight: true },
  { text: "HOLISTIC CELLULAR HEALING", highlight: false },
];

// Ribbon 1 (Left Scrolling) Items
const BrandItems = () => (
  <div className="flex items-center gap-12 pr-12">
    {brandText.map((item, idx) => (
      <div key={idx} className="flex items-center gap-12 shrink-0">
        {item.isLink ? (
          <Link 
            href="/offerings" 
            className="text-white hover:text-accent-gold hover:scale-105 active:scale-95 transition-all duration-200 underline decoration-dashed underline-offset-4 decoration-pink-300 hover:decoration-solid cursor-pointer font-extrabold tracking-widest relative group flex items-center gap-2.5"
          >
            {/* Blinking Live Beacon Dot */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-gold"></span>
            </span>
            <span>{item.text}</span>
            <span className="text-[9px] bg-white/10 text-white font-extrabold px-1.5 py-0.5 rounded border border-white/20 group-hover:bg-accent-gold group-hover:text-[#111] group-hover:border-accent-gold transition-all tracking-normal uppercase">
              Go
            </span>
          </Link>
        ) : (
          <span className="text-white/95 tracking-wider font-semibold">
            {item.text}
          </span>
        )}
        <span className="text-accent-gold/80 text-sm font-bold">✦</span>
      </div>
    ))}
  </div>
);

// Ribbon 2 (Right Scrolling) Items
const PhilosophyItems = () => (
  <div className="flex items-center gap-12 pr-12">
    {philosophyText.map((item, idx) => (
      <div key={idx} className="flex items-center gap-12 shrink-0">
        <span className={`tracking-wider font-extrabold ${item.highlight ? 'text-primary' : 'text-text-main/80'}`}>
          {item.text}
        </span>
        <span className="text-primary/40 text-xs">✦</span>
      </div>
    ))}
  </div>
);

export default function TickerBanner() {

  return (
    <div className="relative w-full overflow-hidden py-6 select-none">
      
      {/* Dynamic ambient background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Inline styles for double direction scrolling & hover pause */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes ticker-marquee-left {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes ticker-marquee-right {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .ticker-track-left {
          display: flex;
          width: max-content;
          animation: ticker-marquee-left 32s linear infinite;
        }
        .ticker-track-right {
          display: flex;
          width: max-content;
          animation: ticker-marquee-right 36s linear infinite;
        }
        .ticker-container-left:hover .ticker-track-left {
          animation-play-state: paused;
        }
        .ticker-container-right:hover .ticker-track-right {
          animation-play-state: paused;
        }
      `}} />

      {/* RIBBON 1: Brand Track (Slanted -2deg, scrolling left) */}
      <div className="ticker-container-left w-full overflow-hidden bg-primary-dark py-4 relative z-20 shadow-premium transform -rotate-[2deg] scale-x-105 border-y border-pink-400/20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary to-primary-dark opacity-95 pointer-events-none" />
        <div className="ticker-track-left text-white font-display font-extrabold text-xs md:text-sm uppercase tracking-wider relative z-10">
          <BrandItems />
          <BrandItems />
        </div>
      </div>

      {/* RIBBON 2: Philosophy Track (Slanted +1.5deg, scrolling right, glassmorphism) */}
      <div className="ticker-container-right w-full overflow-hidden bg-[#00A8E8]/8 backdrop-blur-md py-3.5 relative z-10 shadow-md transform rotate-[1.5deg] scale-x-105 -mt-3.5 border-y border-[#00A8E8]/15">
        <div className="ticker-track-right font-display font-bold text-xs uppercase tracking-wider">
          <PhilosophyItems />
          <PhilosophyItems />
        </div>
      </div>

    </div>
  );
}
