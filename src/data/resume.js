import profilePhoto from "../assets/YashKalam.JPG";
import linkedInPythonCert from "../assets/CertificateOfCompletion_Getting Started with Python-1.png";
import dsPythonCert from "../assets/Python.png";

export const profile = {
  name: "Yash Kalam",
  title: "Software Engineering Specialist",
  location: "Pune, Maharashtra, India",
  phone: "+91 9175629289",
  email: "yashdkkalam@gmail.com",
  linkedin: "https://linkedin.com/in/yash-kalam-685a1a206",
  github: "https://github.com/YASHDKKALAM",
  udemy: "https://www.udemy.com/user/yash-kalam-2/",
  photo: profilePhoto,
  summary:
    "Software Engineer with 3 years of experience in enterprise software development, test automation, and Python-based solutions at Dassault Systèmes. Experienced in JavaScript, Python, React.js, Selenium, and AI-powered applications with a proven track record of improving automation coverage from 9% to 85% and delivering scalable software solutions.",
};

export const certifications = [
  {
    title: "R&D Python Developer Exam Level 1",
    issuer: "Dassault Systèmes",
    date: "March 2026",
    image: dsPythonCert,
  },
  {
    title: "Getting Started with Python",
    issuer: "LinkedIn Learning",
    date: "March 2026",
    image: linkedInPythonCert,
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["JavaScript", "Python", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React.js", "HTML5", "CSS3", "REST APIs", "JavaScript ES6+"],
  },
  {
    category: "Testing",
    items: [
      "Playwright",
      "Selenium WebDriver",
      "Test Automation",
      "Karma",
      "Cheetah Automation Framework",
      "Cypress",
    ],
  },
  {
    category: "AI / LLM",
    items: ["ML", "LangChain", "LangGraph", "ChromaDB", "RAG", "Vector Databases"],
  },
  {
    category: "Tools",
    items: ["Git", "Jira", "AWS", "Agile/Scrum", "Postman"],
  },
];

export const experience = [
  {
    company: "Dassault Systèmes",
    location: "Pune, India",
    role: "Software Engineering Specialist",
    period: "October 2023 – Present",
    highlights: [
      "Architected and delivered enterprise-scale software features across the complete SDLC, including design, development, testing, deployment, and production support.",
      "Resolved 300+ production and development issues across 15+ software modules through root-cause analysis, debugging, and code optimization.",
      "Designed and implemented 30+ high-impact automated test scenarios using Selenium and Cheetah, covering approximately 6,000+ lines of business-critical code.",
      "Increased automated test coverage from 9% to 85% using Karma, Selenium, and Cheetah frameworks.",
      "Developed a Python-based automation utility using Tkinter and task scheduling to automate repetitive internal workflows.",
      "Built and maintained an internal Test Automation Runner platform for daily regression suites through SCM-integrated pipelines.",
    ],
  },
  {
    company: "Dassault Systèmes",
    location: "Pune, India",
    role: "Software Engineering Intern",
    period: "March 2023 – August 2023",
    highlights: [
      "Developed a reusable percentage visualization component using JavaScript adopted across multiple internal web applications.",
      "Developed and maintained React.js-based user interfaces for internal enterprise applications.",
    ],
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    school: "Walchand College of Engineering, Sangli",
    period: "2019 – 2023",
    details: "CGPA: 7.8",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    school: "Creative Public School, Pune",
    period: "2019",
    details: "72%",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    school: "Creative Public School, Pune",
    period: "2017",
    details: "82%",
  },
];

export const projects = [
  {
    title: "AI-Powered Financial Statement Analyzer",
    description:
      "Built an end-to-end financial document intelligence platform using Python, Local LLaMA LLMs, Pandas, and PDF extraction libraries. Automated transaction extraction, data normalization, categorization, and balance-sheet generation through AI-powered document understanding and RAG workflows.",
    tags: ["Python", "LLM", "RAG", "Pandas", "PDF Extraction"],
  },
  {
    title: "IoT Agriculture Drone System",
    description:
      "Designed and developed a GPS-enabled agricultural drone with mobile-based control, automated fertilizer spraying, and real-time video monitoring. Awarded Rank 1 Academic Project at Walchand College of Engineering.",
    tags: ["IoT", "GPS", "Mobile Control", "Hardware"],
  },
  {
    title: "Workflow Automation Scheduler",
    description:
      "Developed a Python-based desktop application using Tkinter and task scheduling libraries to automate repetitive operational workflows with automated job execution, monitoring, and reporting.",
    tags: ["Python", "Tkinter", "Automation", "Desktop App"],
  },
];

export const awards = [
  "Best Performer Award – Quality Production, Dassault Systèmes",
  "Winner – WCE ACM Innovation Project Showcase 2022",
  "Rank 1 Academic Project – IoT Agriculture Drone System",
];

export const extracurriculars = [
  "Udemy Instructor with 14,420+ learners and a 4.4/5 average course rating",
  "Mentored 100+ engineering students through technical workshops and project guidance",
  "Technology Content Creator producing educational content on programming, AI, and engineering",
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
