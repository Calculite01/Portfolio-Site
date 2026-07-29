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
];

// --- Add new roles by appending an object to this array ---
export const experience: Experience[] = [];

// --- Add/adjust skill groups here ---
export const skills: SkillGroup[] = [];

// --- Add new entries here (most recent first) ---
export const education: EducationItem[] = [];

export const links = {
  github: "https://github.com/Calculite01",
  linkedin: "https://www.linkedin.com/in/saad-wajid-a3b8b0354/",
  email: "saadwajid401@gmail.com",
  resumeUrl: "/resume.pdf",
};
