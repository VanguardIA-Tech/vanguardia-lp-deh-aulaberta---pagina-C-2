
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
    <section className="py-20 bg-vanguardia-black text-vanguardia-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-funnel text-vanguardia-white">
                Tu estás usando IA errado.
              </h2>
              <p className="text-2xl md:text-3xl mb-8 text-vanguardia-blue italic font-funnel">
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
                    className="flex items-start gap-3 animate-slide-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="w-6 h-6 text-vanguardia-blue mt-1 flex-shrink-0" />
                    <p className="text-lg text-vanguardia-gray font-redhat">{stat}</p>
                  </div>
                ))}
              </div>
              
              <Button 
                onClick={onOpenModal}
                size="lg" 
                className="bg-vanguardia-blue hover:bg-blue-600 text-vanguardia-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-funnel"
              >
                Fazer Parte da Mentoria Mensal - R$0
              </Button>
            </div>
            
            {/* Jorge Antonio Card with Image */}
            <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <div className="w-80 h-96 bg-gradient-to-br from-vanguardia-blue/20 to-purple-500/20 rounded-2xl border border-vanguardia-blue/30 backdrop-blur-sm overflow-hidden">
                  {/* Jorge's Image */}
                  <div className="relative h-full">
                    <img 
                      src="/lovable-uploads/7d292775-fbe4-47a2-8b87-4a311f94dd8f.png" 
                      alt="Jorge Antonio Auad Filho - CEO Grupo Vanguardia"
                      className="w-full h-full object-cover object-center"
                    />
                    
                    {/* Overlay gradient for better text visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-vanguardia-black/80 via-transparent to-transparent"></div>
                    
                    {/* Text overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                      <h3 className="text-xl font-semibold mb-2 font-funnel text-vanguardia-white">Jorge Antonio</h3>
                      <p className="text-sm text-vanguardia-gray font-redhat">CEO Grupo Vanguardia</p>
                    </div>
                  </div>
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
