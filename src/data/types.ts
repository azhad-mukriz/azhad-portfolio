export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  role: string;
  organization: string;
  period: string;
  category: string;
  summary: string;
  fullDescription: string;
  status?: string;
  techStack: string[];
  features: {
    title: string;
    description: string;
  }[];
  architectureHighlights: string[];
  impactMetrics: {
    label: string;
    value: string;
  }[];
  collaboration: string;
  demoUrl?: string;
  repoUrl?: string;
  accentColor: string;
  badge: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  campus: string;
  period: string;
  cgpa: string;
  gpaScale: string;
  muet?: string;
  deansList: string[];
  honors?: string;
  courses: string[];
  status: 'In Progress' | 'Graduated';
}

export interface AwardItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: 'Scholarship' | 'Academic Honor' | 'Competition';
  description: string;
  gpaBreakdown?: {
    term: string;
    gpa: string;
  }[];
  badgeText: string;
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  responsibilities: string[];
  techUsed: string[];
  achievements: string[];
}

export interface SkillItem {
  name: string;
  level: 'Advanced' | 'Intermediate';
  category: string;
}

export interface SkillGroup {
  category: string;
  description: string;
  level: 'Advanced' | 'Intermediate';
  skills: SkillItem[];
}

export interface ExtracurricularItem {
  id: string;
  title: string;
  role: string;
  date: string;
  location: string;
  organizer: string;
  description: string;
  tags: string[];
  type: 'Hackathon / Bootcamp' | 'Leadership / Organization' | 'Cloud / Tech Training' | 'Community / SULAM';
}

export interface LanguageItem {
  language: string;
  proficiency: string;
  score?: string;
  levelPercentage: number;
}
