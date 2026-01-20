'use client';

import { Stethoscope, Heart, CheckCircle, ArrowRight } from 'lucide-react';
import { COLORS, WHATSAPP_NUMBER } from '@/lib/constants';

export default function Hero() {
  const openWhatsApp = (service: string) => {
    const message = `Hola Doctor Cyber, me interesa el servicio de: ${service}.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden bg-gradient-to-b from-white to-[#F2C94C]/5">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2D9CDB]/5 via-transparent to-[#F2C94C]/5"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center bg-gradient-to-r from-[#2D9CDB]/10 to-[#F2C94C]/10 border border-[#2D9CDB]/30 px-6 py-3 rounded-full mb-8 shadow-sm">
              <Stethoscope className="w-5 h-5 text-[#2D9CDB] mr-2" />
              <span className="text-[#2D9CDB] font-semibold">¡Tu primera consulta es gratis!</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-[#2C3E50]">
                ¿Duele la seguridad <br />
                <span className="bg-gradient-to-r from-[#2D9CDB] to-[#E8505B] bg-clip-text text-transparent">
                  de tu empresa?
                </span>
              </span>
            </h1>
            <p className="text-xl text-[#2C3E50]/80 mb-10 leading-relaxed">
              Como doctor especialista en salud digital, detecto vulnerabilidades, prescribo soluciones y curo las heridas de ciberseguridad que afectan a las PYMEs. Hablo tu idioma, entiendo tu presupuesto.
            </p>
            <div className="flex flex-wrap gap-6">
              <button 
                onClick={() => openWhatsApp("Diagnóstico Inicial")}
                className="bg-gradient-to-r from-[#2D9CDB] to-[#2D9CDB]/90 px-10 py-5 rounded-full hover:from-[#2D9CDB]/90 hover:to-[#2D9CDB] transition-all font-semibold text-lg flex items-center gap-3 shadow-xl hover:shadow-[#2D9CDB]/30 group text-white"
                style={{ backgroundColor: COLORS.azulDoctor }}
              >
                <Stethoscope className="w-6 h-6 group-hover:animate-pulse" />
                Agendar Diagnóstico Gratis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
              <button 
                onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-[#2D9CDB] text-[#2D9CDB] px-10 py-5 rounded-full hover:bg-[#2D9CDB]/10 transition font-semibold text-lg"
                style={{ borderColor: COLORS.azulDoctor, color: COLORS.azulDoctor }}
              >
                Ver Tratamientos
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-r from-[#2D9CDB] to-[#F2C94C] rounded-full blur-3xl opacity-10"></div>
            <div className="relative bg-white border-2 border-[#E0E0E0] rounded-3xl p-8 shadow-2xl shadow-[#2D9CDB]/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-r from-[#2D9CDB] to-[#2D9CDB]/90 p-4 rounded-2xl shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-[#2D9CDB] font-semibold">Salud Digital 100%</div>
                  <div className="text-2xl font-bold text-[#2C3E50]">Monitoreo Cardíaco Empresarial</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-[#F2C94C]/10 p-4 rounded-xl border border-[#F2C94C]/20">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-[#2C3E50] font-medium">Sistema Inmune Activo</span>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <div className="flex items-center justify-between bg-[#2D9CDB]/10 p-4 rounded-xl border border-[#2D9CDB]/20">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#2D9CDB] rounded-full animate-pulse"></div>
                    <span className="text-[#2C3E50] font-medium">Revisión de Historial Clínico</span>
                  </div>
                  <CheckCircle className="w-5 h-5 text-[#2D9CDB]" />
                </div>
                <div className="flex items-center justify-between bg-[#E8505B]/10 p-4 rounded-xl border border-[#E8505B]/20">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#E8505B] rounded-full animate-pulse"></div>
                    <span className="text-[#2C3E50] font-medium">Diagnóstico Preventivo</span>
                  </div>
                  <CheckCircle className="w-5 h-5 text-[#E8505B]" />
                </div>
              </div>
              <div className="mt-8 p-4 bg-gradient-to-r from-[#2D9CDB]/10 to-[#F2C94C]/10 rounded-xl border border-[#2D9CDB]/30">
                <div className="text-sm text-[#2D9CDB] font-medium">Próxima cita disponible:</div>
                <div className="font-bold text-[#2C3E50]">Hoy mismo via WhatsApp</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}