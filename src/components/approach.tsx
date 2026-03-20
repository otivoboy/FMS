"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BarChart3, CheckCircle, ClipboardList, Play } from "lucide-react";

const approachPhases = [
  {
    id: "item-1",
    icon: ClipboardList,
    title: "1. Strategic Planning & Initiation",
    subtitle: "Define scope, goals, and deliverables",
    details: {
      process: [
        "We begin with comprehensive stakeholder consultations to establish clear objectives, deliverables, and success metrics. Our team conducts thorough site analyses, considering environmental factors, zoning regulations, and existing infrastructure.",
        "Detailed project documentation including scope statements, work breakdown structures, and resource allocation plans are developed. Our risk assessment protocols identify potential challenges early, allowing us to create effective mitigation strategies before breaking ground.",
      ],
      deliverablesTitle: "Key Deliverables",
      deliverables: [
        "Comprehensive Project Charter",
        "Detailed Work Breakdown Structure (WBS)",
        "Resource Allocation Plan",
        "Risk Management Plan",
        "Comprehensive Budget & Schedule",
      ],
    },
  },
  {
    id: "item-2",
    icon: Play,
    title: "2. Meticulous Execution & Site Management",
    subtitle: "Oversee workforce, track progress, ensure compliance",
    details: {
      process: [
        "This phase transforms plans into physical structures through meticulous coordination and supervision. We implement daily stand-up meetings to align teams, address challenges, and maintain momentum. Our site managers conduct regular inspections to ensure work meets quality standards and adheres to specifications.",
        "Advanced project management software is employed to track progress in real-time, comparing actual performance against planned metrics. Resource allocation is continuously optimized based on evolving project needs.",
      ],
      deliverablesTitle: "Key Activities",
      deliverables: [
        "Daily Subcontractor & Workforce Coordination",
        "Quality Control Inspections",
        "Real-time Progress Tracking",
        "Safety Compliance Monitoring",
        "Stakeholder Progress Reports",
      ],
    },
  },
  {
    id: "item-3",
    icon: BarChart3,
    title: "3. Proactive Monitoring & Control",
    subtitle: "Real-time reporting, budget tracking, safety checks",
     details: {
      process: [
        "This phase ensures project alignment with objectives through continuous measurement and adjustment. We implement a comprehensive performance measurement system that tracks key metrics including schedule adherence, budget utilization, and quality standards.",
        "Our team conducts weekly progress reviews comparing planned versus actual performance, identifying variances early, and implementing corrective actions. Change management procedures are strictly followed to evaluate, approve, and incorporate modifications without disrupting project flow.",
      ],
      deliverablesTitle: "Monitoring Systems",
      deliverables: [
        "Earned Value Management (EVM)",
        "Quality Assurance Audits",
        "Safety Compliance Dashboards",
        "Stakeholder Feedback Analysis",
        "Document Control System",
      ],
    },
  },
  {
    id: "item-4",
    icon: CheckCircle,
    title: "4. Seamless Closing & Handover",
    subtitle: "Project handover, documentation, evaluation",
    details: {
      process: [
        "The Closing Phase ensures a seamless transition from construction to operation through systematic project completion procedures. We conduct comprehensive final inspections with clients to verify all work meets quality standards and contract specifications.",
        "Our team compiles all project documentation including as-built drawings, warranties, and operation manuals into organized turnover packages. We conduct post-project evaluations to capture lessons learned, identifying successful practices and areas for improvement.",
      ],
      deliverablesTitle: "Closing Activities",
      deliverables: [
        "Final Inspection & Client Acceptance",
        "As-Built Documentation & Manuals",
        "Financial Closure & Final Accounting",
        "Post-Project Evaluation Report",
        "Warranty Management System",
      ],
    },
  },
];

const successMetrics = [
    { value: "98%", label: "On-Time Delivery" },
    { value: "95%", label: "Within Budget" },
    { value: "100%", label: "Safety Compliance" },
    { value: "5★", label: "Client Satisfaction" },
]

const Approach = () => {
  return (
    <section id="approach" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4 font-headline">Work Management Approach</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery through systematic planning, execution, monitoring, and closure.
            </p>
          </div>

          <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-6">
            {approachPhases.map((phase) => (
              <AccordionItem key={phase.id} value={phase.id} className="bg-card rounded-lg shadow-md border-none overflow-hidden transform transition-transform hover:scale-105 duration-300">
                <AccordionTrigger className="p-8 text-left hover:no-underline transition-all duration-300 [&[data-state=open]]:bg-accent/5">
                  <div className="flex items-center gap-6 w-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-800 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                      <phase.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl font-bold text-primary font-headline mb-1">{phase.title}</h3>
                      <p className="text-lg text-muted-foreground">{phase.subtitle}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-8">
                  <div className="grid md:grid-cols-2 gap-8 pt-4 border-t">
                    <div>
                      <h4 className="font-semibold text-primary mb-4 font-headline">Detailed Process</h4>
                      {phase.details.process.map((p, i) => <p key={i} className="text-muted-foreground mb-4">{p}</p>)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-4 font-headline">{phase.details.deliverablesTitle}</h4>
                      <ul className="space-y-3">
                        {phase.details.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
           <div className="mt-16 bg-gradient-to-r from-primary to-blue-800 rounded-2xl p-8 text-white shadow-xl transform transition-transform hover:scale-105 duration-300">
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-4 font-headline">
                        Proven Results Through Systematic Management
                    </h3>
                    <p className="text-lg opacity-90 max-w-2xl mx-auto">
                        Our structured approach consistently delivers projects on time, within budget, 
                        and exceeding quality expectations.
                    </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {successMetrics.map(metric => (
                        <div key={metric.label} className="transform transition-transform hover:scale-110">
                            <div className="text-3xl font-bold text-accent mb-2">{metric.value}</div>
                            <div className="text-sm opacity-80">{metric.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
