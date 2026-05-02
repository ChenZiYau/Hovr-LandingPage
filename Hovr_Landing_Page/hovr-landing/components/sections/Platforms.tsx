"use client";

import { useInView } from "@/lib/useInView";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { platforms } from "@/lib/data";

export function Platforms() {
  const { ref, inView } = useInView(0.2);

  return (
    <section id="platforms" className="relative py-32">
      <div
        ref={ref}
        className="relative z-10 max-w-[1200px] mx-auto px-6 text-center"
      >
        <SectionLabel label="Platforms" />
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tight mb-4">
          Available{" "}
          <span className="bg-gradient-to-r from-hovr-accent to-hovr-teal bg-clip-text text-transparent">
            everywhere.
          </span>
        </h2>
        <p className="text-hovr-text2 text-lg max-w-xl mx-auto mb-16 font-light">
          Your workspace follows you. Desktop, phone, tablet, browser — one
          account, one shelf, one experience.
        </p>

        <div
          className={`grid grid-cols-3 sm:grid-cols-6 gap-4 max-w-3xl mx-auto transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {platforms.map((platform, i) => (
            <div
              key={platform.name}
              className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-hovr-accent/20 hover:bg-hovr-accent/[0.03] transition-all duration-300 cursor-default"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                {platform.icon}
              </span>
              <span className="text-xs font-mono text-hovr-text3 group-hover:text-hovr-text2 transition-colors">
                {platform.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
