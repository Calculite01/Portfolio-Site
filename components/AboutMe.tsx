"use client";

import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section id="about" className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <p className="font-mono text-xs uppercase tracking-wide text-accent">
          About
        </p>
        <h2 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">
          A bit about me
        </h2>
        <p className="mt-4 leading-relaxed text-ink-muted">
          {/* TODO: replace with your own paragraph — background, what got you
          into full-stack + AI, what you're currently focused on learning or
          building, what kind of role you're looking for. Keep it to one
          tight paragraph; this isn't the place for a full bio. */}
          Write a paragraph here about your background, what drew you to
          full-stack and AI engineering, and what you&apos;re currently
          focused on.
        </p>
      </motion.div>
    </section>
  );
}
