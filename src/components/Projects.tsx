"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  Building, 
  Smartphone, 
  Eye 
} from 'lucide-react';

import { SectionHeading } from './SectionHeading';
import { projectsData } from '../data/portfolioData';
import { Project } from '../data/types';
import { ProjectModal } from './ProjectModal';
import { TechIcon } from './TechIcon';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 md:py-28 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Featured Systems & Engineering"
          title="Flagship University Projects"
          subtitle="Enterprise-grade full-stack solutions and live mobile applications developed to solve real-world problems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-slate-200/90 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
            >
              {/* Decorative top accent line */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r ${project.accentColor}`} />

              <div>
                {/* Header Meta: Category & Status Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/70">
                    {project.id === 'e-pantas' ? (
                      <Building className="w-3.5 h-3.5" />
                    ) : (
                      <Smartphone className="w-3.5 h-3.5" />
                    )}
                    {project.category.split(' ')[0]}
                  </span>

                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {project.status?.includes('Play Store') ? 'Live on Play Store' : 'SUK Johor Collab'}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Subtitle / Role Context */}
                <div className="mt-2 text-xs font-semibold text-slate-500 flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="text-blue-700 font-bold">{project.role}</span>
                  <span>•</span>
                  <span>{project.organization}</span>
                  {project.collaboration && (
                    <>
                      <span>•</span>
                      <span className="text-slate-800 font-semibold">{project.collaboration}</span>
                    </>
                  )}
                </div>

                {/* Summary */}
                <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {project.summary}
                </p>

                {/* Key Metrics Highlight Strip */}
                <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-2.5 bg-white p-3 rounded-2xl border border-slate-200/70">
                  {project.impactMetrics.slice(0, 3).map((metric, mIdx) => (
                    <div key={mIdx} className="text-center p-1.5">
                      <div className="text-sm sm:text-base font-extrabold text-blue-700">
                        {metric.value}
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-medium text-slate-500 truncate">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-5">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Technologies & Tools:
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200/60"
                      >
                        <TechIcon name={tech} className="w-3.5 h-3.5" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons: View Details (Modal) */}
              <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">
                  Full architecture & demo info
                </span>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-98 shadow-sm hover:shadow-md hover:shadow-blue-500/20 transition-all cursor-pointer group/btn"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Interactive Detail Modal Dialog */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
