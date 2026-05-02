"use client";

import { useInView } from "@/lib/useInView";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PillarVisual } from "@/components/sections/PillarVisuals";
import { pillars } from "@/lib/data";

export function Features() {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-hovr-accent/[0.05] blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-hovr-teal/[0.05] blur-[120px]" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <SectionLabel label="Features" />
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tight mb-4 text-center">
          Four pillars.{" "}
          <span className="gradient-text-accent">One app.</span>
        </h2>
        <p className="text-center text-hovr-text2 text-lg max-w-2xl mx-auto mb-20 font-light">
          Every feature a student needs, designed to work together seamlessly
          instead of scattered across a dozen disconnected tools.
        </p>

        <div className="space-y-8">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.num} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarCard({
  pillar,
  index,
}: {
  pillar: (typeof pillars)[number];
  index: number;
}) {
  const { ref, inView } = useInView(0.2);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`group relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8 sm:p-10 rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm transition-all duration-700 hover:border-white/[0.1] hover:bg-white/[0.03] ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {/* Hover glow */}
      <div
        className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
        style={{
          background: `linear-gradient(135deg, ${pillar.color}15, transparent 60%)`,
        }}
      />

      {/* Content */}
      <div className={`relative z-10 ${!isEven ? "lg:order-2" : ""}`}>
        <div className="flex items-center gap-3 mb-4">
          <span
            className="font-mono text-xs font-bold px-3 py-1 rounded-full"
            style={{
              color: pillar.color,
              background: `${pillar.color}15`,
              border: `1px solid ${pillar.color}25`,
            }}
          >
            {pillar.num}
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
        </div>

        <h3 className="text-2xl sm:text-3xl font-display font-bold mb-2 tracking-tight">
          {pillar.title}
        </h3>
        <p className="text-hovr-text2 font-medium mb-4 text-lg">
          {pillar.subtitle}
        </p>
        <p className="text-hovr-text3 leading-relaxed mb-6">{pillar.desc}</p>

        <div className="flex flex-wrap gap-2">
          {pillar.features.map((f) => (
            <span
              key={f}
              className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-hovr-text2"
            >
              {f}
            </span>
          ))}
        </div>
      </div>

      {/* Visual */}
      <div className={`relative z-10 ${!isEven ? "lg:order-1" : ""}`}>
        <PillarVisual pillar={pillar} />
      </div>
    </div>
  );
}
