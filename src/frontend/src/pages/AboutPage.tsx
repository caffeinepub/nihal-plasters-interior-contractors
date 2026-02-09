import { Award, Users, Clock, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Section from '@/components/Section';
import Seo from '@/components/seo/Seo';
import { siteContent } from '@/content/siteContent';

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We use only premium materials and maintain the highest standards in every project.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled craftsmen with years of experience in interior design and installation.',
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We respect your time and ensure projects are completed within agreed timelines.',
    },
    {
      icon: Target,
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority. We work closely with you to achieve your vision.',
    },
  ];

  return (
    <>
      <Seo
        title="About Us - Nihal Plasters & Interior Contractors"
        description="Learn about Nihal Plasters & Interior Contractors, your trusted partner for premium ceiling and interior solutions across India. Expert craftsmanship and quality materials."
      />

      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-black via-black to-black/95 pt-8" withPattern>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gold">About Us</h1>
            <p className="text-xl text-gold/80">
              {siteContent.about.intro}
            </p>
          </div>
        </div>
      </Section>

      {/* Our Story */}
      <Section className="bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gold">Our Story</h2>
              <div className="space-y-4 text-gold/70 leading-relaxed">
                {siteContent.about.story.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Values */}
      <Section className="bg-black/95" withPattern>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">Our Values</h2>
            <p className="text-gold/70 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="bg-black/50 border-gold/20 text-center">
                  <CardContent className="p-6 space-y-4">
                    <Icon className="h-12 w-12 text-gold mx-auto" />
                    <h3 className="text-xl font-semibold text-gold">{value.title}</h3>
                    <p className="text-gold/60 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </Section>

      {/* What We Do */}
      <Section className="bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gold">What We Do</h2>
              <div className="space-y-4 text-gold/70 leading-relaxed">
                {siteContent.about.services.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Service Area */}
      <Section className="bg-black/95" withPattern>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gold">Service Area</h2>
            <p className="text-gold/70 text-lg leading-relaxed">
              {siteContent.about.serviceArea}
            </p>
          </div>
        </div>
      </Section>

      {/* Commitment */}
      <Section className="bg-black">
        <div className="container mx-auto px-4">
          <Card className="bg-gold/5 border-gold/30 max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gold text-center">
                Our Commitment
              </h2>
              <div className="space-y-4 text-gold/70 leading-relaxed">
                {siteContent.about.commitment.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
