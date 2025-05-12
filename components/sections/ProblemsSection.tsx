"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function ProblemsSection() {
  const whatsappLink = "https://wa.me/552131804468?text=Olá! Gostaria de saber mais sobre a franquia PaiTec.";

  return (
    <section className=" bg-bolinha relative ">
       <div className="bg-blue-400/50 py-12 sm:py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-16 text-green-600 leading-tight">
            Você tem esses problemas quando vai escolher uma franquia para investir?
          </h2>

          {/* Center Image */}
          <div className="relative w-full max-w-3xl mx-auto mb-8 sm:mb-16 transform -rotate-3">
            <div className="aspect-[3/1] relative">
              <Image
                src="/empresario.png"
                alt="Empresário estressado com problemas"
                fill
                className="object-cover rounded-lg border-4 border-green-600"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
                priority
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-4xl mx-auto">
            {/* Left Column */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-green-600 mb-6 sm:mb-8">
                As franquias apresentam?
              </h3>
              <ul className="space-y-4 sm:space-y-6">
                <li className="flex items-start gap-3">
                  <span className="mt-2.5 block w-2 h-2 rounded-full bg-green-600 flex-shrink-0" />
                  <p className="text-base sm:text-lg text-gray-700">
                    Modelos de contratos absurdos que te prendem de avançar cheios de regra
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2.5 block w-2 h-2 rounded-full bg-green-600 flex-shrink-0" />
                  <p className="text-base sm:text-lg text-gray-700">
                    Valor da franquia exorbitantemente caro que inviabiliza seu empreendimento
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2.5 block w-2 h-2 rounded-full bg-green-600 flex-shrink-0" />
                  <p className="text-base sm:text-lg text-gray-700">
                    Demora para retornar o investimento feito na franquia
                  </p>
                </li>
                
              </ul>
            </div>

            {/* Right Column */}
            <div className="mt-8 lg:mt-[3.25rem]">
              <ul className="space-y-4 sm:space-y-6">
                <li className="flex items-start gap-3">
                  <span className="mt-2.5 block w-2 h-2 rounded-full bg-green-600 flex-shrink-0" />
                  <p className="text-base sm:text-lg text-gray-700">
                    Alta taxa de royalties e taxas escondidas – No começo parece um bom negócio, mas logo você percebe que grande parte do seu lucro está indo para a franqueadora
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2.5 block w-2 h-2 rounded-full bg-green-600 flex-shrink-0" />
                  <p className="text-base sm:text-lg text-gray-700">
                    Concorrência interna desleal – Algumas franquias não garantem exclusividade de região, e você pode acabar competindo com outra unidade da própria marca!
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2.5 block w-2 h-2 rounded-full bg-green-600 flex-shrink-0" />
                  <p className="text-base sm:text-lg text-gray-700">
                    Necessidade de grande investimento de tempo e funcionários
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <p className="text-xl sm:text-2xl mb-6 sm:mb-8 text-gray-800 px-4">
              Se você está procurando uma franquia com facilidades e o melhor payback, então PaiTec é a franquia ideal para você.
            </p>
            <Button 
              className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-green-600 hover:from-green-600 hover:to-green-600 text-white shadow-xl transform hover:scale-105 transition-all text-lg sm:text-xl py-4 sm:py-6 px-6 sm:px-12 rounded-xl button-blink"
              size="lg"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              <span className="flex items-center justify-center gap-2">
                Agende sua análise <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </span>
            </Button>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}