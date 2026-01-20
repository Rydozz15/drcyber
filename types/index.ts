export interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  pricePeriod?: string;
  features: string[];
  highlight?: boolean;
  icon: string;
  color: 'blue' | 'red' | 'yellow' | 'dark';
}

export interface Symptom {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: 'blue' | 'red' | 'yellow' | 'dark';
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  icon: string;
  color: 'blue' | 'red';
}