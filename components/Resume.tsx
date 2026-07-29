"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { links } from "@/lib/data";

export default function Resume() {
  return (
    <section id="resume" className="mx-auto max-w-5xl px-6 py-24">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
          Resume
        </h2>
        <a
          href={links.resumeUrl}
          download
          className="flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-bg transition-colors hover:bg-accent-soft"
        >
          <Download size={16} /> Download PDF
        </a>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mt-8 overflow-hidden rounded-xl border border-white/5 bg-bg-surface"
      >
        {/* Replace /public/resume.pdf with your actual file — this embeds a live preview */}
        <iframe
          src={links.resumeUrl}
          title="Saad Wajid resume preview"
          className="h-[600px] w-full"
        />
      </motion.div>
    </section>
  );
}
