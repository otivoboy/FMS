import { Card, CardContent } from "@/components/ui/card";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "./contact-form";

const contactDetails = [
  {
    icon: Phone,
    title: "Phone",
    value: "+254 710 211 188",
    href: "tel:+254710211188",
    note: "Available for calls and WhatsApp",
  },
  {
    icon: Mail,
    title: "Email",
    value: "hellen.mongare@gmail.com",
    href: "mailto:hellen.mongare@gmail.com",
    note: "Primary contact email",
  },
  {
    icon: MapPin,
    title: "Office Location",
    value: "Nairobi, Kenya",
    note: "Available nationwide",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon - Fri: 8:00 AM - 6:00 PM",
    note: "Emergency: 24/7 Available",
  },
];

const whyChooseUs = [
    "10+ years of proven construction management experience",
    "100% safety compliance record across all projects",
    "Expertise in both residential and commercial developments",
    "Strong focus on budget control and timeline adherence",
    "Excellent stakeholder communication and team leadership"
]

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4 font-headline">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to discuss your construction project? Let&apos;s connect and explore how our expertise can bring your vision to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
                <div>
                    <h3 className="text-2xl font-bold text-primary mb-6 font-headline">Contact Information</h3>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                        Whether you&apos;re planning a new construction project or need expert project management for an ongoing development, we&apos;re here to help. Reach out through any of the channels below.
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
                                                <Link href={item.href} className="hover:text-accent transition-colors">{item.value}</Link>
                                            ) : (
                                                <span>{item.value}</span>
                                            )}
                                        </p>
                                        <p className="text-muted-foreground text-xs">{item.note}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                 <div className="bg-gradient-to-br from-primary to-blue-800 text-white rounded-lg p-8 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                        <MessageCircle className="h-6 w-6 text-accent" />
                        <h4 className="text-xl font-semibold font-headline">Why Choose PremiumBuild Management?</h4>
                    </div>
                    <ul className="space-y-2 text-sm opacity-90">
                        {whyChooseUs.map((reason, i) => <li key={i}>• {reason}</li>)}
                    </ul>
                </div>
            </div>
            
            <ContactForm />

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
