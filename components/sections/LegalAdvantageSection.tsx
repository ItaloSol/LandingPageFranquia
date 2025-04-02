"use client";

import { Scale, Shield, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

export function LegalAdvantageSection() {
  return (
    <section className=" bg-bolinha from-white to-gray-50">
       <div className="bg-blue-400/50 py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Porque a PaiTec é uma excelente escolha para você empreender
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-semibold text-center mb-8 text-gray-800">
              Somos a única franquia do mercado que garante as escolas o enquadramento nas leis:
            </h3>

            <Card className="p-8 mb-12 bg-gradient-to-br from-[#78c1ec] to-[#1c98d4] text-white">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Scale className="w-8 h-8" />
                <p className="text-xl font-semibold">
                  13.722/2018, 14.644/2023, 14.811/2024 (Art 3⁰)
                </p>
              </div>
              <p className="text-gray-200 text-center">
                Juntamente com as recomendações para proteção e segurança no ambiente escolar do Ministério da educação.
              </p>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-700 leading-relaxed">
                      Essa obrigação por lei se torna uma grande vantagem, sendo um argumento crucial de vendas e negociações, 
                      visto que <span className="font-bold">ABSOLUTAMENTE</span> todas as instituições de ensino públicas e 
                      particulares precisam estar adequadas a essas leis.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Users className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-700 leading-relaxed">
                      Além disso, também temos um excelente argumento para negociações políticas, porque prefeitos e 
                      vereadores querem poder falar que fizeram algo único pela educação do seu município.
                    </p>
                  </div>
                </div>
              </div>

              <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-none">
                <p className="text-lg font-semibold text-gray-800 leading-relaxed">
                  Pensando nisso você vai ter exclusividade no seu município sem concorrência de outros franqueados.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}