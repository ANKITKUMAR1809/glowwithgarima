"use client";

import { motion } from "framer-motion";
import { Phone, Heart } from "lucide-react";
import { useCurrency } from "../context/CurrencyContext";

export default function TopBar() {
  const { currency, setCurrency } = useCurrency();

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/glowwithgarima83",
      icon: (props) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@glowwithgarima83",
      icon: (props) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
        </svg>
      )
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/p/19wkUKX9aS/",
      icon: (props) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      )
    }
  ];

  return (
    <div className="bg-primary text-white text-[11px] font-bold py-2 px-4 sm:px-6 border-b border-primary-light/10 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-row justify-between items-center w-full">
        
        {/* Left Side: Contact details (Desktop) / Social links (Mobile) */}
        <div className="flex items-center gap-4">
          {/* Mobile Social Links - Hidden on Desktop */}
          <div className="flex sm:hidden items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white transition-colors cursor-pointer"
                  aria-label={social.name}
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              );
            })}
          </div>

          {/* Desktop Phone link - Hidden on Mobile */}
          <a 
            href="tel:+916393079027" 
            className="hidden sm:flex items-center gap-2 hover:text-pink-100 transition-colors uppercase tracking-wider whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>+91 63930 79027</span>
          </a>
          <span className="text-white/30 hidden md:inline">|</span>
          <div className="hidden md:flex items-center gap-1.5 text-pink-100">
            <Heart className="w-3 h-3 fill-current animate-pulse" />
            <span className="uppercase tracking-wider">Female-Only Holistic Coaching</span>
          </div>
        </div>

        {/* Right Side: Social links + Currency Selector */}
        <div className="flex items-center gap-4 sm:gap-6">
          
          {/* Social Links on Desktop - Hidden on Mobile */}
          <div className="hidden sm:flex items-center gap-3.5">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors cursor-pointer"
                  aria-label={social.name}
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              );
            })}
          </div>

          <span className="text-white/30 hidden sm:inline">|</span>

          {/* Currency Switcher Toggle */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-pink-100 uppercase tracking-wider hidden sm:inline">Currency:</span>
            <div className="bg-primary-dark/40 p-0.5 rounded-lg flex items-center relative border border-white/10">
              {/* INR Option */}
              <button
                onClick={() => setCurrency("INR")}
                className={`relative px-2 py-1 rounded-md text-[9px] uppercase tracking-wider cursor-pointer z-10 transition-colors ${
                  currency === "INR" ? "text-primary font-black" : "text-white/70"
                }`}
              >
                ₹ INR
              </button>
              
              {/* USD Option */}
              <button
                onClick={() => setCurrency("USD")}
                className={`relative px-2 py-1 rounded-md text-[9px] uppercase tracking-wider cursor-pointer z-10 transition-colors ${
                  currency === "USD" ? "text-primary font-black" : "text-white/70"
                }`}
              >
                $ USD
              </button>

              {/* Slider background */}
              <motion.div
                layoutId="currencyActiveBg"
                className="absolute inset-y-0.5 rounded-md bg-white shadow-sm"
                animate={{
                  left: currency === "INR" ? "2px" : "48px",
                  right: currency === "INR" ? "52px" : "2px",
                }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
