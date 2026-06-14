"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  Heart, 
  Sparkles, 
  ArrowRight, 
  RefreshCw,
  Award,
  ChevronRight,
  TrendingUp
} from "lucide-react";

export default function BookShowcase() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  // Smooth 3D tilt effect on mouse move
  const handleMouseMove = (e) => {
    if (isFlipped) return; // Disable tilt during flipped state for better readability
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    
    // Tilt factors (limit rotation to 15 degrees max)
    const factorX = -(y / (box.height / 2)) * 12;
    const factorY = (x / (box.width / 2)) * 12;
    
    setRotateX(factorX);
    setRotateY(factorY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 relative py-12">
      {/* Background ambient glows */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-secondary/5 to-transparent rounded-[3.5rem] blur-3xl -z-10" />

      <div className="bg-white rounded-[2.5rem] md:rounded-[3.5rem] border border-pink-100/50 shadow-premium p-8 md:p-14 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Interactive 3D Book */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
            
            {/* 3D Book Container */}
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[3/4] flex items-center justify-center">
              
              {/* Outer perspective container */}
              <div 
                className="w-full h-full cursor-pointer select-none"
                style={{ perspective: 1200 }}
                onClick={() => setIsFlipped(!isFlipped)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                {/* Inner flipping card */}
                <motion.div
                  className="relative w-full h-full rounded-2xl shadow-2xl transition-all duration-300"
                  style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "center center",
                  }}
                  animate={{
                    rotateY: isFlipped ? 180 : rotateY,
                    rotateX: isFlipped ? 0 : rotateX,
                    z: isFlipped ? 20 : 0
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 120, 
                    damping: 20,
                    mass: 0.8
                  }}
                >
                  
                  {/* FRONT COVER */}
                  <div 
                    className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden bg-white border border-pink-100/30 backface-hidden"
                    style={{ 
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                  >
                    <Image
                      src="/book image/book cover image.jpg"
                      alt="Glow with Garima Book Front Cover"
                      fill
                      sizes="(max-w-768px) 100vw, 400px"
                      className="object-cover pointer-events-none"
                      priority
                    />
                    
                    {/* Shadow overlay to simulate depth */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/5 pointer-events-none" />
                    
                    {/* Gloss glare effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/15 pointer-events-none mix-blend-overlay" />
                    
                    {/* Spine highlight (subtle line on the left side) */}
                    <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
                  </div>

                  {/* BACK COVER */}
                  <div 
                    className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden bg-white border border-pink-100/30 backface-hidden"
                    style={{ 
                      transform: "rotateY(180deg)",
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                  >
                    <Image
                      src="/book image/book back image.jpg"
                      alt="Glow with Garima Book Back Cover"
                      fill
                      sizes="(max-w-768px) 100vw, 400px"
                      className="object-cover pointer-events-none"
                    />
                    
                    {/* Shadow overlay to simulate depth */}
                    <div className="absolute inset-0 bg-gradient-to-l from-black/10 via-transparent to-black/5 pointer-events-none" />
                    
                    {/* Spine highlight on right side when flipped */}
                    <div className="absolute right-0 top-0 bottom-0 w-2.5 bg-gradient-to-l from-black/20 to-transparent pointer-events-none" />
                  </div>

                </motion.div>
              </div>

              {/* Spine edge representing book thickness (Only visible when tilted) */}
              <div 
                className="absolute left-0 top-[2%] bottom-[2%] w-[16px] bg-primary/90 opacity-20 pointer-events-none rounded-l"
                style={{
                  transform: `rotateY(-90deg) translateZ(8px) scaleY(0.96)`,
                  transformOrigin: "left center",
                  transformStyle: "preserve-3d"
                }}
              />
            </div>

            {/* Flip controller button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsFlipped(!isFlipped)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-pink-50 hover:bg-pink-100 text-primary font-bold rounded-xl text-xs transition-colors cursor-pointer border border-pink-100/50 shadow-sm"
            >
              <RefreshCw className="w-3.5 h-3.5 animate-spin-slow" />
              {isFlipped ? "Show Front Cover" : "Read Back Synopsis"}
            </motion.button>
          </div>

          {/* Right Column: Book Details */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            
            {/* Header / Badges */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-[#C19A00] text-xs font-extrabold uppercase tracking-wider animate-pulse">
                <Sparkles className="w-3.5 h-3.5 fill-current" />
                Newly Released Book
              </div>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-primary leading-tight">
                Glow with Garima
              </h2>
              <h3 className="font-display font-bold text-xl md:text-2xl text-secondary">
                Author & Face Yoga Expert
              </h3>
            </div>

            {/* Pitch / Story */}
            <p className="text-text-muted text-sm sm:text-base leading-relaxed font-semibold">
              Ready to break free from crash diets, align your hormones naturally, and step into the best version of yourself? This book contains the complete wellness blueprint based on Coach Garima&apos;s years of experience. Learn the exact lifestyle and 7-Pillar nutrition blueprint that helped her reverse a 30-year chronic thyroid condition and shed 20 kg without medication or starvation.
            </p>

            {/* Bullet Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-warm-bg rounded-2xl border border-pink-50/50 hover:border-pink-100/50 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-pink-100 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <Heart className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs text-primary">Thyroid & Hormone Care</h4>
                  <p className="text-[10px] text-text-muted mt-1 font-semibold leading-relaxed">
                    Actionable remedies to naturally correct thyroid disorders and hormonal imbalances.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-warm-bg rounded-2xl border border-pink-50/50 hover:border-pink-100/50 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-secondary shrink-0 mt-0.5">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs text-primary">Sustainable Fat Loss</h4>
                  <p className="text-[10px] text-text-muted mt-1 font-semibold leading-relaxed">
                    Ditch starvation. Lose fat sustainably using everyday, delicious home-cooked meals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-warm-bg rounded-2xl border border-pink-50/50 hover:border-pink-100/50 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-accent shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs text-primary">7 Pillars Framework</h4>
                  <p className="text-[10px] text-text-muted mt-1 font-semibold leading-relaxed">
                    Master the systematic pillars: from hydration and nutrition to restful sleep and breath.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-warm-bg rounded-2xl border border-pink-50/50 hover:border-pink-100/50 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-pink-100 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs text-primary">Real Client Secrets</h4>
                  <p className="text-[10px] text-text-muted mt-1 font-semibold leading-relaxed">
                    Case studies and secret methods that helped over 1100+ women find their glow.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="https://amzn.in/d/06x43E2V"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-[#FF9900] to-[#FFB84D] text-[#111] hover:shadow-lg hover:shadow-orange-500/10 font-extrabold rounded-2xl text-xs transition-all flex items-center justify-center gap-2 border border-[#E68A00] shadow-sm uppercase tracking-wider text-center"
              >
                <span>Buy on Amazon India</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              
              <div className="text-center sm:text-left text-xs text-text-muted font-bold px-2">
                Available in <span className="text-primary">English Paperback</span> & <span className="text-secondary">Hindi Edition</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
