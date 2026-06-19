"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Square, Award, Heart, ShieldAlert, Sparkles, RefreshCw, ArrowRight } from "lucide-react";

export default function BreathingTrainer({ onBookConsultation }) {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState("idle"); // "idle", "inhale", "hold1", "exhale", "hold2", "complete"
  const [phaseTimer, setPhaseTimer] = useState(4);
  const [totalTimer, setTotalTimer] = useState(17); // 17s total duration
  const [completedCycles, setCompletedCycles] = useState(0);

  const timerRef = useRef(null);
  const totalTimerRef = useRef(null);

  // Box breathing intervals: 4s for each phase
  useEffect(() => {
    if (isActive) {
      // Phase cycle intervals
      timerRef.current = setInterval(() => {
        setPhaseTimer((prev) => {
          if (prev <= 1) {
            // Move to next phase
            setPhase((currentPhase) => {
              switch (currentPhase) {
                case "inhale":
                  return "hold1";
                case "hold1":
                  return "exhale";
                case "exhale":
                  return "hold2";
                case "hold2":
                  setCompletedCycles((c) => c + 1);
                  return "inhale";
                default:
                  return "inhale";
              }
            });
            return 4; // Reset phase counter to 4 seconds
          }
          return prev - 1;
        });
      }, 1000);

      // Total session countdown (60s)
      totalTimerRef.current = setInterval(() => {
        setTotalTimer((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            clearInterval(totalTimerRef.current);
            setIsActive(false);
            setPhase("complete");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
      clearInterval(totalTimerRef.current);
    }

    return () => {
      clearInterval(timerRef.current);
      clearInterval(totalTimerRef.current);
    };
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
    setPhase("inhale");
    setPhaseTimer(4);
    setTotalTimer(17);
    setCompletedCycles(0);
  };

  const handleStop = () => {
    setIsActive(false);
    setPhase("idle");
    setPhaseTimer(4);
    setTotalTimer(17);
  };

  // Get dynamic phase instruction text
  const getInstruction = () => {
    switch (phase) {
      case "inhale":
        return "Breathe in deeply...";
      case "hold1":
        return "Hold your breath...";
      case "exhale":
        return "Exhale slowly...";
      case "hold2":
        return "Pause and hold...";
      default:
        return "Ready to calm your mind?";
    }
  };

  // Get bubble scale and colors based on phase
  const getBubbleStyle = () => {
    switch (phase) {
      case "inhale":
        return {
          scale: [1, 1.6],
          background: "radial-gradient(circle, #F15BB5 0%, #D63384 100%)",
          boxShadow: "0 0 50px rgba(241, 91, 181, 0.4)",
        };
      case "hold1":
        return {
          scale: 1.6,
          background: "radial-gradient(circle, #00A8E8 0%, #0077B6 100%)",
          boxShadow: "0 0 60px rgba(0, 168, 232, 0.6)",
        };
      case "exhale":
        return {
          scale: [1.6, 1],
          background: "radial-gradient(circle, #FBC02D 0%, #E68A65 100%)",
          boxShadow: "0 0 50px rgba(251, 192, 45, 0.4)",
        };
      case "hold2":
        return {
          scale: 1,
          background: "radial-gradient(circle, #75B043 0%, #558B2F 100%)",
          boxShadow: "0 0 40px rgba(117, 176, 67, 0.3)",
        };
      default:
        return {
          scale: 1,
          background: "radial-gradient(circle, #E68A65 0%, #D63384 100%)",
          boxShadow: "0 0 30px rgba(214, 51, 132, 0.2)",
        };
    }
  };

  const getPhaseColor = () => {
    switch (phase) {
      case "inhale": return "rgba(241, 91, 181, 0.25)";
      case "hold1": return "rgba(0, 168, 232, 0.25)";
      case "exhale": return "rgba(251, 192, 45, 0.25)";
      case "hold2": return "rgba(117, 176, 67, 0.25)";
      default: return "rgba(214, 51, 132, 0.15)";
    }
  };

  return (
    <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] border border-pink-100 p-5 sm:p-8 md:p-12 shadow-premium max-w-2xl mx-auto space-y-6 sm:space-y-8 relative overflow-hidden">
      {/* Decorative SVG Lotus in background */}
      <div className="absolute -right-20 -bottom-20 w-64 h-64 text-pink-500/5 pointer-events-none">
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
          <path d="M12 21.5c-.2 0-.3-.1-.4-.2-.8-.8-1.5-1.9-2.1-3.2-.2-.5-.4-1-.6-1.5-1.3-.4-2.5-.9-3.7-1.6-1.3-.7-2.3-1.6-3-2.6-.2-.2-.2-.5 0-.7.7-1 1.7-1.8 3-2.6 1.1-.6 2.4-1.2 3.7-1.6.2-.5.4-1 .6-1.5.6-1.3 1.3-2.4 2.1-3.2.2-.2.5-.2.7 0 .8.8 1.5 1.9 2.1 3.2.2.5.4 1 .6 1.5 1.3.4 2.5.9 3.7 1.6 1.3.7 2.3 1.6 3 2.6.2.2.2.5 0 .7-.7 1-1.7 1.8-3 2.6-1.1.6-2.4 1.2-3.7 1.6-.2.5-.4 1-.6 1.5-.6 1.3-1.3 2.4-2.1 3.2-.1.1-.3.2-.4.2zm-1-4.7c.3.7.7 1.3 1 1.8.3-.5.7-1.1 1-1.8.2-.5.4-.9.5-1.4-.5.1-1 .1-1.5.1s-1 0-1.5-.1c.1.5.3.9.5 1.4zm-3-2c.9.5 1.8.8 2.8 1.1-.1-.6-.2-1.2-.2-1.8v-.6h-1c-.5 0-.9 0-1.4-.1.3.5.7 1 1.4 1.4zm7.6-.3c.9-.3 1.8-.6 2.8-1.1.6-.4 1.1-.9 1.4-1.4-.5.1-1 .1-1.4.1h-1v.6c0 .6-.1 1.2-.2 1.8zm-9.3-5.2c-.5.1-1 .1-1.4.1h-1v.6c0 .6.1 1.2.2 1.8.9-.5 1.8-.8 2.8-1.1-.1-.6-.2-1.2-.2-1.8v-.6h-.4zm10.7.7c.1-.6.2-1.2.2-1.8v-.6h-1c-.5 0-.9 0-1.4-.1.1.6.2 1.2.2 1.8v.6h1c.5 0 .9 0 1.4.1zm-7-4.1c-.2-.5-.4-.9-.5-1.4.1.5.3.9.5 1.4zm2 0c.2-.5.4-.9.5-1.4-.1.5-.3.9-.5 1.4z" />
        </svg>
      </div>

      {/* Title block */}
      <div className="text-center space-y-3 z-10 relative">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 text-primary text-[10px] font-extrabold uppercase tracking-wide">
          <Sparkles className="w-3.5 h-3.5" /> Garima&apos;s Calming Zone
        </div>
        <h3 className="font-display font-extrabold text-2xl md:text-3xl text-primary">
          Mindful Box Breathing Game
        </h3>
        <p className="text-xs text-text-muted max-w-md mx-auto leading-relaxed font-bold">
          High cortisol levels block fat loss. Take 17 seconds to lower your stress, sync your breathing, and reset your endocrine balance instantly.
        </p>
      </div>

      {/* Interactive Board */}
      <div className="h-72 flex flex-col justify-center items-center relative py-6">
        <AnimatePresence mode="wait">
          {phase === "complete" ? (
            <motion.div
              key="complete"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center space-y-4 max-w-sm z-10"
            >
              <div className="w-16 h-16 bg-emerald-50 text-accent rounded-full flex items-center justify-center mx-auto shadow-sm border border-emerald-100">
                <Award className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-extrabold text-lg text-primary">Endorphins Unlocked!</h4>
                <p className="text-xs text-text-muted font-bold leading-relaxed">
                  Congratulations! You completed the 17-second box breathing session. Your cortisol levels have decreased, laying a healthy foundation for metabolic success.
                </p>
              </div>
              <button
                onClick={onBookConsultation}
                className="px-6 py-2.5 bg-primary hover:bg-primary-dark text-white rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer shadow transition-all flex items-center gap-1.5 mx-auto"
              >
                Let&apos;s plan your health goals
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ) : (
            <div key="game" className="flex flex-col items-center justify-center space-y-8">
              {/* Breathing Bubble */}
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center">
                {/* Radiating concentric ripples when active */}
                {isActive && (
                  <>
                    <div 
                      className="absolute rounded-full w-20 h-20 sm:w-24 sm:h-24 animate-ripple pointer-events-none"
                      style={{ border: `1px solid ${getPhaseColor()}`, backgroundColor: getPhaseColor() }}
                    />
                    <div 
                      className="absolute rounded-full w-20 h-20 sm:w-24 sm:h-24 animate-ripple-delayed pointer-events-none"
                      style={{ border: `1px solid ${getPhaseColor()}`, backgroundColor: getPhaseColor() }}
                    />
                  </>
                )}

                <motion.div
                  animate={getBubbleStyle()}
                  transition={{
                    duration: phase === "inhale" || phase === "exhale" ? 4 : 0.5,
                    ease: phase === "inhale" || phase === "exhale" ? "easeInOut" : "easeOut",
                  }}
                  className="absolute rounded-full w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center text-white font-bold"
                />
                
                {/* Central Countdown Text */}
                <div className="z-10 text-center font-display text-white drop-shadow-md">
                  {phase !== "idle" && (
                    <>
                      <span className="text-3xl font-extrabold block">
                        {phaseTimer}s
                      </span>
                      <span className="text-[9px] uppercase tracking-wider font-extrabold opacity-90 block">
                        {phase}
                      </span>
                    </>
                  )}
                  {phase === "idle" && (
                    <Heart className="w-8 h-8 fill-current text-white animate-pulse" />
                  )}
                </div>
              </div>

              {/* Dynamic Instructions */}
              <div className="text-center h-8">
                <motion.p
                  key={phase}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm font-bold text-primary"
                >
                  {getInstruction()}
                </motion.p>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Control Panel */}
      <div className="pt-6 border-t border-zinc-100 flex flex-col items-center gap-4">
        {phase !== "complete" && (
          <div className="flex gap-4">
            {!isActive ? (
              <button
                onClick={handleStart}
                className="px-8 py-3.5 bg-primary hover:bg-primary-dark text-white rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer shadow-md shadow-pink-900/10 transition-all flex items-center gap-2"
              >
                <Play className="w-4 h-4 fill-current" />
                Start Breathing Game
              </button>
            ) : (
              <button
                onClick={handleStop}
                className="px-8 py-3.5 bg-zinc-800 hover:bg-zinc-950 text-white rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer shadow transition-all flex items-center gap-2"
              >
                <Square className="w-4 h-4 fill-current" />
                Stop Exercise
              </button>
            )}
          </div>
        )}

        {phase === "complete" && (
          <button
            onClick={handleStart}
            className="px-8 py-3.5 bg-zinc-100 hover:bg-zinc-200 text-text-main rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer transition-all flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Repeat Session
          </button>
        )}

        {/* Timers & progress tracking */}
        {isActive && (
          <div className="w-full space-y-2 text-center text-xs font-semibold text-text-muted max-w-sm">
            <div className="flex justify-between">
              <span>Remaining time: {totalTimer}s</span>
              <span>Cycles completed: {completedCycles}</span>
            </div>
            
            {/* Horizontal progress bar */}
            <div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-primary"
                initial={{ width: "100%" }}
                animate={{ width: `${(totalTimer / 17) * 100}%` }}
                transition={{ duration: 1, ease: "linear" }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
