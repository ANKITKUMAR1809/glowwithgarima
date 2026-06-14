"use client";

import { motion } from "framer-motion";
import { Apple, Activity, Moon, Brain, Leaf, Shield, Heart } from "lucide-react";

export default function PillarGrid() {
  const pillars = [
    {
      icon: Apple,
      title: "Nutrition",
      description: "Nourishing whole foods, balanced macronutrients, and simple home-cooked meals tailored to your biology. No starvation or crash diets.",
      badge: "Healthy Eating",
      color: "from-emerald-50 to-teal-50/20 text-emerald-800 border-emerald-100"
    },
    {
      icon: Activity,
      title: "Physical Activity",
      description: "Home-friendly movement, progressive strength training, and active living tailored to boost your metabolic rate safely without exhaustion.",
      badge: "Movement",
      color: "from-orange-50 to-red-50/20 text-orange-700 border-orange-100"
    },
    {
      icon: Moon,
      title: "Recovery & Rest",
      description: "Prioritizing deep sleep, circadian alignment, and restorative rest (including ancient Yog Nidra) to reset cellular repair and hormone balance.",
      badge: "Sleep & Reset",
      color: "from-indigo-50 to-violet-50/20 text-indigo-700 border-indigo-100"
    },
    {
      icon: Brain,
      title: "Stress Management",
      description: "Regulating cortisol levels through conscious breathing, mindfulness, and nervous system regulation to unlock natural fat loss.",
      badge: "Mindfulness",
      color: "from-blue-50 to-indigo-50/20 text-blue-700 border-blue-100"
    },
    {
      icon: Leaf,
      title: "Environment",
      description: "Cultivating a supportive physical and emotional space, reducing daily endocrine disruptors, and structuring healthy, clean surroundings.",
      badge: "Lifestyle",
      color: "from-lime-50 to-emerald-50/20 text-emerald-800 border-lime-100"
    },
    {
      icon: Shield,
      title: "Gut Health",
      description: "Restoring digestive health, optimizing nutrient absorption, and strengthening gut microflora to improve immunity and hormonal harmony.",
      badge: "Digestion",
      color: "from-purple-50 to-pink-50/20 text-purple-700 border-purple-100"
    },
    {
      icon: Heart,
      title: "Habit Transformation",
      description: "Building permanent routines through micro-habits, accountability trackers, and daily progress to ensure long-term sustainability.",
      badge: "Consistency",
      color: "from-pink-50 to-rose-50/20 text-rose-700 border-rose-100"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
    >
      {pillars.map((pillar, index) => {
        const Icon = pillar.icon;
        return (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className={`p-8 bg-gradient-to-br ${pillar.color} border rounded-[2.2rem] shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between overflow-hidden group`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-white/80 border border-zinc-100 px-3 py-1 rounded-full text-zinc-500">
                  {pillar.badge}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-primary mb-3">
                {pillar.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {pillar.description}
              </p>
            </div>
            
            {/* Corner Decorative shape */}
            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-white/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
