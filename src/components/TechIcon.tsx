"use client";

import React from 'react';
import { 
  Code2, 
  Database, 
  Palette, 
  Sparkles, 
  Terminal, 
  Layout, 
  BarChart3, 
  FileSpreadsheet, 
  Layers, 
  Bot, 
  Eye, 
  Network 
} from 'lucide-react';


interface TechIconProps {
  name: string;
  className?: string;
}

export const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5Z" />
  </svg>
);


export const TechIcon: React.FC<TechIconProps> = ({ name, className = "w-5 h-5" }) => {
  const normalized = name.toLowerCase().trim();

  // Python
  if (normalized.includes('python')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.008 2.75h5.813v.825H3.92S0 5.766 0 11.884c0 6.12 3.424 5.91 3.424 5.91h2.043v-2.868s-.11-3.425 3.366-3.425h5.787s3.26.054 3.26-3.153V3.153S18.354 0 11.914 0zm-3.19 1.734a1.077 1.077 0 1 1 0 2.155 1.077 1.077 0 0 1 0-2.155zm7.362 6.425v2.868s.11 3.425-3.366 3.425H6.933s-3.26-.054-3.26 3.153v5.195S3.726 24 10.166 24c6.094 0 5.714-2.656 5.714-2.656l-.008-2.75h-5.813v-.825h8.101s3.92.465 3.92-5.653c0-6.12-3.424-5.91-3.424-5.91h-2.043zm-4.172 14.107a1.077 1.077 0 1 1 0-2.155 1.077 1.077 0 0 1 0 2.155z" fill="#38BDF8"/>
      </svg>
    );
  }

  // Java
  if (normalized.includes('java') && !normalized.includes('script')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" stroke="#ea580c" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" stroke="#ea580c" />
        <line x1="6" y1="1" x2="6" y2="4" stroke="#ea580c" />
        <line x1="10" y1="1" x2="10" y2="4" stroke="#ea580c" />
        <line x1="14" y1="1" x2="14" y2="4" stroke="#ea580c" />
      </svg>
    );
  }

  // Flutter
  if (normalized.includes('flutter')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.314 0L2.3 12 6 15.7 21.684 0h-7.37zM14.314 11.215L8.714 16.8 14.314 22.4h7.37L16.086 16.8l5.6-5.585h-7.372z" fill="#0284C7"/>
      </svg>
    );
  }

  // Laravel
  if (normalized.includes('laravel')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.2 5.6l-8.5-4.9c-.4-.2-.9-.2-1.3 0L2.8 5.6c-.4.2-.7.7-.7 1.2v9.8c0 .5.3.9.7 1.2l8.5 4.9c.2.1.4.2.7.2s.5-.1.7-.2l8.5-4.9c.4-.2.7-.7.7-1.2V6.8c0-.5-.3-1-.7-1.2zm-9.2 14.5l-7.3-4.2V8.4l7.3 4.2v7.5zm1-8.5l-7.2-4.2 7.2-4.2 7.2 4.2-7.2 4.2zm7.2 4.3l-7.2 4.2v-7.5l7.2-4.2v7.5z" fill="#EF4444"/>
      </svg>
    );
  }

  // MySQL
  if (normalized.includes('mysql')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 4.01 2 6.5s4.48 4.5 10 4.5 10-2.01 10-4.5S17.52 2 12 2zm0 6.5c-4.41 0-8-1.57-8-2.5s3.59-2.5 8-2.5 8 1.57 8 2.5-3.59 2.5-8 2.5zm10 2.5c0 .32-.2.63-.56.92C19.64 13.36 16.09 14.5 12 14.5s-7.64-1.14-9.44-2.58c-.36-.29-.56-.6-.56-.92v3c0 2.49 4.48 4.5 10 4.5s10-2.01 10-4.5v-3zm0 5.5c0 .32-.2.63-.56.92-1.8 1.44-5.35 2.58-9.44 2.58s-7.64-1.14-9.44-2.58c-.36-.29-.56-.6-.56-.92v3c0 2.49 4.48 4.5 10 4.5s10-2.01 10-4.5v-3z" fill="#0284C7"/>
      </svg>
    );
  }

  // Tailwind CSS
  if (normalized.includes('tailwind')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.975 12 6.001 12z" fill="#0EA5E9"/>
      </svg>
    );
  }

  // Figma
  if (normalized.includes('figma')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 2a4 4 0 0 0-4 4 4 4 0 0 0 4 4h4V2H8zm8 0h-4v8h4a4 4 0 0 0 0-8zM8 10a4 4 0 0 0-4 4 4 4 0 0 0 4 4h4v-8H8zm8 0h-4v8h4a4 4 0 1 0 0-8zm-8 8a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4v-4H8z" fill="#8B5CF6"/>
      </svg>
    );
  }

  // PHP
  if (normalized.includes('php')) {
    return <Code2 className={`${className} text-indigo-500`} />;
  }

  // JavaScript
  if (normalized.includes('javascript') || normalized.includes('js')) {
    return <Code2 className={`${className} text-amber-500`} />;
  }

  // SQL / Database
  if (normalized.includes('sql') || normalized.includes('database') || normalized.includes('sqlite')) {
    return <Database className={`${className} text-blue-600`} />;
  }

  // Power BI / BI Analytics
  if (normalized.includes('power bi') || normalized.includes('power query')) {
    return <BarChart3 className={`${className} text-amber-500`} />;
  }

  // Excel / Office
  if (normalized.includes('excel') || normalized.includes('spreadsheet')) {
    return <FileSpreadsheet className={`${className} text-emerald-600`} />;
  }

  // AI & ML
  if (normalized.includes('machine learning') || normalized.includes('deep learning') || normalized.includes('ai')) {
    return <Sparkles className={`${className} text-sky-500`} />;
  }

  // Computer Vision
  if (normalized.includes('computer vision')) {
    return <Eye className={`${className} text-blue-500`} />;
  }

  // Design tools (Photoshop, Illustrator, Canva)
  if (normalized.includes('photoshop') || normalized.includes('illustrator') || normalized.includes('canva')) {
    return <Palette className={`${className} text-pink-500`} />;
  }

  // ChatGPT & Generative AI
  if (normalized.includes('chatgpt') || normalized.includes('prompt') || normalized.includes('generative')) {
    return <Bot className={`${className} text-teal-500`} />;
  }

  // Flask / Web framework
  if (normalized.includes('flask')) {
    return <Terminal className={`${className} text-slate-700`} />;
  }

  // HTML / CSS
  if (normalized.includes('html') || normalized.includes('css')) {
    return <Layout className={`${className} text-orange-500`} />;
  }

  // Network / Hardware / CCTV
  if (normalized.includes('network') || normalized.includes('cctv') || normalized.includes('hardware')) {
    return <Network className={`${className} text-blue-600`} />;
  }

  // Default fallback
  return <Layers className={`${className} text-blue-500`} />;
};
