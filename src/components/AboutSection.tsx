
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
    <section className="py-20 bg-gradient-to-br from-vanguardia-black via-vanguardia-dark-blue to-vanguardia-medium-blue relative overflow-hidden">
      {/* Background decorativo com elementos sofisticados */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-vanguardia-blue/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-vanguardia-blue/15 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-vanguardia-blue/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-vanguardia-white font-funnel vanguardia-text-glow">
              Quem Sou Eu
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative order-2 lg:order-1">
              <div className="relative">
                {/* Círculos decorativos de fundo com efeito glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-vanguardia-blue/20 to-vanguardia-blue/5 rounded-full transform rotate-6 scale-110 vanguardia-blue-glow"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-vanguardia-blue/15 to-transparent rounded-full transform -rotate-3 scale-105"></div>
                
                {/* Container principal da imagem */}
                <div className="relative bg-gradient-to-br from-vanguardia-white/10 to-vanguardia-blue/20 rounded-2xl p-8 vanguardia-blue-glow border border-vanguardia-blue/30 backdrop-blur-sm">
                  <img 
                    src="/lovable-uploads/6179de73-e25c-4a1d-8511-2bdf87f604bd.png" 
                    alt="Jorge Antonio Auad Filho - CEO Grupo Vanguardia"
                    className="w-full h-auto rounded-xl shadow-2xl"
                  />
                  
                  {/* Overlay gradient para melhor integração */}
                  <div className="absolute inset-0 bg-gradient-to-t from-vanguardia-blue/10 to-transparent rounded-2xl pointer-events-none"></div>
                </div>
                
                {/* Elementos flutuantes com animação */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-vanguardia-blue rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-vanguardia-blue rounded-full opacity-80 animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-vanguardia-blue rounded-full opacity-40 animate-pulse" style={{animationDelay: '2s'}}></div>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="order-1 lg:order-2">
              <div className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-vanguardia-blue font-funnel vanguardia-text-glow">
                Jorge Antonio Auad Filho
              </div>
              
              <div className="space-y-6 mb-10">
                {credentials.map((credential, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 animate-slide-in bg-vanguardia-white/5 p-4 rounded-lg border border-vanguardia-blue/20 hover:border-vanguardia-blue/40 transition-all duration-300 hover:shadow-lg backdrop-blur-sm"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="w-6 h-6 text-vanguardia-blue mt-1 flex-shrink-0" />
                    <p className="text-lg text-vanguardia-white font-redhat leading-relaxed">{credential}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center lg:text-left">
                <Button 
                  onClick={onOpenModal}
                  size="lg" 
                  className="bg-vanguardia-blue hover:bg-vanguardia-blue/90 text-vanguardia-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 vanguardia-blue-glow font-funnel border-0 rounded-xl uppercase tracking-wide"
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
