import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImpactSectionProps {
  onOpenModal: () => void;
}

const ImpactSection = ({ onOpenModal }: ImpactSectionProps) => {

  return (

    <section className="mt-6 md:mt-0 text-vanguardia-white relative overflow-hidden" style={{ background: 'url(/bg-impact-section.png) center center / cover no-repeat, #0a1633' }}>
      {/* Elementos decorativos com glow azul */}
      {/* <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 bg-vanguardia-blue/20 rounded-full blur-3xl animate-pulse-glow"></div> */}
      {/* <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-28 h-28 sm:w-40 sm:h-40 bg-vanguardia-blue/15 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '1s'}}></div> */}
      <div className="container mx-auto px-0 relative z-10 min-h-screen flex items-center w-full max-w-none">
        <div className="max-w-10xl mx-auto w-full" style={{ marginLeft: '5rem', marginRight: '5rem' }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen max-w-none w-full px-0">
            {/* Content */}
            <div className="animate-fade-in text-center lg:text-left flex flex-col items-start lg:items-start justify-center px-4 w-[130%]">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-funnel text-vanguardia-white vanguardia-text-glow max-w-full w-full break-words mx-auto text-left">
                Você ainda vende execução sem método e por isso tá na briga em  guerra
                <span className= "whitespace-nowrap"> de preços?🚨  </span>                      
              </h1>
              
              <h5 className="text-2xl md:text-3xl mb-8 text-vanguardia-blue font-funnel font-semibold w-full break-words text-left">
                  Enquanto tu segues apagando incêndios e negociando centavos, outros estão fechando projetos de R$21k, R$48k e até R$120k.
                </h5>
              <p className="text-xl mb-8 text-vanguardia-gray leading-relaxed font-redhat w-full break-words text-left">
               Usando clareza, método próprio e Inteligência Artificial como diferencial.
              </p>
              <Button
                onClick={onOpenModal}
                size="lg"
                className="w-[300px] h-[60px] sm:w-[380px] sm:h-[68px] bg-lime-400 hover:bg-lime-500 text-black font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 vanguardia-blue-glow font-funnel uppercase tracking-wide rounded-xl flex items-center justify-center text-center whitespace-normal"
              >
                PARTICIPAR DA MENTORIA ABERTA
              </Button>
                <div className="w-[300px] sm:w-[380px] mt-4"> {/* Ajustado para ter a mesma largura do botão */}
                  <p className="text-sm text-vanguardia-gray text-left leading-relaxed">
                  100% Secure - Privacy Guaranteed
                  </p>
                </div>

            </div>

            {/* Jorge Antonio Card com imagem maior e sem overlay */}
            <div className="flex flex-col items-center justify-end h-full animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative flex flex-col items-center justify-end w-full">
                <img
                  src="/7d292775-fbe4-47a2-8b87-4a311f94dd8f.png"
                  alt="Jorge Antonio Auad Filho - CEO Grupo Vanguardia"
                  className="w-[100vw] sm:w-full h-auto object-contain object-center rounded-2xl bg-transparent mx-auto lg:w-[900px] lg:max-w-[1100px]"
                  style={{ maxHeight: '1200px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;