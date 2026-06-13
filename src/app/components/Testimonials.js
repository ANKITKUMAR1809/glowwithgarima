"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, Quote, Maximize2, X } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoModalId, setVideoModalId] = useState(null);
  const [isCollageOpen, setIsCollageOpen] = useState(false);

  const textTestimonials = [
    {
      name: "Vinay Panwar",
      location: "Delhi",
      achievement: "Reversed 30-Year Thyroid & Constipation (7 Pillar Strategy)",
      quote: "एक बेहतरीन फिटनेस कोच जो ना सिर्फ शारीरिक अपितु मानसिक स्वास्थ्य पर भी पूरा ध्यान देती है! खाने की अच्छी आदतों का निर्माण करना उनके लिए अहम है! बहुत लोगों को जानती हूं जिन्हे गरिमा ने ठीक किया है लेकिन अभी सिर्फ अपनी बात करूंगी. बचपन की कब्ज को ठीक किया है गरिमा की देखरेख में ! थायरायड को ठीक किया जो तीस साल पुराना था! इमोशनली मजबूत हुई हूं ! शरीर का मजबूत होना तो लाजमी था ही! एक बार जुड़कर देखिए आप खुद जान जाएंगे !",
      avatarBg: "bg-emerald-900 text-white"
    },
    {
      name: "Shruti Solanki",
      location: "Home Workout & Fat Loss",
      achievement: "Post-pregnancy Health & 11kg Loss (7 Pillar Strategy)",
      quote: "I cannot thank my fitness coach enough for the incredible support and guidance she has provided me on my post-pregnancy fitness journey. With a demanding job involving long hours of sitting, she crafted a customized plan that fit perfectly into my schedule, focusing on healthy fat loss, flexibility, and strength. Her approach is holistic, incorporating meditation which transformed my mental well-being. I highly recommend her!",
      avatarBg: "bg-orange-500 text-white"
    },
    {
      name: "Simran Vaswani",
      location: "Beautician, Age 43",
      achievement: "Menopause Swelling Healed (7 Pillar Strategy)",
      quote: "डियर गरिमा मैम, मेरी स्किन लूज़ हो रही थी, रिंकल्स भी थे और फेस फैट भी बहुत था। लेकिन अब आपकी डाइट लेने से सब सही हो रहा है और recently menopause के symptoms से मेरे फेस में स्वेलिंग हो गई थी और वो भी ठीक होगया है। मैं एक वर्किंग women हु लेकिन फिर भी इनर्जाइज्ड फील करती हु at the age of 43 or मैं डॉक्टर के पास जाने से बच गई।। Thank you so much❤️",
      avatarBg: "bg-teal-600 text-white"
    },
    {
      name: "Nikita Dixit",
      location: "Active Client",
      achievement: "Regularized PCOD & Hormones naturally (7 Pillar Strategy)",
      quote: "I joined in August 2024. I was unsure about consistency and had hormonal issues related to PCOD, stress, and gut health. After three months of following the diet and exercise program, my periods became regular and timely! Earlier, I tried medication but it did not work effectively. Through this journey, I realized the value of Yoga, mindful nutrition, and health.",
      avatarBg: "bg-amber-600 text-white"
    },
    {
      name: "Jyoti Sareen",
      location: "Transformation Client",
      achievement: "Mindset Shift & Consistent Fat Loss (7 Pillar Strategy)",
      quote: "I am incredibly grateful to Garima Ma’am for their unwavering support and guidance throughout my fat loss journey. Their personalized approach, consistent motivation, and expert advice played a crucial role in helping me achieve my goals. The tailored workout plans, nutritional tips, and positive encouragement kept me focused and inspired.",
      avatarBg: "bg-emerald-700 text-white"
    }
  ];

  const videoTestimonials = [
    {
      id: "9A31_eG0VxM",
      name: "Manju Gupta",
      description: "Successful weight loss stuck for 22 years",
      thumbnail: "/portfolio/p5.avif"
    },
    {
      id: "zc0-0SXkVqw",
      name: "Shruti Solanki",
      description: "Empowered weight loss of 11 kgs",
      thumbnail: "/portfolio/p6.avif"
    },
    {
      id: "rvobUhSfiPo",
      name: "Jyoti",
      description: "Incredible fat loss transformation",
      thumbnail: "/portfolio/p8.avif"
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % textTestimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + textTestimonials.length) % textTestimonials.length);
  };

  return (
    <div className="space-y-16">
      {/* Written Reviews Carousel */}
      <div className="relative bg-[#FAF8F5] p-8 md:p-12 rounded-[2rem] border border-emerald-950/5 shadow-xl max-w-4xl mx-auto overflow-hidden">
        <div className="absolute top-6 left-6 text-emerald-900/10">
          <Quote className="w-24 h-24 rotate-180" />
        </div>

        <div className="min-h-[260px] flex flex-col justify-between relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <span className="inline-block bg-[#E68A65]/10 text-[#E68A65] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                {textTestimonials[currentIndex].achievement}
              </span>
              <p className="text-[#1A2421] text-base md:text-lg leading-relaxed italic font-medium">
                "{textTestimonials[currentIndex].quote}"
              </p>
              
              <div className="flex items-center gap-4 pt-4 border-t border-zinc-200/50">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${textTestimonials[currentIndex].avatarBg}`}>
                  {textTestimonials[currentIndex].name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-[#0A3323] text-base">
                    {textTestimonials[currentIndex].name}
                  </h4>
                  <p className="text-xs text-text-muted">
                    {textTestimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider controls */}
          <div className="flex justify-end gap-3 pt-6">
            <button
              onClick={handlePrev}
              className="p-3 bg-white hover:bg-emerald-900 hover:text-white text-primary rounded-full transition-all border border-emerald-900/10 shadow-sm cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 bg-white hover:bg-emerald-900 hover:text-white text-primary rounded-full transition-all border border-emerald-900/10 shadow-sm cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Video Testimonials Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {videoTestimonials.map((video, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            className="bg-white rounded-3xl overflow-hidden border border-emerald-900/5 shadow-lg relative group flex flex-col cursor-pointer"
            onClick={() => setVideoModalId(video.id)}
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
              <Image
                src={video.thumbnail}
                alt={video.name}
                fill
                sizes="(max-w-768px) 100vw, 350px"
                className="object-cover opacity-80 group-hover:scale-105 transition-all duration-300 pointer-events-none"
              />
              <div className="absolute inset-0 bg-[#0A3323]/20 group-hover:bg-[#0A3323]/10 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 bg-white/90 group-hover:bg-[#E68A65] group-hover:text-white rounded-full flex items-center justify-center text-primary shadow-xl group-hover:scale-110 transition-all duration-300">
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </div>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between bg-white">
              <div>
                <h4 className="font-bold text-[#0A3323] text-lg mb-1">{video.name}</h4>
                <p className="text-sm text-text-muted">{video.description}</p>
              </div>
              <span className="text-xs font-bold text-[#E68A65] uppercase tracking-wider mt-4 flex items-center gap-1.5 group-hover:underline">
                Watch Video Success Story
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Review Collage Preview */}
      <div className="max-w-xl mx-auto text-center pt-4">
        <div 
          onClick={() => setIsCollageOpen(true)}
          className="relative group rounded-3xl overflow-hidden border border-zinc-200 shadow-md cursor-pointer aspect-[16/9] bg-zinc-100 flex items-center justify-center"
        >
          <Image
            src="/reviewCollage.avif"
            alt="Review Collage"
            fill
            sizes="(max-w-768px) 100vw, 500px"
            className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-500 pointer-events-none"
          />
          <div className="absolute inset-0 bg-[#0A3323]/40 group-hover:bg-[#0A3323]/30 transition-colors flex flex-col items-center justify-center text-white p-4">
            <Maximize2 className="w-10 h-10 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="font-bold text-lg">View Client Reviews Collage</h4>
            <p className="text-xs text-white/80 mt-1">Click to expand and view 100+ WhatsApp screenshots</p>
          </div>
        </div>
      </div>

      {/* YouTube Video Modal */}
      <AnimatePresence>
        {videoModalId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setVideoModalId(null)}
              className="fixed inset-0 bg-[#0A3323]/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-black rounded-3xl overflow-hidden aspect-video max-w-4xl w-full relative z-10 shadow-2xl"
            >
              <button
                onClick={() => setVideoModalId(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/60 hover:bg-black/90 text-white rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${videoModalId}?autoplay=1`}
                title="Client Review"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Collage Lightbox Modal */}
      <AnimatePresence>
        {isCollageOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCollageOpen(false)}
              className="fixed inset-0 bg-[#0A3323]/95 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl w-full max-h-[90vh] relative z-10 flex flex-col items-center justify-center"
            >
              <button
                onClick={() => setIsCollageOpen(false)}
                className="absolute top-4 right-4 z-20 p-3 bg-black/60 hover:bg-black/90 text-white rounded-full transition-colors cursor-pointer shadow-lg"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="relative w-full h-[80vh] rounded-3xl overflow-hidden">
                <Image
                  src="/reviewCollage.avif"
                  alt="Review Collage Screen"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
