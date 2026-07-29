"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

type Message = { role: "user" | "assistant"; content: string };

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [showLabel, setShowLabel] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hey — ask me anything about Saad's projects, stack, or experience.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Fade the "ask me anything" label after a few seconds
  useEffect(() => {
    const timeout = setTimeout(() => setShowLabel(false), 4000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, open]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    const nextMessages: Message[] = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      // Calls the Next.js API route — server keeps the LLM key, does
      // retrieval against the site's own content, and returns a reply.
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const data = await res.json();
      setMessages([
        ...nextMessages,
        { role: "assistant", content: data.reply ?? "Sorry, something went wrong." },
      ]);
    } catch {
      setMessages([
        ...nextMessages,
        {
          role: "assistant",
          content: "Couldn't reach the server — try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex h-[420px] w-[320px] flex-col overflow-hidden rounded-xl border border-white/10 bg-bg-raised shadow-2xl sm:w-[360px]"
          >
            <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
              <p className="font-mono text-xs text-accent">ask-saad-anything</p>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="text-ink-muted hover:text-ink"
              >
                <X size={16} />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${
                    m.role === "user"
                      ? "ml-auto bg-accent text-bg"
                      : "bg-white/5 text-ink-muted"
                  }`}
                >
                  {m.content}
                </div>
              ))}
              {loading && (
                <div className="max-w-[85%] rounded-lg bg-white/5 px-3 py-2 text-sm text-ink-faint">
                  thinking…
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 border-t border-white/5 p-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Ask about a project…"
                className="flex-1 rounded-md bg-bg-surface px-3 py-2 text-sm text-ink outline-none placeholder:text-ink-faint"
              />
              <button
                onClick={sendMessage}
                aria-label="Send"
                className="rounded-md bg-accent p-2 text-bg transition-colors hover:bg-accent-soft"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-2">
        <AnimatePresence>
          {showLabel && !open && (
            <motion.span
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              transition={{ duration: 0.4 }}
              className="rounded-full border border-white/10 bg-bg-raised px-3 py-1.5 font-mono text-xs text-ink-muted shadow-lg"
            >
              ask me anything
            </motion.span>
          )}
        </AnimatePresence>

        <button
          onClick={() => {
            setOpen((o) => !o);
            setShowLabel(false);
          }}
          onMouseEnter={() => !open && setShowLabel(true)}
          aria-label="Open chat"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-bg shadow-lg shadow-accent/20 transition-transform hover:scale-105"
        >
          <MessageCircle size={22} />
        </button>
      </div>
    </div>
  );
}
