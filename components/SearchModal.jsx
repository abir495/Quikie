"use client";

import React from "react";
import { Search, X, Command } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SearchModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-obsidian/80 backdrop-blur-xl flex items-start justify-center pt-[20vh] px-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="w-full max-w-2xl glass-card p-6 rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-4 mb-6">
              <Search className="w-6 h-6 text-electric-cyan" />
              <input 
                autoFocus
                type="text" 
                placeholder="What are you looking for?" 
                className="w-full bg-transparent border-none outline-none text-xl font-serif text-white placeholder:text-zinc-600"
              />
              <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors">
                <X className="w-6 h-6 text-zinc-400" />
              </button>
            </div>
            
            <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span>Quick Results</span>
              <div className="h-px flex-1 bg-white/5" />
            </div>

            <div className="flex flex-col gap-2 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
              {["History of English Language", "American Novel", "American Poetry", "Modern English Novel"].map((item) => (
                <div key={item} className="p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all cursor-pointer flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-electric-violet/10 flex items-center justify-center text-electric-violet group-hover:bg-electric-violet group-hover:text-white transition-colors">
                      <Command className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-zinc-300 group-hover:text-white transition-colors">{item}</span>
                  </div>
                  <span className="text-[10px] font-bold text-zinc-600 group-hover:text-electric-cyan uppercase tracking-widest">Module</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-zinc-600 font-bold uppercase tracking-widest">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1"><span className="bg-white/10 px-1 rounded">ESC</span> to close</span>
                <span className="flex items-center gap-1"><span className="bg-white/10 px-1 rounded">↵</span> to select</span>
              </div>
              <span>QUIKIE Search v1.0</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
