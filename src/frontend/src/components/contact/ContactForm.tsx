import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { SiWhatsapp } from 'react-icons/si';

interface FormData {
  name: string;
  phone: string;
  city: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  city?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    city: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please describe your requirements';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Construct WhatsApp message
    const message = `Hello! I would like to get a free quote for interior work.

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*City:* ${formData.city}
*Requirements:* ${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/917523029086?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Reset form after a short delay
    setTimeout(() => {
      setFormData({ name: '', phone: '', city: '', message: '' });
      setErrors({});
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <Card className="bg-black/50 border-gold/20">
      <CardHeader>
        <CardTitle className="text-2xl text-gold">Get Free Quote</CardTitle>
        <p className="text-gold/70 text-sm">
          Fill in your details and we'll contact you via WhatsApp with a personalized quote
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gold/90">
              Your Name *
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className={`bg-black/50 border-gold/30 text-gold placeholder:text-gold/40 focus:border-gold ${
                errors.name ? 'border-red-500' : ''
              }`}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-gold/90">
              Phone Number *
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your 10-digit mobile number"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className={`bg-black/50 border-gold/30 text-gold placeholder:text-gold/40 focus:border-gold ${
                errors.phone ? 'border-red-500' : ''
              }`}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="city" className="text-gold/90">
              City / Location *
            </Label>
            <Input
              id="city"
              type="text"
              placeholder="Enter your city"
              value={formData.city}
              onChange={(e) => handleChange('city', e.target.value)}
              className={`bg-black/50 border-gold/30 text-gold placeholder:text-gold/40 focus:border-gold ${
                errors.city ? 'border-red-500' : ''
              }`}
            />
            {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-gold/90">
              Your Requirements *
            </Label>
            <Textarea
              id="message"
              placeholder="Tell us about your project requirements (e.g., PVC ceiling for bedroom, gypsum false ceiling for living room, etc.)"
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              rows={5}
              className={`bg-black/50 border-gold/30 text-gold placeholder:text-gold/40 focus:border-gold resize-none ${
                errors.message ? 'border-red-500' : ''
              }`}
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gold hover:bg-gold/90 text-black font-semibold"
          >
            <SiWhatsapp className="mr-2 h-5 w-5" />
            {isSubmitting ? 'Opening WhatsApp...' : 'Get Free Quote'}
          </Button>

          <p className="text-gold/60 text-xs text-center">
            * All fields are required. Your information will be sent via WhatsApp for a quick response.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
