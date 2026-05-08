"use client";

import React, { useEffect, useRef } from "react";
import { X, ChevronRight, BookOpen, Clock, Tag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";

const NotesViewer = ({ subject, data, onClose, initialPosition }) => {
  const viewerRef = useRef();
  const headerRef = useRef();

  useEffect(() => {
    if (initialPosition && viewerRef.current) {
      // Scale from card position
      gsap.fromTo(viewerRef.current, 
        {
          x: initialPosition.left,
          y: initialPosition.top,
          width: initialPosition.width,
          height: initialPosition.height,
          borderRadius: "1.5rem",
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          width: "100%",
          height: "100%",
          borderRadius: "0",
          opacity: 1,
          duration: 0.6,
          ease: "expo.inOut",
        }
      );
    }

    // Premium entrance animation for internal content
    gsap.from(".topic-section", {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.4,
    });
  }, [subject, initialPosition]);

  if (!subject) return null;

  return (
    <motion.div
      ref={viewerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-obsidian flex flex-col overflow-hidden"
    >
      {/* Header */}
      <header className="h-20 glass flex items-center justify-between px-8 shrink-0">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-electric-violet/20 rounded-xl flex items-center justify-center text-electric-violet">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-serif font-bold">{subject.title}</h2>
            <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
              <span>Study Guide</span>
              <span className="w-1 h-1 bg-zinc-700 rounded-full" />
              <span>Amity University</span>
            </div>
          </div>
        </div>

        <button 
          onClick={onClose}
          className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar Navigation */}
        <aside className="w-80 border-r border-white/5 hidden lg:flex flex-col p-6 overflow-y-auto">
          <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6">Course Modules</div>
          <div className="flex flex-col gap-2">
            {data?.modules?.map((mod) => (
              <div key={mod.id} className="p-4 rounded-2xl glass-card hover:border-electric-cyan/50 transition-all cursor-pointer group">
                <div className="text-[10px] font-bold text-electric-cyan mb-1">{mod.number}</div>
                <div className="text-sm font-bold group-hover:text-white transition-colors">{mod.title}</div>
              </div>
            ))}
          </div>
        </aside>

        {/* Content Reader */}
        <main className="flex-1 overflow-y-auto p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            {data?.modules?.map((mod) => (
              <div key={mod.id} className="mb-24 topic-section">
                <div className="flex items-center gap-3 mb-8">
                  <span className="px-3 py-1 bg-electric-violet/10 text-electric-violet rounded-full text-[10px] font-bold uppercase tracking-widest border border-electric-violet/20">
                    {mod.number}
                  </span>
                  <div className="h-px flex-1 bg-white/5" />
                </div>
                
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-12 leading-tight">
                  {mod.title}
                </h1>

                <div className="space-y-12">
                  {mod.topics?.map((topic, i) => (
                    <div key={i} className="glass-card p-8 rounded-3xl border-l-4 border-l-electric-cyan">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-bold text-white/90">{topic.title}</h3>
                        <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                          topic.priority === 'high' ? 'bg-red-500/10 text-red-500' : 'bg-zinc-500/10 text-zinc-500'
                        }`}>
                          {topic.priority} Priority
                        </div>
                      </div>
                      
                      <div 
                        className="prose prose-invert prose-zinc max-w-none text-zinc-300 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: topic.content }} 
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Placeholder for empty subjects */}
            {!data?.modules && (
              <div className="text-center py-20">
                <h3 className="text-2xl font-serif italic text-zinc-500 mb-4">The library is being updated...</h3>
                <p className="text-zinc-600">Module content for this subject will be available shortly.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </motion.div>
  );
};

export default NotesViewer;
