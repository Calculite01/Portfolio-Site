"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-20">
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
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item, j) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.3,
                    delay: i * 0.08 + j * 0.04,
                    ease: "easeOut",
                  }}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-ink-muted transition-colors hover:border-accent/40 hover:text-ink"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}