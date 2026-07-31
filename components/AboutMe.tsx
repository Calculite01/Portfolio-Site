"use client";

import { motion } from "framer-motion";

// Edit these to whatever's true for you — shown as a quick-glance list
// next to the About paragraph.
const quickFacts = [
  { label: "Based in", value: "Birmingham, United Kingdom" },
  { label: "Focus", value: "Full-stack + AI engineering" },
  { label: "Studying", value: "BSc Computer Science with AI" },
];

export default function AboutMe() {
  return (
    <section
      id="about"
      className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-20"
    >
      <h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
        A bit about me
      </h2>

      <div className="mt-10 grid gap-x-16 gap-y-10 lg:grid-cols-[1.4fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-5"
        >
          <p className="max-w-2xl text-lg leading-relaxed text-ink-muted">
            I&apos;m a Computer Science with Artificial Intelligence student
            at Coventry University, currently maintaining a First Class
            average of 90%. My interest in full-stack and AI engineering
            started from wanting to build things that actually save people
            time, not just technically impressive demos.
          </p>
          <p className="max-w-2xl text-lg leading-relaxed text-ink-muted">
            That&apos;s what led me to build tools like{" "}
            <span className="text-ink">Statement2Sheet</span>, automating PDF
            bank statement parsing for an accounting firm, and{" "}
            <span className="text-ink">ReceiptML</span>, a computer vision
            pipeline for expense tracking, during my AI Engineering
            Apprenticeship at The FAS Solutions.
          </p>
          <p className="max-w-2xl text-lg leading-relaxed text-ink-muted">
            I&apos;ve also led team-based engineering projects, from
            architecting a multi-threaded MQTT security system as team lead
            to co-building a national conservation platform as Scrum Lead,
            which taught me as much about clean architecture as it did about
            coordinating people. Right now I&apos;m focused on deepening my
            AI engineering skills while shipping production-ready full-stack
            work, and I&apos;m looking for internship opportunities where I
            can do both.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="self-start divide-y divide-white/5 border-t border-white/5"
        >
          {quickFacts.map((fact) => (
            <div
              key={fact.label}
              className="flex items-baseline justify-between gap-4 py-4"
            >
              <p className="font-mono text-[11px] uppercase tracking-wide text-ink-faint">
                {fact.label}
              </p>
              <p className="text-right text-sm text-ink">{fact.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}