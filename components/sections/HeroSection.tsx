"use client";

import { Calendar, Coins, TrendingUp, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export function HeroSection() {
  const whatsappLink = "https://wa.me/5521971731160?text=Olá! Gostaria de saber mais sobre a franquia PaiTec.";

  const images = [
    {
      url: "https://images.unsplash.com/photo-1613896527026-f195d5c818ed?q=80&w=1200&auto=format&fit=crop",
      alt: "Professor supervisionando alunos em sala de aula"
    },
    {
      url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop",
      alt: "Crianças em ambiente escolar seguro"
    },
    {
      url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop",
      alt: "Monitoramento e segurança escolar"
    },
    {
      url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop",
      alt: "Ambiente escolar moderno e seguro"
    }
  ];

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
              <Card className="p-6 bg-gradient-to-br from-[#78c1ec] to-[#1c98d4] border-none shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <Coins className="h-12 w-12 text-white mb-3" />
                  <p className="text-base font-medium text-white">Baixo investimento</p>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-[#78c1ec] to-[#1c98d4] border-none shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <TrendingUp className="h-12 w-12 text-white mb-3" />
                  <p className="text-base font-medium text-white">Modelo eficiente</p>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-[#78c1ec] to-[#1c98d4] border-none shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <Timer className="h-12 w-12 text-white mb-3" />
                  <p className="text-base font-medium text-white">Retorno rápido</p>
                </div>
              </Card>
            </div>
            
            
          </div>

          <div className="relative h-[300px] sm:h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl w-full">
            <div className="grid grid-cols-2 grid-rows-2 h-full gap-1">
              {images.map((image, index) => (
                <div key={index} className="relative w-full h-full overflow-hidden">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}