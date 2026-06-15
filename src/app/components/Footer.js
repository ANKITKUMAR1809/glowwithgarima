"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/glowwithgarima83",
      icon: (props) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
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
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
        </svg>
      )
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/p/19wkUKX9aS/",
      icon: (props) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      )
    }
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/about" },
    { name: "7 Pillars", href: "/pillars" },
    { name: "Gallery & Portfolio", href: "/gallery" },
    { name: "Reviews", href: "/testimonials" },
  ];

  return (
    <footer className="bg-white border-t border-pink-100/60 pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 pb-12">
        
        {/* Brand Block */}
        <div className="md:col-span-5 space-y-6">
          <div className="flex items-center gap-3">
            <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-pink-100/50">
              <Image 
                src="/fulllogo.jpeg" 
                alt="Glow With Garima Full Logo" 
                fill 
                sizes="64px"
                className="object-contain" 
              />
            </div>
            <div>
              <span className="font-display font-extrabold tracking-wider text-primary text-lg block">
                GLOW WITH GARIMA
              </span>
              <span className="text-xs text-text-muted font-semibold">
                Holistic Health & Female Fat Loss Coach
              </span>
            </div>
          </div>

          <p className="text-xs text-text-muted leading-relaxed font-semibold max-w-sm">
            Ditch the crash dieting. Restore metabolic efficiency, balance your hormones naturally, reverse thyroid symptoms, and lose stubborn weight sustainably with the signature 7-Pillar Strategy.
          </p>

          {/* Social icons */}
          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-pink-50/50 hover:bg-primary hover:text-white rounded-xl text-primary border border-pink-100/60 shadow-sm transition-all"
                  aria-label={social.name}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Links Block */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-display font-extrabold text-sm text-primary uppercase tracking-wider">Quick Navigation</h4>
          <ul className="space-y-2.5 text-xs font-bold">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-text-muted hover:text-primary transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Business Rule / Female Policy Block */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="font-display font-extrabold text-sm text-primary uppercase tracking-wider">Exclusivity Notice</h4>
          <div className="p-5 bg-pink-50/40 border border-pink-100/50 rounded-2xl space-y-3">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wide">
              <Heart className="w-4 h-4 shrink-0 fill-current" />
              <span>Female-Only Service</span>
            </div>
            <p className="text-[11px] text-text-muted leading-relaxed font-semibold">
              All live fitness classes, face yoga sessions, meal chart formulations, and personal coaching batches under Glow with Garima are exclusively structured and run for female clients only.
            </p>
          </div>
        </div>

      </div>

      {/* Copyright footer bar */}
      <div className="max-w-7xl mx-auto px-6 border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-text-muted font-bold">
        <span>© {new Date().getFullYear()} Glow With Garima. All rights reserved.</span>
        <div className="flex gap-6">
          <span>Certified Holistic Health Specialist</span>
          <span>•</span>
          <span>International Face Yoga Expert</span>
        </div>
      </div>
    </footer>
  );
}
