"use client";

import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Education } from '../components/Education';
import { Awards } from '../components/Awards';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';
import { Experience } from '../components/Experience';
import { Extracurricular } from '../components/Extracurricular';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { ResumeModal } from '../components/ResumeModal';

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-white text-slate-900 flex flex-col">
      {/* Sticky Header / Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* About Section */}
        <About onOpenResume={() => setIsResumeOpen(true)} />

        {/* Education & Academic Honors */}
        <Education />

        {/* Scholarships & Awards */}
        <Awards />

        {/* Featured Projects with Interactive Detail Modal */}
        <Projects />

        {/* Technical Skills Grouped with Brand/Stack Icons */}
        <Skills />

        {/* Work Experience */}
        <Experience />

        {/* Extracurricular Activities & Volunteering */}
        <Extracurricular />

        {/* Contact & Connect Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Quick Resume & Credentials Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
