"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PillarGrid from "../components/PillarGrid";
import { ArrowRight, CheckCircle2, ShieldAlert, HeartHandshake } from "lucide-react";

export default function Pillars() {
  const detailedPillars = [
    {
      num: "01",
      title: "Sustainable Nutrition",
      tagline: "Nourishing Your Cells, Not Starving Them",
      details: "Crash diets shut down your thyroid and trigger starvation responses. We build custom nutritional guides centered on standard, home-cooked food. No hard-to-find ingredients, no calorie-counting anxiety. You will learn to eat foods that support metabolic energy, thyroid recovery, and stable blood sugar."
    },
    {
      num: "02",
      title: "Female Fat Loss Science",
      tagline: "Fat Loss vs. Scale Weight Loss",
      details: "Losing water and muscle mass destroys your metabolism, causing you to rebound. Our approach focuses specifically on subcutaneous and visceral fat reduction while maintaining muscle tone. This body composition shift ensures you look defined, feel strong, and maintain your results forever."
    },
    {
      num: "03",
      title: "Hormonal Balancing",
      tagline: "Unlocking Your Stuck Metabolism",
      details: "If you have a slow thyroid or insulin resistance (PCOD/PCOS), standard deficits won't work. We align your nutritional timing and food choices to reduce inflammation, balance progesterone and estrogen, and boost thyroid conversion (T4 to active T3) naturally."
    },
    {
      num: "04",
      title: "Guided Meditation",
      tagline: "Soothing the Cortisol Switch",
      details: "Cortisol (the stress hormone) is a primary trigger for abdominal fat storage and sleep disruptions. We incorporate gentle, guided breathing exercises and meditations into your routine. By calming the sympathetic nervous system, we clear the biological blocks to fat loss."
    },
    {
      num: "05",
      title: "Yog Nidra & Deep Recovery",
      tagline: "Cellular Healing through Sleep",
      details: "Sleep is when your body repairs and resets its metabolic functions. We utilize Yog Nidra—an ancient practice of conscious deep sleep—to induce deep recovery. This balances hunger hormones (leptin and ghrelin) and boosts daily energy levels."
    },
    {
      num: "06",
      title: "Customized Movement",
      tagline: "Exercise Tailored to Your Biology",
      details: "You do not need to spend hours at the gym. We design home-friendly exercise and yoga routines that suit your current strength levels and fit into a busy workday. The focus is on consistency and progressive habit building."
    },
    {
      num: "07",
      title: "1-on-1 Guidance & Habits",
      tagline: "Your Daily Support Network",
      details: "Change is hard when done alone. We provide WhatsApp monitoring and custom daily habit checklists. Garima checks in with you directly, tracking your patterns and adjusting the program based on real-time feedback to ensure you remain successful."
    }
  ];

  return (
    <div className="bg-grid-pattern glow-mesh pb-32">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 space-y-24">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">Our Framework</span>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-primary leading-tight">
            The 7-Pillar Strategy
          </h1>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed font-semibold max-w-xl mx-auto">
            Unlock the secrets to natural hormone regulation, metabolic repair, and permanent fat loss using a complete, step-by-step framework.
          </p>
        </div>

        {/* Grid Component */}
        <section className="space-y-8">
          <h2 className="font-display font-extrabold text-2xl text-primary text-center">Framework Overview</h2>
          <PillarGrid />
        </section>

        {/* Detailed Pillars Sections */}
        <section className="space-y-16">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary font-medium">Deep Dive</span>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-primary mt-2">How Each Pillar Works For You</h2>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {detailedPillars.map((pillar, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -4 }}
                className="flex flex-col md:flex-row gap-6 p-8 bg-white border border-pink-100/40 rounded-[2rem] shadow-premium hover:shadow-premium-hover transition-all duration-350 relative"
              >
                <div className="font-display font-extrabold text-4xl text-primary/20 md:text-5xl select-none md:w-20 shrink-0">
                  {pillar.num}
                </div>
                <div className="space-y-3 flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="font-display font-extrabold text-xl text-primary">{pillar.title}</h3>
                    <span className="text-[10px] font-bold px-3 py-1 bg-pink-50 text-primary w-fit rounded-full uppercase tracking-wider">
                      {pillar.tagline}
                    </span>
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed font-semibold">
                    {pillar.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Action Banner */}
        <section className="max-w-4xl mx-auto text-center bg-white border border-pink-100/60 rounded-[2.5rem] p-8 md:p-12 shadow-premium space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full blur-xl pointer-events-none" />
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-primary leading-snug">
            Ready to Implement the 7 Pillars in Your Life?
          </h2>
          <p className="text-text-muted text-sm sm:text-base max-w-xl mx-auto font-semibold">
            Garima will customize each of these 7 pillars specifically for your hormone indicators, lifestyle, and dietary preferences.
          </p>
          <div>
            <Link
              href="/offerings"
              className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl text-sm transition-all shadow-premium inline-flex items-center gap-2 hover:-translate-y-0.5"
            >
              Select Your Program & Book
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
