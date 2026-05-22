/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Check, ShieldAlert, Sparkles, Zap } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

interface ProjectsProps {
  theme: 'dark' | 'light';
  onContactClick: () => void;
}

export default function Projects({ theme, onContactClick }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const categories = ['All', 'Clinic', 'E-commerce', 'Business', 'Plugins', 'Gutenberg'];

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeCategory === 'All') return true;
    return p.category.toLowerCase() === activeCategory.toLowerCase();
  });

  return (
    <section
      id="projects"
      className="relative py-24 max-w-7xl mx-auto px-6 md:px-12 z-10 border-t border-white/5"
    >
      {/* Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="text-left max-w-xl">
          <span className="font-mono text-xs text-[#00f5ff] uppercase tracking-widest font-bold mb-3 block">
            SELECTED CONTRACT SHORTS
          </span>
          <h2 className={`font-sans font-black tracking-tight text-3xl sm:text-4xl md:text-5xl mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            Interactive Portfolio & Case Works.
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full" />
        </div>

        {/* Filter buttons */}
        <div id="project-filters" className="flex flex-wrap gap-2 self-start py-2">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-btn-${cat.toLowerCase()}`}
              onClick={() => setActiveCategory(cat)}
              className={`px-4.5 py-2 font-sans font-bold text-xs uppercase tracking-wider transition-all rounded-full cursor-pointer border ${
                activeCategory === cat
                  ? theme === 'dark'
                    ? 'bg-[#00f5ff] text-slate-950 border-[#00f5ff] shadow-lg shadow-[#00f5ff]/15 font-extrabold'
                    : 'bg-purple-700 text-white border-purple-700 shadow-md'
                  : theme === 'dark'
                  ? 'border-white/10 bg-[#0f172a]/40 text-gray-300 hover:border-white/20'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid Grid */}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project: Project, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              key={project.id}
              id={`project-card-${project.id}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`relative rounded-3xl overflow-hidden border p-5 flex flex-col justify-between cursor-pointer group ${
                theme === 'dark'
                  ? 'bg-gradient-to-tr from-[#020617] to-[#0f172a] border-white/5 hover:border-white/15'
                  : 'bg-white border-slate-200 shadow-lg shadow-black/5 hover:border-slate-300'
              }`}
            >
              {/* Image Container with Custom Interactive Mask */}
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Backdrop speed optimization metric panel overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end p-4">
                  <div className="flex gap-4 w-full justify-between items-center bg-black/65 backdrop-blur-md p-3.5 rounded-xl border border-white/10">
                    <span className="font-sans font-bold text-xs text-white">Speed Lighthouse Index:</span>
                    <div className="flex items-center gap-3">
                      <div>
                        <span className="font-mono text-[9px] block text-red-400 font-bold uppercase">Before</span>
                        <span className="font-sans font-black text-xs text-red-400 line-through">{project.specs.speedBefore}%</span>
                      </div>
                      <div className="text-gray-400">→</div>
                      <div>
                        <span className="font-mono text-[9px] block text-emerald-400 font-bold uppercase text-right">After</span>
                        <span className="font-sans font-black text-sm text-emerald-400 flex items-center gap-0.5">
                          <Zap size={11} className="text-emerald-400" />
                          {project.specs.speedAfter}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4 font-mono text-[9px] uppercase tracking-widest font-black px-3 py-1.5 rounded-full bg-[#7c3aed] text-white shadow-lg">
                  {project.category} Portal
                </div>
              </div>

              {/* Text Meta Content */}
              <div className="space-y-4 text-left">
                <div className="flex justify-between items-start">
                  <h3 className={`font-sans font-black text-xl tracking-tight group-hover:text-[#00f5ff] transition-colors ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>
                    {project.title}
                  </h3>
                  <span className={`font-mono text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-slate-400'}`}>
                    {project.year}
                  </span>
                </div>

                <p className={`font-sans text-xs sm:text-sm leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-slate-600'
                }`}>
                  {project.description}
                </p>

                {/* Tags stack */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`font-mono text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded ${
                        theme === 'dark'
                          ? 'bg-white/5 text-[#00f5ff]'
                          : 'bg-slate-100 text-purple-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Core specifications expandable box */}
                <div className={`mt-4 p-4 rounded-xl border border-dashed transition-colors ${
                  theme === 'dark' ? 'bg-[#050816] border-white/5 group-hover:border-violet-500/20' : 'bg-slate-50 border-slate-200'
                }`}>
                  <h4 className={`font-sans font-bold text-xs uppercase tracking-wider mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-slate-800'
                  }`}>
                    Key Re-engineering Specs:
                  </h4>
                  <ul className="text-xs space-y-1.5 text-left">
                    {project.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex gap-2 text-left">
                        <span className="text-[#00f5ff] font-bold shrink-0">•</span>
                        <span className={theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action indicators at the bottom */}
              <div className="flex items-center justify-between pt-6 mt-6 border-t border-dashed border-white/5 dark:border-black/5">
                <span className={`font-mono text-[10px] uppercase tracking-widest ${
                  theme === 'dark' ? 'text-gray-500' : 'text-slate-400'
                }`}>
                  Custom block count: <span className="text-white dark:text-[#00f5ff] font-sans font-black">{project.specs.gutenbergBlocks} blocks</span>
                </span>

                <button
                  id={`project-cta-${project.id}`}
                  onClick={onContactClick}
                  className="px-4 py-2 text-xs font-sans font-bold tracking-wider uppercase text-[#00f5ff] hover:text-white hover:bg-[#7c3aed]/10 border border-transparent rounded-lg transition-all flex items-center gap-1 cursor-pointer"
                >
                  Request Architecture <ArrowUpRight size={13} />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
