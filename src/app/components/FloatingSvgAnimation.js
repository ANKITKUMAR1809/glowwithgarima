"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function FloatingSvgAnimation() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setMounted(true);
    
    // Generate particles on client-side to prevent Next.js SSR hydration mismatches
    const items = Array.from({ length: 15 }).map((_, i) => {
      const isLeaf = i % 3 === 0;
      const isSparkle = i % 3 === 1;
      
      return {
        id: i,
        type: isLeaf ? "leaf" : isSparkle ? "sparkle" : "circle",
        left: `${5 + Math.random() * 90}%`,
        size: 15 + Math.random() * 25,
        delay: Math.random() * 6,
        duration: 20 + Math.random() * 20,
        color: isLeaf ? "text-[#75B043]" : isSparkle ? "text-[#FBC02D]" : "text-[#D63384]",
        opacity: 0.04 + Math.random() * 0.08,
      };
    });
    setParticles(items);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute ${p.color}`}
          style={{
            left: p.left,
            bottom: "-15%",
            opacity: p.opacity,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: ["0%", "-110vh"],
            x: [0, (p.id % 2 === 0 ? 40 : -40) * Math.sin(p.id)],
            rotate: [0, p.id % 2 === 0 ? 360 : -360],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        >
          {p.type === "leaf" && (
            <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
              <path d="M17 8C8 10 5.9 16.1 5.9 16.1S9.9 14.1 13 14c2.8-.1 5 1.5 5 1.5S17 11.5 17 8z" />
              <path d="M2 22c5-1 10-6 12-10C12 14 7 15 2 22z" opacity="0.7" />
            </svg>
          )}
          {p.type === "sparkle" && (
            <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
              <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4Z" />
            </svg>
          )}
          {p.type === "circle" && (
            <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
              <circle cx="50" cy="50" r="40" />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
}
