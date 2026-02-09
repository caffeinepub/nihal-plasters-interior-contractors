import { Link } from '@tanstack/react-router';
import { Phone, CheckCircle2, Star, ArrowRight } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Section from '@/components/Section';
import Seo from '@/components/seo/Seo';
import { siteContent } from '@/content/siteContent';
import { galleryItems } from '@/content/galleryItems';

export default function HomePage() {
  const services = [
    { title: 'PVC Ceiling', icon: '🏛️', link: '/services#pvc-ceiling' },
    { title: 'Gypsum Ceiling', icon: '✨', link: '/services#gypsum-ceiling' },
    { title: 'POP Work', icon: '🎨', link: '/services#pop-work' },
    { title: 'Wall Panels', icon: '🧱', link: '/services#wall-panels' },
    { title: 'False Ceiling', icon: '🏗️', link: '/services#false-ceiling' },
    { title: 'Interior Decoration', icon: '🏠', link: '/services#interior-decoration' },
    { title: 'Material Supply & Contract', icon: '🏪', link: '/services#material-supply-contract' },
  ];

  return (
    <>
      <Seo
        title="Nihal Plasters & Interior Contractors - Premium Ceiling & Interior Solutions Across India"
        description="Expert PVC & Gypsum ceiling installation, POP work, false ceiling, wall panels, and complete interior design services across India. Quality materials and professional craftsmanship."
        ogImage="/assets/generated/nihal-plasters-logo.dim_1024x1024.png"
      />

      {/* Hero Section */}
      <Section className="relative min-h-[600px] flex items-center bg-black" withPattern>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(/assets/generated/hero-ceiling.dim_1920x1080.png)' }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gold leading-tight">
              {siteContent.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-gold/90 font-medium">
              {siteContent.hero.subtitle}
            </p>
            <p className="text-lg text-gold/70 max-w-3xl mx-auto">
              {siteContent.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold/90 text-black font-semibold text-lg px-8"
                asChild
              >
                <a href="https://wa.me/917523029086" target="_blank" rel="noopener noreferrer">
                  <SiWhatsapp className="mr-2 h-5 w-5" />
                  WhatsApp Now
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gold text-gold hover:bg-gold/10 font-semibold text-lg px-8"
                asChild
              >
                <a href="tel:7523029086">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Contractor
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-black/95" withPattern>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">Why Choose Us</h2>
            <p className="text-gold/70 max-w-2xl mx-auto">
              Experience the difference of working with true professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteContent.highlights.map((highlight, index) => (
              <Card key={index} className="bg-black/50 border-gold/20 text-center">
                <CardContent className="p-6 space-y-4">
                  <CheckCircle2 className="h-12 w-12 text-gold mx-auto" />
                  <h3 className="text-xl font-semibold text-gold">{highlight.title}</h3>
                  <p className="text-gold/60 text-sm">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Our Services */}
      <Section className="bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">Our Services</h2>
            <p className="text-gold/70 max-w-2xl mx-auto">
              Comprehensive interior solutions for residential and commercial spaces across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link key={index} to={service.link}>
                <Card className="bg-black/50 border-gold/20 hover:border-gold/40 transition-all cursor-pointer h-full">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="text-5xl">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-gold">{service.title}</h3>
                    <ArrowRight className="h-5 w-5 text-gold mx-auto" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold/90 text-black font-semibold"
              asChild
            >
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-black/95" withPattern>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gold/70 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {siteContent.testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-black/50 border-gold/20">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-gold/70 italic">"{testimonial.quote}"</p>
                  <p className="text-gold font-semibold">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Gallery Preview */}
      <Section className="bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">Our Work</h2>
            <p className="text-gold/70 max-w-2xl mx-auto">
              Browse through our portfolio of completed projects
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryItems.slice(0, 4).map((item, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg border-2 border-gold/20 hover:border-gold/40 transition-all"
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              size="lg"
              variant="outline"
              className="border-gold text-gold hover:bg-gold/10 font-semibold"
              asChild
            >
              <Link to="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-black/95" withPattern>
        <div className="container mx-auto px-4">
          <Card className="bg-gold/5 border-gold/30 max-w-3xl mx-auto">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gold">
                Ready to Transform Your Space?
              </h2>
              <p className="text-gold/70 text-lg">
                Contact us today for a free consultation and quote. We serve clients across India with premium quality materials and expert craftsmanship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold/10 font-semibold"
                  asChild
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
