"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Mail, 
  FileText, 
  Sparkles, 
  GraduationCap, 
  Award, 
  ExternalLink,
  MapPin,
  CheckCircle2,
  Code
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { LinkedInIcon } from './TechIcon';



interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Decorative Gradient Glows */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-linear-to-tr from-blue-400/20 via-sky-300/20 to-transparent blur-3xl pointer-events-none rounded-full -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="absolute top-10 right-10 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 left-10 w-80 h-80 bg-sky-100/50 rounded-full blur-2xl pointer-events-none -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200/90 shadow-2xs mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for Opportunities & Internships</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl xl:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]"
            >
              Hello, I&apos;m <br />
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            {/* Degree & Institution Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 flex items-center gap-2.5 text-slate-700 font-medium text-base sm:text-lg"
            >
              <GraduationCap className="w-5 h-5 text-blue-600 shrink-0" />
              <span>{personalInfo.tagline}</span>
            </motion.div>

            {/* Core Passions: Animated dynamic pills */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 flex flex-wrap gap-2 sm:gap-2.5"
            >
              {personalInfo.passions.map((passion, idx) => (
                <motion.div
                  key={passion}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.35 + idx * 0.08 }}
                  whileHover={{ y: -2, scale: 1.03 }}
                  className="px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold tracking-wide bg-white/90 text-blue-900 border border-blue-200/80 shadow-2xs hover:border-blue-400 hover:shadow-xs hover:bg-blue-50/50 transition-all cursor-default flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  {passion}
                </motion.div>
              ))}
            </motion.div>

            {/* Short Bio */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl"
            >
              Passionate IT undergraduate specializing in full-stack web and mobile application engineering, 
              data-driven analytics, and applied artificial intelligence. Recognized with a <strong className="font-semibold text-slate-900">3.78 CGPA</strong>, 
              multiple Dean&apos;s List honors, and the prestigious <strong className="font-semibold text-blue-700">JPA PIDN Scholarship</strong>.
            </motion.p>

            {/* Dual CTAs & Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 w-full"
            >
              {/* Primary CTA */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-linear-to-r from-blue-600 via-blue-700 to-sky-600 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 active:scale-98 transition-all duration-200 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-800 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 shadow-2xs hover:shadow-xs active:scale-98 transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-blue-600" />
                <span>Get in Touch</span>
              </a>

              {/* Resume Quick Trigger */}
              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm sm:text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 shadow-2xs hover:shadow-xs active:scale-98 transition-all duration-200 cursor-pointer"
                  title="View Resume credentials"
                >
                  <FileText className="w-4 h-4 text-blue-600" />
                  <span className="hidden sm:inline">Resume</span>
                </button>
              )}


              {/* LinkedIn Quick Link */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 text-slate-600 bg-white border border-slate-200 rounded-xl hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50/50 shadow-2xs hover:shadow-xs active:scale-98 transition-all duration-200"
                title="Azhad Mukriz on LinkedIn"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>

              {/* Email Direct Link */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3.5 text-slate-600 bg-white border border-slate-200 rounded-xl hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50/50 shadow-2xs hover:shadow-xs active:scale-98 transition-all duration-200"
                title="Send Email directly"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>

            {/* Quick Metadata Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium"
            >
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-500" />
                {personalInfo.location}
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                Dual Language: Malay (Native) & English (Fluent)
              </span>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual Card with Glassmorphism & Key Accents */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full max-w-md"
            >
              {/* Main Profile Showcase Card */}
              <div className="glass-card rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/90 relative overflow-hidden">
                
                {/* Decorative top ribbon */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-linear-to-r from-blue-600 via-sky-500 to-indigo-600" />

                {/* Profile Header Badge */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-linear-to-tr from-blue-600 via-blue-700 to-sky-500 p-0.5 shadow-lg shadow-blue-500/25">
                      <div className="w-full h-full rounded-2xl bg-slate-900 flex flex-col items-center justify-center text-white font-black overflow-hidden relative">
                        {/* High-tech visual monogram / avatar badge */}
                        <span className="text-2xl sm:text-3xl font-black tracking-tight">AM</span>
                        <span className="text-[9px] uppercase tracking-widest text-sky-400 font-semibold mt-0.5">UTHM</span>
                        <div className="absolute inset-0 bg-linear-to-b from-blue-500/10 to-transparent pointer-events-none" />
                      </div>
                    </div>
                    {/* Verified badge */}
                    <div className="absolute -bottom-1.5 -right-1.5 bg-blue-600 text-white p-1 rounded-full border-2 border-white shadow-xs">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-700">
                      <Award className="w-3.5 h-3.5" />
                      <span>JPA PIDN Scholar</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 leading-tight mt-0.5">
                      {personalInfo.shortName}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      UTHM Batu Pahat, Johor
                    </p>
                    <div className="mt-2 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      CGPA 3.78 / 4.00
                    </div>
                  </div>
                </div>

                {/* Quick Academic & Milestone Highlights */}
                <div className="space-y-3 pt-2">
                  <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/70 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-blue-100/70 text-blue-700 shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Prestigious JPA PIDN Sponsorship</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">Federal government scholarship for undergraduate IT degree</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/70 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-sky-100/70 text-sky-700 shrink-0">
                      <Code className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">e-Pantas AI Disaster Relief (SUK Johor)</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">Final Year Project in collaboration with state government</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/70 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100/70 text-indigo-700 shrink-0">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">i-Qada’ Mobile Application</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">Published & live on Google Play Store with 5.0★ rating</div>
                    </div>
                  </div>
                </div>

                {/* Interactive Action inside Card */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">Ready for collaboration</span>
                  <a
                    href="#contact"
                    className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 group"
                  >
                    Send a message
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Floating Accents */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="hidden sm:flex absolute -top-4 -left-6 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-slate-200/80 items-center gap-2 text-xs font-bold text-slate-800"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                Dean&apos;s List (5 Semesters)
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="hidden sm:flex absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-slate-200/80 items-center gap-2 text-xs font-bold text-slate-800"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                Google Play Store Deployed
              </motion.div>

            </motion.div>
          </div>

        </div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 pt-10 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {personalInfo.stats.map((stat, i) => (
            <div key={i} className="text-center sm:text-left p-4 rounded-2xl bg-white/60 border border-slate-100 hover:border-blue-200 transition-all">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-slate-900 mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
