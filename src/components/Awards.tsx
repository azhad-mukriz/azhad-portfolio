"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  Star 
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { awardsData } from '../data/portfolioData';


export const Awards: React.FC = () => {
  return (
    <section id="awards" className="py-20 md:py-28 bg-blue-50/40 relative overflow-hidden">
      {/* Background soft glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Scholarships & Honors"
          title="Distinguished Awards & Recognitions"
          subtitle="Honors acknowledging academic excellence, leadership caliber, and sustained top scholastic standing."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {awardsData.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`rounded-2xl p-6 sm:p-7 bg-white relative flex flex-col justify-between transition-all duration-300 ${
                award.id === 'jpa-pidn'
                  ? 'border-2 border-blue-500 shadow-xl shadow-blue-500/10 hover:border-blue-600 hover:-translate-y-1'
                  : 'border-2 border-blue-200/90 shadow-md hover:border-blue-400 hover:shadow-xl hover:-translate-y-1'
              }`}
            >
              {/* Highlight Ribbon for JPA */}
              {award.id === 'jpa-pidn' && (
                <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full text-[11px] font-black tracking-wider uppercase bg-linear-to-r from-blue-600 to-sky-500 text-white shadow-sm flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  National Scholar
                </div>
              )}

              <div>
                {/* Header Icon & Year */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    award.id === 'jpa-pidn' 
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30' 
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {award.id === 'jpa-pidn' ? (
                      <ShieldCheck className="w-6 h-6" />
                    ) : (
                      <Trophy className="w-6 h-6" />
                    )}
                  </div>
                  <span className="text-xs font-bold text-slate-500 flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-md">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {award.year}
                  </span>
                </div>

                {/* Badge text */}
                <div className="inline-block text-[11px] font-bold text-blue-700 uppercase tracking-wider mb-2">
                  {award.badgeText}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
                  {award.title}
                </h3>

                {/* Issuer */}
                <div className="text-xs font-semibold text-blue-600 mt-1">
                  {award.issuer}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                  {award.description}
                </p>
              </div>

              {/* GPA Breakdown if present */}
              {award.gpaBreakdown && award.gpaBreakdown.length > 0 && (
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Consecutive Performance:
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {award.gpaBreakdown.map((item, gIdx) => (
                      <div key={gIdx} className="p-2 rounded-lg bg-blue-50/70 border border-blue-100 text-center">
                        <div className="text-[10px] text-slate-500 font-medium">{item.term}</div>
                        <div className="text-sm font-bold text-blue-700">{item.gpa}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Feature highlight bullet */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Verified Academic Distinction</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
