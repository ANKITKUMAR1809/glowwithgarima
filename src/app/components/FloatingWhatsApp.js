"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Send, User, Phone, Sparkles, AlertCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    program: "General Inquiry / Custom Coaching",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9]{10,14}$/.test(formData.phone.replace(/[\s-]/g, ""))) {
      newErrors.phone = "Enter a valid phone number";
    }
    if (!formData.age.trim()) newErrors.age = "Age is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Build the WhatsApp message
    const text = `Hello Garima Ma'am,\n\nI have an inquiry from your website.\n\nHere are my details:\n• *Name:* ${formData.name}\n• *Phone:* ${formData.phone}\n• *Age:* ${formData.age}\n• *Selected Program:* ${formData.program}\n• *Message:* ${formData.message || "No custom message"}\n\nPlease guide me on the next steps. Thank you!`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=916393079027&text=${encodedText}`;

    window.open(whatsappUrl, "_blank");
    setIsOpen(false);
    setFormData({
      name: "",
      phone: "",
      age: "",
      program: "General Inquiry / Custom Coaching",
      message: "",
    });
    setErrors({});
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        <motion.button
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#20ba59] transition-colors relative cursor-pointer group"
          aria-label="Chat with Garima Tiwari on WhatsApp"
        >
          {/* Pulsing ring animation */}
          <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping opacity-75 -z-10" />
          <MessageCircle className="w-8 h-8 fill-current" />
        </motion.button>
      </div>

      {/* Inquiry Form Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#0A3323]/40 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-[2rem] shadow-2xl border border-emerald-900/5 max-w-md w-full overflow-hidden z-10 relative max-h-[90vh] flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-100 bg-[#FAF8F5]">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-emerald-50 rounded-xl text-[#25D366]">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-base text-primary">Inquire on WhatsApp</h3>
                    <p className="text-[10px] text-text-muted font-semibold">Get response directly on your phone</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 hover:bg-zinc-100 rounded-full text-zinc-400 hover:text-zinc-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Form Body */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-semibold text-text-main mb-1.5">Your Name *</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-zinc-400 pointer-events-none">
                        <User className="w-4 h-4" />
                      </span>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Garima Sharma"
                        className={`w-full pl-10 pr-4 py-3 bg-[#FAF8F5] border ${errors.name ? 'border-red-400 focus:border-red-400' : 'border-zinc-200/80 focus:border-primary'} rounded-xl text-xs font-semibold text-text-main outline-none focus:bg-white transition-all`}
                      />
                    </div>
                    {errors.name && (
                      <span className="text-[10px] font-bold text-red-500 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* WhatsApp Phone Input */}
                  <div>
                    <label className="block text-xs font-semibold text-text-main mb-1.5">WhatsApp Phone Number *</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-zinc-400 pointer-events-none">
                        <Phone className="w-4 h-4" />
                      </span>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 9876543210 (with country code)"
                        className={`w-full pl-10 pr-4 py-3 bg-[#FAF8F5] border ${errors.phone ? 'border-red-400 focus:border-red-400' : 'border-zinc-200/80 focus:border-primary'} rounded-xl text-xs font-semibold text-text-main outline-none focus:bg-white transition-all`}
                      />
                    </div>
                    {errors.phone && (
                      <span className="text-[10px] font-bold text-red-500 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  {/* Age Input */}
                  <div>
                    <label className="block text-xs font-semibold text-text-main mb-1.5">Your Age *</label>
                    <input
                      type="text"
                      required
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      placeholder="e.g. 29"
                      className={`w-full px-4 py-3 bg-[#FAF8F5] border ${errors.age ? 'border-red-400 focus:border-red-400' : 'border-zinc-200/80 focus:border-primary'} rounded-xl text-xs font-semibold text-text-main outline-none focus:bg-white transition-all`}
                    />
                    {errors.age && (
                      <span className="text-[10px] font-bold text-red-500 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {errors.age}
                      </span>
                    )}
                  </div>

                  {/* Program Dropdown Selection */}
                  <div>
                    <label className="block text-xs font-semibold text-text-main mb-1.5">Select Program / Inquiry Purpose</label>
                    <div className="relative">
                      <select
                        value={formData.program}
                        onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-zinc-200/80 focus:border-primary rounded-xl text-xs font-semibold text-text-main outline-none focus:bg-white transition-all appearance-none cursor-pointer"
                      >
                        <option value="General Inquiry / Custom Coaching">General Inquiry / Custom Coaching</option>
                        <option value="GWG Yoga Program">GWG Yoga Program</option>
                        <option value="Online Hybrid Sessions">Online Hybrid Sessions</option>
                        <option value="GWG Anti-Aging Offer">GWG Anti-Aging Offer</option>
                        <option value="Complete Transformation Plan">Complete Transformation Plan</option>
                        <option value="Complete Hair Solution">Complete Hair Solution</option>
                      </select>
                      {/* Custom select arrow */}
                      <span className="absolute inset-y-0 right-0 pr-4 flex items-center text-zinc-400 pointer-events-none">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-xs font-semibold text-text-main mb-1.5">Your Message (Optional)</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details about your wellness goals or health concerns (e.g. Thyroid, PCOD, Fat loss, etc.)"
                      rows={3}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-zinc-200/80 focus:border-primary rounded-xl text-xs font-semibold text-text-main outline-none focus:bg-white transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-premium hover:shadow-emerald-500/20 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Send Enquiry on WhatsApp</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

