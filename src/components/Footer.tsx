/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Github, Linkedin, ArrowUp, Heart, Layers } from 'lucide-react';

interface FooterProps {
  theme: 'dark' | 'light';
}

export default function Footer({ theme }: FooterProps) {
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = 2026;

  return (
    <footer
      id="main-architect-footer"
      className={`relative py-16 max-w-7xl mx-auto px-6 md:px-12 z-10 border-t ${
        theme === 'dark' ? 'border-white/5 bg-[#050816]/30' : 'border-slate-100 bg-slate-50/50'
      }`}
    >
      <div className="grid md:grid-cols-12 gap-8 items-center">
        {/* Core Copyright credentials */}
        <div className="md:col-span-4 text-left">
          <h2 className={`font-sans font-black text-lg ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            ARCHITECT<span className="text-[#00f5ff]">.</span>WP
          </h2>
          <p className="font-mono text-[9px] uppercase tracking-widest text-[#00f5ff] mb-4">
            Custom WordPress Engineering
          </p>
          <p className={`font-sans text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-slate-400'}`}>
            © {currentYear} Mateo Alvarez. All legal parameters secured. Handcrafted without bloated themes or templates.
          </p>
        </div>

        {/* Middleware Quick tags list */}
        <div className="md:col-span-5 flex flex-wrap gap-2 justify-start md:justify-center">
          {['custom themes', 'react gutenberg', 'hipaa forms', 'db speed optimization', 'sla monitoring'].map((tag) => (
            <span
              key={tag}
              className={`font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 rounded border ${
                theme === 'dark'
                  ? 'bg-white/5 border-white/5 text-gray-400'
                  : 'bg-slate-100 border-slate-100 text-slate-500'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Navigation jump and back, social icons */}
        <div className="md:col-span-3 flex items-center justify-between md:justify-end gap-6">
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className={`p-2.5 rounded-full border transition-all hover:scale-105 active:scale-95 ${
                theme === 'dark' ? 'border-white/10 text-[#00f5ff] hover:bg-white/5' : 'border-slate-200 text-slate-800 hover:bg-slate-100'
              }`}
            >
              <Github size={13} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className={`p-2.5 rounded-full border transition-all hover:scale-105 active:scale-95 ${
                theme === 'dark' ? 'border-white/10 text-[#00f5ff] hover:bg-white/5' : 'border-slate-200 text-slate-800 hover:bg-slate-100'
              }`}
            >
              <Linkedin size={13} />
            </a>
          </div>

          <button
            id="footer-back-to-top"
            onClick={scrollUp}
            className={`p-2.5 rounded-full border transition-all cursor-pointer flex items-center gap-1 font-sans text-[10px] font-bold uppercase tracking-widest ${
              theme === 'dark' ? 'border-white/10 text-white hover:bg-white/5' : 'border-slate-200 text-slate-800 hover:bg-slate-100'
            }`}
          >
            Top <ArrowUp size={12} className="text-[#00f5ff]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
