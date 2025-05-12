"use client";

import { useEffect } from "react";
import { TrendingUp, Clock, MapPin, PieChart, Building, Timer, Coins, Headphones, Home, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Clock,
    title: "Retorno sobre o investimento em tempo record",
    description: "Alcance resultados financeiros expressivos em um período surpreendentemente curto"
  },
  {
    icon: TrendingUp,
    title: "Baixa complexidade e operação",
    description: "Sistema simplificado e eficiente para facilitar sua gestão"
  },
  {
    icon: MapPin,
    title: "Exclusividade na sua região",
    description: "Território protegido para maximizar seu potencial de mercado"
  },
  {
    icon: PieChart,
    title: "Margem de lucro agressiva",
    description: "Rentabilidade superior à média do mercado de franquias"
  },
  {
    icon: Building,
    title: "Atuação nos melhores mercados públicos e privados",
    description: "Acesso a oportunidades premium em diversos setores"
  },
  {
    icon: Timer,
    title: "Segurança e estabilidade no faturamento",
    description: "LTV superior a 2 anos, garantindo previsibilidade financeira"
  },
  {
    icon: Coins,
    title: "Melhor custo benefício",
    description: "Baixo investimento inicial e baixo risco com alto potencial de retorno"
  },
  {
    icon: Headphones,
    title: "Suporte especializado e rápido",
    description: "Assistência dedicada para impulsionar seu sucesso"
  },
  {
    icon: Home,
    title: "Sem gasto de aluguel",
    description: "Economia significativa em custos fixos mensais"
  },
  {
    icon: Users,
    title: "Baixa necessidade de funcionários",
    description: "Operação otimizada com equipe reduzida"
  }
];

export function BenefitsSection() {
  const whatsappLink = "https://wa.me/552131804468?text=Olá! Gostaria de saber mais sobre a franquia PaiTec.";

  useEffect(() => {
    const cards = document.querySelectorAll(".benefit-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      cards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="py-20 from-gray-50 to-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          Você busca uma franquia que te possibilite?
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="benefit-card p-6 bg-gradient-to-br from-[#78c1ec] to-[#1c98d4] shadow-lg hover:shadow-xl  hover:scale-105 "
            >
              <div className="flex items-start space-x-2 md:space-x-4">
                <benefit.icon className="w-6 h-6 md:w-8 md:h-8 text-black flex-shrink-0" />
                <div>
                  <h3 className="text-md md:text-lg font-semibold mb-1 md:mb-2 text-black">{benefit.title}</h3>
                  <p className="text-black/90 text-xs md:text-sm">{benefit.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <p className="text-xl md:text-2xl text-gray-800 mb-6 md:mb-8">
            Não perca mais tempo! Agende agora sua análise gratuita e descubra como a PaiTec pode ser a chave para o seu sucesso empresarial.
          </p>
          <Button 
            className="bg-gradient-to-r from-green-400 to-green-600 text-black hover:from-green-500 hover:to-green-700 shadow-xl transform hover:scale-105 transition-all text-md md:text-lg py-6 md:py-8 px-10 md:px-12 button-blink"
            size="lg"
            onClick={() => window.open(whatsappLink, '_blank')}
          >
            Agende sua análise <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}