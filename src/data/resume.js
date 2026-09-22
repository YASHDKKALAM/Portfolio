import profilePhoto from "../assets/YashKalam.JPG";
import linkedInPythonCert from "../assets/CertificateOfCompletion_Getting Started with Python-1.png";
import dsPythonCert from "../assets/Python.png";

export const profile = {
  name: "Yash Kalam",
  title: "Software Engineer",
  location: "Pune, India",
  phone: "+91 9715822928",
  email: "yashdkalam@gmail.com",
  linkedin: "https://linkedin.com/in/yash-kalam-885a1a208",
  photo: profilePhoto,
  summary:
    "Strategic Software Engineer skilled in application development, testing, and optimization. Excels at coordinating ground-up planning, programming, and implementation for core modules. Maintains strong object-oriented and software architecture fundamentals.",
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
    category: "Programming Languages",
    items: ["C", "C++", "JavaScript", "Python"],
  },
  {
    category: "Web Technologies",
    items: ["HTML", "CSS", "React"],
  },
  {
    category: "Testing & Debugging",
    items: [
      "Karma/Cheetah framework",
      "Debugging techniques",
      "Testing & troubleshooting",
    ],
  },
  {
    category: "Other Skills",
    items: [
      "Release management",
      "Quality assurance",
      "Customer support",
      "Effective communication",
    ],
  },
];

export const experience = [
  {
    company: "Dassault Systèmes",
    location: "Pune, India",
    role: "Software Engineer",
    period: "October 2023 – Present",
    highlights: [
      "Led software development, testing, and SDLC release management.",
      "Conducted code reviews to ensure coding standards and best practices.",
      "Resolved customer issues with workarounds and bug fixes.",
      "Improved code coverage from 9% to 85% using various testing frameworks.",
    ],
  },
  {
    company: "Dassault Systèmes",
    location: "Pune, India",
    role: "Software Engineering Intern",
    period: "March 2023 – August 2023",
    highlights: [
      "Learned internal tools and company processes.",
      "Contributed to enhancing the company's website with a visualizer.",
    ],
  },
];

export const education = [
  {
    degree: "B.Tech | Computer Science",
    school: "Walchand College of Engineering, Sangli",
    period: "Graduated: January 2023",
    details: "GPA: 1st Year 7.5/10, 2nd Year 8/10, 3rd Year 7.8/10, 4th Year 7.9/10",
  },
  {
    degree: "12th Standard",
    school: "Creative Public School, Pune",
    period: "January 2019",
  },
  {
    degree: "10th Standard",
    school: "Creative Public School, Pune",
    period: "January 2017",
  },
];

export const projects = [
  {
    title: "Wheat Classifier App",
    description:
      "Built a machine learning application for wheat seed classification with practical agricultural use cases.",
    tags: ["Machine Learning", "Application Development"],
  },
  {
    title: "Agricultural Drone",
    description:
      "Designed a drone prototype for spraying fertilizers — awarded First Prize at UCE ACM Innovation Project Showcase 2022.",
    tags: ["Hardware", "Innovation", "Agriculture"],
  },
  {
    title: "Car Buy & Sell Platform",
    description:
      "Used machine learning to create a price prediction model for vehicle sales on a buy-and-sell platform.",
    tags: ["Machine Learning", "Web Platform"],
  },
];

export const awards = [
  "First Prize, UCE ACM Innovation Project Showcase 2022 – Agricultural Drone Project",
  "India Book of Records 2023 – Recognition for travel vlogging in Aurangabad",
];

export const extracurriculars = [
  "Udemy Instructor – Rated 4.2/5 with 5K+ students and 23K+ watch time minutes",
  "YouTuber – 1.2K+ subscribers, 3.2K+ hours of content viewed",
];

export const languages = [
  { name: "Marathi", level: "First Language" },
  { name: "Hindi", level: "B1" },
  { name: "English", level: "A2" },
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
