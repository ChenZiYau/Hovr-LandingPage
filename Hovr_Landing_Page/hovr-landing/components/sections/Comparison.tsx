"use client";

import { useInView } from "@/lib/useInView";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { competitors } from "@/lib/data";

export function Comparison() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="comparison" className="relative py-32 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-hovr-danger/[0.03] blur-[120px]" />

      <div ref={ref} className="relative z-10 max-w-[1200px] mx-auto px-6">
        <SectionLabel label="Comparison" />
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tight mb-4 text-center">
          They do{" "}
          <span className="text-hovr-text3">one thing.</span>
          <br />
          <span className="gradient-text-accent">Hovr does everything.</span>
        </h2>
        <p className="text-center text-hovr-text2 text-lg max-w-2xl mx-auto mb-16 font-light">
          Every tool you&apos;re currently using was built for a different
          audience. Hovr was built for you — from scratch, for students.
        </p>

        {/* Competitor grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {competitors.map((competitor, i) => (
            <CompetitorCard
              key={competitor.name}
              competitor={competitor}
              index={i}
              visible={inView}
            />
          ))}
        </div>

        {/* Equation strip */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-hovr-accent/10 via-transparent to-hovr-teal/10 border border-white/[0.06] text-center">
          <p className="text-hovr-text3 text-sm mb-3 font-mono">
            The math is simple
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-lg sm:text-xl">
            {[
              "File Explorer",
              "WhatsApp",
              "Discord",
              "Calendar",
              "Todoist",
              "Notion",
            ].map((tool, i) => (
              <span key={tool} className="flex items-center gap-2">
                <span className="text-hovr-text3 relative">
                  {tool}
                  <span className="absolute left-0 top-1/2 h-[2px] bg-hovr-danger/50 w-full rounded-full" />
                </span>
                {i < 5 && (
                  <span className="text-hovr-text3/40 font-light">+</span>
                )}
              </span>
            ))}
            <span className="text-hovr-text3/40 font-light mx-2">=</span>
            <span className="font-black gradient-text-accent text-2xl sm:text-3xl">
              hovr
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function CompetitorCard({
  competitor,
  index,
  visible,
}: {
  competitor: (typeof competitors)[number];
  index: number;
  visible: boolean;
}) {
  return (
    <div
      className={`group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-hovr-danger/20 transition-all duration-500 hover:bg-hovr-danger/[0.02] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{competitor.icon}</span>
        <div>
          <h3 className="font-bold text-white group-hover:text-hovr-danger/80 transition-colors">
            {competitor.name}
          </h3>
          <p className="text-[10px] font-mono text-hovr-text3">
            {competitor.verdict}
          </p>
        </div>
      </div>

      {/* Missing features */}
      <div className="space-y-1.5">
        <p className="text-[9px] font-mono text-hovr-text3 uppercase tracking-wider mb-2">
          Missing in {competitor.name}
        </p>
        {competitor.kills.map((kill) => (
          <div key={kill} className="flex items-center gap-2">
            <svg
              className="w-3.5 h-3.5 text-hovr-danger/60 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <span className="text-xs text-hovr-text3">{kill}</span>
          </div>
        ))}
      </div>

      {/* Hovr badge */}
      <div className="mt-4 pt-3 border-t border-white/[0.04]">
        <div className="flex items-center gap-1.5">
          <svg
            className="w-3.5 h-3.5 text-hovr-success"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span className="text-xs font-mono text-hovr-success">
            Hovr has all of this
          </span>
        </div>
      </div>
    </div>
  );
}
