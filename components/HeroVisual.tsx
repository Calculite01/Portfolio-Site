"use client";

// Minimal hero visual: a big glowing </> mark.
// Purely decorative — respects prefers-reduced-motion via the
// global CSS override in globals.css.

export default function HeroVisual() {
  return (
    <div className="relative mx-auto flex h-full w-full max-w-md items-center justify-center">
      <div
        aria-hidden="true"
        className="flex select-none items-center gap-2 font-mono text-[9rem] font-bold leading-none text-accent animate-[glowPulse_4s_ease-in-out_infinite]"
        style={{
          textShadow:
            "0 0 20px rgba(34,211,238,0.6), 0 0 60px rgba(34,211,238,0.4), 0 0 120px rgba(34,211,238,0.2)",
        }}
      >
        <span>{"<"}</span>
        <span>{"/"}</span>
        <span>{">"}</span>
      </div>
    </div>
  );
}