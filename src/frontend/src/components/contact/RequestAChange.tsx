import { useState } from 'react';
import { Send } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const AREAS = [
  { value: 'home', label: 'Home Page' },
  { value: 'about', label: 'About Page' },
  { value: 'services', label: 'Services Page' },
  { value: 'gallery', label: 'Gallery Page' },
  { value: 'contact', label: 'Contact Page' },
  { value: 'other', label: 'Other' },
];

export default function RequestAChange() {
  const [selectedArea, setSelectedArea] = useState<string>('');
  const [details, setDetails] = useState<string>('');

  const handleSubmit = () => {
    if (!selectedArea || !details.trim()) {
      return;
    }

    const areaLabel = AREAS.find((a) => a.value === selectedArea)?.label || selectedArea;
    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
    
    const message = `Request a Change\n\nArea: ${areaLabel}\n\nDetails:\n${details}\n\nPage URL: ${currentUrl}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/917523029086?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const isFormValid = selectedArea && details.trim().length > 0;

  return (
    <Card className="bg-black/50 border-gold/20">
      <CardHeader>
        <CardTitle className="text-2xl text-gold">Request a Change</CardTitle>
        <CardDescription className="text-gold/60">
          Have a suggestion or need to update something? Let us know and we'll get back to you promptly.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="area-select" className="text-gold/80">
            Which area needs attention?
          </Label>
          <Select value={selectedArea} onValueChange={setSelectedArea}>
            <SelectTrigger
              id="area-select"
              className="bg-black/50 border-gold/30 text-gold focus:ring-gold focus:border-gold"
            >
              <SelectValue placeholder="Select an area..." />
            </SelectTrigger>
            <SelectContent className="bg-black border-gold/30">
              {AREAS.map((area) => (
                <SelectItem
                  key={area.value}
                  value={area.value}
                  className="text-gold focus:bg-gold/10 focus:text-gold"
                >
                  {area.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="details-textarea" className="text-gold/80">
            Please describe the change you'd like
          </Label>
          <Textarea
            id="details-textarea"
            placeholder="Tell us what you'd like to change or update..."
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            rows={6}
            className="bg-black/50 border-gold/30 text-gold placeholder:text-gold/40 focus:ring-gold focus:border-gold resize-none"
          />
          <p className="text-xs text-gold/50">
            Be as specific as possible to help us understand your request better.
          </p>
        </div>

        <Button
          onClick={handleSubmit}
          disabled={!isFormValid}
          className="w-full bg-gold hover:bg-gold/90 text-black font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <SiWhatsapp className="mr-2 h-4 w-4" />
          Send via WhatsApp
          <Send className="ml-2 h-4 w-4" />
        </Button>

        <p className="text-xs text-gold/50 text-center">
          Your request will open WhatsApp with a pre-filled message. You can review and edit it before sending.
        </p>
      </CardContent>
    </Card>
  );
}
