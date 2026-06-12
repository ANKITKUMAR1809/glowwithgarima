"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, BookOpen, Clock, Heart, ArrowRight, Check } from "lucide-react";
import { useCurrency } from "../context/CurrencyContext";

export default function BookingModal({ isOpen, onClose, initialSelectedOption = null }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    concern: "Fat Loss & Metabolism",
    details: "",
    selectedListing: initialSelectedOption || "discovery-45",
  });
  
  const [errors, setErrors] = useState({});

  const { formatPrice } = useCurrency();

  useEffect(() => {
    if (isOpen) {
      if (initialSelectedOption) {
        setFormData((prev) => ({ ...prev, selectedListing: initialSelectedOption }));
        setStep(2);
      } else {
        setStep(1);
      }
    }
  }, [initialSelectedOption, isOpen]);
  
  const listings = {
    "discovery-45": {
      title: "Discovery Call for 45 mins",
      price: formatPrice("discovery-45"),
      description: "Personalized guidance, hormone balancing insights, and root cause analysis.",
      type: "1 on 1 Call",
      duration: "45 Minutes",
      icon: Clock
    },
    "discovery-30": {
      title: "Discovery Call for 30 mins",
      price: formatPrice("discovery-30"),
      description: "Interactive session for beginners/intermediates to improve their wellness journey.",
      type: "1 on 1 Call",
      duration: "30 Minutes",
      icon: Clock
    },
    "merchandise-book": {
      title: "Glow with Garima Book Pre-Book",
      price: formatPrice("merchandise-book"),
      description: "7 Pillars Blueprint, meal plans, sample routines, and action guides. 30% off for first 100!",
      type: "Transformational Book",
      duration: "Digital/Hardcopy",
      icon: BookOpen
    },
    "yoga-hybrid-personal": {
      title: "Personal Session (Yoga & Hybrid)",
      price: formatPrice("yoga-hybrid-personal"),
      description: "Exclusively for females. 6-Month Plan: 3 Days Hybrid, customized timing, 1-on-1 mentoring.",
      type: "1-on-1 Personal",
      duration: "6 Months",
      icon: Heart
    },
    "yoga-hybrid-group-1": {
      title: "Group Yoga: 4 Days + 1 Hybrid",
      price: formatPrice("yoga-hybrid-group-1"),
      description: "Exclusively for females. 6-Month Plan: 4 Days Yoga + 1 Hybrid session.",
      type: "Group Session",
      duration: "6 Months",
      icon: Heart
    },
    "yoga-hybrid-group-2": {
      title: "Group Yoga: 5 Days (Monthly)",
      price: formatPrice("yoga-hybrid-group-2"),
      description: "Exclusively for females. Monthly Plan: 5 Days Yoga session.",
      type: "Group Session",
      duration: "1 Month",
      icon: Heart
    },
    "yoga-hybrid-group-3": {
      title: "Group Yoga: 1 Year Plan",
      price: formatPrice("yoga-hybrid-group-3"),
      description: "Exclusively for females. 12-Month Plan: 5 Days Yoga session.",
      type: "Group Session",
      duration: "12 Months",
      icon: Heart
    },
    "hybrid-sessions-1": {
      title: "Hybrid Sessions: 1 Month",
      price: formatPrice("hybrid-sessions-1"),
      description: "Exclusively for females. 12 Hybrid Sessions (Wed, Fri, Sun at 8:30 AM).",
      type: "Online Session",
      duration: "1 Month",
      icon: Heart
    },
    "hybrid-sessions-3": {
      title: "Hybrid Sessions: 3 Months",
      price: formatPrice("hybrid-sessions-3"),
      description: "Exclusively for females. 36 Hybrid Sessions (Wed, Fri, Sun at 8:30 AM).",
      type: "Online Session",
      duration: "3 Months",
      icon: Heart
    },
    "hybrid-sessions-6": {
      title: "Hybrid Sessions: 6 Months",
      price: formatPrice("hybrid-sessions-6"),
      description: "Exclusively for females. 72 Hybrid Sessions (Wed, Fri, Sun at 8:30 AM).",
      type: "Online Session",
      duration: "6 Months",
      icon: Heart
    },
    "anti-aging-33": {
      title: "Anti-Aging Facial Transformation: 33 Sessions",
      price: formatPrice("anti-aging-33"),
      description: "Exclusively for females. 3-Month Plan (8:40 PM - 9:40 PM, Thu/Sun off).",
      type: "Skin/Face Yoga",
      duration: "3 Months",
      icon: Heart
    },
    "anti-aging-22": {
      title: "Anti-Aging Facial Transformation: 22 Sessions",
      price: formatPrice("anti-aging-22"),
      description: "Exclusively for females. 2-Month Plan (8:40 PM - 9:40 PM, Thu/Sun off).",
      type: "Skin/Face Yoga",
      duration: "2 Months",
      icon: Heart
    },
    "anti-aging-11": {
      title: "Anti-Aging Facial Transformation: 11 Sessions",
      price: formatPrice("anti-aging-11"),
      description: "Exclusively for females. 1-Month Plan (8:40 PM - 9:40 PM, Thu/Sun off).",
      type: "Skin/Face Yoga",
      duration: "1 Month",
      icon: Heart
    },
    "meal-plan-1": {
      title: "Only Meal Plan: 1 Month",
      price: formatPrice("meal-plan-1"),
      description: "Exclusively for females. Customized Meal Plan, fat loss recipes, 24/7 support.",
      type: "Nutrition Plan",
      duration: "1 Month",
      icon: Heart
    },
    "meal-plan-3": {
      title: "Only Meal Plan: 3 Months (One-Time)",
      price: formatPrice("meal-plan-3"),
      description: "Exclusively for females. 90 Days Customized Meal Plan, fat loss recipes, 24/7 support.",
      type: "Nutrition Plan",
      duration: "3 Months",
      icon: Heart
    },
    "hair-solution": {
      title: "Complete Hair Solution Batch",
      price: formatPrice("hair-solution"),
      description: "Exclusively for females. 9 Sessions (6 recorded remedies + 3 technique live sessions).",
      type: "Hair Care Batch",
      duration: "9 Sessions",
      icon: Heart
    }
  };

  const handleSelectListing = (id) => {
    setFormData({ ...formData, selectedListing: id });
    setStep(2);
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9]{10,14}$/.test(formData.phone.replace(/[\s-]/g, ""))) {
      newErrors.phone = "Enter a valid phone number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Build the WhatsApp message
    const listing = listings[formData.selectedListing];
    const text = `Hello Garima Tiwari,\n\nI want to book/pre-order: *${listing.title}* (${listing.price})\n\nHere are my details:\n• *Name:* ${formData.name}\n• *Phone:* ${formData.phone}\n• *Email:* ${formData.email || "N/A"}\n• *Primary Goal:* ${formData.concern}\n• *Additional Details:* ${formData.details || "N/A"}\n\nPlease confirm my slot/order. Thank you!`;
    
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=916393079027&text=${encodedText}`;
    
    // Redirect
    window.open(whatsappUrl, "_blank");
    setStep(3);
  };

  const concerns = [
    "Fat Loss & Metabolism",
    "Thyroid & Hormonal Imbalance",
    "PCOD / PCOS Management",
    "Gut Health & Digestion",
    "Menopause Symptoms",
    "Stress & Mental Calmness"
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0A3323]/40 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="bg-white rounded-[2rem] shadow-2xl border border-emerald-900/5 max-w-lg w-full overflow-hidden z-10 relative max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 sm:px-8 py-4 sm:py-6 border-b border-zinc-100 bg-[#FAF8F5]">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#E68A65] block mb-1">
                Glow With Garima
              </span>
              <h3 className="text-xl font-bold font-display text-primary">
                {step === 1 && "Choose Your Program"}
                {step === 2 && "Personal Wellness Profile"}
                {step === 3 && "Booking Sent!"}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-zinc-100 text-zinc-400 hover:text-zinc-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="overflow-y-auto flex-1 p-5 sm:p-8">
            {step === 1 && (
              <div className="space-y-4">
                <p className="text-sm text-text-muted mb-4">
                  Select a session option or book your copy of the transformation book to start your journey.
                </p>
                {Object.entries(listings).map(([id, listing]) => {
                  const Icon = listing.icon;
                  return (
                    <button
                      key={id}
                      onClick={() => handleSelectListing(id)}
                      className="w-full text-left p-5 rounded-2xl border border-zinc-200 hover:border-accent hover:bg-orange-50/20 transition-all group flex items-start gap-4 relative cursor-pointer"
                    >
                      <div className="p-3 rounded-xl bg-emerald-50 text-primary group-hover:bg-[#E68A65] group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 pr-12">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-text-main group-hover:text-primary transition-colors text-base">
                            {listing.title}
                          </h4>
                        </div>
                        <p className="text-xs text-text-muted mb-2 line-clamp-2">
                          {listing.description}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-zinc-500 font-medium">
                          <span className="bg-zinc-100 px-2 py-0.5 rounded">
                            {listing.type}
                          </span>
                          <span>•</span>
                          <span>{listing.duration}</span>
                        </div>
                      </div>
                      <span className="absolute right-5 top-5 font-bold text-primary text-lg">
                        {listing.price}
                      </span>
                      <ArrowRight className="w-4 h-4 text-zinc-400 absolute right-5 bottom-5 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                    </button>
                  );
                })}
              </div>
            )}

            {step === 2 && (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center gap-2 p-3 bg-emerald-50/50 border border-emerald-100 rounded-xl mb-4 text-xs text-[#0A3323]">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>
                    Selected: <strong>{listings[formData.selectedListing].title}</strong> ({listings[formData.selectedListing].price})
                  </span>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="ml-auto text-[#E68A65] hover:underline font-semibold"
                  >
                    Change
                  </button>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-text-main mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.name ? "border-red-500 bg-red-50/10" : "border-zinc-200 focus:border-primary"} focus:outline-none text-sm transition-colors`}
                    placeholder="Enter your name"
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-text-main mb-1.5">WhatsApp Phone Number *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? "border-red-500 bg-red-50/10" : "border-zinc-200 focus:border-primary"} focus:outline-none text-sm transition-colors`}
                      placeholder="+91 99999 99999"
                    />
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-text-main mb-1.5">Email Address (Optional)</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-primary focus:outline-none text-sm transition-colors"
                      placeholder="yourname@gmail.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-text-main mb-1.5">Primary Health Focus</label>
                  <select
                    value={formData.concern}
                    onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-primary focus:outline-none text-sm transition-colors bg-white cursor-pointer"
                  >
                    {concerns.map((concern, idx) => (
                      <option key={idx} value={concern}>
                        {concern}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-text-main mb-1.5">Tell Garima About Your Struggle (Optional)</label>
                  <textarea
                    rows="3"
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-primary focus:outline-none text-sm transition-colors resize-none"
                    placeholder="e.g. Struggling with thyroid and stuck weight for 3 years..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary hover:bg-primary-light text-white rounded-xl font-semibold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-emerald-950/10"
                >
                  Proceed to WhatsApp Consultation
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {step === 3 && (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-800">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-primary font-display">
                  We've Redirected you to WhatsApp!
                </h4>
                <p className="text-sm text-text-muted max-w-sm mx-auto">
                  If the WhatsApp chat did not open automatically, please click the button below to start your conversation with Garima.
                </p>
                <div className="pt-4 space-y-3">
                  <button
                    onClick={() => {
                      const listing = listings[formData.selectedListing];
                      const text = `Hello Garima Tiwari,\n\nI want to book/pre-order: *${listing.title}* (${listing.price})\n\nHere are my details:\n• *Name:* ${formData.name}\n• *Phone:* ${formData.phone}\n• *Email:* ${formData.email || "N/A"}\n• *Primary Goal:* ${formData.concern}\n• *Additional Details:* ${formData.details || "N/A"}`;
                      window.open(`https://api.whatsapp.com/send?phone=916393079027&text=${encodeURIComponent(text)}`, "_blank");
                    }}
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold text-sm transition-colors cursor-pointer"
                  >
                    Open WhatsApp Chat Manually
                  </button>
                  <button
                    onClick={() => {
                      setStep(1);
                      onClose();
                    }}
                    className="text-xs text-text-muted hover:underline block mx-auto font-medium"
                  >
                    Done & Close Window
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
