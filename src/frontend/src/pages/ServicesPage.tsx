import { CheckCircle2 } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Section from '@/components/Section';
import Seo from '@/components/seo/Seo';
import { siteContent } from '@/content/siteContent';

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Our Services - PVC Ceiling, Gypsum Ceiling, POP Work, False Ceiling & More"
        description="Professional interior services including PVC ceiling, Gypsum ceiling, POP work, wall panels, false ceiling, interior decoration, and material supply with contract work across India."
      />

      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-black via-black to-black/95 pt-8" withPattern>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gold">Our Services</h1>
            <p className="text-xl text-gold/80">
              Comprehensive interior solutions designed to elevate your spaces with premium quality and expert craftsmanship
            </p>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section className="bg-black">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {siteContent.services.map((service, index) => (
              <Card
                key={index}
                id={service.id}
                className="bg-black/50 border-gold/20 scroll-mt-24"
              >
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl text-gold flex items-center gap-3">
                    <span className="text-4xl">{service.icon}</span>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gold/70 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gold">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gold/70">
                          <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Button
                      className="bg-gold hover:bg-gold/90 text-black font-semibold"
                      asChild
                    >
                      <a
                        href="https://wa.me/917523029086"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SiWhatsapp className="mr-2 h-4 w-4" />
                        WhatsApp Now
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-black/95" withPattern>
        <div className="container mx-auto px-4">
          <Card className="bg-gold/5 border-gold/30 max-w-3xl mx-auto">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gold">
                Need a Custom Solution?
              </h2>
              <p className="text-gold/70 text-lg">
                We offer tailored interior solutions to match your specific requirements and budget. Contact us for a personalized consultation.
              </p>
              <Button
                size="lg"
                className="bg-gold hover:bg-gold/90 text-black font-semibold"
                asChild
              >
                <a href="https://wa.me/917523029086" target="_blank" rel="noopener noreferrer">
                  <SiWhatsapp className="mr-2 h-5 w-5" />
                  WhatsApp Now
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
