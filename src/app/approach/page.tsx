'use client';

import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const approachPhases = [
  {
    number: "1",
    title: "Assessment & Strategy Development",
    subtitle: "Defining the blueprint for operational excellence.",
    process: "This initial phase is about deep understanding. We conduct thorough assessments of your facilities, systems, and operational needs. By consulting with all stakeholders, we define clear objectives, KPIs, and success metrics to create a tailored facilities management strategy.",
    deliverables: [
      "Comprehensive Facility Condition Assessment",
      "Detailed Service Level Agreements (SLAs)",
      "Proactive Risk Management Plan",
      "Strategic Sourcing & Vendor Plan",
      "Operational Budget & Financial Forecast",
    ],
  },
  {
    number: "2",
    title: "Seamless Transition & Mobilization",
    subtitle: "Implementing the plan with precision and control.",
    process: "The Mobilization Phase is where the strategy comes to life. Our team manages a seamless transition, integrating our systems and personnel with your operations. We establish clear communication channels and deploy our teams to begin delivering services with minimal disruption.",
    deliverables: [
      "Vendor & Contractor Onboarding",
      "CMMS & Technology Integration",
      "Staff Training & Deployment",
      "Health, Safety & Environment (HSE) Setup",
      "Launch of Scheduled Maintenance Programs",
    ],
  },
  {
    number: "3",
    title: "Proactive Operations & Maintenance",
    subtitle: "Ensuring optimal performance through continuous oversight.",
    process: "This phase focuses on the day-to-day delivery of exceptional service. We manage all planned and reactive maintenance, soft services, and vendor activities. Using data from our CMMS, we continuously optimize schedules and resource allocation to improve efficiency and reduce costs.",
    deliverables: [
      "Preventive & Predictive Maintenance",
      "24/7 Helpdesk & Reactive Support",
      "Vendor Performance Management",
      "Regular Site Inspections & Audits",
      "Energy & Sustainability Management",
    ],
  },
  {
    number: "4",
    title: "Reporting, Review & Continuous Improvement",
    subtitle: "Delivering value through data-driven insights and partnership.",
    process: "We believe in a partnership built on transparency and results. This phase involves regular performance reviews, detailed reporting against KPIs, and collaborative planning for future improvements. We use data analytics to identify trends and opportunities for innovation.",
    deliverables: [
      "Monthly & Quarterly Performance Reports",
      "Financial & Budget Variance Analysis",
      "Tenant & Stakeholder Satisfaction Surveys",
      "Continuous Improvement Proposals",
      "Annual Strategic Review & Planning",
    ],
  },
];

const guidingPrinciples = [
    { title: "Client-Centric Focus", description: "Your operational goals and business objectives are the anchors for every decision we make." },
    { title: "Proactive Innovation", description: "We constantly seek and implement innovative solutions to enhance efficiency, sustainability, and value." },
    { title: "Unwavering Integrity", description: "Transparency, honesty, and ethical practices are the cornerstones of our client relationships." },
    { title: "Data-Driven Decisions", description: "We replace guesswork with data. Analytics guide our strategies for predictable outcomes and continuous improvement." },
];

const ApproachPage = () => {
  return (
    <main className="flex-grow">
    <section id="approach" className="py-24 pt-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-dark-blue mb-4 font-headline">Our Facilities Management Approach</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven, four-phase methodology that ensures operational excellence through systematic planning, seamless execution, proactive monitoring, and continuous improvement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {approachPhases.map((phase) => (
              <Card key={phase.number} className="shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
                <CardHeader className="bg-dark-blue text-white p-6 rounded-t-lg">
                  <CardTitle className="flex items-center gap-4 text-xl md:text-2xl">
                    <span className="bg-gold-accent text-dark-blue w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">{phase.number}</span>
                    {phase.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <p className="italic text-muted-foreground mb-4">{phase.subtitle}</p>
                  <h4 className="font-semibold text-dark-blue mb-2">Detailed Process</h4>
                  <p className="text-muted-foreground mb-6 text-sm">{phase.process}</p>
                  
                  <h4 className="font-semibold text-dark-blue mb-3 mt-auto">Key Deliverables</h4>
                  <ul className="space-y-2 text-sm">
                    {phase.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-gold-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-light-gray p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-dark-blue text-center mb-8">Our Guiding Principles</h2>
               <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {guidingPrinciples.map((principle) => (
                    <div key={principle.title} className="text-center">
                        <h4 className="text-xl font-semibold text-dark-blue mb-2">{principle.title}</h4>
                        <p className="text-muted-foreground text-sm">{principle.description}</p>
                    </div>
                ))}
            </div>
          </div>

        </div>
      </div>
    </section>
    </main>
  );
};

export default ApproachPage;
