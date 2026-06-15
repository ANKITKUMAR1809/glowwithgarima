"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Compass, Heart, ShieldCheck, Sparkles, BookOpen } from "lucide-react";

export default function About() {
  const certifications = [
    {
      title: "Certified Holistic Health Coach",
      issuer: "Global Integrative Wellness Systems",
      desc: "Specialized training in root-cause identification, nutritional profiling, and sustainable behavioral psychology."
    },
    {
      title: "Female Fat Loss Expert",
      issuer: "Metabolic Sciences Academy",
      desc: "Specialized in female endocrinology, thyroid-aligned metabolism adjustments, muscle conditioning, and fat loss pathways."
    },
    {
      title: "Nutrition, Supplements, and Fitness Specialist",
      issuer: "Advanced Sports Sciences Board",
      desc: "Scientific approach to micro-nutrition, organic supplement dosing, and home-friendly exercise plans."
    }
  ];

  const corePhilosophy = [
    {
      icon: Heart,
      title: "Hormone Alignment First",
      desc: "Traditional fitness programs fail because they ignore hormones. We prioritize lowering cortisol (stress) and balancing Thyroid/PCOS markers before aggressive weight loss."
    },
    {
      icon: Compass,
      title: "Whole-Food Realism",
      desc: "We don't sell expensive meal replacements or require calorie counting. You will achieve results eating home-cooked, standard Indian meals."
    },
    {
      icon: Sparkles,
      title: "Sustainable Habit-Forming",
      desc: "Crash programs cause rebound weight gain. We build routines gradually at your own pace so that the transformation remains permanent."
    }
  ];

  return (
    <div className="bg-grid-pattern glow-mesh pb-32">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 space-y-24">
        
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">About Our Founder</span>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-primary leading-tight">
            Reversing Struggles, <br />
            <span className="text-secondary">Igniting Radiant Health</span>
          </h1>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed font-semibold">
            Read the journey of Garima Tiwari and how her personal battle led to a mission that has transformed over 1,100+ lives.
          </p>
        </div>

        {/* Founder Story Block */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-premium border-4 border-white bg-white">
              <Image
                src="/aboutUsImage.avif"
                alt="Garima Tiwari Story"
                fill
                sizes="(max-w-768px) 100vw, 400px"
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute w-full max-w-sm aspect-[3/4] rounded-[2.5rem] border-2 border-accent-gold translate-x-4 translate-y-4 -z-10" />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-primary leading-snug">
              From Rock Bottom to 20kg Lost & Balanced Hormones
            </h2>
            <div className="space-y-4 text-text-muted text-sm sm:text-base leading-relaxed font-semibold">
              <p>
                &ldquo;For years, I was trapped in a cycle of constant exhaustion, brain fog, and unexplained weight gain. I was diagnosed with a severe thyroid issue that disrupted my metabolism. I tried standard calorie restriction and spent hours doing intense workouts, but my scale remained stuck and my energy levels bottomed out.&rdquo;
              </p>
              <p>
                &ldquo;That is when I stopped listening to generic fitness advice and began researching functional physiology. I realized that my body was under chronic hormonal stress. I redesigned my lifestyle: aligning my meals with my thyroid requirements, lowering cortisol through yoga and guided mindfulness, and focusing on restorative sleep.&rdquo;
              </p>
              <p>
                &ldquo;The results were miraculous. I reversed my thyroid symptoms naturally, restored my energy, and shed 20 kg. That personal transformation changed my life, and I realized that thousands of women were fighting the same silent battle with their bodies. I founded **Glow With Garima** to give women a clear, sustainable roadmap back to vitality.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* Certifications Block */}
        <section className="space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary font-medium">Expert Guidance</span>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-primary">Certified Science & Experience</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -6 }}
                className="p-8 bg-white border border-pink-100/50 rounded-3xl shadow-premium hover:shadow-premium-hover transition-all duration-300 relative flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center text-primary">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-primary">{cert.title}</h3>
                  <p className="text-xs text-text-muted leading-relaxed font-semibold">{cert.desc}</p>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-secondary mt-8 block">
                  {cert.issuer}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Philosophy Block */}
        <section className="bg-white rounded-[2.5rem] md:rounded-[3.5rem] border border-pink-100/50 shadow-premium p-8 md:p-12 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Core Values</span>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-primary">Our Wellness Philosophy</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[#1A2421]">
            {corePhilosophy.map((phil, index) => {
              const Icon = phil.icon;
              return (
                <div key={index} className="space-y-4 p-6 bg-pink-50/20 rounded-2xl border border-pink-100/30">
                  <div className="p-3 bg-pink-100 text-primary w-fit rounded-xl">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-primary">{phil.title}</h3>
                  <p className="text-xs text-text-muted leading-relaxed font-semibold">{phil.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Why Women Struggle Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">The Physiological Core</span>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-primary leading-snug">Why Standard Fitness Programs Fail Women</h2>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed font-semibold">
              Most fitness programs are designed for male biology, focusing entirely on calorie deficits and intense cardiovascular training. For women with thyroid blocks, PCOD, or high stress levels, this approach creates extreme cortisol spikes, leading to further weight retention, thyroid flareups, and menstrual delays.
            </p>
            <div className="space-y-3 font-bold text-sm text-text-main">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-accent shrink-0" />
                <span>Thyroid Dysfunction (stuck metabolism) requires metabolic repair.</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-accent shrink-0" />
                <span>PCOD/PCOS needs insulin management and natural nutritional support.</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-accent shrink-0" />
                <span>Chronic stress (high cortisol) tells the body to store fat as a defense.</span>
              </div>
            </div>
          </div>

          <div className="p-8 bg-white border border-pink-100 rounded-[2.2rem] shadow-premium relative overflow-hidden flex flex-col justify-center space-y-6">
            <h3 className="font-display font-bold text-xl text-primary border-b border-zinc-100 pb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-secondary" />
              Our Miracle Metrics
            </h3>
            <div className="space-y-4">
              <div>
                <span className="text-xs text-text-muted block font-bold">Reversing Stuck Weight</span>
                <span className="font-display font-extrabold text-lg text-primary">Clients have resolved weight issues stuck for up to 22 years.</span>
              </div>
              <div>
                <span className="text-xs text-text-muted block font-bold">Empowering Transformations</span>
                <span className="font-display font-extrabold text-lg text-secondary">1100+ active women transformations completed.</span>
              </div>
              <div>
                <span className="text-xs text-text-muted block font-bold">Classes Led</span>
                <span className="font-display font-extrabold text-lg text-accent">Over 4,000 live interactive yoga & diet monitoring sessions.</span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
