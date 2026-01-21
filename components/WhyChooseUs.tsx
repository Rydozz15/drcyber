'use client';

import { Users, Zap, Award, Stethoscope, Search } from 'lucide-react';
import { COLORS, TEAM_MEMBERS } from '@/lib/constants';
import { TeamMember } from '@/types';

const features = [
  {
    title: "Diagnóstico Rápido",
    description: "En solo días sabrás si tu empresa está en riesgo. Sin papeleo burocrático.",
    icon: Zap,
    borderColor: "border-[#2D9CDB]/20",
    iconColor: COLORS.azulDoctor
  },
  {
    title: "Hablamos Tu Idioma",
    description: "Nada de 'jerga hacker'. Te explicamos todo como si fueras nuestro abuelo.",
    icon: Users,
    borderColor: "border-[#F2C94C]/20",
    iconColor: COLORS.amarilloLuz
  },
  {
    title: "Certificados que Importan",
    description: "CCISO, ISCC-C2, EJPT. Pero lo que más nos enorgullece es tu tranquilidad.",
    icon: Award,
    borderColor: "border-[#2C3E50]/20",
    iconColor: COLORS.azulOscuro
  }
];

const getIconComponent = (iconName: string) => {
  const iconMap = {
    Stethoscope,
    Search
  };
  return iconMap[iconName as keyof typeof iconMap] || Stethoscope;
};

export default function WhyChooseUs() {
  return (
    <section id="nosotros" className="py-20 px-4 bg-gradient-to-b from-white to-[#F8F9FA]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-[#2D9CDB]/10 to-[#F2C94C]/10 px-6 py-3 rounded-full mb-6 shadow-sm">
            <Users className="w-5 h-5 text-[#2D9CDB] mr-2" />
            <span className="text-[#2D9CDB] font-semibold">Nuestra Filosofía de Atención</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#2C3E50]">
            No somos un hospital, somos tu{' '}
            <span className="text-[#2D9CDB]" style={{ color: COLORS.azulDoctor }}>
              médico de cabecera
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className={`bg-white border-2 ${feature.borderColor} p-8 rounded-2xl hover:border-${feature.iconColor}/50 transition-all shadow-lg hover:shadow-${feature.iconColor}/10`}
              >
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${feature.iconColor}10` }}
                >
                  <Icon className="w-7 h-7" style={{ color: feature.iconColor }} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#2C3E50]">{feature.title}</h3>
                <p className="text-[#2C3E50]/70">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Equipo Médico */}
        <div className="bg-gradient-to-r from-[#2D9CDB]/10 to-[#F2C94C]/10 border border-[#2D9CDB]/30 rounded-3xl p-8 shadow-xl">
          <h3 className="text-3xl font-bold mb-8 text-center text-[#2C3E50]">
            Tu{' '}
            <span className="text-[#2D9CDB]" style={{ color: COLORS.azulDoctor }}>
              Equipo Médico Digital
            </span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {TEAM_MEMBERS.map((member: TeamMember) => {
              const Icon = getIconComponent(member.icon);
              const bgColor = member.color === 'blue' ? COLORS.azulDoctor : COLORS.rojoCyber;
              const textColor = member.color === 'blue' ? COLORS.azulDoctor : COLORS.rojoCyber;
              
              return (
                <div key={member.id} className="bg-white p-6 rounded-2xl border border-[#E0E0E0] shadow-lg">
                  <div className="flex items-start gap-4">
                    <div 
                      className="p-4 rounded-xl shadow-md"
                      style={{ background: `linear-gradient(to right, ${bgColor}, ${bgColor}90)` }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-[#2C3E50]">{member.name}</h4>
                      <p className="font-medium mb-3" style={{ color: textColor }}>{member.role}</p>
                      <p className="text-[#2C3E50]/70">{member.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}