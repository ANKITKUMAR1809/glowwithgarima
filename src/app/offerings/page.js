"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, 
  HelpCircle, 
  Sparkles, 
  BookOpen, 
  ChevronDown, 
  ChevronUp, 
  Heart, 
  Clock, 
  Calendar, 
  User, 
  Users, 
  ArrowRight,
  Info,
  Apple,
  TrendingUp,
  Award
} from "lucide-react";
import BookingModal from "../components/BookingModal";
import { useCurrency } from "../context/CurrencyContext";

export default function Offerings() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedListing, setSelectedListing] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [activeTab, setActiveTab] = useState("transformational"); // "transformational" or "consultations"

  const { currency, formatPrice, formatActualPrice } = useCurrency();

  // Sub-states for interactive selectors
  const [yogaGroupPlan, setYogaGroupPlan] = useState(0); // index of group plan
  const [faceYogaPlan, setFaceYogaPlan] = useState(0); // index of face yoga plan
  const [mealPlanOption, setMealPlanOption] = useState(0); // index of meal plan option

  const openBooking = (listingId) => {
    setSelectedListing(listingId);
    setIsBookingOpen(true);
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // Group Yoga plans
  const yogaGroupPlans = [
    {
      id: "yoga-hybrid-group-3days",
      title: "1 Month Plan (3 Days/wk)",
      duration: "Monthly Plan",
      price: formatPrice("yoga-hybrid-group-3days"),
      actualPrice: formatPrice("yoga-hybrid-group-3days"),
      monthlyBreakdown: currency === "USD" ? "$29/month" : "₹1,999/month",
      badge: "7 Day Trial Available"
    },
    {
      id: "yoga-hybrid-group-5days",
      title: "1 Month Plan (5 Days/wk)",
      duration: "Monthly Plan",
      price: formatPrice("yoga-hybrid-group-5days"),
      actualPrice: formatPrice("yoga-hybrid-group-5days"),
      monthlyBreakdown: currency === "USD" ? "$39/month" : "₹2,999/month",
      badge: "7 Day Trial Available"
    }
  ];

  // Face Yoga / Anti-Aging plans
  const faceYogaPlans = [
    {
      id: "anti-aging-33",
      title: "33 Sessions",
      duration: "3 Month Plan",
      price: formatPrice("anti-aging-33"),
      perks: "Includes customized morning/night drinks, supplements, skin care products, and yoga"
    },
    {
      id: "anti-aging-22",
      title: "22 Sessions",
      duration: "2 Month Plan",
      price: formatPrice("anti-aging-22"),
      perks: "Includes full facial exercise, natural glow packs, and massage tools guides"
    },
    {
      id: "anti-aging-11",
      title: "11 Sessions",
      duration: "1 Month Plan",
      price: formatPrice("anti-aging-11"),
      perks: "Includes core exercises, breathing technique, and jade roller guidance"
    }
  ];

  // Meal Plan pricing options
  const mealPlanOptions = [
    {
      id: "meal-plan-silver",
      title: "Silver Tier",
      price: formatPrice("meal-plan-silver"),
      actualPrice: formatActualPrice("meal-plan-silver"),
      description: "Basic customized 90 days nutrition plan with standard support & weekly followups.",
      badge: "Popular"
    },
    {
      id: "meal-plan-gold",
      title: "Gold Tier",
      price: formatPrice("meal-plan-gold"),
      actualPrice: formatActualPrice("meal-plan-gold"),
      description: "Comprehensive 90 days nutrition, priority chat support, and natural cycle syncing blueprints.",
      badge: "Recommended"
    },
    {
      id: "meal-plan-platinum",
      title: "Platinum Tier",
      price: formatPrice("meal-plan-platinum"),
      actualPrice: formatActualPrice("meal-plan-platinum"),
      description: "Premium 90 days nutrition, 1-on-1 calls with Coach Garima, 24/7 priority support, cycle syncing & gut restoration guides.",
      badge: "Premium"
    }
  ];

  // Traditional/discovery call listings
  const legacyPrograms = [
    {
      id: "discovery-45",
      title: "Discovery Call (45 Mins)",
      price: formatPrice("discovery-45"),
      description: "Our premium 1-on-1 diagnostic call to investigate structural blockages in your metabolism.",
      duration: "45 Minutes",
      format: "1-on-1 Google Meet / Phone Call",
      inclusions: [
        "In-depth analysis of your health markers & goals",
        "Investigating thyroid, PCOD, or gut imbalances",
        "Personalized root-cause analysis discussion",
        "Actionable tips for immediate lifestyle adjustments",
        "Pre-call checklist questionnaire to maximize efficiency"
      ],
      badge: "Deep Assessment",
      theme: "border-pink-200/60 bg-white"
    },
    {
      id: "merchandise-book",
      title: "Text for Transformation",
      price: formatPrice("merchandise-book"),
      description: "Our complete 7-Pillars lifestyle guide. Pre-order now to secure a copy with meal blueprints.",
      duration: "Digital Blueprint Guide",
      format: "Instant PDF / WhatsApp Delivery",
      inclusions: [
        "Detailed guides to implement the 7 Pillars",
        "Sample morning/evening routine structures",
        "Thyroid and PCOD friendly recipe ideas",
        "Troubleshooting FAQs for stuck weight",
        "Pre-book discount (30% off the standard price)"
      ],
      badge: "Self-Guided Blueprint",
      theme: "border-primary-light bg-primary text-white"
    },
    {
      id: "discovery-30",
      title: "Discovery Call (30 Mins)",
      price: formatPrice("discovery-30"),
      description: "A focused assessment call for women looking to resolve specific wellness concerns.",
      duration: "30 Minutes",
      format: "1-on-1 Phone Consultation",
      inclusions: [
        "Analysis of your main lifestyle struggles",
        "Quick diet validation and review",
        "Guided next steps recommendation",
        "Direct Q&A with Coach Garima"
      ],
      badge: "Focused Guidance",
      theme: "border-pink-200/60 bg-white"
    }
  ];

  const faqs = [
    {
      q: "Are these programs strictly for females?",
      a: "Yes, absolutely. All programs, batches, group classes, and personal mentoring under Glow with Garima are exclusively designed and conducted for females only."
    },
    {
      q: "How are the hybrid and online classes conducted?",
      a: "Classes are conducted online via live video streaming platforms (e.g. Google Meet or Zoom) with interactive guidance. Recorded remedies or guide PDFs are delivered directly to your WhatsApp or registered email."
    },
    {
      q: "Can I choose my timing for the Personal Session?",
      a: "Yes. The Personal Session (Yoga & Hybrid 6-Month Plan) is designed with maximum flexibility. You can schedule the live mentoring sessions at times that suit your convenience."
    },
    {
      q: "What is the schedule for Online Hybrid Sessions?",
      a: "The group hybrid classes run 12 sessions a month on Wednesday, Friday, and Sunday at 8:30 AM. If there is a network issue or urgent matter, timings are kept flexible to accommodate you."
    },
    {
      q: "Do I need any special equipment for the Hair and Anti-Aging offers?",
      a: "No special equipment is required. For the Anti-Aging program, we guide you on how to use standard face tools (Gua Sha, Jade Roller, or standard spoons). For the Hair Solution, the remedies use natural ingredients you can prepare at home."
    },
    {
      q: "How does the Meal Plan installment option work?",
      a: "For the 3-Month Meal Plan, the total price is ₹18,000 / $219. You pay in two parts: 1st installment (₹9,000 / $110) to begin, and the 2nd installment within 25 days. Alternatively, choosing the one-time payment reduces the price to ₹15,555 / $189."
    }
  ];

  return (
    <div className="bg-grid-pattern glow-mesh pb-32">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 space-y-16">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <div className="flex flex-col items-center gap-2">
            <span className="block text-sm sm:text-base font-display font-extrabold text-[#E68A65] tracking-wide italic">
              &ldquo;We don&apos;t believe in pricing, We just want your Transformation Only&rdquo;
            </span>
            <div className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100/60 rounded-full text-emerald-800 text-xs font-bold shadow-sm uppercase tracking-wider animate-pulse">
              <span>📞 20 min Call & Free Demo Session</span>
            </div>
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-primary block mt-4">GWG Packages</span>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-primary leading-tight">
            Programs & Pricing
          </h1>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed font-semibold">
            Choose a plan that fits your health objectives. Connect with Coach Garima to jumpstart your metabolic, skin, or hair transformation today.
          </p>

          {/* Female Exclusive Notice Banner */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-3 p-4 bg-pink-50 border border-pink-100 rounded-2xl text-left max-w-2xl mx-auto shadow-sm"
          >
            <div className="p-2 bg-primary/10 text-primary rounded-xl shrink-0">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <div>
              <span className="text-xs font-bold text-primary block uppercase tracking-wider">Exclusively for Females</span>
              <span className="text-xs text-text-muted font-bold">
                Please note: All live sessions, personalized nutrition charts, and physical transformation batches are strictly for female clients only.
              </span>
            </div>
          </motion.div>
        </div>

        {/* Custom Premium Tabs Selector */}
        <div className="flex justify-center">
          <div className="bg-white p-1 rounded-xl sm:rounded-2xl border border-pink-100/60 shadow-sm inline-flex gap-1 sm:gap-2 font-display text-[9px] sm:text-xs md:text-sm font-bold uppercase tracking-wider">
            <button
              onClick={() => setActiveTab("transformational")}
              className={`px-3.5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                activeTab === "transformational" 
                  ? "bg-primary text-white shadow" 
                  : "text-text-muted hover:text-primary"
              }`}
            >
              🌸 Transformational Programs
            </button>
            <button
              onClick={() => setActiveTab("consultations")}
              className={`px-3.5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                activeTab === "consultations" 
                  ? "bg-primary text-white shadow" 
                  : "text-text-muted hover:text-primary"
              }`}
            >
              📞 Calls & Blueprints
            </button>
          </div>
        </div>

        {/* Tab Content Area */}
        <AnimatePresence mode="wait">
          {activeTab === "transformational" ? (
            <motion.div
              key="transformational"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-16"
            >
              
              {/* Program 1: Yoga & Hybrid Session */}
              <section className="bg-white rounded-[2rem] sm:rounded-[2.5rem] border border-pink-100 p-5 sm:p-8 md:p-12 shadow-premium hover:shadow-premium-hover transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative overflow-hidden">
                <div className="absolute top-0 left-0 bg-primary text-white text-[9px] font-extrabold px-4 py-1.5 rounded-br-2xl uppercase tracking-wider">
                  Yoga & Hybrid Batch
                </div>
                
                {/* Info and Personal Plan */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
                  <div className="space-y-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 text-primary text-[10px] font-extrabold uppercase tracking-wide">
                      <User className="w-3 h-3" /> Personal & Group Training
                    </span>
                    <h2 className="font-display font-extrabold text-2xl md:text-3xl text-primary">
                      GWG Yoga & Hybrid Sessions
                    </h2>
                    <p className="text-xs text-text-muted leading-relaxed font-bold">
                      A hybrid fitness routine combining traditional yoga, calorie-burning routines, and mental peace. Perfectly designed for fat loss, metabolic balance, and stress relief.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <div className="p-3 bg-pink-50/30 rounded-xl border border-pink-100/40">
                        <span className="text-[10px] font-bold text-primary block uppercase tracking-wider">Personal Session</span>
                        <span className="text-xs text-text-main font-semibold">1-on-1 Mentor Session</span>
                      </div>
                      <div className="p-3 bg-pink-50/30 rounded-xl border border-pink-100/40">
                        <span className="text-[10px] font-bold text-primary block uppercase tracking-wider">Timing</span>
                        <span className="text-xs text-text-main font-semibold">As per your convenience</span>
                      </div>
                    </div>
                  </div>

                  {/* Personal Pricing Details */}
                  <div className="bg-[#FCF9FB] border border-pink-50 p-6 rounded-2xl space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="inline-block bg-primary-dark/10 text-primary-dark font-extrabold text-[9px] px-2.5 py-0.5 rounded uppercase tracking-wider mb-1">
                          Private 6-Month Plan
                        </span>
                        <h4 className="font-bold text-text-main text-sm">YOU AND YOUR MENTOR ONLY</h4>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-text-muted line-through block">{formatActualPrice("yoga-hybrid-personal")}</span>
                        <span className="font-display font-extrabold text-2xl text-primary">{formatPrice("yoga-hybrid-personal")}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between border-t border-pink-100/40 pt-4">
                      <span className="text-xs text-text-muted font-bold">Monthly breakdown: <strong className="text-primary">{currency === "USD" ? "$25/mo" : "₹2,500/mo"}</strong></span>
                      <button 
                        onClick={() => openBooking("yoga-hybrid-personal")}
                        className="px-5 py-2.5 bg-primary hover:bg-primary-dark text-white rounded-lg text-xs font-bold uppercase tracking-wider cursor-pointer shadow transition-all"
                      >
                        Book Personal 1-on-1
                      </button>
                    </div>
                  </div>
                </div>

                {/* Group Plans - Toggle options */}
                <div className="lg:col-span-5 bg-gradient-to-br from-[#FCF9FB] to-white border border-pink-100 rounded-3xl p-6 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-display font-extrabold text-sm text-primary block uppercase tracking-wider">Group Session Options</span>
                      <span className="inline-block bg-primary text-white font-extrabold text-[9px] px-2.5 py-1 rounded-full uppercase tracking-wider animate-pulse shadow-sm">
                        7 Day Trial
                      </span>
                    </div>
                    
                    <div className="space-y-3">
                      {yogaGroupPlans.map((plan, idx) => (
                        <button
                          key={plan.id}
                          onClick={() => setYogaGroupPlan(idx)}
                          className={`w-full p-4 rounded-xl border text-left flex justify-between items-center transition-all cursor-pointer ${
                            yogaGroupPlan === idx 
                              ? "bg-white border-primary shadow-sm ring-1 ring-primary/30" 
                              : "bg-white/50 border-zinc-150 hover:bg-white"
                          }`}
                        >
                          <div className="space-y-0.5">
                            <span className="text-xs font-bold text-text-main block">{plan.title}</span>
                            <span className="text-[10px] font-semibold text-text-muted block">{plan.duration} • {plan.monthlyBreakdown}</span>
                          </div>
                          <div className="text-right">
                            {plan.price !== plan.actualPrice && (
                              <span className="text-[10px] text-text-muted line-through block">{plan.actualPrice}</span>
                            )}
                            <span className="font-display font-bold text-sm text-primary">{plan.price}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
 
                  {/* Active Selected Group Plan Actions */}
                  <div className="pt-4 border-t border-zinc-150/40 space-y-3">
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-text-muted">Selected Group Tier:</span>
                      <span className="text-primary font-bold">{yogaGroupPlans[yogaGroupPlan]?.title || ""}</span>
                    </div>
                    <button
                      onClick={() => {
                        const activePlan = yogaGroupPlans[yogaGroupPlan];
                        if (activePlan) openBooking(activePlan.id);
                      }}
                      className="w-full py-3.5 bg-primary hover:bg-primary-dark text-white rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer shadow transition-all"
                    >
                      Book Group Plan: {yogaGroupPlans[yogaGroupPlan]?.price || ""}
                    </button>
                  </div>
                </div>

                {/* Bottom Badges */}
                <div className="col-span-12 border-t border-zinc-100 pt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="flex items-center gap-2 justify-center text-xs text-text-muted font-bold">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    Expert Mentors
                  </div>
                  <div className="flex items-center gap-2 justify-center text-xs text-text-muted font-bold">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    Personalized Plans
                  </div>
                  <div className="flex items-center gap-2 justify-center text-xs text-text-muted font-bold">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    Progress Tracking
                  </div>
                  <div className="flex items-center gap-2 justify-center text-xs text-text-muted font-bold">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    Better Health, Better You
                  </div>
                </div>
              </section>

              {/* Program 2: Hybrid Sessions (Online Only) */}
              <section className="bg-white rounded-[2rem] sm:rounded-[2.5rem] border border-pink-100 p-5 sm:p-8 md:p-12 shadow-premium hover:shadow-premium-hover transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative overflow-hidden">
                <div className="absolute top-0 left-0 bg-[#00A8E8] text-white text-[9px] font-extrabold px-4 py-1.5 rounded-br-2xl uppercase tracking-wider">
                  Complete Transformation Batch
                </div>

                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-secondary text-[10px] font-extrabold uppercase tracking-wide">
                      <Users className="w-3 h-3" /> Online Only
                    </span>
                    <h2 className="font-display font-extrabold text-2xl md:text-3xl text-secondary">
                      Online Hybrid Sessions
                    </h2>
                    <p className="text-xs text-text-muted leading-relaxed font-bold">
                      A complete transformation package combining Yoga with strength building, breath control, core training, and deep relaxation. Designed to build functional strength and balance cortisol.
                    </p>

                    <div className="p-4 bg-blue-50/20 rounded-2xl border border-blue-100/30 space-y-2 text-xs font-semibold">
                      <div className="flex items-center justify-between text-text-main">
                        <span>Sessions:</span>
                        <span className="text-secondary font-bold">12 Hybrid Sessions / Mo</span>
                      </div>
                      <div className="flex items-center justify-between text-text-main">
                        <span>Days:</span>
                        <span>Wednesday, Friday & Sunday</span>
                      </div>
                      <div className="flex items-center justify-between text-text-main">
                        <span>Time:</span>
                        <span>8:30 AM (Flexible on urgency)</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-secondary/5 border border-secondary/15 p-4 rounded-xl">
                    <p className="text-[10px] text-secondary font-bold uppercase tracking-wider">Our Slogan</p>
                    <p className="text-xs text-text-main font-bold italic">&ldquo;Transform your body. Heal your mind. Elevate your life.&rdquo;</p>
                  </div>
                </div>

                {/* Pillars Included Grid & Pricing */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-zinc-400 block mb-3">What is included in every session</span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[10px] font-bold text-text-main">
                      {["Weighted Strength", "Conscious Breathing", "Restorative Stretch", "Hormonal Yoga", "Pilates Core", "Guided Meditation", "Yog Nidra Sleep"].map((pillar, i) => (
                        <div key={i} className="flex items-center gap-1.5 p-2 bg-[#FCF9FB] border border-pink-100/40 rounded-lg">
                          <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" />
                          {pillar}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing Tiers Column layout */}
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-zinc-400 block mb-3">Select Pricing Tier</span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {/* 1 Month */}
                      <div className="bg-zinc-50/70 border border-zinc-200 p-4 rounded-2xl text-center flex flex-col justify-between opacity-85 relative">
                        <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-zinc-500 text-white text-[8px] font-extrabold px-2 py-0.5 rounded-full uppercase shadow-sm">Sold Out</span>
                        <div>
                          <span className="text-[9px] font-extrabold text-zinc-400 uppercase tracking-wide block">1 Month</span>
                          <span className="font-display font-extrabold text-lg text-secondary block mt-1">{formatPrice("hybrid-sessions-1")}</span>
                        </div>
                        <button
                          disabled
                          className="mt-3 w-full py-2 bg-zinc-200 text-zinc-400 rounded-lg text-[10px] font-bold uppercase tracking-wider cursor-not-allowed"
                        >
                          Closed
                        </button>
                      </div>
                      
                      {/* 3 Months */}
                      <div className="bg-zinc-50/70 border border-zinc-200 p-4 rounded-2xl text-center flex flex-col justify-between opacity-85 relative">
                        <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-zinc-500 text-white text-[8px] font-extrabold px-2 py-0.5 rounded-full uppercase shadow-sm">Sold Out</span>
                        <div>
                          <span className="text-[9px] font-extrabold text-zinc-400 uppercase tracking-wide block">3 Months</span>
                          <span className="text-[9px] text-text-muted line-through block mt-1">{formatActualPrice("hybrid-sessions-3")}</span>
                          <span className="font-display font-extrabold text-lg text-secondary block">{formatPrice("hybrid-sessions-3")}</span>
                        </div>
                        <button
                          disabled
                          className="mt-3 w-full py-2 bg-zinc-200 text-zinc-400 rounded-lg text-[10px] font-bold uppercase tracking-wider cursor-not-allowed"
                        >
                          Closed
                        </button>
                      </div>
 
                      {/* 6 Months */}
                      <div className="bg-white border-2 border-secondary/20 p-4 rounded-2xl text-center flex flex-col justify-between hover:border-secondary transition-all relative">
                        <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-emerald-600 text-white text-[8px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse shadow-sm">10 Slots Open</span>
                        <div>
                          <span className="text-[9px] font-extrabold text-zinc-400 uppercase tracking-wide block">6 Months</span>
                          <span className="text-[9px] text-text-muted line-through block mt-1">{formatActualPrice("hybrid-sessions-6")}</span>
                          <span className="font-display font-extrabold text-lg text-secondary block">{formatPrice("hybrid-sessions-6")}</span>
                        </div>
                        <button
                          onClick={() => openBooking("hybrid-sessions-6")}
                          className="mt-3 w-full py-2 bg-[#00A8E8] hover:bg-blue-600 text-white rounded-lg text-[10px] font-bold uppercase tracking-wider cursor-pointer"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Program 3: Anti-Aging Summer Offer */}
              <section className="bg-white rounded-[2rem] sm:rounded-[2.5rem] border border-pink-100 p-5 sm:p-8 md:p-12 shadow-premium hover:shadow-premium-hover transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative overflow-hidden">
                <div className="absolute top-0 left-0 bg-[#FBC02D] text-text-main text-[9px] font-extrabold px-4 py-1.5 rounded-br-2xl uppercase tracking-wider">
                  Skin & Face Yoga Special
                </div>

                {/* Left Description */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-50 text-accent-gold text-[10px] font-extrabold uppercase tracking-wide">
                      🌸 Facial & Skin Transformation
                    </span>
                    <h2 className="font-display font-extrabold text-2xl md:text-3xl text-primary">
                      GWG Anti-Aging Offer
                    </h2>
                    <p className="text-xs text-text-muted leading-relaxed font-bold">
                      A complete facial exercise and skin healing batch designed to enhance blood circulation, release face muscle tension, and restore organic glow. Time: 8:40 PM - 9:40 PM (Thursdays & Sundays off).
                    </p>

                    <div className="bg-[#FCF9FB] border border-pink-50 p-4 rounded-xl space-y-2">
                      <span className="text-[10px] font-extrabold text-[#FBC02D] block uppercase tracking-wider">WHAT YOU GET IN THE BATCH:</span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-text-main font-semibold">
                        <li className="flex items-center gap-1.5">✓ 200+ Facial Yoga Asanas</li>
                        <li className="flex items-center gap-1.5">✓ Gua-Sha & Jade Roller methods</li>
                        <li className="flex items-center gap-1.5">✓ Acupressure & Cupping guides</li>
                        <li className="flex items-center gap-1.5">✓ Natural Ubtan & Glow blueprints</li>
                        <li className="flex items-center gap-1.5">✓ Lymphatic Drainage therapies</li>
                        <li className="flex items-center gap-1.5">✓ Customized Drinks (3-mo plan only)</li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-[10px] text-text-muted italic font-bold">
                    * Note: Customized morning/night drinks, supplements, skin care products, and specialized yoga guides are included only inside the 3 months plan.
                  </p>
                </div>

                {/* Right Interactive Selection Card */}
                <div className="lg:col-span-5 bg-[#FAF8F5] border border-zinc-150 rounded-3xl p-6 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="font-display font-extrabold text-sm text-primary block mb-3 uppercase tracking-wider">Choose sessions count</span>
                    
                    <div className="space-y-3">
                      {faceYogaPlans.map((plan, idx) => (
                        <button
                          key={plan.id}
                          onClick={() => setFaceYogaPlan(idx)}
                          className={`w-full p-4 rounded-xl border text-left flex justify-between items-center transition-all cursor-pointer ${
                            faceYogaPlan === idx 
                              ? "bg-white border-[#FBC02D] shadow-sm ring-1 ring-yellow-400/30" 
                              : "bg-white/50 border-zinc-150 hover:bg-white"
                          }`}
                        >
                          <div>
                            <span className="text-xs font-bold text-text-main block">{plan.title}</span>
                            <span className="text-[9px] font-semibold text-text-muted block">{plan.duration}</span>
                          </div>
                          <span className="font-display font-extrabold text-base text-primary">{plan.price}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Pricing details and booking */}
                  <div className="space-y-3">
                    <p className="text-[10px] text-text-muted leading-relaxed font-semibold bg-white p-3 rounded-lg border border-zinc-100">
                      {faceYogaPlans[faceYogaPlan].perks}
                    </p>
                    <button
                      onClick={() => openBooking(faceYogaPlans[faceYogaPlan].id)}
                      className="w-full py-3.5 bg-primary hover:bg-primary-dark text-white rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer shadow transition-all"
                    >
                      Book Facial Batch: {faceYogaPlans[faceYogaPlan].price}
                    </button>
                  </div>
                </div>
              </section>

              {/* Program 4: Only Meal Plan (90 Days / 3 Months) */}
              <section className="bg-white rounded-[2rem] sm:rounded-[2.5rem] border border-pink-100 p-5 sm:p-8 md:p-12 shadow-premium hover:shadow-premium-hover transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative overflow-hidden">
                <div className="absolute top-0 left-0 bg-accent text-white text-[9px] font-extrabold px-4 py-1.5 rounded-br-2xl uppercase tracking-wider">
                  Hormonal & Nutrition Plan
                </div>

                {/* Left side information */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-accent text-[10px] font-extrabold uppercase tracking-wide">
                        <Apple className="w-3.5 h-3.5" /> Customized Nutrition
                      </span>
                      <span className="inline-block bg-accent/10 text-accent font-extrabold text-[9px] px-2.5 py-0.5 rounded uppercase tracking-wider ml-2">
                        Complete Transformation Plan
                      </span>
                    </div>
                    <h2 className="font-display font-extrabold text-2xl md:text-3xl text-primary">
                      Glow Meal Plan - 90 Days
                    </h2>
                    <p className="text-xs text-text-muted leading-relaxed font-bold">
                      A personalized, home-cooked food blueprint designed to target fat loss blocks, thyroid optimization, and PCOD/PCOS recovery. No starvation. Basic home groceries only.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-[10px] font-bold text-text-main">
                      {["Tailored Menu", "Fatloss Recipes", "Regular Followups", "Community", "Private Chat Group", "Expert Guidance", "24x7 Chat Support", "Hormonal Balance"].map((item, idx) => (
                        <div key={idx} className="p-2 bg-[#FCF9FB] border border-zinc-100 rounded-lg text-center">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-[10px] text-[#75B043] font-bold uppercase tracking-wider bg-emerald-50/30 p-3 rounded-lg border border-emerald-100/50">
                    🌸 Exclusively for Women: Meals configured around cycle syncing, cortisol control, and gut restoration.
                  </p>
                </div>

                {/* Right side selector */}
                <div className="lg:col-span-5 bg-gradient-to-br from-[#FAF8F5] to-white border border-pink-100 rounded-3xl p-6 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-display font-extrabold text-sm text-primary block uppercase tracking-wider">Select Payment Route</span>
                      <span className="inline-block bg-primary text-white font-extrabold text-[9px] px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        Installments Available
                      </span>
                    </div>
                    
                    <div className="space-y-3">
                      {mealPlanOptions.map((option, idx) => (
                        <button
                          key={option.id}
                          onClick={() => setMealPlanOption(idx)}
                          className={`w-full p-4 rounded-xl border text-left flex justify-between items-center transition-all cursor-pointer ${
                            mealPlanOption === idx 
                              ? "bg-white border-accent shadow-sm ring-1 ring-emerald-400/30" 
                              : "bg-white/50 border-zinc-150 hover:bg-white"
                          }`}
                        >
                          <div>
                            <span className="text-xs font-bold text-text-main block">{option.title}</span>
                            <span className="text-[9px] text-text-muted block mt-0.5">{option.badge}</span>
                          </div>
                          <div className="text-right">
                            {option.price !== option.actualPrice && (
                              <span className="text-[10px] text-text-muted line-through block">{option.actualPrice}</span>
                            )}
                            <span className="font-display font-bold text-sm text-primary">{option.price}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-[10px] text-text-muted leading-relaxed font-semibold bg-white p-3 rounded-lg border border-zinc-100">
                      {mealPlanOptions[mealPlanOption]?.description || ""}
                    </p>
                    <button
                      onClick={() => {
                        const activeOption = mealPlanOptions[mealPlanOption];
                        if (activeOption) openBooking(activeOption.id);
                      }}
                      className="w-full py-3.5 bg-primary hover:bg-primary-dark text-white rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer shadow transition-all"
                    >
                      Book Meal Plan: {mealPlanOptions[mealPlanOption]?.price || ""}
                    </button>
                    <p className="text-[9px] text-[#75B043] font-bold text-center mt-2 uppercase tracking-wide">
                      Offers and pricing are available in group and community. Start your journey with a token amount + installments.
                    </p>
                  </div>
                </div>
              </section>

              {/* Program 5: Complete Hair Solution */}
              <section className="bg-white rounded-[2rem] sm:rounded-[2.5rem] border border-pink-100 p-5 sm:p-8 md:p-12 shadow-premium hover:shadow-premium-hover transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative overflow-hidden">
                <div className="absolute top-0 left-0 bg-primary-dark text-white text-[9px] font-extrabold px-4 py-1.5 rounded-br-2xl uppercase tracking-wider">
                  Hair & Scalp Health Batch
                </div>

                {/* Left Side text */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 text-primary-dark text-[10px] font-extrabold uppercase tracking-wide">
                      🌱 Botanical Scalp Care
                    </span>
                    <h2 className="font-display font-extrabold text-2xl md:text-3xl text-primary-dark">
                      Complete Hair Solution
                    </h2>
                    <p className="text-xs text-text-muted leading-relaxed font-bold">
                      Anti-ageing hair batch focused on reversing dryness, minimizing hair fall, reversing graying trends, and restoring smooth textures naturally. Total 9 Sessions.
                    </p>

                    {/* Target Areas Tag Cloud */}
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-zinc-400 block mb-2">TARGET AREAS:</span>
                      <div className="flex flex-wrap gap-2">
                        {["Grey Hair", "Severe Hair Fall", "Dryness", "Dandruff", "Rough Scalp"].map((tag, i) => (
                          <span key={i} className="px-3 py-1 bg-[#FCF9FB] border border-pink-100/40 rounded-full text-xs font-bold text-text-main">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Sessions layout list */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-150/40 space-y-2">
                      <span className="text-[10px] font-bold text-primary block uppercase tracking-wider">6 Recorded Remedies</span>
                      <ul className="text-xs text-text-main font-semibold space-y-1">
                        <li>• 2 Ayurvedic Hair Masks</li>
                        <li>• 2 Organic Infused Hair Oils</li>
                        <li>• 2 Restorative Hair Sprays</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-150/40 space-y-2">
                      <span className="text-[10px] font-bold text-secondary block uppercase tracking-wider">3 Live Technique Sessions</span>
                      <ul className="text-xs text-text-main font-semibold space-y-1">
                        <li>• Correct Oil Massage & Scalp care</li>
                        <li>• Timing/application parameters</li>
                        <li>• Scalp health & hair type check</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right side pricing block */}
                <div className="lg:col-span-5 bg-gradient-to-br from-[#FAF8F5] to-white border border-pink-100 rounded-3xl p-8 flex flex-col justify-center space-y-6 text-center">
                  <div className="space-y-2">
                    <span className="inline-block bg-pink-100 text-primary font-bold text-[10px] px-3.5 py-1 rounded-full uppercase tracking-wider">
                      Anti-Ageing Hair Batch
                    </span>
                    <h3 className="font-display font-extrabold text-3xl text-primary-dark">{formatPrice("hair-solution")}</h3>
                    <p className="text-xs text-text-muted font-bold">Comprehensive 9-session botanical care system.</p>
                    <span className="inline-block bg-accent/10 text-accent font-extrabold text-[9px] px-2.5 py-1 rounded uppercase tracking-wider animate-pulse shadow-sm">
                      Includes Brand Secret Oils & Remedies
                    </span>
                  </div>
                  
                  <div className="p-3 bg-primary/5 rounded-xl border border-pink-100/30 text-[10px] text-primary font-semibold">
                    ⏳ Limited Slots available. Book now to secure your timing.
                  </div>

                  <button
                    onClick={() => openBooking("hair-solution")}
                    className="w-full py-4 bg-primary hover:bg-primary-dark text-white rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer shadow-md shadow-pink-900/10 transition-all"
                  >
                    Book Hair Solution
                  </button>
                  
                  <span className="text-[10px] text-text-muted font-semibold">
                    &ldquo;Because beautiful hair starts with healthy roots.&rdquo;
                  </span>
                </div>
              </section>

            </motion.div>
          ) : (
            <motion.div
              key="consultations"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {legacyPrograms.map((program, idx) => {
                const isFeatured = program.id === "merchandise-book";
                return (
                  <motion.div 
                    key={idx}
                    whileHover={{ y: -8 }}
                    className={`p-8 rounded-[2.2rem] border-2 shadow-premium hover:shadow-premium-hover flex flex-col justify-between relative transition-all duration-300 ${program.theme}`}
                  >
                    {isFeatured && (
                      <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-accent text-white text-[9px] font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow">
                        Most Popular Guide
                      </div>
                    )}

                    <div className="space-y-6">
                      <span className={`inline-block font-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider ${isFeatured ? "bg-white/10 text-accent-gold" : "bg-pink-50 text-primary"}`}>
                        {program.badge}
                      </span>

                      <div>
                        <h3 className={`font-display font-extrabold text-xl mb-1 ${isFeatured ? "text-white" : "text-primary"}`}>
                          {program.title}
                        </h3>
                        <p className={`text-xs ${isFeatured ? "text-white/75" : "text-text-muted"}`}>{program.duration}</p>
                      </div>

                      <div className="flex items-baseline gap-1">
                        <span className={`font-display font-extrabold text-4xl ${isFeatured ? "text-white" : "text-primary"}`}>
                          {program.price}
                        </span>
                        {!isFeatured && <span className="text-xs text-text-muted">/ session</span>}
                        {isFeatured && <span className="text-xs text-white/50 line-through ml-2">{formatActualPrice("merchandise-book")}</span>}
                      </div>

                      <p className={`text-xs leading-relaxed ${isFeatured ? "text-white/80" : "text-text-muted font-bold"}`}>
                        {program.description}
                      </p>

                      <div className={`pt-4 border-t ${isFeatured ? "border-white/10" : "border-zinc-100"}`}>
                        <span className={`text-[10px] font-bold uppercase tracking-wider block mb-3 ${isFeatured ? "text-white/50" : "text-zinc-400"}`}>
                          What is Included:
                        </span>
                        <ul className="space-y-2.5 text-xs">
                          {program.inclusions.map((inc, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isFeatured ? "text-accent-gold" : "text-accent"}`} />
                              <span className={isFeatured ? "text-white/95" : "text-text-main font-semibold"}>{inc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-8">
                      <motion.button
                        whileTap={{ scale: 0.97 }}
                        onClick={() => openBooking(program.id)}
                        className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-wider shadow transition-all cursor-pointer ${
                          isFeatured 
                            ? "bg-white hover:bg-zinc-100 text-primary" 
                            : "bg-primary hover:bg-primary-dark text-white shadow-pink-900/10"
                        }`}
                      >
                        {isFeatured ? "Pre-Order Book Now" : "Book This Session"}
                      </motion.button>
                      <span className={`block text-[10px] text-center mt-2.5 font-bold ${isFeatured ? "text-white/50" : "text-text-muted"}`}>
                        Format: {program.format}
                      </span>
                    </div>

                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* FAQ Section */}
        <section className="bg-white border border-pink-100 rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-12 shadow-premium max-w-4xl mx-auto space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <HelpCircle className="w-8 h-8 text-secondary mx-auto" />
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">Frequently Asked</span>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-primary leading-snug">Common Inquiries Answered</h2>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, index) => {
              const isExpanded = expandedFaq === index;
              return (
                <div 
                  key={index} 
                  className="border border-pink-100/50 rounded-2xl overflow-hidden bg-[#FCF9FB] shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-display font-bold text-sm sm:text-base text-primary hover:bg-pink-50/10 cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-secondary font-display font-extrabold">Q.</span>
                      {faq.q}
                    </span>
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-primary shrink-0" /> : <ChevronDown className="w-4 h-4 text-primary shrink-0" />}
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-text-muted leading-relaxed font-semibold pl-10 border-t border-zinc-150/20 bg-white">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* Booking Modal */}
        <BookingModal 
          isOpen={isBookingOpen} 
          onClose={() => setIsBookingOpen(false)} 
          initialSelectedOption={selectedListing}
        />
      </div>
    </div>
  );
}
