"use client";

import { motion } from "framer-motion";

export default function BloomingLotus() {
  // SVG ViewBox 0 0 100 100
  // Standard anchor origin for all petals is bottom center: 50% 80% (which matches coordinate 50, 80)
  
  // Animation presets
  const petalTransition = (delay) => ({
    type: "spring",
    stiffness: 70,
    damping: 15,
    delay: delay,
    duration: 1.5
  });

  const breatheTransition = {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut"
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none group">
      {/* Ambient background aura glow */}
      <motion.div 
        animate={{
          scale: [0.95, 1.05, 0.95],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={breatheTransition}
        className="absolute w-40 h-40 rounded-full bg-primary/20 blur-2xl pointer-events-none"
      />

      {/* SVG Canvas */}
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full filter drop-shadow-[0_4px_20px_rgba(214,51,132,0.25)] relative z-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Radial Gradient for central glow */}
          <radialGradient id="lotusCenterGlow" cx="50%" cy="80%" r="50%">
            <stop offset="0%" stopColor="#FFF" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#F15BB5" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#D63384" stopOpacity="0" />
          </radialGradient>

          {/* Gradients for petals */}
          <linearGradient id="gradOuter" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#D63384" />
            <stop offset="100%" stopColor="#FF8FBE" />
          </linearGradient>

          <linearGradient id="gradMid" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#8B1E58" />
            <stop offset="60%" stopColor="#D63384" />
            <stop offset="100%" stopColor="#F15BB5" />
          </linearGradient>

          <linearGradient id="gradInner" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#8B1E58" />
            <stop offset="50%" stopColor="#D63384" />
            <stop offset="100%" stopColor="#FFF" />
          </linearGradient>
        </defs>

        {/* Central Ambient Glow */}
        <ellipse cx="50" cy="78" rx="20" ry="10" fill="url(#lotusCenterGlow)" />

        {/* 1. OUTERMOST PETALS - Bloom first */}
        {/* Left Outer Petal */}
        <motion.path
          d="M50 80 C20 85, 5 78, 10 65 C18 68, 38 78, 50 80 Z"
          fill="url(#gradOuter)"
          opacity="0.85"
          initial={{ scale: 0, rotate: -25, transformOrigin: "50px 80px" }}
          animate={{ scale: 1, rotate: 0 }}
          whileHover={{ scale: 1.05, rotate: -3 }}
          transition={petalTransition(0)}
        />
        
        {/* Right Outer Petal */}
        <motion.path
          d="M50 80 C80 85, 95 78, 90 65 C82 68, 62 78, 50 80 Z"
          fill="url(#gradOuter)"
          opacity="0.85"
          initial={{ scale: 0, rotate: 25, transformOrigin: "50px 80px" }}
          animate={{ scale: 1, rotate: 0 }}
          whileHover={{ scale: 1.05, rotate: 3 }}
          transition={petalTransition(0)}
        />

        {/* 2. MID-LAYER PETALS - Bloom second */}
        {/* Left Mid Petal */}
        <motion.path
          d="M50 80 C28 82, 10 70, 18 50 C26 55, 40 72, 50 80 Z"
          fill="url(#gradMid)"
          opacity="0.95"
          initial={{ scale: 0, rotate: -15, transformOrigin: "50px 80px" }}
          animate={{ scale: 1, rotate: 0 }}
          whileHover={{ scale: 1.05, rotate: -2 }}
          transition={petalTransition(0.25)}
        />

        {/* Right Mid Petal */}
        <motion.path
          d="M50 80 C72 82, 90 70, 82 50 C74 55, 60 72, 50 80 Z"
          fill="url(#gradMid)"
          opacity="0.95"
          initial={{ scale: 0, rotate: 15, transformOrigin: "50px 80px" }}
          animate={{ scale: 1, rotate: 0 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={petalTransition(0.25)}
        />

        {/* 3. INNER PETALS - Bloom third */}
        {/* Left Inner Petal */}
        <motion.path
          d="M50 80 C32 75, 20 58, 30 40 C38 48, 45 68, 50 80 Z"
          fill="url(#gradInner)"
          initial={{ scale: 0, rotate: -8, transformOrigin: "50px 80px" }}
          animate={{ scale: 1, rotate: 0 }}
          whileHover={{ scale: 1.05, rotate: -1 }}
          transition={petalTransition(0.5)}
        />

        {/* Right Inner Petal */}
        <motion.path
          d="M50 80 C68 75, 80 58, 70 40 C62 48, 55 68, 50 80 Z"
          fill="url(#gradInner)"
          initial={{ scale: 0, rotate: 8, transformOrigin: "50px 80px" }}
          animate={{ scale: 1, rotate: 0 }}
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={petalTransition(0.5)}
        />

        {/* 4. CENTER CROWN PETAL - Blooms last */}
        <motion.path
          d="M50 80 C40 60, 42 35, 50 20 C58 35, 60 60, 50 80 Z"
          fill="url(#gradInner)"
          initial={{ scale: 0, transformOrigin: "50px 80px" }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.08 }}
          transition={petalTransition(0.7)}
        />

        {/* Center glowing pistil points */}
        <motion.circle
          cx="50"
          cy="72"
          r="2.5"
          fill="#FFF"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.1, type: "spring" }}
        />
        <motion.circle
          cx="45"
          cy="73"
          r="1.5"
          fill="#FBC02D"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, type: "spring" }}
        />
        <motion.circle
          cx="55"
          cy="73"
          r="1.5"
          fill="#FBC02D"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, type: "spring" }}
        />
      </svg>

      {/* Floating Sparkle Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-pink-100"
          style={{
            bottom: "22%",
            left: `${35 + i * 6}%`,
          }}
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{
            y: [-10, -60 - ((i * 7) % 30)],
            x: [0, ((i * 13) % 20) - 10],
            opacity: [0, 0.9, 0],
            scale: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3 + ((i * 11) % 3) * 0.7,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
