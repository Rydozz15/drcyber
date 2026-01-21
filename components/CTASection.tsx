'use client';

import { Clock, MessageCircle, ArrowRight, Star } from 'lucide-react';
import { COLORS, WHATSAPP_NUMBER } from '@/lib/constants';

export default function CTASection() {
  const openWhatsApp = () => {
    const message = "Hola Doctor Cyber, quiero una consulta gratuita sobre ciberseguridad.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  // SVG como variable separada
  const svgBackground = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    opacity: 0.2
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-[#2D9CDB] to-[#2D9CDB]/90 relative overflow-hidden">
      <div 
        className="absolute inset-0"
        style={svgBackground}
      ></div>
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
          <Clock className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
          ¿Te enferma pensar en ciberseguridad?
          <br />
          <span className="text-white">La primera consulta no duele nada</span>
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Literalmente, es gratis. Y puede ser la diferencia entre un susto y una quiebra.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            onClick={openWhatsApp}
            className="bg-white text-[#2D9CDB] px-12 py-5 rounded-full hover:bg-gray-50 transition-all font-semibold text-lg inline-flex items-center justify-center gap-3 shadow-2xl hover:shadow-white/30"
            style={{ color: COLORS.azulDoctor }}
          >
            <MessageCircle className="w-6 h-6" />
            Chatear por WhatsApp
            <ArrowRight className="w-5 h-5" />
          </button>
          <button 
            onClick={() => document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white/50 text-white px-12 py-5 rounded-full hover:bg-white/10 transition font-semibold text-lg"
          >
            Conocer al Equipo
          </button>
        </div>
        <p className="text-white/80 mt-8 flex items-center justify-center gap-2">
          <Star className="w-5 h-5 text-[#F2C94C]" style={{ color: COLORS.amarilloLuz }} />
          Respondemos en menos de 2 horas hábiles
        </p>
      </div>
    </section>
  );
}