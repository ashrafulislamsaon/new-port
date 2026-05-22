/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { SERVICES } from '../data';

interface ServicesProps {
  theme: 'dark' | 'light';
  onContactClick: () => void;
}

export default function Services({ theme, onContactClick }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // Dynamic Lucide helper to render icons based on string names inside data.ts
  const renderIcon = (name: string, colorClass: string) => {
    const IconComponent = (LucideIcons as any)[name];
    if (IconComponent) {
      return <IconComponent size={24} className={`z-10 ${colorClass}`} />;
    }
    return <LucideIcons.HelpCircle size={24} className={`z-10 ${colorClass}`} />;
  };

  return (
    <section
      id="services"
      className="relative py-24 max-w-7xl mx-auto px-6 md:px-12 z-10 border-t border-white/5"
    >
      {/* Title */}
      <div className="text-center mb-16 flex flex-col items-center">
        <span className="font-mono text-xs text-[#00f5ff] uppercase tracking-widest font-bold mb-3 block">
          ENGINEERING CAPABILITIES
        </span>
        <h2 className={`font-sans font-black tracking-tight text-3xl sm:text-4xl md:text-5xl max-w-xl mb-4 ${
          theme === 'dark' ? 'text-white' : 'text-slate-900'
        }`}>
          Bespoke services to scale your operations.
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full" />
      </div>

      {/* Grid of Interactive Service Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {SERVICES.map((service, index) => {
          const isSelected = selectedService === service.id;

          return (
            <motion.div
              key={service.id}
              id={`service-card-${service.id}`}
              whileHover={{ y: -6, rotateY: 1.5, rotateX: -1.5 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              onClick={() => setSelectedService(isSelected ? null : service.id)}
              className={`relative rounded-2xl p-6 border text-left cursor-pointer overflow-hidden flex flex-col justify-between transition-all group ${
                isSelected
                  ? theme === 'dark'
                    ? 'border-[#00f5ff] bg-slate-900/90 shadow-2xl shadow-[#00f5ff]/5'
                    : 'border-purple-600 bg-white shadow-2xl shadow-purple-600/5'
                  : theme === 'dark'
                  ? 'border-white/5 bg-[#0f172a]/60 hover:border-white/15 shadow-lg'
                  : 'border-slate-200 bg-white hover:border-slate-300 shadow-md'
              }`}
            >
              {/* Radial background glowing mesh on card hover */}
              <div className="absolute inset-0 bg-radial from-transparent via-transparent to-transparent group-hover:from-violet-500/5 group-hover:via-cyan-500/0 group-hover:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                {/* Icon wrapper & Starting price row */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-xl ${
                    theme === 'dark' ? 'bg-white/5' : 'bg-slate-100'
                  }`}>
                    {renderIcon(service.icon, 'text-[#00f5ff] dark:text-cyan-400')}
                  </div>
                  <div className="text-right">
                    <p className={`font-mono text-[9px] uppercase tracking-widest ${
                      theme === 'dark' ? 'text-gray-400' : 'text-slate-500'
                    }`}>
                      Starting From
                    </p>
                    <span className={`font-sans font-black text-sm ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}>
                      {service.startingPrice}
                    </span>
                  </div>
                </div>

                {/* Info Text */}
                <h3 className={`font-sans font-black text-lg mb-2 tracking-tight ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  {service.title}
                </h3>
                <p className={`font-sans text-xs sm:text-sm leading-relaxed mb-4 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-slate-500'
                }`}>
                  {service.description}
                </p>
              </div>

              {/* View/Expand clicker CTA */}
              <div className="flex justify-between items-center pt-4 border-t border-dashed border-white/5 dark:border-black/5 mt-4">
                <span className={`font-mono text-[10px] uppercase tracking-wider font-bold ${
                  theme === 'dark' ? 'text-gray-400' : 'text-slate-500'
                }`}>
                  SLA Timeline: <span className="text-[#00f5ff] font-sans font-black">{service.deliveryTime}</span>
                </span>
                <span className="font-sans text-xs text-[#00f5ff] flex items-center gap-1 font-bold group-hover:translate-x-1 transition-transform">
                  {isSelected ? 'Collapse Specs' : 'Expand Specs'} →
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Expanded detailed specifications box with smooth dropdown animations */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            id="service-expanded-specification"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            {SERVICES.filter((s) => s.id === selectedService).map((service) => (
              <div
                key={service.id}
                className={`p-6 md:p-8 rounded-2xl border text-left flex flex-col lg:flex-row gap-8 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-violet-950/15 via-[#0f172a]/90 to-[#050816]/95 border-[#00f5ff]/30 shadow-2xl'
                    : 'bg-gradient-to-r from-violet-50/50 via-white to-slate-100 border-purple-200'
                }`}
              >
                {/* Left col: Full explanation */}
                <div className="lg:w-1/2">
                  <span className="font-mono text-[9px] uppercase tracking-widest font-bold text-[#00f5ff] mb-2 block animate-pulse">
                    ARCHITECTURAL DETAILS
                  </span>
                  <h4 className={`font-sans font-black text-xl mb-4 tracking-tight ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>
                    {service.title} Execution Plan
                  </h4>
                  <p className={`font-sans text-xs md:text-sm leading-relaxed mb-6 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-slate-600'
                  }`}>
                    {service.longDesc}
                  </p>
                  <div className="flex gap-4">
                    <div>
                      <span className={`font-mono text-[9px] uppercase ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>
                        Starting price range
                      </span>
                      <p className={`font-sans font-black text-xl text-[#00f5ff]`}>{service.startingPrice}</p>
                    </div>
                    <div>
                      <span className={`font-mono text-[9px] uppercase ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>
                        Standard SLA delivery
                      </span>
                      <p className={`font-sans font-black text-xl ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>{service.deliveryTime}</p>
                    </div>
                  </div>
                </div>

                {/* Right col: Bullet deliverables checklist */}
                <div className="lg:w-1/2 flex flex-col justify-between">
                  <div>
                    <h5 className={`font-sans font-bold text-xs uppercase tracking-wider mb-4 ${
                      theme === 'dark' ? 'text-white' : 'text-slate-800'
                    }`}>
                      Included deliverables:
                    </h5>
                    <ul className="space-y-3">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex gap-3 text-xs md:text-sm text-left">
                          <span className="text-[#00f5ff] font-bold shrink-0">✓</span>
                          <span className={theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Immediate secure call to action for selected service */}
                  <div className="mt-8 pt-6 border-t border-dashed border-white/5 dark:border-black/5 flex flex-wrap gap-4 items-center justify-between">
                    <p className={`font-mono text-[10px] ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>
                      Ref. Code: <span className="text-[#00f5ff] font-bold">WP-SLA-{service.id.toUpperCase()}</span>
                    </p>
                    <button
                      id="services-book-service-btn"
                      onClick={onContactClick}
                      className="px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-sans font-bold text-xs uppercase tracking-wider hover:-translate-y-0.5 transition-all cursor-pointer"
                    >
                      Secure Booking
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
