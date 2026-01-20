'use client';

import { Thermometer, AlertTriangle, Lock, Globe, FileCheck, Stethoscope, ArrowRight } from 'lucide-react';
import { COLORS, WHATSAPP_NUMBER, SYMPTOMS } from '@/lib/constants';
import { Symptom } from '@/types';

const iconMap = {
  AlertTriangle,
  Lock,
  Globe,
  FileCheck,
  Stethoscope
};

const colorClasses = {
  blue: 'border-[#2D9CDB]/20 hover:border-[#2D9CDB]/50',
  red: 'border-[#E8505B]/20 hover:border-[#E8505B]/50',
  yellow: 'border-[#F2C94C]/30 hover:border-[#F2C94C]/60',
  dark: 'border-[#2C3E50]/20 hover:border-[#2C3E50]/50'
};

const iconColors = {
  blue: COLORS.azulDoctor,
  red: COLORS.rojoCyber,
  yellow: COLORS.amarilloLuz,
  dark: COLORS.azulOscuro
};

export default function DiagnosticSection() {
  const openWhatsApp = () => {
    const message = "Hola Doctor Cyber, necesito un chequeo preventivo para mi empresa.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  const getIconComponent = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap];
    return IconComponent || Stethoscope;
  };

  return (
    <section id="diagnostico" className="py-20 px-4 bg-gradient-to-b from-white to-[#F8F9FA]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-[#2D9CDB]/10 to-[#F2C94C]/10 px-6 py-3 rounded-full mb-6 shadow-sm">
            <Thermometer className="w-5 h-5 text-[#E8505B] mr-2" />
            <span className="text-[#E8505B] font-semibold">Síntomas Comunes en Empresas</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#2C3E50]">
            ¿Reconoces alguno de estos{' '}
            <span className="text-[#E8505B]" style={{ color: COLORS.rojoCyber }}>
              síntomas?
            </span>
          </h2>
          <p className="text-xl text-[#2C3E50]/80 max-w-3xl mx-auto">
            Las PYMEs suelen tener estas dolencias digitales. No las ignores, pueden ser fatales para tu negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {SYMPTOMS.map((symptom: Symptom) => {
            const Icon = getIconComponent(symptom.icon);
            return (
              <div 
                key={symptom.id} 
                className={`bg-white border-2 ${colorClasses[symptom.color]} p-6 rounded-2xl transition-all shadow-lg hover:shadow-${symptom.color}/10`}
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${iconColors[symptom.color]}10` }}
                >
                  <Icon 
                    className="w-6 h-6" 
                    style={{ color: iconColors[symptom.color] }} 
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#2C3E50]">{symptom.title}</h3>
                <p className="text-[#2C3E50]/70">{symptom.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-[#2D9CDB]/10 via-[#F2C94C]/10 to-[#2D9CDB]/10 border border-[#2D9CDB]/30 rounded-3xl p-8 text-center shadow-xl">
          <h3 className="text-3xl font-bold mb-6 text-[#2C3E50]">
            Tu chequeo preventivo cuesta{' '}
            <span className="text-[#2D9CDB]" style={{ color: COLORS.azulDoctor }}>
              menos que una hora
            </span>{' '}
            de tu contador
          </h3>
          <p className="text-xl text-[#2C3E50]/80 mb-8">
            Y puede evitar pérdidas de miles de dólares. No esperes a estar en la UCI digital.
          </p>
          <button 
            onClick={openWhatsApp}
            className="bg-gradient-to-r from-[#2D9CDB] to-[#2D9CDB]/90 px-12 py-4 rounded-full hover:from-[#2D9CDB]/90 hover:to-[#2D9CDB] transition-all font-semibold text-lg inline-flex items-center gap-3 text-white shadow-lg hover:shadow-[#2D9CDB]/30"
            style={{ backgroundColor: COLORS.azulDoctor }}
          >
            <Stethoscope className="w-6 h-6" />
            Pedir Chequeo Preventivo
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}