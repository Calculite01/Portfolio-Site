import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { projects, getProjectBySlug } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-bg px-6 py-16 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-accent"
        >
          <ArrowLeft size={16} /> Back to projects
        </Link>

        <h1 className="mt-6 font-display text-3xl font-semibold text-ink sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-2 text-accent">{project.tagline}</p>
        <p className="mt-4 text-ink-muted">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-bg transition-colors hover:bg-accent-soft"
            >
              Live demo <ArrowUpRight size={14} />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md border border-white/10 px-4 py-2 text-sm text-ink-muted transition-colors hover:border-accent/50 hover:text-accent"
            >
              <Github size={16} /> View repo
            </a>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-ink-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-12 space-y-8 border-t border-white/5 pt-10">
          <section>
            <p className="font-mono text-xs uppercase tracking-wide text-accent">
              Problem
            </p>
            <p className="mt-2 leading-relaxed text-ink-muted">
              {project.problem}
            </p>
          </section>

          <section>
            <p className="font-mono text-xs uppercase tracking-wide text-accent">
              Approach
            </p>
            <p className="mt-2 leading-relaxed text-ink-muted">
              {project.approach}
            </p>
          </section>

          {project.challenges && (
            <section>
              <p className="font-mono text-xs uppercase tracking-wide text-accent">
                Challenges
              </p>
              <p className="mt-2 leading-relaxed text-ink-muted">
                {project.challenges}
              </p>
            </section>
          )}

          {project.learnings && (
            <section>
              <p className="font-mono text-xs uppercase tracking-wide text-accent">
                What I&apos;d do differently
              </p>
              <p className="mt-2 leading-relaxed text-ink-muted">
                {project.learnings}
              </p>
            </section>
          )}
        </div>
      </div>
    </main>
  );
}
