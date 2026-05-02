"use client";

import { useInView } from "@/lib/useInView";
import { Counter } from "@/components/ui/Counter";

const stats = [
  { value: 6, suffix: "+", label: "Tools replaced" },
  { value: 5, suffix: "", label: "Platforms" },
  { value: 3, suffix: "s", label: "To access any file" },
  { value: 0, suffix: "", label: "Files lost ever again", special: true },
];

export function StatsBar() {
  const { ref, inView } = useInView(0.3);

  return (
    <section ref={ref} className="relative z-10 py-6">
      <div className="max-w-[1200px] mx-auto px-6">
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-gradient-to-r from-hovr-accent/[0.08] via-hovr-violet/[0.05] to-hovr-teal/[0.08] border border-white/[0.06] backdrop-blur-sm transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center py-4">
              <div className="text-3xl sm:text-4xl font-display font-black mb-1">
                {stat.special ? (
                  <span className="bg-gradient-to-r from-hovr-success to-hovr-teal bg-clip-text text-transparent">
                    0
                  </span>
                ) : (
                  <span className="gradient-text-accent">
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </span>
                )}
              </div>
              <span className="text-xs font-mono text-hovr-text3 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
