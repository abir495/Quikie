"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Globe, History, Languages, PenTool, ScrollText } from "lucide-react";

const subjects = [
  {
    id: "history-english",
    title: "History of English Language",
    icon: <Languages className="w-8 h-8" />,
    color: "from-violet-500/20 to-purple-500/20",
    description: "Tracing the diachronic evolution of English from PIE to Global English.",
  },
  {
    id: "american-novel",
    title: "American Novel",
    icon: <BookOpen className="w-8 h-8" />,
    color: "from-blue-500/20 to-cyan-500/20",
    description: "Exploring the landscape of American fiction and its cultural impact.",
  },
  {
    id: "american-poetry",
    title: "American Poetry",
    icon: <PenTool className="w-8 h-8" />,
    color: "from-pink-500/20 to-rose-500/20",
    description: "From Whitman to Plath: A journey through the American poetic soul.",
  },
  {
    id: "modern-english-novel",
    title: "Modern English Novel",
    icon: <ScrollText className="w-8 h-8" />,
    color: "from-amber-500/20 to-orange-500/20",
    description: "Analyzing the structural and thematic shifts in 20th-century fiction.",
  },
  {
    id: "society-globalisation",
    title: "Society and Globalisation",
    icon: <Globe className="w-8 h-8" />,
    color: "from-emerald-500/20 to-teal-500/20",
    description: "Understanding the interconnected world and sociopolitical dynamics.",
  },
  {
    id: "contemporary-world-lit",
    title: "Contemporary World Literature",
    icon: <GraduationCap className="w-8 h-8" />,
    color: "from-indigo-500/20 to-blue-500/20",
    description: "Global voices and modern narratives across diverse cultures.",
  },
  {
    id: "new-dimension-history",
    title: "New Dimension in History",
    icon: <History className="w-8 h-8" />,
    color: "from-orange-500/20 to-red-500/20",
    description: "Modern perspectives and re-evaluations of historical events.",
  },
];

const SubjectCard = ({ subject, index, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, rotateX: 5, rotateY: 5 }}
      className="group relative cursor-pointer"
      onClick={(e) => onSelect(subject, e)}
    >
      <div className={`glass-card p-8 rounded-3xl h-full flex flex-col items-start gap-6 overflow-hidden`}>
        <div className={`p-4 rounded-2xl bg-gradient-to-br ${subject.color} group-hover:scale-110 transition-transform duration-500`}>
          {React.cloneElement(subject.icon, { className: "w-8 h-8 text-white" })}
        </div>
        
        <div>
          <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-electric-cyan transition-colors">
            {subject.title}
          </h3>
          <p className="text-zinc-500 text-sm leading-relaxed">
            {subject.description}
          </p>
        </div>

        <button className="mt-auto flex items-center gap-2 text-sm font-bold text-electric-violet group-hover:translate-x-2 transition-transform">
          View Notes <span className="text-lg">→</span>
        </button>

        {/* Subtle Decorative Orb */}
        <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${subject.color} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
      </div>
    </motion.div>
  );
};

const SubjectGrid = ({ onSubjectSelect }) => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Academic Modules</h2>
        <div className="w-20 h-1 bg-electric-violet rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {subjects.map((sub, i) => (
          <SubjectCard key={sub.id} subject={sub} index={i} onSelect={onSubjectSelect} />
        ))}
      </div>
    </section>
  );
};

export default SubjectGrid;
