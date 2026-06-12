"use client";

import { motion } from "framer-motion";

export default function FloatingSocials() {
  const socials = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/glowwithgarima83",
      color: "hover:bg-[#E1306C] hover:text-white text-[#E1306C]",
      bgColor: "bg-white",
      borderColor: "border-pink-100",
      shadowColor: "shadow-pink-900/5",
      icon: (props) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@glowwithgarima83",
      color: "hover:bg-[#FF0000] hover:text-white text-[#FF0000]",
      bgColor: "bg-white",
      borderColor: "border-red-100",
      shadowColor: "shadow-red-900/5",
      icon: (props) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
        </svg>
      )
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/p/19wkUKX9aS/",
      color: "hover:bg-[#1877F2] hover:text-white text-[#1877F2]",
      bgColor: "bg-white",
      borderColor: "border-blue-100",
      shadowColor: "shadow-blue-900/5",
      icon: (props) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      )
    }
  ];

  return (
    <div className="fixed left-2 sm:left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
      {socials.map((social, idx) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.15, x: 4 }}
            whileTap={{ scale: 0.95 }}
            className={`w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center border ${social.borderColor} ${social.bgColor} ${social.color} ${social.shadowColor} shadow-md transition-colors duration-200 cursor-pointer`}
            aria-label={social.name}
          >
            <Icon className="w-5 h-5" />
          </motion.a>
        );
      })}
    </div>
  );
}
