"use client";

import React, { useState, useEffect } from "react";
import { Search, Command, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SearchModal from "./SearchModal";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    
    // CMD+K Listener
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "py-4 glass" : "py-8 bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-electric-violet rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-electric-violet/20">
              Q
            </div>
            <span className="text-2xl font-serif font-bold tracking-tighter hidden md:block">QUIKIE</span>
          </div>

          <div className="hidden md:flex items-center gap-12 text-sm font-bold uppercase tracking-widest text-zinc-400">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#" className="hover:text-white transition-colors">Subjects</a>
            <a href="#" className="hover:text-white transition-colors">Library</a>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-3 px-4 py-2 rounded-full glass-card text-zinc-400 hover:text-white transition-all group"
            >
              <Search className="w-4 h-4" />
              <span className="text-xs font-bold hidden sm:block">Search...</span>
              <div className="flex items-center gap-1 bg-white/10 px-1.5 py-0.5 rounded text-[10px]">
                <Command className="w-2.5 h-2.5" />
                <span>K</span>
              </div>
            </button>
            
            <button className="md:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </>
  );
};

export default Navbar;
