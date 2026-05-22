/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Calendar, Clock, ArrowRight, X, ArrowUpRight } from 'lucide-react';
import { BLOG_POSTS } from '../data';
import { BlogPost } from '../types';

interface BlogProps {
  theme: 'dark' | 'light';
}

export default function Blog({ theme }: BlogProps) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Quick reading progress calculated statically
  return (
    <section
      id="blog"
      className="relative py-24 max-w-7xl mx-auto px-6 md:px-12 z-10 border-t border-white/5"
    >
      {/* Title */}
      <div className="text-left mb-16 max-w-xl">
        <span className="font-mono text-xs text-[#00f5ff] uppercase tracking-widest font-bold mb-3 block">
          DEVELOPER TECHNICAL CODEX
        </span>
        <h2 className={`font-sans font-black tracking-tight text-3xl sm:text-4xl md:text-5xl mb-4 ${
          theme === 'dark' ? 'text-white' : 'text-slate-900'
        }`}>
          Architectural Insights & Articles.
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full" />
      </div>

      {/* Grid listing */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {BLOG_POSTS.map((post) => (
          <motion.div
            key={post.id}
            id={`blog-card-${post.id}`}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            onClick={() => setSelectedPost(post)}
            className={`rounded-2xl border p-6 flex flex-col justify-between text-left cursor-pointer group ${
              theme === 'dark'
                ? 'border-white/5 bg-[#0f172a]/60 hover:border-white/12'
                : 'border-slate-200 bg-white shadow-lg shadow-black/5 hover:border-slate-300'
            }`}
          >
            <div>
              {/* Category tag row */}
              <div className="flex items-center justify-between mb-4">
                <span className={`font-mono text-[9px] uppercase tracking-wider font-bold px-2.5 py-1 rounded ${
                  theme === 'dark' ? 'bg-[#00f5ff]/10 text-[#00f5ff]' : 'bg-purple-100 text-purple-700'
                }`}>
                  {post.category}
                </span>
                <span className={`font-mono text-[9px] text-gray-500`}>{post.readTime}</span>
              </div>

              {/* Title & summary */}
              <h3 className={`font-sans font-black text-base md:text-lg mb-2 leading-tight group-hover:text-[#00f5ff] transition-colors ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>
                {post.title}
              </h3>
              <p className={`font-sans text-xs md:text-sm leading-relaxed mb-6 ${
                theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
              }`}>
                {post.summary}
              </p>
            </div>

            {/* Read more indicators */}
            <div className="flex justify-between items-center pt-4 border-t border-dashed border-white/5 dark:border-black/5">
              <span className={`font-sans text-xs font-bold text-gray-500`}>{post.date}</span>
              <span className="font-sans text-xs text-[#00f5ff] flex items-center gap-1 font-bold group-hover:translate-x-1 transition-transform">
                Read Article <ArrowRight size={13} />
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Blog Post Detailed Overlay modal popup */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className={`w-full max-w-2xl max-h-[85vh] rounded-3xl border p-6 md:p-8 overflow-y-auto text-left relative ${
                theme === 'dark' ? 'bg-[#0f172a] border-white/10 text-white' : 'bg-white border-slate-200 text-slate-900'
              }`}
            >
              {/* Close Button absolute */}
              <button
                id="blog-modal-close"
                onClick={() => setSelectedPost(null)}
                className={`sticky top-0 float-right -mt-2 -mr-2 p-2.5 rounded-full border cursor-pointer ${
                  theme === 'dark' ? 'border-white/15 bg-black text-white' : 'border-slate-200 bg-slate-50 text-slate-800'
                }`}
              >
                <X size={15} />
              </button>

              {/* Upper headers metadata */}
              <div className="flex gap-4 mb-4">
                <span className="font-mono text-xs font-bold text-[#00f5ff] uppercase tracking-widest bg-cyan-950/20 px-3 py-1 rounded">
                  {selectedPost.category}
                </span>
                <span className={`font-sans text-xs text-gray-500`}>{selectedPost.date}</span>
                <span className={`font-sans text-xs text-gray-500`}>{selectedPost.readTime}</span>
              </div>

              <h3 className={`font-sans font-black text-2xl md:text-3xl mb-6 tracking-tight ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>
                {selectedPost.title}
              </h3>

              {/* Main styled markdown mock renderer body */}
              <div className={`prose max-w-none text-xs md:text-sm leading-relaxed space-y-4 mb-8 ${
                theme === 'dark' ? 'text-gray-300' : 'text-slate-700'
              }`}>
                {selectedPost.content.split('\n\n').map((para, pIdx) => {
                  if (para.startsWith('###')) {
                    return (
                      <h4 key={pIdx} className={`font-sans font-black text-sm md:text-base pt-4 ${
                        theme === 'dark' ? 'text-white' : 'text-slate-900'
                      }`}>
                        {para.replace('###', '').trim()}
                      </h4>
                    );
                  }
                  if (para.startsWith('-')) {
                    return (
                      <ul key={pIdx} className="space-y-1 pl-4 list-disc text-left">
                        {para.split('\n').map((li, lIdx) => (
                          <li key={lIdx}>{li.replace('-', '').trim()}</li>
                        ))}
                      </ul>
                    );
                  }
                  if (para.match(/^\d+\./)) {
                    return (
                      <ol key={pIdx} className="space-y-1 pl-4 list-decimal text-left">
                        {para.split('\n').map((li, lIdx) => (
                          <li key={lIdx}>{li.replace(/^\d+\./, '').trim()}</li>
                        ))}
                      </ol>
                    );
                  }
                  return <p key={pIdx} className="text-left">{para.trim()}</p>;
                })}
              </div>

              {/* Technical tag cloud */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-dashed border-white/5 dark:border-black/5">
                {selectedPost.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-mono text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-slate-500/10 text-gray-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
