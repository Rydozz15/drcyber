'use client';

import { MessageCircle } from 'lucide-react';
import Image from 'next/image';
import { COLORS, WHATSAPP_NUMBER } from '@/lib/constants';

export default function Footer() {
  const openWhatsApp = () => {
    const message = "Hola Doctor Cyber, quisiera más información sobre sus servicios.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <footer className="bg-[#2C3E50] text-white py-12 px-4" style={{ backgroundColor: COLORS.azulOscuro }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-[#2D9CDB] to-[#2D9CDB]/90 p-1 rounded-xl shadow-lg">
                <Image
                  src="/logo/logo-white.webp"
                  alt="Doctor Cyber - Logo blanco"
                  width={80}
                  height={80}
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <span className="text-2xl font-bold text-white">DOCTOR CYBER</span>
                <div className="text-sm text-[#2D9CDB]" style={{ color: COLORS.azulDoctor }}>Clínica de Salud Digital</div>
              </div>
            </div>
            <p className="text-gray-300">
              Hacemos la ciberseguridad accesible, comprensible y humana para las PYMEs que no tienen departamento de TI.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#2D9CDB]" style={{ color: COLORS.azulDoctor }}>Horario de Atención</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex justify-between">
                <span>Lunes a Viernes</span>
                <span className="text-[#F2C94C]" style={{ color: COLORS.amarilloLuz }}>9:00 - 19:00 hrs</span>
              </div>
              <div className="flex justify-between">
                <span>Sábados</span>
                <span className="text-[#F2C94C]" style={{ color: COLORS.amarilloLuz }}>10:00 - 14:00 hrs</span>
              </div>
              <div className="flex justify-between">
                <span>Urgencias</span>
                <span className="text-[#E8505B]" style={{ color: COLORS.rojoCyber }}>24/7 vía WhatsApp</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#2D9CDB]" style={{ color: COLORS.azulDoctor }}>Contacto Directo</h4>
            <div className="space-y-4">
              <button 
                onClick={openWhatsApp}
                className="w-full bg-gradient-to-r from-[#2D9CDB] to-[#2D9CDB]/90 py-3 rounded-full hover:from-[#2D9CDB]/90 hover:to-[#2D9CDB] transition font-semibold text-white shadow-lg"
                style={{ backgroundColor: COLORS.azulDoctor }}
              >
                <MessageCircle className="inline w-5 h-5 mr-2" />
                WhatsApp Business
              </button>
              <div className="text-gray-300 text-sm">
                <p className="flex items-center gap-2">
                  <span className="text-[#2D9CDB]" style={{ color: COLORS.azulDoctor }}>✉️</span>
                  contacto@doctorcyber.cl
                </p>
                <p className="flex items-center gap-2 mt-2">
                  <span className="text-[#F2C94C]" style={{ color: COLORS.amarilloLuz }}>📍</span>
                  Servicios en todo Chile
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#34495E] pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 Doctor Cyber Clínica de Ciberseguridad. Todos los derechos reservados.
            <br />
            <span className="text-gray-500">No somos un servicio médico real. Somos expertos en ciberseguridad usando analogías médicas.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}