"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-20">
      <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
        Education
      </h2>

      <div className="mt-8 space-y-6">
        {education.map((item, i) => (
          <motion.div
            key={`${item.school}-${i}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
            className="rounded-xl border border-white/5 bg-bg-surface p-6"
          >
            <p className="font-mono text-xs text-ink-faint">{item.dates}</p>
            <h3 className="mt-1 font-display text-lg font-semibold text-ink">
              {item.school}
            </h3>
            <p className="text-sm text-ink-muted">{item.program}</p>
            {item.notes && (
              <p className="mt-2 text-sm text-ink-faint">{item.notes}</p>
            )}
            {item.highlights && item.highlights.length > 0 && (
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-ink-muted">
                {item.highlights.map((highlight, j) => (
                  <li key={j}>{highlight}</li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}