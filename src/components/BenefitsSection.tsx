
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              O que tu vais receber
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mentoria com o Jorge + Conteúdo Diário em Grupo
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Mentorship Method */}
            <div className="bg-blue-50 rounded-2xl p-8 animate-slide-in">
              <h3 className="text-2xl font-bold mb-6 text-brand-blue-800">
                Mentoria Mensal com Jorge - Método (DEH)
              </h3>
              <div className="space-y-4">
                {mentorshipBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* General Benefits */}
            <div className="bg-red-50 rounded-2xl p-8 animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold mb-6 text-brand-red-600">
                Quais Benefícios em Fazer Parte da Mentoria
              </h3>
              <div className="space-y-4">
                {generalBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={onOpenModal}
              size="lg" 
              className="bg-brand-red-500 hover:bg-brand-red-600 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
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
