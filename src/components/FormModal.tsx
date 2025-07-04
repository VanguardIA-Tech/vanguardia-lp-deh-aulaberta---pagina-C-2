import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import ActiveCampaignForm from "./ActiveCampaignForm";

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
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl max-h-[90vh] overflow-y-auto border border-vanguardia-gray/20 flex flex-col items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8 min-w-[280px]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 hover:bg-vanguardia-gray/10 rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-vanguardia-gray" />
        </button>
        <div className="w-full flex justify-center items-center" style={{ width: '100%', overflow: 'visible' }}>
          <ActiveCampaignForm />
        </div>
      </div>
    </div>
  );
};

export default FormModal;
