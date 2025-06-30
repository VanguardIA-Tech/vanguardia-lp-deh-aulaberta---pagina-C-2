
import { useState } from "react";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import ImpactSection from "@/components/ImpactSection";
import FormModal from "@/components/FormModal";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    console.log("Opening modal");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log("Closing modal");
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen">
      <ImpactSection onOpenModal={openModal} />
      <BenefitsSection onOpenModal={openModal} />
      <AboutSection onOpenModal={openModal} />
      
      <FormModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Index;
