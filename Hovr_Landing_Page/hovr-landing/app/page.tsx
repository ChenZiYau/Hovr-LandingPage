import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { Features } from "@/components/sections/Features";
import { Comparison } from "@/components/sections/Comparison";
import { Platforms } from "@/components/sections/Platforms";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-hovr-dark1 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <StatsBar />
      <Features />
      <Comparison />
      <Platforms />
      <CTA />
      <Footer />
    </main>
  );
}
