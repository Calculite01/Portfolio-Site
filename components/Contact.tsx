"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { links } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="rounded-xl border border-white/5 bg-bg-surface p-10 text-center"
      >
        <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
          Let&apos;s talk
        </h2>
        <p className="mx-auto mt-3 max-w-md text-ink-muted">
          Open to internship opportunities in full-stack and AI engineering.
          Easiest way to reach me is email.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${links.email}`}
            className="flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-accent-soft"
          >
            <Mail size={16} /> {links.email}
          </a>
          <a
            href={links.github}
            className="text-ink-muted transition-colors hover:text-accent"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href={links.linkedin}
            className="text-ink-muted transition-colors hover:text-accent"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </motion.div>

      <p className="mt-16 text-center font-mono text-xs text-ink-faint">
        built by saad wajid — deployed on vercel
      </p>
    </section>
  );
}
