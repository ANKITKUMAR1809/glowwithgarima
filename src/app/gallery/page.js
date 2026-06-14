"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import { ChevronLeft, ChevronRight, X, Maximize2, ShieldCheck, Tag } from "lucide-react";

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Stories" },
    { id: "thyroid", label: "Thyroid Recovery" },
    { id: "pcod", label: "PCOD & PCOS" },
    { id: "weight", label: "Weight & Fat Loss" },
    { id: "faceyoga", label: "Face Yoga" }
  ];
 
  const portfolioImages = [
    { src: "/portfolio/p1.avif", title: "Thyroid & Fat Loss Recovery", desc: "Reversing chronic thyroid weight blocks, lost 15kg naturally with home food.", category: "thyroid" },
    { src: "/portfolio/p2.avif", title: "Hormonal Reset & Waist Definition", desc: "Balanced estrogen/progesterone levels, significant drop in visceral fat.", category: "pcod" },
    { src: "/portfolio/p3.avif", title: "Body Composition Rebuild", desc: "Muscle definition improvement, resolved chronic back and joint pains.", category: "weight" },
    { src: "/portfolio/p4.avif", title: "Healthy Sustainable Fat Loss", desc: "Clean body fat reduction, restored metabolic parameters, dropped 3 sizes.", category: "weight" },
    { src: "/portfolio/p5.avif", title: "Metabolic Activation (Stuck for 22 yrs)", desc: "Successful weight loss for stuck parameters with no restrictive crash dieting.", category: "weight" },
    { src: "/portfolio/p6.avif", title: "Shruti Solanki's Post-Pregnancy Lose", desc: "Dropped 11 kgs of stubborn pregnancy weight, improved core strength.", category: "weight" },
    { src: "/portfolio/p7.avif", title: "Ankita Dixit's Gut & Pain Healing", desc: "Drastic drop in skin inflammation, joint pains, and improved digestion.", category: "weight" },
    { src: "/portfolio/p8.avif", title: "PCOD Cycle Regularization", desc: "Natural cycle regulation within 3 months, hormone marks balanced.", category: "pcod" },
    { src: "/portfolio/p9.avif", title: "Skin Glow & Internal Healing", desc: "Reversed chronic facial swelling, resolved wrinkles, high energy.", category: "faceyoga" },
    { src: "/portfolio/p109.avif", title: "Simran Vaswani Menopause Recovery", desc: "Age 43 working woman, resolved menopause facial swelling and skin issues.", category: "faceyoga" }
  ];

  const filteredImages = activeCategory === "all" 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === activeCategory);

  const handleNext = () => {
    setLightboxIndex((prev) => {
      // Find the index of the next image in the filtered list
      const currentFilteredIndex = filteredImages.findIndex(img => img.src === portfolioImages[prev].src);
      const nextFilteredIndex = (currentFilteredIndex + 1) % filteredImages.length;
      return portfolioImages.findIndex(img => img.src === filteredImages[nextFilteredIndex].src);
    });
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => {
      const currentFilteredIndex = filteredImages.findIndex(img => img.src === portfolioImages[prev].src);
      const prevFilteredIndex = (currentFilteredIndex - 1 + filteredImages.length) % filteredImages.length;
      return portfolioImages.findIndex(img => img.src === filteredImages[prevFilteredIndex].src);
    });
  };

  return (
    <div className="bg-grid-pattern glow-mesh pb-32">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 space-y-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">Visual Proof</span>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-primary leading-tight">
            Client Transformations
          </h1>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed font-semibold">
            See the visual results of women who implemented the 7-Pillar Strategy. No temporary fixes, only sustainable changes.
          </p>
        </div>

        {/* Before/After Drag Widget */}
        <section className="flex flex-col items-center space-y-6 bg-white border border-pink-100/40 p-8 rounded-[2.5rem] md:rounded-[3rem] shadow-premium max-w-3xl mx-auto">
          <div className="text-center space-y-2">
            <h2 className="font-display font-extrabold text-xl text-primary leading-snug">Interactive Comparison</h2>
            <p className="text-xs text-text-muted font-bold">Drag the vertical slider left and right to reveal the transformation.</p>
          </div>
          <BeforeAfterSlider 
            beforeImage="/portfolio/p3.avif" 
            afterImage="/portfolio/p2.avif"
            beforeLabel="Stuck Weight & Fatigue"
            afterLabel="Active Hormones & Fitness"
          />
        </section>

        {/* Filters and Grid Portfolio */}
        <section className="space-y-12">
          
          {/* Category Tabs Filter */}
          <div className="flex flex-wrap items-center justify-center gap-3 border-b border-pink-100 pb-6 max-w-2xl mx-auto">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors duration-300 cursor-pointer ${
                    isSelected ? "text-white" : "text-text-muted hover:text-primary bg-pink-50/20"
                  }`}
                >
                  {cat.label}
                  {isSelected && (
                    <motion.span 
                      layoutId="activeCategoryIndicator"
                      className="absolute inset-0 bg-primary rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img) => {
                const globalIndex = portfolioImages.findIndex(i => i.src === img.src);
                return (
                  <motion.div
                    key={img.src}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.03, y: -4 }}
                    onClick={() => setLightboxIndex(globalIndex)}
                    className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-premium border border-pink-100/50 cursor-pointer group bg-white"
                  >
                    <Image
                      src={img.src}
                      alt={img.title}
                      fill
                      sizes="(max-w-768px) 50vw, 200px"
                      className="object-cover transition-transform duration-500 pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/95 via-primary-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-[#FAF8F5]/80 flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-accent-gold fill-current" />
                        Verified Case
                      </span>
                      <h4 className="font-bold text-xs mt-1 leading-snug">{img.title}</h4>
                      <p className="text-[9px] text-white/70 line-clamp-2 mt-1">{img.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </section>

        {/* Lightbox Overlay */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setLightboxIndex(null)}
                className="fixed inset-0 bg-primary-dark/95 backdrop-blur-md"
              />
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="max-w-3xl w-full max-h-[85vh] relative z-10 flex flex-col items-center justify-center"
              >
                {/* Close Button */}
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="absolute top-4 right-4 z-20 p-2.5 bg-black/60 hover:bg-black/90 text-white rounded-full transition-colors cursor-pointer shadow-lg"
                >
                  <X className="w-5 h-5" />
                </button>
                
                {/* Prev Button */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 z-20 p-3 bg-white hover:bg-primary hover:text-white text-primary rounded-full transition-all shadow-lg cursor-pointer"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  className="absolute right-4 z-20 p-3 bg-white hover:bg-primary hover:text-white text-primary rounded-full transition-all shadow-lg cursor-pointer"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Image Container */}
                <div className="relative w-full h-[65vh] rounded-[2rem] overflow-hidden bg-zinc-950 shadow-2xl border border-white/10">
                  <Image
                    src={portfolioImages[lightboxIndex].src}
                    alt={portfolioImages[lightboxIndex].title}
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
                
                {/* Caption details inside lightbox */}
                <div className="text-center text-white mt-5 max-w-lg px-4 space-y-1">
                  <h4 className="font-display font-extrabold text-lg flex items-center justify-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-accent-gold" />
                    {portfolioImages[lightboxIndex].title}
                  </h4>
                  <p className="text-xs text-white/70 leading-relaxed font-semibold">{portfolioImages[lightboxIndex].desc}</p>
                  <p className="text-[10px] text-white/40 pt-1">Image {lightboxIndex + 1} of {portfolioImages.length}</p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
