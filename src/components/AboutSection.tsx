
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
    <section className="py-20 bg-gradient-to-br from-vanguardia-white via-vanguardia-white to-vanguardia-blue/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-vanguardia-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-vanguardia-blue/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-vanguardia-black font-funnel">
              Quem Sou Eu
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative order-2 lg:order-1">
              <div className="relative">
                {/* Decorative background circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-vanguardia-blue/20 to-vanguardia-blue/5 rounded-full transform rotate-6 scale-110"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-vanguardia-blue/10 to-transparent rounded-full transform -rotate-3 scale-105"></div>
                
                {/* Main image container */}
                <div className="relative bg-gradient-to-br from-vanguardia-white to-vanguardia-blue/10 rounded-2xl p-8 shadow-2xl border border-vanguardia-blue/20">
                  <img 
                    src="/lovable-uploads/6179de73-e25c-4a1d-8511-2bdf87f604bd.png" 
                    alt="Jorge Antonio Auad Filho - CEO Grupo Vanguardia"
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                  
                  {/* Overlay gradient for better integration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-vanguardia-blue/5 to-transparent rounded-2xl pointer-events-none"></div>
                </div>
                
                {/* Floating accent elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-vanguardia-blue rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-vanguardia-blue rounded-full opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="order-1 lg:order-2">
              <div className="text-2xl md:text-3xl font-semibold mb-8 text-vanguardia-blue font-funnel">
                Jorge Antonio Auad Filho
              </div>
              
              <div className="space-y-6 mb-10">
                {credentials.map((credential, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 animate-slide-in bg-vanguardia-white/50 p-4 rounded-lg border border-vanguardia-blue/10 hover:border-vanguardia-blue/20 transition-all duration-300 hover:shadow-md"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="w-6 h-6 text-vanguardia-blue mt-1 flex-shrink-0" />
                    <p className="text-lg text-vanguardia-black font-redhat leading-relaxed">{credential}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center lg:text-left">
                <Button 
                  onClick={onOpenModal}
                  size="lg" 
                  className="bg-vanguardia-blue hover:bg-vanguardia-blue/90 text-vanguardia-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-funnel border-0 rounded-xl"
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
