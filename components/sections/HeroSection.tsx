"use client";

import { Calendar, Coins, TrendingUp, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
export function HeroSection() {
  const whatsappLink = "https://wa.me/5521967392513?text=Olá! Gostaria de saber mais sobre a franquia PaiTec.";

  return (
    <section className="relative bg-blue-400 bg-bolinha min-h-[calc(100vh-4rem)] flex items-center py-12 md:py-0">
      {/* Top banner */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-green-400 to-green-600 text-white text-center py-2 font-bold text-lg shadow-md">
        Única franquia com Payback de 3 meses
      </div>
      
      {/* Layered background with subtle patterns */}
     
      
      <div className="container px-4 mx-auto relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center w-full">
            {/* Text and button block */}
            <div className="flex flex-col items-center justify-center text-center lg:text-left">
              <div className="space-y-4 py-6 lg:space-y-6">
                {/* Logo image above the h1 */}
                <Image
                  src="/logo.png"
                  alt="Logo PaiTec"
                  width={128}
                  height={128}
                  className="mx-auto mb-4 w-32 h-auto"
                  priority
                />
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  <span className="bg-clip-text text-transparent p-1 bg-gradient-to-r from-green-600 to-green-400 block">
                    Seja dono da franquia
                  
                    com o melhor Payback
                  
                    do Brasil
                  </span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-700">
                  Única franquia que possibilita um Payback já no 3º mês de operação com exclusividade na sua região.
                </p>
              </div>
              <div className="hidden lg:flex justify-center lg:justify-start">
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
            </div>
            {/* Video block */}
            <div className="relative aspect-[9/16] w-full max-h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-gray-100 mx-auto my-6 lg:my-0 lg:w-1/2">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/vGPhVLLJX0M"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          {/* Mobile button (only visible */}
          <div className="flex justify-center lg:justify-start">
                {/* Desktop button (only visible on lg and up) */}
                <div className="flex lg:hidden justify-center">
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
              </div>
          <div className="text-center flex flex-col justify-end h-full">
            <div className="hidden lg:flex lg:justify-center py-6" >
              <span className="text-2xl text-black font-semibold" >
              Baixo investimento
              </span>
              <span className="text-orange-500 text-2xl font-bold" >
                +
              </span>
              <span className="text-2xl text-black font-semibold" >
              Modelo de negócio eficiente e lucrativo
              </span>
              <span className="text-orange-500 text-2xl font-bold" >
                =
              </span>
              <span className="text-2xl text-black font-semibold" >
              retorno mais rápido
              </span>
            </div>
            <div className="block lg:hidden mt-8" >
              <span className="block text-lg text-black font-semibold" >
              Baixo investimento
              </span>
              <span className="block text-orange-500 font-bold" >
                +
              </span>
              <span className="block text-lg text-black font-semibold" >
              Modelo de negócio eficiente e lucrativo
              </span>
              <span className="block text-orange-500 font-bold" >
                =
              </span>
              <span className="block text-lg text-black font-semibold" >
              retorno mais rápido
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}