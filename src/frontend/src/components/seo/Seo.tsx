import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

export default function Seo({ title, description, ogTitle, ogDescription, ogImage }: SeoProps) {
  useEffect(() => {
    document.title = title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    const updateOrCreateMeta = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    updateOrCreateMeta('og:title', ogTitle || title);
    updateOrCreateMeta('og:description', ogDescription || description);
    if (ogImage) {
      updateOrCreateMeta('og:image', ogImage);
    }
    updateOrCreateMeta('og:type', 'website');
  }, [title, description, ogTitle, ogDescription, ogImage]);

  return null;
}
