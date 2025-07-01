
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AboutSectionProps {
  onOpenModal: () => void;
}

const AboutSection = ({ onOpenModal }: AboutSectionProps) => {
  const credentials = [
    "Conselheiro de Growth & IA em empresas que ultrapassam 9 dígitos/ano de receita",
    "CEO do Grupo Vanguardia e sócio do Do IT Hub, ecossistema de inovação em Belém",
    "Mais de 400 projetos acelerados e múltiplos 7 dígitos de faturamento",
    "8 anos no mercado digital, construindo negócios, agências e aceleradoras"
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-vanguardia-black via-vanguardia-dark-blue to-vanguardia-medium-blue relative overflow-hidden">
      {/* Background decorativo com elementos sofisticados */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-60 h-60 sm:w-80 sm:h-80 bg-vanguardia-blue/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-60 h-60 sm:w-80 sm:h-80 bg-vanguardia-blue/15 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-vanguardia-blue/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-vanguardia-white font-funnel vanguardia-text-glow">
              Quem Sou Eu
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image Section */}
            <div className="relative order-2 lg:order-1">
              <div className="relative">
                <div className="relative bg-transparent rounded-2xl p-0 border-0">
                  <img 
                    src="/lovable-uploads/6179de73-e25c-4a1d-8511-2bdf87f604bd.png" 
                    alt="Jorge Antonio Auad Filho - CEO Grupo Vanguardia"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="order-1 lg:order-2">
              <div className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 sm:mb-8 text-vanguardia-blue font-funnel vanguardia-text-glow">
                Jorge Antonio Auad Filho
              </div>
              
              <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
                {credentials.map((credential, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 sm:gap-4 animate-slide-in bg-vanguardia-white/5 p-3 sm:p-4 rounded-lg border border-vanguardia-blue/20 hover:border-vanguardia-blue/40 transition-all duration-300 hover:shadow-lg backdrop-blur-sm"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-vanguardia-blue mt-1 flex-shrink-0" />
                    <p className="text-base sm:text-lg text-vanguardia-white font-redhat leading-relaxed">{credential}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center lg:text-left">
                <Button 
                  onClick={onOpenModal}
                  size="lg" 
                  className="w-full sm:w-auto bg-vanguardia-blue hover:bg-vanguardia-blue/90 text-vanguardia-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 vanguardia-blue-glow font-funnel border-0 rounded-xl uppercase tracking-wide"
                >
                  Fazer Parte da Mentoria Mensal - R$0
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
