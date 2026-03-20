import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Read the terms and conditions for using the PremiumBuild Management website and facilities management services provided by Hellen Mong’are.',
};

const TermsPage = () => {
  const lastUpdated = "October 25, 2025";
  
  const sections = [
    {
      title: "1. Agreement to Terms",
      content: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services. Any participation in this service will constitute acceptance of this agreement. If you do not agree to abide by the above, please do not use this service."
    },
    {
      title: "2. Intellectual Property Rights",
      content: "The Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the 'Content') and the trademarks, service marks, and logos contained therein (the 'Marks') are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws. The Content and the Marks are provided on the Site 'AS IS' for your information and personal use only. Except as expressly provided in these Terms and Conditions, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission."
    },
    {
      title: "3. User Representations",
      content: "By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms and Conditions; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the Site through automated or non-human means, whether through a bot, script or otherwise; (6) you will not use the Site for any illegal or unauthorized purpose; and (7) your use of the Site will not violate any applicable law or regulation."
    },
    {
      title: "4. Prohibited Activities",
      content: "You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us. As a user of the Site, you agree not to engage in any of the prohibited activities listed in our detailed policy documentation, including but not limited to, unauthorized framing or linking, interfering with security features, and engaging in any automated use of the system."
    },
    {
      title: "5. Site Management",
      content: "We reserve the right, but not the obligation, to: (1) monitor the Site for violations of these Terms and Conditions; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms and Conditions; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable any of your Contributions or any portion thereof; (4) otherwise manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site."
    },
    {
      title: "6. Modifications and Interruptions",
      content: "We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. We also reserve the right to modify or discontinue all or part of the Site without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site."
    },
    {
      title: "7. Governing Law",
      content: "These Terms and Conditions and your use of the Site are governed by and construed in accordance with the laws of Kenya applicable to agreements made and to be entirely performed within Kenya, without regard to its conflict of law principles."
    },
    {
      title: "8. Disclaimer",
      content: "THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT."
    },
    {
      title: "9. Limitation of Liability",
      content: "IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES."
    },
    {
      title: "10. Contact Us",
      content: "In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: ",
      isContact: true
    }
  ];

  return (
    <main className="flex-grow bg-secondary">
      <section id="terms" className="py-24 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-headline">
                Terms and Conditions
              </h1>
              <p className="text-lg text-muted-foreground">
                Last updated: {lastUpdated}
              </p>
            </div>

            <Card className="shadow-lg">
              <CardContent className="p-6 md:p-8 space-y-8 text-muted-foreground leading-relaxed">
                {sections.map((section, index) => (
                  <section key={index}>
                    <h2 className="text-xl font-semibold text-primary mb-4 font-headline">
                      {section.title}
                    </h2>
                    <p>
                      {section.content}
                      {section.isContact && (
                        <a 
                          href="mailto:hellen.mongare@gmail.com" 
                          className="text-accent hover:underline"
                        >
                          hellenkemuma14@gmail.com
                        </a>
                      )}
                    </p>
                  </section>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsPage;
