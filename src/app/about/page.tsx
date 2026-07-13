'use client';

import { Award, Users, Check, GraduationCap, Building, Shield, Target, TrendingUp, Handshake } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const expertTeam = [
    { icon: Users, title: "Certified Engineers", points: ["Licensed professionals with advanced certifications", "Specialized in building systems and infrastructure", "Continuous training on latest technologies"] },
    { icon: Check, title: "Master Plumbers", points: ["Licensed experts with 10+ years experience", "Specialized in commercial & residential systems", "Emergency response capability 24/7"] },
    { icon: Award, title: "Dedicated Cleaners", points: ["Professionally trained cleaning specialists", "Certified in green cleaning practices", "Background-checked and insured"] },
    { icon: GraduationCap, title: "Expert Technicians", points: ["Multi-skilled maintenance professionals", "Specialized equipment training", "Quality-focused service delivery"] },
];

const coreValues = [
    { icon: Target, title: "Excellence in Execution", description: "Every project deserves our full commitment to quality and attention to detail." },
    { icon: Handshake, title: "Reliability & Accountability", description: "We take full ownership, ensuring transparent communication and consistent follow-through." },
    { icon: TrendingUp, title: "Innovation & Adaptation", description: "We continuously evolve our methods to meet Nairobi's unique challenges." },
    { icon: Shield, title: "Safety First", description: "We maintain the highest safety standards to protect our team and your property." }
];

const AboutPage = () => {
  return (
    <main className="bg-background">
      <header className="bg-secondary py-16 pt-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight uppercase font-headline">
            About Facilities Management Services
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
            Our mission is to provide exceptional, comprehensive facilities and project management solutions, ensuring our clients' spaces are always functional, safe, and immaculate.
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        
        {/* Mission & Vision */}
        <section className="mb-16">
             <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <Card className="border-l-4 border-accent">
                    <CardHeader>
                        <CardTitle className="text-primary font-headline">Our Mission</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">To provide exceptional, comprehensive facilities and project management solutions, ensuring our clients' spaces are always functional, safe, and immaculate. We serve as your single, reliable point of contact for all property needs.</p>
                    </CardContent>
                </Card>
                 <Card className="border-l-4 border-accent">
                    <CardHeader>
                        <CardTitle className="text-primary font-headline">Our Vision</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">To be Nairobi's most trusted facilities management partner, recognized for our unwavering commitment to excellence, innovation in service delivery, and transformative impact on the spaces we manage.</p>
                    </CardContent>
                </Card>
            </div>
        </section>

        {/* The Difference */}
        <section className="py-16 bg-secondary rounded-lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary font-headline">The Facilities Management Difference</h2>
            <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">A unified approach with an expert team.</p>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertTeam.map(expert => (
                <Card key={expert.title} className="text-center">
                    <CardHeader className="items-center">
                        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                            <expert.icon className="h-8 w-8 text-accent" />
                        </div>
                        <CardTitle className="text-xl text-primary font-headline">{expert.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            {expert.points.map(point => <li key={point}>{point}</li>)}
                        </ul>
                    </CardContent>
                </Card>
            ))}
          </div>
        </section>
        
        {/* Core Values */}
        <section className="py-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary font-headline">Our Core Values</h2>
                <p className="text-lg text-muted-foreground mt-2">The principles that guide our work.</p>
            </div>
            <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {coreValues.map(value => (
                    <div key={value.title} className="text-center">
                        <div className="mx-auto w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4">
                            <value.icon className="h-6 w-6"/>
                        </div>
                        <h3 className="text-lg font-semibold text-primary mb-2">{value.title}</h3>
                        <p className="text-muted-foreground text-sm">{value.description}</p>
                    </div>
                ))}
            </div>
        </section>

        <section className="bg-secondary p-8 rounded-lg text-center mt-16">
            <h2 className="text-3xl font-bold text-primary mb-4 font-headline">Let's Build the Future Together</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">Driven by a passion for transforming spaces and enhancing operational efficiency, we are always seeking new challenges and opportunities to deliver exceptional results.</p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                <Link href="/contact">
                    Contact Us Today
                </Link>
            </Button>
        </section>

      </div>
    </main>
  );
};

export default AboutPage;
