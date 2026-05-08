"use client";

import React, { useState } from "react";
import Hero from "@/components/Hero";
import SubjectGrid from "@/components/SubjectGrid";
import NotesViewer from "@/components/NotesViewer";
import { historyEnglishData } from "@/constants/history-english";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [activeSubject, setActiveSubject] = useState(null);
  const [cardPosition, setCardPosition] = useState(null);

  const handleSubjectClick = (subject, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCardPosition(rect);
    setActiveSubject(subject);
  };

  return (
    <main className="min-h-screen">
      <Hero />
      <div className="relative z-10 bg-obsidian">
        <SubjectGrid onSubjectSelect={handleSubjectClick} />
        
        <AnimatePresence>
          {activeSubject && (
            <NotesViewer 
              subject={activeSubject}
              data={activeSubject.id === "history-english" ? historyEnglishData : null}
              onClose={() => setActiveSubject(null)}
              initialPosition={cardPosition}
            />
          )}
        </AnimatePresence>
        
        {/* Footer */}
        <footer className="py-12 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-electric-cyan rounded-lg flex items-center justify-center font-bold text-obsidian">Q</div>
                <span className="text-xl font-serif font-bold">QUIKIE</span>
              </div>
              <p className="text-zinc-500 text-sm">Amity University Kolkata Edition</p>
            </div>
            
            <div className="flex items-center gap-8 text-sm font-bold text-zinc-400">
              <a href="#" className="hover:text-electric-violet transition-colors">Privacy</a>
              <a href="#" className="hover:text-electric-violet transition-colors">Terms</a>
              <a href="#" className="hover:text-electric-violet transition-colors">Contact</a>
            </div>

            <p className="text-zinc-600 text-xs">© 2026 QUIKIE Design. Built for excellence.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
