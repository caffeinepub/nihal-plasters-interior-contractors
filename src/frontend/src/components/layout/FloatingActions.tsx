import { Phone } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function FloatingActions() {
  return (
    <TooltipProvider>
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className="h-14 w-14 rounded-full bg-gold hover:bg-gold/90 text-black shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <a
                href="https://wa.me/917523029086"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Now"
              >
                <SiWhatsapp className="h-7 w-7" />
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>WhatsApp Now</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className="h-14 w-14 rounded-full bg-gold hover:bg-gold/90 text-black shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <a href="tel:7523029086" aria-label="Call Contractor">
                <Phone className="h-6 w-6" />
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Call Contractor</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
