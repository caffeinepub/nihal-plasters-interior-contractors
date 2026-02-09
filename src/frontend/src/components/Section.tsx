import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  withPattern?: boolean;
}

export default function Section({ children, className, id, withPattern = false }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative py-16 md:py-24',
        withPattern && 'bg-pattern',
        className
      )}
    >
      {children}
    </section>
  );
}
