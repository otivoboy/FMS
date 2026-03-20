
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
    Wrench, Home, Shield, Zap, Droplets, HardHat, Paintbrush, Hammer, 
    Truck, CheckCircle, ExternalLink, Sun, Wind, Sprout, Search, Heart, Wallet
} from 'lucide-react';
import Link from 'next/link';

const renovationServices = [
    {
        icon: HardHat,
        title: "Emergency & Essential Repairs",
        points: ["Urgent Plumbing (leaks, blocks)", "Electrical Troubleshooting", "Roof & Water Damage Repair", "Security & Entry Repair (doors, locks)"]
    },
    {
        icon: Home,
        title: "Interior Renovations & Remodeling",
        points: ["Kitchen Transformation", "Bathroom Makeovers", "Living & Bedroom Spaces", "Flooring Solutions", "Painting & Decorating"]
    },
    {
        icon: Wrench,
        title: "Structural & Exterior Upgrades",
        points: ["Home Extensions & Additions", "Roofing Services (replacement, repair)", "Exterior Cladding & Finishes", "Window & Door Replacement"]
    },
    {
        icon: Zap,
        title: "Utilities & Systems Upgrades",
        points: ["Electrical Rewiring & Upgrades", "Plumbing System Overhauls", "Water Harvesting & Storage", "Energy Efficiency Improvements"]
    },
    {
        icon: Sprout,
        title: "Outdoor Living & Landscaping",
        points: ["Landscaping & Hardscaping", "Perimeter Walls & Fencing", "Outdoor Kitchens & Decks", "Driveways & Parking"]
    },
    {
        icon: Sun,
        title: "Pre-Sale & Rental Refurbishment",
        points: ["Cosmetic Makeovers for Value", "Landlord Compliance & Safety", "Fixture & Fitting Upgrades", "End-of-Tenancy Repairs"]
    }
];

const partnershipBenefits = [
    { title: "All-Trades, Integrated Team", description: "Our in-house team of carpenters, plumbers, electricians, and painters ensures consistent quality and seamless scheduling." },
    { title: "Fixed-Price Contracts", description: "The price we quote is the price you pay. No hidden costs or surprise variations, ensuring budget certainty." },
    { title: "Formal Warranty & Aftercare", description: "We provide a clear warranty on all workmanship, backed by a responsive team for any post-completion adjustments." },
    { title: "Respect for Your Home & Time", description: "We enforce strict protocols for cleanliness, dust control, and security to minimize disruption to your daily life." },
    { title: "Local Material Expertise", description: "Strong supplier relationships ensure durable, high-quality materials suited for the Kenyan climate are used." },
    { title: "Builders' Risk Managed", description: "We carry comprehensive public liability insurance and adhere to all Kenyan building codes for your peace of mind." },
];

const projectProcess = [
    { step: "1", title: "Consultation & Vision" },
    { step: "2", title: "Design & Quotation" },
    { step: "3", title: "Planning & Permits" },
    { step: "4", title: "Project Management" },
    { step: "5", title: "Execution with Craftsmanship" },
    { step: "6", title: "Final Inspection & Handover" },
];

const RenovationsPage = () => {
    return (
        <main className="bg-background">
            <header className="bg-secondary py-16 pt-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight uppercase font-headline">
                        Home Renovations & Repair Services
                    </h1>
                    <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
                        We are a premier home renovation and repair specialist serving Nairobi and the wider Kenyan market, dedicated to turning your vision into a beautifully crafted reality with unmatched professionalism and reliability.
                    </p>
                </div>
            </header>

            <div className="container mx-auto px-4 py-16">
                
                <section className="max-w-4xl mx-auto mb-16">
                    <Card className="border-l-4 border-accent">
                        <CardHeader>
                            <CardTitle className="text-2xl text-primary font-headline">Our Philosophy: Building Trust, One Home at a Time</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">We understand that inviting a team into your home is a significant act of trust. Our approach is built on transparent communication, superior craftsmanship, and a commitment to minimizing disruption. We treat every project, from a minor leak fix to a major extension, with the same level of care, detail, and respect for your living space.</p>
                        </CardContent>
                    </Card>
                </section>

                <section className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-primary font-headline">Our Comprehensive Service Portfolio</h2>
                         <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">We offer a full spectrum of residential construction services, handling all trades under one roof with coordinated project management for a seamless client experience.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {renovationServices.map(service => (
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
                     <h2 className="text-3xl font-bold text-primary text-center mb-12 font-headline">Our End-to-End Project Process</h2>
                     <div className="relative max-w-4xl mx-auto">
                        <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border -z-10" aria-hidden="true"></div>
                        <div className="space-y-12">
                            {projectProcess.map((item, index) => (
                                <div key={item.step} className="relative flex items-center">
                                    <div className={`flex items-center w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                                        <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                                            <div className="p-4 bg-card rounded-lg shadow-md border">
                                                 <p className="text-lg font-bold text-primary">{item.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-lg border-4 border-background">
                                        {item.step}
                                    </div>
                                </div>
                            ))}
                        </div>
                     </div>
                </section>

                <section className="py-16">
                    <div className="text-center mb-12 px-4">
                        <h2 className="text-3xl font-bold text-primary font-headline">Why Choose Us for Your Kenyan Home Project?</h2>
                    </div>
                    <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                        {partnershipBenefits.map(benefit => (
                            <div key={benefit.title} className="text-center">
                                <h3 className="text-lg font-semibold text-primary mb-2">{benefit.title}</h3>
                                <p className="text-muted-foreground text-sm">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
                

                <section className="bg-primary text-primary-foreground p-8 rounded-lg text-center mt-16">
                    <h2 className="text-3xl font-bold mb-4 font-headline">Ready to Begin Your Home Transformation?</h2>
                    <p className="opacity-90 mb-6 max-w-2xl mx-auto">Contact us for a free, no-obligation consultation at your property. Let us discuss your ideas, assess your space, and provide a clear, professional path to creating the home you've always wanted.</p>
                    <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                        <Link href="/contact">
                           Request a Free Consultation
                        </Link>
                    </Button>
                </section>
            </div>
        </main>
    );
};

export default RenovationsPage;
