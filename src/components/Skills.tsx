"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Search, 
  Code2, 
  Terminal, 
  Database, 
  BarChart, 
  Cpu, 
  Palette, 
  Bot, 
  Briefcase 
} from 'lucide-react';

import { SectionHeading } from './SectionHeading';
import { skillGroups } from '../data/portfolioData';
import { TechIcon } from './TechIcon';

const categoryIcons: Record<string, React.ReactNode> = {
  "Programming Languages": <Code2 className="w-4 h-4 text-blue-600" />,
  "Web & Frameworks": <Terminal className="w-4 h-4 text-sky-600" />,
  "Database & Storage": <Database className="w-4 h-4 text-indigo-600" />,
  "Data & BI Analytics": <BarChart className="w-4 h-4 text-amber-600" />,
  "AI & Machine Learning": <Cpu className="w-4 h-4 text-teal-600" />,
  "UI/UX & Graphic Design": <Palette className="w-4 h-4 text-pink-600" />,
  "Generative AI & LLM Tools": <Bot className="w-4 h-4 text-purple-600" />,
  "Productivity & Collaboration": <Briefcase className="w-4 h-4 text-slate-600" />
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', ...skillGroups.map(g => g.category)];

  const filteredGroups = skillGroups.filter(group => {
    const matchesCategory = selectedCategory === 'All' || group.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      group.skills.some(s => s.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
      group.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Technical Competencies"
          title="Skills, Tooling & Technologies"
          subtitle="A comprehensive toolkit spanning full-stack software development, database engineering, applied AI, and user interface design."
        />

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 p-1 bg-slate-100/80 rounded-2xl max-w-3xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-white text-blue-700 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat === 'All' ? 'All Skills' : cat.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. Flutter, AI)..."
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-hidden focus:border-blue-500 focus:bg-white text-slate-800 transition-colors"
            />
          </div>

        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGroups.map((group, gIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: gIdx * 0.05 }}
              className="glass-card rounded-2xl p-5 sm:p-6 border border-slate-200/90 hover:border-blue-300 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-slate-100/90 text-slate-700">
                      {categoryIcons[group.category] || <Sparkles className="w-4 h-4 text-blue-600" />}
                    </div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {group.category}
                    </h3>
                  </div>

                  <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    group.level === 'Advanced'
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : 'bg-slate-100 text-slate-700 border border-slate-200'
                  }`}>
                    {group.level}
                  </span>
                </div>

                <p className="text-[11px] text-slate-500 mb-4 leading-relaxed line-clamp-2">
                  {group.description}
                </p>

                {/* Skill Badges with Icons */}
                <div className="space-y-2">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2 rounded-xl bg-white border border-slate-200/70 hover:border-blue-200 hover:bg-blue-50/30 transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded-md bg-slate-50 flex items-center justify-center text-slate-700 group-hover:scale-110 transition-transform">
                          <TechIcon name={skill.name} className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-semibold text-slate-800">
                          {skill.name}
                        </span>
                      </div>

                      <span className="text-[10px] font-medium text-slate-400 group-hover:text-blue-600 transition-colors">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Level Indicator Bar */}
              <div className="mt-5 pt-3 border-t border-slate-100">
                <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium mb-1">
                  <span>Proficiency</span>
                  <span className="font-bold text-slate-800">{group.level === 'Advanced' ? '90%' : '75%'}</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      group.level === 'Advanced'
                        ? 'bg-linear-to-r from-blue-600 to-sky-400 w-[90%]'
                        : 'bg-linear-to-r from-blue-400 to-sky-300 w-[75%]'
                    }`}
                  />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
