
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FormModal = ({ isOpen, onClose }: FormModalProps) => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    faturamento: ''
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aqui você pode integrar com a API do ActiveCampaign
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-vanguardia-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-vanguardia-white rounded-2xl shadow-2xl w-full max-w-md sm:max-w-lg max-h-[90vh] overflow-y-auto border border-vanguardia-gray/20">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 hover:bg-vanguardia-gray/10 rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-vanguardia-gray" />
        </button>
        
        {/* Form Container */}
        <div className="p-6 sm:p-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-vanguardia-blue mb-2 font-funnel">
              Cadastre-se para assistir a aula aberta da Vanguardia
            </h2>
            <p className="text-sm sm:text-base text-vanguardia-gray font-redhat">
              Seja bem-vindo à Vanguardia.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Nome Completo */}
            <div className="space-y-2">
              <Label htmlFor="fullname" className="text-vanguardia-black font-semibold font-redhat text-sm sm:text-base">
                Nome completo <span className="text-red-500">*</span>
              </Label>
              <Input
                id="fullname"
                type="text"
                placeholder="Digite seu nome"
                value={formData.fullname}
                onChange={(e) => handleInputChange('fullname', e.target.value)}
                required
                className="border-vanguardia-gray/30 focus:border-vanguardia-blue focus:ring-vanguardia-blue/20 font-redhat text-sm sm:text-base h-10 sm:h-12"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-vanguardia-black font-semibold font-redhat text-sm sm:text-base">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Digite seu email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                className="border-vanguardia-gray/30 focus:border-vanguardia-blue focus:ring-vanguardia-blue/20 font-redhat text-sm sm:text-base h-10 sm:h-12"
              />
            </div>

            {/* Telefone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-vanguardia-black font-semibold font-redhat text-sm sm:text-base">
                Telefone <span className="text-red-500">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Digite seu telefone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                required
                className="border-vanguardia-gray/30 focus:border-vanguardia-blue focus:ring-vanguardia-blue/20 font-redhat text-sm sm:text-base h-10 sm:h-12"
              />
            </div>

            {/* Faturamento Mensal */}
            <div className="space-y-3">
              <Label className="text-vanguardia-black font-semibold font-redhat text-sm sm:text-base">
                Faturamento mensal <span className="text-red-500">*</span>
              </Label>
              <RadioGroup
                value={formData.faturamento}
                onValueChange={(value) => handleInputChange('faturamento', value)}
                className="space-y-2"
              >
                {[
                  'até R$ 15.000,00',
                  'R$ 15.000,00 a R$ 30.000,00',
                  'R$ 30.000,00 a R$ 50.000,00',
                  'R$ 50.000,00 a R$ 100.000,00',
                  'R$ 100.000,00 a R$ 250.000,00',
                  'acima de R$ 250.000,00'
                ].map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={option}
                      id={option}
                      className="border-vanguardia-gray/40 text-vanguardia-blue"
                    />
                    <Label htmlFor={option} className="font-redhat text-vanguardia-black cursor-pointer text-sm sm:text-base">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-vanguardia-blue hover:bg-vanguardia-blue/90 text-vanguardia-white font-semibold py-3 sm:py-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl font-funnel text-sm sm:text-base"
            >
              Enviar
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
