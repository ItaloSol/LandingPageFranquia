"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemsSection } from "@/components/sections/ProblemsSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { LegalAdvantageSection } from "@/components/sections/LegalAdvantageSection";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { CompanyHistorySection } from "@/components/sections/CompanyHistorySection";
import { Footer } from "@/components/sections/Footer";
 export default function Home() {
  return (
    
    <main className="min-h-screen" >
      <HeroSection />
      <ProblemsSection />
      <BenefitsSection />
      <LegalAdvantageSection />
      <SecuritySection />
      <CompanyHistorySection />
      <Footer />
    </main>
  );
}