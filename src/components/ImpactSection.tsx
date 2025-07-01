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
    <section className="py-20 bg-gradient-to-br from-vanguardia-black via-vanguardia-dark-blue via-vanguardia-medium-blue to-vanguardia-deep-blue text-vanguardia-white relative overflow-hidden">
      {/* Background pattern com efeitos sofisticados */}
      <div className="absolute inset-0 opacity-5">
        <div 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F4F4F4' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} 
          className="w-full h-full bg-repeat"
        ></div>
      </div>
      
      {/* Elementos decorativos com glow azul */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-vanguardia-blue/20 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-vanguardia-blue/15 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center">
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
              
              <Button 
                onClick={onOpenModal} 
                size="lg" 
                className="bg-vanguardia-blue hover:bg-vanguardia-blue/90 text-vanguardia-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 vanguardia-blue-glow font-funnel uppercase tracking-wide w-full lg:max-w-lg mx-auto lg:mx-0"
              >
                Fazer Parte da Mentoria Mensal - R$0
              </Button>
            </div>
            
            {/* Jorge Antonio Card com imagem maior e sem overlay */}
            <div className="flex flex-col items-center justify-end h-full animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="relative flex flex-col items-center justify-end w-full">
                <img 
                  src="/lovable-uploads/7d292775-fbe4-47a2-8b87-4a311f94dd8f.png" 
                  alt="Jorge Antonio Auad Filho - CEO Grupo Vanguardia" 
                  className="w-[100vw] sm:w-full h-auto object-contain object-center rounded-2xl bg-transparent mx-auto"
                  style={{maxHeight: '1100px'}}
                />
                <div className="flex flex-col items-center justify-center text-center mt-6 w-full">
                  <h3 className="text-xl font-semibold font-funnel text-vanguardia-white leading-tight">
                    Jorge Antonio
                  </h3>
                  <p className="text-sm text-vanguardia-gray font-redhat leading-tight">
                    CEO Grupo Vanguardia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
