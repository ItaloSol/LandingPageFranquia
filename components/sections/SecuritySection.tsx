"use client";

import { ArrowRight, ShieldCheck, Heart, School } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function SecuritySection() {
  const whatsappLink = "https://wa.me/5521967392513?text=Olá! Gostaria de saber mais sobre a franquia PaiTec.";

  return (
    <section className="py-20 bg-white">
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
            Veje o que nossos franqueados estão falando sobre ser dono de uma PaiTec
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden bg-gradient-to-br from-[#78c1ec] to-[#1c98d4]">
                <div className="aspect-video bg-gray-800/20 flex items-center justify-center text-white">
                  Prova Social {i}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Company History Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Conheça um pouco sobre a nossa história
          </h2>
          
          <div className="space-y-8">
            <Card className="p-8 bg-gradient-to-br from-[#78c1ec] to-[#1c98d4]">
              <div className="flex flex-col items-center md:items-start md:flex-row gap-6">
                <Heart className="w-16 h-16 text-white flex-shrink-0" />
                <div>
                  <p className="text-white leading-relaxed mb-4">
                    A PaiTec nasceu do amor de um pai e da necessidade de proteger o que há de mais valioso na vida de um pai: Seus filhos.
                  </p>
                  <p className="text-white leading-relaxed">
                    Leandro Pinheiro, fundador da PaiTec, é pai solo da Laura uma criança muito amada. Leandro sempre teve uma preocupação 
                    constante com a segurança da filha na escola. As reclamações frequentes da Laura acenderam um alerta de grande preocupação: 
                    o ambiente escolar, que deveria ser um espaço de aprendizado e acolhimento, nem sempre oferecia a proteção necessária e 
                    muitas vezes oferece risco físico e emocional.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-[#78c1ec] to-[#1c98d4] text-white">
              <div className="flex flex-col items-center md:items-start md:flex-row gap-6">
                <School className="w-16 h-16 text-white flex-shrink-0" />
                <div>
                  <p className="leading-relaxed mb-4">
                    Movido pelo instinto de pai e pelo espírito empreendedor, Leandro passou meses buscando uma solução que garantisse mais 
                    segurança para sua filha dentro da escola. Porém, ao perceber que milhares de pais compartilhavam dessa mesma preocupação 
                    e que nenhuma solução existente era realmente eficaz, ele decidiu agir. Foi assim que nasceu a PaiTec.
                  </p>
                  <p className="leading-relaxed">
                    Mais do que um negócio, a PaiTec é um propósito. Seu modelo inovador une tecnologia e proteção para garantir um ambiente 
                    escolar seguro, trazendo tranquilidade para pais, crianças e instituições de ensino. E foi essa visão – junto ao potencial 
                    de um mercado sólido, crescente e bilionário – que fez do modelo de franquia a melhor maneira de expandir rapidamente essa solução.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-[#78c1ec] to-[#1c98d4]">
              <div className="flex flex-col items-center md:items-start md:flex-row gap-6">
                <ShieldCheck className="w-16 h-16 text-white flex-shrink-0" />
                <div>
                  <p className="text-white leading-relaxed mb-4">
                    Com um Payback médio de apenas 3 meses, a PaiTec se tornou uma das franquias mais rentáveis do Brasil. Mas, mais do que isso, 
                    se tornou um veículo para transformar escolas em locais mais seguros e acolhedores.
                  </p>
                  <p className="text-white leading-relaxed">
                    Garantindo: Segurança para nossos filhos, garantir paz e tranquilidade para os pais durante o dia de trabalho e ajudar as 
                    escolas a estarem legalmente guardadas dentro da Leis,13.722/2018, 14.644/2023, 14.811/2024 (Art 3⁰), juntamente com as 
                    recomendações para proteção e segurança no ambiente escolar do Ministério da educação.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
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
    </section>
  );
}