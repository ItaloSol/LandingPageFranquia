"use client";

import { Mail, MapPin, Phone, FileText } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function Footer() {
  const whatsappLink = "https://wa.me/5521967392513?text=Olá! Gostaria de saber mais sobre a franquia PaiTec.";
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contato</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-green-400" />
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                    (21) 96739-2513
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-green-400" />
                  <a href="mailto:contato@paitec.com.br" className="hover:text-green-400 transition-colors">
                  globalmonitoramentointeligente@gmail.com
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <p>Rio de Janeiro, RJ</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Termos</h3>
              <div className="flex gap-4">
              <div className="space-y-2">
                <Dialog>
                  <DialogTrigger className="flex items-center gap-2 hover:text-green-400 transition-colors">
                    <FileText className="w-4 h-4" />
                    <span>Política de Privacidade</span>
                  </DialogTrigger>
                  <DialogContent className="max-h-[80vh] overflow-y-auto p-4 sm:p-6">
                    <DialogHeader>
                      <DialogTitle>Política de Privacidade do PAi TEC</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <p>Data de Vigência: 01 de abril de 2025</p>
                      <div>
                        <h3 className="font-semibold">1. Introdução</h3>
                        <p>O PAi TEC (&ldquo;nós&rdquo;, &ldquo;nosso&rdquo; ou &ldquo;empresa&rdquo;) está comprometido com a proteção da sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações pessoais ao utilizar nosso aplicativo.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">2. Informações que Coletamos</h3>
                        <p>Informações Pessoais: Nome, dados de contato (se fornecidos).</p>
                        <p>Dados de Uso: Endereço IP, tipo de dispositivo, interações com o aplicativo e registros de acesso.</p>
                        <p>Dados de Câmera: Transmissões ao vivo e gravações de vídeo.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">3. Como Usamos Suas Informações</h3>
                        <p>Para fornecer e melhorar nossos serviços.</p>
                        <p>Para reforçar a segurança e evitar acessos não autorizados.</p>
                        <p>Para cumprir obrigações legais.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">4. Compartilhamento e Segurança de Dados</h3>
                        <p>Não vendemos ou compartilhamos seus dados com terceiros, exceto quando exigido por lei.</p>
                        <p>Utilizamos criptografia e outras medidas de segurança para proteger suas informações.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">5. Seus Direitos</h3>
                        <p>Você pode solicitar acesso, correção ou exclusão dos seus dados pessoais.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">6. Alterações nesta Política</h3>
                        <p>Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que você a revise regularmente.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">7. Contato</h3>
                        <p>Para dúvidas relacionadas à privacidade, entre em contato pelo e-mail: globalmonitoramentointeligente@gmail.com.</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                <Dialog>
                  <DialogTrigger className="flex items-center gap-2 hover:text-green-400 transition-colors">
                    <FileText className="w-4 h-4" />
                    <span>Termos e Condições</span>
                  </DialogTrigger>
                  <DialogContent className="max-h-[80vh] overflow-y-auto p-4 sm:p-6">
                    <DialogHeader>
                      <DialogTitle>Termos e Condições do PAi TEC</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <p>Data de Vigência: 01 de abril de 2025</p>
                      <div>
                        <h3 className="font-semibold">1. Aceitação dos Termos</h3>
                        <p>Ao utilizar o PAi TEC, você concorda em cumprir estes Termos e Condições.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">2. Uso do Aplicativo</h3>
                        <p>É proibido o acesso, modificação ou interferência não autorizada nas transmissões de câmeras.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">3. Responsabilidades do Usuário</h3>
                        <p>Manter a segurança das suas credenciais de login.</p>
                        <p>Não compartilhar ou utilizar indevidamente gravações obtidas pelo aplicativo.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">4. Limitação de Responsabilidade</h3>
                        <p>Não nos responsabilizamos por uso não autorizado, perda de dados ou falhas de segurança fora do nosso controle.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">5. Rescisão</h3>
                        <p>Podemos suspender ou encerrar o acesso ao PAi TEC caso você viole estes termos.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">6. Alterações nos Termos</h3>
                        <p>Reservamo-nos o direito de atualizar estes Termos e Condições a qualquer momento.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">7. Contato</h3>
                        <p>Para qualquer dúvida, entre em contato pelo e-mail: globalmonitoramentointeligente@gmail.com.</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              </div>
            </div>

            {/* Company Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">PaiTec</h3>
              <p className="text-gray-400 mb-4">
                Transformando a segurança nas escolas através da tecnologia e do cuidado.
              </p>
              
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} PaiTec. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}