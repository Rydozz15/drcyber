import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Doctor Cyber - Salud Digital para Empresas',
  description:
    'Servicios profesionales de ciberseguridad a precios accesibles para PYMEs. Detectamos vulnerabilidades, prescribimos soluciones y curamos las heridas digitales de tu empresa.',
  keywords:
    'ciberseguridad, PYME, pentesting, ethical hacking, diagnostico GRC, seguridad web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={montserrat.variable}>
        {children}
      </body>
    </html>
  )
}
