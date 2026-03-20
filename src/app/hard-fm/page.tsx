
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
    Zap, Wrench, ShieldCheck, Building, Activity, CheckCircle,
    Building2, Factory, ShoppingCart, HeartPulse, Hotel, GraduationCap, Banknote, Server 
} from 'lucide-react';
import Link from 'next/link';

const hardFmServices = [
    {
        icon: Zap,
        title: "Mechanical, Electrical, and Plumbing (MEP) Systems Maintenance",
        points: ["Electrical Systems: Full maintenance of HV/LV switchgear, distribution boards, transformers, wiring, lighting systems (internal & external), UPS systems, and standby generators. Includes load testing, thermographic surveys, and energy efficiency audits.", "Air Conditioning & Ventilation (HVAC): Planned maintenance of chillers, air handling units (AHUs), fan coil units (FCUs), VRV/VRF systems, ductwork, and exhaust fans. Service includes cleaning, refrigerant management, performance optimization, and 24/7 breakdown support.", "Plumbing & Water Systems: Maintenance of water supply lines, drainage systems, sewage ejector pumps, water heaters, and storage tanks. Legionella risk assessment and control (L8 Compliance) through temperature monitoring and system flushing.", "Fire Protection Systems: Inspection, testing, and maintenance of fire alarms, smoke detectors, sprinkler systems, fire pumps, hydrants, hose reels, and gaseous suppression systems to meet the Kenyan Fire Code and NFPA standards."]
    },
    {
        icon: Building,
        title: "Building Fabric & Structural Maintenance",
        points: ["Reactive & Planned Repairs: Maintenance of roofs, walls, ceilings, floors, windows, doors, and internal finishes.", "Civil & Masonry Works: Minor structural repairs, waterproofing, painting, glazing, and refurbishment projects.", "Grounds & External Areas: Maintenance of parking lots, walkways, perimeter walls, fences, and drainage systems."]
    },
    {
        icon: Server,
        title: "Critical Environments & Specialist Systems",
        points: ["Data Center & Server Room Support: Precision cooling maintenance, power quality management, and environmental monitoring for uptime-critical IT infrastructure.", "Medical Gas & Equipment (for Healthcare): Maintenance of specialized hospital systems in line with regulatory requirements.", "Building Management System (BMS) & Controls: Maintenance, calibration, and optimization of BMS/EMS systems to ensure integrated, efficient building operations.", "Lifts, Elevators & Escalators: Specialist maintenance and compliance management through accredited partners or in-house teams."]
    },
    {
        icon: Activity,
        title: "Energy & Utility Management",
        points: ["Energy Performance Contracting: Identify, finance, and implement energy-saving retrofits (e.g., LED lighting, HVAC upgrades) with guaranteed savings.", "Utility Monitoring & Sub-Metering: Installation of monitoring systems to track consumption, identify waste, and allocate costs accurately across tenants or departments.", "Renewable Energy Integration: Support for the operation and maintenance of solar PV installations, inverters, and battery storage systems."]
    },
    {
        icon: ShieldCheck,
        title: "Compliance & Statutory Inspections",
        points: ["Mandatory Certification Management: Coordinating and documenting all legally required inspections (e.g., boiler/pressure vessel, lifts, electrical installation condition reports, fire system certifications).", "Health, Safety & Environment (HSE): Ensuring all engineering works comply with the Occupational Safety and Health Act, environmental regulations, and best practice standards like ISO 45001.", "Audit & Documentation: Maintaining a comprehensive digital log of all maintenance activities, asset registers, warranties, certificates, and as-built drawings."]
    },
    {
        icon: Wrench,
        title: "Capital Project & Refurbishment Support",
        points: ["Minor Works & Fit-Out Projects: Managing small-scale renovation, office reconfiguration, and system upgrade projects from design to handover.", "Lifecycle Planning & Capex Advisory: Providing data-driven forecasts for asset replacement and major repairs, helping you plan capital expenditure budgets effectively.", "Contractor Management: Acting as your technical agent to source, vet, and supervise specialist subcontractors, ensuring quality, timeliness, and cost control."]
    }
];

const partnershipBenefits = [
    { title: "In-House Technical Expertise", description: "Our core team consists of certified engineers (electrical, mechanical, civil) with deep experience in Kenya’s unique power, water, and environmental conditions." },
    { title: "Proactive, Data-Led Approach", description: "We shift from costly reactive fixes to predictive and preventative maintenance using CAFM/IWMS technology, IoT sensor data, and detailed asset histories to prevent failures before they occur." },
    { title: "Uncompromising Compliance Focus", description: "We navigate the complex landscape of Kenyan regulations (Energy and Petroleum Regulatory Authority (EPRA), National Construction Authority (NCA), county government bylaws) to keep your facility fully compliant and audit-ready." },
    { title: "Single-Point Accountability", description: "Manage all your hard services through one dedicated account manager and integrated helpdesk, simplifying communication, reporting, and invoice management." },
    { title: "Local Supply Chain & Parts Network", description: "We have established relationships with leading equipment OEMs and local suppliers, ensuring genuine parts are available swiftly to minimize downtime." },
    { title: "Uptime & Resilience Guarantee", description: "Our service level agreements (SLAs) are built around measurable Key Performance Indicators (KPIs) focused on system availability, response times, and first-time fix rates, directly supporting your business continuity." },
];

const targetSectors = [
    { icon: Building2, name: "Commercial Office Towers & Business Parks" },
    { icon: Factory, name: "Industrial & Manufacturing Plants" },
    { icon: ShoppingCart, name: "Shopping Malls & Retail Complexes" },
    { icon: HeartPulse, name: "Hospitals & Healthcare Facilities" },
    { icon: Hotel, name: "Hotels & Hospitality Venues" },
    { icon: GraduationCap, name: "Educational Campuses & Universities" },
    { icon: Banknote, name: "Banks & Data Centers" },
    { icon: Building, name: "Government & Public Sector Buildings" },
];

const HardFMPage = () => {
    return (
        <main className="bg-background">
            <header className="bg-secondary py-16 pt-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight uppercase font-headline">
                         Hard Facility Management Services
                    </h1>
                    <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
                        In the competitive commercial and industrial landscape of Kenya, the reliability, efficiency, and longevity of your physical assets are critical to operational continuity, safety, and bottom-line performance. Hard Facility Management (Hard FM) forms the foundational backbone of any built environment, encompassing the critical systems that keep a facility functioning, compliant, and productive. We deliver expert, end-to-end Hard FM engineering and maintenance solutions across Nairobi and Kenya, ensuring your building's core infrastructure is managed proactively, not just reactively.
                    </p>
                </div>
            </header>

            <div className="container mx-auto px-4 py-16">
                
                <section className="max-w-4xl mx-auto mb-16">
                    <Card className="border-l-4 border-accent">
                        <CardHeader>
                            <CardTitle className="text-2xl text-primary font-headline">What is Hard Facility Management?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">Hard FM refers to the maintenance and management of the physical, fixed assets and infrastructure of a building or facility. These are the "bricks and mortar" and complex engineering systems that require specialized technical expertise. Hard FM is asset-focused, with a lifecycle approach aimed at preserving value, ensuring regulatory compliance, and minimizing disruptive downtime. Effective Hard FM is strategic, data-driven, and essential for safeguarding your capital investments.</p>
                        </CardContent>
                    </Card>
                </section>

                <section className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-primary font-headline">Our Core Hard FM Service Portfolio</h2>
                         <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">We provide a full spectrum of technical services, from planned preventative maintenance (PPM) and statutory compliance to breakdown response and lifecycle replacement projects, all managed by qualified, certified engineers and technicians.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {hardFmServices.map(service => (
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
                        <h2 className="text-3xl font-bold text-primary font-headline">Why Partner With Us for Hard FM in Kenya?</h2>
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
                    <h2 className="text-3xl font-bold mb-4 font-headline">Contact Us for a Technical Facility Audit</h2>
                    <p className="opacity-90 mb-6 max-w-2xl mx-auto">Move from unpredictable breakdowns to controlled, planned asset management. Contact our Nairobi-based engineering hub to schedule a comprehensive technical audit of your facility's hard services. We will provide a detailed report on asset condition, compliance status, and a prioritized plan for optimization and risk mitigation.</p>
                    <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                        <Link href="/contact">
                            Request a Technical Facility Audit
                        </Link>
                    </Button>
                </section>
            </div>
        </main>
    );
};

export default HardFMPage;

    