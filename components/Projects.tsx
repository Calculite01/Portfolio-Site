"use client";

import { projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-20">
      <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
        Featured projects
      </h2>
      <p className="mt-2 text-ink-muted">
        A few things I&apos;ve built end to end. Click a card for the full
        write-up.
      </p>

      <div className="mt-12 grid auto-rows-fr gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}