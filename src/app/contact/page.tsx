import { Card, CardContent } from "@/components/ui/card";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";

const contactDetails = [
  {
    icon: Phone,
    title: "Phone",
    value: "+254 710 211 188",
    href: "tel:+254710211188",
    note: "Hellen Mong'are",
  },
  {
    icon: Mail,
    title: "Email",
    value: "hellenkemuma14@gmail.com",
    href: "mailto:hellenkemuma14@gmail.com",
    note: "Primary contact for all inquiries",
  },
  {
    icon: MapPin,
    title: "Office Location",
    value: "Nairobi, Kenya",
    note: "Serving properties nationwide",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon - Fri: 8:00 AM - 6:00 PM (EAT)",
    note: "Available 24/7 for client emergencies",
  },
];

const whyChooseUs = [
    "Over a decade of proven facilities management experience.",
    "A track record of improving operational efficiency and reducing costs.",
    "Deep expertise in both commercial and high-end residential properties.",
    "A steadfast focus on rigorous budget control and service quality.",
    "Renowned for excellent stakeholder communication and decisive leadership."
]

const ContactPage = () => {
  return (
    <main className="flex-grow">
    <section id="contact" className="py-24 pt-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-headline">Book a Site Assessment and Schedule Your Service</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to optimize your property's performance? Let's connect and explore how our expertise in facilities management can bring value to your assets.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
                <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-headline">Contact Information</h3>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                        Whether you are seeking a comprehensive management solution for your property or require expert consultation on operational efficiency, we are here to provide the guidance and support you need. Please feel free to reach out through any of the channels below. We are committed to responding to all inquiries promptly.
                    </p>
                </div>
                <div className="grid gap-6">
                    {contactDetails.map((item, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <item.icon className="h-6 w-6 text-accent" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-primary mb-1 font-headline">{item.title}</h4>
                                        <p className="text-muted-foreground text-sm">
                                            {item.href ? (
                                                <Link href={item.href} className="hover:text-accent transition-colors text-base">{item.value}</Link>
                                            ) : (
                                                <span className="text-base">{item.value}</span>
                                            )}
                                        </p>
                                        <p className="text-muted-foreground text-xs">{item.note}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                 <div className="bg-gradient-to-br from-primary to-blue-800 text-white rounded-lg p-6 md:p-8 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                        <MessageCircle className="h-6 w-6 text-accent" />
                        <h4 className="text-xl font-semibold font-headline">Why Choose My Services?</h4>
                    </div>
                    <ul className="space-y-3 text-sm opacity-90">
                        {whyChooseUs.map((reason, i) => <li key={i} className="flex items-start"><span className="mr-2 mt-1">•</span>{reason}</li>)}
                    </ul>
                </div>
            </div>
            
            <ContactForm />

          </div>
        </div>
      </div>
    </section>
    </main>
  );
};

export default ContactPage;
