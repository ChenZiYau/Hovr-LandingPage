"use client";

import { replacedTools } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-hovr-accent/[0.08] blur-[160px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-hovr-violet/[0.06] blur-[120px]" />
        <div className="absolute top-1/3 left-[15%] w-[300px] h-[300px] rounded-full bg-hovr-teal/[0.05] blur-[100px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(108,99,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-hovr-accent/10 border border-hovr-accent/20 mb-8 animate-fade-in">
          <div className="w-1.5 h-1.5 rounded-full bg-hovr-success animate-pulse" />
          <span className="text-xs font-mono font-medium text-hovr-text2 tracking-wide uppercase">
            Now in Development
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black leading-[0.95] tracking-tight mb-6 animate-fade-in delay-100">
          Stop{" "}
          <span className="relative inline-block">
            <span className="text-hovr-text3">juggling</span>
            <span className="absolute left-0 top-1/2 h-[3px] bg-hovr-danger w-full rounded-full" />
          </span>
          <br />
          <span className="gradient-text-accent">Start hovering.</span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-hovr-text2 leading-relaxed mb-10 animate-fade-in delay-200 font-light">
          Your files, your groups, your deadlines, your calendar — all in one
          floating overlay.{" "}
          <span className="text-white font-medium">
            The all-in-one student super-app
          </span>{" "}
          that replaces the 6 tools you&apos;re already tired of switching
          between.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in delay-300">
          <a
            href="#cta"
            className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-hovr-accent to-hovr-violet text-white font-semibold text-lg shadow-2xl shadow-hovr-accent/25 hover:shadow-hovr-accent/40 transition-all duration-300 hover:scale-[1.03]"
          >
            <span className="relative z-10">
              Get Early Access — It&apos;s Free
            </span>
            <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="#features"
            className="flex items-center gap-2 px-6 py-4 text-hovr-text2 hover:text-white transition-colors font-medium"
          >
            See what it does
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="animate-bounce"
            >
              <path
                d="M8 3v10m0 0l-4-4m4 4l4-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Tools replacement strip */}
        <div className="animate-fade-in delay-400">
          <p className="text-xs font-mono text-hovr-text3 uppercase tracking-widest mb-4">
            Replaces your need for
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {replacedTools.map((tool) => (
              <div
                key={tool}
                className="group relative px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-hovr-danger/30 transition-all duration-300 cursor-default"
              >
                <span className="text-sm text-hovr-text3 group-hover:text-hovr-danger/70 transition-colors font-medium relative">
                  {tool}
                  <span className="absolute left-0 top-1/2 h-[1.5px] bg-hovr-danger rounded-full transition-all duration-500 w-0 group-hover:w-full" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse">
        <div className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-white/40 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
