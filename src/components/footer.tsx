"use client";

import { Building2, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { XIcon } from './icons';
import Image from 'next/image';

const Footer = () => {
  const services = [
    "Project Management", "Facilities Maintenance", "Home Repairs", 
    "Post-Construction Cleaning", "Compliance", "Vendor Management"
  ];
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact Us", href: "/contact" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/logo.png"
                    alt="Facilities Management Services Logo"
                    width={120} // Reduced from 180
                    height={30} // Reduced from 40
                    priority
                    className="h-auto w-auto invert brightness-0"
                    style={{ 
                      maxWidth: '100%', 
                      height: 'auto' 
                    }}
                  />
                </Link>
              </div>
              <p className="text-primary-foreground/80 mb-6 max-w-md">
                Your single, reliable point of contact for all property needs, from construction and repairs to maintenance and specialized cleaning.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-accent" />
                  <a href="mailto:hellenkemuma14@gmail.com" className="hover:text-accent transition-colors">hellenkemuma14@gmail.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-accent" />
                  <a href="tel:+254710211188" className="hover:text-accent transition-colors">+254 710 211 188</a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>Nairobi, Kenya</span>
                </div>
              </div>
               <div className="mt-6 flex space-x-4">
                  <a href="https://www.instagram.com/hellenmongare" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </a>
                  <a href="https://www.facebook.com/hellenmongare" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
                  </a>
                  <a href="https://x.com/hellenmongare" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    <XIcon className="h-5 w-5 fill-current" />
                  </a>
                  <a href="https://www.linkedin.com/in/hellenmongare" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.97v16h4.97v-8.369c0-2.025 1.72-2.025 1.72-2.025s1.72 0 1.72 2.025v8.369h4.97v-10.183c0-4.03-3.41-3.328-3.41-3.328s-2.997.03-4.97 3.328v-2.817z"></path></svg>
                  </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 font-headline">Services</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                {services.map(service => <li key={service}><Link href="/services" className="hover:text-accent transition-colors">{service}</Link></li>)}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 font-headline">Quick Links</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                {quickLinks.map(link => (
                    <li key={link.name}>
                        <Link href={link.href} className="hover:text-accent transition-colors">{link.name}</Link>
                    </li>
                ))}
                 <li>
                  <Link href="/terms" className="hover:text-accent transition-colors">Terms &amp; Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} Facilities Management Services. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
                <Link href="/terms" className="hover:text-accent transition-colors">Terms & Conditions</Link>
                <p>Comprehensive Property Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;