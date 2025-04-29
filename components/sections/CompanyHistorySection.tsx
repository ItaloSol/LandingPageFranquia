"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function CompanyHistorySection() {
  const whatsappLink = "https://wa.me/5521967392513?text=Olá! Gostaria de saber mais sobre a franquia PaiTec.";

  return (
    <section className="  bg-bolinha bg-cover bg-center bg-no-repeat">
      <div className="bg-blue-400/50 py-20">
      <div className="container  px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Conheça um pouco sobre a nossa história
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl flex items-center justify-center bg-gray-100">
              <p className="text-gray-500 text-center p-4">Imagem será adicionada aqui</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg">
              <div className="space-y-8">
                <div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    A PaiTec nasceu do amor de um pai e da necessidade de proteger o que há de mais valioso na vida de um pai: Seus filhos.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Leandro Pinheiro, fundador da PaiTec, é pai solo da Laura uma criança muito amada. Leandro sempre teve uma preocupação 
                    constante com a segurança da filha na escola. 
                    o ambiente escolar, que deveria ser um espaço de aprendizado e acolhimento, nem sempre oferecia a proteção necessária e 
                    muitas vezes oferece risco físico e emocional.
                  </p>
                </div>

                <div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Movido pelo instinto de pai e pelo espírito empreendedor, Leandro passou meses buscando uma solução que garantisse mais 
                    segurança para sua filha dentro da escola. Porém, ao perceber que milhares de pais compartilhavam dessa mesma preocupação 
                    e que nenhuma solução existente era realmente eficaz, ele decidiu agir. Foi assim que nasceu a PaiTec.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Mais do que um negócio, a PaiTec é um propósito. Seu modelo inovador une tecnologia e proteção para garantir um ambiente 
                    escolar seguro, trazendo tranquilidade para pais, crianças e instituições de ensino. E foi essa visão – junto ao potencial 
                    de um mercado sólido, crescente e bilionário – que fez do modelo de franquia a melhor maneira de expandir rapidamente essa solução.
                  </p>
                </div>

                <div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Com um Payback médio de apenas 3 meses, a PaiTec se tornou uma das franquias mais rentáveis do Brasil. Mas, mais do que isso, 
                    se tornou um veículo para transformar escolas em locais mais seguros e acolhedores.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Garantindo: Segurança para nossos filhos, garantir paz e tranquilidade para os pais durante o dia de trabalho e ajudar as 
                    escolas a estarem legalmente guardadas dentro da Leis,13.722/2018, 14.644/2023, 14.811/2024 (Art 3⁰), juntamente com as 
                    recomendações para proteção e segurança no ambiente escolar do Ministério da educação.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button 
              className="bg-gradient-to-r from-green-400 to-green-600 text-black hover:from-green-500 hover:to-green-700 shadow-xl transform hover:scale-105 transition-all text-lg py-8 px-12 button-blink"
              size="lg"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              Quero ser PaiTec <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}