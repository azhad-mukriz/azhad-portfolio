"use client";

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Printer, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

import { 
  personalInfo, 
  educationData, 
  awardsData, 
  experienceData, 
  projectsData, 
  skillGroups,
  languagesData 
} from '../data/portfolioData';
import { LinkedInIcon } from './TechIcon';


interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:p-0">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity print:hidden"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto print:max-h-none print:shadow-none print:border-none print:rounded-none"
        >
          {/* Action Toolbar */}
          <div className="p-4 bg-slate-900 text-white flex items-center justify-between shrink-0 print:hidden">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-white">Curriculum Vitae Preview</span>
              <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-600 text-white">
                Verified
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Resume Body */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-white text-slate-800 text-left print:p-8">
            
            {/* Header / Contact Details */}
            <div className="border-b border-slate-200 pb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    {personalInfo.name}
                  </h1>
                  <p className="text-sm font-bold text-blue-700 mt-1">
                    {personalInfo.tagline}
                  </p>
                </div>
                <div className="text-right sm:self-center">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-800 border border-blue-200">
                    JPA PIDN National Scholar
                  </span>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-slate-600">
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-blue-600" />
                  {personalInfo.email}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-blue-600" />
                  {personalInfo.phoneDisplay}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <LinkedInIcon className="w-3.5 h-3.5 text-blue-600" />
                  {personalInfo.linkedinDisplay}
                </span>

                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" />
                  {personalInfo.location}
                </span>
              </div>
            </div>

            {/* Profile Summary */}
            <div>
              <h2 className="text-xs font-black tracking-wider uppercase text-blue-700 border-b border-blue-100 pb-1 mb-2">
                Executive Profile
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {personalInfo.bio}
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-black tracking-wider uppercase text-blue-700 border-b border-blue-100 pb-1 mb-3">
                Education & Scholastic Honors
              </h2>
              <div className="space-y-4">
                {educationData.map((edu) => (
                  <div key={edu.id} className="text-xs sm:text-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between font-bold text-slate-900">
                      <span>{edu.degree}</span>
                      <span className="text-xs font-normal text-slate-500">{edu.period}</span>
                    </div>
                    <div className="text-xs text-blue-600 font-semibold">{edu.institution} — {edu.campus}</div>
                    <div className="text-xs text-slate-700 mt-1 flex flex-wrap gap-x-3 gap-y-0.5">
                      <span><strong>CGPA:</strong> {edu.cgpa} / {edu.gpaScale}</span>
                      {edu.muet && <span>• <strong>MUET:</strong> {edu.muet}</span>}
                      {edu.deansList.length > 0 && <span>• <strong>Dean&apos;s List:</strong> {edu.deansList.join(', ')}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scholarships & Awards */}
            <div>
              <h2 className="text-xs font-black tracking-wider uppercase text-blue-700 border-b border-blue-100 pb-1 mb-3">
                Scholarships & Recognitions
              </h2>
              <div className="space-y-3">
                {awardsData.map((award) => (
                  <div key={award.id} className="text-xs sm:text-sm">
                    <div className="flex justify-between items-start font-bold text-slate-900">
                      <span>{award.title}</span>
                      <span className="text-xs font-normal text-slate-500 shrink-0 ml-2">{award.year}</span>
                    </div>
                    <div className="text-xs text-slate-600 font-medium">{award.issuer}</div>
                    <div className="text-xs text-slate-600 mt-0.5">{award.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Work Experience */}
            <div>
              <h2 className="text-xs font-black tracking-wider uppercase text-blue-700 border-b border-blue-100 pb-1 mb-3">
                Industry Experience
              </h2>
              <div className="space-y-4">
                {experienceData.map((exp) => (
                  <div key={exp.id} className="text-xs sm:text-sm">
                    <div className="flex justify-between items-start font-bold text-slate-900">
                      <span>{exp.role} — {exp.company}</span>
                      <span className="text-xs font-normal text-slate-500 shrink-0 ml-2">{exp.period}</span>
                    </div>
                    <div className="text-xs text-blue-600 font-medium">{exp.location} • {exp.type}</div>
                    <ul className="mt-1.5 space-y-1 text-xs text-slate-600 list-disc list-inside">
                      {exp.responsibilities.slice(0, 3).map((resp, rIdx) => (
                        <li key={rIdx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Projects */}
            <div>
              <h2 className="text-xs font-black tracking-wider uppercase text-blue-700 border-b border-blue-100 pb-1 mb-3">

                Featured Engineering Projects
              </h2>
              <div className="space-y-4">
                {projectsData.map((proj) => (
                  <div key={proj.id} className="text-xs sm:text-sm">
                    <div className="flex justify-between items-start font-bold text-slate-900">
                      <span>{proj.title}</span>
                      <span className="text-xs font-semibold text-blue-700 shrink-0 ml-2">{proj.category}</span>
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      {proj.role} • {proj.organization} {proj.collaboration ? `(${proj.collaboration})` : ''}
                    </div>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {proj.summary}
                    </p>
                    <div className="text-[11px] text-slate-500 mt-1">
                      <strong>Tech Stack:</strong> {proj.techStack.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills Overview */}
            <div>
              <h2 className="text-xs font-black tracking-wider uppercase text-blue-700 border-b border-blue-100 pb-1 mb-3">
                Technical Competencies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {skillGroups.map((group) => (
                  <div key={group.category} className="p-2 rounded bg-slate-50 border border-slate-200">
                    <span className="font-bold text-slate-800">{group.category}: </span>
                    <span className="text-slate-600">
                      {group.skills.map(s => s.name).join(', ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h2 className="text-xs font-black tracking-wider uppercase text-blue-700 border-b border-blue-100 pb-1 mb-2">
                Languages
              </h2>
              <div className="flex gap-4 text-xs text-slate-700">
                {languagesData.map(lang => (
                  <span key={lang.language}>
                    <strong>{lang.language}:</strong> {lang.proficiency} {lang.score ? `(${lang.score})` : ''}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between print:hidden">
            <span className="text-xs text-slate-500">
              Direct email: <strong className="text-slate-800">{personalInfo.email}</strong>
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print Resume</span>
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
