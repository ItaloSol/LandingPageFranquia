"use client";

import { Mail, MapPin, Phone, FileText } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
export function Footer() {
  const whatsappLink = "https://wa.me/552131804468?text=Olá! Gostaria de saber mais sobre a franquia PaiTec.";

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/logo.png"
                  alt="PaiTec Logo"
                  width={64}
                  height={64}
                  className="h-16 w-auto"
                  priority
                />
              </div>
              <p className="text-gray-400 mb-4">
                Desde 2020, a PaiTec tem como missão oferecer soluções inovadoras e eficientes para a segurança nas escolas.
               
              </p>

            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Termos</h3>
              <div className="flex gap-4">
                <div className="space-y-2">
                  <a href="/politicas-de-privacidade.html" className="flex items-center gap-2 hover:text-green-400 transition-colors">
                    <FileText className="w-4 h-4" />
                    <span>Política de Privacidade</span>
                  </a>

                  <a href="/termos-e-condicoes.html" className="flex items-center gap-2 hover:text-green-400 transition-colors">
                    <FileText className="w-4 h-4" />
                    <span>Termos e Condições</span>
                  </a>
                </div>
              </div>
            </div>

           
             {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contato</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-green-400" />
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                  (21) 3180-4468
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-green-400" />
                  <a href="mailto:contato@paitec.com.br" className="hover:text-green-400 transition-colors">
                  contato@paitec.site
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <p>Rio de Janeiro, RJ</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>PaiTec © Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}