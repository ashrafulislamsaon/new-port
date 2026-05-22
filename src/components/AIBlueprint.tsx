/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, RefreshCw, Layers, Shield, Zap, FileText } from 'lucide-react';

interface AIBlueprintProps {
  theme: 'dark' | 'light';
}

export default function AIBlueprint({ theme }: AIBlueprintProps) {
  const [industry, setIndustry] = useState('Clinic');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['booking', 'speed']);
  const [projectBrief, setProjectBrief] = useState('');
  const [loading, setLoading] = useState(false);
  const [blueprint, setBlueprint] = useState<string | null>(null);

  const featuresList = [
    { id: 'booking', label: 'CRM Appointment Scheduler', desc: 'Secure real-time CRM slots sync' },
    { id: 'speed', label: 'Core Web Vitals Speed Suite', desc: 'Targeting 99% Lighthouse index' },
    { id: 'forms', label: 'Secure HIPAA Intake Forms', desc: 'Symmetric encryption payloads' },
    { id: 'blocks', label: 'Custom React Gutenberg Blocks', desc: 'Clean editorial visual freedom' },
    { id: 'woo', label: 'WooCommerce Storefront Optimization', desc: 'Custom Relational DB indexes' },
    { id: 'securesync', label: 'Legacy API Integration Bridge', desc: 'Bespoke secure WP endpoints' },
  ];

  const handleFeatureToggle = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const generateBlueprint = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setBlueprint(null);

    try {
      const response = await fetch('/api/blueprint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          industry,
          features: selectedFeatures,
          brief: projectBrief || 'A high-perfomance portfolio with custom blocks and fast database caching.',
        }),
      });

      if (!response.ok) {
        throw new Error('Endpoint returned error status');
      }

      const data = await response.json();
      setBlueprint(data.blueprint);
    } catch (err) {
      console.error(err);
      // Fallback robust static mock blueprint if server connection has not completed compiling yet or has missing environment setups
      setBlueprint(`
### 📑 WordPress Engineering Architecture Blueprint

**Target Sector:** ${industry} Web Infrastructure
**Performance Mandate:** Lighthouse Speed target: 98%+ (CLS < 0.1, LCP < 1.0s, FID < 50ms)
**Security Protocol:** SSL + Obfuscated Endpoint REST Hooks + Symmetric Payload Lockers.

---

#### 1. Core Visual Framework & Theme Strategy
- **Standard Stack:** Custom Hand-crafted Theme (Zero visual builder dependencies).
- **Core CSS:** Tailored compiled styles.
- **Admin Layouts:** Bespoke Gutenberg blocks designed for medical intake parameters.

#### 2. Advanced Relational Cache Configurations
- **Database Index Optimization:** Customized index maps for EAV meta tables.
- **Edge Caching Engine:** Dynamic Redis caching maps for REST endpoints.
- **Image Compression Pipeline:** AVIF auto conversion with progressive responsive grids.

#### 3. Deliverable Scope & Schedule Estimation
- **Engineering Timeline:** approximately 16 working days on active staging sandbox.
- **Vetting Checklist:** HIPAA form audit, security load spikes testing (up to 1,000 concurrent shopper logs).
- **Pricing Scope Estimate:** Custom quote starting at $3,500.

---
*Ready to execute? Scroll below to initiate a live consultation audit with our senior developer.*
      `);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="ai-architect"
      className="relative py-24 max-w-7xl mx-auto px-6 md:px-12 z-10 border-t border-white/5"
    >
      {/* Decorative center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-indigo-500/10 blur-[110px] rounded-full pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center mb-16 flex flex-col items-center">
        <span className="font-mono text-xs text-[#00f5ff] uppercase tracking-widest font-bold mb-3 block animate-pulse">
          INTERACTIVE DESIGN BLUEPRINT AGENT
        </span>
        <h2 className={`font-sans font-black tracking-tight text-3xl sm:text-4xl md:text-5xl max-w-2xl mb-4 ${
          theme === 'dark' ? 'text-white' : 'text-slate-900'
        }`}>
          WordPress Project Spec Estimator<span className="text-[#00f5ff]">.</span>
        </h2>
        <p className={`font-sans text-xs sm:text-sm leading-relaxed max-w-lg mb-6 ${
          theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
        }`}>
          Select your target deliverables and parameters below. Our interactive WP AI Planner will compile a comprehensive technical specification sheet in real-time.
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full" />
      </div>

      <div className="grid lg:grid-cols-12 gap-12 items-start mt-6">
        
        {/* Left Grid: Configurator parameters */}
        <form
          onSubmit={generateBlueprint}
          className={`lg:col-span-5 p-6 rounded-3xl border flex flex-col gap-6 text-left ${
            theme === 'dark'
              ? 'bg-[#0f172a]/80 border-white/10 shadow-2xl shadow-[#7c3aed]/5'
              : 'bg-white border-slate-200 shadow-xl'
          }`}
        >
          {/* Industry Selection */}
          <div className="flex flex-col gap-2">
            <label className={`font-sans font-bold text-xs uppercase tracking-wider ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
              What is your Target Sector?
            </label>
            <div className="grid grid-cols-2 gap-2">
              {['Clinic / Health', 'E-commerce Theme', 'Business Portal', 'Plugin / App Core'].map((ind) => (
                <button
                  type="button"
                  key={ind}
                  onClick={() => setIndustry(ind)}
                  className={`py-3 px-4 text-xs font-sans font-black rounded-xl transition-all cursor-pointer border ${
                    industry === ind
                      ? theme === 'dark'
                        ? 'border-[#00f5ff] bg-gradient-to-r from-violet-950/20 to-cyan-950/20 text-[#00f5ff]'
                        : 'border-purple-600 bg-purple-50 text-purple-700'
                      : theme === 'dark'
                      ? 'border-white/5 bg-white/5 text-gray-400 hover:border-white/12'
                      : 'border-slate-200 bg-slate-50 text-slate-500 hover:border-slate-300'
                  }`}
                >
                  {ind}
                </button>
              ))}
            </div>
          </div>

          {/* Features Selection checkboxes */}
          <div className="flex flex-col gap-2">
            <label className={`font-sans font-bold text-xs uppercase tracking-wider ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
              Select Desired Modules & Integrations:
            </label>
            <div className="grid gap-2">
              {featuresList.map((feat) => {
                const checked = selectedFeatures.includes(feat.id);

                return (
                  <button
                    type="button"
                    key={feat.id}
                    onClick={() => handleFeatureToggle(feat.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all flex items-center justify-between group cursor-pointer ${
                      checked
                        ? theme === 'dark'
                          ? 'border-[#00f5ff] bg-cyan-950/20 text-[#00f5ff]'
                          : 'border-purple-600 bg-purple-50/50 text-purple-700'
                        : theme === 'dark'
                        ? 'border-white/5 bg-white/5 text-gray-400 hover:border-white/12'
                        : 'border-slate-200 bg-slate-50 text-slate-500 hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <h4 className="font-sans font-bold text-xs">{feat.label}</h4>
                      <p className="font-sans text-[10px] text-gray-500 group-hover:text-gray-400">{feat.desc}</p>
                    </div>
                    {checked && <Sparkles size={14} className="text-[#00f5ff]" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Explanatory notes */}
          <div className="flex flex-col gap-2">
            <label className={`font-sans font-bold text-xs uppercase tracking-wider ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
              Additional Brief / Custom Needs (Optional)
            </label>
            <textarea
              rows={3}
              value={projectBrief}
              onChange={(e) => setProjectBrief(e.target.value)}
              placeholder="e.g. Need patient records integration with Acuity CRM, medical directory, and under 1s loading parameters..."
              className={`w-full rounded-xl border p-3.5 font-sans text-xs focus:outline-none focus:ring-1 ${
                theme === 'dark'
                  ? 'bg-black/40 border-white/10 active:border-[#00f5ff] focus:border-[#00f5ff] focus:ring-[#00f5ff] text-white'
                  : 'bg-slate-50 border-slate-200 focus:border-purple-700 focus:ring-purple-700 text-slate-900'
              }`}
            />
          </div>

          {/* Trigger generator button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-sans font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:scale-[1.01] active:scale-99 transition-all disabled:opacity-75 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <RefreshCw size={14} className="animate-spin text-[#00f5ff]" />
                Compiling Architecture Blueprint...
              </>
            ) : (
              <>
                <Sparkles size={14} className="text-[#00f5ff]" />
                Generate Visual Spec Blueprint
                <ArrowRight size={14} />
              </>
            )}
          </button>
        </form>

        {/* Right Grid: View Output spec Sheet */}
        <div className="lg:col-span-7 h-full flex flex-col justify-stretch">
          <div
            className={`flex-1 min-h-[450px] p-6 md:p-8 rounded-3xl border text-left flex flex-col relative overflow-hidden backdrop-blur-xl ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-[#0a0f24]/90 to-[#020617]/95 border-white/10 text-white'
                : 'bg-white border-slate-200 text-slate-900 shadow-xl'
            }`}
          >
            {/* Overlay grid lines design element */}
            <div className="absolute inset-0 bg-[#7c3aed]/5 pointer-events-none" />

            <div className="flex items-center justify-between border-b pb-4 mb-6 border-dashed border-white/5 dark:border-black/5 z-10">
              <div className="flex items-center gap-2">
                <FileText size={16} className="text-[#00f5ff]" />
                <h3 className={`font-sans font-black text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  SPECIFICATION_SHEET.XLSX
                </h3>
              </div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#00f5ff] font-bold">
                AUTO_BLUEPRINT_COMPILE
              </span>
            </div>

            {/* Inner blueprint payload */}
            <div className="flex-1 overflow-y-auto max-h-[500px] z-10 space-y-4 font-sans text-xs md:text-sm text-left">
              <AnimatePresence mode="wait">
                {blueprint ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-4"
                  >
                    {blueprint.split('\n\n').map((para, pIdx) => {
                      if (para.startsWith('###')) {
                        return (
                          <h4 key={pIdx} className="font-sans font-black text-sm md:text-base text-[#00f5ff] pt-2">
                            {para.replace('###', '').trim()}
                          </h4>
                        );
                      }
                      if (para.startsWith('**')) {
                        return (
                          <p key={pIdx} className={`font-sans leading-relaxed text-xs p-3.5 rounded-xl border ${
                            theme === 'dark' ? 'bg-white/5 border-white/5 text-gray-300' : 'bg-slate-50 border-slate-100 text-slate-700'
                          }`}>
                            {para.replace(/\*\*/g, '').trim()}
                          </p>
                        );
                      }
                      if (para.startsWith('-')) {
                        return (
                          <ul key={pIdx} className="space-y-2 pl-4 list-disc text-left">
                            {para.split('\n').map((li, lIdx) => (
                              <li key={lIdx} className={theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}>
                                {li.replace('-', '').trim()}
                              </li>
                            ))}
                          </ul>
                        );
                      }
                      if (para.startsWith('####')) {
                        return (
                          <h5 key={pIdx} className={`font-sans font-bold text-xs uppercase tracking-wider text-purple-400 mt-4`}>
                            {para.replace('####', '').trim()}
                          </h5>
                        );
                      }
                      return <p key={pIdx} className={`leading-relaxed text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>{para.trim()}</p>;
                    })}
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-16 text-gray-500"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#00f5ff]/5 border border-[#00f5ff]/20 flex items-center justify-center mb-4">
                      <Sparkles size={20} className="text-[#00f5ff] animate-pulse" />
                    </div>
                    <h4 className="font-sans font-black text-sm text-gray-400 dark:text-white mb-1">
                      Ready for Compilation
                    </h4>
                    <p className="max-w-[280px] leading-relaxed text-[11px]">
                      Configure your industry parameters and deliverables inside the configurator panel, then hit Compile to trigger our AI architect mapping loops.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Icons indicators block */}
            <div className="mt-6 pt-4 border-t border-dashed border-white/5 dark:border-black/5 flex items-center justify-between z-10">
              <div className="flex gap-4 text-gray-500 font-mono text-[9px]">
                <span className="flex items-center gap-1"><Layers size={10} /> LAYER_DEPLOYED</span>
                <span className="flex items-center gap-1"><Shield size={10} /> STACK_SAFE</span>
                <span className="flex items-center gap-1"><Zap size={10} /> EDGE_CACHED</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
