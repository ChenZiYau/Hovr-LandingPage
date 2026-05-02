"use client";

import { useInView } from "@/lib/useInView";

export function CTA() {
  const { ref, inView } = useInView(0.2);

  return (
    <section id="cta" className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-hovr-accent/[0.08] blur-[150px]" />

      <div
        ref={ref}
        className={`relative z-10 max-w-[800px] mx-auto px-6 text-center transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tight mb-6">
          Ready to stop{" "}
          <span className="relative inline-block">
            <span className="text-hovr-text3">juggling?</span>
            <span className="absolute left-0 top-1/2 h-[3px] bg-hovr-danger w-full rounded-full" />
          </span>
        </h2>

        <p className="text-hovr-text2 text-lg mb-10 font-light max-w-lg mx-auto">
          Join the waitlist and be among the first students to experience a
          workspace that actually works.
        </p>

        {/* Email input */}
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
          <input
            type="email"
            placeholder="your@university.edu"
            className="flex-1 px-5 py-4 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white placeholder:text-hovr-text3 focus:outline-none focus:border-hovr-accent/40 focus:ring-2 focus:ring-hovr-accent/20 transition-all font-mono text-sm"
          />
          <button className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-hovr-accent to-hovr-violet text-white font-bold shadow-2xl shadow-hovr-accent/25 hover:shadow-hovr-accent/40 transition-all duration-300 hover:scale-[1.03] shrink-0">
            <span className="relative z-10">Join Waitlist</span>
            <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>

        <p className="text-[10px] font-mono text-hovr-text3">
          Free to use · No credit card · Available on all platforms
        </p>
      </div>
    </section>
  );
}
