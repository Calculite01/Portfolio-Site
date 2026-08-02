# Portfolio

> My personal developer portfolio, built to showcase projects, experience, and skills, with an AI chatbot that can answer visitor questions grounded in my actual project docs, resume, and LinkedIn.

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Gemini API](https://img.shields.io/badge/Gemini_API-4285F4?style=for-the-badge&logo=googlegemini&logoColor=white)](https://ai.google.dev/)
[![Pinecone](https://img.shields.io/badge/Pinecone-000000?style=for-the-badge)](https://www.pinecone.io/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

**Live:** https://portfolio-site-saadwajid.vercel.app/

---

## Overview

A single-page portfolio covering About, Experience, Projects, Skills, and Education, all driven from a typed content file so new roles/projects can be added without touching layout code. Built with Next.js 14, TypeScript, and Tailwind, with Framer Motion for scroll-triggered animations throughout.

## AI RAG Chatbot

The site includes a floating chat widget ("ask me anything") that lets visitors ask questions about my background and get answers grounded in my real content, not a generic LLM guessing from the model's training data.

**How it works:**
- All of my project READMEs, resume, and LinkedIn content are chunked and embedded using Gemini's `gemini-embedding-001` model, then stored in a Pinecone vector index.
- On each chat message, the visitor's question is embedded the same way and used to run a similarity search against Pinecone, retrieving the most relevant chunks.
- Those chunks are injected into the system prompt for Gemini's `gemini-3.5-flash`, which is instructed to answer only from that retrieved context, and to say it's not sure rather than guess if the context doesn't cover the question.
- Ingestion is a one-off script (`scripts/ingest.ts`), run manually whenever content changes, rather than something that runs on every request.

This means the chatbot's answers stay accurate to what's actually documented about my work, and it can be re-grounded any time just by re-running ingestion after updating the source content.

## Tech Stack

- **Frontend:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion
- **AI:** Google Gemini (`gemini-embedding-001` for embeddings, `gemini-3.5-flash` for generation)
- **Vector Database:** Pinecone
- **Hosting:** Vercel

## Sections

- **About** — background, focus areas, quick facts
- **Experience** — roles with linked project cards
- **Projects** — Statement2Sheet, ReceiptML, HomeGuard-MQTT, Komodo Hub
- **Skills** — languages, AI/ML, web & cloud
- **Education** — Coventry University + A-Levels, with academic highlights
- **Chatbot** — RAG-powered Q&A about the above, described in detail above
