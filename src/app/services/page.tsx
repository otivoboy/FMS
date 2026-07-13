'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building, FileText, CheckCircle, Trash2, HardHat, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const constructionImage = PlaceHolderImages.find(img => img.id === 'construction-service');
const contractImage = PlaceHolderImages.find(img => img.id === 'contract-service');
const safetyImage = PlaceHolderImages.find(img => img.id === 'safety-service');
const cleaningImage = PlaceHolderImages.find(img => img.id === 'cleaning-service');
const deepCleaningImage = PlaceHolderImages.find(img => img.id === 'deep-cleaning-service');


interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  imageUrl?: string;
  imageAlt?: string;
  imageHint?: string;
}

const constructionServices: Service[] = [
  {
    icon: Building,
    title: "Project Management for Construction",
    description: "Overseeing residential and commercial construction projects from concept to completion.",
    features: ["Residential Construction", "Commercial Construction", "Renovations & Upgrades", "Providing PM Services"],
    imageUrl: constructionImage?.imageUrl,
    imageAlt: "A modern building under construction",
    imageHint: "building construction"
  },
  {
    icon: FileText,
    title: "Contract Administration & Procurement",
    description: "Managing project delivery methods, contracts, and change orders to mitigate risk.",
    features: ["Project Delivery Method Selection", "Contract Negotiation & Execution", "Change Order Management", "Claims & Dispute Resolution"],
    imageUrl: contractImage?.imageUrl,
    imageAlt: "Reviewing a construction contract",
    imageHint: "construction contract"
  },
  {
    icon: HardHat,
    title: "Construction Safety Management",
    description: "Implementing site-specific safety plans and ensuring OSHA compliance to prevent accidents.",
    features: ["Site-Specific Safety Plans", "OSHA Compliance & Beyond", "Training & Inspections", "Incident Investigation & Reporting"],
    imageUrl: safetyImage?.imageUrl,
    imageAlt: "Construction worker with hard hat",
    imageHint: "construction safety"
  }
];

const cleaningServices: Service[] = [
    {
        icon: Trash2,
        title: "Commercial Post-Construction Cleaning",
        description: "We remove debris, dust, and grime, ensuring a flawless presentation for occupancy.",
        features: ["Building Debris Removal", "Deep Dust Removal from all surfaces", "Floor Buffing, Scrubbing & Polishing", "Window & Glass Cleaning"],
        imageUrl: cleaningImage?.imageUrl,
        imageAlt: "A clean and sparkling modern office interior",
        imageHint: "clean office"
    },
    {
        icon: Sparkles,
        title: "Commercial & Workplace Deep Cleaning",
        description: "Customizable deep cleaning schedules for all commercial properties, going beyond routine janitorial services.",
        features: ["High-Touch Surface Sanitization", "Restroom & Kitchen Deep Cleaning", "Pressure Washing Services", "Breakroom Cleanup"],
        imageUrl: deepCleaningImage?.imageUrl,
        imageAlt: "A sanitized and clean office breakroom",
        imageHint: "clean office breakroom"
    }
];

const ServicesPage = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/contact');
  };

  const ServiceSection = ({ title, services, sectionId }: { title: string, services: Service[], sectionId: string }) => (
    <div id={sectionId} className="mb-16 scroll-mt-24">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center font-headline">{title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
            <Card key={service.title} className="group flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card overflow-hidden">
            {service.imageUrl && (
              <div className="relative h-48 w-full">
                <Image
                  src={service.imageUrl}
                  alt={service.imageAlt || service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={service.imageHint}
                />
              </div>
            )}
            <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <service.icon className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl font-semibold text-primary group-hover:text-accent transition-colors font-headline">
                {service.title}
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow p-6 pt-0">
                <p className="text-muted-foreground text-sm md:text-base mb-4 leading-relaxed flex-grow">
                {service.description}
                </p>
                <ul className="space-y-2 mt-4">
                {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                    {feature}
                    </li>
                ))}
                </ul>
            </CardContent>
            </Card>
        ))}
        </div>
    </div>
  );

  return (
    <main className="flex-grow">
    <section id="services" className="py-24 pt-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-headline">
              Facilities Management Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              A complete suite of solutions designed to manage, maintain, and enhance your property's value and operational efficiency.
            </p>
          </div>

          <ServiceSection title="I. Construction Project Management" services={constructionServices} sectionId="construction" />
          
          {/* II. Facilities Maintenance Services Section */}
          <div id="maintenance" className="mb-16 scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">II. Full Facilities Management Services</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                PremiumBuild provides a full variety and combination of solutions to ensure your residential or commercial property operates efficiently, safely, and to the highest standard. We manage the complexity so you can focus on your core business. Your space, our responsibility.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Section 1: Core Facility Maintenance Services */}
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle className="font-headline">Essential System Upkeep & Repairs</CardTitle>
                  <CardDescription>Keeping your building systems running perfectly.</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <table className="w-full text-sm">
                    <tbody>
                      <tr className="border-t">
                        <td className="p-3 font-semibold text-primary align-top">Building Systems</td>
                        <td className="p-3 text-muted-foreground">Routing Building Servicing, HVAC System Servicing, Lighting Maintenance & Upgrades.</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-3 font-semibold text-primary align-top">Utility Repairs</td>
                        <td className="p-3 text-muted-foreground">Electrical & Plumbing Repairs, Carpentry & General Repairs.</td>
                      </tr>
                    </tbody>
                  </table>
                </CardContent>
              </Card>

              {/* Section 2: Operational Services & Compliance */}
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle className="font-headline">Proactive Management & Safety Compliance</CardTitle>
                  <CardDescription>Effective facilities management is about preventing problems before they start.</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary">Operational Management:</h4>
                    <ul className="list-disc list-inside text-muted-foreground pl-4 mt-2 space-y-1">
                      <li>Preventative Maintenance Scheduling</li>
                      <li>Vendor Coordination & Management</li>
                      <li>Comprehensive Site Inspections</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Compliance & Inspections:</h4>
                    <ul className="list-disc list-inside text-muted-foreground pl-4 mt-2 space-y-1">
                      <li>Building Condition Assessments</li>
                      <li>Safety and OSHA Compliance Reviews</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              {/* Section 3: Repairs, Renovations & Maintenance */}
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle className="font-headline">Expert Repairs & Property Refurbishments</CardTitle>
                  <CardDescription>Our skilled tradesmen are ready to tackle any repair or maintenance task.</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <table className="w-full text-sm">
                    <tbody>
                      <tr className="border-t">
                        <td className="p-3 font-semibold text-primary align-top">General Repairs</td>
                        <td className="p-3 text-muted-foreground">Handyman services, Painting, Plumbing, Electrical.</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-3 font-semibold text-primary align-top">Structural Maintenance</td>
                        <td className="p-3 text-muted-foreground">Carpentry, Flooring, Roofing repairs and installations.</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-3 font-semibold text-primary align-top">Additional Offerings</td>
                        <td className="p-3 text-muted-foreground">Project Management for Renovations or Upgrades, Janitorial & Cleaning Services.</td>
                      </tr>
                    </tbody>
                  </table>
                </CardContent>
              </Card>

              {/* Section 4: Exterior Property Services */}
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle className="font-headline">Exterior & Grounds Maintenance</CardTitle>
                  <CardDescription>The exterior of your property creates the first impression.</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Landscaping & Grounds Maintenance: Keeping green spaces neat, tidy, and healthy.</li>
                    <li>Parking Lot Maintenance: Ensuring safety, clear markings, and structural integrity.</li>
                    <li>Sidewalk Pressure Washing: Removing dirt, grime, and mildew for clean pedestrian areas.</li>
                    <li>Exterior Building Cleaning & Painting: Maintaining aesthetic appeal and protecting the building facade.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div id="cleaning" className="mb-16 scroll-mt-24">
              <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">III. Specialized Cleaning Services</h2>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">From Construction Site to Clean Haven: Our Professional Cleaning Solutions</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                  {cleaningServices.map(service => (
                       <Card key={service.title} className="group flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card overflow-hidden">
                        {service.imageUrl && (
                        <div className="relative h-48 w-full">
                            <Image
                            src={service.imageUrl}
                            alt={service.imageAlt || service.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            data-ai-hint={service.imageHint}
                            />
                        </div>
                        )}
                        <CardHeader>
                            <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                            <service.icon className="h-8 w-8 text-accent" />
                            </div>
                            <CardTitle className="text-xl font-semibold text-primary group-hover:text-accent transition-colors font-headline">
                            {service.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col flex-grow p-6 pt-0">
                            <p className="text-muted-foreground text-sm md:text-base mb-4 leading-relaxed flex-grow">
                            {service.description}
                            </p>
                            <ul className="space-y-2 mt-4">
                            {service.features.map((feature) => (
                                <li key={feature} className="flex items-center text-sm text-muted-foreground">
                                <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                                {feature}
                                </li>
                            ))}
                            </ul>
                        </CardContent>
                    </Card>
                  ))}
              </div>
          </div>


          <div className="text-center mt-16 md:mt-20">
            <div className="bg-gradient-to-r from-primary to-blue-800 rounded-2xl p-8 md:p-10 text-white shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 font-headline">Ready to Optimize Your Facility?</h3>
              <p className="text-md md:text-lg opacity-90 mb-8 max-w-3xl mx-auto">
                Let&apos;s discuss how our comprehensive facilities management services can bring unparalleled structure, efficiency, and value to your property.
              </p>
              <Button onClick={handleGetStarted} size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 md:px-10 py-3 md:py-4 h-auto rounded-lg font-semibold text-base md:text-lg transition-transform hover:scale-105">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
};

export default ServicesPage;
    
