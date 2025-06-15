import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RaphTech - Raphaël Theuillon | Expert Digital Marketing & IA',
  description: 'Portfolio de Raphaël Theuillon, expert en digital marketing, e-commerce et intelligence artificielle. Découvrez mes projets et compétences en automatisation et création d\'agents IA.',
  keywords: 'digital marketing, e-commerce, intelligence artificielle, agent IA, automatisation, Raphaël Theuillon, RaphTech',
  authors: [{ name: 'Raphaël Theuillon' }],
  creator: 'Raphaël Theuillon',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://raphtech.vercel.app',
    title: 'RaphTech - Raphaël Theuillon | Expert Digital Marketing & IA',
    description: 'Portfolio de Raphaël Theuillon, expert en digital marketing, e-commerce et intelligence artificielle.',
    siteName: 'RaphTech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RaphTech - Raphaël Theuillon | Expert Digital Marketing & IA',
    description: 'Portfolio de Raphaël Theuillon, expert en digital marketing, e-commerce et intelligence artificielle.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}