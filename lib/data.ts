export type Project = {
  slug: string;
  title: string;
  // One short sentence, e.g. "Full-stack conservation platform built for
  // wildlife NGOs." Shown on the card, under the title.
  tagline: string;
  // 1-3 sentences on what it does. Shown on the card.
  description: string;
  // Full detail-page content below.
  problem: string;
  approach: string;
  challenges?: string;
  learnings?: string;
  stack: string[];
  demoUrl?: string;
  repoUrl?: string;
};

export type Experience = {
  role: string;
  org: string;
  dates: string;
  bullets: string[];
  // Optional — slugs of projects worked on during this role.
  // Renders as compact linked project cards under the bullets.
  projectSlugs?: string[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type EducationItem = {
  school: string;
  program: string;
  dates: string;
  notes?: string;
};

// --- Add new projects by appending an object to this array ---
export const projects: Project[] = [
  {
    slug: "pdf-to-csv-ai",
    title: "Statement2Sheet",
    tagline:
      "AI tool that turns messy bank statement PDFs into clean, ready-to-use spreadsheets.",
    description:
      "Built for a small accounting firm that was manually retyping client bank statements into CSV every month. Users drop in a PDF and get a structured spreadsheet back in seconds, with no manual re-entry.",
    problem:
      "Bank statements come as PDFs laid out for humans, not spreadsheets. At the firm this was built for, ~70% of clients sent statements as PDFs, and manual conversion was taking ~30 minutes per statement across 50-100 statements a month. Every bank also uses a different column layout, so a fixed schema breaks constantly.",
    approach:
      "PDFs are processed entirely in memory and sent to Google Gemini with instructions to extract every transaction table as raw JSON, preserving the statement's own columns. Rather than demanding one exact JSON shape back, the server parses defensively, locating the row data wherever it appears and reading each row's keys as-is, then derives spreadsheet columns from the union of keys actually present. The spreadsheet itself is generated client-side, so the server's job stops at returning JSON, and the whole system is stateless with no database or stored files.",
    challenges:
      "Early prototypes had a ~50% failure rate from rigid schema assumptions and inconsistent LLM JSON formatting. Fixed this by combining defensive parsing, dynamic column-key derivation, and an automated multi-model fallback chain that retries against alternate Gemini models if the primary one is at capacity or deprecated, bringing reliability to virtually 100% across tested layouts.",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Google Gemini API", "xlsx", "papaparse", "Vercel"],
    demoUrl: "https://statement2sheet.vercel.app/",
  },
  {
    slug: "receiptml",
    title: "ReceiptML",
    tagline:
      "AI-powered expense tracking app with a custom computer vision and OCR pipeline for receipts.",
    description:
      "An end-to-end expense tracking web app that uses custom computer vision, programmatic synthetic data generation, and an optimized OCR pipeline to automatically extract structured data from receipt images.",
    problem:
      "Manual expense logging is slow and error-prone, and training a reliable receipt-parsing model is hard because annotated real-world receipt datasets are scarce.",
    approach:
      "Users upload a receipt through a Flask-based web interface, which runs it through an OpenCV preprocessing stage (deskewing, noise reduction, adaptive thresholding, contour extraction), a custom-trained CV model that localizes key fields like merchant, date, and total, and an OCR + parsing stage that converts the localized text into validated structured data (e.g. Float for amounts, DateTime for dates) before persisting it to a SQLite database via SQLAlchemy. To get around the lack of annotated training data, a programmatic synthetic data generator renders varied receipt layouts, fonts, and distortions with pixel-perfect bounding box annotations to augment the real training set.",
    challenges:
      "Raw mobile uploads frequently suffered from shadows, rotation, and compression artifacts, which the preprocessing pipeline addresses through adaptive binarization and region localization to isolate high-density text clusters before OCR.",
    stack: ["Python", "Flask", "OpenCV", "PyTorch", "SQLite", "SQLAlchemy", "NumPy", "Pillow"],
  },
  {
    slug: "homeguard-mqtt",
    title: "HomeGuard-MQTT",
    tagline:
      "Distributed, multi-threaded IoT home security system built on the MQTT protocol.",
    description:
      "A real-time home security prototype connecting sensors, actuators, and a mobile dashboard through an MQTT publish/subscribe architecture to autonomously detect and respond to intrusions and fire hazards.",
    problem:
      "Home security systems typically treat detection as binary (alarm or no alarm) rather than escalating proportionally to threat level, and coordinating many independent sensors and actuators in real time requires a robust decoupled architecture.",
    approach:
      "Motion sensors, thermostats, a keypad, and a panic button publish to MQTT topics, while a central decision engine (control.py) subscribes to every topic and drives a rising 'Danger Value' that escalates the system's response, from quiet deterrents like floodlights up to hard countermeasures like barricades, loud alarms, and automatic emergency calls, resetting once the correct code is entered. A companion mobile GUI subscribes to all topics for live status and can publish control overrides. The `threading` module runs independent actuator logic (e.g. floodlight auto-off, sprinkler cycles) concurrently without blocking, and a custom integration test runner (runall.py) launches every publisher and subscriber via subprocess to validate the system end-to-end.",
    challenges:
      "The system relied on a public MQTT broker, which introduced latency under load; a private/self-hosted broker was identified as the top recommendation for future iterations.",
    learnings:
      "A private broker would remove the public-broker latency bottleneck, and the topic-based architecture would make it straightforward to expand into a fuller smart-home platform (lighting, locks, HVAC).",
    stack: ["Python", "MQTT", "paho-mqtt", "threading", "JSON"],
  },
  {
    slug: "conservation-platform",
    title: "Komodo Hub",
    tagline:
      "National digital platform for community-supported conservation of Indonesia's endangered species.",
    description:
      "A full-stack platform built from a live multi-stakeholder case study spanning schools, communities, researchers, and management, that brings students, researchers, and citizens together to participate in conservation programs, report species sightings, and access an educational knowledge base.",
    problem:
      "Despite significant government spending, species like the Javan Rhinoceros and Sumatran Tiger remain endangered due to habitat loss, pollution, and over-exploitation, and conservation efforts needed a way to involve schools, communities, and individual citizens rather than resting solely on government programs.",
    approach:
      "Built on Flask with SQLAlchemy modeling the relational schema (users, organisations, courses, assignments, sightings, chat, moderation) on a Neon serverless Postgres database, with Flask-WTF handling validated, CSRF-protected forms across login, registration, assignments, and contributions. The frontend uses server-rendered HTML/Jinja2 templates with a shared layout and JavaScript for dynamic elements like chat and games, deployed on Vercel connected to Neon. Delivered using Agile Scrum across 2 sprints (8 weeks) with a 5-person team rotating through Scrum Master, Product Owner, Frontend, Backend, and Support Developer roles each week.",
    challenges:
      "Requirements had to satisfy several distinct stakeholder groups (school teachers, students, community admins, conservation researchers, and platform management) at once rather than a single customer, which shaped the Risk Assessment Matrix and Product Backlog work done during Scrum Master and Product Owner rotations.",
    stack: ["Flask", "Python", "SQLAlchemy", "Neon (Postgres)", "Flask-WTF", "JavaScript", "HTML5", "CSS3", "Vercel"],
    demoUrl: "https://komodo-hub-eight.vercel.app/",
  },
];

// --- Add new roles by appending an object to this array ---
export const experience: Experience[] = [
  {
    role: "AI Engineering Apprentice",
    org: "The FAS Solutions",
    dates: "April 2025 – September 2025",
    bullets: [
      "Developed ReceiptML, an expense intelligence app using PyTorch and OpenCV for real-time document localization and OCR preprocessing",
      "Built a custom programmatic synthetic data generator to overcome annotated training data scarcity for the computer vision model",
    ],
    projectSlugs: ["receiptml"],
  },
  {
    role: "Team Lead & Core Systems Developer",
    org: "Coventry University — 4005CMD Integrative Project (SCGSSM, 6-person team)",
    dates: "2025",
    bullets: [
      "Led a 6-person engineering team to architect HomeGuard-MQTT, a real-time multi-threaded IoT security decision engine",
      "Designed the MQTT topic hierarchy and system architecture, and wrote control.py, the central logic engine driving all actuator decisions",
      "Delivered 57 GitHub commits (2,000+ lines) as the top contributor",
    ],
    projectSlugs: ["homeguard-mqtt"],
  },
  {
    role: "Rotating Scrum Lead & Full-Stack Developer",
    org: "Coventry University — 5005CMD Software Engineering (5-person team)",
    dates: "2025 (8-week Agile delivery)",
    bullets: [
      "Co-engineered Komodo Hub, a full-stack Flask/PostgreSQL conservation platform, rotating weekly through Scrum Master, Product Owner, Frontend, Backend, and Support Developer roles",
      "Implemented authentication, organisation access-code login, and password recovery, and designed the database schema in SQLAlchemy",
      "Built out the course ecosystem (workshops, assignments, submissions & grading, common room) and the manager's analytics dashboard",
    ],
    projectSlugs: ["conservation-platform"],
  },
  {
    role: "TODO: Role (e.g. Freelance Developer)",
    org: "Kings Accountants",
    dates: "TODO: Month YYYY – Month YYYY",
    bullets: [
      "Built and deployed Statement2Sheet, a production Next.js 14 & Gemini AI web app automating PDF bank statement conversions, saving 50+ hours of manual bookkeeping monthly",
      "Engineered a defensive parsing and multi-model AI fallback pipeline, reducing statement conversion failure rates from ~50% to near-zero",
    ],
    projectSlugs: ["pdf-to-csv-ai"],
  },
];

// --- Add/adjust skill groups here ---
export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "C/C++", "SQL", "Bash"],
  },
  {
    category: "AI / ML",
    items: ["OpenCV", "PyTorch", "Gemini API", "Scikit-Learn", "NumPy", "Pandas", "Azure AI"],
  },
  {
    category: "Web & Cloud",
    items: ["Next.js 14", "React", "Flask", "Node.js", "Tailwind CSS", "PostgreSQL", "Vercel", "REST APIs", "Git"],
  },
];

// --- Add new entries here (most recent first) ---
export const education: EducationItem[] = [
  {
    school: "Coventry University",
    program: "BSc Computer Science with Artificial Intelligence",
    dates: "Sep 2024 – TODO grad date",
    notes: "First Class, 90% average",
  },
];

export const links = {
  github: "https://github.com/TODO",
  linkedin: "https://linkedin.com/in/saad-wajid-a3b8b0354",
  email: "saadwajid401@gmail.com",
  resumeUrl: "/resume.pdf",
};

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}