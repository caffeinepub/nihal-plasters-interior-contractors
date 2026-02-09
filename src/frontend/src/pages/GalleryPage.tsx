import { useState } from 'react';
import Section from '@/components/Section';
import Seo from '@/components/seo/Seo';
import Lightbox from '@/components/gallery/Lightbox';
import { galleryItems } from '@/content/galleryItems';

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      <Seo
        title="Project Gallery - Nihal Plasters & Interior Contractors"
        description="Browse our portfolio of completed ceiling and interior projects. See our work in PVC ceilings, gypsum ceilings, POP work, and interior design across India."
      />

      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-black via-black to-black/95 pt-8" withPattern>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gold">Our Gallery</h1>
            <p className="text-xl text-gold/80">
              Explore our portfolio of completed projects showcasing premium quality workmanship
            </p>
          </div>
        </div>
      </Section>

      {/* Gallery Grid */}
      <Section className="bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="aspect-[4/3] overflow-hidden rounded-lg border-2 border-gold/20 hover:border-gold/40 transition-all cursor-pointer group"
                onClick={() => setSelectedIndex(index)}
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <Lightbox
          images={galleryItems}
          initialIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </>
  );
}
