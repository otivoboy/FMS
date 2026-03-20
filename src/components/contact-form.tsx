
"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Send } from "lucide-react";
import { automatedInquiryForwarding } from "@/ai/flows/automated-inquiry-forwarding";

const formSchema = z.object({
  name: z.string().min(2, { message: "Please enter your name" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  projectType: z.string({
    required_error: "Please select a service.",
  }),
  message: z.string().min(10, { message: "Please provide some details about your needs" }),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: FormData) {
    try {
      await automatedInquiryForwarding(values);
      const subject = `Service Inquiry: ${values.projectType}`;
      const body = `Name: ${values.name}%0D%0APhone: ${values.phone}%0D%0AEmail: ${values.email}%0D%0AService Needed: ${values.projectType}%0D%0A%0D%0AMessage:%0D%0A${values.message}`;
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=hellenkemuma14@gmail.com&su=${encodeURIComponent(subject)}&body=${body}`;

      window.open(gmailUrl, "_blank");

      setIsSuccess(true);
      form.reset();
      setTimeout(() => setIsSuccess(false), 6000);
    } catch (error) {
      console.error("Error submitting form:", error);
      // Optionally, show an error message to the user
    }
  }

  return (
    <div className="bg-card rounded-lg shadow-lg p-6 md:p-8">
      <h3 className="text-2xl font-bold text-primary mb-6 font-headline">
        Book a Free Site Assessment
      </h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number *</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="Your phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address *</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="youremail@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="projectType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service Needed *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Construction Project Management">Construction Project Management</SelectItem>
                    <SelectItem value="Facilities Maintenance">Facilities Maintenance</SelectItem>
                    <SelectItem value="Home Repairs & Maintenance">Home Repairs & Maintenance</SelectItem>
                    <SelectItem value="Post-Construction Cleaning">Post-Construction Cleaning</SelectItem>
                    <SelectItem value="Other Inquiry">Other Inquiry</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message *</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Please describe your property and requirements..."
                    className="min-h-[120px] resize-y"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg !py-6 font-semibold transition-colors">
            <Send className="h-5 w-5 mr-2" />
            Schedule Your Service
          </Button>
          
          {isSuccess && (
             <div className="bg-green-600/90 text-white p-4 rounded-md text-center flex items-center justify-center">
                <CheckCircle className="h-5 w-5 mr-2 inline" />
                Thank you! Your booking has been prepared. Gmail will open to send it.
            </div>
          )}
          
          <p className="text-xs text-muted-foreground text-center">
            * Required fields. We&apos;ll respond within 24 hours to discuss your needs.
          </p>
        </form>
      </Form>
    </div>
  );
}
