
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
    Wrench, Home, Shield, Zap, Droplets, HardHat, Paintbrush, Hammer, 
    CheckCircle, Sun, Wind, Sprout, Search, Heart, Wallet, Snowflake, Calendar
} from 'lucide-react';
import Link from 'next/link';

const renovationServices = [
    {
        icon: Home,
        title: "Home Renovations",
        description: "From a single room to a full home reimagining, we blend innovative design with structural integrity to create spaces that reflect your lifestyle."
    },
    {
        icon: Wrench,
        title: "Roof Repairs",
        description: "Thorough inspections and repairs for all roof types, preventing costly water damage, mold, and structural issues."
    },
    {
        icon: HardHat,
        title: "Tiling & Flooring",
        description: "Professional installation and repair of ceramic, porcelain, stone, hardwood, and vinyl flooring with specialized waterproofing."
    },
    {
        icon: Hammer,
        title: "Hard Floor Repairs",
        description: "Restore wood, tile, and stone floors to their original beauty, saving you the cost of full replacement."
    },
    {
        icon: Paintbrush,
        title: "Professional Painting",
        description: "High-quality interior and exterior painting services with meticulous surface preparation for a flawless, long-lasting finish."
    },
    {
        icon: Droplets,
        title: "Swimming Pool Maintenance",
        description: "Comprehensive pool services including structural repairs, equipment maintenance, and surface refinishing to keep your pool safe and inviting."
    }
];

const safetyServices = [
    {
        icon: Search,
        title: "Structural Assessments",
        description: "Regular evaluations of your home's foundation, walls, and support systems to identify potential issues before they become hazards."
    },
    {
        icon: Zap,
        title: "Electrical & Plumbing Safety Checks",
        description: "Ensuring all systems meet current safety codes, addressing faulty wiring, outdated panels, and potential leaks."
    },
    {
        icon: Heart,
        title: "Child & Elder Safety Modifications",
        description: "Creating secure environments with non-slip surfaces, accessible designs, and secure railings."
    },
    {
        icon: Shield,
        title: "Emergency Repair Preparedness",
        description: "24/7 rapid response for urgent issues like water leaks, storm damage, or electrical failures to prevent further damage."
    }
];

const whyChooseUs = [
    "One team for all maintenance and renovation needs.",
    "Durable, trusted products with appropriate warranties.",
    "Full licensing and insurance for your protection.",
    "Detailed, transparent quotes with no hidden costs.",
    "Realistic timelines with consistent communication.",
    "Work that meets or exceeds local safety standards."
];

const maintenanceSeasons = [
    { icon: Sprout, season: "Spring", tasks: "Roof/gutter inspection, exterior painting, pool opening." },
    { icon: Sun, season: "Summer", tasks: "Deck/outdoor structure safety checks, AC maintenance." },
    { icon: Wind, season: "Fall", tasks: "Heating prep, drainage checks, window/door sealing." },
    { icon: Snowflake, season: "Winter", tasks: "Insulation verification, emergency prep, interior systems." },
]

const PropertyMaintenancePage = () => {
    return (
        <main className="bg-background">
            <header className="bg-secondary py-16 pt-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight uppercase font-headline">
                        Property Maintenance & Safety
                    </h1>
                    <p className="mt-6 max-w3xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
                        Your complete guide to a secure, beautiful, and functional home. Our services ensure your sanctuary remains in optimal condition for years to come.
                    </p>
                </div>
            </header>

            <div className="container mx-auto px-4 py-16">
                
                <section className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-primary font-headline">Renovations & Maintenance: Transforming Your Space</h2>
                        <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">We combine superior craftsmanship with meticulous planning to preserve your property’s value and enhance your daily living experience.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {renovationServices.map(service => (
                            <Card key={service.title} className="flex flex-col hover:shadow-lg transition-shadow text-center">
                                <CardHeader className="items-center">
                                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                                        <service.icon className="h-8 w-8 text-accent" />
                                    </div>
                                    <CardTitle className="text-xl text-primary font-headline">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-sm text-muted-foreground">{service.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
                
                <section className="py-16 bg-secondary rounded-lg">
                    <div className="text-center mb-12 px-4">
                        <h2 className="text-3xl font-bold text-primary font-headline">A Safety-First Approach: Protecting What Matters</h2>
                        <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">Beyond aesthetics, we embed safety into every project we undertake, safeguarding your family and your investment.</p>
                    </div>
                    <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                        {safetyServices.map(service => (
                            <Card key={service.title} className="text-center p-4">
                               <div className="mx-auto w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                                    <service.icon className="h-6 w-6"/>
                                </div>
                                <h3 className="text-lg font-semibold text-primary mb-2">{service.title}</h3>
                                <p className="text-muted-foreground text-sm">{service.description}</p>
                            </Card>
                        ))}
                    </div>
                </section>
                
                 <section className="py-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                             <h2 className="text-3xl font-bold text-primary font-headline mb-6">Why Choose Our Integrated Approach?</h2>
                             <ul className="space-y-4">
                                {whyChooseUs.map((item) => (
                                   <li key={item} className="flex items-start text-lg">
                                       <CheckCircle className="h-6 w-6 mr-3 mt-1 text-accent flex-shrink-0" />
                                       <span className="text-muted-foreground">{item}</span>
                                   </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center text-primary font-headline">
                                        <Calendar className="mr-2"/>
                                        Preventative Maintenance Plans
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4">Avoid costly emergency repairs with our tailored seasonal maintenance schedules that provide proactive care for your property.</p>
                                    <div className="space-y-4">
                                        {maintenanceSeasons.map(season => (
                                            <div key={season.season} className="flex items-start">
                                                 <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                                    <season.icon className="h-5 w-5 text-accent" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-primary">{season.season}</h4>
                                                    <p className="text-sm text-muted-foreground">{season.tasks}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                <section className="bg-primary text-primary-foreground p-8 rounded-lg text-center mt-16">
                    <h2 className="text-3xl font-bold mb-4 font-headline">Invest in Your Home's Future</h2>
                    <p className="opacity-90 mb-6 max-w-3xl mx-auto">Contact us today for a comprehensive property assessment. Let's build, maintain, and protect your perfect home together with a customized plan that addresses your needs and priorities.</p>
                    <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                        <Link href="/contact">
                           Schedule a Property Assessment
                        </Link>
                    </Button>
                </section>
            </div>
        </main>
    );
};

export default PropertyMaintenancePage;
