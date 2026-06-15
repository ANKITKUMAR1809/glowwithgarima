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
    age: "",
    weight: "",
    selectedListing: initialSelectedOption || "discovery-20",
  });
  
  const [errors, setErrors] = useState({});

  const { formatPrice } = useCurrency();

  useEffect(() => {
    if (isOpen) {
      if (initialSelectedOption) {
        Promise.resolve().then(() => {
          setFormData((prev) => ({ ...prev, selectedListing: initialSelectedOption }));
          setStep(1);
        });
      } else {
        Promise.resolve().then(() => {
          setFormData((prev) => ({ ...prev, selectedListing: "discovery-20" }));
          setStep(1);
        });
      }
    }
  }, [initialSelectedOption, isOpen]);
  
  const listings = {
    "demo-yoga-hybrid": {
      title: "Free Demo: GWG Yoga Program",
      price: "Free",
      description: "Book a Free Demo or 20 Min Discovery Call for GWG Yoga Program.",
      type: "Free Call & Demo",
      duration: "20 Minutes",
      icon: Clock
    },
    "demo-online-hybrid": {
      title: "Free Demo: Online Hybrid Sessions",
      price: "Free",
      description: "Book a Free Demo or 20 Min Discovery Call for Online Hybrid Sessions.",
      type: "Free Call & Demo",
      duration: "20 Minutes",
      icon: Clock
    },
    "demo-anti-aging": {
      title: "Free Demo: GWG Anti-Aging Offer",
      price: "Free",
      description: "Book a Free Demo or 20 Min Discovery Call for GWG Anti-Aging Offer.",
      type: "Free Call & Demo",
      duration: "20 Minutes",
      icon: Clock
    },
    "demo-meal-plan": {
      title: "Free Demo: Complete Meal Plan",
      price: "Free",
      description: "Book a Free Demo or 20 Min Discovery Call for Complete Meal Plan.",
      type: "Free Call & Demo",
      duration: "20 Minutes",
      icon: Clock
    },
    "demo-hair-solution": {
      title: "Free Demo: Complete Hair Solution",
      price: "Free",
      description: "Book a Free Demo or 20 Min Discovery Call for Complete Hair Solution.",
      type: "Free Call & Demo",
      duration: "20 Minutes",
      icon: Clock
    },
    "discovery-20": {
      title: "Free 20 Min Discovery Call & Demo Session",
      price: "Free",
      description: "Interactive 20 minutes call including a live fitness and yoga demo.",
      type: "Free Call",
      duration: "20 Minutes",
      icon: Clock
    },
    "discovery-45": {
      title: "Discovery Call for 45 mins",
      price: "Pricing on Call",
      description: "Personalized guidance, hormone balancing insights, and root cause analysis.",
      type: "1 on 1 Call",
      duration: "45 Minutes",
      icon: Clock
    },
    "discovery-30": {
      title: "Discovery Call for 30 mins",
      price: "Pricing on Call",
      description: "Interactive session for beginners/intermediates to improve their wellness journey.",
      type: "1 on 1 Call",
      duration: "30 Minutes",
      icon: Clock
    },
    "merchandise-book": {
      title: "Glow with Garima Book Pre-Book",
      price: "Pricing on Call",
      description: "7 Pillars Blueprint, meal plans, sample routines, and action guides. 30% off for first 100!",
      type: "Transformational Book",
      duration: "Digital/Hardcopy",
      icon: BookOpen
    },
    "yoga-hybrid-personal": {
      title: "GWG Yoga Program: Personal Session",
      price: "Pricing on Call",
      description: "Exclusively for females. 6-Month Plan: 3 Days Hybrid, customized timing, 1-on-1 mentoring.",
      type: "1-on-1 Personal",
      duration: "6 Months",
      icon: Heart
    },
    "yoga-hybrid-group-3days": {
      title: "GWG Yoga Program: 1 Month Plan (3 Days/wk)",
      price: formatPrice("yoga-hybrid-group-3days"),
      description: "Exclusively for females. Monthly Plan: 3 Days Yoga session per week with 7 Day Trial.",
      type: "Group Session",
      duration: "1 Month",
      icon: Heart
    },
    "yoga-hybrid-group-5days": {
      title: "GWG Yoga Program: 1 Month Plan (5 Days/wk)",
      price: formatPrice("yoga-hybrid-group-5days"),
      description: "Exclusively for females. Monthly Plan: 5 Days Yoga session per week with 7 Day Trial.",
      type: "Group Session",
      duration: "1 Month",
      icon: Heart
    },
    "hybrid-sessions-1": {
      title: "Online Hybrid Sessions: 1 Month",
      price: formatPrice("hybrid-sessions-1"),
      description: "Exclusively for females. 12 Hybrid Sessions (Wed, Fri, Sun at 8:30 AM).",
      type: "Online Session",
      duration: "1 Month",
      icon: Heart
    },
    "hybrid-sessions-3": {
      title: "Online Hybrid Sessions: 3 Months",
      price: "Pricing on Call",
      description: "Exclusively for females. 36 Hybrid Sessions (Wed, Fri, Sun at 8:30 AM).",
      type: "Online Session",
      duration: "3 Months",
      icon: Heart
    },
    "hybrid-sessions-6": {
      title: "Online Hybrid Sessions: 6 Months",
      price: "Pricing on Call",
      description: "Exclusively for females. 72 Hybrid Sessions (Wed, Fri, Sun at 8:30 AM).",
      type: "Online Session",
      duration: "6 Months",
      icon: Heart
    },
    "meal-plan-silver": {
      title: "Complete Meal Plan: Silver Tier (90 Days)",
      price: "Pricing on Call",
      description: "Exclusively for females. Silver Tier: Basic customized 90 days nutrition with standard followups.",
      type: "Nutrition Plan",
      duration: "90 Days",
      icon: Heart
    },
    "meal-plan-gold": {
      title: "Complete Meal Plan: Gold Tier (90 Days)",
      price: "Pricing on Call",
      description: "Exclusively for females. Gold Tier: Comprehensive 90 days nutrition, priority chat support, cycle syncing.",
      type: "Nutrition Plan",
      duration: "90 Days",
      icon: Heart
    },
    "meal-plan-platinum": {
      title: "Complete Meal Plan: Platinum Tier (90 Days)",
      price: "Pricing on Call",
      description: "Exclusively for females. Platinum Tier: Premium 90 days nutrition, 1-on-1 calls, 24/7 support, cycle & gut guides.",
      type: "Nutrition Plan",
      duration: "90 Days",
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
    "anti-aging-22": {
      title: "Anti-Aging Facial Transformation: 22 Sessions",
      price: "Pricing on Call",
      description: "Exclusively for females. 2-Month Plan (8:40 PM - 9:40 PM, Thu/Sun off).",
      type: "Skin/Face Yoga",
      duration: "2 Months",
      icon: Heart
    },
    "anti-aging-33": {
      title: "Anti-Aging Facial Transformation: 33 Sessions",
      price: "Pricing on Call",
      description: "Exclusively for females. 3-Month Plan (8:40 PM - 9:40 PM, Thu/Sun off).",
      type: "Skin/Face Yoga",
      duration: "3 Months",
      icon: Heart
    },
    "hair-solution": {
      title: "Complete Hair Solution Batch",
      price: "Pricing on Call",
      description: "Exclusively for females. 9 Sessions (6 recorded remedies + 3 technique live sessions).",
      type: "Hair Care Batch",
      duration: "9 Sessions",
      icon: Heart
    }
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9]{10,14}$/.test(formData.phone.replace(/[\s-]/g, ""))) {
      newErrors.phone = "Enter a valid phone number";
    }
    if (!formData.age.trim()) newErrors.age = "Age is required";
    if (!formData.weight.trim()) newErrors.weight = "Weight is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Build the WhatsApp message
    const listing = listings[formData.selectedListing] || { title: formData.selectedListing, price: "" };
    const text = `Hello Garima Tiwari,\n\nI want to book/enquire about: *${listing.title}* (${listing.price || "Free"})\n\nHere are my details:\n• *Name:* ${formData.name}\n• *Phone:* ${formData.phone}\n• *Age:* ${formData.age}\n• *Weight:* ${formData.weight}\n\nPlease confirm my booking. Thank you!`;
    
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=916393079027&text=${encodedText}`;
    
    // Redirect
    window.open(whatsappUrl, "_blank");
    setStep(2);
  };

  const getSubmitButtonText = () => {
    if (formData.selectedListing === "discovery-20" || formData.selectedListing.startsWith("demo-")) {
      return "Book Free Demo / Discovery Call";
    }
    return "Get 1-on-1 Session";
  };

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
                {step === 1 && "Personal Wellness Profile"}
                {step === 2 && "Booking Sent!"}
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
              <form onSubmit={handleSubmit} className="space-y-5">
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

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-text-main mb-1.5">Age *</label>
                    <input
                      type="number"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.age ? "border-red-500 bg-red-50/10" : "border-zinc-200 focus:border-primary"} focus:outline-none text-sm transition-colors`}
                      placeholder="e.g. 28"
                    />
                    {errors.age && <p className="text-xs text-red-500 mt-1">{errors.age}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-text-main mb-1.5">Weight (kg) *</label>
                    <input
                      type="text"
                      value={formData.weight}
                      onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.weight ? "border-red-500 bg-red-50/10" : "border-zinc-200 focus:border-primary"} focus:outline-none text-sm transition-colors`}
                      placeholder="e.g. 65"
                    />
                    {errors.weight && <p className="text-xs text-red-500 mt-1">{errors.weight}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-text-main mb-1.5">Services We Offer *</label>
                  <select
                    value={formData.selectedListing}
                    onChange={(e) => setFormData({ ...formData, selectedListing: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-primary focus:outline-none text-sm transition-colors bg-white cursor-pointer"
                  >
                    {Object.entries(listings).map(([id, listing]) => (
                      <option key={id} value={id}>
                        {listing.title} {listing.price ? `(${listing.price})` : ""}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary hover:bg-primary-light text-white rounded-xl font-semibold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-emerald-950/10 mt-6"
                >
                  {getSubmitButtonText()}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {step === 2 && (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-800">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-primary font-display">
                  We&apos;ve Redirected you to WhatsApp!
                </h4>
                <p className="text-sm text-text-muted max-w-sm mx-auto">
                  If the WhatsApp chat did not open automatically, please click the button below to start your conversation with Garima.
                </p>
                <div className="pt-4 space-y-3">
                  <button
                    onClick={() => {
                      const listing = listings[formData.selectedListing] || { title: formData.selectedListing, price: "" };
                      const text = `Hello Garima Tiwari,\n\nI want to book/enquire about: *${listing.title}* (${listing.price || "Free"})\n\nHere are my details:\n• *Name:* ${formData.name}\n• *Phone:* ${formData.phone}\n• *Age:* ${formData.age}\n• *Weight:* ${formData.weight}\n\nPlease confirm my booking. Thank you!`;
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
