
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Quem Sou Eu
          </h2>
          
          <div className="text-2xl md:text-3xl font-semibold mb-12 text-gray-700">
            Jorge Antonio Auad Filho
          </div>
          
          <div className="grid gap-6 text-left max-w-3xl mx-auto mb-12">
            {credentials.map((credential, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-700">{credential}</p>
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
      </div>
    </section>
  );
};

export default AboutSection;
