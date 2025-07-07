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
    "8 anos no mercado digital, construindo negócios, agências e aceleradoras",
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 pb-0 bg-gradient-to-br from-vanguardia-black via-vanguardia-dark-blue to-vanguardia-medium-blue overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-60 h-60 sm:w-80 sm:h-80 bg-vanguardia-blue/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div
          className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-60 h-60 sm:w-80 sm:h-80 bg-vanguardia-blue/15 rounded-full blur-3xl animate-pulse-glow"
          style={{
            animationDelay: "1s",
          }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-vanguardia-blue/5 rounded-full blur-3xl"></div>
      </div>

      {/* Conteúdo principal */}
      <div className="container mx-auto px-0 sm:px-0 lg:px-0 relative z-10 w-full flex flex-col">
        <div className="w-full flex-grow">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-vanguardia-white font-funnel vanguardia-text-glow">
              Quem Sou Eu
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Seção da imagem */}
            <div className="relative order-2 lg:order-1 flex flex-col justify-end items-center w-full">
              <div className="relative w-full flex justify-center items-end">
                <div
                  className="img-borda-translucida"
                  style={{
                    display: "inline-block",
                    border: "1px solid rgba(255,255,255,0.22)",
                    borderRadius: "16px",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
                    overflow: "hidden",
                    width: "380px", // Expandido para telas menores
                    maxWidth: "100%",
                  }}
                >
                  <img
                    alt="Jorge Antonio Auad Filho - CEO Grupo Vanguardia"
                    className="block w-full h-auto lg:w-[530px]" // Expandido para desktop
                    src="/JorgeAuad.png"
                  />
                </div>
              </div>
            </div>

            {/* Seção de conteúdo */}
            <div className="order-1 lg:order-2 flex flex-col items-center justify-center text-center w-full">
              <div className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 sm:mb-8 text-vanguardia-blue font-funnel vanguardia-text-glow w-full text-center">
                Jorge Antonio Auad Filho
              </div>
              <div className="space-y-4 mb-6 w-full flex flex-col items-center">
                {credentials.map((credential, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 sm:gap-4 animate-slide-in bg-vanguardia-white/5 py-3 px-4 sm:py-4 sm:px-6 rounded-lg border border-vanguardia-blue/20 hover:border-vanguardia-blue/40 transition-all duration-300 hover:shadow-lg backdrop-blur-sm w-full max-w-[95vw] sm:max-w-[520px] text-left"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-lime-400 flex-shrink-0" />
                    <p className="text-base sm:text-lg text-vanguardia-white font-redhat leading-relaxed w-full break-words">
                      {credential}
                    </p>
                  </div>
                ))}
              </div>
              <div className="text-center w-full flex flex-col items-center mb-8">
                <Button
                  onClick={onOpenModal}
                  size="lg"
                  className="w-[300px] h-[60px] sm:w-[380px] sm:h-[68px] bg-lime-400 hover:bg-lime-500 text-black font-bold text-base sm:text-lg transition-all duration-300 font-funnel border-0 rounded-xl uppercase tracking-wide mx-auto flex items-center justify-center mb-6 text-center whitespace-normal"
                >
                  Quero fazer parte da mentoria mensal - R$0
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer no final da página */}
      <footer className="w-full text-center text-xs text-vanguardia-gray py-6 font-redhat opacity-80 mt-0">
        TODOS OS DIREITOS RESERVADOS. VANGUARDIA, 2025
      </footer>
    </section>
  );
};

export default AboutSection;