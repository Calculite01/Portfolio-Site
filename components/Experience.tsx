"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
        Experience
      </h2>

      <div className="mt-12 space-y-10 border-l border-white/10 pl-8">
        {experience.map((job, i) => (
          <motion.div
            key={`${job.role}-${i}`}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
            className="relative"
          >
            <span className="absolute -left-[2.15rem] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
            <p className="font-mono text-xs text-ink-faint">{job.dates}</p>
            <h3 className="mt-1 font-display text-lg font-semibold text-ink">
              {job.role} · {job.org}
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink-muted">
              {job.bullets.map((bullet, j) => (
                <li key={j}>{bullet}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
