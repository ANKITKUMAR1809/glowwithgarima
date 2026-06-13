"use client";

import { useState, useEffect, useRef } from "react";
import { 
  Sparkles, 
  Timer, 
  Smile, 
  Award, 
  RotateCcw, 
  ArrowRight, 
  Play, 
  Flame, 
  Info,
  ChevronRight
} from "lucide-react";

export default function FaceYogaGame({ onOpenBooking }) {
  const [gameState, setGameState] = useState("SELECT"); // SELECT, PLAY, RESULTS
  const [selectedRoutine, setSelectedRoutine] = useState(null);
  const [progress, setProgress] = useState(0); // 0 to 100
  const [isHolding, setIsHolding] = useState(false);
  const [glowScore, setGlowScore] = useState(0);
  const [breathText, setBreathText] = useState("Breathe In...");
  const [particles, setParticles] = useState([]);
  
  const timerRef = useRef(null);
  const particleIdRef = useRef(0);

  const routines = [
    {
      id: "jawline",
      title: "Jawline Sculptor",
      sub: "The Fish Pose",
      desc: "Suck in your cheeks and lips to make a fish face, then tilt your head back slightly to stretch your neck and throat.",
      duration: 10,
      icon: "👄",
      focus: "Double Chin & Jaw Toning",
      steps: "Suck in cheeks ➜ Tilt head back ➜ Hold & breathe deep"
    },
    {
      id: "cheeks",
      title: "Cheek Volume Boost",
      sub: "The Balloon Pose",
      desc: "Fill your mouth with air, puffing your cheeks fully. Move the air from cheek to cheek while breathing.",
      duration: 10,
      icon: "🎈",
      focus: "Puffiness & Cheek Lift",
      steps: "Puff cheeks fully ➜ Shift air left/right ➜ Maintain hold"
    },
    {
      id: "forehead",
      title: "Forehead Smoother",
      sub: "The V-Press",
      desc: "Form a 'V' shape with index and middle fingers, pressing them on the brows. Lift eyes up, pushing forehead down.",
      duration: 10,
      icon: "👁️",
      focus: "Stress Lines & Brow Lift",
      steps: "Place fingers on brows ➜ Look up ➜ Press gently & breathe"
    },
    {
      id: "detox",
      title: "Circulation Reviver",
      sub: "The Lion's Breath",
      desc: "Inhale deep, open your mouth wide, stick your tongue out towards the chin, and exhale forcefully with a 'Ha' sound.",
      duration: 10,
      icon: "🦁",
      focus: "Facial Detox & Muscle Relief",
      steps: "Inhale deep ➜ Open mouth wide ➜ Stick tongue out & exhale"
    }
  ];

  // Particle creation helper
  const spawnParticle = () => {
    const angle = Math.random() * Math.PI * 2;
    const speed = 1.5 + Math.random() * 2.5;
    return {
      id: particleIdRef.current++,
      x: 0,
      y: 0,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size: 6 + Math.random() * 12,
      opacity: 1,
      color: Math.random() > 0.5 ? "text-accent-gold" : "text-primary-light"
    };
  };

  // Breathing cycle simulation (visual cue only)
  useEffect(() => {
    let breathInterval;
    if (gameState === "PLAY") {
      let cycle = 0;
      breathInterval = setInterval(() => {
        cycle = (cycle + 1) % 2;
        setBreathText(cycle === 0 ? "Breathe In... (Expand)" : "Breathe Out... (Contract)");
      }, 4000);
    }
    return () => clearInterval(breathInterval);
  }, [gameState]);

  // Main gameplay holding ticker
  useEffect(() => {
    if (isHolding && gameState === "PLAY") {
      timerRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timerRef.current);
            setIsHolding(false);
            setGlowScore(Math.floor(92 + Math.random() * 7)); // Score between 92% and 99%
            setGameState("RESULTS");
            return 100;
          }
          
          // Spawn stars while holding
          if (Math.random() > 0.4) {
            setParticles((prevP) => [...prevP, spawnParticle()]);
          }

          return prev + 1.25; // Completes in about 8 seconds
        });
      }, 100);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isHolding, gameState]);

  // Particle motion tick
  useEffect(() => {
    let animFrame;
    if (particles.length > 0) {
      const updateParticles = () => {
        setParticles((prevP) =>
          prevP
            .map((p) => ({
              ...p,
              x: p.x + p.vx,
              y: p.y + p.vy,
              opacity: p.opacity - 0.02,
              size: Math.max(1, p.size - 0.1)
            }))
            .filter((p) => p.opacity > 0)
        );
        animFrame = requestAnimationFrame(updateParticles);
      };
      animFrame = requestAnimationFrame(updateParticles);
    }
    return () => cancelAnimationFrame(animFrame);
  }, [particles]);

  const selectRoutine = (routine) => {
    setSelectedRoutine(routine);
    setProgress(0);
    setParticles([]);
    setGameState("PLAY");
  };

  const handleReset = () => {
    setGameState("SELECT");
    setSelectedRoutine(null);
    setProgress(0);
    setParticles([]);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 relative py-12">
      {/* Background neon glows */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-[3.5rem] blur-3xl -z-10" />

      <div className="bg-[#FAF6F8] rounded-[2.5rem] md:rounded-[3.5rem] border border-pink-100 shadow-premium p-8 md:p-14 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />
        
        {/* Decorative Lotus behind titles */}
        <div className="absolute -top-10 -right-10 w-40 h-40 opacity-10 pointer-events-none text-primary">
          <Sparkles className="w-full h-full animate-spin-slow" />
        </div>

        {/* SCREEN 1: SELECT ROUTINE */}
        {gameState === "SELECT" && (
          <div className="space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary inline-flex items-center gap-1.5 bg-blue-50 border border-blue-100/50 px-3 py-1 rounded-full">
                <Smile className="w-3.5 h-3.5" />
                Interactive Mini-Game
              </span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl text-primary">
                Face Glow & Yoga Trainer
              </h2>
              <p className="text-text-muted text-sm font-semibold max-w-xl mx-auto leading-relaxed">
                Unlock facial muscle relaxation, reduce double chins, and boost skin circulation in 10 seconds. Select a target workout below!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {routines.map((routine) => (
                <div
                  key={routine.id}
                  onClick={() => selectRoutine(routine)}
                  className="p-6 bg-white border border-pink-100/40 rounded-3xl shadow-sm hover:shadow-premium hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-pink-500/5 to-transparent rounded-tr-3xl" />
                  
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform group-hover:bg-primary group-hover:text-white">
                      {routine.icon}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-primary">
                        {routine.title}
                      </h3>
                      <p className="text-[11px] text-secondary font-bold uppercase tracking-wider mt-0.5">
                        {routine.sub}
                      </p>
                    </div>
                    <p className="text-xs text-text-muted leading-relaxed font-semibold">
                      {routine.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-zinc-100/50 mt-6 flex items-center justify-between">
                    <span className="text-[10px] font-extrabold text-text-muted uppercase tracking-wider">
                      {routine.focus}
                    </span>
                    <span className="text-primary font-bold text-xs flex items-center gap-0.5 group-hover:translate-x-1.5 transition-transform">
                      Start <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SCREEN 2: GAMEPLAY (HOLD POSE & CHARGE) */}
        {gameState === "PLAY" && selectedRoutine && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Interactive Circle & Controls */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-8">
              
              {/* Circular hold visualizer */}
              <div className="relative w-64 h-64 flex items-center justify-center">
                
                {/* Breath Ring (Visual Cue) */}
                <div 
                  className={`absolute rounded-full bg-primary/10 -z-10 transition-all duration-[4000ms] ease-in-out`}
                  style={{
                    width: breathText.includes("In") ? "105%" : "85%",
                    height: breathText.includes("In") ? "105%" : "85%",
                    boxShadow: breathText.includes("In") 
                      ? "0 0 30px rgba(214, 51, 132, 0.15)" 
                      : "0 0 10px rgba(214, 51, 132, 0.05)"
                  }}
                />

                {/* Progress SVG Ring */}
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="128"
                    cy="128"
                    r="112"
                    className="stroke-zinc-100 fill-none stroke-[8]"
                  />
                  <circle
                    cx="128"
                    cy="128"
                    r="112"
                    className="stroke-primary fill-none stroke-[8] transition-all"
                    strokeDasharray={703}
                    strokeDashoffset={703 - (703 * progress) / 100}
                    strokeLinecap="round"
                  />
                </svg>

                {/* Center Core Avatar */}
                <div className="absolute inset-4 rounded-full bg-white shadow-lg flex flex-col items-center justify-center text-center p-6 select-none overflow-hidden relative">
                  
                  {/* Glowing core backdrop */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5 rounded-full transition-all duration-300"
                    style={{
                      opacity: isHolding ? 1 : 0.2,
                    }}
                  />
                  
                  {/* Particles layer */}
                  {particles.map((p) => (
                    <span
                      key={p.id}
                      className={`absolute pointer-events-none ${p.color}`}
                      style={{
                        transform: `translate3d(${p.x}px, ${p.y}px, 0) scale(${p.size / 10})`,
                        opacity: p.opacity,
                      }}
                    >
                      ✦
                    </span>
                  ))}

                  <div className="text-4xl animate-bounce mb-2">
                    {selectedRoutine.icon}
                  </div>
                  
                  <div className="text-xs text-text-muted font-bold uppercase tracking-wider">
                    Glow Charger
                  </div>
                  
                  <div className="font-display font-extrabold text-2xl text-primary mt-1">
                    {Math.floor(progress)}%
                  </div>

                  {isHolding && (
                    <span className="text-[10px] text-accent font-bold uppercase tracking-wider animate-pulse mt-1">
                      Circulation Active
                    </span>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="w-full max-w-xs space-y-3">
                <button
                  onMouseDown={() => setIsHolding(true)}
                  onMouseUp={() => setIsHolding(false)}
                  onMouseLeave={() => setIsHolding(false)}
                  onTouchStart={(e) => { e.preventDefault(); setIsHolding(true); }}
                  onTouchEnd={() => setIsHolding(false)}
                  className={`w-full py-5 rounded-3xl font-extrabold text-sm uppercase tracking-widest cursor-pointer select-none shadow-premium transition-all duration-200 border text-center ${
                    isHolding 
                      ? "bg-primary text-white border-primary-dark scale-95 shadow-inner" 
                      : "bg-gradient-to-r from-primary via-primary-light to-secondary text-white border-primary/20 hover:scale-103"
                  }`}
                >
                  {isHolding ? "HOLDING POSE..." : "PRESS & HOLD BUTTON"}
                </button>
                <p className="text-[10px] text-text-muted font-bold text-center uppercase tracking-wider">
                  {isHolding ? "Keep holding the button!" : "Press and hold to start the timer"}
                </p>
              </div>
            </div>

            {/* Right Column: Instructions */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8">
              
              {/* Back Button */}
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-text-muted hover:text-primary transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Change Routine
              </button>

              <div className="space-y-3">
                <h3 className="font-display font-extrabold text-2xl md:text-3xl text-primary leading-tight">
                  {selectedRoutine.title}
                </h3>
                <h4 className="font-display font-bold text-lg text-secondary">
                  {selectedRoutine.sub}
                </h4>
              </div>

              {/* Rhythmic Breath Prompt */}
              <div className="p-4 bg-white border border-pink-50 rounded-2xl flex items-center gap-4 shadow-sm animate-pulse">
                <div className="w-10 h-10 rounded-xl bg-pink-50 text-primary flex items-center justify-center shrink-0">
                  <Flame className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h5 className="font-display font-bold text-xs text-primary">Rhythmic Breathing Indicator</h5>
                  <p className="text-[10px] text-text-muted font-semibold mt-0.5 leading-relaxed">
                    {breathText}
                  </p>
                </div>
              </div>

              {/* Instructions Detail */}
              <div className="space-y-4">
                <h5 className="text-xs font-bold uppercase tracking-wider text-text-main flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-secondary" />
                  How to perform:
                </h5>
                <p className="text-sm text-text-muted leading-relaxed font-semibold">
                  {selectedRoutine.desc}
                </p>
                
                {/* Steps map */}
                <div className="p-4 bg-warm-bg rounded-2xl border border-pink-50/50">
                  <h6 className="text-[10px] font-bold uppercase tracking-wider text-primary mb-2">Pose Steps:</h6>
                  <p className="text-xs text-text-main font-bold tracking-wide">
                    {selectedRoutine.steps}
                  </p>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* SCREEN 3: RESULTS (GLOW REPORT) */}
        {gameState === "RESULTS" && selectedRoutine && (
          <div className="max-w-xl mx-auto text-center space-y-8 py-6">
            
            {/* Sparkles / Stars Animation backdrop */}
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-accent-gold/20 to-primary/20 flex items-center justify-center shadow-lg relative">
                <Award className="w-10 h-10 text-accent-gold animate-bounce" />
                <Sparkles className="absolute -top-1 -right-1 w-5 h-5 text-accent-gold animate-pulse" />
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-bold bg-pink-100 text-primary px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                Workout Complete!
              </span>
              <h3 className="font-display font-extrabold text-2xl md:text-3xl text-primary leading-tight mt-2">
                Your Face Circulation Report
              </h3>
              <p className="text-xs text-text-muted font-bold max-w-sm mx-auto">
                Excellent! The {selectedRoutine.title} stimulates lymphatic drainage and collagen production.
              </p>
            </div>

            {/* Glowing Statistics */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-white border border-pink-50 rounded-3xl shadow-sm">
              <div className="text-center">
                <span className="text-xs font-bold text-text-muted block">Glow Index</span>
                <span className="font-display font-extrabold text-2xl text-primary block mt-1">
                  {glowScore}%
                </span>
              </div>
              <div className="text-center border-x border-zinc-100">
                <span className="text-xs font-bold text-text-muted block">Muscle Load</span>
                <span className="font-display font-extrabold text-2xl text-secondary block mt-1">
                  Balanced
                </span>
              </div>
              <div className="text-center">
                <span className="text-xs font-bold text-text-muted block">Stress Relief</span>
                <span className="font-display font-extrabold text-2xl text-accent block mt-1">
                  100%
                </span>
              </div>
            </div>

            {/* Call To Action options */}
            <div className="flex flex-col gap-4 pt-2">
              <button
                onClick={() => {
                  handleReset();
                  if (onOpenBooking) onOpenBooking();
                }}
                className="w-full py-4.5 bg-primary hover:bg-primary-dark text-white font-extrabold rounded-2xl text-sm transition-all shadow-premium flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Book Custom Face-Yoga Plan</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={handleReset}
                className="w-full py-3.5 bg-pink-50 hover:bg-pink-100 text-primary border border-pink-100/50 font-bold rounded-2xl text-xs transition-colors cursor-pointer"
              >
                Try Another Exercise
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
