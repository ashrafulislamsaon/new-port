/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

interface TestimonialsProps {
  theme: 'dark' | 'light';
}

export default function Testimonials({ theme }: TestimonialsProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  const activeT = TESTIMONIALS[activeIdx];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section
      id="testimonials"
      className="relative py-24 max-w-7xl mx-auto px-6 md:px-12 z-10 border-t border-white/5"
    >
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading and navigation */}
        <div className="lg:col-span-5 text-left">
          <span className="font-mono text-xs text-[#00f5ff] uppercase tracking-widest font-bold mb-3 block">
            CLIENT OPINIONS
          </span>
          <h2 className={`font-sans font-black tracking-tight text-3xl sm:text-4xl md:text-5xl mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            Trusted by Leaders & Practitioners.
          </h2>
          <p className={`font-sans text-xs sm:text-sm leading-relaxed mb-8 ${
            theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
          }`}>
            I build long-term relationships with clinic managers, medical professionals, and scaling business owners. Read what they say about our performance-focused WordPress architectures.
          </p>

          {/* Carousel Arrows */}
          <div className="flex gap-3">
            <button
              id="t-prev-btn"
              onClick={handlePrev}
              className={`p-3.5 rounded-full border transition-all cursor-pointer ${
                theme === 'dark'
                  ? 'border-white/10 hover:bg-white/5 text-[#00f5ff] hover:border-[#00f5ff]/20'
                  : 'border-slate-200 hover:bg-slate-50 text-slate-800'
              }`}
            >
              <ArrowLeft size={16} />
            </button>
            <button
              id="t-next-btn"
              onClick={handleNext}
              className={`p-3.5 rounded-full border transition-all cursor-pointer ${
                theme === 'dark'
                  ? 'border-white/10 hover:bg-white/5 text-[#00f5ff] hover:border-[#00f5ff]/20'
                  : 'border-slate-200 hover:bg-slate-50 text-slate-800'
              }`}
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Right Column: Sliding Glassmorphic Card */}
        <div className="lg:col-span-7 relative flex justify-center items-center">
          {/* Sparkly decorative neon circles */}
          <div className="absolute right-12 bottom-6 w-52 h-52 bg-[#00f5ff]/5 blur-3-xl rounded-full" />
          <div className="absolute left-6 top-4 w-40 h-40 bg-[#7c3aed]/5 blur-3-xl rounded-full" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeT.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className={`w-full max-w-xl rounded-3xl p-8 border text-left flex flex-col justify-between relative overflow-hidden backdrop-blur-xl ${
                theme === 'dark'
                  ? 'bg-gradient-to-tr from-[#0f172a]/80 via-[#0a0f24]/90 to-[#020617]/95 border-white/10 shadow-2xl shadow-[#7c3aed]/5'
                  : 'bg-white border-slate-200 shadow-xl shadow-black/5'
              }`}
            >
              <Quote className="absolute right-8 top-8 text-[#00f5ff]/10 w-24 h-24 pointer-events-none" />

              <div>
                {/* Rating line */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: activeT.rating }).map((_, i) => (
                    <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Main feedback quotes */}
                <p className={`font-sans italic text-sm md:text-base leading-relaxed mb-8 ${
                  theme === 'dark' ? 'text-gray-200' : 'text-slate-700'
                }`}>
                  "{activeT.quote}"
                </p>
              </div>

              {/* Author bio details at bottom */}
              <div className="flex items-center gap-4 pt-6 border-t border-dashed border-white/5 dark:border-black/5">
                <img
                  src={activeT.avatar}
                  alt={activeT.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-2xl object-cover shrink-0 border border-white/15"
                />
                <div>
                  <h4 className={`font-sans font-black text-sm ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>
                    {activeT.name}
                  </h4>
                  <p className={`font-mono text-[9px] uppercase tracking-widest ${
                    theme === 'dark' ? 'text-gray-400' : 'text-slate-500'
                  }`}>
                    {activeT.role}, <span className="text-[#00f5ff] font-bold">{activeT.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
