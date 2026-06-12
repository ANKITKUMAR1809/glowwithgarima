"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Quote, Maximize2, X, Star, Heart, CheckCircle } from "lucide-react";

export default function TestimonialsPage() {
  const [videoModalId, setVideoModalId] = useState(null);
  const [isCollageOpen, setIsCollageOpen] = useState(false);

  const detailedCaseStudies = [
    {
      name: "Vinay Panwar",
      location: "Delhi, India",
      condition: "30-Year Chronic Thyroid & Constipation",
      result: "Thyroid Symptoms Reversed & Healed Childhood Constipation",
      details: "Vinay had struggled with severe childhood constipation and a 30-year history of slow thyroid. Despite taking heavy medication, her energy was extremely low, and she faced chronic brain fog and emotional blockages. Under Garima's direct supervision, she adjusted her diet to focus on digestive enzymes, natural whole foods, and thyroid-boosting minerals, while incorporating daily meditations. Within months, her thyroid markers stabilized, her constipation cleared completely, and she gained immense emotional and physical strength.",
      avatar: "V",
      avatarBg: "bg-primary text-white"
    },
    {
      name: "Shruti Solanki",
      location: "Working Mother",
      condition: "Post-Pregnancy Weight & Sedentary Routine",
      result: "11 kg Lost Naturally & Core Strength Restored",
      details: "As a working mother with long sit-down hours and a demanding job, Shruti found it impossible to attend gyms or cook complex meals. She struggled with post-pregnancy fat retention, backaches, and low stamina. Garima designed a home-workout and organic nutrition plan that fit into her tight schedule. Focusing on restorative yoga, progressive fat loss nutrition, and breathing techniques, Shruti dropped 11 kg of stubborn weight, regained core flexibility, and found mental calmness.",
      avatar: "S",
      avatarBg: "bg-secondary text-white"
    },
    {
      name: "Simran Vaswani",
      location: "Beautician, Age 43",
      condition: "Menopause Swelling & Loose Skin",
      result: "Menopause Swelling Healed & Toned Facial Contours",
      details: "At 43, Simran faced sudden menopause symptoms, causing extreme facial swelling, loose skin, wrinkles, and severe fatigue. As a working beautician, she was constantly on her feet but lacked daily energy. Garima structured a hormone-balancing nutritional routine. By modifying her mineral intake and eliminating inflammatory foods, Simran healed her swelling, reduced facial fat, and avoided clinic treatments, feeling younger and highly energized.",
      avatar: "S",
      avatarBg: "bg-accent text-white"
    },
    {
      name: "Nikita Dixit",
      location: "Student/Professional",
      condition: "PCOD, Irregular Cycles & Gut Inflammation",
      result: "Regular Menstrual Cycles within 3 Months",
      details: "Nikita joined in August 2024 with irregular periods, hormonal acne, stress, and severe bloating caused by PCOD. She had tried multiple medications, but none provided lasting results. Garima's plan replaced medicines with targeted yoga poses, gut-cleansing nutrition, and hormone-stabilizing supplements. In three months, her cycles regularized naturally without synthetic drugs, and she achieved consistent gut wellness.",
      avatar: "N",
      avatarBg: "bg-primary-dark text-white"
    }
  ];

  const videoTestimonials = [
    {
      id: "9A31_eG0VxM",
      name: "Manju Gupta",
      desc: "Stuck weight parameter for 22 years successfully resolved.",
      thumbnail: "/portfolio/p5.avif"
    },
    {
      id: "zc0-0SXkVqw",
      name: "Shruti Solanki",
      desc: "Incredible post-pregnancy weight loss transformation of 11 kgs.",
      thumbnail: "/portfolio/p6.avif"
    },
    {
      id: "rvobUhSfiPo",
      name: "Jyoti",
      desc: "Stunning complete body fat loss transformation.",
      thumbnail: "/portfolio/p8.avif"
    }
  ];

  const shortReviews = [
    { name: "Ankita Dixit", text: "Change in body composition, significant fat loss, gut inflammation dropped, healed knee joint pain naturally." },
    { name: "Rubi Singh", text: "Severe skin inflammation healed completely through organic lifestyle adjustments and hormone balancing diet." },
    { name: "Jyoti Sareen", text: "Transformative fat loss journey. Garima Ma'am helped change not just my weight, but my entire mindset." }
  ];

  return (
    <div className="bg-grid-pattern glow-mesh pb-32">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 space-y-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">Reviews & Results</span>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-primary leading-tight">
            Verified Success Stories
          </h1>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed font-semibold">
            Read detailed diaries of real women who reversed chronic health markers and lost weight using natural nutrition and holistic yoga.
          </p>
        </div>

        {/* Video transformations */}
        <section className="space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">Video Diaries</span>
            <h2 className="font-display font-extrabold text-2xl text-primary">Video Success Stories</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoTestimonials.map((video, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="bg-white rounded-[2rem] overflow-hidden border border-pink-100/50 shadow-premium relative group flex flex-col cursor-pointer"
                onClick={() => setVideoModalId(video.id)}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                  <Image
                    src={video.thumbnail}
                    alt={video.name}
                    fill
                    sizes="(max-w-768px) 100vw, 350px"
                    className="object-cover opacity-85 group-hover:scale-103 transition-transform duration-300 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-[#8B1E58]/10 group-hover:bg-[#8B1E58]/5 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/90 group-hover:bg-primary group-hover:text-white rounded-full flex items-center justify-center text-primary shadow-xl group-hover:scale-110 transition-all duration-300">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h4 className="font-bold text-primary text-lg mb-1">{video.name}</h4>
                    <p className="text-xs text-text-muted leading-relaxed font-semibold">{video.desc}</p>
                  </div>
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider mt-4 flex items-center gap-1.5 group-hover:underline">
                    Watch Success Story
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Written case stories grid */}
        <section className="space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary font-medium">Detailed Case Histories</span>
            <h2 className="font-display font-extrabold text-2xl text-primary">Client Diaries</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {detailedCaseStudies.map((study, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -4 }}
                className="p-8 bg-white border border-pink-100/50 rounded-[2rem] shadow-premium hover:shadow-premium-hover transition-all duration-300 relative flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full text-white flex items-center justify-center font-bold text-base ${study.avatarBg}`}>
                        {study.avatar}
                      </div>
                      <div>
                        <h4 className="font-bold text-primary text-sm sm:text-base">{study.name}</h4>
                        <p className="text-[10px] text-text-muted font-bold">{study.location}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold uppercase px-3 py-1 bg-pink-50 text-primary rounded-full tracking-wider shrink-0 max-w-[180px] truncate">
                      {study.condition}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h5 className="font-display font-extrabold text-base text-primary flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      {study.result}
                    </h5>
                    <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-semibold pl-7">
                      {study.details}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-accent-gold pt-4 border-t border-zinc-100/50">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-[10px] font-bold text-text-muted pl-2 uppercase tracking-wide">100% Organic Guide</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Collage Section */}
        <section className="max-w-2xl mx-auto bg-white border border-pink-100 rounded-[2.5rem] p-8 shadow-premium text-center space-y-6">
          <div className="space-y-2">
            <h3 className="font-display font-extrabold text-xl text-primary leading-snug">WhatsApp Feedbacks Collage</h3>
            <p className="text-xs text-text-muted max-w-sm mx-auto font-semibold">
              View 100+ raw screenshots of conversation screenshots showing periods regularized, thyroid numbers recovered, skin glowing, and fat loss shifts.
            </p>
          </div>

          <div 
            onClick={() => setIsCollageOpen(true)}
            className="relative group rounded-2xl overflow-hidden border border-zinc-200 shadow cursor-pointer aspect-[16/9] bg-zinc-50 flex items-center justify-center"
          >
            <Image
              src="/reviewCollage.avif"
              alt="Review Collage Screenshot"
              fill
              sizes="(max-w-768px) 100vw, 500px"
              className="object-cover opacity-90 group-hover:scale-103 transition-transform duration-500 pointer-events-none"
            />
            <div className="absolute inset-0 bg-[#8B1E58]/55 group-hover:bg-[#8B1E58]/45 transition-colors flex flex-col items-center justify-center text-white p-4">
              <Maximize2 className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold text-sm">Expand Reviews Collage</h4>
              <p className="text-[10px] text-white/80 mt-0.5">Click to view high-resolution WhatsApp reviews</p>
            </div>
          </div>
        </section>

        {/* Short Reviews Carousel/Grid */}
        <section className="max-w-4xl mx-auto space-y-6">
          <h3 className="font-display font-extrabold text-lg text-primary text-center">Short Client Feedbacks</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {shortReviews.map((rev, idx) => (
              <div key={idx} className="p-6 bg-white border border-pink-50 rounded-2xl shadow-sm relative space-y-3">
                <Quote className="w-8 h-8 text-pink-100 shrink-0" />
                <p className="text-xs text-text-muted font-bold leading-relaxed">
                  "{rev.text}"
                </p>
                <h4 className="font-bold text-primary text-xs pt-2 border-t border-zinc-200/40">
                  — {rev.name}
                </h4>
              </div>
            ))}
          </div>
        </section>

        {/* YouTube Video Modal */}
        <AnimatePresence>
          {videoModalId && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setVideoModalId(null)}
                className="fixed inset-0 bg-primary-dark/80 backdrop-blur-md"
              />
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-black rounded-3xl overflow-hidden aspect-video max-w-4xl w-full relative z-10 shadow-2xl border border-white/5"
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
                className="fixed inset-0 bg-primary-dark/95 backdrop-blur-md"
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
    </div>
  );
}
