
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
    HeartPulse, FlaskConical, Server, Factory, Wind, Plane, CheckCircle, 
    ShieldCheck, Activity, Users, BarChart3, Building, Banknote, GraduationCap, Flag
} from 'lucide-react';
import Link from 'next/link';

const specializedServices = [
    {
        icon: HeartPulse,
        title: "Healthcare & Biomedical Facility Management",
        points: ["Critical Environment Control (theaters, ICUs)", "Medical Gas & Vacuum System Management", "Infection Prevention & Control (IPC)", "Biomedical Engineering Support", "Regulatory Compliance (MoH, PPB)"]
    },
    {
        icon: FlaskConical,
        title: "Laboratory & Research Facility Management",
        points: ["Containment & Fume Hood Management", "Specialist Utility Management (ultra-pure water, gases)", "Vibration & EMI Mitigation", "Data Integrity Support (power, cooling)"]
    },
    {
        icon: Server,
        title: "Data Center & Mission-Critical IT Facility Management",
        points: ["24/7/365 Critical Systems Maintenance (UPS, generators)", "Precision Cooling & Environmental Control", "Physical Security & Access Protocols", "Capacity & Change Management"]
    },
    {
        icon: Factory,
        title: "Industrial & Manufacturing Facility Management",
        points: ["Heavy Plant & Machinery Support", "Compliance with ISO 13485, ISO 22000, cGMP", "Hazardous Area Management", "Wastewater & Emission Control Management"]
    },
    {
        icon: Wind,
        title: "High-Tech & Cleanroom Facility Management",
        points: ["Particle Contamination Control (ISO Class 5-8)", "Facility Monitoring System (FMS) Management", "Protocol-Driven Operations (SOPs)", "HEPA/ULPA filter integrity testing"]
    },
    {
        icon: Plane,
        title: "Aviation & Transport Hub Facility Management",
        points: ["Airside & Landside Maintenance", "Baggage Handling System (BHS) Support", "High-Availability Public Systems (lifts, bridges)", "Passenger safety focus"]
    }
];

const valuePropositions = [
    { title: "Risk Mitigation", description: "Directly protect your organization from catastrophic risk, be it a data outage, contamination, or regulatory shutdown." },
    { title: "Asset Protection", description: "Safeguard capital-intensive specialized equipment by maintaining the perfect operating environment." },
    { title: "Uninterrupted Operations", description: "Provide the foundational reliability for your scientists, surgeons, or production lines to operate without interruption." },
    { title: "Regulatory Navigation", description: "Translate complex international standards (ISO, CDC, ASHRAE) into actionable, compliant maintenance routines within the Kenyan context." },
    { title: "Expert-Led Management", description: "Your facility is managed by professionals who speak your industry's language and understand its unique pressures." },
];

const targetSectors = [
    { icon: HeartPulse, name: "Healthcare" },
    { icon: FlaskConical, name: "Research" },
    { icon: Server, name: "Technology" },
    { icon: Factory, name: "Industry" },
    { icon: Plane, name: "Aviation" },
];


const SpecializedFMPage = () => {
    return (
        <main className="bg-background">
            <header className="bg-secondary py-16 pt-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight uppercase font-headline">
                         Specialized Facility Management Services
                    </h1>
                    <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
                        We provide Specialized Facility Management Services in Nairobi and across Kenya, delivering the expert knowledge, precision protocols, and stringent compliance management required for mission-critical and highly regulated facilities.
                    </p>
                </div>
            </header>

            <div className="container mx-auto px-4 py-16">
                
                <section className="max-w-4xl mx-auto mb-16">
                    <Card className="border-l-4 border-accent">
                        <CardHeader>
                            <CardTitle className="text-2xl text-primary font-headline">Our Defining Principle: Precision, Compliance, and Uptime</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">Our approach is built on the understanding that specialized facilities are not just buildings; they are vital engines for research, healthcare, data integrity, and industrial production. We recruit and train specialists, implement niche protocols, and utilize advanced monitoring to ensure an environment that actively supports and protects your core, sensitive operations.</p>
                        </CardContent>
                    </Card>
                </section>

                <section className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-primary font-headline">Our Portfolio of Specialized FM Services</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {specializedServices.map(service => (
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
                    <div className="text-center mb-12 px-4">
                        <h2 className="text-3xl font-bold text-primary font-headline">The Value of a Specialized FM Partner</h2>
                    </div>
                    <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                        {valuePropositions.map(benefit => (
                            <div key={benefit.title} className="text-center">
                                <h3 className="text-lg font-semibold text-primary mb-2">{benefit.title}</h3>
                                <p className="text-muted-foreground text-sm">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
                
                 <section className="py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-primary font-headline">Trusted By Kenya’s Most Critical Sectors</h2>
                    </div>
                     <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {targetSectors.map((sector) => (
                           <Card key={sector.name} className="p-4 text-center hover:shadow-lg">
                               <div className="mx-auto w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-2">
                                    <sector.icon className="h-6 w-6"/>
                                </div>
                               <p className="font-semibold text-primary text-sm">{sector.name}</p>
                           </Card>
                        ))}
                    </div>
                </section>

                <section className="bg-primary text-primary-foreground p-8 rounded-lg text-center mt-16">
                    <h2 className="text-3xl font-bold mb-4 font-headline">Secure Your Mission-Critical Environment</h2>
                    <p className="opacity-90 mb-6 max-w-2xl mx-auto">General FM solutions introduce risk to specialized operations. Contact us for a Confidential Specialized Facility Audit. Our sector expert will assess your environment, compliance status, and operational vulnerabilities, providing a roadmap tailored to the exacting standards your facility demands.</p>
                    <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                        <Link href="/contact">
                           Request a Confidential Audit
                        </Link>
                    </Button>
                </section>
            </div>
        </main>
    );
};

export default SpecializedFMPage;
