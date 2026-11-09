export interface ProjectItem {
  id: number | string;
  title: string;
  category: string;
  description: string;
  subDescription?: string[];
  tags: { id: number; name: string; path?: string }[];
  href: string;
  github: string;
  image: string;
}

export interface ExperienceItem {
  date: string;
  title: string;
  job: string;
  link?: string;
  subTitle?: string;
  contents: string[];
}

export interface SkillItem {
  n: string;
  s: string;
  c: string;
  ring: number;
  g: string;
  d: string;
}

export const STUDENT_PROFILE = {
  name: "Mohit Singh",
  initials: "MS",
  title: "Full Stack & AI Developer",
  roleHeadline: "A Developer Dedicated to Crafting Modern Web & AI Systems",
  status: "Full Stack Engineer & AI Enthusiast",
  company: "Probey Services",
  experienceYears: "1+ Years",
  projectsCompleted: "7+ Featured Projects",
  summary:
    "Full Stack & AI Developer dedicated to clean architecture, intuitive web design, and high-performance digital systems. Focused on crafting secure, modern, and intuitive web experiences through thoughtful engineering.",
  aboutPitch:
    "I care deeply about the details behind modern digital products: thoughtful architecture, accessible interfaces, peak performance, and experiences that feel effortless to use.",
  codeTerminal: [
    'const developer = {',
    '  name: "Mohit Singh",',
    '  role: "Full Stack & AI Engineer",',
    '  skills: ["React", "Next.js", "Node.js", "AI"],',
    '  passion: "Crafting High-Performance Apps",',
    '  available: true,',
    '};',
    '',
    '// Initializing neural systems...',
    'await launchPortfolio(developer);'
  ],
  email: "singhmohit101103@gmail.com",
  github: "https://github.com/Intruder9211",
  linkedin: "https://www.linkedin.com/in/mohit-singhintruder9211/",
  instagram: "https://www.instagram.com/clownbros/",
  stats: [
    { value: "7+", label: "Featured Projects" },
    { value: "15+", label: "Technologies Mastered" },
    { value: "100%", label: "Responsive & Modern" },
    { value: "24/7", label: "Open to Collaborate" }
  ],
  coreValues: [
    {
      num: "01",
      title: "Structure First",
      color: "lavender",
      description: "Reusable components, strict types, and clear boundaries keep code clean, testable, and effortless to scale."
    },
    {
      num: "02",
      title: "Fast & Accessible",
      color: "mint",
      description: "Performance budgets and WCAG accessibility standards are treated as core features of every build, not afterthoughts."
    },
    {
      num: "03",
      title: "Secure by Habit",
      color: "aqua",
      description: "Input sanitization, minimal dependency surface areas, role-based protection, and secure data handling are standard."
    }
  ]
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    date: "Mar 2026 - Present",
    title: "Web Developer",
    job: "Probey Services",
    link: "https://probeyservices.com",
    contents: [
      "Developing and scaling modern full-stack web applications and client portals using React.js, Next.js, and TypeScript.",
      "Building reusable, accessible UI component systems and optimizing web applications for maximum speed and performance.",
      "Integrating RESTful APIs, modern state management solutions, and ensuring cross-browser and responsive compatibility."
    ]
  },
  {
    date: "Aug 2025 - Feb 2026",
    title: "WordPress Developer",
    job: "Shri KD Tour & Travels",
    link: "https://kdtempotravel.com/",
    contents: [
      "Designed, customized, and maintained full-featured tour and travel booking web applications with responsive layouts.",
      "Developed dynamic travel booking inquiry funnels, custom contact workflows, and integrated payment gateways.",
      "Implemented technical SEO best practices, meta architectures, and site speed optimizations to improve search ranking and customer conversion."
    ]
  },
  {
    date: "2021 - 2025",
    title: "Bachelor of Technology (B.Tech)",
    job: "R.D. Engineering College (RDEC)",
    subTitle: "Computer Science & Engineering",
    contents: [
      "Graduated in Computer Science & Engineering with a comprehensive foundation in Data Structures, Algorithms, Software Engineering, and Database Management.",
      "Architected independent full-stack web projects, explored AI integrations, and mastered modern JavaScript/TypeScript ecosystems.",
      "Actively participated in technical workshops, coding challenges, and collaborative software engineering projects."
    ]
  }
];

export const SKILLS_DATA: SkillItem[] = [
  { n: "React.js", s: "Rx", c: "#0ea5c9", ring: 1, g: "Frontend", d: "Composable, reusable components for high-speed dynamic interfaces." },
  { n: "TypeScript", s: "TS", c: "#3178c6", ring: 1, g: "Frontend", d: "Typed code that stays readable, clean, and safe as architectures scale." },
  { n: "Next.js", s: "Nx", c: "#94a3b8", ring: 1, g: "Frontend", d: "Server-side rendering, edge performance, and production routing." },
  { n: "Node.js", s: "No", c: "#3c873a", ring: 1, g: "Backend", d: "High-throughput asynchronous server logic, microservices, and APIs." },
  { n: "Tailwind CSS", s: "Tw", c: "#06a5c4", ring: 2, g: "Frontend", d: "Modern utility-first styling keeping design systems fast and cohesive." },
  { n: "JavaScript", s: "JS", c: "#f59e0b", ring: 2, g: "Frontend", d: "The core engine powering dynamic DOM interactions and algorithms." },
  { n: "MongoDB", s: "Mg", c: "#00a35c", ring: 2, g: "Backend", d: "Flexible document-based database for scalable modern web apps." },
  { n: "Express.js", s: "Ex", c: "#a855f7", ring: 2, g: "Backend", d: "Lightweight routing and middleware pipelines for backend APIs." },
  { n: "CSS3 / HTML5", s: "H5", c: "#e34f26", ring: 2, g: "Frontend", d: "Semantic, accessible structures, flexbox, grid, and CSS variables." },
  { n: "Git & GitHub", s: "Gt", c: "#f05032", ring: 2, g: "Tooling", d: "Version control for clean branching, code reviews, and CI/CD pipelines." },
  { n: "Gemini / AI", s: "AI", c: "#c084fc", ring: 1, g: "AI & ML", d: "Integrating LLMs, prompt engineering, and intelligent agent workflows." },
  { n: "Three.js / 3D", s: "3D", c: "#38bdf8", ring: 2, g: "Frontend", d: "Interactive 3D scenes, WebGL shaders, and immersive web graphics." }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: "ClownBros",
    category: "SaaS & Web",
    description: "A modern digital transformation and technology agency designing and engineering high-impact web ecosystems.",
    subDescription: [
      "Engineered with TypeScript & React for high-speed dynamic rendering.",
      "Integrated interactive editorial sections, smooth animations, and seamless navigation.",
      "Full responsive design tailored across mobile, tablet, and desktop."
    ],
    href: "https://clownbrosdemo3.vercel.app/",
    github: "https://github.com/Intruder9211/clownbros",
    image: "/assets/projects/clownbros.jpg",
    tags: [
      { id: 1, name: "TypeScript", path: "/assets/logos/javascript.svg" },
      { id: 2, name: "React.js", path: "/assets/logos/react.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 4, name: "Vite", path: "/assets/logos/vitejs.svg" }
    ]
  },
  {
    id: 2,
    title: "ClownBros Dashboard",
    category: "Dashboard & Analytics",
    description: "A feature-packed enterprise admin portal & analytics engine for managing users, operations, and real-time business performance.",
    subDescription: [
      "Real-time metrics, data visualization, and interactive performance charts.",
      "Role-based access control, analytics filters, and live operational feeds.",
      "Built on robust TypeScript and clean component architecture."
    ],
    href: "https://clownbros-dashboard.vercel.app",
    github: "https://github.com/Intruder9211/clownbros-dashboard",
    image: "/assets/projects/clownbros_dashboard.jpg",
    tags: [
      { id: 1, name: "TypeScript", path: "/assets/logos/javascript.svg" },
      { id: 2, name: "React.js", path: "/assets/logos/react.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 4, name: "Node.js", path: "/assets/logos/javascript.svg" }
    ]
  },
  {
    id: 3,
    title: "ClownEaser",
    category: "Productivity & Tools",
    description: "A modern smart workflow automation suite designed to streamline processes, eliminate repetitive tasks, and boost team efficiency.",
    subDescription: [
      "Minimalistic, clutter-free UX built with modern frontend frameworks.",
      "Fast client-side state handling and instantaneous task automation pipelines.",
      "Deployed with optimized Vercel CI/CD pipelines."
    ],
    href: "https://clowneaser.vercel.app",
    github: "https://github.com/Intruder9211/clowneaser",
    image: "/assets/projects/clowneaser.jpg",
    tags: [
      { id: 1, name: "TypeScript", path: "/assets/logos/javascript.svg" },
      { id: 2, name: "React.js", path: "/assets/logos/react.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 4, name: "Vite", path: "/assets/logos/vitejs.svg" }
    ]
  },
  {
    id: 4,
    title: "ClownKosh",
    category: "FinTech & Utility",
    description: "A unified digital treasury & liquidity platform for real-time asset management, cash flow tracking, and secure transfers.",
    subDescription: [
      "Secure financial data handling and intuitive transaction trackers.",
      "Responsive design with instant calculation and real-time ledger updates.",
      "Built with modern JavaScript, scalable architecture, and clean styling."
    ],
    href: "https://clownkosh.vercel.app",
    github: "https://github.com/Intruder9211/clownkosh",
    image: "/assets/projects/clownkosh.jpg",
    tags: [
      { id: 1, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 2, name: "React.js", path: "/assets/logos/react.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 4, name: "Node.js", path: "/assets/logos/javascript.svg" }
    ]
  },
  {
    id: 5,
    title: "ClownMart",
    category: "E-Commerce",
    description: "A scalable e-commerce marketplace featuring luxury gadget discovery, dynamic cart management, and streamlined checkout.",
    subDescription: [
      "Modern storefront with dynamic product catalog and category filters.",
      "Integrated shopping cart, persistent storage, and responsive layout.",
      "Engineered using TypeScript and Tailwind CSS for peak speed."
    ],
    href: "https://theclownmart.vercel.app/",
    github: "https://github.com/Intruder9211/clownmart",
    image: "/assets/projects/clownmart.jpg",
    tags: [
      { id: 1, name: "TypeScript", path: "/assets/logos/javascript.svg" },
      { id: 2, name: "Next.js", path: "/assets/logos/react.svg" },
      { id: 3, name: "React.js", path: "/assets/logos/react.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" }
    ]
  },
  {
    id: 6,
    title: "ClownFounder",
    category: "Startup & Community",
    description: "A digital venture ecosystem where startup founders secure funding, pitch ideas, match with investors, and accelerate growth.",
    subDescription: [
      "Interactive pitch deck showcase and investor matchmaking network.",
      "Built on modern TypeScript for rapid scaling and maintainability.",
      "Smooth animations and mobile-first responsive design."
    ],
    href: "https://theclownfounder.vercel.app/",
    github: "https://github.com/Intruder9211/clownfounder",
    image: "/assets/projects/clownfounder.jpg",
    tags: [
      { id: 1, name: "TypeScript", path: "/assets/logos/javascript.svg" },
      { id: 2, name: "Next.js", path: "/assets/logos/react.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 4, name: "React.js", path: "/assets/logos/react.svg" }
    ]
  },
  {
    id: 7,
    title: "AI Interview Mocker",
    category: "AI & ML",
    description: "An intelligent AI-powered web platform simulating real technical & behavioral interview scenarios with dynamic speech evaluation.",
    subDescription: [
      "Developed an AI-powered module that generates realistic interview questions based on job roles.",
      "Integrated Gemini & speech processing for dynamic answer scoring and instant feedback.",
      "Implemented role-based user authentication and candidate performance dashboard.",
      "Built a responsive UI with Tailwind CSS and React.js."
    ],
    href: "https://ai-interview-mocker-tau-snowy.vercel.app/",
    github: "https://github.com/Intruder9211/AI-Interview-Mocker",
    image: "/assets/projects/ai_interview.jpg",
    tags: [
      { id: 1, name: "React.js", path: "/assets/logos/react.svg" },
      { id: 2, name: "Gemini", path: "/assets/logos/vitejs.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 4, name: "Node.js", path: "/assets/logos/javascript.svg" }
    ]
  }
];

// Retain legacy aliases for backward compatibility across components
export const PERSONAL_PROJECTS = PROJECTS;
export const CLIENT_PROJECTS_PROBEY = PROJECTS;
