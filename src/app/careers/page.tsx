
'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Building, Check, ChevronsRight, FileText, GraduationCap, Heart, Mail, MapPin, Phone, Shield, UserCheck, Users, Wallet } from 'lucide-react';

const benefits = [
  { icon: Wallet, title: "Financial Wellness", details: ["Competitive salaries & bonuses", "Retirement benefits", "Travel allowances"] },
  { icon: Heart, title: "Work-Life Balance", details: ["Flexible working arrangements", "Generous paid time off", "Family-friendly policies"] },
  { icon: GraduationCap, title: "Professional Development", details: ["Skills training & certification", "Leadership development", "Tuition reimbursement"] },
];

const jobCategories = [
    {
        title: "Facilities Management Roles",
        jobs: [
            {
                title: "Facilities Manager",
                location: "Nairobi CBD",
                type: "Full-time",
                ref: "FM-0625",
                overview: "Lead our facilities management team in delivering exceptional service to commercial clients across Nairobi. Oversee maintenance operations, vendor management, and client relationships.",
                responsibilities: [
                    "Manage day-to-day facilities operations for multiple client sites",
                    "Develop and implement preventive maintenance programs",
                    "Coordinate with technical teams and external vendors",
                    "Ensure compliance with safety and quality standards",
                    "Prepare operational reports and budgets",
                ],
                requirements: [
                    "Bachelor's degree in Facilities Management, Engineering, or related field",
                    "5+ years experience in facilities management",
                    "Strong knowledge of HVAC, electrical, and plumbing systems",
                    "Excellent leadership and communication skills",
                    "PMP or related certification preferred",
                ]
            },
            {
                title: "Maintenance Technician",
                location: "Various Nairobi Locations",
                type: "Full-time",
                ref: "MT-0625",
                overview: "Perform maintenance and repair tasks across client facilities, ensuring optimal operation of all building systems.",
                responsibilities: [
                    "Conduct routine maintenance of HVAC, electrical, and plumbing systems",
                    "Respond to emergency maintenance requests",
                    "Perform equipment inspections and troubleshooting",
                    "Maintain maintenance records and reports",
                    "Ensure safety protocols are followed",
                ],
                requirements: [
                    "Technical diploma in relevant field",
                    "2+ years maintenance experience",
                    "Knowledge of building systems and maintenance procedures",
                    "Physical ability to perform manual tasks",
                    "Valid driver's license",
                ]
            }
        ]
    },
    {
        title: "Cleaning Services Roles",
        jobs: [
            {
                title: "Cleaning Supervisor",
                location: "Westlands & Surrounding Areas",
                type: "Full-time",
                ref: "CS-0625",
                overview: "Supervise cleaning teams across multiple sites, ensuring high standards of cleanliness and client satisfaction.",
                responsibilities: [
                    "Train and supervise cleaning staff",
                    "Conduct quality inspections",
                    "Manage cleaning supplies and equipment",
                    "Handle client communications",
                    "Implement cleaning protocols and schedules",
                ],
                requirements: [
                    "3+ years supervisory experience in cleaning services",
                    "Knowledge of cleaning techniques and chemicals",
                    "Strong organizational skills",
                    "Excellent customer service attitude",
                ]
            },
            {
                title: "Commercial Cleaner",
                location: "Multiple Locations Across Nairobi",
                type: "Full-time/Part-time",
                ref: "CC-0625",
                overview: "Maintain cleanliness and hygiene standards in commercial facilities, contributing to healthy work environments.",
                responsibilities: [
                    "Perform daily cleaning tasks as assigned",
                    "Use cleaning equipment and supplies properly",
                    "Follow safety procedures",
                    "Report maintenance issues",
                    "Maintain cleaning equipment",
                ],
                requirements: [
                    "High school diploma",
                    "Previous cleaning experience preferred",
                    "Reliability and attention to detail",
                    "Ability to work independently or in a team",
                ]
            }
        ]
    },
     {
        title: "Technical Specialist Roles",
        jobs: [
            {
                title: "HVAC Technician",
                location: "Nairobi County",
                type: "Full-time",
                ref: "HVAC-0625",
                overview: "Specialize in installation, maintenance, and repair of heating, ventilation, and air conditioning systems.",
                responsibilities: [
                    "Install and maintain HVAC systems",
                    "Perform diagnostics and repairs",
                    "Conduct routine maintenance",
                    "Ensure energy efficiency optimization",
                    "Maintain service records"
                ],
                requirements: [
                    "HVAC certification or equivalent",
                    "3+ years HVAC experience",
                    "Knowledge of refrigeration systems",
                    "Safety certification preferred"
                ]
            },
            {
                title: "Electrical Technician",
                location: "Industrial Area & CBD",
                type: "Full-time",
                ref: "ET-0625",
                overview: "Handle electrical systems maintenance, repairs, and installations across client facilities.",
                responsibilities: [
                    "Maintain electrical systems and components",
                    "Troubleshoot electrical issues",
                    "Install electrical equipment",
                    "Ensure compliance with electrical codes",
                    "Perform safety inspections"
                ],
                requirements: [
                    "Electrical engineering diploma",
                    "Valid electrician license",
                    "3+ years commercial electrical experience",
                    "Knowledge of Kenyan electrical standards"
                ]
            }
        ]
    },
    {
        title: "Administrative & Support Roles",
        jobs: [
            {
                title: "Customer Service Representative",
                location: "Nairobi Headquarters",
                type: "Full-time",
                ref: "CSR-0625",
                overview: "Serve as primary point of contact for clients, ensuring excellent service delivery and client satisfaction.",
                responsibilities: [
                    "Handle client inquiries and requests",
                    "Schedule service appointments",
                    "Maintain client records",
                    "Process service reports",
                    "Support account managers"
                ],
                requirements: [
                    "Diploma in Business Administration or related",
                    "2+ years customer service experience",
                    "Excellent communication skills",
                    "Proficiency in MS Office"
                ]
            }
        ]
    }
];

const hiringProcess = [
    { step: 1, title: "Application Review", description: "We carefully review every application. Successful candidates will be contacted within 7-10 business days." },
    { step: 2, title: "Initial Interview", description: "A phone or video interview with our HR team to discuss your experience and career goals." },
    { step: 3, title: "Technical Assessment", description: "For technical roles, a practical assessment to evaluate your skills and knowledge." },
    { step: 4, title: "In-person Interview", description: "Meet with department managers and team members to discuss the role in detail." },
    { step: 5, title: "Offer & Onboarding", description: "Successful candidates receive a formal offer followed by comprehensive onboarding and training." }
];

const CareersPage = () => {
    return (
        <main className="flex-grow bg-background">
            {/* Header Section */}
            <section className="py-24 pt-32 bg-secondary">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-headline">Join Our Team</h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Build Your Career with Nairobi's Leading Facilities Management Company. At Bestcare, we don't just offer jobs - we build careers.
                    </p>
                </div>
            </section>

            {/* Why Work With Us */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-primary text-center mb-12 font-headline">Why Work With Us?</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map(benefit => (
                            <Card key={benefit.title} className="text-center hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                                        <benefit.icon className="h-8 w-8 text-accent" />
                                    </div>
                                    <CardTitle className="text-xl font-semibold text-primary">{benefit.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        {benefit.details.map(detail => <li key={detail}>{detail}</li>)}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Current Open Positions */}
            <section className="py-16 bg-secondary">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-primary text-center mb-12 font-headline">Current Open Positions</h2>
                    <Accordion type="single" collapsible className="max-w-4xl mx-auto">
                        {jobCategories.map(category => (
                             <AccordionItem key={category.title} value={category.title}>
                                <AccordionTrigger className="text-2xl font-semibold text-primary hover:no-underline font-headline p-4 bg-background rounded-t-lg">
                                    {category.title}
                                </AccordionTrigger>
                                <AccordionContent className="p-4 bg-background rounded-b-lg">
                                    <div className="space-y-8">
                                        {category.jobs.map(job => (
                                            <div key={job.ref} className="border-b pb-8 last:border-b-0 last:pb-0">
                                                <div className="flex justify-between items-center mb-2">
                                                    <h3 className="text-xl font-bold text-primary">{job.title}</h3>
                                                    <Badge>{job.type}</Badge>
                                                </div>
                                                <p className="text-sm text-muted-foreground mb-4"><strong>Location:</strong> {job.location} | <strong>Ref:</strong> {job.ref}</p>
                                                <p className="text-muted-foreground mb-4">{job.overview}</p>

                                                <h4 className="font-semibold text-primary mb-2">Key Responsibilities:</h4>
                                                <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
                                                    {job.responsibilities.map(res => <li key={res}>{res}</li>)}
                                                </ul>

                                                <h4 className="font-semibold text-primary mb-2">Requirements:</h4>
                                                <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-6">
                                                    {job.requirements.map(req => <li key={req}>{req}</li>)}
                                                </ul>

                                                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                                                    <a href={`mailto:hellenkemuma14@gmail.com?subject=Application for ${job.title} - ${job.ref}`}>Apply Now</a>
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                                </AccordionContent>
                             </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

             {/* Hiring Process */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                     <h2 className="text-3xl font-bold text-primary text-center mb-12 font-headline">Our Hiring Process</h2>
                     <div className="relative max-w-4xl mx-auto">
                        <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border" aria-hidden="true"></div>
                        <div className="space-y-12">
                            {hiringProcess.map((item, index) => (
                                <div key={item.step} className="relative flex items-center">
                                    <div className={`flex items-center w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                                        <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                                            <div className="p-6 bg-card rounded-lg shadow-md border">
                                                 <p className="text-lg font-bold text-primary mb-2">{item.title}</p>
                                                 <p className="text-muted-foreground">{item.description}</p>
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
                </div>
            </section>

            {/* How to Apply */}
            <section className="py-16 bg-secondary">
                 <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-primary text-center mb-12 font-headline">How to Apply</h2>
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>Application Instructions</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-4">To apply for any position, please submit the following to <a href="mailto:hellenkemuma14@gmail.com" className="text-accent font-semibold hover:underline">hellenkemuma14@gmail.com</a>:</p>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Updated CV/Resume</li>
                                    <li>Cover letter specifying the position reference code</li>
                                    <li>Copies of relevant certificates and qualifications</li>
                                    <li>Three professional references</li>
                                </ul>
                            </CardContent>
                        </Card>
                         <Card>
                            <CardHeader>
                                <CardTitle>Contact Our HR Team</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                               <div className="flex items-center gap-3">
                                   <Mail className="h-5 w-5 text-accent"/>
                                   <a href="mailto:hellenkemuma14@gmail.com" className="hover:text-accent">hellenkemuma14@gmail.com</a>
                               </div>
                               <div className="flex items-center gap-3">
                                   <Phone className="h-5 w-5 text-accent"/>
                                   <a href="tel:+254710211188" className="hover:text-accent">+254 710 211 188</a>
                               </div>
                               <div className="flex items-center gap-3">
                                   <MapPin className="h-5 w-5 text-accent"/>
                                   <span>Nairobi, Kenya</span>
                               </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
            
        </main>
    );
};

export default CareersPage;