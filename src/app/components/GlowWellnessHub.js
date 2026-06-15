"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  Droplet, 
  Scale, 
  Activity, 
  Wind, 
  Plus, 
  RotateCcw, 
  Smile, 
  CheckCircle,
  HelpCircle,
  BookOpen,
  ArrowRight,
  Play
} from "lucide-react";

export default function GlowWellnessHub({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState("BREATH"); // BREATH, HYDRATION, WEIGHT

  // ==========================================
  // TAB 1: COSMIC BREATH GAME STATE & LOGIC
  // ==========================================
  const [gamePlaying, setGamePlaying] = useState(false);
  const [gameCycle, setGameCycle] = useState(0); // 0 to 100 representing breathing cycle
  const [score, setScore] = useState(0);
  const [combos, setCombos] = useState(0);
  const [feedbackText, setFeedbackText] = useState("Ready?");
  const [breathPhase, setBreathPhase] = useState("INHALE"); // INHALE, EXHALE
  const [breathTimer, setBreathTimer] = useState(15); // Game time remaining
  const [gameFinished, setGameFinished] = useState(false);
  
  const gameIntervalRef = useRef(null);
  const countdownRef = useRef(null);

  // Cycle breathing ticker (0 to 100, repeats)
  useEffect(() => {
    if (gamePlaying) {
      gameIntervalRef.current = setInterval(() => {
        setGameCycle((prev) => {
          const next = (prev + 2) % 100;
          // Determine phase
          if (next < 50) {
            setBreathPhase("INHALE");
          } else {
            setBreathPhase("EXHALE");
          }
          return next;
        });
      }, 80); // 4 seconds full breathing cycle

      // Game timer countdown
      countdownRef.current = setInterval(() => {
        setBreathTimer((prev) => {
          if (prev <= 1) {
            clearInterval(gameIntervalRef.current);
            clearInterval(countdownRef.current);
            setGamePlaying(false);
            setGameFinished(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(gameIntervalRef.current);
      clearInterval(countdownRef.current);
    }

    return () => {
      clearInterval(gameIntervalRef.current);
      clearInterval(countdownRef.current);
    };
  }, [gamePlaying]);

  // Click handler for rhythm action
  const handleBreatheClick = () => {
    if (!gamePlaying) return;
    
    // Ideal timing peaks: Inhale peak around 25, Exhale peak around 75
    const distToInhalePeak = Math.abs(gameCycle - 25);
    const distToExhalePeak = Math.abs(gameCycle - 75);
    const minDist = Math.min(distToInhalePeak, distToExhalePeak);

    if (minDist <= 6) {
      // Perfect Sync
      setScore((prev) => prev + 100 + combos * 10);
      setCombos((prev) => prev + 1);
      setFeedbackText("PERFECT SYNC! ✦");
    } else if (minDist <= 12) {
      // Good
      setScore((prev) => prev + 50);
      setCombos((prev) => prev + 1);
      setFeedbackText("GREAT FLOW!");
    } else {
      // Miss/Off Beat
      setCombos(0);
      setFeedbackText("OFF BEAT - BREATHE DEEPER");
    }
  };

  const startBreathGame = () => {
    setScore(0);
    setCombos(0);
    setBreathTimer(15);
    setGameCycle(0);
    setFeedbackText("Breathe with the ring!");
    setGameFinished(false);
    setGamePlaying(true);
  };

  // ==========================================
  // TAB 2: HYDRATION CALCULATOR STATE & LOGIC
  // ==========================================
  const [weightKg, setWeightKg] = useState(60);
  const [activityHours, setActivityHours] = useState("MODERATE"); // SEDENTARY, MODERATE, ACTIVE
  const [climate, setClimate] = useState("TEMPERATE"); // COOL, TEMPERATE, HOT
  const [currentWater, setCurrentWater] = useState(0);

  // Calculate target intake
  // Base water: 35ml per kg. Activity: +500ml for Moderate, +1000ml for Active. Climate: +600ml for Hot.
  const calculateWaterTarget = () => {
    let base = weightKg * 35;
    if (activityHours === "MODERATE") base += 500;
    if (activityHours === "ACTIVE") base += 1000;
    if (climate === "HOT") base += 600;
    return Math.floor(base);
  };

  const waterTarget = calculateWaterTarget();
  const waterProgressPercent = Math.min(100, Math.floor((currentWater / waterTarget) * 100));

  const addWater = (amount) => {
    setCurrentWater((prev) => Math.min(waterTarget + 500, prev + amount));
  };

  const resetWater = () => {
    setCurrentWater(0);
  };

  // ==========================================
  // TAB 3: SMART WEIGHT & BMI STATE & LOGIC
  // ==========================================
  const [heightFt, setHeightFt] = useState(5);
  const [heightIn, setHeightIn] = useState(3);
  const [currentWeightKg, setCurrentWeightKg] = useState(68);
  const [targetWeightKg, setTargetWeightKg] = useState(58);

  const heightM = ((heightFt * 12) + heightIn) * 0.0254;
  const heightCm = Math.round(((heightFt * 12) + heightIn) * 2.54);
  const bmi = (currentWeightKg / (heightM * heightM)).toFixed(1);

  // Speedometer rotation angle calculation (ranges from -90deg to +90deg based on BMI 15 to 35)
  const calculateNeedleAngle = () => {
    const minBmi = 15;
    const maxBmi = 35;
    const clampedBmi = Math.max(minBmi, Math.min(maxBmi, parseFloat(bmi)));
    const percent = (clampedBmi - minBmi) / (maxBmi - minBmi);
    return -90 + percent * 180;
  };

  const getBmiCategory = () => {
    const score = parseFloat(bmi);
    if (score < 18.5) return { label: "Underweight", color: "text-blue-500", desc: "Nourishment focus needed." };
    if (score < 24.9) return { label: "Healthy Weight", color: "text-accent", desc: "Vibrant and balanced cell energy." };
    if (score < 29.9) return { label: "Overweight", color: "text-[#E68A65]", desc: "Sustainable metabolic reset advised." };
    return { label: "Obese (Thyroid check recommended)", color: "text-primary-dark", desc: "Holistic 7-Pillar hormonal check advised." };
  };

  const bmiCat = getBmiCategory();

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-secondary/5 to-transparent rounded-[3.5rem] blur-3xl -z-10 animate-pulse" />

      {/* Main Glassmorphic Container */}
      <div className="bg-white rounded-[2.5rem] md:rounded-[3.5rem] border border-pink-100/40 shadow-premium overflow-hidden relative p-6 md:p-12">
        
        {/* Glow backdrop particles */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Dashboard Headers */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary inline-flex items-center gap-1.5 bg-blue-50 border border-blue-100/50 px-3 py-1 rounded-full">
            <Activity className="w-3.5 h-3.5" />
            Vibrant Health Hub
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-primary">
            Interactive Wellness Dashboard
          </h2>
          <p className="text-text-muted text-xs md:text-sm font-semibold leading-relaxed">
            Gamify your wellness routine. Sync your breath in the rhythm trainer, calculate and fill your hydration cup, or assess your BMI target with our customized coaching planner.
          </p>
        </div>

        {/* Dashboard Tab Selectors */}
        <div className="grid grid-cols-3 gap-1.5 p-1 bg-warm-bg rounded-2xl max-w-md mx-auto mb-10 border border-pink-100/40 w-full relative z-10">
          {[
            { id: "BREATH", label: "Breath Flow", icon: Wind },
            { id: "HYDRATION", label: "Hydration", icon: Droplet },
            { id: "WEIGHT", label: "Smart Weight", icon: Scale }
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            const TabIcon = tab.icon;
            
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative py-2.5 px-1 rounded-xl text-[9px] sm:text-xs font-extrabold uppercase tracking-wider cursor-pointer transition-colors duration-300 flex flex-col sm:flex-row items-center justify-center gap-1.5 text-center ${
                  isActive ? "text-white" : "text-text-muted hover:text-primary"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeDashboardTab"
                    className="absolute inset-0 bg-primary rounded-xl -z-10 shadow-md"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                <TabIcon className="w-3.5 h-3.5 shrink-0" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ==========================================
            TAB 1: COSMIC BREATH FLOW RHYTHM GAME
            ========================================== */}
        {activeTab === "BREATH" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left side: Visualizer game loop */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
              
              {/* Inner rhythm circles */}
              <div className="relative w-64 h-64 flex items-center justify-center bg-white rounded-full border border-pink-50 shadow-inner overflow-hidden">
                
                {/* Visualizing rhythmic background waves */}
                <div 
                  className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5 transition-all duration-300"
                  style={{ opacity: gamePlaying ? 1 : 0.2 }}
                />

                {/* Pulsing breathing ring (Inhale = big, Exhale = small) */}
                <div 
                  className="absolute rounded-full border-2 border-primary/20 transition-all duration-75"
                  style={{
                    width: `${50 + (gameCycle < 50 ? gameCycle : 100 - gameCycle) * 3}%`,
                    height: `${50 + (gameCycle < 50 ? gameCycle : 100 - gameCycle) * 3}%`,
                  }}
                />

                {/* Target Zone Ring */}
                <div className="absolute w-[80%] h-[80%] rounded-full border-4 border-dashed border-accent-gold/40 animate-spin-slow pointer-events-none" />

                {/* Center Pulse Core */}
                <div 
                  className={`w-28 h-28 rounded-full flex flex-col items-center justify-center text-center p-2 relative shadow-lg transition-transform ${
                    breathPhase === "INHALE" 
                      ? "bg-gradient-to-tr from-primary to-primary-light text-white" 
                      : "bg-gradient-to-tr from-secondary to-blue-400 text-white"
                  }`}
                  style={{
                    transform: `scale(${1 + (gameCycle < 50 ? gameCycle : 100 - gameCycle) * 0.008})`,
                  }}
                >
                  <Wind className="w-6 h-6 animate-pulse" />
                  <span className="text-[9px] font-extrabold tracking-wider uppercase mt-1">
                    {gamePlaying ? breathPhase : "READY"}
                  </span>
                  {gamePlaying && (
                    <span className="text-[10px] font-bold mt-1">
                      {Math.floor(breathTimer)}s
                    </span>
                  )}
                </div>

                {/* Combo meter overlay */}
                {combos > 1 && (
                  <div className="absolute top-4 font-display font-extrabold text-xs text-accent-gold bg-black/80 px-2 py-0.5 rounded-full animate-bounce">
                    Combo x{combos}
                  </div>
                )}
              </div>

              {/* Rhythmic Action Button */}
              {gamePlaying ? (
                <button
                  onClick={handleBreatheClick}
                  className="w-full max-w-xs py-4.5 bg-primary hover:bg-primary-dark text-white font-extrabold rounded-2xl text-xs uppercase tracking-widest cursor-pointer shadow-premium hover:scale-102 transition-all"
                >
                  Click at Peak Expansion!
                </button>
              ) : (
                <button
                  onClick={startBreathGame}
                  className="w-full max-w-xs py-4.5 bg-accent hover:bg-accent-gold text-white font-extrabold rounded-2xl text-xs uppercase tracking-widest cursor-pointer shadow-md hover:scale-102 transition-all flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4 fill-current" />
                  Start Breath Workout
                </button>
              )}
            </div>

            {/* Right side: instructions, scores & combos */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8">
              <div className="space-y-3">
                <h3 className="font-display font-extrabold text-2xl text-primary flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-accent-gold fill-current" />
                  Cosmic Breath Rhythm Game
                </h3>
                <p className="text-text-muted text-sm leading-relaxed font-semibold">
                  Meditation is not boring anymore! Time your breaths dynamically. Click the action button exactly at the **peak of expansion (Inhale peak)** or **peak of contraction (Exhale peak)** to maximize blood oxygenation, trigger lymphatic cooling, and boost your flow rating.
                </p>
              </div>

              {/* Real-time score metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-white border border-pink-50 rounded-2xl shadow-sm text-center">
                  <span className="text-xs font-bold text-text-muted block">Current Score</span>
                  <span className="font-display font-extrabold text-2xl text-primary block mt-1">
                    {score}
                  </span>
                </div>
                <div className="p-5 bg-white border border-pink-50 rounded-2xl shadow-sm text-center">
                  <span className="text-xs font-bold text-text-muted block">Rhythm Feedback</span>
                  <span className="font-display font-extrabold text-sm text-secondary block mt-2 tracking-wide">
                    {feedbackText}
                  </span>
                </div>
              </div>

              {/* Score results card */}
              {gameFinished && (
                <div className="p-5 bg-emerald-50 border border-emerald-100 rounded-2xl space-y-3 animate-fade-in">
                  <h4 className="font-display font-bold text-sm text-accent flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Workout Successfully Logged!
                  </h4>
                  <p className="text-xs text-text-muted leading-relaxed font-semibold">
                    Awesome job! You reached a score of **{score}** with a peak combo streak of **{combos}**. Your oxygenation flow is highly activated. 
                  </p>
                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center gap-1.5 text-xs text-primary font-bold hover:underline"
                  >
                    Discuss your breathing rhythm in a custom assessment
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

          </div>
        )}

        {/* ==========================================
            TAB 2: HYDRATION WAVE TRACKER
            ========================================== */}
        {activeTab === "HYDRATION" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Inline keyframes for fluid physics */}
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes spin-wave {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
              .wave-fluid {
                position: absolute;
                width: 250px;
                height: 250px;
                background: rgba(0, 168, 232, 0.7);
                border-radius: 42%;
                animation: spin-wave 7s linear infinite;
              }
              .wave-fluid-back {
                position: absolute;
                width: 260px;
                height: 260px;
                background: rgba(0, 168, 232, 0.3);
                border-radius: 40%;
                animation: spin-wave 10s linear infinite;
                animation-delay: 0.5s;
              }
            `}} />

            {/* Left side: Simulated Water Glass Visualizer */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
              
              {/* Glass container representation */}
              <div className="relative w-40 h-[220px] bg-white/20 border-4 border-zinc-200 shadow-lg rounded-b-[2rem] overflow-hidden flex items-end justify-center">
                
                {/* Liquid Level element filling up vertically */}
                <div 
                  className="relative w-full bg-[#00A8E8] transition-all duration-500 ease-out"
                  style={{
                    height: `${waterProgressPercent}%`,
                    minHeight: currentWater > 0 ? "15%" : "0%"
                  }}
                >
                  
                  {/* Rotating wave masks positioned at the surface of the fluid */}
                  {currentWater > 0 && (
                    <>
                      <div className="wave-fluid -top-24 left-[-45%]" />
                      <div className="wave-fluid-back -top-28 left-[-50%]" />
                    </>
                  )}
                </div>

                {/* Percentage text overlay inside the glass */}
                <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
                  <span className="font-display font-extrabold text-xl text-primary bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow border border-pink-50">
                    {waterProgressPercent}%
                  </span>
                </div>
              </div>

              {/* Water logging controllers */}
              <div className="flex gap-4 w-full max-w-xs">
                <button
                  onClick={() => addWater(250)}
                  className="flex-1 py-3 bg-blue-500 hover:bg-blue-600 text-white font-extrabold rounded-xl text-xs uppercase tracking-wider cursor-pointer transition-colors shadow-sm flex items-center justify-center gap-1"
                >
                  <Plus className="w-4 h-4" />
                  +250ml
                </button>
                <button
                  onClick={() => addWater(500)}
                  className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-xl text-xs uppercase tracking-wider cursor-pointer transition-colors shadow-sm flex items-center justify-center gap-1"
                >
                  <Plus className="w-4 h-4" />
                  +500ml
                </button>
                <button
                  onClick={resetWater}
                  className="p-3 bg-zinc-100 hover:bg-zinc-200 text-text-muted rounded-xl transition-colors cursor-pointer"
                  title="Reset Hydration"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right side: Parameters Form */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8">
              
              <div className="space-y-3">
                <h3 className="font-display font-extrabold text-2xl text-primary flex items-center gap-2">
                  <Droplet className="w-6 h-6 text-blue-500 fill-current" />
                  Hydration Wave Simulator
                </h3>
                <p className="text-text-muted text-sm leading-relaxed font-semibold">
                  Hormones cannot balance and metabolism cannot function without optimal cellular hydration. Slide your parameters below to calculate your target and simulate drinking!
                </p>
              </div>

              {/* Input Slider Controls */}
              <div className="space-y-6 bg-warm-bg p-6 rounded-3xl border border-pink-50/50 shadow-sm">
                
                {/* Weight parameter */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold text-primary uppercase">
                    <span>Your Weight</span>
                    <span>{weightKg} kg</span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="120"
                    value={weightKg}
                    onChange={(e) => setWeightKg(Number(e.target.value))}
                    className="w-full h-2 bg-pink-100 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>

                {/* Activity Selector */}
                <div className="grid grid-cols-3 gap-3">
                  {["SEDENTARY", "MODERATE", "ACTIVE"].map((act) => (
                    <button
                      key={act}
                      onClick={() => setActivityHours(act)}
                      className={`py-2 rounded-xl text-[10px] font-extrabold uppercase border transition-all cursor-pointer ${
                        activityHours === act
                          ? "bg-blue-500 border-blue-600 text-white shadow-sm"
                          : "bg-white border-zinc-200 text-text-muted hover:bg-zinc-50"
                      }`}
                    >
                      {act}
                    </button>
                  ))}
                </div>

                {/* Climate Selector */}
                <div className="grid grid-cols-3 gap-3">
                  {["COOL", "TEMPERATE", "HOT"].map((cli) => (
                    <button
                      key={cli}
                      onClick={() => setClimate(cli)}
                      className={`py-2 rounded-xl text-[10px] font-extrabold uppercase border transition-all cursor-pointer ${
                        climate === cli
                          ? "bg-blue-500 border-blue-600 text-white shadow-sm"
                          : "bg-white border-zinc-200 text-text-muted hover:bg-zinc-50"
                      }`}
                    >
                      {cli}
                    </button>
                  ))}
                </div>

              </div>

              {/* Dynamic Targets Report */}
              <div className="p-5 bg-blue-50 border border-blue-100 rounded-2xl flex justify-between items-center">
                <div>
                  <h4 className="font-display font-bold text-sm text-blue-900">Your Calculated Target</h4>
                  <p className="text-[10px] text-blue-700/80 font-bold uppercase mt-0.5 tracking-wider">
                    Based on hydration biology
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-display font-extrabold text-2xl text-blue-600 block">
                    {waterTarget} ml
                  </span>
                  <span className="text-[10px] text-text-muted font-bold block">
                    Logged: {currentWater} ml
                  </span>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* ==========================================
            TAB 3: SMART WEIGHT & BMI ANALYZER
            ========================================== */}
        {activeTab === "WEIGHT" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left side: Speedometer Gauge */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
              
              {/* Semi-circular dial SVG with integrated responsive needle */}
              <div className="relative w-full max-w-[260px] aspect-[2/1] flex items-end justify-center overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 200 100">
                  {/* Underweight Arc */}
                  <path
                    d="M 20 90 A 80 80 0 0 1 60 25"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="12"
                    strokeLinecap="round"
                  />
                  {/* Healthy Arc */}
                  <path
                    d="M 60 25 A 80 80 0 0 1 140 25"
                    fill="none"
                    stroke="#75B043"
                    strokeWidth="12"
                  />
                  {/* Overweight Arc */}
                  <path
                    d="M 140 25 A 80 80 0 0 1 180 90"
                    fill="none"
                    stroke="#E68A65"
                    strokeWidth="12"
                    strokeLinecap="round"
                  />
                  
                  {/* Needle Indicator (inside SVG to ensure absolute scaling and responsiveness) */}
                  <line 
                    x1="100" 
                    y1="90" 
                    x2="100" 
                    y2="25" 
                    stroke="#8B1E58" 
                    strokeWidth="5" 
                    strokeLinecap="round"
                    style={{
                      transform: `rotate(${calculateNeedleAngle()}deg)`,
                      transformOrigin: "100px 90px",
                      transition: "transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                    }}
                  />

                  {/* Pivot Pin on top of needle */}
                  <circle cx="100" cy="90" r="7" fill="#8B1E58" />
                </svg>
              </div>

              {/* BMI score readouts */}
              <div className="text-center space-y-1">
                <div className="text-[10px] text-text-muted font-bold uppercase tracking-wider">
                  Calculated BMI Ratio
                </div>
                <h4 className="font-display font-extrabold text-3xl text-primary">
                  {bmi}
                </h4>
                <div className={`text-xs font-extrabold uppercase tracking-wide ${bmiCat.color}`}>
                  {bmiCat.label}
                </div>
              </div>
            </div>

            {/* Right side: Calculators Form & Dynamic Coaching Targets */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8">
              
              <div className="space-y-3">
                <h3 className="font-display font-extrabold text-2xl text-primary flex items-center gap-2">
                  <Scale className="w-6 h-6 text-primary fill-current" />
                  7-Pillar Smart Weight Planner
                </h3>
                <p className="text-text-muted text-sm leading-relaxed font-semibold">
                  Calculate weight targets that protect thyroid hormones. Crash diets decrease metabolism—Coach Garima recommends a safe, home-cooked approach. Input parameters below:
                </p>
              </div>

              {/* Slider Inputs form */}
              <div className="space-y-6 bg-warm-bg p-6 rounded-3xl border border-pink-50/50 shadow-sm">
                
                {/* Height (Feet & Inches) */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold text-primary uppercase">
                    <span>Height</span>
                    <span>{heightFt} ft {heightIn} in ({heightCm} cm)</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <span className="text-[10px] text-text-muted font-bold block uppercase">Feet</span>
                      <input
                        type="range"
                        min="4"
                        max="7"
                        value={heightFt}
                        onChange={(e) => setHeightFt(Number(e.target.value))}
                        className="w-full h-1.5 bg-pink-100 rounded-lg appearance-none cursor-pointer accent-primary"
                      />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] text-text-muted font-bold block uppercase">Inches</span>
                      <input
                        type="range"
                        min="0"
                        max="11"
                        value={heightIn}
                        onChange={(e) => setHeightIn(Number(e.target.value))}
                        className="w-full h-1.5 bg-pink-100 rounded-lg appearance-none cursor-pointer accent-primary"
                      />
                    </div>
                  </div>
                </div>

                {/* Weight */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold text-primary uppercase">
                    <span>Current Weight</span>
                    <span>{currentWeightKg} kg</span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="120"
                    value={currentWeightKg}
                    onChange={(e) => setCurrentWeightKg(Number(e.target.value))}
                    className="w-full h-2 bg-pink-100 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>

                {/* Target Weight */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold text-primary uppercase">
                    <span>Target Weight Goal</span>
                    <span>{targetWeightKg} kg</span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="100"
                    value={targetWeightKg}
                    onChange={(e) => setTargetWeightKg(Number(e.target.value))}
                    className="w-full h-2 bg-pink-100 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>

              </div>

              {/* Custom 7-Pillar coaching review box */}
              <div className="p-5 bg-white border border-pink-100/40 rounded-2xl space-y-4 shadow-sm">
                <h4 className="font-display font-bold text-xs text-primary uppercase tracking-wide flex items-center gap-1.5 border-b border-zinc-100 pb-2">
                  <BookOpen className="w-4 h-4 text-secondary" />
                  Your 7-Pillar Coaching Strategy:
                </h4>
                <ul className="space-y-2 text-xs text-text-muted leading-relaxed font-semibold">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✦</span>
                    <span>**Metabolic Timeline**: Reach your goal weight of {targetWeightKg} kg safely in about **{Math.max(2, Math.ceil((currentWeightKg - targetWeightKg) / 2.5))} months** without crashing your thyroid levels.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✦</span>
                    <span>**Food Portion Advice**: Consume **50% fresh vegetables, 30% home rotis/rice, and 20% organic minerals** at meals. Do not skip meals or starve.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✦</span>
                    <span>**Cortisol Regulation**: Practice Yog Nidra before sleep. Rest lowers cortisol, releasing weight locks.</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
