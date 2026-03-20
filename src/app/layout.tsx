
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Preloader from '@/components/preloader';
import WhatsAppButton from '@/components/whatsapp-button';

const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: {
    default: "Facilities Management Services | Comprehensive Property Solutions",
    template: "%s | Facilities Management Services",
  },
  description:
    "From construction project management to ongoing maintenance and specialized cleaning, Facilities Management Services is your single point of contact for all property needs in Kenya.",
  keywords: "facilities management, property management, construction project management, building maintenance, post-construction cleaning, Kenya property services, integrated facilities management",
  authors: [{ name: "Facilities Management Services" }],
  openGraph: {
    title: "Facilities Management Services - Your Space, Our Responsibility.",
    description: "Comprehensive facilities and project management solutions to ensure your space is functional, safe, and immaculate.",
    url: "https://www.premium-build-construct.com", 
    siteName: "Facilities Management Services",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "A modern building representing professional facilities management services.",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Facilities Management Services - Total Property Care",
    description: "Delivering operational excellence and asset protection for construction, maintenance, and cleaning.",
    images: ['/twitter-image.jpg'],
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
  metadataBase: new URL('https://www.premium-build-construct.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body className={cn('font-body antialiased flex flex-col min-h-screen bg-background', fontInter.variable)}>
        <Preloader />
        <Header />
        <main className="flex-grow pt-[104px]">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  );
}
