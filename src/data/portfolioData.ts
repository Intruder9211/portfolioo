export interface ProjectItem {
  id: string;
  title: string;
  client?: string;
  category: "Client Work" | "Personal Project";
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  metrics?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  companyType: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export const STUDENT_PROFILE = {
  name: "Alex Dev",
  title: "Fullstack Engineer & Creative Web Developer",
  status: "Final Year Tech Student & Software Engineer (1+ Yr Exp)",
  company: "Probey Services",
  experienceYears: "1+ Years",
  projectsCompleted: "20+",
  clientProjectsCount: "14+",
  personalProjectsCount: "6+",
  summary:
    "Computer Science / Tech undergraduate with 1+ year of production experience delivering 14+ client-facing web applications at Probey Services. Specialized in Next.js, TypeScript, robust fullstack APIs, dynamic motion, and responsive frontend architectures.",
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Associate Software Engineer / Frontend Developer",
    company: "Probey Services",
    companyType: "IT Consulting & Service Solutions",
    period: "2024 - Present (1+ Year)",
    location: "Hybrid / On-site",
    description:
      "Engineered, scaled, and maintained high-performance client web applications across e-commerce, healthcare portals, and internal enterprise dashboards. Spearheaded frontend transitions to Next.js App Router and reusable component systems.",
    achievements: [
      "Delivered 14+ distinct client projects on schedule with 99.8% customer satisfaction rate.",
      "Optimized Core Web Vitals across client portals, slashing average page load times by 42%.",
      "Created standardized UI component library adopted across 5 internal cross-functional engineering teams.",
      "Collaborated directly with international stakeholders and clients during sprint grooming and requirement engineering.",
    ],
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST APIs", "Node.js", "PostgreSQL", "Git"],
  },
  {
    role: "Software Engineering Intern",
    company: "Probey Services",
    companyType: "Service-Based Tech Firm",
    period: "Early 2024 (6 Months)",
    location: "On-site",
    description:
      "Contributed to building responsive web interfaces, API integrations, and bug remediation for SME client web applications.",
    achievements: [
      "Assisted in delivering 3 full-stack client web portals from wireframe to production deployment.",
      "Implemented comprehensive form validation workflows and role-based authentication with JWT.",
    ],
    skills: ["JavaScript (ES6+)", "React.js", "CSS3 / Sass", "Express.js", "MongoDB"],
  },
];

export const PERSONAL_PROJECTS: ProjectItem[] = [
  {
    id: "p-1",
    title: "DevForge - AI Code Assistant",
    category: "Personal Project",
    description:
      "Interactive code synthesis playground integrating Gemini & OpenAI APIs with real-time Monaco Editor and syntax evaluation.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API", "Monaco Editor"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    metrics: "250+ active monthly developers",
  },
  {
    id: "p-2",
    title: "ChronoTask - Distributed Kanban",
    category: "Personal Project",
    description:
      "Collaborative project management board featuring optimistic UI updates, drag-and-drop physics, and WebSockets live sync.",
    tags: ["React", "Zustand", "Node.js", "Socket.io", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "p-3",
    title: "Aura Motion 3D - Creative Portfolio",
    category: "Personal Project",
    description:
      "Experimental 3D portfolio featuring Three.js procedural particle spheres, GSAP scroll timelines, and Lenis inertia physics.",
    tags: ["Next.js", "Three.js", "GSAP", "Lenis", "Framer Motion"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "p-4",
    title: "CampusConnect - Student Hub",
    category: "Personal Project",
    description:
      "Open-source university community portal enabling peer resource exchange, past paper archives, and verified student discussion forums.",
    tags: ["Next.js 15", "Supabase", "Tailwind CSS", "Prisma"],
    githubUrl: "https://github.com",
  },
  {
    id: "p-5",
    title: "CryptoPulse - Market Telemetry",
    category: "Personal Project",
    description:
      "Real-time cryptocurrency ticker and algorithmic indicator dashboard consuming Binance and CoinGecko streaming WebSockets.",
    tags: ["React", "Chart.js", "WebSockets", "Tailwind CSS"],
    githubUrl: "https://github.com",
  },
  {
    id: "p-6",
    title: "SmartDoc - AI PDF Analyzer",
    category: "Personal Project",
    description:
      "Vector-search enabled document intelligence tool allowing users to upload research papers and query them with contextual RAG.",
    tags: ["Python", "FastAPI", "React", "LangChain", "ChromaDB"],
    githubUrl: "https://github.com",
  },
];

export const CLIENT_PROJECTS_PROBEY: ProjectItem[] = [
  {
    id: "c-1",
    title: "Apex Logistics - Fleet Tracking Portal",
    client: "Global Cargo Ltd via Probey Services",
    category: "Client Work",
    description:
      "Fullstack GPS telemetry dashboard providing live geofencing alerts, driver dispatch schedules, and automated fuel expenditure audits.",
    tags: ["Next.js", "Google Maps API", "Express.js", "PostgreSQL", "Tailwind"],
    metrics: "Managing 1,200+ freight vehicles across 4 regions",
  },
  {
    id: "c-2",
    title: "MediCare Plus - Patient EHR System",
    client: "Regional Healthcare Network via Probey Services",
    category: "Client Work",
    description:
      "HIPAA-compliant medical records management portal with digital appointment booking, telemedicine video integration, and role-based permissions.",
    tags: ["React", "TypeScript", "Node.js", "WebRTC", "PostgreSQL"],
    metrics: "Serving 15,000+ monthly clinical consultations",
  },
  {
    id: "c-3",
    title: "Zenith Retail - Omnichannel E-commerce",
    client: "Lifestyle Brand via Probey Services",
    category: "Client Work",
    description:
      "High-conversion multi-currency storefront with headless Shopify integration, instantaneous search filtering, and custom checkout flows.",
    tags: ["Next.js", "Shopify Storefront API", "Tailwind CSS", "Stripe"],
    metrics: "+34% conversion rate enhancement post-launch",
  },
  {
    id: "c-4",
    title: "FinMatrix - B2B Invoicing Engine",
    client: "Fintech Startup via Probey Services",
    category: "Client Work",
    description:
      "Automated recurring subscription billing and tax compliance engine with multi-tenant dashboard and PDF generator.",
    tags: ["Next.js", "TypeScript", "Stripe Billing", "Prisma", "AWS S3"],
  },
  {
    id: "c-5",
    title: "EduSphere - LMS Courseware Portal",
    client: "EdTech Institute via Probey Services",
    category: "Client Work",
    description:
      "Interactive learning platform with video streaming protection, gamified quiz modules, and instructor gradebook analytics.",
    tags: ["React", "Tailwind CSS", "HLS Video", "Node.js", "MongoDB"],
  },
  {
    id: "c-6",
    title: "PropFinder - Real Estate MLS Platform",
    client: "Realty Agency via Probey Services",
    category: "Client Work",
    description:
      "Interactive property discovery engine with map polygon spatial search, 360-degree virtual tour viewers, and mortgage calculators.",
    tags: ["Next.js", "Mapbox GL", "TypeScript", "REST APIs"],
  },
  {
    id: "c-7",
    title: "DineCraft - Restaurant POS & Ordering",
    client: "Hospitality Group via Probey Services",
    category: "Client Work",
    description:
      "Contactless QR code table ordering web app paired with kitchen display systems and thermal printer hardware integrations.",
    tags: ["React", "WebSockets", "Tailwind CSS", "PWA"],
  },
  {
    id: "c-8",
    title: "AeroSecure - Cybersecurity Audit Suite",
    client: "Enterprise Client via Probey Services",
    category: "Client Work",
    description:
      "Vulnerability assessment dashboard visualizing network threat topologies and generating automated compliance reports.",
    tags: ["Next.js", "D3.js", "Tailwind CSS", "Node.js"],
  },
  {
    id: "c-9",
    title: "Verve Fashion - Lookbook & AR Viewer",
    client: "Apparel Boutique via Probey Services",
    category: "Client Work",
    description:
      "Luxury editorial digital catalog with WebGL 3D garment inspection and instant sizing recommendation widgets.",
    tags: ["Three.js", "Next.js", "Framer Motion", "Tailwind"],
  },
  {
    id: "c-10",
    title: "OmniSupply - Inventory ERP Portal",
    client: "Wholesale Distributor via Probey Services",
    category: "Client Work",
    description:
      "Warehouse stock-keeping software with barcode scanner compatibility, automated purchase order triggers, and supplier sync.",
    tags: ["TypeScript", "React", "PostgreSQL", "Express.js"],
  },
  {
    id: "c-11",
    title: "FitPulse - Fitness Booking System",
    client: "Gym Franchise via Probey Services",
    category: "Client Work",
    description:
      "Mobile-first member portal for scheduling HIIT sessions, personal trainer calendars, and biometric milestone tracking.",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "Prisma"],
  },
  {
    id: "c-12",
    title: "CleanWatt - Solar Energy Monitoring",
    client: "Renewable Energy Corp via Probey Services",
    category: "Client Work",
    description:
      "IoT solar panel telemetry platform monitoring real-time kilowatt generation, battery health, and grid export dividends.",
    tags: ["React", "Chart.js", "MQTT", "Node.js"],
  },
  {
    id: "c-13",
    title: "HireMatch - Applicant Tracking System",
    client: "Recruitment Firm via Probey Services",
    category: "Client Work",
    description:
      "Talent pipeline dashboard with drag-and-drop candidate stages, automated interview scheduling, and AI resume screening.",
    tags: ["Next.js", "PostgreSQL", "Tailwind CSS", "SendGrid"],
  },
  {
    id: "c-14",
    title: "UrbanTransit - Smart Commute Booking",
    client: "Municipal Transit via Probey Services",
    category: "Client Work",
    description:
      "Public transportation route calculator with live bus arrival predictions, contactless mobile ticketing, and pass renewals.",
    tags: ["Next.js", "Mapbox", "Redis", "TypeScript"],
  },
];
