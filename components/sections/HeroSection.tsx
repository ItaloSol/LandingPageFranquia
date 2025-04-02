"use client";

import { Calendar, Coins, TrendingUp, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function HeroSection() {
  const whatsappLink = "https://wa.me/5521967392513?text=Olá! Gostaria de saber mais sobre a franquia PaiTec.";

  return (
    <section className="relative bg-blue-400/10 min-h-[calc(100vh-4rem)] flex items-center py-12 md:py-0">
      {/* Layered background with subtle patterns */}
      <div className="absolute  inset-0  from-white to-gray-50" />
      <div className="absolute  inset-0  opacity-30" />
      <div className="absolute inset-0 gradient-overlay-light" />
      
      <div className="container px-4 mx-auto relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-left space-y-8 lg:space-y-12 w-full">
              <div className="space-y-4 lg:space-y-6">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400 leading-tight">
                  Seja dono da franquia com o melhor Payback do Brasil
                </h1>
                
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-700">
                  Única franquia que possibilita um Payback já no 3º mês de operação com exclusividade na sua região.
                </p>
              </div>

              <div className="flex justify-center lg:justify-start">
                <Button 
                  className="w-full sm:w-auto bg-gradient-to-r from-green-400 to-green-600 text-black hover:from-green-500 hover:to-green-700 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all text-lg sm:text-2xl py-6 sm:py-10 px-8 sm:px-16 rounded-xl button-blink"
                  size="lg"
                  onClick={() => window.open(whatsappLink, '_blank')}
                >
                  <span className="flex items-center justify-center gap-3">
                    Agende sua análise <Calendar className="h-6 w-6 sm:h-8 sm:w-8" />
                  </span>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Card className="p-4 bg-gradient-to-br from-[#78c1ec] to-[#1c98d4] border-none shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex sm:flex-col items-center sm:text-center gap-3 sm:gap-0">
                    <Coins className="h-6 w-6 sm:h-8 sm:w-8 text-white sm:mb-2" />
                    <p className="text-sm font-medium text-white">Baixo investimento</p>
                  </div>
                </Card>

                <Card className="p-4 bg-gradient-to-br from-[#78c1ec] to-[#1c98d4] border-none shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex sm:flex-col items-center sm:text-center gap-3 sm:gap-0">
                    <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-white sm:mb-2" />
                    <p className="text-sm font-medium text-white">Modelo eficiente</p>
                  </div>
                </Card>

                <Card className="p-4 bg-gradient-to-br from-[#78c1ec] to-[#1c98d4] border-none shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex sm:flex-col items-center sm:text-center gap-3 sm:gap-0">
                    <Timer className="h-6 w-6 sm:h-8 sm:w-8 text-white sm:mb-2" />
                    <p className="text-sm font-medium text-white">Retorno rápido</p>
                  </div>
                </Card>
              </div>
            </div>

            <div className="relative h-[200px] sm:h-[300px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl w-full bg-gray-100">
              <div className="flex items-center justify-center h-full text-gray-400">
                VSL ou Imagem 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}