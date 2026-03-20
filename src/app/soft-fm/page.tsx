
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
    Sparkles, ShieldCheck, Utensils, Users, Box, HeartPulse, CheckCircle, 
    Trash2, Building, Aperture, Banknote, GraduationCap, Factory, Flag, Users2 
} from 'lucide-react';
import Link from 'next/link';

const softFmServices = [
    {
        icon: Sparkles,
        title: "Integrated Cleaning & Sanitation Services",
        points: ["Daily & Periodic Cleaning", "Specialized Floor Care", "Waste Management", "Pest Control & Fumigation", "Post-Construction Clean-Up", "Hygiene & Consumables Management"]
    },
    {
        icon: ShieldCheck,
        title: "Security & Risk Management Solutions",
        points: ["Manned Guarding", "Electronic Security Integration", "Visitor Management", "Incident Reporting & Management"]
    },
    {
        icon: Utensils,
        title: "Catering & Hospitality Services",
        points: ["Corporate Cafeteria Management", "Pantry Management", "Vending Solutions", "Event Catering"]
    },
    {
        icon: Users,
        title: "Support Services & Attendant Staff",
        points: ["Reception & Concierge Services", "Mailroom & Courier Management", "Office Boy/Messenger Services", "Groundskeeping & Landscaping"]
    },
    {
        icon: Box,
        title: "Workplace & Space Management",
        points: ["Relocation Management", "Space Planning Support", "Meeting Room Management"]
    },
    {
        icon: HeartPulse,
        title: "Health, Safety & Environmental Compliance",
        points: ["OSH Compliance Support", "Fire Safety Management", "Environmental Management"]
    }
];

const partnershipBenefits = [
    { title: "Deep Local Expertise", description: "We understand the specific operational, regulatory, and cultural nuances of managing facilities in Kenya." },
    { title: "Integrated Technology Platform", description: "Utilize customized CAFM systems for real-time reporting, service tracking, and performance analytics." },
    { title: "Trained & Empowered Workforce", description: "Our staff undergo rigorous training in service delivery, safety, and customer service." },
    { title: "Flexible & Scalable Contracts", description: "We design Service Level Agreements (SLAs) that match your specific needs and budget." },
    { title: "Proactive Compliance Assurance", description: "We stay updated on all relevant Kenyan regulations (NEMA, OSH) to mitigate your risk." },
    { title: "Focus on Your Core Business", description: "Outsource Soft FM complexity to us, so you can focus on your strategic objectives." },
];

const targetSectors = [
    { icon: Building, name: "Corporate Offices & Business Parks" },
    { icon: Banknote, name: "Banking & Financial Institutions" },
    { icon: Aperture, name: "Retail Malls & Shopping Centers" },
    { icon: HeartPulse, name: "Healthcare Facilities & Hospitals" },
    { icon: GraduationCap, name: "Educational Institutions" },
    { icon: Factory, name: "Manufacturing & Industrial Plants" },
    { icon: Flag, name: "Embassies & Diplomatic Missions" },
    { icon: Users2, name: "Co-working Spaces & Tech Hubs" },
];

const SoftFMPage = () => {
    return (
        <main className="bg-background">
            <header className="bg-secondary py-16 pt-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight uppercase font-headline">
                         Soft Facility Management Services
                    </h1>
                    <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
                        In the dynamic business landscape of Nairobi and across Kenya, the efficiency, safety, and image of your physical workspace are paramount to operational success. We provide integrated, end-to-end Soft Facility Management solutions tailored to the unique demands of the Kenyan market.
                    </p>
                </div>
            </header>

            <div className="container mx-auto px-4 py-16">
                
                <section className="max-w-4xl mx-auto mb-16">
                    <Card className="border-l-4 border-accent">
                        <CardHeader>
                            <CardTitle className="text-2xl text-primary font-headline">What is Soft Facility Management?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">Soft FM encompasses the non-core, people-focused services that facilitate a comfortable, secure, and compliant working environment. Unlike Hard FM (which deals with mechanical, electrical, and structural assets), Soft FM is cyclical, often daily, and directly impacts the human experience within a facility. It is the backbone of daily operations for offices, corporate headquarters, retail complexes, and industrial parks.</p>
                        </CardContent>
                    </Card>
                </section>

                <section className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-primary font-headline">Our Core Soft FM Service Portfolio</h2>
                        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">Available as standalone solutions or a fully integrated package managed through a single point of contact.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {softFmServices.map(service => (
                            <Card key={service.title} className="flex flex-col hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                                        <service.icon className="h-8 w-8 text-accent" />
                                    </div>
                                    <CardTitle className="text-xl text-primary font-headline">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        {service.points.map(point => <li key={point} className="flex items-start"><CheckCircle className="h-4 w-4 mr-2 mt-1 text-accent flex-shrink-0" /><span>{point}</span></li>)}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                <section className="py-16 bg-secondary rounded-lg">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-primary font-headline">Why Partner With Us for Soft FM in Kenya?</h2>
                    </div>
                    <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {partnershipBenefits.map(benefit => (
                            <div key={benefit.title} className="text-center">
                                <h3 className="text-lg font-semibold text-primary mb-2">{benefit.title}</h3>
                                <p className="text-muted-foreground text-sm">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
                
                <section className="py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-primary font-headline">Target Sectors</h2>
                    </div>
                    <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {targetSectors.map(sector => (
                             <Card key={sector.name} className="text-center p-4 hover:bg-accent/10 transition-colors">
                                <div className="mx-auto w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                                    <sector.icon className="h-6 w-6"/>
                                </div>
                                <h3 className="text-sm font-semibold text-primary">{sector.name}</h3>
                            </Card>
                        ))}
                    </div>
                </section>

                <section className="bg-primary text-primary-foreground p-8 rounded-lg text-center mt-16">
                    <h2 className="text-3xl font-bold mb-4 font-headline">Transform Your Workplace Environment</h2>
                    <p className="opacity-90 mb-6 max-w-2xl mx-auto">Contact our Nairobi head office to schedule a confidential consultation and a detailed facility needs assessment. Let's create a strategic asset for your business.</p>
                    <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                        <Link href="/contact">
                            Schedule a Facility Assessment
                        </Link>
                    </Button>
                </section>
            </div>
        </main>
    );
};

export default SoftFMPage;