"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PillarGrid from "../components/PillarGrid";
import { ArrowRight, CheckCircle2, ShieldAlert, HeartHandshake } from "lucide-react";

export default function Pillars() {
  const detailedPillars = [
    {
      num: "01",
      title: "Nutrition",
      tagline: "Nourishing Your Cells, Not Starving Them",
      details: "Crash diets shut down your thyroid and trigger starvation responses. We build custom nutritional guides centered on standard, home-cooked food. No hard-to-find ingredients, no calorie-counting anxiety. You will learn to eat foods that support metabolic energy, thyroid recovery, and stable blood sugar."
    },
    {
      num: "02",
      title: "Physical Activity",
      tagline: "Active Living Tailored to Your Biology",
      details: "You do not need to spend hours at the gym. We design home-friendly exercise and yoga routines that suit your current strength and energy levels. The focus is on progressive movement, strength, and consistency without exhausting your body."
    },
    {
      num: "03",
      title: "Recovery & Rest",
      tagline: "Deep Sleep & Cellular Healing",
      details: "Sleep is when your body repairs and resets its metabolic functions. We utilize circadian rhythm alignment and restorative practices like Yog Nidra to induce deep, high-quality recovery. This balances hunger hormones and boosts daily energy levels."
    },
    {
      num: "04",
      title: "Stress Management",
      tagline: "Soothing the Cortisol Switch",
      details: "Cortisol (the stress hormone) is a primary trigger for abdominal fat storage and sleep disruptions. We incorporate gentle, guided breathing exercises, meditations, and nervous system regulation to clear biological blocks to weight loss and healing."
    },
    {
      num: "05",
      title: "Environment",
      tagline: "Supporting Your Lifestyle and Spaces",
      details: "Your external environment directly affects internal health. We address lifestyle stressors, reduce daily endocrine disruptors, and help you structure your physical and social spaces to make healthy choices effortless and sustainable."
    },
    {
      num: "06",
      title: "Gut Health",
      tagline: "The Core of Hormonal Harmony",
      details: "A healthy gut is essential for hormonal conversion, nutrient absorption, and immune function. We focus on healing chronic bloating, constipation, and leaky gut using natural digestive enzymes, prebiotic/probiotic foods, and gut-soothing strategies."
    },
    {
      num: "07",
      title: "Habit Transformation",
      tagline: "Micro-habits for Lifelong Success",
      details: "True transformation happens through daily consistency, not overnight resets. We break down your goals into easy micro-habits, supported by customized tracking sheets and WhatsApp accountability, to make these changes a permanent part of your identity."
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
              href="/programs/yoga-hybrid"
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
