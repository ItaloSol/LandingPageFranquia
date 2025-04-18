"use client";

import { useEffect } from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemsSection } from "@/components/sections/ProblemsSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { LegalAdvantageSection } from "@/components/sections/LegalAdvantageSection";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { CompanyHistorySection } from "@/components/sections/CompanyHistorySection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <main className="min-h-screen">
        <HeroSection />
      <div className="section opacity-0 transition-opacity duration-500 ease-in-out">
        <ProblemsSection />
      </div>
      <div className="section opacity-0 transition-opacity duration-500 ease-in-out">
        <BenefitsSection />
      </div>
      <div className="section opacity-0 transition-opacity duration-500 ease-in-out">
        <LegalAdvantageSection />
      </div>
      <div className="section opacity-0 transition-opacity duration-500 ease-in-out">
        <SecuritySection />
      </div>
      <div className="section opacity-0 transition-opacity duration-500 ease-in-out">
        <CompanyHistorySection />
      </div>
        <Footer />
    </main>
  );
}