import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onOpenModal: () => void;
}

const HeroSection = ({ onOpenModal }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-vanguardia-black via-vanguardia-blue/20 to-vanguardia-black text-vanguardia-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20c0 5.5-4.5 10-10 10s-10-4.5-10-10 4.5-10 10-10 10 4.5 10 10zm10 0c0 5.5-4.5 10-10 10s-10-4.5-10-10 4.5-10 10-10 10 4.5 10 10z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col justify-center min-h-screen">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-funnel">
            Aula Aberta:
            <span className="block bg-gradient-to-r from-vanguardia-blue to-cyan-300 bg-clip-text text-transparent">
              Método DEH
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-vanguardia-gray max-w-3xl mx-auto font-redhat">
            Descubra como escalar seu negócio usando IA de forma estratégica e 
            sair da operação para focar no que realmente importa: crescimento.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={onOpenModal}
              size="lg" 
              className="bg-vanguardia-blue hover:bg-blue-600 text-vanguardia-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-funnel"
            >
              Fazer Parte da Mentoria Mensal - R$0
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-vanguardia-white/10 backdrop-blur-sm rounded-lg p-6 border border-vanguardia-blue/20">
              <div className="text-3xl font-bold text-vanguardia-blue mb-2 font-funnel">400+</div>
              <div className="text-vanguardia-gray font-redhat">Projetos Acelerados</div>
            </div>
            <div className="bg-vanguardia-white/10 backdrop-blur-sm rounded-lg p-6 border border-vanguardia-blue/20">
              <div className="text-3xl font-bold text-vanguardia-blue mb-2 font-funnel">7x</div>
              <div className="text-vanguardia-gray font-redhat">Múltiplos de Faturamento</div>
            </div>
            <div className="bg-vanguardia-white/10 backdrop-blur-sm rounded-lg p-6 border border-vanguardia-blue/20">
              <div className="text-3xl font-bold text-vanguardia-blue mb-2 font-funnel">8 Anos</div>
              <div className="text-vanguardia-gray font-redhat">Mercado Digital</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
