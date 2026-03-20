
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
    Cog, ShieldCheck, Wrench, BarChart3, Users, Sprout, CheckCircle,
    Building, Factory, ShoppingCart, HeartPulse, Hotel, GraduationCap, Banknote, Home
} from 'lucide-react';
import Link from 'next/link';

const corePillars = [
    {
        icon: Cog,
        title: "CORE PILLAR 1: PREVENTIVE & PREDICTIVE MAINTENANCE PROGRAMS",
        points: [
            "Scheduled Preventive Maintenance (PM): Development and strict execution of customized maintenance schedules for all critical assets (HVAC, electrical, plumbing, generators, elevators, fire systems) to prevent failures before they occur.",
            "Condition-Based Monitoring: Utilization of tools like thermographic imaging, vibration analysis, and Building Management System (BMS) data to predict equipment wear and schedule interventions optimally.",
            "Asset Register & Lifecycle Management: Creation and maintenance of a dynamic digital asset register, tracking maintenance history, warranty status, and forecasting end-of-life replacement for accurate budgeting.",
            "Lubrication, Calibration & Testing: Systematic servicing of mechanical components, calibration of controls and instruments, and regular testing of safety and backup systems."
        ]
    },
    {
        icon: Wrench,
        title: "CORE PILLAR 2: CORRECTIVE & REACTIVE MAINTENANCE",
        points: [
            "24/7 Helpdesk & Rapid Response: A dedicated, locally staffed helpdesk to log all maintenance requests, dispatch qualified technicians, and provide real-time updates to occupants and management.",
            "Skilled Trade Repairs: Expert troubleshooting and repair for all electrical, mechanical, plumbing, carpentry, masonry, and glazing issues by certified in-house or vetted specialist technicians.",
            "Emergency Breakdown Services: Priority response for critical system failures affecting safety, security, or core operations, including after-hours and holiday support.",
            "Spare Parts Management: Strategic stocking of critical spares and established relationships with OEM suppliers to minimize equipment downtime."
        ]
    },
    {
        icon: ShieldCheck,
        title: "CORE PILLAR 3: FACILITY ADMINISTRATION & COMPLIANCE MANAGEMENT",
        points: [
            "Statutory Compliance Oversight: Proactive management of all mandatory inspections, certifications, and documentation required by Kenyan law (EPRA, NEMA, County Governments, Fire Department, OSH Act).",
            "Contractor Coordination & Supervision: Acting as the prime interface for all third-party specialty vendors (e.g., elevator, security system, pest control), ensuring their work meets scope, standard, and schedule.",
            "Documentation & Reporting: Maintenance of comprehensive digital records, including service reports, compliance certificates, as-built drawings, and warranty documents in a centralized client portal.",
            "Budget Management & Cost Tracking: Assistance in developing annual maintenance budgets, tracking expenditures against plan, and providing transparent reporting on maintenance costs per square foot or asset."
        ]
    },
    {
        icon: BarChart3,
        title: "CORE PILLAR 4: OPERATIONAL FACILITY MANAGEMENT",
        points: [
            "Daily Walk-throughs & Site Supervision: Regular visual inspections by a dedicated Facility Manager or Site Supervisor to identify minor issues before they escalate and ensure site standards are upheld.",
            "Soft Service Coordination: Management and quality auditing of essential daily services, including cleaning, waste collection, landscaping, and pest control, ensuring they integrate smoothly with hard maintenance activities.",
            "Space & Occupancy Support: Coordination of office moves, reconfigurations, minor fit-outs, and management of keys/access systems.",
            "Utility Monitoring & Conservation: Tracking of water, electricity, and gas consumption, identifying anomalies that indicate waste or equipment malfunction, and implementing conservation initiatives."
        ]
    }
];

const structuredApproach = [
    "Strategic Planning: Developing your annual maintenance plan and budget.",
    "Day-to-Day Operations: Overseeing all preventive and reactive tasks.",
    "Vendor & Contractor Management: Sourcing, supervising, and approving work.",
    "Client Communication: Providing regular performance and financial reports.",
    "Issue Escalation & Resolution: Owning problems until they are fully resolved."
];

const partnershipBenefits = [
    { title: "Proactive Culture, Not Reactive Firefighting", description: "Our systematic PM programs reduce emergency breakdowns by up to 70%, delivering predictable costs and uninterrupted operations." },
    { title: "Local Technical Expertise with National Standards", description: "Our team of engineers and technicians understands the unique challenges of the Kenyan environment—from power fluctuations to water quality—and applies standardized, best-practice procedures." },
    { title: "Technology-Enabled Transparency", description: "We utilize modern Computer-Aided Facility Management (CAFM) software to provide you with a live client portal for requesting services, viewing asset histories, and accessing reports." },
    { title: "Total Cost of Ownership Reduction", description: "By extending asset lifecycles, improving energy efficiency, and avoiding major catastrophic repairs, we directly lower your long-term facility operating costs." },
    { title: "Risk Mitigation & Compliance Assurance", description: "We safeguard your organization from the legal, financial, and reputational risks associated with non-compliance or facility-related accidents." },
    { title: "Scalable & Flexible Solutions", description: "Our service models are tailored, from full-scope management for a single building to a multi-site portfolio model for regional or national operations." },
];

const targetSectors = [
    { icon: Building, name: "Commercial: Office Towers, Business Parks, Shopping Malls" },
    { icon: Factory, name: "Industrial: Manufacturing Plants, Warehouses, Logistics Centers" },
    { icon: HeartPulse, name: "Healthcare: Hospitals, Clinics, Medical Laboratories" },
    { icon: GraduationCap, name: "Education: Schools, Universities, Training Institutions" },
    { icon: Hotel, name: "Hospitality: Hotels, Resorts, Conference Centers" },
    { icon: ShoppingCart, name: "Retail: Standalone Stores, Supermarkets, Showrooms" },
    { icon: Home, name: "Residential Estates & Apartment Complexes" }
];


const FacilityMaintenancePage = () => {
    return (
        <main className="bg-background">
            <header className="bg-secondary py-16 pt-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight uppercase font-headline">
                         Facility Maintenance & Management Services
                    </h1>
                    <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
                       We provide professional Facility Maintenance & Management Services across Nairobi and Kenya, offering a proactive, disciplined, and single-point-of-accountability solution to preserve your asset value, ensure compliance, and create a seamless, reliable operating environment.
                    </p>
                </div>
            </header>

            <div className="container mx-auto px-4 py-16">
                
                <section className="max-w-4xl mx-auto mb-16">
                    <Card className="border-l-4 border-accent">
                        <CardHeader>
                            <CardTitle className="text-2xl text-primary font-headline">Our Mission: Proactive Stewardship for Your Assets</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">We move beyond simple repair work to become stewards of your built environment. Our philosophy is built on systematic maintenance, data-driven decision-making, and strategic partnership. We ensure your facilities—whether commercial, industrial, or institutional—are not merely functional, but optimized for performance, efficiency, and safety, allowing you to focus entirely on your core business.</p>
                        </CardContent>
                    </Card>
                </section>

                <section className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-primary font-headline">Our End-to-End Maintenance & Management Framework</h2>
                        <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">Our services are structured to cover the entire spectrum of facility needs, from daily upkeep to long-term capital planning, delivered through a coordinated management structure.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {corePillars.map(pillar => (
                            <Card key={pillar.title} className="flex flex-col hover:shadow-lg transition-shadow">
                                <CardHeader>
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
                        <h2 className="text-3xl font-bold text-primary font-headline">Why Partner With Us?</h2>
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
                
                 <section className="py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-primary font-headline">Our Structured Management Approach</h2>
                        <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">We assign a dedicated Facility Manager as your single point of contact, ensuring clarity, accountability, and strategic oversight.</p>
                    </div>
                     <div className="max-w-4xl mx-auto space-y-4">
                        {structuredApproach.map((item) => (
                           <Card key={item} className="p-4">
                               <p className="font-semibold text-primary">{item}</p>
                           </Card>
                        ))}
                    </div>
                </section>

                <section className="py-16 bg-secondary rounded-lg">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-primary font-headline">Serving Kenya’s Diverse Facility Portfolio</h2>
                    </div>
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {targetSectors.map(sector => (
                             <Card key={sector.name} className="text-left p-4 hover:bg-accent/10 transition-colors flex items-center gap-4">
                                <div className="mx-auto w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                                    <sector.icon className="h-6 w-6"/>
                                </div>
                                <h3 className="text-sm font-semibold text-primary">{sector.name}</h3>
                            </Card>
                        ))}
                    </div>
                </section>

                <section className="bg-primary text-primary-foreground p-8 rounded-lg text-center mt-16">
                    <h2 className="text-3xl font-bold mb-4 font-headline">Transform Your Facility from a Cost Center to a Performance Asset</h2>
                    <p className="opacity-90 mb-6 max-w-2xl mx-auto">Stop managing breakdowns and start managing performance. Contact us today to schedule a Facility Condition Assessment. Our team will conduct a thorough evaluation of your assets and operations, providing a detailed report with prioritized recommendations and a clear proposal for a managed maintenance program.</p>
                    <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                        <Link href="/contact">
                           Request a Facility Assessment
                        </Link>
                    </Button>
                </section>
            </div>
        </main>
    );
};

export default FacilityMaintenancePage;