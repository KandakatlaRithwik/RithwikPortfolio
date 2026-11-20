const base = import.meta.env.BASE_URL;
export const asset = (file: string) => `${base}${file}`;

export const profile = {
  name: 'Rithwik Kandakatla',
  firstName: 'rithwik',
  role: 'AI Engineer | Software Development Engineer',
  roleLines: ['AI Engineer', 'Software Development Engineer'],
  location: 'Warangal, Telangana, India',
  email: 'rithwikkandakatla@gmail.com',
  phone: '+91 7207086671',
  linkedin: 'https://linkedin.com/in/rithwik-kandakatla',
  github: 'https://github.com/KandakatlaRithwik',
  resume: asset('KANDAKATLA_RITHWIK_RESUME.pdf'),
  photo: asset('profile.jpg'),
};

export const aboutText =
  'Computer Science undergraduate with strong foundations in Python programming, backend engineering, databases, and data-driven software development. Experienced in building scalable applications using FastAPI, PostgreSQL, RESTful APIs, RAG, and NLP. Skilled in developing practical software solutions using modern engineering practices.';

export const stats = [
  { value: '8.27', label: 'CGPA' },
  { value: '3+', label: 'Internships' },
  { value: '8+', label: 'Real-world projects' },
  { value: '10+', label: 'REST APIs built' },
];

export const expertise = [
  {
    name: 'Backend Engineering',
    description:
      'Scalable RESTful APIs and secure JWT authentication with FastAPI, Node.js and Express.js, engineered for performance and response efficiency.',
    tags: ['FastAPI', 'Node.js', 'Express.js', 'REST APIs', 'JWT'],
  },
  {
    name: 'AI & RAG Systems',
    description:
      'Intelligent retrieval and medical report analysis pipelines built on Google Gemini, Retrieval-Augmented Generation, ChromaDB, OCR and NLP.',
    tags: ['Gemini API', 'RAG', 'ChromaDB', 'OCR', 'NLP'],
  },
  {
    name: 'Full Stack Development',
    description:
      'Database-driven MERN applications with authentication, API integrations, responsive interfaces and admin dashboards.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'HTML5', 'CSS3'],
  },
  {
    name: 'Databases & Data',
    description:
      'Relational and document data modelling, with a strong grounding in DBMS, SQL and data-driven application design.',
    tags: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL'],
  },
  {
    name: 'IoT & Edge AI',
    description:
      'Real-time gesture recognition on embedded hardware, from ESP32-CAM and Arduino Uno firmware to Edge Impulse model deployment.',
    tags: ['ESP32-CAM', 'Arduino Uno', 'Edge Impulse'],
  },
  {
    name: 'Digital Agency · DevFrames',
    description:
      'Co-founder of DevFrames, a startup digital agency in Warangal delivering full-stack web and AI-powered solutions to clients.',
    tags: ['Co-Founder', 'Web Solutions', 'AI-Powered Solutions'],
  },
];

export type Project = {
  name: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  live?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    name: 'MediAI',
    category: 'AI Medical Assistant',
    description:
      'A 5-module AI medical assistant using Gemini, RAG, ChromaDB, OCR and NLP for contextual healthcare assistance and medical report analysis.',
    image: asset('mediai.png'),
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'React.js', 'Gemini API', 'RAG', 'JWT'],
    live: 'https://mediai2026.vercel.app/',
    github: 'https://github.com/KandakatlaRithwik/MediAI',
  },
  {
    name: 'DevFrames',
    category: 'Co-Founded Digital Agency',
    description:
      'Software and product studio I co-founded in 2026, delivering full-stack web and AI-powered solutions end to end for 1+ client projects.',
    image: asset('devframes.jpg'),
    tags: ['Co-Founder', 'Full-Stack', 'Web Solutions', 'AI-Powered'],
    live: 'https://devframes.vercel.app/',
  },
  {
    name: 'CareConnect',
    category: 'Elderly Healthcare Platform',
    description:
      'Healthcare management platform with 5+ modules including appointment scheduling, secure authentication and administrative dashboards.',
    image: asset('elderly.png'),
    tags: ['MongoDB', 'Express', 'React.js', 'Node.js'],
    live: 'https://careconnect-krc-omega.vercel.app/',
  },
  {
    name: 'RentEase',
    category: 'Rental Platform',
    description:
      'Full stack rental platform to browse, manage and rent furniture and appliances, with secure authentication and responsive UI.',
    image: asset('rentease.png'),
    tags: ['React.js', 'Node.js', 'MongoDB', 'Express'],
    live: 'https://rent-ease-furniture-appliance-renta.vercel.app/',
    github: 'https://github.com/KandakatlaRithwik/RentEase-Furniture-Appliance-Rental-Platform',
  },
  {
    name: 'Employee Tracking System',
    category: 'Workforce Management',
    description:
      'MERN application for employee records, task allocation, attendance tracking and administrative operations.',
    image: asset('employee.png'),
    tags: ['MongoDB', 'Express', 'React.js', 'Node.js'],
    live: 'https://employee-task-allocation-and-tracki.vercel.app/',
    github: 'https://github.com/KandakatlaRithwik/EmployeeTaskAllocationAndTrackingSystem',
  },
  {
    name: 'AI Sign Language Translator',
    category: 'Edge AI · IoT',
    description:
      'ESP32-CAM sign language recognition using Edge Impulse, trained on a 1200+ image dataset, with an Android app that converts gestures to text.',
    image: asset('signlanguage.png'),
    tags: ['ESP32-CAM', 'Edge Impulse', 'Android', 'Embedded AI'],
  },
];

export const techTiles = [
  { name: 'Python', group: 'Language' },
  { name: 'FastAPI', group: 'Backend' },
  { name: 'PostgreSQL', group: 'Database' },
  { name: 'RAG', group: 'AI' },
  { name: 'Gemini API', group: 'AI' },
  { name: 'React.js', group: 'Frontend' },
  { name: 'Node.js', group: 'Backend' },
  { name: 'MongoDB', group: 'Database' },
  { name: 'ChromaDB', group: 'AI' },
  { name: 'ESP32-CAM', group: 'IoT' },
];

export const skillGroups = [
  { title: 'Programming Languages', items: ['Python', 'SQL', 'Java', 'JavaScript', 'C'] },
  { title: 'Backend Technologies', items: ['FastAPI', 'Node.js', 'Express.js', 'REST APIs'] },
  { title: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
  { title: 'Data & AI Technologies', items: ['RAG', 'NLP', 'ChromaDB', 'Google Gemini API', 'OCR'] },
  { title: 'Web Technologies', items: ['HTML5', 'CSS3', 'React.js'] },
  { title: 'Developer Tools', items: ['Git', 'GitHub', 'VS Code', 'JWT Authentication'] },
  { title: 'IoT & Embedded Systems', items: ['ESP32-CAM', 'Arduino Uno', 'Edge Impulse', 'Embedded Systems'] },
  { title: 'Strong Subjects', items: ['Python', 'DSA', 'AI/ML', 'DBMS', 'OOP', 'AI-Powered Digital Solutions'] },
];

export const experience = [
  {
    period: '2026 – Present',
    role: 'Co-Founder & Full-Stack Developer',
    company: 'DevFrames · Warangal',
    points: ['Co-founded a digital agency delivering full-stack web and AI-powered solutions, serving 1+ client projects.'],
  },
  {
    period: 'Apr 2026 – Oct 2026',
    role: 'Full-Stack Web Development Intern',
    company: 'Unified Mentor Pvt. Ltd.',
    points: [
      'Built 3 full-stack web applications using React.js, Node.js and MongoDB featuring secure authentication and responsive dashboards.',
    ],
  },
  {
    period: 'Jun 2026 – Jul 2026',
    role: 'Backend Developer Intern',
    company: 'CodeAlpha',
    points: ['Engineered 10+ REST APIs using Node.js and Express.js, optimizing backend performance and improving response efficiency.'],
  },
  {
    period: 'May 2025 – Jun 2025',
    role: 'Industrial IoT Intern',
    company: 'NIT Warangal',
    points: ['Developed edge AI and Industrial IoT solutions using ESP32-CAM and Arduino Uno for real-time gesture recognition.'],
  },
];

export const certifications = [
  { title: 'MERN Stack Engineer', detail: 'Blackbucks · 8-week internship · 2026' },
  { title: 'Backend Developer + Letter of Recommendation', detail: 'CodeAlpha · 2026' },
  { title: 'Data Analytics Essentials', detail: 'Cisco Networking Academy · 2026' },
  { title: 'Database Management Systems', detail: 'NPTEL · 2025' },
];

export const education = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    school: 'Kakatiya Institute of Technology & Science, Warangal',
    years: '2023 – 2027',
    score: '8.27',
    scoreLabel: 'CGPA / 10',
    details: ['University: Kakatiya University', 'Mode: Full-time', 'Focus: Python, DSA, AI/ML, DBMS, OOP'],
  },
  {
    degree: 'Intermediate (MPC)',
    school: 'SR Edu Center Junior College',
    years: '2021 – 2023',
    score: '94.4%',
    scoreLabel: '944 / 1000',
    details: ['Board: Telangana State Board of Intermediate Education', 'Mode: Full-time', 'Stream: MPC'],
  },
];
