import React from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ open, onClose, children }: ModalProps) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white rounded-xl p-6 relative max-w-full w-[95vw] max-h-[95vh] overflow-auto">
        <button className="absolute top-2 right-2 text-black text-2xl" onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
