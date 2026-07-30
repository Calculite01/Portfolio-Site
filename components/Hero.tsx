"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import { Github, Linkedin, FileText } from "lucide-react";
import HeroVisual from "@/components/HeroVisual";

const taglines = [
  "full-stack engineer",
  "AI systems builder",
  "ships production-ready RAG pipelines",
];

function useTypingCycle() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = taglines[index % taglines.length];
    const speed = deleting ? 30 : 55;
    const pause = 1400;

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1));
        } else {
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        if (text.length > 0) {
          setText(current.slice(0, text.length - 1));
        } else {
          setDeleting(false);
          setIndex((i) => i + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, index]);

  return text;
}

export default function Hero() {
  const typed = useTypingCycle();

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-grid-fade px-6 sm:px-10 lg:px-20"
    >
      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-4 font-mono text-sm text-accent"
          >
            saad@dev:~$ whoami
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="font-display text-5xl font-semibold leading-tight text-ink text-glow sm:text-6xl md:text-7xl"
          >
            Saad Wajid
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-4 h-8 font-mono text-lg text-ink-muted sm:text-xl"
          >
            {typed}
            <span className="ml-1 inline-block w-2 animate-blink bg-accent align-middle">
              &nbsp;
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-6 max-w-2xl text-lg text-ink-muted"
          >
            I build full-stack products with AI baked into the workflow, not
            bolted on. Currently studying Computer Science with AI at Coventry
            University.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-accent-soft"
            >
              View projects
            </a>
            <a
               href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md border border-white/10 px-5 py-2.5 text-sm text-ink-muted transition-colors hover:border-accent/50 hover:text-accent"
            >
              <FileText size={16} /> Resume
            </a>
            <a
               href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-md border border-white/10 px-5 py-2.5 text-sm text-ink-muted transition-colors hover:border-accent/50 hover:text-accent"
            >
              <Github size={20} />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md border border-white/10 px-5 py-2.5 text-sm text-ink-muted transition-colors hover:border-accent/50 hover:text-accent"
            >
              <Linkedin size={20} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="hidden lg:block"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
