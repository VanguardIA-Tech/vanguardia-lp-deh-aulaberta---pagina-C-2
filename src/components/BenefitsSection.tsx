
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BenefitsSectionProps {
  onOpenModal: () => void;
}

const BenefitsSection = ({ onOpenModal }: BenefitsSectionProps) => {
  const mentorshipBenefits = [
    "Cliente Perfeito: Como atrair quem paga 30k+",
    "Ofertas em Esteira: Do diagnóstico ao império",
    "Proposta Única Clara: Tua categoria própria",
    "Ativações Inteligentes: IA como cérebro estratégico"
  ];

  const generalBenefits = [
    "Aprender a fechar grandes projetos de High Ticket",
    "Ser mais estratégico e menos operacional",
    "Estar junto de pessoas com o mesmo propósito",
    "Fazer networking com outros empreendedores"
  ];

  return (
    <section className="bg-gradient-to-br from-vanguardia-deep-blue via-vanguardia-medium-blue to-vanguardia-black py-20 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-vanguardia-blue/30 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-vanguardia-blue/20 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-vanguardia-white font-funnel vanguardia-text-glow">
              O que tu vais receber
            </h2>
            <p className="text-xl text-vanguardia-gray max-w-3xl mx-auto font-redhat">
              Mentoria com o Jorge + Conteúdo Exclusivo em Grupo
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Mentorship Method */}
            <div className="bg-vanguardia-white/5 backdrop-blur-sm rounded-2xl p-8 animate-slide-in border border-vanguardia-blue/30 hover:border-vanguardia-blue/50 transition-all duration-300 vanguardia-blue-glow">
              <h3 className="text-2xl font-bold mb-6 text-vanguardia-blue font-funnel">
                Mentoria Mensal com Jorge - Método (DEH)
              </h3>
              <div className="space-y-4">
                {mentorshipBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-vanguardia-blue mt-1 flex-shrink-0" />
                    <p className="text-vanguardia-white font-redhat">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* General Benefits */}
            <div 
              className="bg-vanguardia-blue/10 backdrop-blur-sm rounded-2xl p-8 animate-slide-in border border-vanguardia-blue/40 hover:border-vanguardia-blue/60 transition-all duration-300 vanguardia-blue-glow" 
              style={{animationDelay: '0.2s'}}
            >
              <h3 className="text-2xl font-bold mb-6 text-vanguardia-white font-funnel">
                Quais Benefícios em Fazer Parte da Mentoria
              </h3>
              <div className="space-y-4">
                {generalBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-vanguardia-blue mt-1 flex-shrink-0" />
                    <p className="text-vanguardia-white font-redhat">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={onOpenModal} 
              size="lg" 
              className="bg-vanguardia-blue hover:bg-vanguardia-blue/90 text-vanguardia-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 vanguardia-blue-glow font-funnel uppercase tracking-wide"
            >
              Fazer Parte da Mentoria Mensal - R$0
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
