
"use client";

import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Mail, Phone, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { XIcon } from './icons';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

const socialLinks = [
    { name: "Instagram", href: "https://www.instagram.com/hellenmongare", icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> },
    { name: "Facebook", href: "https://www.facebook.com/hellenmongare", icon: <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg> },
    { name: "X", href: "https://x.com/hellenmongare", icon: <XIcon className="h-4 w-4 fill-current" /> },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/hellenmongare", icon: <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.97v16h4.97v-8.369c0-2.025 1.72-2.025 1.72-2.025s1.72 0 1.72 2.025v8.369h4.97v-10.183c0-4.03-3.41-3.328-3.41-3.328s-2.997.03-4.97 3.328v-2.817z"></path></svg> },
];


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const headerClasses = cn(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
    'bg-background/90 backdrop-blur-sm shadow-md'
  );


  return (
    <header className={headerClasses}>
        <div className="bg-primary text-primary-foreground">
            <div className="px-4 h-10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-4">
                    <a href="tel:+254710211188" className="flex items-center gap-1.5 hover:text-accent transition-colors">
                        <Phone className="h-3.5 w-3.5" />
                        <span className="hidden sm:inline">+254 710 211 188</span>
                    </a>
                    <span className="hidden sm:inline text-primary-foreground/50">|</span>
                     <div className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>Nairobi, Kenya</span>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <span className="hidden md:inline">Follow us:</span>
                    {socialLinks.map(link => (
                        <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="hover:text-accent transition-colors">
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>
        </div>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => isMobileMenuOpen && setIsMobileMenuOpen(false)}>
          <Image
            src="/logo.png"
            alt="Facilities Management Services Logo"
            width={40}
            height={40}
            priority
            className="w-10 h-10 object-contain"
          />
          <span className="font-bold text-xl text-primary hidden sm:inline">Facilities Management</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map(item => (
            <Button
              key={item.href}
              variant="ghost"
              asChild
              className={cn('relative h-auto py-1 px-2 text-sm after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300', {
                'text-primary after:w-full': pathname === item.href,
                'text-muted-foreground after:w-0 hover:after:w-full': pathname !== item.href
              })}
            >
              <Link href={item.href}>{item.name}</Link>
            </Button>
          ))}
        </nav>
        
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Toggle menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] p-0">
             <div className="p-4 border-b">
                 <Link href="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                    <Image
                      src="/logo.png"
                      alt="Facilities Management Services Logo"
                      width={40}
                      height={40}
                      priority
                      className="h-auto w-auto"
                    />
                    <span className="font-bold text-lg text-primary">Facilities Management</span>
                </Link>
             </div>
            <div className="flex flex-col space-y-2 p-4">
              {navItems.map(item => (
                <Button 
                  key={item.href} 
                  variant="ghost" 
                  className={cn("justify-start text-lg h-12", {
                    "bg-accent text-accent-foreground hover:bg-accent/90 hover:text-accent-foreground": pathname === item.href,
                  })}
                  asChild
                >
                  <Link href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                    {item.name}
                  </Link>
                </Button>
              ))}
            </div>
             <div className="border-t p-4 absolute bottom-0 w-full">
                <div className="flex justify-center gap-4">
                    {socialLinks.map(link => (
                        <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="text-muted-foreground hover:text-accent transition-colors">
                            {React.cloneElement(link.icon as React.ReactElement, { className: "h-6 w-6" })}
                        </a>
                    ))}
                </div>
              </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;

    