"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Heart, 
  Star, 
  ShieldCheck, 
  CheckCircle,
  TrendingUp,
  Bookmark,
  Award,
  BookOpen,
  X
} from "lucide-react";

// Components
import BookingModal from "./components/BookingModal";
import BreathingTrainer from "./components/BreathingTrainer";
import BloomingLotus from "./components/BloomingLotus";
import BookShowcase from "./components/BookShowcase";
import TickerBanner from "./components/TickerBanner";
import GlowWellnessHub from "./components/GlowWellnessHub";
import PillarWheel from "./components/PillarWheel";
import FloatingSvgAnimation from "./components/FloatingSvgAnimation";

const credentials = [
  {
    title: "Certified Fitness Trainer",
    issuer: "MIFi (Mission India Fitness Institute)",
    year: "2022",
    badgeColor: "bg-pink-50 text-primary border-pink-100",
    svg: (
      <svg className="w-8 h-8 text-primary stroke-[1.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path className="origin-center group-hover:rotate-45 transition-transform duration-500" d="M6.5 6.5h11M6.5 9.5h11M18 5v14M21 7v10M3 7v10M6 5v14" />
        <circle cx="12" cy="12" r="3" className="group-hover:scale-125 transition-transform duration-500 origin-center text-secondary/30 fill-current" />
      </svg>
    )
  },
  {
    title: "Certified Nutrition Specialist",
    issuer: "MIFI (Mission India Fitness Institute)",
    year: "2022",
    badgeColor: "bg-emerald-50 text-accent border-emerald-100",
    svg: (
      <svg className="w-8 h-8 text-accent stroke-[1.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path className="origin-bottom group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500" d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.2C18 17 15.6 20 11 20z" />
        <path d="M19 2c-2.26 4.33-5.27 7.14-8 18" />
      </svg>
    )
  },
  {
    title: "Certified Supplement Specialist",
    issuer: "MIFI (Mission India Fitness Institute)",
    year: "2022",
    badgeColor: "bg-blue-50 text-secondary border-blue-100",
    svg: (
      <svg className="w-8 h-8 text-secondary stroke-[1.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <g className="origin-center group-hover:scale-105 transition-transform duration-300">
          <path className="group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 transition-transform duration-300" d="m10.5 13.5 3-3" />
          <path className="group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 transition-transform duration-300" d="m8.5 8.5 7 7" />
          <path className="group-hover:translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </g>
      </svg>
    )
  },
  {
    title: "Holistic Health Coach",
    issuer: "FBM (Fit Bharat Mission)",
    year: "2024",
    badgeColor: "bg-amber-50 text-[#D97706] border-amber-100",
    svg: (
      <svg className="w-8 h-8 text-[#D97706] stroke-[1.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path className="origin-center group-hover:scale-110 transition-transform duration-500" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path className="fill-[#D97706]/20" d="M12 14.5s-2.5-1.5-2.5-3.5A2.5 2.5 0 0 1 12 8.5a2.5 2.5 0 0 1 2.5 2.5c0 2-2.5 3.5-2.5 3.5z" />
      </svg>
    )
  },
  {
    title: "Therapeutic Yoga Teacher",
    issuer: "Yog Namaste Academy",
    year: "2024",
    badgeColor: "bg-purple-50 text-purple-600 border-purple-100",
    svg: (
      <svg className="w-8 h-8 text-purple-600 stroke-[1.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path className="origin-bottom group-hover:scale-110 transition-transform duration-500" d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9z" />
        <path className="origin-center group-hover:rotate-45 transition-transform duration-700" d="M12 8v8M8 12h8M9.17 9.17l5.66 5.66M9.17 14.83l5.66-5.66" />
      </svg>
    )
  },
  {
    title: "International Face Yoga Expert",
    issuer: "Manasvaani",
    year: "2025",
    badgeColor: "bg-rose-50 text-rose-500 border-rose-100",
    svg: (
      <svg className="w-8 h-8 text-rose-500 stroke-[1.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path className="origin-center group-hover:scale-110 transition-transform duration-500" d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        <circle cx="12" cy="12" r="1.5" className="fill-current" />
      </svg>
    )
  }
];

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <div className="bg-grid-pattern glow-mesh relative overflow-hidden">
      <FloatingSvgAnimation />
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Hero Text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring", damping: 20 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-primary" />
              Certified Female Fat Loss & Holistic Health Coach
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-primary leading-[1.15] tracking-tight">
              Transform Your <br />
              <span className="text-secondary bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent">Mind, Body & Soul</span>
            </h1>

            <p className="text-base sm:text-lg text-text-muted max-w-xl leading-relaxed font-semibold">
              Ditch the crash dieting. Balance your hormones, reverse thyroid symptoms naturally, and lose stubborn weight sustainably with the signature 7-Pillar Strategy using clean, home-cooked food.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsBookingOpen(true)}
                className="px-8 py-4.5 bg-primary hover:bg-primary-dark text-white font-bold rounded-2xl text-sm transition-all shadow-premium hover:shadow-primary/25 cursor-pointer flex items-center justify-center gap-2 group btn-shine-container relative overflow-hidden"
              >
                <div className="btn-shine-overlay" />
                <span className="relative z-10">Book Discovery Call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
              </motion.button>
              <Link
                href="/programs/gwg-yoga-program"
                className="px-8 py-4.5 bg-white hover:bg-pink-50/20 border border-pink-100/60 text-primary font-bold rounded-2xl text-sm transition-all shadow-sm flex items-center justify-center gap-2"
              >
                View Programs & Book
              </Link>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-pink-100/60 max-w-md">
              <div>
                <span className="font-display font-extrabold text-2xl md:text-3xl text-primary block">1100+</span>
                <span className="text-xs text-text-muted font-bold">Clients Across Globe</span>
              </div>
              <div>
                <span className="font-display font-extrabold text-2xl md:text-3xl text-secondary block">4000+</span>
                <span className="text-xs text-text-muted font-bold">Classes Led</span>
              </div>
              <div>
                <span className="font-display font-extrabold text-2xl md:text-3xl text-accent block">5+</span>
                <span className="text-xs text-text-muted font-bold">Years Experience</span>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Soft pink/blue glowing circles in back */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-secondary/5 to-transparent rounded-[3rem] blur-3xl -z-10 animate-pulse" />
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-[3rem] shadow-premium border-4 border-white transform rotate-1 hover:rotate-0 transition-transform duration-500 bg-white">
              {/* Glowing Blooming SVG Lotus behind hero image */}
              <motion.div 
                animate={{ 
                  y: [0, -6, 0],
                  rotate: [0, 1.5, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute -top-10 -right-10 w-24 h-24 pointer-events-none z-20"
              >
                <BloomingLotus />
              </motion.div>
              
              <div className="relative w-full h-full rounded-[2.8rem] overflow-hidden bg-white">
                <Image 
                  src="/wellness_hero.png" 
                  alt="Garima Tiwari Wellness Coach" 
                  fill 
                  priority
                  sizes="(max-w-768px) 100vw, 400px"
                  className="object-cover pointer-events-none" 
                />
              </div>
            </div>
            
            {/* Floating widget 1 - Lotus Pink Theme */}
            <div className="absolute -left-6 bottom-12 bg-white/95 backdrop-blur-md px-5 py-4 rounded-2xl shadow-premium border border-pink-50 flex items-center gap-3 animate-float max-w-[200px]">
              <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-primary">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-primary block">Empowering Women</span>
                <span className="text-[10px] text-text-muted font-semibold">1100+ Life Changes</span>
              </div>
            </div>

            {/* Floating widget 2 - Cyan Blue Theme */}
            <div className="absolute -right-6 top-16 bg-white/95 backdrop-blur-md px-5 py-4 rounded-2xl shadow-premium border border-blue-50 flex items-center gap-3 animate-float-delayed max-w-[180px]">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-secondary">
                <Star className="w-4 h-4 fill-current" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-[#251A20] block">Complete Transformation</span>
                <span className="text-[10px] text-text-muted font-semibold">Natural Approach</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Accredited Credentials & Certifications Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-16 relative border-t border-pink-50/50">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">Accreditations & Board Certifications</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-primary leading-tight">
            Accredited Clinical & <br />
            <span className="text-secondary bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent">Yoga Credentials</span>
          </h2>
          <p className="text-text-muted text-xs md:text-sm font-semibold max-w-lg mx-auto">
            Scientific, hormone-aligned, and certified coaching practices to ensure safe, custom fat loss and metabolic healing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {credentials.map((cred, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="bg-white/80 backdrop-blur-md border border-pink-100/50 hover:border-pink-200 rounded-[2rem] p-6 hover:shadow-premium-hover transition-all duration-300 relative group flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div>
                <span className="absolute top-6 right-6 text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full bg-zinc-50 border border-zinc-100 text-zinc-500">
                  {cred.year}
                </span>

                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-sm ${cred.badgeColor} mb-6 transition-all duration-300 group-hover:rotate-3`}>
                  {cred.svg}
                </div>

                <h3 className="font-display font-extrabold text-lg text-primary leading-snug pr-12">
                  {cred.title}
                </h3>
              </div>

              <span className="text-[10px] font-bold uppercase tracking-wider text-secondary mt-8 block">
                {cred.issuer}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Meet Garima Short Preview */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="bg-white rounded-[2.5rem] md:rounded-[3.5rem] border border-pink-100/50 shadow-premium p-6 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 relative w-full aspect-[4/5] md:aspect-square lg:aspect-[3/4] rounded-3xl overflow-hidden shadow-lg border border-pink-100/30">
                <Image
                  src="/aboutUsImage.avif"
                  alt="Garima Tiwari"
                  fill
                  sizes="(max-w-768px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Your Mentor</span>
                <h2 className="font-display font-extrabold text-3xl text-primary leading-snug">Meet Garima Tiwari</h2>
                <p className="text-sm font-bold text-secondary uppercase tracking-wide">Founder of Glow with Garima</p>
                <p className="text-text-muted leading-relaxed font-semibold">
                  From rock bottom to radiant health—Garima reversed a 30-year history of chronic thyroid disorder, overcame low metabolism, and lost 20 kg. As a Certified Holistic Coach and Fat Loss specialist, she has empowered hundreds of women to conquer weight blocks and balance their hormones naturally.
                </p>
                <div className="pt-2">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline"
                  >
                    Read My Full Story
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slanted Ticker Banner */}
        <TickerBanner />

        {/* Featured Book Section */}
        <BookShowcase />

      {/* 7 Pillars Short Preview */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary">Our Methodology</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-primary">The 7 Pillars Blueprint</h2>
          <p className="text-text-muted text-sm sm:text-base font-semibold max-w-xl mx-auto">
            We guide you step-by-step through a scientifically structured system to unlock vibrant health without counting calories.
          </p>
        </div>

        <PillarWheel />

        <div className="text-center">
          <Link
            href="/pillars"
            className="px-6 py-3.5 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold text-xs uppercase tracking-wider shadow-premium inline-flex items-center gap-2 hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            Explore the 7 Pillars
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Real Results — Scrolling Transformation Gallery */}
      <section className="py-16 md:py-24 border-y border-pink-100/30 relative overflow-hidden">
        {/* Decorative SVG background with animated rotating mandalas */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.05]" viewBox="0 0 1200 500">
          <defs>
            <radialGradient id="grad-rose" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FB7185" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FB7185" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="grad-gold" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FBC02D" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FBC02D" stopOpacity="0" />
            </radialGradient>
          </defs>
          
          {/* Pulsing glow spots */}
          <circle cx="200" cy="250" r="250" fill="url(#grad-rose)" />
          <circle cx="1000" cy="250" r="250" fill="url(#grad-gold)" />

          {/* Slow-spinning Sacred Geometry / Mandala SVG on Left */}
          <g className="animate-spin-slow origin-[200px_250px]">
            <circle cx="200" cy="250" r="120" stroke="#D63384" strokeWidth="1" strokeDasharray="6 6" fill="none" />
            <circle cx="200" cy="250" r="90" stroke="#00A8E8" strokeWidth="1.5" strokeDasharray="3 9" fill="none" />
            <circle cx="200" cy="250" r="60" stroke="#75B043" strokeWidth="1" strokeDasharray="15 5" fill="none" />
            <path d="M200,130 A120,120 0 0,1 200,370 A120,120 0 0,1 200,130" stroke="#D63384" strokeWidth="0.8" fill="none" />
            <path d="M200,130 A120,120 0 0,1 200,370 A120,120 0 0,1 200,130" stroke="#D63384" strokeWidth="0.8" fill="none" transform="rotate(30 200 250)" />
            <path d="M200,130 A120,120 0 0,1 200,370 A120,120 0 0,1 200,130" stroke="#D63384" strokeWidth="0.8" fill="none" transform="rotate(60 200 250)" />
            <path d="M200,130 A120,120 0 0,1 200,370 A120,120 0 0,1 200,130" stroke="#D63384" strokeWidth="0.8" fill="none" transform="rotate(90 200 250)" />
            <path d="M200,130 A120,120 0 0,1 200,370 A120,120 0 0,1 200,130" stroke="#D63384" strokeWidth="0.8" fill="none" transform="rotate(120 200 250)" />
            <path d="M200,130 A120,120 0 0,1 200,370 A120,120 0 0,1 200,130" stroke="#D63384" strokeWidth="0.8" fill="none" transform="rotate(150 200 250)" />
          </g>

          {/* Slow-spinning Sacred Geometry / Mandala SVG on Right (Reverse Spin) */}
          <g className="animate-spin-slow-reverse origin-[1000px_250px]">
            <circle cx="1000" cy="250" r="140" stroke="#00A8E8" strokeWidth="1" strokeDasharray="8 6" fill="none" />
            <circle cx="1000" cy="250" r="100" stroke="#D63384" strokeWidth="1" strokeDasharray="4 8" fill="none" />
            <circle cx="1000" cy="250" r="70" stroke="#FBC02D" strokeWidth="1.2" strokeDasharray="12 4" fill="none" />
            <path d="M1000,110 A140,140 0 0,1 1000,390 A140,140 0 0,1 1000,110" stroke="#00A8E8" strokeWidth="0.8" fill="none" />
            <path d="M1000,110 A140,140 0 0,1 1000,390 A140,140 0 0,1 1000,110" stroke="#00A8E8" strokeWidth="0.8" fill="none" transform="rotate(45 1000 250)" />
            <path d="M1000,110 A140,140 0 0,1 1000,390 A140,140 0 0,1 1000,110" stroke="#00A8E8" strokeWidth="0.8" fill="none" transform="rotate(90 1000 250)" />
            <path d="M1000,110 A140,140 0 0,1 1000,390 A140,140 0 0,1 1000,110" stroke="#00A8E8" strokeWidth="0.8" fill="none" transform="rotate(135 1000 250)" />
          </g>
        </svg>

        <div className="max-w-7xl mx-auto px-6 text-center space-y-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-4"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#E68A65]">Incredible Transformations</span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-primary">Real Results from Real Women</h2>
            <p className="text-text-muted text-sm sm:text-base font-semibold max-w-lg mx-auto">See before and after case histories of women who regained their confidence through the 7 Pillars approach.</p>
          </motion.div>

          {/* Scrolling image marquee — larger images */}
          <div className="w-full overflow-hidden relative py-8 bg-gradient-to-br from-white/60 to-pink-50/30 backdrop-blur-sm rounded-[2.5rem] shadow-premium border border-pink-100/30">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none rounded-l-[2.5rem]" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none rounded-r-[2.5rem]" />

            <div className="flex gap-7 animate-marquee hover:play-state-paused cursor-pointer">
              {[...Array(2)].map((_, loopIdx) => (
                <div key={loopIdx} className="flex gap-7 shrink-0">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 109].map((num) => (
                    <div 
                      key={num}
                      onClick={() => setLightboxImage(`/portfolio/p${num}.avif`)}
                      className="relative w-60 md:w-64 aspect-[3/4] rounded-2xl overflow-hidden border-2 border-white shadow-lg flex-shrink-0 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer group"
                    >
                      <Image 
                        src={`/portfolio/p${num}.avif`} 
                        fill 
                        sizes="260px" 
                        alt={`Transformation Result ${num}`} 
                        className="object-cover group-hover:brightness-110 transition-all duration-300" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div>
            <Link
              href="/gallery"
              className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-2xl font-bold text-xs uppercase tracking-widest inline-flex items-center gap-2 hover:-translate-y-0.5 transition-all cursor-pointer shadow-premium hover:shadow-premium-hover"
            >
              View More Transformations
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Glow Wellness Hub Section with Scroll Anchor ID */}
      <div id="wellness-dashboard" className="scroll-mt-24">
        <GlowWellnessHub onOpenBooking={() => setIsBookingOpen(true)} />
      </div>



      {/* YouTube Shorts Showcase */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00A8E8]">Wellness in Action</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-primary">Daily Glow Insights & Shorts</h2>
          <p className="text-text-muted text-sm font-semibold max-w-xl mx-auto">
            Watch quick breathing techniques, workout routines, nutrition tips, and transformation highlights directly from Coach Garima.
          </p>
        </div>

        {/* Video Player Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            "M0f1RoFErC4",
            "Jyi9oDvoia0",
            "BNN-OUnEYC8",
            "48TcDmIocbc",
            "UwotNxIby3A",
            "Qmx1y5bDjHU"
          ].map((videoId, idx) => (
            <motion.div
              key={videoId}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="relative bg-white p-3.5 rounded-[2rem] border border-pink-100 shadow-premium overflow-hidden group transition-all duration-300"
            >
              <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-100">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=0&mute=0&controls=1&rel=0`}
                  title={`Glow with Garima YouTube Short ${idx + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Breathing Trainer game instead of pre-booking banner */}
      <section className="py-16 md:py-24">
        <BreathingTrainer onBookConsultation={() => setIsBookingOpen(true)} />
      </section>

      {/* Scrolling text reviews — Healing Feedback */}
      <section className="py-16 md:py-24 border-y border-pink-100/30 bg-gradient-to-br from-white/60 via-pink-50/20 to-white/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-8 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-3"
          >
            <span className="text-sm font-extrabold uppercase tracking-widest text-[#E68A65]">✨ Healing Feedback</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-primary">What Our Clients Say</h2>
            <p className="text-base text-text-muted font-semibold max-w-xl mx-auto">Hear directly from women whose lives transformed through the 7 Pillars approach.</p>
          </motion.div>
          
          <div className="w-full overflow-hidden relative py-8 bg-gradient-to-br from-white via-pink-50/20 to-white border border-pink-100/40 rounded-[2.5rem] shadow-premium">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none rounded-l-[2.5rem]" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none rounded-r-[2.5rem]" />

            <div className="flex gap-8 animate-marquee-slow hover:play-state-paused cursor-pointer">
              {[...Array(2)].map((_, loopIdx) => (
                <div key={loopIdx} className="flex gap-8 shrink-0">
                  {[
                    { name: "Ankita Dixit", location: "Delhi", text: "Change in body composition, significant fat loss, gut inflammation dropped, healed knee joint pain naturally. The 7 Pillar approach changed my life!", tag: "Fat Loss & Joint Healing" },
                    { name: "Rubi Singh", location: "Mumbai", text: "Severe skin inflammation healed completely through organic lifestyle adjustments and hormone balancing diet. I feel 10 years younger!", tag: "Skin & Hormone Balance" },
                    { name: "Jyoti Sareen", location: "Jaipur", text: "Transformative fat loss journey. Garima Ma'am helped change not just my weight, but my entire mindset. Lost 14 kg sustainably.", tag: "Mindset Transformation" },
                    { name: "Vinay Panwar", location: "Delhi", text: "Thyroid markers stabilized, childhood constipation cleared completely, and gained immense emotional and physical strength after 30 years.", tag: "Thyroid & Constipation" },
                    { name: "Shruti Solanki", location: "Pune", text: "Dropped 11 kg of stubborn weight, regained core flexibility, and found mental calmness with the 7 Pillars. Best decision ever!", tag: "Weight Loss & Flexibility" },
                    { name: "Simran Vaswani", location: "Bangalore", text: "Healed severe menopause facial swelling, reduced facial fat, and avoided clinic treatments, feeling younger and highly energized.", tag: "Menopause Healing" },
                    { name: "Nikita Dixit", location: "Lucknow", text: "PCOD cycles regularized naturally without synthetic drugs, regular periods within 3 months, and achieved consistent gut wellness.", tag: "PCOD Recovery" }
                  ].map((review, idx) => (
                    <div 
                      key={idx} 
                      className="w-[290px] sm:w-[360px] md:w-[420px] bg-white p-5 sm:p-8 rounded-[1.5rem] border border-pink-100/40 shadow-md flex flex-col justify-between shrink-0 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
                    >
                      {/* Decorative quote SVG */}
                      <svg className="absolute top-4 left-6 w-10 h-10 opacity-[0.06] pointer-events-none" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>

                      {/* Tag badge */}
                      <div className="mb-3 sm:mb-4">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-pink-50 text-primary border border-pink-100/50">
                          {review.tag}
                        </span>
                      </div>

                      <p className="text-sm sm:text-base text-text-muted italic leading-relaxed font-semibold flex-1">
                        &ldquo;{review.text}&rdquo;
                      </p>

                      <div className="flex items-center gap-3 mt-4 pt-4 sm:mt-6 sm:pt-5 border-t border-pink-50">
                        {/* Avatar circle */}
                        <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-extrabold text-xs sm:text-sm shadow-md">
                          {review.name.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <span className="text-xs sm:text-sm font-bold text-text-main block">{review.name}</span>
                          <span className="text-[10px] sm:text-xs text-text-muted font-semibold">{review.location}</span>
                        </div>
                        <div className="flex items-center gap-0.5 text-amber-400">
                          {[...Array(5)].map((_, starIdx) => (
                            <Star key={starIdx} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setLightboxImage(null)}
          >
            <button 
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="relative w-full max-w-lg max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxImage}
                width={600}
                height={800}
                alt="Enlarged transformation result"
                className="w-full h-auto object-contain rounded-3xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
