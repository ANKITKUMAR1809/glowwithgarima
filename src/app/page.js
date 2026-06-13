"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Heart, 
  Star, 
  ShieldCheck, 
  CheckCircle,
  TrendingUp,
  Bookmark,
  Award,
  BookOpen
} from "lucide-react";

// Components
import BookingModal from "./components/BookingModal";
import BreathingTrainer from "./components/BreathingTrainer";
import BloomingLotus from "./components/BloomingLotus";
import BookShowcase from "./components/BookShowcase";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="space-y-32 pb-32 bg-grid-pattern glow-mesh">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:py-28">
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
                className="px-8 py-4.5 bg-primary hover:bg-primary-dark text-white font-bold rounded-2xl text-sm transition-all shadow-premium cursor-pointer flex items-center justify-center gap-2 group"
              >
                Book Discovery Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <Link
                href="/offerings"
                className="px-8 py-4.5 bg-white hover:bg-pink-50/20 border border-pink-100/60 text-primary font-bold rounded-2xl text-sm transition-all shadow-sm flex items-center justify-center gap-2"
              >
                View Programs & Book
              </Link>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-pink-100/60 max-w-md">
              <div>
                <span className="font-display font-extrabold text-2xl md:text-3xl text-primary block">1100+</span>
                <span className="text-xs text-text-muted font-bold">Happy Clients</span>
              </div>
              <div>
                <span className="font-display font-extrabold text-2xl md:text-3xl text-secondary block">4000+</span>
                <span className="text-xs text-text-muted font-bold">Classes Led</span>
              </div>
              <div>
                <span className="font-display font-extrabold text-2xl md:text-3xl text-accent block">5+</span>
                <span className="text-xs text-text-muted font-bold">Years Exp.</span>
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
                <span className="text-[10px] text-text-muted font-semibold">100+ Life Changes</span>
              </div>
            </div>

            {/* Floating widget 2 - Cyan Blue Theme */}
            <div className="absolute -right-6 top-16 bg-white/95 backdrop-blur-md px-5 py-4 rounded-2xl shadow-premium border border-blue-50 flex items-center gap-3 animate-float-delayed max-w-[180px]">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-secondary">
                <Star className="w-4 h-4 fill-current" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-[#251A20] block">Thyroid Reversal</span>
                <span className="text-[10px] text-text-muted font-semibold">Natural Approach</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet Garima Short Preview */}
      <section className="max-w-7xl mx-auto px-6">
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

      {/* Featured Book Section */}
      <BookShowcase />

      {/* 7 Pillars Short Preview */}
      <section className="max-w-7xl mx-auto px-6 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary">Our Methodology</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-primary">The 7 Pillars Blueprint</h2>
          <p className="text-text-muted text-sm sm:text-base font-semibold max-w-xl mx-auto">
            We guide you step-by-step through a scientifically structured system to unlock vibrant health without counting calories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white border border-pink-100/50 rounded-3xl shadow-sm hover:shadow-premium transition-shadow duration-300 space-y-4 relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-pink-50 text-primary flex items-center justify-center font-bold text-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300">1</div>
            <h3 className="font-display font-bold text-lg text-primary">Sustainable Nutrition</h3>
            <p className="text-xs text-text-muted leading-relaxed font-semibold">Enjoy satisfying home food that supports your biology. No starvation or skipping meals.</p>
          </div>
          <div className="p-8 bg-white border border-pink-100/50 rounded-3xl shadow-sm hover:shadow-premium transition-shadow duration-300 space-y-4 relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-secondary flex items-center justify-center font-bold text-lg group-hover:bg-secondary group-hover:text-white transition-colors duration-300">2</div>
            <h3 className="font-display font-bold text-lg text-primary">Hormonal Balance</h3>
            <p className="text-xs text-text-muted leading-relaxed font-semibold">Specifically structured diets and supplement checks to reverse Thyroid, PCOD, and Menstrual delays.</p>
          </div>
          <div className="p-8 bg-white border border-pink-100/50 rounded-3xl shadow-sm hover:shadow-premium transition-shadow duration-300 space-y-4 relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-accent flex items-center justify-center font-bold text-lg group-hover:bg-accent group-hover:text-white transition-colors duration-300">3</div>
            <h3 className="font-display font-bold text-lg text-primary">Restorative Wellness</h3>
            <p className="text-xs text-text-muted leading-relaxed font-semibold">Ancient Yog Nidra techniques and guided breathwork to target cortisol levels and ease stress.</p>
          </div>
        </div>

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

      {/* Quick transformations teaser */}
      <section className="bg-gradient-to-r from-pink-500/5 via-secondary/5 to-transparent py-20 border-y border-pink-100/30">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-16">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Incredible Transformations</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-primary">Real Results from Real Women</h2>
            <p className="text-text-muted text-sm font-semibold">See before and after case histories of women who regained their confidence.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-premium border border-white hover:scale-103 transition-transform duration-300">
              <Image src="/portfolio/p1.avif" fill sizes="200px" alt="Client 1" className="object-cover" />
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-premium border border-white hover:scale-103 transition-transform duration-300">
              <Image src="/portfolio/p2.avif" fill sizes="200px" alt="Client 2" className="object-cover" />
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-premium border border-white hover:scale-103 transition-transform duration-300">
              <Image src="/portfolio/p3.avif" fill sizes="200px" alt="Client 3" className="object-cover" />
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-premium border border-white hover:scale-103 transition-transform duration-300">
              <Image src="/portfolio/p4.avif" fill sizes="200px" alt="Client 4" className="object-cover" />
            </div>
          </div>

          <div>
            <Link
              href="/gallery"
              className="px-6 py-3.5 bg-secondary hover:bg-blue-600 text-white rounded-xl font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 hover:-translate-y-0.5 transition-all cursor-pointer shadow-md shadow-blue-500/10"
            >
              View All Transformations
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* YouTube Shorts Showcase */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
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
      <section className="py-8">
        <BreathingTrainer onBookConsultation={() => setIsBookingOpen(true)} />
      </section>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </div>
  );
}
