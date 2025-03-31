"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemsSection } from "@/components/sections/ProblemsSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { LegalAdvantageSection } from "@/components/sections/LegalAdvantageSection";
import { SecuritySection } from "@/components/sections/SecuritySection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ProblemsSection />
      <BenefitsSection />
      <LegalAdvantageSection />
      <SecuritySection />
    </main>
  );
}