"use client";

import { AlertCircle, DollarSign, Clock, AlertTriangle, PiggyBank, Target, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const problems = [
  {
    icon: AlertCircle,
    title: "Contratos Absurdos",
    description: "Modelos de contratos absurdos que te prendem de avançar cheios de regra"
  },
  {
    icon: DollarSign,
    title: "Investimento Exorbitante",
    description: "Valor da franquia exorbitantemente caro que inviabiliza seu empreendimento"
  },
  {
    icon: Clock,
    title: "Retorno Demorado",
    description: "Demora para retornar o investimento feito na franquia"
  },
  {
    icon: AlertTriangle,
    title: "Alto Risco",
    description: "Insegurança se o investimento vai se pagar, medo do negócio dar errado depois do segundo ano (74,5% das franquias no Brasil fecham após o 18º mês)"
  },
  {
    icon: PiggyBank,
    title: "Taxas Escondidas",
    description: "Alta taxa de royalties e taxas escondidas – No começo parece um bom negócio, mas logo você percebe que grande parte do seu lucro está indo para a franqueadora"
  },
  {
    icon: Target,
    title: "Concorrência Interna",
    description: "Concorrência interna desleal – Algumas franquias não garantem exclusividade de região, e você pode acabar competindo com outra unidade da própria marca!"
  },
  {
    icon: Users,
    title: "Alta Demanda de Recursos",
    description: "Necessidade de grande investimento de tempo e funcionários"
  }
];

export function ProblemsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Você tem esses problemas quando vai escolher uma franquia para investir?
        </h2>
        <p className="text-center text-dark-600 mb-12 max-w-2xl mx-auto">
          Conheça os principais desafios que os empreendedores enfrentam ao investir em franquias tradicionais
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <Card 
              key={index} 
              className="p-6 text-black bg-red-600/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start space-x-4">
                <problem.icon className="w-8 h-8 flex-shrink-0 text-red-500" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
                  <p className="text-dark-200 text-sm leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}