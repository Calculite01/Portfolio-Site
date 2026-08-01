"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-20">
      <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
        Skills &amp; stack
      </h2>
      <p className="mt-3 max-w-xl text-ink-muted">
        What I build with, day to day, across AI, backend, and the web.
      </p>

      <div className="mt-14 divide-y divide-white/5 border-t border-white/5">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            className="grid gap-2 py-8 sm:grid-cols-[12rem_1fr] sm:gap-8"
          >
            <p className="font-mono text-xs uppercase tracking-wide text-accent">
              {group.category}
            </p>
            <p className="text-ink-muted">
              {group.items.map((item, j) => (
                <span key={item}>
                  <span className="text-ink transition-colors hover:text-accent">
                    {item}
                  </span>
                  {j < group.items.length - 1 && (
                    <span className="mx-2 text-ink-faint">·</span>
                  )}
                </span>
              ))}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}