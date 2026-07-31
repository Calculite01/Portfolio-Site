"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/data";

export default function ProjectCard({
  project,
  variant = "full",
  index = 0,
}: {
  project: Project;
  variant?: "full" | "compact";
  index?: number;
}) {
  const compact = variant === "compact";

  return (
    <motion.div
      initial={{ opacity: 0, y: compact ? 12 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
      className="h-full"
    >
      <Link
        href={`/projects/${project.slug}`}
        className={`group flex h-full flex-col rounded-xl border border-white/5 bg-bg-surface transition-colors hover:border-accent/30 ${
          compact ? "p-4" : "p-6 sm:p-8"
        }`}
      >
        <div className="flex items-start justify-between gap-3">
          <h3
            className={`font-display font-semibold text-ink ${
              compact ? "text-base" : "text-xl"
            }`}
          >
            {project.title}
          </h3>
          <ArrowUpRight
            size={compact ? 14 : 18}
            className="mt-1 shrink-0 text-ink-faint transition-colors group-hover:text-accent"
          />
        </div>

        <p
          className={`mt-1.5 text-accent ${compact ? "text-xs" : "text-sm"}`}
        >
          {project.tagline}
        </p>

        {!compact && (
          <p className="mt-3 text-sm text-ink-muted">{project.description}</p>
        )}

        <div className={`flex flex-wrap gap-2 ${compact ? "mt-3" : "mt-5"} mt-auto pt-3`}>
          {project.stack.map((tech) => (
            <span
              key={tech}
              className={`rounded-full border border-white/10 font-mono text-ink-muted ${
                compact ? "px-2 py-0.5 text-[10px]" : "px-3 py-1 text-xs"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}