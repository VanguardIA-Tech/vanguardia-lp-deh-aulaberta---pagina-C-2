
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
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-funnel text-vanguardia-white vanguardia-text-glow">
                Tu estás usando IA errado.
              </h2>
              <p className="text-2xl md:text-3xl mb-8 text-vanguardia-blue italic font-funnel font-semibold">
                E isso te custa 28k por mês.
              </p>
              <p className="text-xl mb-8 text-vanguardia-gray leading-relaxed font-redhat">
                Aumenta teu ticket em 10x usando o mesmo conhecimento que tu já tem, 
                apenas deixando de ser braço para se tornar cérebro.
              </p>
              
              <div className="space-y-4 mb-8">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 animate-slide-in bg-vanguardia-white/5 p-4 rounded-lg border border-vanguardia-blue/20 backdrop-blur-sm" 
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <CheckCircle className="w-6 h-6 text-vanguardia-blue mt-1 flex-shrink-0" />
                    <p className="text-lg text-vanguardia-white font-redhat">{stat}</p>
                  </div>
                ))}
              </div>
              
              <Button 
                onClick={onOpenModal} 
                size="lg" 
                className="bg-vanguardia-blue hover:bg-vanguardia-blue/90 text-vanguardia-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 vanguardia-blue-glow font-funnel uppercase tracking-wide"
              >
                Fazer Parte da Mentoria Mensal - R$0
              </Button>
            </div>
            
            {/* Jorge Antonio Card com imagem maior e sem overlay */}
            <div className="flex justify-center lg:justify-end animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="relative">
                <div className="w-96 h-[500px] bg-gradient-to-br from-vanguardia-blue/20 to-vanguardia-deep-blue/40 rounded-2xl border border-vanguardia-blue/30 backdrop-blur-sm overflow-hidden vanguardia-blue-glow">
                  {/* Jorge's Image sem overlay escuro */}
                  <div className="relative h-full">
                    <img 
                      src="/lovable-uploads/7d292775-fbe4-47a2-8b87-4a311f94dd8f.png" 
                      alt="Jorge Antonio Auad Filho - CEO Grupo Vanguardia" 
                      className="w-full h-full object-cover object-center" 
                    />
                    
                    {/* Text overlay apenas na parte inferior */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-center bg-gradient-to-t from-vanguardia-black/60 to-transparent">
                      <h3 className="text-xl font-semibold mb-2 font-funnel text-vanguardia-white">
                        Jorge Antonio
                      </h3>
                      <p className="text-sm text-vanguardia-gray font-redhat">
                        CEO Grupo Vanguardia
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Elementos decorativos ao redor da imagem */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-vanguardia-blue rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-vanguardia-blue rounded-full opacity-80 animate-pulse" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
