"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Heart, ChevronDown } from "lucide-react";
import BookingModal from "./BookingModal";
import TopBar from "./TopBar";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/about" },
    { name: "7 Pillars", href: "/pillars" },
    { name: "Transformations", href: "/gallery" },
    { name: "Programs", href: "/offerings" },
    { name: "Testimonials", href: "/testimonials" },
  ];

  const programs = [
    { name: "GWG Yoga Program", href: "/programs/yoga-hybrid" },
    { name: "Online Hybrid Sessions", href: "/programs/online-hybrid" },
    { name: "GWG Anti-Aging Offer", href: "/programs/anti-aging" },
    { name: "Complete Meal Plan", href: "/programs/meal-plan" },
    { name: "Complete Hair Solution", href: "/programs/hair-solution" },
    { name: "All Programs & Pricing", href: "/offerings" },
  ];

  // Drawer Stagger Variants
  const drawerContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      }
    }
  };

  const drawerItemVariants = {
    hidden: { opacity: 0, x: 25 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 260, damping: 25 } }
  };

  return (
    <>
      <header 
        className={`fixed z-40 transition-all duration-500 ${
          scrolled 
            ? "top-4 left-4 right-4 max-w-6xl mx-auto bg-white/80 border border-pink-100/50 backdrop-blur-md shadow-premium rounded-3xl" 
            : "top-0 inset-x-0 bg-white border-b border-zinc-100/20"
        }`}
      >
        {/* Render TopBar only when NOT scrolled at top */}
        <div className={`transition-all duration-300 overflow-hidden ${
          scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        }`}>
          <TopBar />
        </div>

        {/* Main Navbar Row */}
        <div 
          className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-500 ${
            scrolled ? "py-2" : "py-4.5"
          }`}
        >
          {/* Logo container */}
          <Link href="/" className="flex items-center gap-2 group py-1 relative">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className={`relative transition-all duration-500 ${
                scrolled ? "w-11 h-11" : "w-16 h-16 md:w-20 md:h-20"
              }`}
            >
              <Image 
                src="/fulllogo.jpeg" 
                alt="Glow With Garima Full Logo" 
                fill 
                priority
                sizes="(max-w-640px) 44px, (max-w-1024px) 80px, 80px"
                className="object-contain rounded-full" 
              />
            </motion.div>
            <span className={`block font-display font-extrabold tracking-wider text-primary group-hover:text-primary-light transition-colors ml-1.5 whitespace-nowrap transition-all duration-500 ${
              scrolled ? "text-xs md:text-sm" : "text-sm md:text-base lg:text-lg"
            }`}>
              GLOW WITH GARIMA
            </span>
          </Link>

          {/* Desktop Nav - with gliding hover capsule backdrops & active indicators */}
          <nav 
            className="hidden lg:flex items-center gap-1.5 text-xs xl:text-sm font-bold uppercase tracking-wider"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {navLinks.map((link, idx) => {
              if (link.name === "Programs") {
                const isProgramsActive = pathname.startsWith("/programs") || pathname === "/offerings";
                return (
                  <div
                    key={link.href}
                    className="relative py-2"
                    onMouseEnter={() => {
                      setHoveredIndex(idx);
                      setProgramsDropdownOpen(true);
                    }}
                    onMouseLeave={() => {
                      setProgramsDropdownOpen(false);
                    }}
                  >
                    <button
                      className={`relative py-2.5 px-4 transition-colors duration-300 hover:text-primary cursor-pointer whitespace-nowrap rounded-xl flex items-center gap-1 focus:outline-none ${
                        isProgramsActive ? "text-primary font-bold" : "text-text-muted"
                      }`}
                    >
                      {/* Gliding Hover capsule background */}
                      {hoveredIndex === idx && (
                        <motion.span
                          layoutId="hoverNavIndicator"
                          className="absolute inset-0 bg-primary/5 rounded-xl -z-10"
                          transition={{ type: "spring", stiffness: 350, damping: 25 }}
                        />
                      )}
                      <span>Programs</span>
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300" />
                      
                      {/* Active underline indicator */}
                      {isProgramsActive && (
                        <motion.span 
                          layoutId="activeNavIndicator"
                          className="absolute bottom-1.5 left-4 right-4 h-0.5 bg-primary rounded-full"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {programsDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-1 w-64 bg-white border border-pink-100/60 rounded-2xl shadow-xl p-3 z-50 flex flex-col gap-1 text-xs"
                        >
                          {programs.map((program) => {
                            const isProgramActive = pathname === program.href;
                            return (
                              <Link
                                key={program.href}
                                href={program.href}
                                className={`px-4 py-2.5 rounded-xl hover:bg-primary/5 transition-colors text-left font-bold ${
                                  isProgramActive ? "text-primary bg-primary/5" : "text-text-muted hover:text-primary"
                                }`}
                              >
                                {program.name}
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  className={`relative py-2.5 px-4 transition-colors duration-300 hover:text-primary cursor-pointer whitespace-nowrap rounded-xl ${
                    isActive ? "text-primary" : "text-text-muted"
                  }`}
                >
                  {/* Gliding Hover capsule background */}
                  {hoveredIndex === idx && (
                    <motion.span
                      layoutId="hoverNavIndicator"
                      className="absolute inset-0 bg-primary/5 rounded-xl -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}

                  <span>{link.name}</span>

                  {/* Active underline indicator */}
                  {isActive && (
                    <motion.span 
                      layoutId="activeNavIndicator"
                      className="absolute bottom-1.5 left-4 right-4 h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setIsBookingOpen(true)}
              className="px-5 py-2.5 bg-gradient-to-r from-primary to-primary-light text-white font-extrabold rounded-xl text-xs uppercase tracking-widest shadow-md hover:shadow-lg hover:shadow-primary/30 transition-all cursor-pointer flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>Book Call</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="lg:hidden p-2 text-primary focus:outline-none hover:bg-primary/5 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation (Editorial glassmorphism with staggered lists) */}
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
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
              className="fixed right-4 top-4 bottom-4 w-72 bg-white/85 border border-pink-100/30 backdrop-blur-md p-8 shadow-2xl rounded-3xl flex flex-col justify-between z-10 overflow-y-auto"
            >
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <span className="font-display font-extrabold text-primary tracking-widest text-xs uppercase">Navigation</span>
                  <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-zinc-400 hover:text-primary rounded-lg transition-colors cursor-pointer">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                {/* Exclusively for Women tag in drawer */}
                <div className="p-3 bg-pink-50 border border-pink-100 rounded-2xl flex items-center gap-2 text-[10px] text-primary font-bold">
                  <Heart className="w-4 h-4 shrink-0 fill-current text-primary animate-pulse" />
                  <span>Exclusively for Females Only</span>
                </div>

                {/* Staggered Links */}
                <motion.nav 
                  variants={drawerContainerVariants}
                  initial="hidden"
                  animate="show"
                  className="flex flex-col gap-4 text-base font-bold text-text-main"
                >
                  {navLinks.map((link) => {
                    if (link.name === "Programs") {
                      const isProgramsActive = pathname.startsWith("/programs") || pathname === "/offerings";
                      return (
                        <motion.div key={link.href} variants={drawerItemVariants} className="space-y-2">
                          <button
                            onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                            className={`w-full flex items-center justify-between py-1 text-left font-bold hover:text-primary transition-colors focus:outline-none ${
                              isProgramsActive ? "text-primary pl-3 border-l-4 border-primary" : "text-text-muted pl-0"
                            }`}
                          >
                            <span>Programs</span>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileProgramsOpen ? "rotate-180" : ""}`} />
                          </button>

                          <AnimatePresence>
                            {mobileProgramsOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden pl-4 flex flex-col gap-2.5 text-xs font-bold border-l border-pink-100/60"
                              >
                                {programs.map((program) => (
                                  <Link
                                    key={program.href}
                                    href={program.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block py-0.5 transition-colors ${
                                      pathname === program.href ? "text-primary font-extrabold" : "text-text-muted hover:text-primary"
                                    }`}
                                  >
                                    {program.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    }
                    
                    const isActive = pathname === link.href;
                    return (
                      <motion.div key={link.href} variants={drawerItemVariants}>
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block py-1 hover:text-primary transition-colors ${
                            isActive 
                              ? "text-primary border-l-4 border-primary pl-3" 
                              : "text-text-muted pl-0"
                          }`}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                </motion.nav>
              </div>

              {/* Drawer footer actions */}
              <div className="space-y-6 pt-8 border-t border-zinc-100/50">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsBookingOpen(true);
                  }}
                  className="w-full py-4.5 bg-gradient-to-r from-primary to-primary-light text-white font-extrabold text-xs uppercase tracking-widest rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Book Consultation</span>
                </button>
                <div className="flex justify-center gap-6 text-zinc-500">
                  <a href="https://instagram.com/glowwithgarima83" target="_blank" className="hover:text-primary transition-colors"><InstagramIcon className="w-5 h-5" /></a>
                  <a href="http://www.youtube.com/@glowwithgarima83" target="_blank" className="hover:text-primary transition-colors"><YoutubeIcon className="w-5 h-5" /></a>
                  <a href="https://www.facebook.com/share/p/19wkUKX9aS/" target="_blank" className="hover:text-primary transition-colors"><FacebookIcon className="w-5 h-5" /></a>
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
