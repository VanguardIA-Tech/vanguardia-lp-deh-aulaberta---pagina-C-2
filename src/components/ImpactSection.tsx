
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
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Tu estás usando IA errado.
              </h2>
              <p className="text-2xl md:text-3xl mb-8 text-blue-300 italic">
                E isso te custa 28k por mês.
              </p>
              <p className="text-xl mb-8 text-gray-300 leading-relaxed">
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
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-lg text-gray-300">{stat}</p>
                  </div>
                ))}
              </div>
              
              <Button 
                onClick={onOpenModal}
                size="lg" 
                className="bg-brand-red-500 hover:bg-brand-red-600 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Fazer Parte da Mentoria Mensal - R$0
              </Button>
            </div>
            
            {/* Image placeholder */}
            <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <div className="w-80 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-white/20 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full"></div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Jorge Antonio</h3>
                    <p className="text-sm text-gray-300">CEO Grupo Vanguardia</p>
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
