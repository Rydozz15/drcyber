import { Service, Symptom, TeamMember } from '@/types';

export const COLORS = {
  azulDoctor: '#2D9CDB',
  rojoCyber: '#E8505B',
  amarilloLuz: '#F2C94C',
  azulOscuro: '#2C3E50',
  blancoPuro: '#FFFFFF',
  grisPantalla: '#E0E0E0',
} as const;

export const WHATSAPP_NUMBER = "+569XXXXXXXX";
export const DEFAULT_MESSAGE = "Hola Doctor Cyber, me gustaría consultar sobre sus servicios de ciberseguridad para mi empresa.";

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Diagnóstico Completo",
    description: "Como un chequeo médico general para tu empresa",
    price: "32 UF",
    features: [
      "Evaluación completa de 360° en 2 semanas",
      "Revisión de políticas y controles",
      "Informe ejecutivo con diagnóstico claro",
      "Plan de tratamiento priorizado"
    ],
    icon: "Stethoscope",
    color: "blue"
  },
  {
    id: 2,
    title: "Ethical Hacking",
    description: "Como una cirugía preventiva para tu sistema",
    price: "20 UF",
    features: [
      "Prueba de penetración en 3 días hábiles",
      "Evaluación de vulnerabilidades web críticas",
      "Reporte con evidencias y soluciones paso a paso",
      "30 minutos de asesoría post-intervención"
    ],
    highlight: true,
    icon: "Search",
    color: "blue"
  },
  {
    id: 3,
    title: "Administración Web",
    description: "Como un seguro de salud para tu sitio web",
    price: "3.5 UF",
    pricePeriod: "/mes",
    features: [
      "Actualizaciones de seguridad automáticas",
      "Monitoreo 24/7 y respuesta inmediata",
      "Backups diarios y recuperación garantizada",
      "Soporte técnico prioritario incluido"
    ],
    icon: "Globe",
    color: "yellow"
  }
];

export const SYMPTOMS: Symptom[] = [
  {
    id: 1,
    title: "Fiebre de Phishing",
    description: "Tus empleados hacen clic en enlaces sospechosos sin pensarlo dos veces",
    icon: "AlertTriangle",
    color: "red"
  },
  {
    id: 2,
    title: "Contraseñas Débiles",
    description: "Usas '123456' o 'contraseña' en sistemas críticos",
    icon: "Lock",
    color: "yellow"
  },
  {
    id: 3,
    title: "Sitio Web Desactualizado",
    description: "Plugins viejos que son puertas abiertas para hackers",
    icon: "Globe",
    color: "blue"
  },
  {
    id: 4,
    title: "Sin Backups Regulares",
    description: "Un ransomware podría borrar años de trabajo en segundos",
    icon: "FileCheck",
    color: "dark"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Alex Ríos",
    role: "Especialista en Diagnóstico",
    description: "15 años encontrando lo que otros pasan por alto. Ex-auditor de Big4.",
    icon: "Stethoscope",
    color: "blue"
  },
  {
    id: 2,
    name: "Dra. María Torres",
    role: "Cirujana de Sistemas",
    description: "Ética hacker certificada. Sabe pensar como el enemigo para protegerte mejor.",
    icon: "Search",
    color: "red"
  }
];