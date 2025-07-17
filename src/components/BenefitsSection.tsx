import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollDownArrow from "@/components/ScrollDownArrow"; // Importando o componente ScrollDownArrow

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
    <section className="bg-gradient-to-br from-vanguardia-deep-blue via-vanguardia-medium-blue to-vanguardia-black py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 h-48 sm:w-64 sm:h-64 bg-vanguardia-blue/30 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-36 h-36 sm:w-48 sm:h-48 bg-vanguardia-blue/20 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-vanguardia-white font-funnel vanguardia-text-glow">
              O que tu vais receber
            </h2>
            <p className="text-lg sm:text-xl text-vanguardia-gray max-w-3xl mx-auto font-redhat">
              Mentoria com o Jorge + Conteúdo Exclusivo em Grupo
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
            {/* Mentorship Method */}
            <div className="bg-vanguardia-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 animate-slide-in border border-vanguardia-blue/30 hover:border-vanguardia-blue/50 transition-all duration-300 vanguardia-blue-glow">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white font-funnel">
                Mentoria Mensal com Jorge - Método (DEH)
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {mentorshipBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-lime-400 mt-1 flex-shrink-0" />
                    <p className="text-sm sm:text-base text-vanguardia-white font-redhat">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* General Benefits */}
            <div 
              className="bg-vanguardia-blue/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 animate-slide-in border border-vanguardia-blue/40 hover:border-vanguardia-blue/60 transition-all duration-300 vanguardia-blue-glow" 
              style={{animationDelay: '0.2s'}}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-vanguardia-white font-funnel">
                Quais Benefícios em Fazer Parte da Mentoria
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {generalBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-lime-400 mt-1 flex-shrink-0" />
                    <p className="text-sm sm:text-base text-vanguardia-white font-redhat">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={onOpenModal} 
              size="lg" 
              className="w-[300px] h-[60px] lg:w-[380px] lg:h-[68px] bg-lime-400 hover:bg-lime-500 text-black font-bold text-base lg:text-lg transition-all duration-300 font-funnel rounded-xl mx-auto flex items-center justify-center mb-6 text-center whitespace-normal"
            >
              Quero Entrar Para a Mentoria Mensal
            </Button>
          </div>
        </div>
      </div>
      <ScrollDownArrow /> {/* Adicionando o componente ScrollDownArrow aqui */}
    </section>
  );
};

export default BenefitsSection;
