
import Hero from "@/components/hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Check, CheckCircle, Construction, Home as HomeIcon, Paintbrush, Star, Wrench, HardHat, Zap } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import HomeServices from "@/components/home-services";

const constructionImage = PlaceHolderImages.find(p => p.id === 'home-construction');
const maintenanceImage = PlaceHolderImages.find(p => p.id === 'home-maintenance');
const facilitiesImage = PlaceHolderImages.find(p => p.id === 'home-facilities');
const cleaningImage = PlaceHolderImages.find(p => p.id === 'home-cleaning');


export default function Page() {
  return (
    <>
      <Hero />
      <HomeServices />
      
      {/* Our Core Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4 font-headline">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Comprehensive solutions to manage, maintain, and enhance your property's value and operational efficiency.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader>
                <CardTitle className="text-primary font-headline">Property Maintenance & Safety</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-lg font-semibold text-primary mb-2">Renovations & Maintenance</p>
                <p className="text-muted-foreground mb-4 flex-grow">Home Renovations, Roof Repairs, Tiling, Flooring, Painting, Hard Floor Repairs, Swimming Pool Repairs...</p>
                <Button asChild className="mt-auto w-full">
                  <Link href="/property-maintenance">Read More</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader>
                <CardTitle className="text-primary font-headline">Garden Landscaping</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-lg font-semibold text-primary mb-2">Gardening & Landscaping</p>
                <p className="text-muted-foreground mb-4 flex-grow">The best Gardening and Landscaping services in Nairobi, Kiambu, Machakos, Eldoret, Nakuru, and Kenya!</p>
                <Button asChild className="mt-auto w-full">
                  <Link href="/gardening-landscaping">Read More</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow duration-300 flex flex-col">
               <CardHeader>
                <CardTitle className="text-primary font-headline">Repair services & Restorations</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-lg font-semibold text-primary mb-2">Property Repairs</p>
                <p className="text-muted-foreground mb-4 flex-grow">Get your residential and commercial property fixed and restored, on periodic basis, or after a destructive event.</p>
                <Button asChild className="mt-auto w-full">
                  <Link href="/renovations">Read More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 1: Construction Services */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4 font-headline"> Building Your Vision: Precision Construction Project Management</h2>
              <p className="text-muted-foreground mb-6">We provide expert construction Project Management services designed to deliver your project on time, within budget, and to the highest standards. Whether you are undertaking a residential home or a large commercial development, our team ensures seamless execution from start to finish.</p>
              <p className="font-semibold text-primary mb-6">"We provide construction Project Management services for Residential and Commercial Construction Projects."</p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary">Residential & Commercial Project Management</h4>
                    <p className="text-muted-foreground text-sm">Complete oversight from planning to completion, including budget and timeline management.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary">Planning, Scheduling, and Execution Control</h4>
                    <p className="text-muted-foreground text-sm">Detailed project planning, resource allocation, and progress monitoring.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary">Quality Assurance and Oversight</h4>
                    <p className="text-muted-foreground text-sm">Strict quality control standards, regular site inspections, and compliance with building codes.</p>
                  </div>
                </div>
              </div>

            </div>
            {constructionImage &&
              <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-lg">
                <Image src={constructionImage.imageUrl} alt={constructionImage.description} fill className="object-cover" data-ai-hint={constructionImage.imageHint} />
              </div>
            }
          </div>
        </div>
      </section>

      {/* Section 2: Maintenance & Repairs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {maintenanceImage &&
              <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-lg order-last md:order-first">
                <Image src={maintenanceImage.imageUrl} alt={maintenanceImage.description} fill className="object-cover" data-ai-hint={maintenanceImage.imageHint} />
              </div>
            }
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4 font-headline"> Transforming Houses into Havens: Complete Maintenance & Repair</h2>
              <p className="text-muted-foreground mb-6">Don't let maintenance issues slow you down. Our dedicated team of specialists offers precise repair work for all your home and facility needs. We handle it all with care, ensuring your space is safe, functional, and aesthetically pleasing.</p>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-primary flex items-center gap-2 mb-2"><HardHat className="text-accent" /> Engineers</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Structural integrity</li>
                    <li>Complex problem-solving</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary flex items-center gap-2 mb-2"><HomeIcon className="text-accent" /> House Master</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Quality oversight</li>
                    <li>Preventive maintenance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary flex items-center gap-2 mb-2"><Wrench className="text-accent" /> Plumber</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Pipe installation</li>
                    <li>Emergency leak response</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary flex items-center gap-2 mb-2"><Zap className="text-accent" /> Electrician</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Safety inspections</li>
                    <li>Energy efficiency</li>
                  </ul>
                </div>
              </div>

              <h4 className="font-semibold text-primary mb-2">Core Home Services:</h4>
               <p className="text-muted-foreground text-sm">
                <Paintbrush className="inline h-4 w-4 mr-1 text-accent" />Home Painting,
                <Wrench className="inline h-4 w-4 mx-1 text-accent" />Plumbing & Electrical,
                <Construction className="inline h-4 w-4 mx-1 text-accent" />Handyman & Carpentry,
                <Construction className="inline h-4 w-4 mx-1 text-accent" />Roofing & Flooring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Facilities Management */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4 font-headline"> Dedicated to Solutions: Full Facilities Management Services</h2>
              <p className="text-muted-foreground mb-6">We are dedicated to providing the right variety and combination of solutions to suit your facilities maintenance needs, keeping your commercial and residential properties running smoothly and efficiently.</p>
              
              <Card>
                <CardContent className="p-4">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2 font-semibold text-primary">Service Category</th>
                        <th className="text-left p-2 font-semibold text-primary">Key Offerings</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2 align-top font-medium text-muted-foreground">Facility Maintenance</td>
                        <td className="p-2 text-sm text-muted-foreground">HVAC servicing, Lighting upgrades, Electrical & Plumbing repairs.</td>
                      </tr>
                       <tr className="border-b">
                        <td className="p-2 align-top font-medium text-muted-foreground">Operational & Compliance</td>
                        <td className="p-2 text-sm text-muted-foreground">Preventative Maintenance Scheduling, Site Inspections, Safety compliance.</td>
                      </tr>
                      <tr>
                        <td className="p-2 align-top font-medium text-muted-foreground">Exterior Property Services</td>
                        <td className="p-2 text-sm text-muted-foreground">Landscaping, Parking Lot Maintenance, Exterior Painting & Pressure Washing.</td>
                      </tr>
                    </tbody>
                  </table>
                </CardContent>
              </Card>

            </div>
            {facilitiesImage &&
              <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-lg">
                <Image src={facilitiesImage.imageUrl} alt={facilitiesImage.description} fill className="object-cover" data-ai-hint={facilitiesImage.imageHint} />
              </div>
            }
          </div>
        </div>
      </section>
      
      {/* Section 4: Cleaning Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {cleaningImage &&
              <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-lg order-last md:order-first">
                <Image src={cleaningImage.imageUrl} alt={cleaningImage.description} fill className="object-cover" data-ai-hint={cleaningImage.imageHint} />
              </div>
            }
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4 font-headline"> Move-In-Ready: Commercial Post-Construction & Deep Cleaning</h2>
              <p className="text-muted-foreground mb-6">We specialize in transforming dusty construction sites or tired workspaces into immaculate, move-in-ready environments. Let our team handle the cleanup so you can focus on what matters.</p>
              
              <ul className="space-y-3">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-accent" /> Building Debris Removal</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-accent" /> Commercial Carpet & Floor Deep Cleaning</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-accent" /> Office & Workshop Deep Cleaning</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-accent" /> Window & Glass Cleaning</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-accent" /> Janitorial & Ongoing Cleaning Services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-12 font-headline">Why Choose Us?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="flex flex-col items-center">
              <CheckCircle className="h-10 w-10 text-accent mb-3" />
              <h4 className="font-semibold text-primary mb-1">Single Point of Contact</h4>
              <p className="text-sm text-muted-foreground">One number for all your needs.</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="h-10 w-10 text-accent mb-3" />
              <h4 className="font-semibold text-primary mb-1">Local Nairobi Expertise</h4>
              <p className="text-sm text-muted-foreground">Deep understanding of local codes.</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="h-10 w-10 text-accent mb-3" />
              <h4 className="font-semibold text-primary mb-1">Quality Guaranteed</h4>
              <p className="text-sm text-muted-foreground">Trained and certified professionals.</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="h-10 w-10 text-accent mb-3" />
              <h4 className="font-semibold text-primary mb-1">Reliable & Trustworthy</h4>
              <p className="text-sm text-muted-foreground">Background-checked employees.</p>
            </div>
             <div className="flex flex-col items-center">
              <CheckCircle className="h-10 w-10 text-accent mb-3" />
              <h4 className="font-semibold text-primary mb-1">Comprehensive Solutions</h4>
              <p className="text-sm text-muted-foreground">End-to-end service offerings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
           <h2 className="text-3xl font-bold text-primary mb-12 font-headline text-center">Hear From Our Clients</h2>
           <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Star className="text-accent fill-accent" />
                  <Star className="text-accent fill-accent" />
                  <Star className="text-accent fill-accent" />
                  <Star className="text-accent fill-accent" />
                  <Star className="text-accent fill-accent" />
                </div>
                <p className="italic text-muted-foreground mb-4">"Bestcare transformed our construction project from a stressful endeavor into a smooth, well-managed process. Their attention to detail and commitment to quality is unmatched in Nairobi."</p>
                <p className="font-semibold text-primary">- Commercial Developer, Westlands</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Star className="text-accent fill-accent" />
                  <Star className="text-accent fill-accent" />
                  <Star className="text-accent fill-accent" />
                  <Star className="text-accent fill-accent" />
                  <Star className="text-accent fill-accent" />
                </div>
                <p className="italic text-muted-foreground mb-4">"The maintenance team responds quickly and professionally. Having one reliable company for all our facility needs has simplified our operations significantly."</p>
                <p className="font-semibold text-primary">- Property Manager, Kilimani</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Star className="text-accent fill-accent" />
                  <Star className="text-accent fill-accent" />
                  <Star className="text-accent fill-accent" />
                  <Star className="text-accent fill-accent" />
                  <Star className="text-accent fill-accent" />
                </div>
                <p className="italic text-muted-foreground mb-4">"Post-construction cleaning was thorough and efficient. Our new office space was move-in ready exactly when promised."</p>
                <p className="font-semibold text-primary">- Business Owner, CBD</p>
              </CardContent>
            </Card>
           </div>
        </div>
      </section>

      {/* New Services Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
            <header className="home-services-header">
                <h1 className="text-4xl">Professional Facility Management Services in Nairobi & Kenya</h1>
                <p>Bestcare Facilities Management delivers expert hard and soft facility management services across Nairobi and Kenya. We specialize in professional cleaning, pest control, appliance repair, construction, handyman solutions, and moving services. Our experienced team ensures your facilities operate efficiently and safely. Contact us today for reliable, affordable facility management solutions.</p>
            </header>

            <main className="services-grid">
                <div className="service-item">
                    <i className="fa-solid fa-fan"></i>
                    <span>HVAC Maintenance</span>
                </div>
                <div className="service-item">
                    <i className="fa-solid fa-bolt"></i>
                    <span>Electrical Services</span>
                </div>
                <div className="service-item">
                    <i className="fa-solid fa-tree"></i>
                    <span>Landscaping & Grounds</span>
                </div>
                <div className="service-item">
                    <i className="fa-solid fa-hand-sparkles"></i>
                    <span>Window Cleaning</span>
                </div>

                <div className="service-item">
                    <i className="fa-solid fa-broom"></i>
                    <span>Professional Cleaning</span>
                </div>
                <div className="service-item">
                    <i className="fa-solid fa-water"></i>
                    <span>Plumbing Services</span>
                </div>
                <div className="service-item">
                    <i className="fa-solid fa-screwdriver-wrench"></i>
                    <span>Building Maintenance</span>
                </div>
                <div className="service-item">
                    <i className="fa-solid fa-rug"></i>
                    <span>Carpet & Upholstery</span>
                </div>

                <div className="service-item">
                    <i className="fa-solid fa-bug"></i>
                    <span>Pest Control & Fumigation</span>
                </div>
                <div className="service-item">
                    <i className="fa-solid fa-shield-halved"></i>
                    <span>Security Management</span>
                </div>
                <div className="service-item">
                    <i className="fa-solid fa-trash-can"></i>
                    <span>Waste Management</span>
                </div>
                <div className="service-item">
                    <i className="fa-solid fa-people-group"></i>
                    <span>Facility Staffing</span>
                </div>

                <div className="service-item">
                    <i className="fa-solid fa-layer-group"></i>
                    <span>Space Planning</span>
                </div>
                <div className="service-item">
                    <i className="fa-solid fa-headset"></i>
                    <span>Reception Services</span>
                </div>
                <div className="service-item">
                    <i className="fa-solid fa-fire-extinguisher"></i>
                    <span>Fire Safety Systems</span>
                </div>
                <div className="service-item">
                    <i className="fa-solid fa-charging-station"></i>
                    <span>Generator Maintenance</span>
                </div>

                <div className="service-item">
                    <i className="fa-solid fa-boxes-stacked"></i>
                    <span>Asset Management</span>
                </div>
                <div className="service-item">
                    <i className="fa-solid fa-square-parking"></i>
                    <span>Parking Management</span>
                </div>
                <div className="service-item">
                    <i className="fa-solid fa-key"></i>
                    <span>Access Control</span>
                </div>
                <div className="service-item">
                    <i className="fa-solid fa-faucet-drip"></i>
                    <span>Water Treatment</span>
                </div>

                <div className="service-item">
                    <i className="fa-solid fa-lightbulb"></i>
                    <span>Energy Management</span>
                </div>
                <div className="service-item">
                    <i className="fa-solid fa-truck-moving"></i>
                    <span>Moving & Relocation</span>
                </div>
                <div className="service-item">
                    <i className="fa-solid fa-video"></i>
                    <span>CCTV & Surveillance</span>
                </div>
                <div className="service-item">
                    <i className="fa-solid fa-elevator"></i>
                    <span>Lift & Elevator Service</span>
                </div>

                <div className="service-item">
                    <i className="fa-solid fa-paint-roller"></i>
                    <span>Painting Services</span>
                </div>
                <div className="service-item">
                    <i className="fa-solid fa-house-chimney"></i>
                    <span>Roofing Services</span>
                </div>
                <div className="service-item">
                    <i className="fa-solid fa-desktop"></i>
                    <span>Office Furniture Setup</span>
                </div>
                <div className="service-item">
                    <i className="fa-solid fa-mug-hot"></i>
                    <span>Vending Services</span>
                </div>

                <div className="service-item">
                    <i className="fa-solid fa-screwdriver-wrench"></i>
                    <span>Handyman Services</span>
                </div>
                <div className="service-item">
                    <i className="fa-solid fa-sign-hanging"></i>
                    <span>Signage & Branding</span>
                </div>
                <div className="service-item">
                    <i className="fa-solid fa-window-restore"></i>
                    <span>Blinds & Curtains</span>
                </div>
                <div className="service-item">
                    <i className="fa-solid fa-hands-bubbles"></i>
                    <span>Sanitization Services</span>
                </div>

                <div className="service-item">
                    <i className="fa-solid fa-border-all"></i>
                    <span>Flooring & Tiling</span>
                </div>
                <div className="service-item">
                    <i className="fa-solid fa-kitchen-set"></i>
                    <span>Kitchen Equipment Service</span>
                </div>
                <div className="service-item">
                    <i className="fa-solid fa-envelopes-bulk"></i>
                    <span>Mail Room Services</span>
                </div>
                <div className="service-item">
                    <i className="fa-solid fa-triangle-exclamation"></i>
                    <span>Emergency Response</span>
                </div>
            </main>
        </div>
      </section>

    </>
  );
}
