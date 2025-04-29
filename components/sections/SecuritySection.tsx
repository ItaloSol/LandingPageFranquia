"use client";

import { ShieldCheck, Heart, School } from "lucide-react";
import { Card } from "@/components/ui/card";

export function SecuritySection() {
  return (
    <section className="py-20 ">
      <div className="container px-4 mx-auto">
        {/* Market Security Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            O modelo de franquia mais seguro do mercado
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Investir em uma franquia no setor de educação infantil significa entrar em um dos mercados mais sólidos e rentáveis do Brasil. 
            Diferente de modismos ou negócios instáveis de alto risco, a educação é uma necessidade contínua e altamente valorizada por 
            famílias, instituições privadas e o próprio Governo.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Com a PaiTec você vai ajudar a resolver um grande problema social, a falta de segurança no ambiente escolar e ainda vai ser 
            dono de uma franquia altamente lucrativa.
          </p>
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Depoimentos de quem conhece a PAITEC
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="aspect-[9/16] w-full overflow-hidden rounded-lg">
              <iframe 
                className="w-full h-full" 
                src="https://www.youtube.com/embed/YC5xWa8FVWg" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
            <div className="aspect-[9/16] w-full overflow-hidden rounded-lg">
              <iframe 
                className="w-full h-full" 
                src="https://www.youtube.com/embed/n4LLzssoAAs" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}