
"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star, Phone } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-bg');

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {heroImage && (
                <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    fill
                    className="object-cover"
                    priority
                    data-ai-hint={heroImage.imageHint}
                />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />

            <div className="relative z-10 container mx-auto px-4 w-full">
                <div className="max-w-2xl text-left text-primary-foreground">
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg font-bold px-6 py-3 h-auto">
                            <a href="tel:+254710211188">
                                <Phone className="mr-2 h-5 w-5" />
                                Call Now: (254) 710-211 188
                            </a>
                        </Button>
                        <div className="flex items-center gap-2">
                             <div className="flex items-center text-accent">
                                <Star className="h-5 w-5 fill-current" />
                                <Star className="h-5 w-5 fill-current" />
                                <Star className="h-5 w-5 fill-current" />
                                <Star className="h-5 w-5 fill-current" />
                                <div className="relative">
                                    <Star className="h-5 w-5 text-gray-300 fill-current" />
                                    <div className="absolute top-0 left-0 overflow-hidden" style={{ width: '50%' }}>
                                        <Star className="h-5 w-5 text-accent fill-current" />
                                    </div>
                                </div>
                            </div>
                            <span className="font-semibold text-sm">4.5 › Rated Services</span>
                        </div>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight font-headline">
                        Your Space, Our Responsibility.
                    </h1>
                    
                    <p className="text-lg sm:text-xl md:text-2xl mb-8 opacity-90">
                       From groundbreaking new construction to comprehensive ongoing maintenance and immaculate cleaning, Bestcare is your trusted partner for all property needs in Nairobi and Kenya.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                            <Link href="/contact">Book a Free Site Assessment</Link>
                        </Button>
                         <Button asChild size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                            <Link href="/services">Explore Our Services</Link>
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
    