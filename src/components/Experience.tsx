"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Professional Background"
          title="Practical Industry Experience"
          subtitle="Real-world engineering, network operations, and digital communication experience."
        />

        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}

              className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl relative overflow-hidden"
            >
              {/* Top Accent Strip */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-blue-600 to-sky-500" />

              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center shrink-0 shadow-2xs">
                    <Briefcase className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100/70 text-blue-800 mb-1">
                      {exp.type}
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="text-base font-bold text-blue-600 mt-0.5">
                      {exp.company}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mt-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="sm:text-right">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Responsibilities list */}
              <div className="mt-8">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                  Key Scope & Contributions:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div
                      key={rIdx}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60 flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Applied */}
              <div className="mt-6 pt-6 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Technical Domains Applied:
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.techUsed.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg text-xs font-semibold bg-white border border-slate-200 text-slate-700 shadow-2xs hover:border-blue-300 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Achievements summary */}
              {exp.achievements.length > 0 && (
                <div className="mt-6 p-4 rounded-xl bg-blue-50/60 border border-blue-200/80">
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-900 mb-2">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                    Key Milestones & Outcomes:
                  </div>
                  <ul className="space-y-1.5">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="text-xs text-slate-700 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
