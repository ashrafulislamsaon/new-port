/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Zap, Star, ShieldCheck, Quote, Clock } from 'lucide-react';
import { CASE_STUDIES } from '../data';

interface CaseStudiesProps {
  theme: 'dark' | 'light';
}

export default function CaseStudies({ theme }: CaseStudiesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeCase = CASE_STUDIES[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CASE_STUDIES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + CASE_STUDIES.length) % CASE_STUDIES.length);
  };

  return (
    <section
      id="case-studies"
      className="relative py-24 max-w-7xl mx-auto px-6 md:px-12 z-10 border-t border-white/5"
    >
      {/* Structural Headers */}
      <div className="flex items-center justify-between mb-16 flex-col md:flex-row gap-6">
        <div className="text-left">
          <span className="font-mono text-xs text-[#00f5ff] uppercase tracking-widest font-bold mb-3 block">
            DEEP EXPLAINER REVIEWS
          </span>
          <h2 className={`font-sans font-black tracking-tight text-3xl sm:text-4xl md:text-5xl mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            Immersive Case Studies.
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full" />
        </div>

        {/* Slide navigation keys */}
        <div className="flex gap-3">
          <button
            id="case-prev-btn"
            onClick={handlePrev}
            className={`p-3 rounded-full border transition-all ${
              theme === 'dark'
                ? 'border-white/10 hover:bg-white/5 text-[#00f5ff] hover:border-[#00f5ff]/20'
                : 'border-slate-200 hover:bg-slate-50 text-slate-800'
            }`}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            id="case-next-btn"
            onClick={handleNext}
            className={`p-3 rounded-full border transition-all ${
              theme === 'dark'
                ? 'border-white/10 hover:bg-white/5 text-[#00f5ff] hover:border-[#00f5ff]/20'
                : 'border-slate-200 hover:bg-slate-50 text-slate-800'
            }`}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Narrative container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCase.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
          className="relative"
        >
          {/* Main split grid */}
          <div className="grid lg:grid-cols-12 gap-12 items-start mt-6">
            
            {/* Left Column: Diagnostics Comparison (Metrics-dense) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className={`p-6 rounded-2xl border text-left ${
                theme === 'dark' ? 'bg-[#0f172a]/80 border-white/5 shadow-lg' : 'bg-white border-slate-200 shadow-md animate-fade-in'
              }`}>
                <h4 className={`font-sans font-black text-sm tracking-widest uppercase mb-6 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  Core Speed Audits
                </h4>

                {/* Mobile load speed before/after */}
                <div className="space-y-4 mb-6">
                  <div>
                    <span className={`font-mono text-[9px] uppercase tracking-widest font-bold ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>
                      Mobile interactive load
                    </span>
                    <div className="flex items-end gap-3 mt-1">
                      <span className="font-sans font-black text-xl text-red-500 line-through">
                        {activeCase.performance.mobileLoading.before}
                      </span>
                      <span className="text-gray-400 font-mono text-xs">→</span>
                      <span className="font-sans font-black text-2xl text-emerald-400 flex items-center gap-1">
                        <Zap size={14} className="text-emerald-400" />
                        {activeCase.performance.mobileLoading.after}
                      </span>
                    </div>
                  </div>

                  <hr className={theme === 'dark' ? 'border-white/5' : 'border-black/5'} />

                  {/* Desktop load speed before/after */}
                  <div>
                    <span className={`font-mono text-[9px] uppercase tracking-widest font-bold ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>
                      Desktop first paint (TTFB)
                    </span>
                    <div className="flex items-end gap-3 mt-1">
                      <span className="font-sans font-black text-xl text-red-500 line-through">
                        {activeCase.performance.desktopLoading.before}
                      </span>
                      <span className="text-gray-400 font-mono text-xs">→</span>
                      <span className="font-sans font-black text-2xl text-emerald-400 flex items-center gap-1">
                        <Zap size={14} className="text-emerald-400" />
                        {activeCase.performance.desktopLoading.after}
                      </span>
                    </div>
                  </div>

                  <hr className={theme === 'dark' ? 'border-white/5' : 'border-black/5'} />

                  {/* SEO Score progress representation */}
                  <div>
                    <span className={`font-mono text-[9px] uppercase tracking-widest font-bold ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>
                      Overall SEO optimization index
                    </span>
                    <div className="flex items-center gap-4 mt-1.5">
                      <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-red-400 rounded-full"
                          style={{ width: `${activeCase.performance.seoScore.before}%` }}
                        />
                      </div>
                      <span className="font-sans font-black text-xs text-red-400">{activeCase.performance.seoScore.before}%</span>
                    </div>

                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-400 rounded-full"
                          style={{ width: `${activeCase.performance.seoScore.after}%` }}
                        />
                      </div>
                      <span className="font-sans font-black text-xs text-emerald-400">{activeCase.performance.seoScore.after}%</span>
                    </div>
                  </div>
                </div>

                <div className={`p-3.5 rounded-xl text-left flex gap-1.5 ${
                  theme === 'dark' ? 'bg-white/5' : 'bg-slate-100'
                }`}>
                  <ShieldCheck size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span className={`font-mono text-[10px] ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                    Audit code signature authorized under contractual SLA parameters.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Problem-Solution Narrative Storytelling */}
            <div className="lg:col-span-8 flex flex-col text-left justify-between h-full gap-8">
              <div>
                {/* Upper Meta */}
                <div className="flex gap-3 mb-4">
                  <span className={`font-mono text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded bg-[#00f5ff]/10 text-[#00f5ff]`}>
                    Client: {activeCase.client}
                  </span>
                  <span className={`font-mono text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded bg-[#7c3aed]/10 text-purple-400`}>
                    Industry: {activeCase.industry}
                  </span>
                </div>

                <h3 className={`font-sans font-black text-2xl sm:text-3xl tracking-tight mb-6 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  {activeCase.title}
                </h3>

                {/* Sub narrative block */}
                <p className={`font-sans text-sm md:text-base leading-relaxed font-bold mb-8 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-slate-700'
                }`}>
                  {activeCase.summary}
                </p>

                {/* Problem vs Solution Split */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h5 className="font-sans font-black text-xs uppercase tracking-widest text-[#00f5ff] mb-2">
                      The Problem Scenario:
                    </h5>
                    <p className={`font-sans text-xs md:text-sm leading-relaxed ${
                      theme === 'dark' ? 'text-gray-400' : 'text-slate-500'
                    }`}>
                      {activeCase.problem}
                    </p>
                  </div>
                  <div>
                    <h5 className="font-sans font-black text-xs uppercase tracking-widest text-purple-400 mb-2">
                      The Architectural Resolution:
                    </h5>
                    <p className={`font-sans text-xs md:text-sm leading-relaxed ${
                      theme === 'dark' ? 'text-gray-400' : 'text-slate-500'
                    }`}>
                      {activeCase.solution}
                    </p>
                  </div>
                </div>

                {/* Measurables stack list */}
                <div className={`p-6 rounded-2xl border ${
                  theme === 'dark' ? 'bg-[#0f172a]/60 border-white/5' : 'bg-slate-50 border-slate-200'
                }`}>
                  <h5 className={`font-sans font-black text-xs uppercase tracking-widest mb-4 ${
                    theme === 'dark' ? 'text-white' : 'text-slate-700'
                  }`}>
                    Measurable Client Growth Outcome:
                  </h5>
                  <div className="grid md:grid-cols-2 gap-4">
                    {activeCase.measurableResults.map((m, idx) => (
                      <div key={idx} className="flex gap-2.5 text-xs text-left">
                        <span className="text-[#00f5ff] font-bold">✓</span>
                        <span className={theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}>
                          {m}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Patient/Client Testimonial row */}
              <div className={`mt-8 p-6 rounded-2xl border flex flex-col md:flex-row gap-6 relative overflow-hidden ${
                theme === 'dark' ? 'bg-[#131131]/60 border-[#7c3aed]/20' : 'bg-violet-50/50 border-violet-100'
              }`}>
                {/* Quote absolute overlay vector */}
                <Quote className="absolute right-4 top-4 text-[#7c3aed]/10 w-16 h-16 pointer-events-none" />

                {/* Patient / CMO Face thumb */}
                <img
                  src={activeCase.testimonial.image}
                  alt={activeCase.testimonial.author}
                  referrerPolicy="no-referrer"
                  className="w-14 h-14 rounded-2xl object-cover shrink-0 border border-white/10"
                />

                <div className="text-left space-y-2">
                  <p className={`font-sans italic text-xs md:text-sm leading-relaxed ${
                    theme === 'dark' ? 'text-gray-300' : 'text-slate-700'
                  }`}>
                    "{activeCase.testimonial.quote}"
                  </p>
                  <div>
                    <h6 className={`font-sans font-black text-xs ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                      {activeCase.testimonial.author}
                    </h6>
                    <span className={`font-mono text-[9px] uppercase tracking-widest ${theme === 'dark' ? 'text-gray-500' : 'text-slate-500'}`}>
                      {activeCase.testimonial.role} — CONTRACT PARTNER
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
