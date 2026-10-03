"use client";

import React from 'react';
import { 
  ArrowUp, 
  Mail, 
  Phone, 
  ShieldCheck, 
  MapPin 
} from 'lucide-react';

import { personalInfo } from '../data/portfolioData';
import { LinkedInIcon } from './TechIcon';


export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white relative pt-16 pb-12 overflow-hidden">
      {/* Decorative top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-blue-600 via-sky-400 to-indigo-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Scholar Bio */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-blue-500 to-sky-400 flex items-center justify-center text-white font-black text-lg">
                AM
              </div>
              <div>
                <h4 className="font-bold text-lg text-white leading-tight">
                  {personalInfo.name}
                </h4>
                <p className="text-xs text-slate-400 font-medium">
                  {personalInfo.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              JPA PIDN National Scholar and multi-semester Dean&apos;s List achiever (CGPA 3.78). 
              Crafting reliable, scalable software applications with modern full-stack web technologies and applied artificial intelligence.
            </p>

            <div className="flex items-center gap-2 text-xs text-sky-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Jabatan Perkhidmatan Awam (JPA) PIDN Sponsored Scholar</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#about" className="hover:text-sky-400 transition-colors">About & Philosophy</a>
              </li>
              <li>
                <a href="#education" className="hover:text-sky-400 transition-colors">Academic Honors & Education</a>
              </li>
              <li>
                <a href="#awards" className="hover:text-sky-400 transition-colors">Scholarships & Awards</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-sky-400 transition-colors">Featured Systems & Projects</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-sky-400 transition-colors">Skills & Tooling</a>
              </li>
              <li>
                <a href="#extracurricular" className="hover:text-sky-400 transition-colors">Bootcamps & Leadership</a>
              </li>
            </ul>
          </div>

          {/* Connect & Contact Direct Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Direct Channels
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors truncate">
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`tel:${personalInfo.phone}`} className="hover:text-white transition-colors">
                  {personalInfo.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <LinkedInIcon className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {personalInfo.linkedinDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{personalInfo.location}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Built with React & Tailwind CSS</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-all cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
