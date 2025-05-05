import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  tensorflow,
  pytorch,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "AI/ML Engineer",
    icon: mobile,
  },
  {
    title: "Cybersecurity Specialist",
    icon: backend,
  },
  {
    title: "Software Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Technical (Cyber Security & Machine Learning) Intern",
    company_name: "FortyTwo Labs",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - May 2025",
    points: [
      "Developed and implemented a Multi-Factor Authentication (MFA) system, enhancing security",
      "Planned secure authentication flows, reducing unauthorized access attempts by 40%",
      "Built ML models for anomaly detection and adaptive authentication, improving threat detection by 38%",
      "Reduced false positive alerts by 22% using behavior-based security insights",
    ],
  },
  {
    title: "Podcast Team Lead",
    company_name: "IEEE Pune Section",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Mar 2025 - Present",
    points: [
      "Headed a team of 10+ members to produce and manage podcasts representing 30+ colleges across Pune",
      "Curated content & coordinated with industry professionals and academic leaders to feature in podcasts",
      "Collaborated with cross-functional teams to ensure high-quality podcast production",
      "Managed project timelines and team coordination for successful podcast releases",
    ],
  },
  {
    title: "Freelance Developer & Maintainer",
    company_name: "Octa.in",
    icon: shopify,
    iconBg: "#383E56",
    date: "Feb 2025 - Present",
    points: [
      "Developed and applied key features for a niche real estate website",
      "Engineered and optimized search functionalities, minimizing load times by 25%",
      "Integrated advanced filtering and property comparison tools, enhancing user experience and retention",
      "Implemented responsive design and ensured cross-browser compatibility",
    ],
  },
];

const projects = [
  {
    name: "HireMe - Smart Diagnostic Employment Platform",
    description:
      "SIH 2024 Grand Finalist project that serves as an AI-powered job & course portal. Led the team in developing robust backend systems handling 1000+ real-time job profiles and live scoring algorithms. Optimized ML workflows for 87% accurate skill-based matches.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Multi-Agent AI System for Smart Recruitment",
    description:
      "Accenture Agentic AI Hackathon project that built a Multi-Agent System to automate niche hiring and screening workflows. Created 4 agents for resume parsing, skill evaluation, adaptive interviews, and background checks, achieving 89% job-candidate match accuracy.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
      {
        name: "ml",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "E-Yantra Innovation Challenge Project",
    description:
      "Regional Finalist project at IIT-Bombay that planned scalable backend architecture and integrated ML modules for personalized health tracking. Applied LLM-based solutions for real-time caregiver support through intelligent alerting.",
    tags: [
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "llm",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
