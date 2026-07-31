"use client";

import { motion } from "framer-motion";
import { experience, getProjectBySlug } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-20">
      <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
        Experience
      </h2>

      <div className="mt-12 max-w-4xl">
        {experience.map((job, i) => {
          const linkedProjects = (job.projectSlugs ?? [])
            .map((slug) => getProjectBySlug(slug))
            .filter((p): p is NonNullable<typeof p> => Boolean(p));

          return (
            <motion.div
              key={`${job.role}-${i}`}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
              className="flex gap-6"
            >
              {/* marker column: flex's default align-items: stretch makes this
                  match the content column's height exactly, so the line
                  (flex-1) always reaches exactly to the next dot */}
              <div className="flex w-3.5 shrink-0 flex-col items-center">
                <span className="mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full bg-accent" />
                <div className="mt-1 w-px flex-1 border-l border-dotted border-white/20" />
              </div>

              <div className="flex-1 pb-10">
                <p className="font-mono text-xs text-ink-faint">{job.dates}</p>
                <h3 className="mt-1 font-display text-lg font-semibold text-ink">
                  {job.role} · {job.org}
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink-muted">
                  {job.bullets.map((bullet, j) => (
                    <li key={j}>{bullet}</li>
                  ))}
                </ul>

                {linkedProjects.length > 0 && (
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {linkedProjects.map((project, j) => (
                      <ProjectCard
                        key={project.slug}
                        project={project}
                        variant="compact"
                        index={j}
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}

        {false && <div className="flex gap-6">
          <div className="flex w-3.5 shrink-0 justify-center">
            <div className="w-px border-l border-dotted border-white/20" />
          </div>
          <div className="h-16 flex-1 sm:h-24" />
        </div>}
      </div>
    </section>
  );
}