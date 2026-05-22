/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import ThreeBackground from './components/ThreeBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import CaseStudies from './components/CaseStudies';
import Process from './components/Process';
import Blog from './components/Blog';
import AIBlueprint from './components/AIBlueprint';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Sync theme changes with system document element body classes
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      document.body.style.backgroundColor = '#050816';
    } else {
      root.classList.remove('dark');
      document.body.style.backgroundColor = '#f8fafc';
    }
  }, [theme]);

  // Command scroll hooks for navigation triggers
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      id="main-scrolling-container"
      className={`min-h-screen relative font-sans transition-colors duration-500 overflow-x-hidden ${
        theme === 'dark' ? 'bg-[#050816] text-white' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Dynamic 60fps Interactive Canvas Renderer (only active on dark mode to fit the neon grid design) */}
      {theme === 'dark' && <ThreeBackground />}

      {/* Decorative top-right light mode glow orb */}
      {theme === 'light' && (
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-sky-100/50 rounded-full blur-3-xl pointer-events-none -z-10" />
      )}

      {/* Glassmorphism Navigation Hub */}
      <Navbar
        theme={theme}
        setTheme={setTheme}
        onEstimatorClick={() => scrollToId('ai-architect')}
      />

      {/* Multi-layered Hero Section */}
      <Hero
        theme={theme}
        onLearnMoreClick={() => scrollToId('projects')}
        onContactClick={() => scrollToId('contact')}
        onEstimatorClick={() => scrollToId('ai-architect')}
      />

      {/* Modular Bio Section */}
      <About theme={theme} />

      {/* Interactive Matrix of Services */}
      <Services theme={theme} onContactClick={() => scrollToId('contact')} />

      {/* Interactive Creative Portfolio Filtering Grid */}
      <Projects theme={theme} onContactClick={() => scrollToId('contact')} />

      {/* Comparative Storytelling Case works */}
      <CaseStudies theme={theme} />

      {/* Stellar AI Blueprint Architect Widget */}
      <AIBlueprint theme={theme} />

      {/* Structured Roadmap Timeline */}
      <Process theme={theme} />

      {/* Mini CMS Blog Article Reader */}
      <Blog theme={theme} />

      {/* Client reviews Carousel */}
      <Testimonials theme={theme} />

      {/* Conversion Contact planner and Forms elements */}
      <Contact theme={theme} />

      {/* Minimal display Footer */}
      <Footer theme={theme} />
    </div>
  );
}
