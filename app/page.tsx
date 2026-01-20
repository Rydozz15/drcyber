'use client';

import { useState, useCallback } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import DiagnosticSection from '@/components/DiagnosticSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFFFF] to-[#F8F9FA] text-[#2C3E50] scroll-smooth">
      <Navigation scrollToSection={scrollToSection} />
      <Hero />
      <DiagnosticSection />
      <ServicesSection />
      <WhyChooseUs />
      <CTASection />
      <Footer />
    </div>
  );
}