import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PAITEC',
  description: 'PaiTec: Franquia com o Melhor Payback do Brasil',
  openGraph: {
    title: 'PaiTec: Franquia com o Melhor Payback do Brasil',
    description: 'A PaiTec é uma franquia inovadora que combina tecnologia e proteção para garantir um ambiente escolar seguro, proporcionando tranquilidade para pais, crianças e instituições de ensino, com um retorno sobre o investimento em apenas 3 meses e exclusividade na região.',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PaiTec: Franquia com o Melhor Payback do Brasil',
      },
    ],
    siteName: 'PAITEC',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PaiTec: Franquia com o Melhor Payback do Brasil',
    description: 'A PaiTec é uma franquia inovadora que combina tecnologia e proteção para garantir um ambiente escolar seguro, proporcionando tranquilidade para pais, crianças e instituições de ensino, com um retorno sobre o investimento em apenas 3 meses e exclusividade na região.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://vendalandingpage.web.app/',
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
  icons: {
    icon: '/icone.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
