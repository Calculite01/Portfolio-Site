export type Project = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  approach: string;
  stack: string[];
  demoUrl?: string;
  repoUrl?: string;
};

export type Experience = {
  role: string;
  org: string;
  dates: string;
  bullets: string[];
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
    slug: "conservation-platform",
    title: "Conservation Platform",
    summary:
      "A full-stack web platform supporting conservation efforts with data tracking and collaboration tools.",
    problem: "TODO: what specific problem did this solve, for whom?",
    approach: "TODO: your architecture / key technical decisions",
    stack: ["TODO"],
    demoUrl: "",
    repoUrl: "",
  },
  {
    slug: "pdf-to-csv-ai",
    title: "AI PDF-to-CSV Converter",
    summary:
      "An AI-powered tool that extracts structured tabular data from PDFs into clean CSV output.",
    problem: "TODO: what made this hard? inconsistent layouts, accuracy validation, etc.",
    approach: "TODO: pipeline — parsing, extraction model, validation step",
    stack: ["TODO"],
    demoUrl: "",
    repoUrl: "",
  },
  // Add your next project here as a new object.
];

// --- Add new roles by appending an object to this array ---
export const experience: Experience[] = [
  {
    role: "TODO: Role",
    org: "TODO: Organization",
    dates: "TODO: Month YYYY – Month YYYY",
    bullets: ["TODO: outcome-focused bullet, not a task list"],
  },
];

// --- Add/adjust skill groups here ---
export const skills: SkillGroup[] = [
  {
    category: "Languages & Frameworks",
    items: ["TypeScript", "Python", "React", "Next.js"],
  },
  {
    category: "AI / ML",
    items: ["RAG pipelines", "Embeddings", "Prompt evaluation", "LLM APIs"],
  },
  {
    category: "Backend & Infra",
    items: ["Node.js", "PostgreSQL", "REST APIs", "Vercel"],
  },
];

// --- Add new entries here (most recent first) ---
export const education: EducationItem[] = [
  {
    school: "Coventry University",
    program: "BSc Computer Science with Artificial Intelligence",
    dates: "Sep 2024 – TODO grad date",
    notes: "TODO: relevant coursework, if it adds signal",
  },
];

export const links = {
  github: "https://github.com/Calculite01",
  linkedin: "https://www.linkedin.com/in/saad-wajid-a3b8b0354/",
  email: "saadwajid401@gmail.com",
  resumeUrl: "/resume.pdf",
};


