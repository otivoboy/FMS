
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';
import { useIsMobile } from '@/hooks/use-mobile';


const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

const WhatsAppButton = () => {
  const isMobile = useIsMobile();
  const phoneNumber = "254710211188";
  const message = "Hello! I'm visiting your website and would like to inquire about your facilities management services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  if (isMobile) {
    return (
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed right-4 bottom-4 z-50 h-20 w-20 flex items-center justify-center"
      >
        <div className="w-full h-full relative animate-swing">
          <Image 
            src="/logo.jpg"
            alt="WhatsApp Logo"
            fill
            className="object-contain drop-shadow-xl"
          />
        </div>
      </Link>
    );
  }

  return (
    <Link 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-4 bottom-4 z-50 group"
    >
      <div className="relative flex items-center gap-3">
        <p className={cn(
          "text-lg font-bold text-green-700 transition-transform group-hover:scale-105",
          fontInter.className
        )}>
          Chat with Us
        </p>
        <div className="w-20 h-20 relative">
          <div className="w-full h-full animate-swing group-hover:animate-none group-hover:scale-110 transition-transform">
             <Image 
              src="/logo.jpg"
              alt="WhatsApp Logo"
              fill
              className="object-contain pointer-events-none drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WhatsAppButton;
