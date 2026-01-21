'use client';

import { Brain, Stethoscope, Search, Globe, Shield, CheckCircle, AlertCircle } from 'lucide-react';
import { COLORS, WHATSAPP_NUMBER, SERVICES } from '@/lib/constants';
import { Service } from '@/types';

const iconMap = {
  Stethoscope,
  Search,
  Globe,
  Shield
};

const getIconComponent = (iconName: string) => {
  const IconComponent = iconMap[iconName as keyof typeof iconMap];
  return IconComponent || Stethoscope;
};

export default function ServicesSection() {
  const openWhatsApp = (serviceName: string) => {
    const message = `Hola Doctor Cyber, me interesa el servicio: ${serviceName}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="servicios" className="py-20 px-4 bg-gradient-to-b from-[#F8F9FA] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-[#2D9CDB]/10 to-[#F2C94C]/10 px-6 py-3 rounded-full mb-6 shadow-sm">
            <Brain className="w-5 h-5 text-[#2D9CDB] mr-2" />
            <span className="text-[#2D9CDB] font-semibold">Nuestros Tratamientos Especializados</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#2C3E50]">
            La Receta Perfecta para tu{' '}
            <span className="text-[#2D9CDB]" style={{ color: COLORS.azulDoctor }}>
              Salud Digital
            </span>
          </h2>
          <p className="text-xl text-[#2C3E50]/80 max-w-3xl mx-auto">
            Servicios diseñados específicamente para PYMEs: efectivos, accesibles y sin tecnicismos innecesarios.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {SERVICES.map((service: Service) => {
            const Icon = getIconComponent(service.icon);
            if (service.highlight) {
              return (
                <div key={service.id} className="bg-gradient-to-br from-[#E8505B] via-[#E8505B]/90 to-[#E8505B] rounded-3xl p-8 transform scale-105 shadow-2xl shadow-[#E8505B]/30 relative overflow-hidden border-2 border-white">
                  <div className="absolute -top-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="bg-white/20 p-4 rounded-2xl border border-white/30">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                        </div>
                      </div>
                      <div className="bg-white text-[#E8505B] px-3 py-2 rounded-full text-sm font-bold shadow-sm">
                        MÁS VENDIDO
                      </div>
                    </div>
                    <div className="text-4xl font-bold text-white mb-6">
                      {service.price}
                      {service.pricePeriod && (
                        <span className="text-lg text-white/80 ml-2">{service.pricePeriod}</span>
                      )}
                    </div>
                    <p className="text-white/90 mb-8">{service.description}</p>
                    
                    <ul className="space-y-4 mb-8 text-white">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0 text-white" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button 
                      onClick={() => openWhatsApp(service.title)}
                      className="w-full bg-white text-[#E8505B] py-4 rounded-full hover:bg-gray-50 transition-all font-semibold shadow-lg hover:scale-105"
                      style={{ color: COLORS.rojoCyber }}
                    >
                      Comenzar Ahora
                    </button>
                  </div>
                </div>
              );
            }

            const borderColor = service.color === 'blue' ? '[#2D9CDB]' : service.color === 'yellow' ? '[#F2C94C]' : '[#2D9CDB]';
            const textColor = service.color === 'blue' ? COLORS.azulDoctor : service.color === 'yellow' ? COLORS.amarilloLuz : COLORS.azulDoctor;
            const bgColor = service.color === 'blue' ? 'from-[#2D9CDB]/20 to-[#2D9CDB]/10' : 'from-[#F2C94C]/20 to-[#F2C94C]/10';

            return (
              <div key={service.id} className={`bg-white border-2 border-${borderColor}/30 rounded-3xl p-8 hover:border-${borderColor} transition-all hover:shadow-2xl hover:shadow-${borderColor}/20 relative overflow-hidden group shadow-lg`}>
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-${borderColor}/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`bg-gradient-to-r ${bgColor} p-4 rounded-2xl border border-${borderColor}/30`}>
                      <Icon className="w-8 h-8" style={{ color: textColor }} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#2C3E50]">{service.title}</h3>
                    </div>
                  </div>
                  <div className="text-4xl font-bold mb-6">
                    <span style={{ color: textColor }}>{service.price}</span>
                    {service.pricePeriod && (
                      <span className="text-lg text-[#2C3E50]/60 ml-2">{service.pricePeriod}</span>
                    )}
                  </div>
                  <p className="text-[#2C3E50]/80 mb-8">{service.description}</p>
                  
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: textColor }} />
                        <span className="text-[#2C3E50]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={() => openWhatsApp(service.title)}
                    className={`w-full bg-gradient-to-r from-${textColor} to-${textColor}/90 py-4 rounded-full hover:from-${textColor}/90 hover:to-${textColor} transition-all font-semibold text-white shadow-lg hover:shadow-${textColor}/30 group-hover:scale-105`}
                    style={{ backgroundColor: textColor }}
                  >
                    {service.color === 'yellow' ? 'Proteger mi Sitio' : 'Solicitar Diagnóstico'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Alcances y Limitaciones */}
        <div className="bg-gradient-to-r from-[#2C3E50]/5 to-white border border-[#E0E0E0] rounded-2xl p-8 mt-12 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center text-[#2C3E50]">
            <Shield className="inline w-8 h-8 mr-3 text-[#2D9CDB]" style={{ color: COLORS.azulDoctor }} />
            Alcances y Compromisos Claros
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-[#2D9CDB]">
                <h4 className="text-lg font-bold mb-4">
                  ¿Qué SI incluimos?
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-1 text-current" />
                    <span className="text-[#2C3E50]">
                      Reportes claros en español, sin tecnicismos
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-1 text-current" />
                    <span className="text-[#2C3E50]">
                      Reuniones de explicación para no expertos
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-1 text-current" />
                    <span className="text-[#2C3E50]">
                      Garantía de confidencialidad total
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-1 text-current" />
                    <span className="text-[#2C3E50]">
                      Precios fijos sin sorpresas
                    </span>
                  </li>
                </ul>
              </div>

            <div>
              <h4 className="text-lg font-bold mb-4 text-[#E8505B]" style={{ color: COLORS.rojoCyber }}>¿Qué NO hacemos?</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#E8505B] mt-1" style={{ color: COLORS.rojoCyber }} />
                  <span className="text-[#2C3E50]">No hacemos magia: resultados dependen de tu implementación</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#E8505B] mt-1" style={{ color: COLORS.rojoCyber }} />
                  <span className="text-[#2C3E50]">No garantizamos protección 100% (nadie puede)</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#E8505B] mt-1" style={{ color: COLORS.rojoCyber }} />
                  <span className="text-[#2C3E50]">No trabajamos con empresas ilegales</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#E8505B] mt-1" style={{ color: COLORS.rojoCyber }} />
                  <span className="text-[#2C3E50]">No ofrecemos servicios de "hacking ético" sin autorización</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}