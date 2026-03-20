"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Shield, DollarSign, AlertTriangle, MessageSquare, FileText, Cog } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: Calendar,
    title: "Project Planning & Scheduling",
    description: "Comprehensive project planning with detailed Gantt charts, milestone tracking, and task breakdowns to ensure timely delivery.",
    features: ["Gantt Chart Development", "Milestone Planning", "Resource Allocation", "Timeline Optimization"],
  },
  {
    icon: Users,
    title: "Site Supervision & Team Coordination",
    description: "On-site leadership ensuring seamless coordination between all stakeholders and maintaining project momentum.",
    features: ["Team Management", "Daily Coordination", "Performance Monitoring", "Conflict Resolution"],
  },
  {
    icon: Shield,
    title: "Quality Assurance & Safety Compliance",
    description: "Rigorous quality control and safety protocols to meet industry standards and protect all project participants.",
    features: ["Quality Inspections", "Safety Audits", "Compliance Monitoring", "Risk Mitigation"],
  },
  {
    icon: DollarSign,
    title: "Budgeting & Cost Management",
    description: "Strategic financial oversight ensuring projects stay within budget while maximizing value and efficiency.",
    features: ["Budget Planning", "Cost Tracking", "Financial Reporting", "Value Engineering"],
  },
  {
    icon: AlertTriangle,
    title: "Risk Management & Problem Solving",
    description: "Proactive identification and mitigation of project risks with swift problem resolution capabilities.",
    features: ["Risk Assessment", "Contingency Planning", "Issue Resolution", "Crisis Management"],
  },
  {
    icon: MessageSquare,
    title: "Stakeholder Communication & Reporting",
    description: "Clear, consistent communication with all project stakeholders through regular updates and comprehensive reporting.",
    features: ["Progress Reports", "Stakeholder Meetings", "Communication Plans", "Documentation"],
  },
  {
    icon: FileText,
    title: "Contract Management & Procurement",
    description: "Expert handling of contracts, vendor relationships, and procurement processes to ensure project success.",
    features: ["Contract Negotiation", "Vendor Management", "Procurement Planning", "Legal Compliance"],
  },
  {
    icon: Cog,
    title: "Process Optimization & Efficiency",
    description: "Continuous improvement of project processes to enhance efficiency and deliver superior results.",
    features: ["Workflow Analysis", "Process Improvement", "Technology Integration", "Best Practices"],
  },
];

const Services = () => {
  const router = useRouter();
  const scrollToContact = () => {
    router.push('/contact');
  }

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4 font-headline">
              Construction Management Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive project management solutions tailored for construction and infrastructure projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-primary group-hover:text-accent transition-colors font-headline">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-1 mt-auto">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-center">
                        <div className="w-1 h-1 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary to-blue-800 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4 font-headline">Ready to Start Your Project?</h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Let&apos;s discuss how our comprehensive project management services can ensure your construction project&apos;s success from start to finish.
              </p>
              <Button onClick={scrollToContact} size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 h-auto rounded-lg font-semibold transition-transform hover:scale-105">
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
