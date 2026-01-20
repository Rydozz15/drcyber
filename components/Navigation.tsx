'use client';

import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import { WHATSAPP_NUMBER, DEFAULT_MESSAGE } from '@/lib/constants';

interface NavigationProps {
  scrollToSection: (id: string) => void;
}

export default function Navigation({ scrollToSection }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(DEFAULT_MESSAGE);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  const handleScroll = (id: string) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-[#E0E0E0] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Solo la imagen, sin círculos decorativos */}
          <div className='flex justify-center items-center'>
            <div className="relative w-16 h-16 mr-1"> {/* Ajusta el tamaño según tu logo */}
              <Image
                src="/logo/logo.webp"
                alt="Doctor Cyber"
                width={64}
                height={64}
                className="object-contain"
                priority
              />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#2D9CDB] to-[#2C3E50] bg-clip-text text-transparent">
                DOCTOR CYBER
              </span>
              <div className="text-xs text-orange-400 font-medium">Salud Digital para Empresas</div>
            </div>
          </div>
            
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleScroll('diagnostico')} 
              className="text-[#2C3E50] hover:text-[#2D9CDB] transition font-medium"
            >
              Tu Diagnóstico
            </button>
            <button 
              onClick={() => handleScroll('servicios')} 
              className="text-[#2C3E50] hover:text-[#2D9CDB] transition font-medium"
            >
              Tratamientos
            </button>
            <button 
              onClick={() => handleScroll('nosotros')} 
              className="text-[#2C3E50] hover:text-[#2D9CDB] transition font-medium"
            >
              Nuestro Equipo
            </button>
            <button 
              onClick={openWhatsApp}
              className="bg-gradient-to-r from-[#2D9CDB] to-[#2D9CDB]/90 px-8 py-3 rounded-full hover:from-[#2D9CDB]/90 hover:to-[#2D9CDB] transition-all font-semibold text-white shadow-lg hover:shadow-[#2D9CDB]/30"
            >
              <MessageCircle className="inline w-5 h-5 mr-2" />
              Consulta Gratis
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-3 rounded-lg hover:bg-[#F2C94C]/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#2C3E50]" /> : <Menu className="w-6 h-6 text-[#2C3E50]" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#E0E0E0] shadow-lg">
          <div className="px-4 py-6 space-y-4">
            <button 
              onClick={() => handleScroll('diagnostico')} 
              className="block w-full text-left py-3 text-[#2C3E50] hover:text-[#2D9CDB] border-b border-[#E0E0E0] font-medium"
            >
              Tu Diagnóstico
            </button>
            <button 
              onClick={() => handleScroll('servicios')} 
              className="block w-full text-left py-3 text-[#2C3E50] hover:text-[#2D9CDB] border-b border-[#E0E0E0] font-medium"
            >
              Tratamientos
            </button>
            <button 
              onClick={() => handleScroll('nosotros')} 
              className="block w-full text-left py-3 text-[#2C3E50] hover:text-[#2D9CDB] border-b border-[#E0E0E0] font-medium"
            >
              Nuestro Equipo
            </button>
            <button 
              onClick={openWhatsApp}
              className="w-full bg-gradient-to-r from-[#2D9CDB] to-[#2D9CDB]/90 py-4 rounded-full hover:from-[#2D9CDB]/90 hover:to-[#2D9CDB] transition font-semibold text-white mt-4 shadow-lg"
            >
              <MessageCircle className="inline w-5 h-5 mr-2" />
              Consulta Gratis
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}