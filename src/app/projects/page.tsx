
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const projects = [
  {
    title: "Commercial Office Fit-Out, Westlands",
    category: "Construction Management",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNzk2NTR8MHwxfHNlYXJjaHwyfHxjbGVhbiUyMG9mZmljZSUyMGJyZWFr cm9vbXxlbnwwfHx8fDE3MjA3OTExNDZ8MA&ixlib=rb-4.0.3&q=80&w=1080",
    imageHint: "modern office interior",
    description: "Managed the complete fit-out of a 5,000 sq ft office space, including partitioning, electrical, HVAC, and data cabling. Delivered on time and 5% under budget.",
    tags: ["Project Management", "Commercial", "Fit-Out"]
  },
  {
    title: "Residential Estate Landscaping, Karen",
    category: "Landscaping",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNzk2NTR8MHwxfHNlYXJjaHw3fHxjb25zdHJ1Y3RlZCUyMGhvdXNlfGVufDB8fHx8MTcyMDczNTM2OHww&ixlib=rb-4.0.3&q=80&w=1080",
    imageHint: "manicured garden residential",
    description: "Designed and implemented a full landscaping solution for a gated community, including irrigation systems, garden planting, and ongoing grounds maintenance.",
    tags: ["Landscaping", "Residential", "Maintenance"]
  },
  {
    title: "Industrial Warehouse Repair, Industrial Area",
    category: "Repairs & Maintenance",
    image: "https://images.unsplash.com/photo-1576495199011-bde17e4d8955?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNzk2NTR8MHwxfHNlYXJjaHwxMHx8b2ZmaWNlJTIwYnVpbGRpbmclMjBleHRlcmlvcnxlbnwwfHx8fDE3MjA3MzU0Njd8MA&ixlib=rb-4.0.3&q=80&w=1080",
    imageHint: "warehouse interior",
    description: "Conducted extensive structural repairs on a 10,000 sq ft warehouse, including concrete floor restoration, roofing leak repairs, and electrical system upgrades.",
    tags: ["Structural Repair", "Industrial", "Electrical"]
  },
  {
    title: "Post-Construction Cleaning, Kilimani",
    category: "Cleaning Services",
    image: "https://images.unsplash.com/photo-1600869158316-4a4a5893f185?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNzk2NTR8MHwxfHNlYXJjaHw3fHx3aW5kb3clMjBjbGVhbmluZ3xlbnwwfHx8fDE3MjA3MzU1MTJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
    imageHint: "sparkling clean window",
    description: "Provided comprehensive post-construction cleaning for a new apartment complex, ensuring all units were spotless and ready for tenant move-in within a tight deadline.",
    tags: ["Post-Construction", "Cleaning", "Residential"]
  },
  {
    title: "Rooftop HVAC Unit Replacement, CBD",
    category: "Repairs & Maintenance",
    image: "https://images.unsplash.com/photo-1746964245894-cb36a8477bff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxIVkFDJTIwc2VydmljZXxlbnwwfHx8fDE3NjQyMzgwOTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "HVAC units rooftop",
    description: "Managed the safe removal and replacement of three large commercial HVAC units on a high-rise building, including crane coordination and system integration.",
    tags: ["HVAC", "Commercial", "Maintenance"]
  },
  {
    title: "Full Home Renovation, Runda",
    category: "Renovations",
    image: "https://images.unsplash.com/photo-1616091475734-a74cb73f1a64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNzk2NTR8MHwxfHNlYXJjaHw0fHxhcHBsaWFuY2UlMjByZXBhaXJ8ZW58MHx8fHwxNzIwNzM1NDIwfDA&ixlib=rb-4.0.3&q=80&w=1080",
    imageHint: "modern renovated kitchen",
    description: "Oversaw a complete gut renovation of a 4-bedroom home, including kitchen and bathroom remodeling, flooring, painting, and electrical rewiring.",
    tags: ["Renovation", "Residential", "Plumbing"]
  }
];

const ProjectsPage = () => {
  return (
    <main className="bg-background">
      <header className="bg-secondary py-16 pt-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight uppercase font-headline">
            Our Projects
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
            A showcase of our commitment to quality, efficiency, and client satisfaction across a diverse range of facilities management projects in Kenya.
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-56 w-full">
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={project.imageHint}
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-primary/80 text-primary-foreground backdrop-blur-sm">{project.category}</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <CardTitle className="text-xl text-primary font-bold mb-3">{project.title}</CardTitle>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;