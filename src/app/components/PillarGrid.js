"use client";

import { motion } from "framer-motion";
import { Apple, Flame, Activity, Brain, Moon, Sparkles, MessageSquare } from "lucide-react";

export default function PillarGrid() {
  const pillars = [
    {
      icon: Apple,
      title: "Sustainable Nutrition",
      description: "No crash dieting or severe starvation. Eat nourishing home-cooked food that is satisfying and maintains your energy levels throughout the day.",
      badge: "Healthy Eating",
      color: "from-emerald-50 to-teal-50/20 text-emerald-800 border-emerald-100"
    },
    {
      icon: Flame,
      title: "Female Fat Loss Expert",
      description: "Scientific approach focused on metabolic enhancement, fat loss (not just scale weight), and building lean, toned muscles from home.",
      badge: "Fat Loss Focus",
      color: "from-orange-50 to-red-50/20 text-orange-700 border-orange-100"
    },
    {
      icon: Activity,
      title: "Hormonal Balancing",
      description: "Natural, lifestyle-based protocols specifically designed to help reverse thyroid dysfunction, manage PCOD/PCOS, and ease menopause symptoms.",
      badge: "Hormonal Health",
      color: "from-purple-50 to-pink-50/20 text-purple-700 border-purple-100"
    },
    {
      icon: Brain,
      title: "Mindfulness & Meditation",
      description: "Manage stress hormones (cortisol) which block fat loss. Integrate simple, guided breathing exercises and meditations into daily routine.",
      badge: "Stress Reduction",
      color: "from-blue-50 to-indigo-50/20 text-blue-700 border-blue-100"
    },
    {
      icon: Moon,
      title: "Yog Nidra & Sleep",
      description: "Restorative sleep is key to cellular recovery. Incorporate ancient Yog Nidra practices to induce deep sleep, soothe nerves, and boost recovery.",
      badge: "Cellular Healing",
      color: "from-indigo-50 to-violet-50/20 text-indigo-700 border-indigo-100"
    },
    {
      icon: Sparkles,
      title: "Sustainable Fitness",
      description: "Customized workouts tailored to your current fitness level, time availability, and space, designed to fit a busy lifestyle without stress.",
      badge: "Movement & Strength",
      color: "from-amber-50 to-orange-50/20 text-amber-800 border-amber-100"
    },
    {
      icon: MessageSquare,
      title: "1-on-1 Guidance",
      description: "Unwavering support, WhatsApp follow-ups, and custom habit-building sheets to keep you accountable, motivated, and successful.",
      badge: "Unwavering Support",
      color: "from-emerald-50 to-lime-50/20 text-emerald-700 border-emerald-100"
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
