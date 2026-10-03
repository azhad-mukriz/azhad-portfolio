"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  Award, 
  BookOpen, 
  CheckCircle2 
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { educationData } from '../data/portfolioData';


export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Education & Credentials"
          title="Academic Foundation & Scholastic Honors"
          subtitle="A track record of continuous academic distinction at Universiti Tun Hussein Onn Malaysia."
        />

        <div className="relative border-l-2 border-blue-100 ml-4 md:ml-32 space-y-12 pl-6 md:pl-10">
          
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-blue-600 shadow-md group-hover:scale-125 transition-transform" />

              {/* Date Tag for Desktop */}
              <div className="md:absolute md:-left-44 md:top-1.5 md:w-32 md:text-right hidden md:block">
                <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/60">
                  {item.period.split(' ')[0]}
                </span>
              </div>

              {/* Main Education Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200/90 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
                
                {/* Mobile Period Badge */}
                <div className="md:hidden inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md mb-3 border border-blue-200/60">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.period}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {item.degree}
                      </h3>
                      {item.status === 'In Progress' && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200 shrink-0">
                          Current
                        </span>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-sm text-slate-600 font-medium">
                      <span className="text-blue-700 font-semibold">{item.institution}</span>
                      <span className="text-slate-300">•</span>
                      <span className="flex items-center gap-1 text-slate-500">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {item.campus}
                      </span>
                    </div>
                  </div>

                  {/* CGPA Badge */}
                  <div className="shrink-0 self-start">
                    <div className="px-4 py-2 rounded-xl bg-blue-50/90 border border-blue-200 text-center">
                      <div className="text-[11px] uppercase tracking-wider font-bold text-blue-600">
                        {item.gpaScale === 'SPM' ? 'Result' : 'CGPA'}
                      </div>
                      <div className="text-xl sm:text-2xl font-black text-slate-900">
                        {item.cgpa}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Honors / Dean's List Details */}
                <div className="mt-6 pt-5 border-t border-slate-100 space-y-3">
                  
                  {item.deansList.length > 0 && (
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <span className="text-xs font-bold text-slate-900 uppercase tracking-wide flex items-center gap-1.5 shrink-0">
                        <Award className="w-4 h-4 text-blue-600" />
                        Dean&apos;s List:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {item.deansList.map((sem, sIdx) => (
                          <span
                            key={sIdx}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200"
                          >
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            {sem}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.muet && (
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-bold text-slate-700">MUET Result:</span>
                      <span className="font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                        {item.muet}
                      </span>
                    </div>
                  )}

                  {item.honors && (
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-bold text-slate-700">Recognition:</span>
                      <span className="font-semibold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                        {item.honors}
                      </span>
                    </div>
                  )}

                  {/* Course / Curriculum Topics */}
                  {item.courses.length > 0 && (
                    <div className="pt-2">
                      <div className="text-xs font-medium text-slate-500 mb-2 flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                        Key Study Areas & Modules:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {item.courses.map((course, cIdx) => (
                          <span
                            key={cIdx}
                            className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200/60"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
