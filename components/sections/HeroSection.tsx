"use client";

import { Calendar, Coins, TrendingUp, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function HeroSection() {
  const whatsappLink = "https://wa.me/5521967392513?text=Olá! Gostaria de saber mais sobre a franquia PaiTec.";

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center pt-4 md:pt-0">
          <div className="text-left space-y-8 mt-8 md:mt-0">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400 leading-tight">
                Seja dono da franquia com o melhor Payback do Brasil
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700">
                Única franquia que possibilita um Payback já no 3º mês de operação com exclusividade na sua região.
              </p>
            </div>
            <div className="pt-4">
              <Button 
                className="bg-gradient-to-r from-green-400 to-green-600 text-black hover:from-green-500 hover:to-green-700 shadow-xl transform hover:scale-105 transition-all w-full sm:w-auto text-lg py-8 px-12 button-blink"
                size="lg"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                Agende sua análise <Calendar className="ml-2 h-6 w-6" />
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-none shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <Coins className="h-12 w-12 text-green-600 mb-3" />
                  <p className="text-base font-medium text-gray-800">Baixo investimento</p>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-none shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <TrendingUp className="h-12 w-12 text-green-600 mb-3" />
                  <p className="text-base font-medium text-gray-800">Modelo eficiente</p>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-none shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <Timer className="h-12 w-12 text-green-600 mb-3" />
                  <p className="text-base font-medium text-gray-800">Retorno rápido</p>
                </div>
              </Card>
            </div>
            
            
          </div>

          <div className="relative h-[300px] sm:h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-[#000000] to-[#005E86] flex items-center justify-center text-white text-xl p-4 text-center">
              VSL ou Imagem
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}