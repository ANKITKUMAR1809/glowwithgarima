"use client";

import { useState, use } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Heart, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  Apple, 
  ShieldCheck, 
  Award,
  Users,
  Compass
} from "lucide-react";
import BookingModal from "../../components/BookingModal";
import { useCurrency } from "../../context/CurrencyContext";

const programData = {
  "gwg-yoga-program": {
    title: "GWG Yoga Program",
    category: "Yoga & Holistic Training",
    tagline: "Transform Your Core, Tone Your Body, and Reset Your Mind",
    description: "A hybrid fitness routine combining traditional yoga, calorie-burning routines, and mental peace. Exclusively designed for females for fat loss, metabolic balance, and stress relief.",
    targetAreas: ["Fat Loss", "Hormonal Balance", "Core Strength", "Joint Flexibility"],
    duration: "6 Months Personal Plan or Monthly Group Batches",
    timing: "Personal Plan: Flexible customized timings. Group Batch: 5 Days a week (Mon, Tue, Wed, Fri, Sat) - Morning & Evening Batches (7-day trial available)",
    inclusions: [
      "Customized 1-on-1 Mentor Sessions (Personal)",
      "Calorie-Burning Yoga & Body Toning Sequences",
      "Hormone Balancing & Cortisol Lowering Exercises",
      "Mindfulness & Stress-Relief Guided Meditations",
      "Personalized Progress Tracking & Dedicated Support"
    ],
    defaultListing: "demo-yoga-hybrid",
    pricingTiers: [
      {
        name: "1 Month Group Plan (3 Days/wk)",
        duration: "Group Yoga Batch",
        priceId: "yoga-hybrid-group-3days",
        isOneMonth: true,
        desc: "Includes live online interactive sessions and a 7-day trial period."
      },
      {
        name: "1 Month Group Plan (5 Days/wk)",
        duration: "Group Yoga Batch",
        priceId: "yoga-hybrid-group-5days",
        isOneMonth: true,
        desc: "High intensity live interactive sessions with full 7-day trial."
      },
      {
        name: "Private 1-on-1 Plan (6 Months)",
        duration: "Personal Mentor Plan",
        priceId: "yoga-hybrid-personal",
        isOneMonth: false,
        desc: "Exclusively tailored training, flexible timing, and direct daily support."
      }
    ],
    image: "/wellness_hero.png"
  },
  "online-hybrid-sessions": {
    title: "Online Hybrid Sessions",
    category: "Live Interactive Group Coaching",
    tagline: "Strength, Mobility, and Mindfulness Live From Your Home",
    description: "A complete online transformation package combining Yoga with strength building, breath control, core training, and deep relaxation. Designed to build functional strength and balance cortisol.",
    targetAreas: ["Functional Strength", "Cortisol Control", "Cardiovascular Health", "Restorative Stretches"],
    duration: "1 Month, 3 Months, or 6 Months",
    timing: "Live group classes run 5 days a week (Mon, Tue, Wed, Fri, Sat) with both Morning & Evening batches. (Personal yoga sessions are also available)",
    inclusions: [
      "12 Live Interactive Sessions / Month",
      "Weighted Strength & Resistance Drills",
      "Conscious Breathing & Pilates Core Work",
      "Guided Meditation & Yog Nidra Sleep Therapy",
      "Community Motivation, Chat Support & WhatsApp Updates"
    ],
    defaultListing: "demo-online-hybrid",
    pricingTiers: [
      {
        name: "1 Month Plan",
        duration: "12 Interactive Sessions",
        priceId: "hybrid-sessions-1",
        isOneMonth: true,
        desc: "Short term trial to get a feel of live online hybrid sessions."
      },
      {
        name: "3 Months Plan",
        duration: "36 Interactive Sessions",
        priceId: "hybrid-sessions-3",
        isOneMonth: false,
        desc: "Consistent group coaching to experience visible metabolic change."
      },
      {
        name: "6 Months Plan",
        duration: "72 Interactive Sessions",
        priceId: "hybrid-sessions-6",
        isOneMonth: false,
        desc: "Our most popular long-term group program for complete body reboot."
      }
    ],
    image: "/aboutUsImage.avif"
  },
  "gwg-anti-aging-offer": {
    title: "GWG Anti-Aging Offer",
    category: "Skin & Face Yoga Special",
    tagline: "Restore Your Organic Glow & Release Facial Tension Naturally",
    description: "A complete facial exercise and skin healing batch designed to enhance blood circulation, release face muscle tension, and restore organic glow. Exclusively for females.",
    targetAreas: ["Facial Toning", "Anti-Ageing Glow", "Stress Release", "Skin Radiance"],
    duration: "11, 22, or 33 Sessions",
    timing: "8:40 PM - 9:40 PM (Thursdays & Sundays off)",
    inclusions: [
      "200+ Facial Yoga Asanas & Specialized Exercises",
      "Gua-Sha, Jade Roller & Facial Massage methods",
      "Acupressure & Lymphatic Drainage therapies",
      "Natural Ubtan recipes & Glow blueprints",
      "Customized morning/evening glow drinks (included in 3-month plan)"
    ],
    defaultListing: "demo-anti-aging",
    pricingTiers: [
      {
        name: "11 Sessions (1 Month Plan)",
        duration: "Basic Facelift Batch",
        priceId: "anti-aging-11",
        isOneMonth: true,
        desc: "Includes core exercises, breathing technique, and jade roller guidance."
      },
      {
        name: "22 Sessions (2 Month Plan)",
        duration: "Intermediate Facial Renewal",
        priceId: "anti-aging-22",
        isOneMonth: false,
        desc: "Includes full facial exercise, natural glow packs, and massage tools guides."
      },
      {
        name: "33 Sessions (3 Month Plan)",
        duration: "Premium Scalp & Skin Lift",
        priceId: "anti-aging-33",
        isOneMonth: false,
        desc: "Includes customized morning/night drinks, supplements, skin care products, and face yoga."
      }
    ],
    image: "/headerImage.avif"
  },
  "complete-transformation-plan": {
    title: "Complete Transformation Plan",
    category: "Hormonal & Metabolic Nutrition",
    tagline: "Nourish Your Body and Heal From Within Without Starvation",
    description: "A personalized, home-cooked food blueprint designed to target fat loss blocks, thyroid optimization, and PCOD/PCOS recovery. Exclusively for women: Meals configured around cycle syncing, cortisol control, and gut restoration.",
    targetAreas: ["Metabolic Reset", "Thyroid Optimization", "PCOD/PCOS Recovery", "Gut Healing"],
    duration: "90 Days Nutrition Coaching",
    timing: "Daily customized menus & weekly followups with Coach Garima",
    inclusions: [
      "Customized 90-Day Nutrition Blueprints & Weekly Edits",
      "Hormone-Friendly, Simple Home-Cooked Recipes using basic groceries",
      "Cycle Syncing, Cortisol Control & Stress Reset guides",
      "Private WhatsApp Chat Support & Priority Follow-ups",
      "Active guidance on reverse-engineering weight loss blockages"
    ],
    defaultListing: "demo-meal-plan",
    pricingTiers: [
      {
        name: "Silver Tier (90 Days)",
        duration: "Basic 3-Month Plan",
        priceId: "meal-plan-silver",
        isOneMonth: false,
        desc: "Basic customized 90 days nutrition with standard support & weekly followups."
      },
      {
        name: "Gold Tier (90 Days)",
        duration: "Comprehensive 3-Month Plan",
        priceId: "meal-plan-gold",
        isOneMonth: false,
        desc: "Comprehensive 90 days nutrition, priority chat support, and natural cycle syncing blueprints."
      },
      {
        name: "Platinum Tier (90 Days)",
        duration: "Premium 3-Month Mentor Plan",
        priceId: "meal-plan-platinum",
        isOneMonth: false,
        desc: "Premium 90 days nutrition, 1-on-1 calls with Coach Garima, 24/7 priority support, cycle & gut guides."
      }
    ],
    image: "/offering/of2.avif"
  },
  "complete-hair-solution": {
    title: "Complete Hair Solution",
    category: "Hair & Scalp Health Batch",
    tagline: "Botanical Care to Reverse Hair Loss and Restore Silky Texture",
    description: "Anti-ageing hair batch focused on reversing dryness, minimizing hair fall, reversing graying trends, and restoring smooth textures naturally. Exclusively for females.",
    targetAreas: ["Hair Fall Control", "Scalp Rejuvenation", "Graying Reversal", "Dandruff Relief"],
    duration: "9 Sessions Total Package",
    timing: "6 Recorded Botanical Remedies + 3 Live Technique Sessions (flexible scheduling)",
    inclusions: [
      "Correct oil massage technique live mentoring",
      "Scalp health evaluation & personalized hair type checks",
      "Ayurvedic hair mask & organic infused oil formulas",
      "Botanical restorative hair spray recipes",
      "Brand secret remedies & natural application parameters"
    ],
    defaultListing: "demo-hair-solution",
    pricingTiers: [
      {
        name: "9 Sessions Full Batch",
        duration: "Scalp & Hair Care Special",
        priceId: "hair-solution",
        isOneMonth: false,
        desc: "Comprehensive 9-session botanical care system with brand secret remedies."
      }
    ],
    image: "/offering/of3.avif"
  }
};

export default function ProgramPage({ params }) {
  const unwrappedParams = use(params);
  const id = unwrappedParams.id;
  const program = programData[id];
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const { formatPrice } = useCurrency();

  if (!program) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-24 text-center space-y-6">
        <h1 className="font-display font-extrabold text-3xl text-primary">Program Not Found</h1>
        <p className="text-text-muted">The program you are looking for does not exist or has been renamed.</p>
        <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold">
          Back to Home
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-grid-pattern glow-mesh pb-24 relative overflow-hidden">
      {/* Decorative gradient blur background */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Breadcrumb & Top Tag */}
        <div className="pt-6">
          <Link href="/" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
            ← Back to Home
          </Link>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-pink-50 text-primary text-xs font-bold uppercase tracking-wider border border-pink-100/60">
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              {program.category}
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-primary leading-tight">
              {program.title}
            </h1>
            <p className="text-lg font-display font-bold text-secondary italic">
              &ldquo;{program.tagline}&rdquo;
            </p>
            <p className="text-base text-text-muted leading-relaxed font-semibold">
              {program.description}
            </p>

            {/* Target Badges */}
            <div className="space-y-2 pt-2">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-zinc-400 block">Focus Areas:</span>
              <div className="flex flex-wrap gap-2">
                {program.targetAreas.map((area, idx) => (
                  <span key={idx} className="px-3.5 py-1.5 bg-white border border-pink-100 rounded-full text-xs font-bold text-primary shadow-sm">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Timings info */}
            <div className="bg-[#FAF8F5] border border-pink-50 p-5 rounded-2xl space-y-3 shadow-sm">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>Schedule & Duration</span>
              </div>
              <p className="text-xs text-text-main font-semibold leading-relaxed">
                <strong>Duration:</strong> {program.duration} <br />
                <strong>Batches/Timings:</strong> {program.timing}
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-2xl text-sm transition-all shadow-premium hover:shadow-primary/25 cursor-pointer flex items-center justify-center gap-2 group btn-shine-container relative overflow-hidden"
              >
                <div className="btn-shine-overlay" />
                <span>Book 20 Min Discovery Call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
            </div>
          </div>

          {/* Hero Image / Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-[2.5rem] shadow-premium border-4 border-white bg-white overflow-hidden">
              <Image
                src={program.image}
                alt={program.title}
                fill
                priority
                sizes="(max-w-768px) 100vw, 400px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Dynamic Payment Banner (Crucial Requirement!) */}
        <div className="bg-gradient-to-r from-primary/10 via-pink-50 to-secondary/10 border border-pink-100/60 p-6 md:p-8 rounded-[2rem] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-xl pointer-events-none" />
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white text-primary rounded-2xl shadow-sm shrink-0 border border-pink-50">
              <Award className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-display font-extrabold text-lg text-primary">Flexible Payment Route</h3>
              <p className="text-xs text-text-muted font-bold">
                Both **Installment and One-Time Payment options are fully available** for all program packages. Start your transformation journey with a token installment today!
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsBookingOpen(true)}
            className="px-6 py-3 bg-secondary hover:bg-blue-600 text-white font-extrabold rounded-xl text-xs uppercase tracking-widest transition-all cursor-pointer whitespace-nowrap"
          >
            Ask About Installments
          </button>
        </div>

        {/* Inclusions Section */}
        <div className="bg-white border border-pink-100 rounded-[2.5rem] p-8 md:p-12 shadow-premium grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-secondary" />
              GWG Premium Package
            </span>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-primary leading-snug">
              What is Included in Your Program
            </h2>
            <p className="text-text-muted text-xs md:text-sm font-semibold leading-relaxed">
              We guide you through a customized lifestyle blueprint built on natural, sustainable methods. No synthetic drugs, no strict calorie counting. Just simple, life-changing wellness.
            </p>
            <div className="p-4 bg-pink-50/40 rounded-2xl border border-pink-100/40 text-[11px] text-text-muted font-bold leading-relaxed">
              🌸 Note: Our programs are designed exclusively for female wellness. All support groups, direct follow-ups, and live sessions are strictly female-only batches.
            </div>
          </div>

          <div className="space-y-4">
            {program.inclusions.map((inclusion, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-pink-50/20 border border-pink-100/30 rounded-2xl">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-xs text-text-main font-semibold leading-relaxed">
                  {inclusion}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Tiers Section (Only shows prices for one-month plans!) */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Tiers & Inquiries</span>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-primary">Available Program Packages</h2>
            <p className="text-text-muted text-xs md:text-sm font-semibold">
              Select a tier that matches your timeline. Both installment plans and one-time discount payments are accepted.
            </p>
          </div>

          <div className={`grid grid-cols-1 gap-6 max-w-4xl mx-auto ${program.pricingTiers.length === 1 ? 'md:grid-cols-1 max-w-md' : 'md:grid-cols-3'}`}>
            {program.pricingTiers.map((tier, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-pink-100/60 rounded-[2rem] p-6 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-all relative overflow-hidden"
              >
                {/* Visual Accent top bar */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-secondary" />
                
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-extrabold text-[#E68A65] uppercase tracking-wider block">
                      {tier.duration}
                    </span>
                    <h3 className="font-display font-extrabold text-lg text-primary">
                      {tier.name}
                    </h3>
                  </div>

                  {/* Pricing Display Logic (One-Month vs Non-One-Month) */}
                  <div className="pt-2">
                    {tier.isOneMonth ? (
                      <div className="space-y-0.5">
                        <span className="text-3xl font-display font-extrabold text-primary">
                          {formatPrice(tier.priceId)}
                        </span>
                        <span className="text-[10px] text-text-muted font-bold block uppercase tracking-wider">
                          One Month Batch Price
                        </span>
                      </div>
                    ) : (
                      <div className="space-y-0.5">
                        <span className="text-lg font-display font-bold text-secondary block">
                          Pricing on Call
                        </span>
                        <span className="text-[10px] text-text-muted font-semibold block leading-relaxed">
                          Available on Consultation / Discovery Call
                        </span>
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-text-muted leading-relaxed font-semibold">
                    {tier.desc}
                  </p>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => setIsBookingOpen(true)}
                    className="w-full py-3.5 bg-primary hover:bg-primary-dark text-white rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer shadow transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Enquire & Book</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="block text-[9px] text-center text-text-muted font-semibold">
                    Installment plan options available.
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Dynamic Booking Modal pre-selected with the current program's listing */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        initialSelectedOption={program.defaultListing}
      />
    </div>
  );
}
