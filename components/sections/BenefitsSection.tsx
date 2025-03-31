"use client";

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
  const whatsappLink = "https://wa.me/5521967392513?text=Olá! Gostaria de saber mais sobre a franquia PaiTec.";

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Você busca uma franquia que te possibilite?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="p-6 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start space-x-4">
                <benefit.icon className="w-8 h-8 text-green-500 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-700 mb-8">
            Se você falou sim para algum desses tópicos temos uma condição exclusiva para você
          </p>
          <Button 
            className="bg-gradient-to-r from-green-400 to-green-600 text-black hover:from-green-500 hover:to-green-700 shadow-xl transform hover:scale-105 transition-all text-lg py-8 px-12 button-blink"
            size="lg"
            onClick={() => window.open(whatsappLink, '_blank')}
          >
            Agende sua análise <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}