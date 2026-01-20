import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Doctor Cyber - Salud Digital para Empresas',
  description: 'Servicios profesionales de ciberseguridad a precios accesibles para PYMEs. Detectamos vulnerabilidades, prescribimos soluciones y curamos las heridas digitales de tu empresa.',
  keywords: 'ciberseguridad, PYME, pentesting, ethical hacking, diagnóstico GRC, seguridad web',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}