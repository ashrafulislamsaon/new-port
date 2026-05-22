/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, Sparkles, Code2, ArrowDown } from 'lucide-react';
import { HERO_STATS } from '../data';

interface HeroProps {
  onLearnMoreClick: () => void;
  onContactClick: () => void;
  onEstimatorClick: () => void;
  theme: 'dark' | 'light';
}

export default function Hero({ onLearnMoreClick, onContactClick, onEstimatorClick, theme }: HeroProps) {
  // Anim container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 18,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden max-w-7xl mx-auto px-6 md:px-12 z-10"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full grid lg:grid-cols-12 gap-12 lg:gap-6 items-center"
      >
        {/* Left Column: Copy & Actions */}
        <div id="hero-left" className="lg:col-span-7 flex flex-col justify-center text-left">
          {/* Subtle upper badge */}
          <motion.div
            variants={itemVariants}
            className={`inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full border mb-6 ${
              theme === 'dark'
                ? 'bg-violet-950/30 border-violet-500/30 text-violet-300'
                : 'bg-violet-50 border-violet-200 text-violet-700'
            }`}
          >
            <Sparkles size={13} className="text-[#00f5ff] animate-spin-slow" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest">
              Available for Bespoke Contracts 2026
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className={`font-sans font-black tracking-tight leading-[1.08] text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 ${
              theme === 'dark'
                ? 'text-white'
                : 'text-slate-900'
            }`}
          >
            WordPress <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] via-[#7c3aed] to-[#06b6d4] drop-shadow-sm">
              Developer
            </span> <br />
            & Problem Solver<span className="text-[#00f5ff]">.</span>
          </motion.h1>

          {/* Expert Brief Subheading */}
          <motion.p
            variants={itemVariants}
            className={`font-sans text-base md:text-lg lg:text-xl max-w-xl mb-8 leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-slate-600'
            }`}
          >
            I engineer high-end standard custom themes, proprietary plugins, and scalable native Gutenberg React components. No visual bloat, no builders—just pure performance engineered to drive conversions for clinics and businesses.
          </motion.p>

          {/* Call-to-actions */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-12">
            <button
              id="hero-view-projects-btn"
              onClick={onLearnMoreClick}
              className={`group relative px-7 py-4 rounded-full font-sans font-bold text-sm tracking-wider uppercase transition-all overflow-hidden flex items-center gap-2 cursor-pointer ${
                theme === 'dark'
                  ? 'bg-white text-slate-950 hover:bg-opacity-90 shadow-xl shadow-cyan-500/10'
                  : 'bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-black/10'
              }`}
            >
              View Projects
              <ArrowRight
                size={15}
                className="transition-transform duration-300 transform group-hover:translate-x-1"
              />
            </button>

            <button
              id="hero-contact-btn"
              onClick={onContactClick}
              className={`group px-7 py-4 rounded-full font-sans font-bold text-sm tracking-wider uppercase transition-all flex items-center gap-2 border cursor-pointer hover:scale-[1.02] active:scale-98 ${
                theme === 'dark'
                  ? 'border-white/10 hover:bg-white/5 text-white'
                  : 'border-black/10 hover:bg-slate-50 text-slate-800'
              }`}
            >
              <MessageSquare size={15} className="text-[#00f5ff]" />
              Secure Consultation
            </button>
          </motion.div>

          {/* Stats indicators */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 pt-6 border-t border-dashed border-white/5"
          >
            {HERO_STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className={`font-sans font-black text-2xl md:text-3xl ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  <span className="text-[#00f5ff]">{stat.value[0] === '0' ? '' : ''}</span>
                  {stat.value}
                </span>
                <span className={`font-mono text-[10px] uppercase tracking-widest mt-1 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-slate-500'
                }`}>
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Layered Depth 3D Interactive Mockup */}
        <div id="hero-right" className="lg:col-span-5 relative flex justify-center items-center">
          {/* Main Background Halo Glow */}
          <div className="absolute w-[300px] h-[300px] bg-[#7c3aed]/10 blur-[80px] rounded-full pointer-events-none -z-10" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="relative w-full max-w-[400px] aspect-square rounded-3xl p-0.5"
          >
            {/* Visual Glassmorphic Interface Module mimicking a high-end WordPress Debugger */}
            <div
              className={`w-full h-full rounded-3xl p-6 flex flex-col justify-between border relative overflow-hidden backdrop-blur-xl ${
                theme === 'dark'
                  ? 'bg-gradient-to-b from-[#0f172a]/90 to-[#020617]/95 border-white/10 shadow-3xl shadow-[#7c3aed]/5'
                  : 'bg-gradient-to-b from-white/95 to-slate-50/95 border-slate-200 shadow-2xl shadow-black/5'
              }`}
            >
              {/* Top window dots */}
              <div className="flex items-center justify-between border-b pb-4 mb-4 border-dashed border-white/5 dark:border-black/5">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <div className={`font-mono text-[10px] px-2 py-0.5 rounded-md ${
                  theme === 'dark' ? 'bg-white/5 text-gray-400' : 'bg-slate-100 text-slate-500'
                }`}>
                  lighthouse_scores.ts
                </div>
              </div>

              {/* Core Code Visualizer */}
              <div className="flex-1 flex flex-col gap-4 font-mono text-xs leading-relaxed text-left">
                {/* Score Circle Animation */}
                <div className="flex items-center gap-4 p-3 rounded-xl bg-cyan-950/20 border border-cyan-500/20">
                  <div className="relative flex items-center justify-center w-14 h-14 rounded-full border-2 border-emerald-500 bg-emerald-900/10">
                    <span className="font-sans font-black text-lg text-emerald-400">100</span>
                    {/* Ring glow */}
                    <div className="absolute inset-0 border border-emerald-400 rounded-full animate-ping opacity-25" />
                  </div>
                  <div>
                    <h4 className={`text-xs font-bold font-sans ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                      Core Web Vitals
                    </h4>
                    <span className="text-[10px] text-gray-400">Largest Contentful Paint: 0.4s</span>
                  </div>
                </div>

                {/* Simulated Custom Class */}
                <div className={`p-3 rounded-xl border ${
                  theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-slate-100/50 border-slate-100'
                }`}>
                  <span className="text-purple-400">class</span> <span className="text-cyan-400">WordPressArchitect</span> {'{'}
                  <div className="pl-4">
                    <span className="text-gray-400">public function</span> <span className="text-emerald-400">optimize</span>() {'{'}
                    <div className="pl-4">
                      <span className="text-blue-400">$theme</span> = <span className="text-amber-400">"bespoke_handcrafted"</span>;
                      <br />
                      <span className="text-purple-400">return</span> <span className="text-blue-400">$this</span>-&gt;compile(<span className="text-blue-400">$theme</span>);
                    </div>
                    {'}'}
                  </div>
                  {'}'}
                </div>

                {/* Specs Pill stack */}
                <div className="flex flex-wrap gap-2 text-[9px] uppercase tracking-wider font-bold">
                  <span className="px-2 py-1 rounded bg-[#7c3aed]/10 text-purple-400 border border-[#7c3aed]/20">
                    React Gutenberg
                  </span>
                  <span className="px-2 py-1 rounded bg-[#00f5ff]/10 text-cyan-400 border border-[#00f5ff]/20">
                    REST API Engine
                  </span>
                  <span className="px-2 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    No JQuery
                  </span>
                </div>
              </div>

              {/* Botton CTA Triggering Planner */}
              <div
                onClick={onEstimatorClick}
                className="mt-6 p-3 rounded-xl cursor-pointer bg-gradient-to-r from-[#7c3aed]/10 to-[#00f5ff]/10 border border-[#00f5ff]/20 hover:border-[#00f5ff]/40 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <Code2 size={13} className="text-[#00f5ff]" />
                  <span className={`font-sans text-[11px] font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                    Test project with AI
                  </span>
                </div>
                <Sparkles size={12} className="text-[#00f5ff] animate-pulse" />
              </div>
            </div>

            {/* Futuristic floating neon tags */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className={`absolute -top-4 -right-4 px-4 py-2 rounded-xl border backdrop-blur-md shadow-lg ${
                theme === 'dark' ? 'bg-[#0f172a]/90 border-white/10 text-[#00f5ff]' : 'bg-white border-slate-200 text-purple-600'
              } font-sans font-bold text-[10px] tracking-widest uppercase flex items-center gap-2`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              PHP 8.3 OOP
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.5 }}
              className={`absolute -bottom-4 -left-4 px-4 py-2 rounded-xl border backdrop-blur-md shadow-lg ${
                theme === 'dark' ? 'bg-[#0f172a]/90 border-white/10 text-[#00f5ff]' : 'bg-white border-slate-200 text-[#00f5ff]'
              } font-sans font-bold text-[10px] tracking-widest uppercase flex items-center gap-2`}
            >
              <Code2 size={12} className="text-[#00f5ff]" />
              React Core
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 opacity-60">
        <span className={`font-mono text-[9px] uppercase tracking-widest ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>
          Scroll down
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="cursor-pointer"
          onClick={onLearnMoreClick}
        >
          <ArrowDown size={14} className="text-[#00f5ff]" />
        </motion.div>
      </div>
    </section>
  );
}
