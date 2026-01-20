'use client';

import { MessageCircle } from 'lucide-react';
import { COLORS, WHATSAPP_NUMBER } from '@/lib/constants';

interface WhatsAppButtonProps {
  service?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function WhatsAppButton({ service, className = '', children }: WhatsAppButtonProps) {
  const openWhatsApp = () => {
    let message = "Hola Doctor Cyber, me gustaría consultar sobre sus servicios de ciberseguridad para mi empresa.";
    
    if (service) {
      message = `Hola Doctor Cyber, me interesa el servicio de: ${service}. ${message}`;
    }
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className={`bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-semibold rounded-full px-6 py-3 hover:from-[#25D366]/90 hover:to-[#128C7E]/90 transition-all shadow-lg hover:shadow-[#25D366]/30 flex items-center gap-2 ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      {children || 'Consultar por WhatsApp'}
    </button>
  );
}