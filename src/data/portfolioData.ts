import { 
  Project, 
  EducationItem, 
  AwardItem, 
  ExperienceItem, 
  SkillGroup, 
  ExtracurricularItem, 
  LanguageItem 
} from './types';

export const personalInfo = {
  name: "Azhad Mukriz",
  shortName: "Azhad Mukriz",
  title: "Undergraduate IT Scholar & System Developer",
  tagline: "Bachelor of Information Technology (Honours) @ Universiti Tun Hussein Onn Malaysia (UTHM)",
  email: "azhadmukriz2000@gmail.com",
  phone: "+601164142959",
  phoneDisplay: "+60 11-6414 2959",
  location: "Batu Pahat, Johor, Malaysia",
  linkedin: "https://www.linkedin.com/in/azhadmukriz",
  linkedinDisplay: "linkedin.com/in/azhadmukriz",
  passions: [
    "System Developer",
    "Data Analytics",
    "UI/UX Design",
    "Generative AI"
  ],
  bio: "Results-driven Information Technology scholar with a proven track record in end-to-end full-stack development, applied AI solutions, and user-centric digital experiences. Recipient of the prestigious JPA PIDN Scholarship and multi-semester Dean's List achiever (CGPA 3.78). Experienced in delivering real-world impact through systems developed with state government bodies (SUK Johor) and production mobile applications deployed on Google Play Store.",
  stats: [
    { label: "Current CGPA", value: "3.78", sub: "Out of 4.00" },
    { label: "Dean's List Honors", value: "5x", sub: "Semesters 2, 3, 4 (Degree) & 3, 4 (Dip)" },
    { label: "Flagship Projects", value: "2+", sub: "Govt. Collaboration & Play Store App" },
    { label: "Scholarship", value: "JPA", sub: "PIDN National Scholar" },
  ]
};

export const educationData: EducationItem[] = [
  {
    id: "degree",
    degree: "Bachelor of Information Technology (Honours)",
    institution: "Universiti Tun Hussein Onn Malaysia (UTHM)",
    campus: "Main Campus, Batu Pahat, Johor",
    period: "2024 — Present (Expected 2027)",
    cgpa: "3.78",
    gpaScale: "4.00",
    muet: "Band 3.5",
    deansList: [
      "Semester 2 (GPA: 3.94)",
      "Semester 3 (GPA: 3.76)",
      "Semester 4 (GPA: 3.68)"
    ],
    honors: "JPA PIDN National Scholar",
    courses: [
      "Enterprise System Development",
      "Artificial Intelligence & Machine Learning",
      "Web Technologies & Frameworks",
      "Database Systems & Administration",
      "Software Engineering & Agile Methodologies",
      "Information Security & Cloud Architecture"
    ],
    status: "In Progress"
  },
  {
    id: "diploma",
    degree: "Diploma of Information Technology",
    institution: "Universiti Tun Hussein Onn Malaysia (UTHM)",
    campus: "Centre for Diploma Studies (CeDS), Pagoh Campus, Johor",
    period: "2021 — 2024",
    cgpa: "3.56",
    gpaScale: "4.00",
    deansList: [
      "Semester 3 (GPA: 3.57)",
      "Semester 4 (GPA: 3.81)"
    ],
    honors: "CeDS Dean's List Award Recipient",
    courses: [
      "Object-Oriented Programming (Java)",
      "Mobile Application Development (Flutter)",
      "Relational Database Management Systems",
      "Data Structures & Algorithms",
      "Network Fundamentals",
      "Final Year Project (Play Store Release)"
    ],
    status: "Graduated"
  },
  {
    id: "spm",
    degree: "Sijil Pelajaran Malaysia (SPM)",
    institution: "Sekolah Menengah Kebangsaan Suria Perdana",
    campus: "Parit Raja, Batu Pahat, Johor",
    period: "2016 — 2020",
    cgpa: "3A, 5B, 1C",
    gpaScale: "SPM",
    deansList: [],
    courses: [
      "Pure Science & Mathematics Stream",
      "Information Technology Foundations",
      "English & Bahasa Melayu (Distinctions)"
    ],
    status: "Graduated"
  }
];

export const awardsData: AwardItem[] = [
  {
    id: "jpa-pidn",
    title: "JPA Sponsorship Programme – Program Ijazah Dalam Negara (PIDN)",
    issuer: "Jabatan Perkhidmatan Awam (JPA) Malaysia",
    year: "2025 — 2027",
    category: "Scholarship",
    badgeText: "Prestigious National Scholarship",
    description: "Awarded the highly competitive Federal Government JPA PIDN Scholarship for undergraduate studies in Information Technology, recognizing top-tier academic standing, leadership merits, and technical aptitude.",
    featured: true
  },
  {
    id: "fsktm-deans",
    title: "FSKTM Dean’s Awards Ceremony 2026",
    issuer: "Faculty of Computer Science & Information Technology (FSKTM), UTHM",
    year: "2026",
    category: "Academic Honor",
    badgeText: "Triple Semester Distinction",
    description: "Conferred during the prestigious Annual Faculty Academic Honors ceremony for achieving top percentile results across consecutive semesters.",
    gpaBreakdown: [
      { term: "Semester 2", gpa: "3.94" },
      { term: "Semester 3", gpa: "3.76" },
      { term: "Semester 4", gpa: "3.68" }
    ],
    featured: true
  },
  {
    id: "ceds-deans",
    title: "CeDS Dean’s List Award (2023 — 2024)",
    issuer: "Centre for Diploma Studies (CeDS), UTHM",
    year: "2023 — 2024",
    category: "Academic Honor",
    badgeText: "Diploma Scholastic Excellence",
    description: "Recognized on the Dean’s List for consecutive academic semesters during diploma tenure, graduating in the top tier of the graduating cohort.",
    gpaBreakdown: [
      { term: "Semester 3", gpa: "3.57" },
      { term: "Semester 4", gpa: "3.81" }
    ],
    featured: true
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "winsoft",
    role: "Internship Trainee",
    company: "Winsoft Solutions Sdn. Bhd",
    location: "Batu Pahat, Johor",
    period: "Industrial Training Tenure",
    type: "IT Engineering & Operations",
    responsibilities: [
      "Diagnosed, repaired, and performed hardware and software maintenance on commercial workstations, laptops, and client peripherals.",
      "Assisted senior network engineers in setting up on-premise local area networks (LAN), routing equipment, and IP surveillance CCTV security monitoring systems.",
      "Authored and designed high-resolution digital marketing graphics, promotional posters, and product catalogs using Canva and Adobe tools.",
      "Facilitated client social media campaigns, driving online engagement and assisting end-users with software troubleshooting and system rollouts."
    ],
    techUsed: [
      "Hardware Maintenance",
      "Network Routing & LAN",
      "CCTV System Deployment",
      "System Troubleshooting",
      "Canva / Adobe Creative Suite",
      "Digital Marketing & Operations"
    ],
    achievements: [
      "Completed 100+ hardware diagnosis and servicing tickets with consistent customer satisfaction.",
      "Delivered complete visual redesign of promotional product catalogs utilized across retail campaigns."
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "e-pantas",
    title: "Sistem Pengurusan Permohonan Bantuan Bencana Berasaskan AI (e-Pantas)",
    shortTitle: "e-Pantas: AI Disaster Relief Management System",
    role: "Lead Full-Stack Developer & AI Integrator",
    organization: "Universiti Tun Hussein Onn Malaysia (UTHM)",
    collaboration: "Pejabat Setiausaha Kerajaan Johor (SUK Johor)",
    period: "2025 — 2026",
    category: "AI-Powered Enterprise Web System",
    badge: "Final Year Project (Government Collaboration)",
    status: "Production Ready / FYP Flagship",
    accentColor: "from-blue-600 to-cyan-500",
    summary: "An enterprise disaster relief application management platform developed in collaboration with Pejabat Setiausaha Kerajaan Johor (SUK Johor). Features automated AI-assisted document parsing, priority eligibility scoring, and multi-tier approval workflows.",
    fullDescription: "During natural crises such as severe floods in Johor, manual processing of thousands of citizen relief requests causes critical delays. e-Pantas solves this bottleneck by unifying citizen registration, automated optical & data verification via AI microservices, and an administrative dispatch dashboard. In active consultation with Pejabat Setiausaha Kerajaan Johor (SUK Johor), the system was architected to handle high-throughput concurrent submissions with multi-level role-based authorization.",
    techStack: [
      "Laravel",
      "Python (Flask)",
      "AI/ML",
      "MySQL",
      "Figma",
      "Tailwind CSS",
      "RESTful API"
    ],
    features: [
      {
        title: "AI-Assisted Document & Data Extraction",
        description: "Employs Python Flask microservices and computer vision / OCR techniques to parse national identity cards (MyKad) and disaster evidence photographs, validating authentic victim claims in seconds."
      },
      {
        title: "Algorithmic Priority & Eligibility Scoring",
        description: "Calculates emergency vulnerability indices combining household income, severity of property damage, and vulnerable family members to rank aid priority automatically."
      },
      {
        title: "Multi-Tier Administrative Governance",
        description: "Built-in role hierarchies for Village Heads (Penghulu), District Officers (Pegawai Daerah), and SUK State Administrators with clear audit trails."
      },
      {
        title: "Public Status Tracking & SMS/Email Alerts",
        description: "Victims can monitor their application progress in real-time with unique tracking codes, receiving automated status update notifications."
      }
    ],
    architectureHighlights: [
      "Dual-backend microservice: Laravel core handling enterprise business logic, sessions, and database ORM, paired with a Python Flask REST API dedicated to AI extraction models.",
      "Relational schema normalized in MySQL to store encrypted applicant records, geospatial disaster coordinates, and audit logs.",
      "High-fidelity UI/UX wireframes prototyped in Figma following Malaysian Public Sector Web Design Guidelines before frontend implementation with Tailwind CSS.",
      "Strict data privacy controls adhering to Malaysian Personal Data Protection Act (PDPA) standards."
    ],
    impactMetrics: [
      { label: "Turnaround Acceleration", value: "> 60%" },
      { label: "Automated Data Extraction", value: "Under 3s" },
      { label: "State Partner", value: "SUK Johor" },
      { label: "System Accuracy", value: "98.4%" }
    ],
    demoUrl: "#contact",
    repoUrl: "#"
  },
  {
    id: "i-qada",
    title: "i-Qada’: An Application for Calculating and Tracking Missed Solat",
    shortTitle: "i-Qada’ Mobile Application",
    role: "Mobile App Developer & UI/UX Designer",
    organization: "Universiti Tun Hussein Onn Malaysia (UTHM)",
    collaboration: "Centre for Diploma Studies (CeDS)",
    period: "2023 — 2024",
    category: "Cross-Platform Mobile Application",
    badge: "Deployed on Google Play Store",
    status: "Published on Google Play Store",
    accentColor: "from-blue-700 to-indigo-600",
    summary: "A native-grade mobile utility application published on the Google Play Store, engineered to assist Muslims in calculating, logging, and systematically completing missed obligatory prayers (Qada') through custom algorithms and real-time visualization.",
    fullDescription: "Accurately tracking unperformed prayers accumulated over years is a complex challenge for many individuals. i-Qada’ was developed from research to production as a Diploma Final Year Project and successfully deployed to the Google Play Store. The application features mathematical prayer debt calculation wizards, daily progress heatmaps, and zero-latency local database storage ensuring user privacy.",
    techStack: [
      "Flutter",
      "Dart",
      "Mobile App Dev",
      "SQLite",
      "Agile",
      "Figma",
      "Google Play Console"
    ],
    features: [
      {
        title: "Intelligent Qada’ Debt Calculation Wizard",
        description: "Formulates accurate estimations of missed prayers based on customizable inputs: puberty age milestone (Baligh), duration of neglect, travel periods, and special dispensations."
      },
      {
        title: "Interactive Real-Time Progress Dashboard",
        description: "Visualizes daily, monthly, and overall completion percentages with dynamic radial progress bars, streak counters, and target completion milestone forecasts."
      },
      {
        title: "Offline-First Local Storage Architecture",
        description: "Constructed with SQLite local persistence, ensuring instant response times, zero server downtime, and 100% user data confidentiality."
      },
      {
        title: "Smart Notification & Routine Habit Formation",
        description: "Configurable daily reminders scheduled around actual prayer times to prompt users to log completed replacement prayers seamlessly."
      }
    ],
    architectureHighlights: [
      "Engineered in Flutter & Dart adopting Provider state management for predictable reactive state updates and 60fps smooth animations.",
      "Optimized SQLite queries for instant updates to large multi-year prayer logs without main thread stutter.",
      "Comprehensive UI/UX design workflow in Figma, focusing on clean Islamic geometric minimalism and high-contrast typography.",
      "Packaged, signed, and successfully verified through Google Play Store production submission guidelines."
    ],
    impactMetrics: [
      { label: "Deployment", value: "Google Play Store" },
      { label: "Store Rating", value: "5.0 ★" },
      { label: "Offline First", value: "100% Private" },
      { label: "Frame Rate", value: "Smooth 60 FPS" }
    ],
    demoUrl: "https://play.google.com",
    repoUrl: "#"
  }
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming Languages",
    description: "Core programming languages for algorithmic problem solving and backend architecture",
    level: "Advanced",
    skills: [
      { name: "Java", level: "Advanced", category: "Programming" },
      { name: "Python", level: "Advanced", category: "Programming" },
      { name: "PHP", level: "Advanced", category: "Programming" },
      { name: "JavaScript", level: "Advanced", category: "Programming" },
      { name: "SQL", level: "Advanced", category: "Programming" }
    ]
  },
  {
    category: "Web & Frameworks",
    description: "Modern full-stack web and mobile application frameworks",
    level: "Advanced",
    skills: [
      { name: "Laravel", level: "Advanced", category: "Web & Frameworks" },
      { name: "Flutter", level: "Advanced", category: "Web & Frameworks" },
      { name: "Flask", level: "Advanced", category: "Web & Frameworks" },
      { name: "HTML5", level: "Advanced", category: "Web & Frameworks" },
      { name: "CSS3", level: "Advanced", category: "Web & Frameworks" },
      { name: "Tailwind CSS", level: "Advanced", category: "Web & Frameworks" }
    ]
  },
  {
    category: "Database & Storage",
    description: "Relational database schema modeling, queries, and administration",
    level: "Advanced",
    skills: [
      { name: "MySQL", level: "Advanced", category: "Database" },
      { name: "phpMyAdmin", level: "Advanced", category: "Database" }
    ]
  },
  {
    category: "Data & BI Analytics",
    description: "Data preparation, modeling, exploratory analysis, and executive dashboarding",
    level: "Intermediate",
    skills: [
      { name: "Microsoft Excel", level: "Intermediate", category: "Data & BI" },
      { name: "Power BI", level: "Intermediate", category: "Data & BI" },
      { name: "Power Query", level: "Intermediate", category: "Data & BI" }
    ]
  },
  {
    category: "AI & Machine Learning",
    description: "Applied artificial intelligence, neural architectures, and vision pipelines",
    level: "Intermediate",
    skills: [
      { name: "Machine Learning", level: "Intermediate", category: "AI & ML" },
      { name: "Deep Learning", level: "Intermediate", category: "AI & ML" },
      { name: "Computer Vision", level: "Intermediate", category: "AI & ML" }
    ]
  },
  {
    category: "UI/UX & Graphic Design",
    description: "Visual design systems, prototyping, user empathy, and branding assets",
    level: "Advanced",
    skills: [
      { name: "Adobe Photoshop", level: "Advanced", category: "Design" },
      { name: "Adobe Illustrator", level: "Advanced", category: "Design" },
      { name: "Canva", level: "Advanced", category: "Design" },
      { name: "Figma", level: "Advanced", category: "Design" }
    ]
  },
  {
    category: "Generative AI & LLM Tools",
    description: "Leveraging state-of-the-art foundation models and prompt engineering for workflow speed",
    level: "Advanced",
    skills: [
      { name: "ChatGPT", level: "Advanced", category: "Generative AI" },
      { name: "Prompt Engineering", level: "Advanced", category: "Generative AI" },
      { name: "AI-assisted Content & Design", level: "Advanced", category: "Generative AI" }
    ]
  },
  {
    category: "Productivity & Collaboration",
    description: "Professional workplace tools, technical presentations, and documentation",
    level: "Advanced",
    skills: [
      { name: "Microsoft Office", level: "Advanced", category: "Productivity" },
      { name: "Microsoft PowerPoint", level: "Advanced", category: "Productivity" }
    ]
  }
];

export const extracurricularData: ExtracurricularItem[] = [
  {
    id: "ai-bootcamp",
    title: "AI Talent Bootcamp 2026",
    role: "Delegate & AI Innovation Challenge Participant",
    date: "September 2026",
    location: "World Trade Centre Kuala Lumpur (WTC KL)",
    organizer: "TalentCorp, CelcomDigi, PwC & Etiqa",
    type: "Hackathon / Bootcamp",
    description: "Engaged in an intensive national enterprise talent bootcamp. Collaborated on real-world industrial AI adoption challenges, networked with executive leadership from PwC, CelcomDigi, and Etiqa, and presented novel AI solution prototypes.",
    tags: ["Artificial Intelligence", "Industrial Hackathon", "TalentCorp", "Leadership"]
  },
  {
    id: "english-fusion",
    title: "Fun English Fusion",
    role: "Program Organizer & Student Facilitator",
    date: "January 2026",
    location: "Universiti Tun Hussein Onn Malaysia (UTHM)",
    organizer: "UTHM Student Development & Language Club",
    type: "Leadership / Organization",
    description: "Organized and facilitated interactive English communication workshops designed to boost undergraduates' conversational confidence, public speaking proficiency, and professional interview readiness.",
    tags: ["Program Leadership", "English Communication", "Facilitation", "Event Management"]
  },
  {
    id: "aws-training",
    title: "AWS CendekiAwan Malaysia Training",
    role: "Cloud Architecture Trainee",
    date: "December 2025",
    location: "UTHM Main Campus",
    organizer: "Amazon Web Services (AWS) Malaysia & UTHM",
    type: "Cloud / Tech Training",
    description: "Completed comprehensive hands-on training on AWS Cloud infrastructure. Acquired practical skills in configuring Amazon EC2, Amazon S3 storage buckets, IAM security policies, and scalable cloud application deployments.",
    tags: ["AWS Cloud", "EC2 & S3", "Cloud Security", "Infrastructure"]
  },
  {
    id: "sulam-ai",
    title: "AI Meramal Emosi (SULAM Community Programme)",
    role: "Keynote Presenter & AI Workshop Instructor",
    date: "November 2025",
    location: "UTHM & Partner Secondary Schools",
    organizer: "Service-Learning Malaysia (SULAM) & FSKTM",
    type: "Community / SULAM",
    description: "Delivered interactive workshops introducing secondary school students to AI concepts and computer vision. Guided students hands-on to build emotion prediction classifiers using Google Teachable Machine.",
    tags: ["Community Outreach", "AI Education", "Computer Vision", "Teachable Machine"]
  },
  {
    id: "immersive-tech",
    title: "Digital Transformation Using Immersive Tech",
    role: "Technical Workshop Participant",
    date: "December 2023",
    location: "UTHM Pagoh Campus",
    organizer: "Faculty of Applied Sciences and Technology / CeDS",
    type: "Cloud / Tech Training",
    description: "Explored immersive technologies including interactive 3D virtual environment modeling and Augmented Reality / Virtual Reality (AR/VR) pipeline creation using Unity 3D engine.",
    tags: ["Unity 3D", "Augmented Reality", "Immersive Tech", "Game Engines"]
  }
];

export const languagesData: LanguageItem[] = [
  {
    language: "Bahasa Melayu",
    proficiency: "Native Proficiency",
    levelPercentage: 100
  },
  {
    language: "English",
    proficiency: "Professional Working Proficiency",
    score: "MUET Band 3.5",
    levelPercentage: 85
  }
];
