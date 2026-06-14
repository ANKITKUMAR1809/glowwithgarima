"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Apple, Activity, Moon, Brain, Leaf, Shield, Heart, Sparkles } from "lucide-react";

export default function PillarWheel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  const pillars = [
    {
      title: "Nutrition",
      icon: Apple,
      color: "#34D399",
      lightColor: "#ECFDF5",
      midColor: "#A7F3D0",
      textColor: "#065F46",
      badge: "Healthy Eating",
      description: "Nourishing whole foods, balanced macronutrients, and simple home-cooked meals tailored to your biology. No starvation, skipping meals, or crash diets.",
      bullets: [
        "Focus on thyroid-boosting minerals and raw digestive enzymes.",
        "Home-cooked options using regular grocery store ingredients.",
        "Keeps hunger hormones stable to avoid sudden sweet cravings."
      ]
    },
    {
      title: "Physical Activity",
      icon: Activity,
      color: "#FB923C",
      lightColor: "#FFF7ED",
      midColor: "#FED7AA",
      textColor: "#C2410C",
      badge: "Movement",
      description: "Home-friendly movement, progressive strength training, and active living tailored to boost your metabolic rate safely without physical exhaustion.",
      bullets: [
        "15-30 min routines built for busy working women.",
        "Targets body composition shift, fat loss and core strength.",
        "Reverses sluggish metabolic rate caused by years of sitting."
      ]
    },
    {
      title: "Recovery & Rest",
      icon: Moon,
      color: "#818CF8",
      lightColor: "#EEF2FF",
      midColor: "#C7D2FE",
      textColor: "#3730A3",
      badge: "Sleep & Reset",
      description: "Prioritizing deep sleep, circadian rhythm alignment, and restorative rest (including ancient Yog Nidra) to reset cellular repair and hormone balance.",
      bullets: [
        "Yog Nidra guidelines to activate conscious deep sleep state.",
        "Controls leptin and ghrelin to stabilize daily food intake.",
        "Lowers overall internal physical inflammation."
      ]
    },
    {
      title: "Stress Management",
      icon: Brain,
      color: "#60A5FA",
      lightColor: "#EFF6FF",
      midColor: "#BFDBFE",
      textColor: "#1E40AF",
      badge: "Mindfulness",
      description: "Regulating cortisol levels through conscious breathing, mindfulness, and nervous system regulation to unlock natural fat loss blocks.",
      bullets: [
        "Guided breathing checks to instantly halt stress triggers.",
        "Prevents storage of high-cortisol stubborn abdominal fat.",
        "Improves daily energy, mental focus, and mood stability."
      ]
    },
    {
      title: "Environment",
      icon: Leaf,
      color: "#84CC16",
      lightColor: "#F7FEE7",
      midColor: "#BEF264",
      textColor: "#3F6212",
      badge: "Lifestyle",
      description: "Cultivating a supportive physical and emotional space, reducing daily endocrine disruptors, and structuring clean surroundings.",
      bullets: [
        "Assesses chemical toxins impacting your thyroid conversion.",
        "Builds a supportive structure that makes healthy choices automated.",
        "Focuses on internal positivity and stress boundaries."
      ]
    },
    {
      title: "Gut Health",
      icon: Shield,
      color: "#A855F7",
      lightColor: "#FAF5FF",
      midColor: "#E9D5FF",
      textColor: "#6B21A8",
      badge: "Digestion",
      description: "Restoring digestive health, optimizing nutrient absorption, and strengthening gut microflora to improve immunity and hormonal harmony.",
      bullets: [
        "Reverses years of constipation, bloating, and leaky gut.",
        "Ensures complete absorption of thyroid and PCOD supplements.",
        "Strengthens the gut-brain axis to heal mental blockages."
      ]
    },
    {
      title: "Habit Transformation",
      icon: Heart,
      color: "#FB7185",
      lightColor: "#FFF1F2",
      midColor: "#FECDD3",
      textColor: "#BE123C",
      badge: "Consistency",
      description: "Building permanent routines through micro-habits, accountability trackers, and daily progress to ensure long-term sustainability.",
      bullets: [
        "Custom habit checksheets customized by Coach Garima.",
        "Daily WhatsApp accountability to prevent regression.",
        "Turns new eating patterns into automatic lifelong habits."
      ]
    }
  ];

  // Auto-rotate pillars
  useEffect(() => {
    if (!isAutoRotating) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 7);
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoRotating]);

  const activePillar = pillars[activeIndex];

  // SVG wheel dimensions
  const size = 460;
  const center = size / 2;
  const outerR = 190;
  const innerR = 75;
  const nodeR = 38;

  // Helper: get position on circle
  const getPos = (index, radius) => {
    const angle = ((index * 360) / 7 - 90) * (Math.PI / 180);
    return {
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
    };
  };

  // Helper: build arc segment path (donut slice)
  const getSlicePath = (index) => {
    const gap = 3; // gap degrees between slices
    const sliceAngle = 360 / 7;
    const startDeg = -90 - sliceAngle / 2 + index * sliceAngle + gap / 2;
    const endDeg = startDeg + sliceAngle - gap;

    const toRad = (d) => (d * Math.PI) / 180;

    const outerStart = { x: center + outerR * Math.cos(toRad(startDeg)), y: center + outerR * Math.sin(toRad(startDeg)) };
    const outerEnd = { x: center + outerR * Math.cos(toRad(endDeg)), y: center + outerR * Math.sin(toRad(endDeg)) };
    const innerStart = { x: center + innerR * Math.cos(toRad(startDeg)), y: center + innerR * Math.sin(toRad(startDeg)) };
    const innerEnd = { x: center + innerR * Math.cos(toRad(endDeg)), y: center + innerR * Math.sin(toRad(endDeg)) };

    return `M ${outerStart.x} ${outerStart.y} A ${outerR} ${outerR} 0 0 1 ${outerEnd.x} ${outerEnd.y} L ${innerEnd.x} ${innerEnd.y} A ${innerR} ${innerR} 0 0 0 ${innerStart.x} ${innerStart.y} Z`;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl mx-auto">
      {/* Left: Interactive SVG Wheel */}
      <div className="flex justify-center items-center">
        <div className="w-full max-w-[480px] aspect-square relative select-none">
          <svg
            viewBox="-65 -60 590 580"
            className="w-full h-full"
            style={{ filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.06))" }}
          >
            <defs>
              {/* Glow filters for each pillar */}
              {pillars.map((p, i) => (
                <filter key={`glow-${i}`} id={`glow-${i}`} x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feFlood floodColor={p.color} floodOpacity="0.4" />
                  <feComposite in2="blur" operator="in" />
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              ))}

              {/* Subtle radial gradient for center */}
              <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fff" />
                <stop offset="70%" stopColor="#FFF5F7" />
                <stop offset="100%" stopColor="#FFE4EC" />
              </radialGradient>

              {/* Rotating shimmer for active slice */}
              <linearGradient id="shimmer" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="50%" stopColor="white" stopOpacity="0.15" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Decorative outer ring - dashed */}
            <circle
              cx={center}
              cy={center}
              r={outerR + 16}
              fill="none"
              stroke="#F9D5E0"
              strokeWidth="1"
              strokeDasharray="6 6"
              opacity="0.6"
            />

            {/* Donut Slices */}
            {pillars.map((pillar, index) => {
              const isActive = activeIndex === index;
              const midAngle = ((index * 360) / 7 - 90) * (Math.PI / 180);
              const pushDist = isActive ? 6 : 0;
              const tx = pushDist * Math.cos(midAngle);
              const ty = pushDist * Math.sin(midAngle);

              return (
                <g
                  key={index}
                  onClick={() => {
                    setActiveIndex(index);
                    setIsAutoRotating(false);
                  }}
                  onMouseEnter={() => {
                    setActiveIndex(index);
                    setIsAutoRotating(false);
                  }}
                  onMouseLeave={() => setIsAutoRotating(true)}
                  className="cursor-pointer"
                  style={{
                    transform: `translate(${tx}px, ${ty}px)`,
                    transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                >
                  {/* Slice */}
                  <path
                    d={getSlicePath(index)}
                    fill={isActive ? pillar.midColor : pillar.lightColor}
                    stroke={isActive ? pillar.color : "#F3F4F6"}
                    strokeWidth={isActive ? 2.5 : 1}
                    style={{ transition: "fill 0.3s, stroke 0.3s, stroke-width 0.3s" }}
                    filter={isActive ? `url(#glow-${index})` : undefined}
                  />

                  {/* Shimmer overlay on active */}
                  {isActive && (
                    <path
                      d={getSlicePath(index)}
                      fill="url(#shimmer)"
                      style={{ pointerEvents: "none" }}
                    />
                  )}
                </g>
              );
            })}

            {/* Icons on the donut ring */}
            {pillars.map((pillar, index) => {
              const isActive = activeIndex === index;
              const iconRadius = (innerR + outerR) / 2;
              const pos = getPos(index, iconRadius);
              const Icon = pillar.icon;
              const iconSize = isActive ? 22 : 18;

              return (
                <g key={`icon-${index}`} className="pointer-events-none">
                  {/* Icon bg circle */}
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={isActive ? 24 : 20}
                    fill="white"
                    stroke={isActive ? pillar.color : "#E5E7EB"}
                    strokeWidth={isActive ? 2.5 : 1.5}
                    style={{ transition: "all 0.3s ease" }}
                    filter={isActive ? `url(#glow-${index})` : undefined}
                  />
                  <foreignObject
                    x={pos.x - iconSize / 2}
                    y={pos.y - iconSize / 2}
                    width={iconSize}
                    height={iconSize}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <Icon
                        style={{
                          width: iconSize,
                          height: iconSize,
                          color: isActive ? pillar.color : "#9CA3AF",
                          transition: "color 0.3s",
                        }}
                      />
                    </div>
                  </foreignObject>
                </g>
              );
            })}

            {/* Labels outside the donut */}
            {pillars.map((pillar, index) => {
              const isActive = activeIndex === index;
              const labelRadius = outerR + 32;
              const pos = getPos(index, labelRadius);
              const angle = (index * 360) / 7 - 90;

              // Determine text anchor based on position
              let anchor = "middle";
              if (angle > -60 && angle < 60) anchor = "middle"; // top area
              else if (angle >= 60 && angle <= 120) anchor = "start"; // right area
              else if (angle > 120 && angle < 240) anchor = "middle"; // bottom area
              else anchor = "end"; // left area

              // Split title for multi-word names
              const words = pillar.title.split(" ");

              return (
                <text
                  key={`label-${index}`}
                  x={pos.x}
                  y={pos.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="pointer-events-none select-none"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: isActive ? 800 : 700,
                    fontSize: isActive ? "11px" : "10px",
                    fill: isActive ? pillar.textColor : "#9CA3AF",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    transition: "fill 0.3s, font-size 0.3s",
                  }}
                >
                  {words.map((word, wIdx) => (
                    <tspan
                      key={wIdx}
                      x={pos.x}
                      dy={wIdx === 0 ? (words.length > 1 ? "-5" : "0") : "13"}
                    >
                      {word}
                    </tspan>
                  ))}
                </text>
              );
            })}

            {/* Center circle */}
            <circle cx={center} cy={center} r={innerR - 4} fill="url(#centerGlow)" stroke="#F9D5E0" strokeWidth="2" />
            <circle cx={center} cy={center} r={innerR - 10} fill="white" stroke="#FFE4EC" strokeWidth="1.5" />

            {/* Sparkle decorations in center */}
            <g opacity="0.3" className="pointer-events-none">
              <circle cx={center - 28} cy={center - 28} r="2" fill="#E68A65" />
              <circle cx={center + 30} cy={center - 22} r="1.5" fill="#FB7185" />
              <circle cx={center - 22} cy={center + 26} r="1.8" fill="#A855F7" />
              <circle cx={center + 26} cy={center + 28} r="1.3" fill="#34D399" />
            </g>

            {/* Center text */}
            <text x={center} y={center - 16} textAnchor="middle" className="select-none pointer-events-none">
              <tspan
                style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "36px", fill: "#831843" }}
              >
                7
              </tspan>
            </text>
            <text x={center} y={center + 6} textAnchor="middle" className="select-none pointer-events-none">
              <tspan
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "11px",
                  fill: "#831843",
                  letterSpacing: "0.25em",
                }}
              >
                PILLARS
              </tspan>
            </text>
            <text x={center} y={center + 22} textAnchor="middle" className="select-none pointer-events-none">
              <tspan
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "9px",
                  fill: "#E68A65",
                  letterSpacing: "0.2em",
                }}
              >
                OF HEALTH
              </tspan>
            </text>

            {/* Animated active indicator dot on outer ring */}
            {(() => {
              const indicatorPos = getPos(activeIndex, outerR + 16);
              return (
                <circle
                  cx={indicatorPos.x}
                  cy={indicatorPos.y}
                  r="4"
                  fill={activePillar.color}
                  stroke="white"
                  strokeWidth="2"
                  style={{ transition: "cx 0.5s ease, cy 0.5s ease" }}
                />
              );
            })()}
          </svg>
        </div>
      </div>

      {/* Right: Detail Card */}
      <div className="flex flex-col justify-center min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.97 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="rounded-[2.5rem] relative overflow-hidden"
            style={{
              background: `linear-gradient(145deg, ${activePillar.lightColor} 0%, white 60%, ${activePillar.lightColor}40 100%)`,
              border: `2px solid ${activePillar.midColor}`,
              boxShadow: `0 16px 48px -8px ${activePillar.color}18, 0 4px 16px -4px ${activePillar.color}12`,
            }}
          >
            {/* Decorative SVG blob in corner */}
            <svg className="absolute -top-12 -right-12 w-48 h-48 opacity-20 pointer-events-none" viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="80" fill={activePillar.color} />
              <circle cx="140" cy="60" r="40" fill={activePillar.midColor} />
            </svg>

            {/* Sparkle icon */}
            <div className="absolute top-6 right-6 opacity-10 pointer-events-none">
              <Sparkles style={{ width: 60, height: 60, color: activePillar.color }} />
            </div>

            <div className="relative z-10 p-8 sm:p-10 space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-1 rounded-full"
                    style={{ backgroundColor: activePillar.color }}
                  />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted">
                    Pillar 0{activeIndex + 1} / 07
                  </span>
                </div>
                <span
                  className="text-[10px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider"
                  style={{
                    backgroundColor: activePillar.lightColor,
                    color: activePillar.textColor,
                    border: `1.5px solid ${activePillar.midColor}`,
                  }}
                >
                  {activePillar.badge}
                </span>
              </div>

              {/* Title with icon */}
              <div className="flex items-center gap-4">
                <motion.div
                  initial={{ rotate: -10 }}
                  animate={{ rotate: 0 }}
                  className="p-4 rounded-2xl shadow-md"
                  style={{
                    backgroundColor: activePillar.lightColor,
                    color: activePillar.textColor,
                    border: `1.5px solid ${activePillar.midColor}`,
                  }}
                >
                  {(() => {
                    const Icon = activePillar.icon;
                    return <Icon className="w-7 h-7" />;
                  })()}
                </motion.div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-primary">
                  {activePillar.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-text-muted leading-relaxed font-semibold">
                {activePillar.description}
              </p>

              {/* Bullets with colored dot */}
              <div className="pt-4 border-t space-y-3" style={{ borderColor: `${activePillar.midColor}60` }}>
                <h4 className="text-xs font-bold uppercase tracking-wider" style={{ color: activePillar.textColor }}>
                  How it transforms you:
                </h4>
                <ul className="space-y-2.5">
                  {activePillar.bullets.map((bullet, bIdx) => (
                    <motion.li
                      key={bIdx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: bIdx * 0.1 }}
                      className="flex items-start gap-3 text-sm font-semibold text-text-muted"
                    >
                      <span
                        className="w-2 h-2 rounded-full mt-1.5 shrink-0 shadow-sm"
                        style={{ backgroundColor: activePillar.color }}
                      />
                      <span>{bullet}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Pillar navigation dots */}
              <div className="flex items-center gap-2 pt-2">
                {pillars.map((p, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setActiveIndex(i);
                      setIsAutoRotating(false);
                    }}
                    className="transition-all duration-300 cursor-pointer"
                    style={{
                      width: activeIndex === i ? 24 : 8,
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: activeIndex === i ? p.color : "#E5E7EB",
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
