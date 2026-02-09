import { useEffect } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Section from '@/components/Section';
import Seo from '@/components/seo/Seo';
import RequestAChange from '@/components/contact/RequestAChange';
import ContactForm from '@/components/contact/ContactForm';

export default function ContactPage() {
  useEffect(() => {
    // Handle anchor navigation on mount
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, []);

  return (
    <>
      <Seo
        title="Contact Us - Nihal Plasters & Interior Contractors"
        description="Get in touch with Nihal Plasters & Interior Contractors for your interior project. Call us at 7523029086 or visit us in Amaravati, Andhra Pradesh. We serve clients across India."
      />

      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-black via-black to-black/95 pt-8" withPattern>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gold">Contact Us</h1>
            <p className="text-xl text-gold/80">
              Ready to transform your space? Get in touch with us today for a free consultation and quote
            </p>
          </div>
        </div>
      </Section>

      {/* Contact Form Section */}
      <Section className="bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* Contact Information */}
      <Section className="bg-black/95" withPattern>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Cards */}
            <div className="space-y-6">
              <Card className="bg-black/50 border-gold/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-gold">Get In Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Owner */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gold">Proprietor</h3>
                    <p className="text-gold/80 font-medium">Shaik Nihal Ahmad</p>
                  </div>

                  {/* Phone Numbers */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <p className="text-sm text-gold/60">Mobile & WhatsApp</p>
                        <a
                          href="tel:7523029086"
                          className="text-gold/90 hover:text-gold transition-colors font-medium"
                        >
                          +91 7523029086
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <p className="text-sm text-gold/60">Phone</p>
                        <a
                          href="tel:9291680966"
                          className="text-gold/90 hover:text-gold transition-colors font-medium"
                        >
                          +91 9291680966
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="text-sm text-gold/60">Email</p>
                      <a
                        href="mailto:nmd785621@gmail.com"
                        className="text-gold/90 hover:text-gold transition-colors font-medium break-all"
                      >
                        nmd785621@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="text-sm text-gold/60">Location</p>
                      <p className="text-gold/90 font-medium">
                        Sattenapalli Road, Dharani Kota<br />
                        Indian Gas Front, Amaravati<br />
                        Andhra Pradesh, India
                      </p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="text-sm text-gold/60">Business Hours</p>
                      <p className="text-gold/90">
                        Monday - Saturday: 9:00 AM - 7:00 PM<br />
                        Sunday: By Appointment
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button
                      className="bg-gold hover:bg-gold/90 text-black font-semibold flex-1"
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
                    <Button
                      variant="outline"
                      className="border-gold text-gold hover:bg-gold/10 flex-1"
                      asChild
                    >
                      <a href="tel:7523029086">
                        <Phone className="mr-2 h-4 w-4" />
                        Call Contractor
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gold/5 border-gold/30">
                <CardContent className="p-6">
                  <p className="text-gold/70 text-sm leading-relaxed">
                    <strong className="text-gold">Quick Response Guarantee:</strong> We typically respond to all inquiries within 2 hours during business hours. For urgent requests, please call us directly.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <div className="space-y-6">
              <Card className="bg-black/50 border-gold/20 overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-2xl text-gold">Find Us</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="aspect-[4/3] w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122103.89!2d80.52!3d16.51!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a755cb1787785%3A0x9f7999dd90f1e694!2sAmaravati%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Nihal Plasters Location"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/50 border-gold/20">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-gold">Service Areas</h3>
                  <p className="text-gold/70 text-sm leading-relaxed">
                    We provide interior contract services all over India and can take projects anywhere. Based in Amaravati, Andhra Pradesh, we are equipped to handle both residential and commercial projects of all sizes across the country.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* Request a Change Section */}
      <Section className="bg-black" id="request-change">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <RequestAChange />
          </div>
        </div>
      </Section>
    </>
  );
}
