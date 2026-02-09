import { Phone, Mail, MapPin, Edit3 } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { Link } from '@tanstack/react-router';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'nihal-plasters'
  );

  return (
    <footer className="bg-black border-t border-gold/20 text-gold/80">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/assets/generated/nihal-plasters-logo.dim_1024x1024.png"
                alt="Nihal Plasters"
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="text-lg font-bold text-gold">Nihal Plasters</h3>
                <p className="text-sm text-gold/70">Interior Contractors</p>
              </div>
            </div>
            <p className="text-sm text-gold/60">
              Premium interior solutions for your dream spaces. Specializing in PVC & Gypsum ceilings, POP work, false ceiling, and complete interior design services across India.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-gold">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 mt-0.5 text-gold flex-shrink-0" />
                <div>
                  <a href="tel:7523029086" className="hover:text-gold transition-colors block">
                    +91 7523029086
                  </a>
                  <a href="tel:9291680966" className="hover:text-gold transition-colors block">
                    +91 9291680966
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <SiWhatsapp className="h-4 w-4 mt-0.5 text-gold flex-shrink-0" />
                <a
                  href="https://wa.me/917523029086"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  +91 7523029086
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 mt-0.5 text-gold flex-shrink-0" />
                <a href="mailto:nmd785621@gmail.com" className="hover:text-gold transition-colors">
                  nmd785621@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-0.5 text-gold flex-shrink-0" />
                <span>Sattenapalli Road, Dharani Kota, Indian Gas Front, Amaravati, Andhra Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Owner Information */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-gold">Proprietor</h4>
            <p className="text-sm">
              <span className="font-medium text-gold">Shaik Nihal Ahmad</span>
            </p>
            <p className="text-sm text-gold/60">
              Committed to delivering excellence in every project with premium materials and expert craftsmanship.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gold/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left text-sm text-gold/60">
              <p>
                © {currentYear} Nihal Plasters & Interior Contractors. All rights reserved.
              </p>
              <p className="mt-2">
                Built with ❤️ using{' '}
                <a
                  href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold/80 transition-colors"
                >
                  caffeine.ai
                </a>
              </p>
            </div>
            <Link
              to="/contact"
              hash="request-change"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gold/10 hover:bg-gold/20 border border-gold/30 text-gold text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-black"
            >
              <Edit3 className="h-4 w-4" />
              Request a Change
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
