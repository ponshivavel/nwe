import {
  SiPython,
  SiJavascript,
  SiReact,
  SiVite,
  SiHtml5,
  SiTailwindcss,
  SiSpringboot,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
} from 'react-icons/si'
import { DiJava, DiCss3Full, DiVisualstudio } from 'react-icons/di'

export const personal = {
  name: 'PONSHIVAVEL  S K',
  role: 'Java Full Stack Developer',
  tagline: 'I craft scalable web applications and intelligent data-driven solutions.',
  email: 'ponshivavelsk@gmail.com',
  phone: '+91 6374880291',
  location: 'Erode, India',
  github: 'https://github.com/ponshivavel',
  linkedin: 'https://www.linkedin.com/in/ponshivavel-sk/',
  leetcode: 'https://leetcode.com/u/ponshivavel/',
  githubUsername: 'ponshivavel',
  leetcodeUsername: 'ponshivavel-sk',
  resumeUrl: 'https://drive.google.com/drive/folders/1AfJG8DWKBOaEG_bhatF28hjX-jFM2p7z',
}

export const roles = [
  'Java Full Stack Developer',
  'Data Science Enthusiast',
  'Problem Solver',
  'React Developer',
  'Spring Boot Developer',
]

export const about = {
  summary:
  "Passionate Java Full Stack Developer and Data Science enthusiast with a strong foundation in Java, React, Python, MySQL, and Machine Learning. Experienced in building responsive web applications, developing scalable backend systems, and creating data-driven solutions. Eager to learn new technologies, solve real-world problems, and deliver efficient, user-focused software.",

objective:
  "To secure a Software Engineer or Java Full Stack Developer role in a growth-oriented organization where I can apply my technical skills, contribute to innovative software solutions, continuously enhance my knowledge, and grow as a professional while creating meaningful impact."
  education: [
    {
      degree: 'B.Tech Artificial Intelligence And Data Science',
      institution: ' V.S.B Engineering College ,Karur',
      period: '2023 — 2027',
     
    },
    {
      degree: 'Higher Secondary ',
      institution: 'S.S.V Matric Higher Secondary School',
      period: '2022 — 2023',
      
    },
   
  ],
}

export const skills = [
  { name: 'Java', icon: DiJava, color: '#E76F00' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Vite', icon: SiVite, color: '#646CFF' },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: DiCss3Full, color: '#1572B6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
  { name: 'SQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'GitHub', icon: SiGithub, color: '#181717' },
  { name: 'VS Code', icon: DiVisualstudio, color: '#007ACC' },
  { name: 'Machine Learning', icon: SiScikitlearn, color: '#F7931E' },
  { name: 'Pandas', icon: SiPandas, color: '#150458' },
  { name: 'NumPy', icon: SiNumpy, color: '#013243' },
]

export const experience = [
  {
    role: 'Java Full Stack Intern',
    company: 'Infosys',
    period: 'Oct 2025 - Dec 2025',
    
    points: [
      'Built RESTful microservices using Spring Boot and Java, integrated with React frontends for internal tooling.',
      'Designed and optimized MySQL schemas, reducing query latency by 35% across reporting dashboards.',
      'Implemented JWT-based authentication and role-based access control for multi-tenant modules.',
      'Collaborated in an Agile team, contributing to code reviews, CI pipelines, and unit testing.',
    ],
    tech: ['Java', 'Spring Boot', 'React', 'MySQL', 'Git'],
  },
  {
    role: 'Data Science Intern',
    company: 'SmartED',
    period: 'Jan 2025 — Mar 2025',
   
    points: [
      'Developed predictive models using Python, Pandas, and Scikit-learn for customer segmentation.',
      'Built data pipelines cleaning 2M+ records, improving model accuracy by 18%.',
      'Created interactive dashboards with Matplotlib and Streamlit for stakeholder reporting.',
      'Documented experiments and deployed models as REST endpoints for production use.',
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Streamlit'],
  },
]

export const projects = [
  {
    title: 'InsurAI Management System',
    description:
      'An AI-powered insurance management platform that automates claim processing, risk assessment, and customer onboarding using machine learning models and a full-stack Java + React architecture.',
    image:
      "Screenshot 2025-12-08 180809.png",
    tech: ['Java', 'Spring Boot', 'React', 'MySQL', 'Python', 'Scikit-learn'],
    features: [
      'AI-driven claim triage with 92% accuracy',
      'Role-based dashboards for agents & customers',
      'Automated risk scoring engine',
      'Real-time analytics & reporting',
    ],
    github: 'https://github.com/ponshivavel/InsurAI',
    
  },
  {
    title: 'Social Media Trend Analysis',
    description:
      'A data science project that analyzes social media sentiment and trending topics in real time using NLP, producing interactive visualizations and forecasting models for brand intelligence.',
    image:
"Screenshot 2026-04-26 131129.png",    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Streamlit'],
    features: [
      'Real-time sentiment analysis with NLP',
      'Trend forecasting using time-series models',
      'Interactive Streamlit dashboards',
      'Automated topic clustering',
    ],
    github: 'https://github.com/ponshivavel/pyspark',
    demo: 'https://trends.demo.example',
  },
   {
    title: 'Heart Disease Prediction System',
    description:
      'Developed an AI-powered heart disease prediction system using Machine Learning. The model predicts the likelihood of heart disease based on patient health parameters',
    image:
"Screenshot 2026-01-01 193601.png",    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Streamlit'],
    features: [
      'Real-time sentiment analysis with NLP',
      'Trend forecasting using time-series models',
      'Interactive Streamlit dashboards',
      'Automated topic clustering',
    ],
    github: 'https://github.com/ponshivavel/Heart-Disease-Prediction-Using-Random-Forest/tree/main',
    demo: 'https://trends.demo.example',
  },
  
]

export const certifications = [
  {
    title: 'Artificial Intelligence and Machine Learning',
    issuer: 'Infosys Springboard',
    year: '2025',
   
  },
  {
    title: 'Design in Vertex AI',
    issuer: 'Google Cloud Skills Boost',
    year: '2025',
   
  },
  {
    title: 'Data Science with Python',
    issuer: 'IBM',
    year: '2024',
    
  },
  {
    title: 'SQL',
    issuer: 'HackerRank',
    year: '2026',
    
  },

  {
    title: 'Developing Code Features Using GitHub Copilotn',
    issuer: 'Microsoft Learn',
    year: '2024',
   
  },
  {
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services (AWS)',
    year: '2026',
    
  },
]

export const achievements = [
  {
    title: 'NPTEL Elite + Gold',
    description:
      'Awarded Elite + Gold certification for top performance in NPTEL Data Science course.',
    icon: 'medal',
  },
  {
    title: 'ET AI Hackathon Semi-Finalist',
    description:
      'Reached the semi-finals among 500+ teams in the ET AI Hackathon for an innovative NLP solution.',
    icon: 'trophy',
  },
  {
    title: '200+ LeetCode Problems',
    description:
      'Solved 200+ DSA problems on LeetCode, strengthening algorithmic and problem-solving skills.',
    icon: 'code',
  },
 
]

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]
