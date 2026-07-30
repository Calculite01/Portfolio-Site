"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { ArrowUpRight, Github } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-20">
      <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
        Featured projects
      </h2>
      <p className="mt-2 text-ink-muted">
        A few things I&apos;ve built end to end.
      </p>

      <div className="mt-12 space-y-8">
        {projects.map((project, i) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
            className="group rounded-xl border border-white/5 bg-bg-surface p-6 transition-colors hover:border-accent/30 sm:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <h3 className="font-display text-xl font-semibold text-ink">
                {project.title}
              </h3>
              <div className="flex gap-3">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    className="text-ink-muted transition-colors hover:text-accent"
                    aria-label={`${project.title} repository`}
                  >
                    <Github size={18} />
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    className="flex items-center gap-1 text-sm text-accent transition-colors hover:text-accent-soft"
                  >
                    Live demo <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>

            <p className="mt-3 text-ink-muted">{project.summary}</p>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="font-mono text-xs uppercase tracking-wide text-accent">
                  Problem
                </p>
                <p className="mt-1 text-sm text-ink-muted">{project.problem}</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wide text-accent">
                  Approach
                </p>
                <p className="mt-1 text-sm text-ink-muted">{project.approach}</p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-ink-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
