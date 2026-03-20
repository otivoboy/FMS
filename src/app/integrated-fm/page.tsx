
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
    Layers, Users, BarChart3, CheckCircle, Briefcase, Cpu, Shield, Handshake, 
    Building, Factory, ShoppingCart, HeartPulse, Hotel, GraduationCap, Banknote, Server 
} from 'lucide-react';
import Link from 'next/link';

const ifmPillars = [
    {
        icon: Cpu,
        title: "Pillar 1: Asset & Engineering Management (The Foundation)",
        points: [
            "Hard FM Mastery: Full lifecycle management of MEP systems (Electrical, HVAC, Plumbing), building fabric, fire protection, and utilities.",
            "Predictive Maintenance: Utilizing IoT sensors, BMS data, and CAFM analytics to shift from reactive repairs to predictive upkeep, preventing downtime.",
            "Energy & Sustainability Management: Holistic programs covering utility procurement, consumption monitoring, renewable energy integration, and carbon footprint reduction to achieve ESG goals.",
            "Statutory Compliance & Safety: Centralized management of all mandatory certifications, insurance, and adherence to Kenyan regulations (EPRA, NEMA, Fire Code, OSH Act)."
        ]
    },
    {
        icon: Users,
        title: "Pillar 2: Workplace & Experience Management (The Human Element)",
        points: [
            "Integrated Soft Services: Seamless delivery of cleaning, security, reception, catering, waste management, and porterage services.",
            "Space & Occupancy Management: Dynamic management of hybrid workspaces, meeting rooms, moves/adds/changes (MAC), and space utilization analytics to optimize density and functionality.",
            "Employee & Occupant Experience: Proactive management of the workplace environment—from air quality and lighting to amenities and service response—to boost productivity, well-being, and satisfaction.",
            "Helpdesk & Customer Service: A unified, technology-enabled helpdesk serving as the one-stop-shop for all employee and tenant requests, ensuring rapid resolution and communication."
        ]
    },
    {
        icon: BarChart3,
        title: "Pillar 3: Strategic & Business Services (The Intelligence)",
        points: [
            "Account & Relationship Management: A dedicated Strategic Account Director serves as an extension of your leadership team, providing governance, strategic reviews, and performance reporting.",
            "Financial & Budgetary Control: Consolidated invoicing, transparent cost allocation (per square foot, per occupant), annual budget forecasting, and lifecycle Capex planning.",
            "Technology & Data Analytics: Leveraging a centralized Integrated Workplace Management System (IWMS) or CAFM platform to provide real-time dashboards, KPIs, benchmarks, and actionable business intelligence.",
            "Contract & Supplier Management: We act as the prime contractor, managing an ecosystem of specialized sub-contractors, ensuring performance, compliance, and cost control."
        ]
    }
];

const operatingModel = [
    { title: "Single Point of Leadership", description: "A dedicated Account Director interfaces with your leadership, owning the overall strategy and P&L for your facilities." },
    { title: "On-Site Integrated Team", description: "A cross-functional Facility Manager leads an on-site team of technical engineers and service supervisors." },
    { title: "Unified Technology Platform", description: "All services, requests, assets, and performance data feed into a single IWMS/CAFM platform, visible to you via a client portal." },
    { title: "Consolidated Performance Reporting", description: "Receive one monthly report detailing financials, SLA performance, sustainability metrics, and strategic insights." }
];

const targetSectors = [
    { icon: Building, name: "Corporate Headquarters & Business Parks" },
    { icon: Banknote, name: "Banking & Financial Institutions" },
    { icon: ShoppingCart, name: "Retail Chains & Shopping Malls" },
    { icon: GraduationCap, name: "Universities & Educational Campuses" },
    { icon: HeartPulse, name: "Healthcare Groups & Hospital Networks" },
    { icon: Factory, name: "Industrial & Manufacturing Parks" },
    { icon: Shield, name: "Diplomatic Missions & NGOs" },
    { icon: Server, name: "Data Centers & Co-working Spaces" },
];


const IntegratedFMPage = () => {
    return (
        <main className="bg-background">
            <header className="bg-secondary py-16 pt-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight uppercase font-headline">
                         Integrated Facility Management
                    </h1>
                    <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
                        True operational excellence requires a unified, strategic approach. We provide Integrated Facility Management (IFM) solutions in Nairobi and across Kenya, acting as a single strategic partner to holistically manage your entire built environment.
                    </p>
                </div>
            </header>

            <div className="container mx-auto px-4 py-16">
                
                <section className="max-w-4xl mx-auto mb-16">
                    <Card className="border-l-4 border-accent">
                        <CardHeader>
                            <CardTitle className="text-2xl text-primary font-headline">What is Integrated Facility Management (IFM)?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">IFM is the strategic consolidation of all Hard (technical/asset-based) and Soft (people-centric/operational) facility management services under a single, accountable provider. It transcends transactional service delivery, focusing instead on aligning the entire physical workplace with your organization's core business objectives.</p>
                        </CardContent>
                    </Card>
                </section>

                <section className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-primary font-headline">Our Holistic IFM Service Framework</h2>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {ifmPillars.map(pillar => (
                            <Card key={pillar.title} className="flex flex-col hover:shadow-lg transition-shadow">
                                <CardHeader className="items-center text-center">
                                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                                        <pillar.icon className="h-8 w-8 text-accent" />
                                    </div>
                                    <CardTitle className="text-xl text-primary font-headline">{pillar.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        {pillar.points.map(point => <li key={point} className="flex items-start"><CheckCircle className="h-4 w-4 mr-2 mt-1 text-accent flex-shrink-0" /><span>{point}</span></li>)}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                <section className="py-16 bg-secondary rounded-lg">
                    <div className="text-center mb-12 px-4">
                        <h2 className="text-3xl font-bold text-primary font-headline">The Integrated Facility Management Operating Model</h2>
                    </div>
                    <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                        {operatingModel.map(item => (
                            <div key={item.title} className="text-center">
                                <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                                <p className="text-muted-foreground text-sm">{item.description}</p>
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
                    <h2 className="text-3xl font-bold mb-4 font-headline">Begin Your Journey to Integrated Excellence</h2>
                    <p className="opacity-90 mb-6 max-w-2xl mx-auto">Transition from fragmented management to seamless integration. Contact us to schedule a Strategic Facility Review. We will analyze your current operations, contracts, and costs, and present a customized IFM business case.</p>
                    <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                        <Link href="/contact">
                            Schedule a Strategic Facility Review
                        </Link>
                    </Button>
                </section>
            </div>
        </main>
    );
};

export default IntegratedFMPage;