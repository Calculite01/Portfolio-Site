"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
        Skills &amp; stack
      </h2>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            className="rounded-xl border border-white/5 bg-bg-surface p-6"
          >
            <p className="font-mono text-xs uppercase tracking-wide text-accent">
              {group.category}
            </p>
            <ul className="mt-3 space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-ink-muted">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
