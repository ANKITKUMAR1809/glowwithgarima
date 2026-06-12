"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Heart } from "lucide-react";
import BookingModal from "./BookingModal";
import TopBar from "./TopBar";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/about" },
    { name: "7 Pillars", href: "/pillars" },
    { name: "Gallery & Portfolio", href: "/gallery" },
    { name: "Programs & Pricing", href: "/offerings" },
    { name: "Reviews", href: "/testimonials" },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-md shadow-premium border-b border-pink-100/30" 
            : "bg-white border-b border-zinc-100/20"
        }`}
      >
        <TopBar />
        <div className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "py-1.5" : "py-3.5"
        }`}>
          
          {/* Logo container */}
          <Link href="/" className="flex items-center gap-2 group py-1">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 transition-all duration-300"
            >
              <Image 
                src="/fulllogo.jpeg" 
                alt="Glow With Garima Full Logo" 
                fill 
                priority
                sizes="(max-w-640px) 56px, (max-w-1024px) 80px, 96px"
                className="object-contain" 
              />
            </motion.div>
            <span className="block font-display font-extrabold tracking-wider text-primary text-xs sm:text-sm md:text-base lg:text-lg group-hover:text-primary-light transition-colors ml-1 whitespace-nowrap">
              GLOW WITH GARIMA
            </span>
          </Link>

          {/* Desktop Nav - with gliding layout indicator */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs xl:text-sm font-bold uppercase tracking-wider">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={`relative py-2 px-1 transition-colors duration-300 hover:text-primary cursor-pointer whitespace-nowrap ${
                    isActive ? "text-primary" : "text-text-muted"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span 
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="lg:hidden p-2 text-primary focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex lg:hidden">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-primary-dark/30 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-72 bg-white p-8 shadow-2xl flex flex-col justify-between z-10 overflow-y-auto"
            >
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <span className="font-display font-extrabold text-primary tracking-wide text-sm">MENU</span>
                  <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-zinc-400 hover:text-primary">
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                {/* Exclusively for Women tag in drawer */}
                <div className="p-3 bg-pink-50 border border-pink-100 rounded-xl flex items-center gap-2 text-[10px] text-primary font-bold">
                  <Heart className="w-4 h-4 shrink-0 fill-current" />
                  <span>Exclusively for Females Only</span>
                </div>

                <nav className="flex flex-col gap-5 text-base font-bold text-text-main">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`hover:text-primary transition-colors ${
                          isActive 
                            ? "text-primary border-l-4 border-primary pl-3" 
                            : "text-text-muted pl-0"
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <div className="space-y-6 pt-8">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsBookingOpen(true);
                  }}
                  className="w-full py-4 bg-primary text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-pink-900/10"
                >
                  Book Consultation
                </button>
                <div className="flex justify-center gap-6 text-zinc-500">
                  <a href="https://instagram.com/glowwithgarima83" target="_blank" className="hover:text-primary"><InstagramIcon className="w-6 h-6" /></a>
                  <a href="http://www.youtube.com/@glowwithgarima83" target="_blank" className="hover:text-primary"><YoutubeIcon className="w-6 h-6" /></a>
                  <a href="https://www.facebook.com/share/p/19wkUKX9aS/" target="_blank" className="hover:text-primary"><FacebookIcon className="w-6 h-6" /></a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Main Booking Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </>
  );
}

// Inline custom social SVGs
const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);
