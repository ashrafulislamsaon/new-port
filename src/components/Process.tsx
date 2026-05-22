/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { WORKFLOW } from '../data';

interface ProcessProps {
  theme: 'dark' | 'light';
}

export default function Process({ theme }: ProcessProps) {
  const [activeStep, setActiveStep] = useState<number>(0);

  const renderIcon = (name: string, active: boolean) => {
    const IconComponent = (LucideIcons as any)[name];
    if (IconComponent) {
      return (
        <IconComponent
          size={18}
          className={active ? 'text-slate-950 dark:text-[#00f5ff]' : 'text-gray-400 dark:text-gray-500'}
        />
      );
    }
    return <LucideIcons.Settings size={18} />;
  };

  return (
    <section
      id="process"
      className="relative py-24 max-w-7xl mx-auto px-6 md:px-12 z-10 border-t border-white/5"
    >
      {/* Title */}
      <div className="text-center mb-16 flex flex-col items-center">
        <span className="font-mono text-xs text-[#00f5ff] uppercase tracking-widest font-bold mb-3 block">
          DEVELOPMENT ROADMAP
        </span>
        <h2 className={`font-sans font-black tracking-tight text-3xl sm:text-4xl md:text-5xl max-w-xl mb-4 ${
          theme === 'dark' ? 'text-white' : 'text-slate-900'
        }`}>
          Pristine engineering workflow.
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full" />
      </div>

      {/* Horizontal Steps Navigator */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Left Side: Navigation Links */}
        <div className="w-full lg:w-1/3 flex flex-col gap-3">
          {WORKFLOW.map((step, idx) => {
            const isActive = activeStep === idx;

            return (
              <button
                key={step.phase}
                id={`process-step-nav-${idx}`}
                onClick={() => setActiveStep(idx)}
                className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all group cursor-pointer ${
                  isActive
                    ? theme === 'dark'
                      ? 'border-[#00f5ff] bg-gradient-to-r from-violet-950/20 to-cyan-950/20 shadow-lg shadow-[#00f5ff]/5'
                      : 'border-purple-600 bg-purple-50/50 shadow-md'
                    : theme === 'dark'
                    ? 'border-white/5 bg-[#0f172a]/40 hover:border-white/12'
                    : 'border-slate-100 bg-white hover:border-slate-200'
                }`}
              >
                <div className="flex items-center gap-4">
                  {/* Phase number visualizer */}
                  <span className={`font-mono text-sm font-black ${
                    isActive ? 'text-[#00f5ff]' : 'text-gray-500'
                  }`}>
                    {step.phase}
                  </span>
                  <div>
                    <h4 className={`font-sans font-black text-sm ${
                      isActive
                        ? theme === 'dark'
                          ? 'text-white'
                          : 'text-purple-700'
                        : theme === 'dark'
                        ? 'text-gray-400 group-hover:text-white'
                        : 'text-slate-600 group-hover:text-slate-950'
                    }`}>
                      {step.title}
                    </h4>
                    <span className="font-sans text-[10px] text-gray-500 font-bold">{step.duration}</span>
                  </div>
                </div>

                {/* Animated active icon status */}
                <div className={`p-2.5 rounded-xl transition-all ${
                  isActive
                    ? theme === 'dark'
                      ? 'bg-[#00f5ff]/10 text-[#00f5ff]'
                      : 'bg-purple-700 text-white'
                    : theme === 'dark'
                    ? 'bg-white/5'
                    : 'bg-slate-100'
                }`}>
                  {renderIcon(step.icon, isActive)}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Side: Step Details View (glowing card panel) */}
        <div className="w-full lg:w-2/3">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            className={`p-6 md:p-8 rounded-3xl border text-left relative overflow-hidden backdrop-blur-xl ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-[#0f172a] directly to-[#020617] border-white/10 shadow-2xl shadow-[#7c3aed]/5'
                : 'bg-white border-slate-200 shadow-xl'
            }`}
          >
            {/* Glowing spot background design ornament */}
            <div className="absolute right-0 top-0 w-32 h-32 bg-radial from-[#00f5ff]/5 to-transparent pointer-events-none" />

            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs font-bold text-[#00f5ff] uppercase tracking-widest bg-cyan-950/30 px-3.5 py-1.5 rounded-full">
                Phase {WORKFLOW[activeStep].phase} • {WORKFLOW[activeStep].duration}
              </span>
              <span className={`font-mono text-[10px] tracking-widest ${theme === 'dark' ? 'text-gray-500' : 'text-slate-400'}`}>
                ARCHITECT_ROADMAP_V1
              </span>
            </div>

            <h3 className={`font-sans font-black text-xl md:text-2xl mb-4 tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              {WORKFLOW[activeStep].title}
            </h3>

            <p className={`font-sans text-xs md:text-sm leading-relaxed mb-8 ${
              theme === 'dark' ? 'text-gray-300' : 'text-slate-600'
            }`}>
              {WORKFLOW[activeStep].description}
            </p>

            <hr className={theme === 'dark' ? 'border-white/5 mb-6' : 'border-black/5 mb-6'} />

            {/* Stage deliverables */}
            <h5 className={`font-sans font-bold text-xs uppercase tracking-wider mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-slate-800'
            }`}>
              Phase deliverables & code outputs:
            </h5>

            <div className="grid md:grid-cols-2 gap-4">
              {WORKFLOW[activeStep].deliverables.map((deliv, index) => (
                <div
                  key={index}
                  className={`p-3.5 rounded-xl border flex items-start gap-3 text-xs text-left transition-colors ${
                    theme === 'dark'
                      ? 'bg-[#050816]/60 border-white/5 hover:border-[#00f5ff]/20'
                      : 'bg-slate-50 border-slate-100 hover:border-purple-200'
                  }`}
                >
                  <span className="text-[#00f5ff] font-bold mt-0.5">✓</span>
                  <span className={theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}>{deliv}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
