import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, CheckCircle, GraduationCap } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const profileImage = PlaceHolderImages.find((img) => img.id === 'profile-pic');

const About = () => {
  const coreStrengths = [
    'Project Planning & Scheduling',
    'Risk Management',
    'Budget Control',
    'Quality Assurance',
    'Team Leadership',
    'Safety Compliance',
    'Stakeholder Communication',
    'Contract Management',
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4 font-headline animate-fade-in-down">
              About Hellen Mong&apos;are
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
              Seasoned Project Manager Officer specializing in construction site management with extensive expertise in delivering exceptional results.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Card className="shadow-lg transform transition-transform hover:scale-105 duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col items-center mb-6">
                  {profileImage && (
                    <Image
                      src={profileImage.imageUrl}
                      alt="Hellen Mong'are - Professional Construction Project Manager"
                      width={200}
                      height={200}
                      className="rounded-full object-cover border-4 border-accent shadow-lg mb-4"
                      data-ai-hint={profileImage.imageHint}
                    />
                  )}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary font-headline">Hellen Mong&apos;are</h3>
                    <p className="text-accent font-semibold">Project Manager Officer</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Hellen Mong&apos;are is a seasoned Project Manager Officer specializing in construction site management. With extensive expertise in planning, coordinating, and executing large-scale building and infrastructure projects, she ensures efficiency, safety, and quality at every stage.
                </p>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Her approach integrates modern project management techniques with practical on-site problem-solving to deliver results that exceed client expectations. With over 10 years of experience, Hellen has successfully managed projects ranging from residential developments to major infrastructure initiatives.
                </p>

                <div>
                  <h4 className="font-semibold text-primary mb-3 flex items-center justify-center font-headline">
                    <Award className="h-5 w-5 mr-2 text-accent" />
                    Core Strengths
                  </h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {coreStrengths.map((strength) => (
                      <Badge key={strength} variant="secondary" className="bg-muted text-muted-foreground hover:bg-accent/20 hover:text-accent-foreground transition-all">{strength}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="shadow-lg transform transition-transform hover:scale-105 duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-headline">
                    <CheckCircle className="h-5 w-5 mr-2 text-accent" />
                    Professional Experience
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-l-2 border-accent pl-4">
                    <h5 className="font-semibold">10+ Years in Construction Management</h5>
                    <p className="text-muted-foreground text-sm">Leading complex construction projects from conception to completion.</p>
                  </div>
                  <div className="border-l-2 border-accent pl-4">
                    <h5 className="font-semibold">50+ Successful Project Deliveries</h5>
                    <p className="text-muted-foreground text-sm">Residential, commercial, and infrastructure projects.</p>
                  </div>
                  <div className="border-l-2 border-accent pl-4">
                    <h5 className="font-semibold">Team Leadership Excellence</h5>
                    <p className="text-muted-foreground text-sm">Managing diverse teams of 20-100+ professionals.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg transform transition-transform hover:scale-105 duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-headline">
                    <GraduationCap className="h-5 w-5 mr-2 text-accent" />
                    Certifications & Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center p-2 rounded-md hover:bg-accent/10 transition-colors">
                    <CheckCircle className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">PMP - Project Management Professional</span>
                  </div>
                  <div className="flex items-center p-2 rounded-md hover:bg-accent/10 transition-colors">
                    <CheckCircle className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">Construction Management Certification</span>
                  </div>
                  <div className="flex items-center p-2 rounded-md hover:bg-accent/10 transition-colors">
                    <CheckCircle className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">OSHA Safety Certification</span>
                  </div>
                   <div className="flex items-center p-2 rounded-md hover:bg-accent/10 transition-colors">
                    <CheckCircle className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">Risk Management Professional</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
