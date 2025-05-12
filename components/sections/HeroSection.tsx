"use client";

import { Calendar, Coins, TrendingUp, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
export function HeroSection() {
  const whatsappLink = "https://wa.me/5521931804468?text=Olá! Gostaria de saber mais sobre a franquia PaiTec.";

  return (
    <section className="relative bg-blue-400 bg-bolinha min-h-[calc(100vh-4rem)] grid grid-rows-[1fr_auto] py-12 ">
      <div className="container px-4 mx-auto grid place-items-center h-full">
        <div className="w-full max-w-6xl grid gap-8 lg:gap-12">
          {/* Main content grid */}
          <div className="grid gap-8 lg:gap-12">
            <div className="grid place-items-center text-center">
              <Image
                src="/logo.png"
                alt="Logo PaiTec"
                width={128}
                height={128}
                className="mx-auto mb-4 h-40 w-auto"
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
              <div className="flex justify-center">
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
          {/* Bottom text grid */}
          <div className="grid place-items-center text-center">
            <div className="hidden lg:grid grid-flow-col auto-cols-max gap-2 items-center py-6">
              <span className="text-2xl text-black font-semibold">Baixo investimento</span>
              <span className="text-orange-500 text-2xl font-bold">+</span>
              <span className="text-2xl text-black font-semibold">Modelo de negócio eficiente e lucrativo</span>
              <span className="text-orange-500 text-2xl font-bold">=</span>
              <span className="text-2xl text-black font-semibold">retorno rápido</span>
            </div>
            <div className="grid lg:hidden gap-2 mt-8">
              <span className="text-lg text-black font-semibold">Baixo investimento</span>
              <span className="text-orange-500 font-bold">+</span>
              <span className="text-lg text-black font-semibold">Modelo de negócio eficiente e lucrativo</span>
              <span className="text-orange-500 font-bold">=</span>
              <span className="text-lg text-black font-semibold">retorno rápido</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}