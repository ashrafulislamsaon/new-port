/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Target, Shield, Heart, Zap, Award } from 'lucide-react';

interface AboutProps {
  theme: 'dark' | 'light';
}

export default function About({ theme }: AboutProps) {
  const highlights = [
    {
      title: 'Bespoke Block-Out Theme Engine',
      desc: 'Coding raw files with PHP, compiled CSS, and pure React components. Eliminates the slow queries standard builders suffer from.',
      icon: Target,
      color: 'text-[#00f5ff]'
    },
    {
      title: 'Unit-Tested Custom Plugins',
      desc: 'Developing fully compliant, object-oriented solutions integrated with REST APIs, secure clinics intake, and payment frameworks.',
      icon: Shield,
      color: 'text-purple-400'
    },
    {
      title: 'Gutenberg Native Ecosystem',
      desc: 'Providing editorial content freedom. Custom Gutenberg blocks let authors edit visual grids safely without breakages.',
      icon: Award,
      color: 'text-cyan-400'
    },
    {
      title: 'Absolute Speed Audits & VIP Care',
      desc: 'Pioneering structural audits, database re-indexing, and DNS caching architectures to load websites globally under 1s.',
      icon: Zap,
      color: 'text-amber-400'
    }
  ];

  return (
    <section
      id="about"
      className="relative py-24 max-w-7xl mx-auto px-6 md:px-12 z-10 border-t border-white/5"
    >
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: 3D-Like Image Module & Stacked Achievements */}
        <div id="about-left" className="lg:col-span-5 relative">
          {/* Decorative glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-cyan-500/10 blur-[90px] rounded-full pointer-events-none -z-10" />

          {/* Interactive Tilt card mockup */}
          <motion.div
            whileHover={{ scale: 1.02, rotateY: -3, rotateX: 3 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className={`relative rounded-3xl p-4 border aspect-4/5 flex flex-col justify-between overflow-hidden cursor-pointer ${
              theme === 'dark'
                ? 'bg-gradient-to-tr from-[#020617] via-[#0f172a] to-[#1e1b4b] border-white/10 shadow-2xl'
                : 'bg-gradient-to-tr from-slate-50 via-white to-violet-50 border-slate-200 shadow-xl'
            }`}
          >
            {/* Overlay grid design pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            {/* Simulated premium profile layout with elegant vectors */}
            <div className="flex justify-between items-center z-10">
              <span className={`font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full ${
                theme === 'dark' ? 'bg-white/5 text-gray-400' : 'bg-slate-100 text-slate-500'
              }`}>
                WordPress Architect Profile
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            </div>

            {/* Big typographic symbol representation */}
            <div className="my-auto flex flex-col items-center justify-center text-center py-6 z-10">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 flex items-center justify-center shadow-lg mb-4">
                <span className="font-sans font-black text-2xl tracking-tighter text-white">WP</span>
              </div>
              <h3 className={`font-sans font-black text-xl tracking-tight mb-1 ${
                theme === 'dark' ? 'text-white' : 'text-slate-800'
              }`}>
                MATEO ALVAREZ
              </h3>
              <p className="font-mono text-[10px] uppercase text-[#00f5ff] tracking-widest font-bold">
                Senior WP Developer / Architect
              </p>
            </div>

            {/* Mini terminal style feedback lines */}
            <div className={`p-4 rounded-xl font-mono text-[10px] leading-relaxed text-left z-10 ${
              theme === 'dark' ? 'bg-black/40 text-gray-300' : 'bg-slate-100/80 text-slate-600'
            }`}>
              <div className="flex gap-1 items-center mb-1">
                <span className="text-purple-400">$</span>
                <span>system_status --detailed</span>
              </div>
              <div className="text-emerald-400">● 100% Core Web Vitals target validated</div>
              <div className="text-[#00f5ff]">● Headless React REST endpoints activated</div>
              <div className="text-gray-400">● Security signature status: ENCRYPTED</div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Bio Narrative & Stats Counters */}
        <div id="about-right" className="lg:col-span-7 flex flex-col text-left">
          <span className="font-mono text-xs text-[#00f5ff] uppercase tracking-widest font-bold mb-3 block">
            ABOUT THE DEVELOPER
          </span>
          <h2 className={`font-sans font-black tracking-tight text-3xl sm:text-4xl mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            Engineering WordPress sites with software engineering principles.
          </h2>

          <div className="space-y-4 mb-8">
            <p className={`font-sans text-sm md:text-base leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-slate-600'
            }`}>
              With over 8 years of dedicated, battle-tested practice building enterprise WordPress frameworks, I have watched the platform evolve from simple blogging scripts into a highly comprehensive, enterprise-level CMS. My mission is to bridge the gap between creative UI aesthetics and robust server-side performance.
            </p>
            <p className={`font-sans text-sm md:text-base leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-slate-600'
            }`}>
              I custom-code everything. This means I avoid bloated third-party page builders or cheap multi-purpose templates that render massive CSS grids, compromise site security, and cripple SEO rankings. Instead, I utilize standard PHP object loops paired with modern React component architecture to deliver lightning-fast speed, bulletproof code, and client-friendly block control.
            </p>
          </div>

          {/* Highlights Grid of custom capabilities */}
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((h, i) => (
              <div key={i} className="flex gap-4">
                <div className={`mt-1 p-2 rounded-lg shrink-0 ${
                  theme === 'dark' ? 'bg-white/5' : 'bg-slate-100'
                }`}>
                  <h.icon size={18} className={h.color} />
                </div>
                <div>
                  <h4 className={`font-sans font-bold text-sm mb-1 ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>
                    {h.title}
                  </h4>
                  <p className={`font-sans text-xs leading-relaxed ${
                    theme === 'dark' ? 'text-gray-400' : 'text-slate-500'
                  }`}>
                    {h.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
