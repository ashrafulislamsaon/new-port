/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onEstimatorClick: () => void;
  theme: 'dark' | 'light';
  setTheme: (t: 'dark' | 'light') => void;
}

export default function Navbar({ onEstimatorClick, theme, setTheme }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'Case Studies', id: 'case-studies' },
    { label: 'Blog', id: 'blog' },
    { label: 'Process', id: 'process' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 40;
      setScrolled(isScrolled);

      // Track active section based on scroll offset
      const offsets = navItems.map((item) => {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return { id: item.id, top: rect.top + window.scrollY - 180 };
        }
        return { id: item.id, top: 0 };
      });

      const currentScroll = window.scrollY;
      let active = 'home';

      for (let i = 0; i < offsets.length; i++) {
        if (currentScroll >= offsets[i].top) {
          active = offsets[i].id;
        }
      }
      setActiveSection(active);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        id="main-navbar-header"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? theme === 'dark'
              ? 'bg-[#050816]/75 backdrop-blur-md border-b border-white/5 py-4 shadow-2xl shadow-black/10'
              : 'bg-white/80 backdrop-blur-md border-b border-black/5 py-4 shadow-xl shadow-black/5'
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <button
            id="nav-logo"
            onClick={() => scrollToSection('home')}
            className={`flex items-center gap-2 cursor-pointer text-left focus:outline-none`}
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f5ff] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#7c3aed]"></span>
            </span>
            <div>
              <h1 className={`font-sans font-bold tracking-tight text-lg ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                ARCHITECT<span className="text-[#00f5ff]">.</span>WP
              </h1>
              <p className={`font-mono text-[9px] uppercase tracking-widest ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>
                Custom Engineering
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav id="desktop-nav-links" className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 font-sans text-sm font-medium transition-colors cursor-pointer rounded-full focus:outline-none ${
                  activeSection === item.id
                    ? theme === 'dark'
                      ? 'text-white'
                      : 'text-slate-900 bg-slate-100/10'
                    : theme === 'dark'
                    ? 'text-gray-400 hover:text-white'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeGlow"
                    className="absolute inset-0 bg-radial from-violet-500/10 to-violet-500/0 dark:from-sky-500/20 dark:to-transparent rounded-full border border-violet-500/20 dark:border-sky-400/20"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            ))}
          </nav>

          <div id="nav-actions-wrapper" className="hidden lg:flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              id="theme-switcher-btn"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`p-2.5 rounded-full border transition-all cursor-pointer hover:scale-105 active:scale-95 ${
                theme === 'dark'
                  ? 'border-white/10 hover:bg-white/5 text-[#00f5ff] glow-sm'
                  : 'border-black/5 hover:bg-slate-100 text-purple-600'
              }`}
              title={theme === 'dark' ? 'Enable Pristine Light Mode' : 'Enable Futuristic Dark Mode'}
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* AI Architect Estimator CTA */}
            <button
              id="ai-planner-cta-btn"
              onClick={onEstimatorClick}
              className={`relative group px-5 py-2.5 rounded-full font-sans font-medium text-xs tracking-wider uppercase transition-all overflow-hidden flex items-center gap-2 cursor-pointer shadow-lg hover:-translate-y-0.5 active:translate-y-0 ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-violet-500/10 border border-violet-400/30'
                  : 'bg-gradient-to-r from-purple-700 to-cyan-600 text-white shadow-purple-600/10'
              }`}
            >
              <span className="absolute inset-0 bg-linear-to-r from-cyan-400 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              <Sparkles size={13} className="animate-pulse text-[#00f5ff]" />
              AI WP Architect
            </button>
          </div>

          {/* Mobile Right Actions */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`p-2 rounded-full border ${
                theme === 'dark' ? 'border-white/10 text-[#00f5ff]' : 'border-black/10 text-purple-600'
              }`}
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            <button
              id="mobile-drawer-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg border transition-all ${
                theme === 'dark'
                  ? 'border-white/10 bg-[#0f172a]/80 text-white hover:bg-[#1e293b]'
                  : 'border-black/10 bg-slate-50 text-slate-800 hover:bg-slate-100'
              }`}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed inset-x-0 top-[76px] z-30 p-6 flex flex-col gap-4 shadow-2xl border-b ${
              theme === 'dark'
                ? 'bg-[#0f172a]/95 backdrop-blur-xl border-white/10 text-white'
                : 'bg-white/95 backdrop-blur-xl border-black/10 text-slate-900'
            }`}
          >
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-link-${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-3 text-left font-sans text-sm font-medium rounded-xl transition-all ${
                    activeSection === item.id
                      ? theme === 'dark'
                        ? 'bg-white/10 text-[#00f5ff] border-l-2 border-[#00f5ff]'
                        : 'bg-slate-100 text-purple-700 border-l-2 border-purple-700'
                      : 'hover:bg-slate-500/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <hr className={theme === 'dark' ? 'border-white/5 my-2' : 'border-black/5 my-2'} />

            <button
              id="mobile-estimator-trigger"
              onClick={() => {
                setMobileMenuOpen(false);
                onEstimatorClick();
              }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 font-sans font-bold text-xs uppercase tracking-widest text-center shadow-lg text-white flex items-center justify-center gap-2"
            >
              <Sparkles size={14} className="text-[#00f5ff]" />
              AI WP Architect Agent
              <ArrowUpRight size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
