"use client";

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Zap, 
  ArrowRight 
} from 'lucide-react';

import { Project } from '../data/types';
import { TechIcon } from './TechIcon';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity"
        />

        {/* Modal Content Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto"
        >
          {/* Header Banner */}
          <div className="bg-linear-to-r from-blue-700 via-blue-600 to-sky-600 p-6 sm:p-8 text-white relative shrink-0">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-white/20 text-white backdrop-blur-xs">
                {project.category}
              </span>
              {project.status && (
                <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wide bg-emerald-500/90 text-white flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {project.status}
                </span>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight pr-8">
              {project.title}
            </h2>

            <div className="mt-2 text-xs sm:text-sm text-blue-100 flex flex-wrap items-center gap-x-4 gap-y-1">
              <span><strong>Role:</strong> {project.role}</span>
              <span>•</span>
              <span><strong>Scope:</strong> {project.organization}</span>
              {project.collaboration && (
                <>
                  <span>•</span>
                  <span><strong>Collaboration:</strong> {project.collaboration}</span>
                </>
              )}
            </div>
          </div>

          {/* Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
            
            {/* Project Overview */}
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-blue-600" />
                Executive Summary & Scope
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Impact Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-blue-50/70 p-4 rounded-2xl border border-blue-100">
              {project.impactMetrics.map((metric, mIdx) => (
                <div key={mIdx} className="text-center p-2">
                  <div className="text-xl sm:text-2xl font-black text-blue-700">{metric.value}</div>
                  <div className="text-xs font-semibold text-slate-600 mt-0.5">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* Tech Stack Visual Pills */}
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-blue-600" />
                Technology Stack Architecture
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {project.techStack.map((tech, tIdx) => (
                  <div
                    key={tIdx}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 shadow-2xs"
                  >
                    <TechIcon name={tech} className="w-4 h-4" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features Breakdown */}
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-blue-600" />
                Core Capabilities & Innovations
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, fIdx) => (
                  <div
                    key={fIdx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-start"
                  >
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-1.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{feature.title}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-6">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Architectural Highlights */}
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-blue-600" />
                Engineering & Architecture Highlights
              </h3>
              <ul className="space-y-2.5">
                {project.architectureHighlights.map((arch, aIdx) => (
                  <li key={aIdx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <span className="leading-relaxed">{arch}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Modal Footer Actions */}
          <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
            <span className="text-xs text-slate-500 font-medium">
              Inquiries regarding source code & demonstrations:
            </span>
            <div className="flex items-center gap-2.5">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all"
              >
                <span>Request Project Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
