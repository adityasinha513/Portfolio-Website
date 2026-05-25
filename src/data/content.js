export const personalInfo = {
  name: "Aditya Sinha",
  email: "adityasinha513@gmail.com",
  phone: "+91-9459429011",
  resumePath: "/resume.pdf",
  summary:
    "Java Backend Engineer with enterprise experience building secure and scalable financial services applications using Spring Boot, REST APIs, and CI/CD workflows.",
  location: "Bengaluru, India",
};

export const socialLinks = {
  github: "https://github.com/adityasinha513",
  linkedin: "https://www.linkedin.com/in/aditya-sinha",
  leetcode: "https://leetcode.com/u/adityasinha513",
  email: "mailto:adityasinha513@gmail.com",
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const scrollSections = [
  "home",
  "skills",
  "experience",
  "work",
  "tech",
  "about",
  "contact",
];

export const whatIDo = [
  {
    title: "Backend Development",
    description:
      "Enterprise Java and Spring Boot services with REST APIs, JPA/Hibernate, and secure payment-domain workflows.",
    gradient: "from-cyan-500/20 to-blue-600/10",
    icon: "backend",
  },
  {
    title: "AI & Automation",
    description:
      "Spring AI integrations, fraud monitoring, LLM-powered analytics, and intelligent automation for fintech systems.",
    gradient: "from-purple-500/20 to-violet-600/10",
    icon: "ai",
  },
  {
    title: "System Design",
    description:
      "Microservices architecture, transactional consistency, distributed systems, and scalable service design.",
    gradient: "from-indigo-500/20 to-cyan-500/10",
    icon: "design",
  },
  {
    title: "DevOps & Cloud",
    description:
      "Docker, Jenkins CI/CD, Maven, Git, Linux, and Microsoft Azure for reliable build and deployment pipelines.",
    gradient: "from-teal-500/20 to-emerald-600/10",
    icon: "devops",
  },
];

export const techStackFeatured = [
  { name: "Java", icon: "java" },
  { name: "Spring Boot", icon: "springboot" },
  { name: "Python", icon: "python" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Docker", icon: "docker" },
  { name: "Azure", icon: "azure" },
  { name: "Git", icon: "git" },
  { name: "Redis", icon: "redis" },
];

export const experienceTimeline = [
  {
    id: "present",
    year: "Feb 2026 - Present",
    role: "System Engineer",
    company: "Infosys Ltd.",
    location: "Bengaluru",
    domain: "Financial Services / Banking",
    status: "Present",
    bullets: [
      "Build and maintain Java + Spring Boot backend services for enterprise banking and payment workflows covering REST API design, JPA/Hibernate persistence, request validation and global exception handling.",
      "Own unit and integration testing using JUnit and Mockito; run static code analysis via SonarQube to maintain quality gates before production deployments.",
      "Drive CI/CD pipelines with Jenkins, Maven and Git, contributing across build, code review and release validation cycles.",
      "Collaborate in Agile/Scrum ceremonies alongside senior engineers on a high-availability financial services platform.",
      "Analyze API logs and debug service-level issues to support production validation and incident resolution.",
    ],
    tech: ["Java", "Spring Boot", "JUnit", "Mockito", "Jenkins", "Maven", "Git", "CI/CD"],
  },
  {
    id: "trainee",
    year: "Sep 2025 - Feb 2026",
    role: "System Engineer Trainee",
    company: "Infosys Ltd.",
    location: "Mysore",
    domain: "Backend Development Training",
    bullets: [
      "Completed intensive backend development training in Java, Spring Boot, REST APIs, SQL and JPA/Hibernate.",
      "Built and tested backend applications using MySQL and MongoDB.",
      "Used JUnit and Mockito for testing and SonarQube for quality checks.",
      "Built frontend components using React.js and TypeScript for full-stack understanding.",
    ],
    tech: ["Java", "Spring Boot", "MySQL", "MongoDB", "React", "TypeScript"],
  },
  {
    id: "intern",
    year: "Jun 2023 - Jul 2023",
    role: "Technical Intern",
    company: "Translab.io",
    location: "Jammu",
    domain: "Cloud / DevOps Exposure",
    bullets: [
      "Worked with Linux-based development environments.",
      "Gained hands-on exposure to Microsoft Azure including VM deployment and VNet configuration.",
      "Utilized Docker to containerize environments and simplify setup.",
      "Improved understanding of cloud deployment, virtual networking and DevOps practices.",
    ],
    tech: ["Docker", "Azure", "Linux", "Networking"],
  },
];

export const projects = [
  {
    title: "FinPay - AI Fintech Platform",
    description:
      "Secure fintech backend with wallet management, P2P transfers, KYC, RBAC, ACID transactions, JWT auth, Redis caching, and AI-powered fraud monitoring using Spring AI.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Spring AI"],
    preview: "finpay",
    github: "https://github.com/adityasinha513",
    demo: "https://github.com/adityasinha513",
  },
  {
    title: "Audible Backend Platform",
    description:
      "Scalable Spring Boot REST APIs for audiobook catalog, purchases, and user libraries with JWT security, JPA/Hibernate, and Docker deployment.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "JWT", "Docker"],
    preview: "audible",
    github: "https://github.com/adityasinha513",
    demo: "https://github.com/adityasinha513",
  },
  {
    title: "Coding Profile Scraper",
    description:
      "Django backend aggregating coding statistics from LeetCode, Codeforces, and GitHub via BeautifulSoup and custom REST APIs.",
    tech: ["Python", "Django", "REST APIs", "BeautifulSoup"],
    preview: "scraper",
    github: "https://github.com/adityasinha513",
    demo: "https://github.com/adityasinha513",
  },
];

export const techStackCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: "java", tooltip: "Primary backend language" },
      { name: "Python", icon: "python", tooltip: "Scripting & Django" },
      { name: "C++", icon: "cplusplus", tooltip: "Systems programming" },
      { name: "JavaScript", icon: "javascript", tooltip: "Full-stack scripting" },
      { name: "SQL", icon: "sql", tooltip: "Relational queries" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Spring Boot", icon: "springboot", tooltip: "Microservices & REST" },
      { name: "REST APIs", icon: "api", tooltip: "API design" },
      { name: "Microservices", icon: "microservices", tooltip: "Distributed architecture" },
      { name: "Spring Security", icon: "springsecurity", tooltip: "Auth & authorization" },
      { name: "JWT", icon: "jwt", tooltip: "Token-based security" },
      { name: "JPA/Hibernate", icon: "hibernate", tooltip: "ORM persistence" },
      { name: "Swagger", icon: "swagger", tooltip: "OpenAPI documentation" },
    ],
  },
  {
    title: "Testing & Quality",
    skills: [
      { name: "JUnit", icon: "junit", tooltip: "Unit testing" },
      { name: "Mockito", icon: "mockito", tooltip: "Mocking framework" },
      { name: "SonarQube", icon: "sonar", tooltip: "Code quality analysis" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: "postgresql", tooltip: "Relational database" },
      { name: "MySQL", icon: "mysql", tooltip: "SQL backend data" },
      { name: "MongoDB", icon: "mongodb", tooltip: "Document store" },
      { name: "Redis", icon: "redis", tooltip: "Caching layer" },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "Docker", icon: "docker", tooltip: "Containerization" },
      { name: "Git", icon: "git", tooltip: "Version control" },
      { name: "Jenkins", icon: "jenkins", tooltip: "CI automation" },
      { name: "Maven", icon: "maven", tooltip: "Build automation" },
      { name: "Linux", icon: "linux", tooltip: "Server environments" },
      { name: "Azure", icon: "azure", tooltip: "Cloud platform" },
    ],
  },
  {
    title: "GenAI Tools",
    skills: [
      { name: "Spring AI", icon: "springai", tooltip: "LLM integration" },
      { name: "GitHub Copilot", icon: "copilot", tooltip: "AI pair programming" },
      { name: "ChatGPT", icon: "chatgpt", tooltip: "AI assistance" },
      { name: "Claude", icon: "claude", tooltip: "AI workflows" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "react", tooltip: "UI development" },
      { name: "TypeScript", icon: "typescript", tooltip: "Typed JavaScript" },
    ],
  },
];

export const aboutStats = [
  { value: "3+", label: "Projects Built" },
  { value: "8.02", label: "CGPA (JUIT)" },
  { value: "20+", label: "Technologies Worked With" },
  { value: "24/7", label: "Learning Mindset" },
];

const backendConsoleTags = [
  "Java",
  "Spring Boot",
  "Docker",
  "PostgreSQL",
  "REST API",
  "Redis",
  "CI/CD",
  "JWT + RBAC",
  "Jenkins",
];

const uniqueTags = [...new Set(backendConsoleTags)];

// WorkspaceScene owns the badge layer so Hero does not render a duplicate set.
export const floatingTech = [];
export const consoleFloatingTech = uniqueTags.slice(0, 8);
