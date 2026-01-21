import { Service, Symptom, TeamMember } from '@/types';

export const COLORS = {
  azulDoctor: '#2D9CDB',
  rojoCyber: '#E8505B',
  amarilloLuz: '#F2C94C',
  azulOscuro: '#2C3E50',
  blancoPuro: '#FFFFFF',
  grisPantalla: '#E0E0E0',
} as const;

export const WHATSAPP_NUMBER = "+56983558920";
export const DEFAULT_MESSAGE = "Hola Doctor Cyber, me gustaría consultar sobre sus servicios de ciberseguridad para mi empresa.";

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Diagnóstico Completo",
    description: "Como un chequeo médico general para tu empresa",
    price: "32 UF",
    features: [
      "Evaluación fundamental en 2 semanas",
      "Revisión basada en criterios de ISO 27.001",
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
      "Reporte con evidencias y consejos generales",
      "Reunión de explicación post-intervención"
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
      "Monitoreo y aviso de estado de salud",
      "Backups periódicos y recuperación garantizada",
      "Incluye cambios menores"
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
    name: "Dr. David López",
    role: "Especialista en Diagnóstico",
    description: "Profesor de Diplomado de GRC de USACH. Experto en sintomatología de Ciberseguridad.",
    icon: "Stethoscope",
    color: "blue"
  },
  {
    id: 2,
    name: "Dr. Samuel Paschuan",
    role: "Cirujano de Sistemas",
    description: "Hacker ético certificado. Sabe pensar como el enemigo para protegerte mejor.",
    icon: "Search",
    color: "red"
  }
];