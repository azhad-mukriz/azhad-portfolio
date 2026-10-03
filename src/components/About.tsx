"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  GraduationCap, 
  Code, 
  Sparkles, 
  Languages, 
  CheckCircle2, 
  FileText,
  Heart,
  Cpu
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { languagesData } from '../data/portfolioData';


interface AboutProps {
  onOpenResume?: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-slate-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="About Me"
          title="Bridging Engineering Rigor with Human-Centered Design"
          subtitle="A passionate IT undergraduate dedicated to building intelligent, accessible software and impactful community solutions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-2xl p-6 sm:p-8 space-y-4 text-slate-700 leading-relaxed text-base"
            >
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-600" />
                Who I Am & What Drives Me
              </h3>
              
              <p>
                I am an undergraduate student pursuing my <strong className="text-slate-900 font-semibold">Bachelor of Information Technology (Honours)</strong> at <strong className="text-blue-700 font-semibold">Universiti Tun Hussein Onn Malaysia (UTHM)</strong>. My academic journey is backed by the prestigious <strong className="text-slate-900 font-semibold">JPA Sponsorship Programme (PIDN)</strong>, awarded by the Public Service Department of Malaysia to top-performing students nationwide.
              </p>

              <p>
                My passion lies at the intersection of <strong className="text-slate-900 font-semibold">robust backend systems</strong>, <strong className="text-slate-900 font-semibold">intuitive UI/UX interfaces</strong>, and <strong className="text-blue-700 font-semibold">applied Artificial Intelligence</strong>. I believe software should not merely function; it should be intuitive, performant, and directly solve human problems.
              </p>

              <p>
                From collaborating directly with the <strong className="text-slate-900 font-semibold">Johor State Government (SUK Johor)</strong> to automate flood disaster relief aid through AI document extraction, to authoring and deploying the <strong className="text-slate-900 font-semibold">i-Qada’</strong> prayer tracking application on the <strong className="text-emerald-700 font-semibold">Google Play Store</strong>, I consistently apply modern technologies to real-world challenges.
              </p>

              <div className="pt-4 border-t border-slate-200/80 flex flex-wrap gap-4 items-center">
                {onOpenResume && (
                  <button
                    onClick={onOpenResume}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm hover:shadow-md hover:shadow-blue-500/20 active:scale-98 transition-all cursor-pointer"
                  >
                    <FileText className="w-4 h-4" />
                    View Complete Credentials
                  </button>
                )}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  <Heart className="w-4 h-4 text-rose-500" />
                  Discuss Collaboration
                </a>
              </div>
            </motion.div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-blue-300 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                  <Code className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">Full-Stack Craftsmanship</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Skilled across Laravel, Flask, Flutter, Tailwind, and MySQL to deliver complete systems from prototype to production.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-blue-300 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-3">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">Applied AI & Vision</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Integrating machine learning, document OCR, and LLM prompt engineering to streamline workflows and reduce processing bottlenecks.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Highlights & Languages */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Academic Snapshot Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card rounded-2xl p-6 sm:p-7 border border-blue-100"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4" />
                  Academic Excellence
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
                  UTHM
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-900">JPA PIDN National Scholar</h5>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Federal scholarship granted for academic distinction and leadership (2025–2027).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-900">3.78 Cumulative GPA (Degree)</h5>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Consecutive Dean&apos;s List recipient in Semesters 2 (3.94), 3 (3.76) & 4 (3.68).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-900">3.56 Cumulative GPA (Diploma)</h5>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Graduated with CeDS Dean&apos;s List Honors in Semesters 3 (3.57) & 4 (3.81).
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Language Proficiency Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-card rounded-2xl p-6 sm:p-7"
            >
              <div className="flex items-center gap-2 mb-4 text-xs font-bold text-slate-900 uppercase tracking-wider">
                <Languages className="w-4 h-4 text-blue-600" />
                Language Competency
              </div>

              <div className="space-y-4">
                {languagesData.map((lang) => (
                  <div key={lang.language} className="space-y-1.5">
                    <div className="flex justify-between items-center text-sm font-medium">
                      <span className="text-slate-800 font-bold">{lang.language}</span>
                      <span className="text-xs font-semibold text-blue-600">
                        {lang.score ? `${lang.proficiency} (${lang.score})` : lang.proficiency}
                      </span>
                    </div>
                    {/* Visual Progress Bar */}
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.levelPercentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full bg-linear-to-r from-blue-600 to-sky-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-slate-500 mt-4 leading-relaxed">
                Proficient in both technical report documentation and bilingual stakeholder communication.
              </p>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
