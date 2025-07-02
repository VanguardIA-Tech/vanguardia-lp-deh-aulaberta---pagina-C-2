import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImpactSectionProps {
  onOpenModal: () => void;
}

const ImpactSection = ({ onOpenModal }: ImpactSectionProps) => {
  const stats = [
    "87% dos experts usam IA como braço (e cobram 2k)",
    "13% usam como cérebro (e cobram 30k+)",
    "A diferença? Como vendem seus serviços."
  ];

  return (

<section className="mt-6 md:mt-0 text-vanguardia-white relative overflow-hidden" style={{background: 'url(/bg-impact-section.png) center center / cover no-repeat, #0a1633'}}>
      {/* Elementos decorativos com glow azul */}
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 bg-vanguardia-blue/20 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-28 h-28 sm:w-40 sm:h-40 bg-vanguardia-blue/15 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '1s'}}></div>
      <div className="container mx-auto px-0 relative z-10 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
            {/* Content */}
            <div className="animate-fade-in text-center lg:text-left flex flex-col items-center lg:items-start justify-center px-4 w-full">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-funnel text-vanguardia-white vanguardia-text-glow w-full break-words text-center">
                Tu estás usando IA errado.
              </h2>
              <p className="text-2xl md:text-3xl mb-8 text-vanguardia-blue italic font-funnel font-semibold w-full break-words text-center">
                E isso te custa 28k por mês.
              </p>
              <p className="text-xl mb-8 text-vanguardia-gray leading-relaxed font-redhat w-full break-words text-center">
                Aumenta teu ticket em 10x usando o mesmo conhecimento que tu já tem, 
                apenas deixando de ser braço para se tornar cérebro.
              </p>
              <Button 
                onClick={onOpenModal} 
                size="lg" 
                className="bg-vanguardia-blue hover:bg-vanguardia-blue/90 text-vanguardia-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 vanguardia-blue-glow font-funnel uppercase tracking-wide w-full lg:max-w-lg mx-auto lg:mx-0 mb-6"
              >
                Fazer Parte da Mentoria Mensal - R$0
              </Button>
              <div className="space-y-4 mb-8 w-full lg:max-w-lg mx-auto lg:mx-0">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 animate-slide-in bg-vanguardia-white/5 p-4 rounded-lg border border-vanguardia-blue/20 backdrop-blur-sm w-full break-words" 
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <CheckCircle className="w-6 h-6 text-vanguardia-blue mt-1 flex-shrink-0" />
                    <p className="text-lg text-vanguardia-white font-redhat w-full break-words text-left">
                      {stat}
                    </p>
                  </div>
                ))}
              </div>
              
            </div>
            
            {/* Jorge Antonio Card com imagem maior e sem overlay */}
            <div className="flex flex-col items-center justify-end h-full animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="relative flex flex-col items-center justify-end w-full">
                <img 
                  src="/7d292775-fbe4-47a2-8b87-4a311f94dd8f.png" 
                  alt="Jorge Antonio Auad Filho - CEO Grupo Vanguardia" 
                  className="w-[100vw] sm:w-full h-auto object-contain object-center rounded-2xl bg-transparent mx-auto lg:w-[900px] lg:max-w-[1100px]"
                  style={{maxHeight: '1200px'}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
