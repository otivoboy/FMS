
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
    Trees, Sprout, Leaf, Paintbrush, Wrench, Check,
    Hammer, Sun, Layers
} from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        icon: Paintbrush,
        title: "Custom Landscape Design & Installation",
        points: ["Consultation & Site Analysis", "Conceptual Designs & 3D Visualizations", "Full-Service Installation", "Specialized Themes (Tropical, Minimalist, etc.)"]
    },
    {
        icon: Wrench,
        title: "Professional Garden Maintenance",
        points: ["Regular Lawn Care", "Pruning & Trimming", "Weed, Pest & Disease Control", "Irrigation System Management"]
    },
    {
        icon: Layers,
        title: "Hardscaping & Outdoor Living",
        points: ["Patios & Walkways", "Retaining Walls & Terracing", "Water Features", "Outdoor Kitchens & Fire Pits"]
    },
    {
        icon: Leaf,
        title: "Sustainable & Eco-Conscious Landscaping",
        points: ["Native Planting", "Rainwater Harvesting Systems", "Composting & Soil Health", "Pollinator Gardens"]
    },
    {
        icon: Trees,
        title: "Specialized Garden Services",
        points: ["Vertical & Rooftop Gardens", "Edible Gardens & Kitchen Herb Plots", "Garden Lighting Design", "Tree Surgery & Safe Removal"]
    },
];

const whyChooseUs = [
    { title: "Deep Local Expertise", description: "We understand the unique climates, soils, and flora of each region we serve, from the highlands of Eldoret to the warmer plains of Machakos." },
    { title: "End-to-End Service", description: "From initial design and installation to ongoing maintenance, we are your single point of contact for all gardening needs." },
    { title: "Skilled, Passionate Team", description: "Our landscapers, horticulturists, and designers are trained, experienced, and genuinely love what they do." },
    { title: "Quality Materials & Plants", description: "We source the best locally available plants, trees, and materials, ensuring longevity and sustainability." },
    { title: "Reliability & Communication", description: "We respect your time and property, providing clear timelines, updates, and transparent pricing." },
    { title: "Community Presence", description: "We are proud to serve and beautify communities across Kenya, contributing to greener, healthier neighborhoods." },
];

const transformationBenefits = [
    "Increases your property value – curb appeal matters.",
    "Promotes well-being – reduce stress and connect with nature.",
    "Creates functional outdoor rooms for dining, play, or meditation.",
    "Supports the local environment through conscious planting."
];


const GardeningLandscapingPage = () => {
    return (
        <main className="bg-background">
            <header className="bg-secondary py-16 pt-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight uppercase font-headline">
                        Gardening & Landscaping Services
                    </h1>
                    <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
                        Serving Nairobi, Kiambu, Machakos, Eldoret, Nakuru, and across Kenya. Your dream garden is waiting to grow. Let’s cultivate something extraordinary together.
                    </p>
                </div>
            </header>

            <div className="container mx-auto px-4 py-16">

                <section className="mb-16 grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                         <h2 className="text-3xl font-bold text-primary font-headline mb-6">Our Services</h2>
                         <div className="space-y-8">
                            {services.slice(0, 3).map(service => (
                                <Card key={service.title} className="hover:shadow-lg transition-shadow">
                                    <CardHeader className="flex flex-row items-center gap-4">
                                        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <service.icon className="h-6 w-6 text-accent" />
                                        </div>
                                        <CardTitle className="text-xl text-primary font-headline">{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                                            {service.points.map(point => <li key={point}>{point}</li>)}
                                        </ul>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                     <div>
                        <div className="space-y-8 mt-0 lg:mt-12">
                            {services.slice(3).map(service => (
                                <Card key={service.title} className="hover:shadow-lg transition-shadow">
                                    <CardHeader className="flex flex-row items-center gap-4">
                                        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <service.icon className="h-6 w-6 text-accent" />
                                        </div>
                                        <CardTitle className="text-xl text-primary font-headline">{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                                            {service.points.map(point => <li key={point}>{point}</li>)}
                                        </ul>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
                
                <section className="py-16 bg-secondary rounded-lg">
                    <div className="text-center mb-12 px-4">
                        <h2 className="text-3xl font-bold text-primary font-headline">Why We Are The Best In Kenya</h2>
                    </div>
                    <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                        {whyChooseUs.map(benefit => (
                            <div key={benefit.title} className="text-center">
                                <h3 className="text-lg font-semibold text-primary mb-2">{benefit.title}</h3>
                                <p className="text-muted-foreground text-sm">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
                
                <section className="py-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                         <div>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-primary font-headline">Transform Your Space, Enhance Your Lifestyle</CardTitle>
                                </CardHeader>
                                <CardContent>
                                     <ul className="space-y-3 text-muted-foreground">
                                        {transformationBenefits.map((item) => (
                                           <li key={item} className="flex items-start">
                                               <Check className="h-5 w-5 mr-2 mt-1 text-accent flex-shrink-0" />
                                               <span>{item}</span>
                                           </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                        <div>
                             <h2 className="text-3xl font-bold text-primary font-headline mb-6">Our Simple Process</h2>
                             <ol className="space-y-4">
                                <li className="flex items-center"><span className="text-accent font-bold text-2xl mr-4">1.</span><span className="text-lg text-muted-foreground">Contact us with your ideas and project scope.</span></li>
                                <li className="flex items-center"><span className="text-accent font-bold text-2xl mr-4">2.</span><span className="text-lg text-muted-foreground">We visit your property for a detailed on-site consultation.</span></li>
                                <li className="flex items-center"><span className="text-accent font-bold text-2xl mr-4">3.</span><span className="text-lg text-muted-foreground">Receive a personalized design proposal, timeline, and quote.</span></li>
                                <li className="flex items-center"><span className="text-accent font-bold text-2xl mr-4">4.</span><span className="text-lg text-muted-foreground">Our team brings your garden design to life.</span></li>
                                <li className="flex items-center"><span className="text-accent font-bold text-2xl mr-4">5.</span><span className="text-lg text-muted-foreground">Enjoy your new oasis with optional maintenance plans.</span></li>
                            </ol>
                        </div>
                       
                    </div>
                </section>

                <section className="bg-primary text-primary-foreground p-8 rounded-lg text-center mt-16">
                    <h2 className="text-3xl font-bold mb-4 font-headline">Begin Your Garden Transformation Today</h2>
                    <p className="opacity-90 mb-6 max-w-3xl mx-auto">Your dream garden is waiting to grow. Contact us for a consultation and let’s begin designing the outdoor space you’ve always imagined, right in your own backyard.</p>
                    <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                        <Link href="/contact">
                           Request a Landscaping Consultation
                        </Link>
                    </Button>
                </section>
            </div>
        </main>
    );
};

export default GardeningLandscapingPage;
