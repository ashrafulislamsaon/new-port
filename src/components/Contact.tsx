/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Mail, Phone, MapPin, CheckCircle, Sparkles, Send, Github, Linkedin, MessageSquare, Clock } from 'lucide-react';

interface ContactProps {
  theme: 'dark' | 'light';
}

export default function Contact({ theme }: ContactProps) {
  // Contact Form States
  const [formData, setFormData] = useState({ name: '', email: '', company: '', scope: '', prompt: '' });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Custom Appointment Scheduler States
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [scheduleSuccess, setScheduleSuccess] = useState(false);

  const timeslots = ['09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM'];
  
  // Custom dates simulation for the next 7 days (omitting Sundays)
  const availableDates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return d;
  }).filter(d => d.getDay() !== 0); // No Sunday slots

  const handleInputChange = (field: string, val: string) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', company: '', scope: '', prompt: '' });
    }, 4500);
  };

  const handleScheduleSubmit = () => {
    if (!selectedDate || !selectedTime) return;
    setScheduleSuccess(true);
    setTimeout(() => {
      setScheduleSuccess(false);
      setSelectedDate(null);
      setSelectedTime(null);
    }, 4500);
  };

  return (
    <section
      id="contact"
      className="relative py-24 max-w-7xl mx-auto px-6 md:px-12 z-10 border-t border-white/5"
    >
      {/* Glow */}
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Structural Title */}
      <div className="text-left mb-16 max-w-xl">
        <span className="font-mono text-xs text-[#00f5ff] uppercase tracking-widest font-bold mb-3 block">
          COMMENCE COOP ADVISORY
        </span>
        <h2 className={`font-sans font-black tracking-tight text-3xl sm:text-4xl md:text-5xl mb-4 ${
          theme === 'dark' ? 'text-white' : 'text-slate-900'
        }`}>
          Initiate Your Project Block.
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full" />
      </div>

      <div className="grid lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Customized visual Calendly Scheduler */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div
            className={`p-6 rounded-3xl border text-left relative overflow-hidden backdrop-blur-xl ${
              theme === 'dark' ? 'bg-[#0f172a]/80 border-white/15' : 'bg-white border-slate-200 shadow-xl'
            }`}
          >
            <div className="flex items-center gap-2 mb-6">
              <Calendar size={18} className="text-[#00f5ff]" />
              <h3 className={`font-sans font-black text-sm uppercase tracking-wider ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>
                WP Code Consultation Booking
              </h3>
            </div>

            <p className={`font-sans text-xs leading-relaxed mb-6 ${
              theme === 'dark' ? 'text-gray-400' : 'text-slate-500'
            }`}>
              Select a calendar block below. Meets are hosted directly via Google Meet for 30 minutes, structured to audit current speed benchmarks and outline integrations.
            </p>

            <AnimatePresence mode="wait">
              {scheduleSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 flex flex-col items-center text-center justify-center gap-4"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
                    <CheckCircle size={24} className="animate-bounce" />
                  </div>
                  <div>
                    <h4 className={`font-sans font-black text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                      Appointment Registered!
                    </h4>
                    <p className="text-[11px] text-gray-500 mt-1 max-w-[240px]">
                      A confirmation outline containing your Google Meet video links has been expedited to your inbox folder.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  {/* Select Day Grid */}
                  <div>
                    <label className="font-mono text-[9px] uppercase tracking-widest font-black text-gray-500 mb-2 block text-left">
                      1. Pick Staging Day:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {availableDates.map((date, idx) => {
                        const isChosen = selectedDate === idx;

                        return (
                          <button
                            type="button"
                            key={idx}
                            id={`schedule-day-${idx}`}
                            onClick={() => setSelectedDate(idx)}
                            className={`py-2 p-1.5 text-center flex flex-col items-center justify-center rounded-xl cursor-pointer transition-all border ${
                              isChosen
                                ? theme === 'dark'
                                  ? 'border-[#00f5ff] bg-cyan-950/20 text-[#00f5ff]'
                                  : 'border-purple-600 bg-purple-50 text-purple-700'
                                : theme === 'dark'
                                ? 'border-white/5 bg-white/5 text-gray-400 hover:border-white/12'
                                : 'border-slate-200 bg-slate-50 text-slate-500 hover:border-slate-200'
                            }`}
                          >
                            <span className="font-mono text-[9px] uppercase tracking-widest text-gray-500">
                              {date.toLocaleDateString('en-US', { weekday: 'short' })}
                            </span>
                            <span className="font-sans font-black text-xs leading-none mt-1">
                              {date.getDate()}
                            </span>
                            <span className="font-mono text-[8px] mt-0.5 text-gray-500">
                              {date.toLocaleDateString('en-US', { month: 'short' })}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Select hour */}
                  <div>
                    <label className="font-mono text-[9px] uppercase tracking-widest font-black text-gray-500 mb-2 block text-left">
                      2. Select Timezone Hour (EST):
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {timeslots.map((time) => {
                        const isChosen = selectedTime === time;

                        return (
                          <button
                            type="button"
                            key={time}
                            id={`schedule-time-${time.replace(/[:\s]/g, '-')}`}
                            onClick={() => setSelectedTime(time)}
                            className={`px-3 py-2 text-[10px] font-sans font-bold rounded-lg cursor-pointer transition-all border ${
                              isChosen
                                ? theme === 'dark'
                                  ? 'border-[#00f5ff] bg-cyan-950/20 text-[#00f5ff]'
                                  : 'border-purple-600 bg-purple-50 text-purple-700 font-extrabold'
                                : theme === 'dark'
                                ? 'border-white/5 bg-white/5 text-gray-400 hover:border-white/12'
                                : 'border-slate-200 bg-slate-50 text-slate-500'
                            }`}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Submit Book CTA */}
                  <button
                    type="button"
                    onClick={handleScheduleSubmit}
                    disabled={selectedDate === null || selectedTime === null}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-sans font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Confirm Calendar Slot
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex justify-between p-4 px-6 rounded-2xl bg-white/5 border border-white/5 text-left items-center">
            <div className="flex items-center gap-2.5">
              <Mail size={15} className="text-[#00f5ff]" />
              <div>
                <p className="font-mono text-[8px] uppercase text-gray-400">Direct Email</p>
                <a href="mailto:m.alvarez@wp-architect.com" className={`font-sans font-black text-xs text-white hover:text-[#00f5ff]`}>
                  m.alvarez@wp-architect.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: High-End Contact form with active floating label indicators */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleFormSubmit}
            className={`p-6 md:p-8 rounded-3xl border text-left flex flex-col gap-6 relative overflow-hidden backdrop-blur-xl ${
              theme === 'dark' ? 'bg-[#0f172a]/80 border-white/15' : 'bg-white border-slate-200 shadow-xl'
            }`}
          >
            <div className="flex items-center justify-between border-b pb-4 border-dashed border-white/5 dark:border-black/5">
              <div className="flex items-center gap-2">
                <MessageSquare size={16} className="text-[#00f5ff]" />
                <h3 className={`font-sans font-black text-sm uppercase tracking-wider ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  Secure Transmission Channel
                </h3>
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            <AnimatePresence mode="wait">
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-16 flex flex-col items-center justify-center text-center gap-4"
                >
                  <div className="w-14 h-14 rounded-full bg-[#00f5ff]/10 border border-[#00f5ff]/35 text-[#00f5ff] flex items-center justify-center">
                    <Send size={20} className="animate-pulse" />
                  </div>
                  <div>
                    <h4 className={`font-sans font-black text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                      Proposal Safely Dispatched!
                    </h4>
                    <p className={`text-[11px] max-w-[280px] mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>
                      Your structural briefing coordinates have successfully compiled. We will map response feedback within 4 business hours.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  {/* Floating Row 1Name / Email */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full rounded-xl border p-4 pt-6 pb-2 font-sans text-xs focus:outline-none focus:ring-1 ${
                          theme === 'dark'
                            ? 'bg-black/30 border-white/10 text-white focus:border-[#00f5ff] focus:ring-[#00f5ff]'
                            : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-purple-600 focus:ring-purple-600'
                        }`}
                      />
                      <label
                        className={`absolute left-4 top-4 font-sans text-xs text-gray-500 pointer-events-none transition-all ${
                          formData.name || focusedField === 'name' ? 'scale-75 -translate-y-2.5 origin-left' : ''
                        }`}
                      >
                        Your Name *
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full rounded-xl border p-4 pt-6 pb-2 font-sans text-xs focus:outline-none focus:ring-1 ${
                          theme === 'dark'
                            ? 'bg-black/30 border-white/10 text-white focus:border-[#00f5ff] focus:ring-[#00f5ff]'
                            : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-purple-600 focus:ring-purple-600'
                        }`}
                      />
                      <label
                        className={`absolute left-4 top-4 font-sans text-xs text-gray-500 pointer-events-none transition-all ${
                          formData.email || focusedField === 'email' ? 'scale-75 -translate-y-2.5 origin-left' : ''
                        }`}
                      >
                        Email Address *
                      </label>
                    </div>
                  </div>

                  {/* Row 2 Company / Scope */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full rounded-xl border p-4 pt-6 pb-2 font-sans text-xs focus:outline-none focus:ring-1 ${
                          theme === 'dark'
                            ? 'bg-black/30 border-white/10 text-white focus:border-[#00f5ff] focus:ring-[#00f5ff]'
                            : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-purple-600 focus:ring-purple-600'
                        }`}
                      />
                      <label
                        className={`absolute left-4 top-4 font-sans text-xs text-gray-500 pointer-events-none transition-all ${
                          formData.company || focusedField === 'company' ? 'scale-75 -translate-y-2.5 origin-left' : ''
                        }`}
                      >
                        Company / Clinic Name
                      </label>
                    </div>

                    <div className="relative">
                      <select
                        value={formData.scope}
                        onChange={(e) => handleInputChange('scope', e.target.value)}
                        onFocus={() => setFocusedField('scope')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full rounded-xl border p-4 pt-6 pb-2 font-sans text-xs focus:outline-none focus:ring-1 ${
                          theme === 'dark'
                            ? 'bg-[#0f172a] border-white/10 text-white focus:border-[#00f5ff] focus:ring-[#00f5ff]'
                            : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-purple-600 focus:ring-purple-600'
                        }`}
                      >
                        <option value="">-- Choose Segment --</option>
                        <option value="clinic">Clinic Portal / Health Web</option>
                        <option value="ecommerce">WooCommerce Optimization</option>
                        <option value="blocks">React Gutenberg Blocks Suite</option>
                        <option value="plugin">Bespoke Core Plugin Work</option>
                        <option value="rebuild">Enterprise Performance Audit</option>
                      </select>
                      <label
                        className={`absolute left-4 top-2 font-sans text-[10px] text-gray-400 pointer-events-none transition-all scale-75 origin-left`}
                      >
                        Project Scope Target
                      </label>
                    </div>
                  </div>

                  {/* Requirements Brief Textarea */}
                  <div className="relative">
                    <textarea
                      rows={4}
                      required
                      value={formData.prompt}
                      onChange={(e) => handleInputChange('prompt', e.target.value)}
                      onFocus={() => setFocusedField('prompt')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full rounded-xl border p-4 pt-6 pb-2 font-sans text-xs focus:outline-none focus:ring-1 ${
                        theme === 'dark'
                          ? 'bg-black/30 border-white/10 text-white focus:border-[#00f5ff] focus:ring-[#00f5ff]'
                          : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-purple-600 focus:ring-purple-600'
                      }`}
                    />
                    <label
                      className={`absolute left-4 top-4 font-sans text-xs text-gray-500 pointer-events-none transition-all ${
                        formData.prompt || focusedField === 'prompt' ? 'scale-75 -translate-y-2.5 origin-left' : ''
                      }`}
                    >
                      Project Specifications Brief & Speed Mandate *
                    </label>
                  </div>

                  {/* Submit Proposals Button */}
                  <button
                    type="submit"
                    className="w-full py-4.5 bg-gradient-to-r from-violet-600 to-cyan-500 text-white rounded-xl font-sans font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer transition-all border border-violet-400/20 hover:scale-[1.01] active:scale-99 shadow-lg"
                  >
                    <Send size={13} className="text-[#00f5ff]" />
                    Expedite Request Coordinates
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Social quick targets footer */}
            <div className="flex justify-between items-center pt-6 mt-6 border-t border-dashed border-white/5 dark:border-black/5">
              <span className={`font-mono text-[9px] uppercase tracking-widest ${theme === 'dark' ? 'text-gray-500' : 'text-slate-400'}`}>
                Connect On Tech Ecosystems
              </span>

              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className={`p-2.5 rounded-full border transition-all ${
                    theme === 'dark' ? 'border-white/5 bg-white/5 text-[#00f5ff] hover:bg-white/10' : 'border-slate-200 text-slate-800'
                  }`}
                >
                  <Github size={14} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className={`p-2.5 rounded-full border transition-all ${
                    theme === 'dark' ? 'border-white/5 bg-white/5 text-[#00f5ff] hover:bg-white/10' : 'border-slate-200 text-slate-800'
                  }`}
                >
                  <Linkedin size={14} />
                </a>
              </div>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
