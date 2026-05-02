"use client";

import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-hovr-dark1/80 backdrop-blur-2xl border-b border-white/5 shadow-2xl shadow-hovr-accent/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-hovr-accent to-hovr-violet flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-hovr-accent/30 group-hover:shadow-hovr-accent/50 transition-shadow">
            H
          </div>
          <span className="font-display font-bold text-lg tracking-tight">
            hovr
          </span>
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {["Features", "Comparison", "Platforms"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-hovr-text2 hover:text-white transition-colors duration-200 font-medium"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden sm:block text-sm text-hovr-text2 hover:text-white transition-colors font-medium px-4 py-2"
          >
            Sign in
          </a>
          <a
            href="#cta"
            className="relative group text-sm font-semibold text-white px-5 py-2.5 rounded-full bg-gradient-to-r from-hovr-accent to-hovr-violet shadow-lg shadow-hovr-accent/25 hover:shadow-hovr-accent/40 transition-all duration-300 hover:scale-[1.03]"
          >
            Get Early Access
            <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </nav>
  );
}
