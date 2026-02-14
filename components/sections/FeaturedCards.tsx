'use client';

import Card from '@/components/ui/Card';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import { featuredCards } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export default function FeaturedCards() {
  return (
    <section className="relative parchment-bg py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.15}>
              <Card className="h-full flex flex-col">
                <div className="w-14 h-14 rounded-full border border-gold/30 bg-forest-dark/5 flex items-center justify-center mb-5">
                  <card.icon className="text-burgundy" size={26} />
                </div>
                <h3 className="text-forest-dark font-heading text-xl font-bold mb-3">
                  {card.title}
                </h3>
                <p className="text-oak-light font-body text-sm leading-relaxed mb-6 flex-1">
                  {card.description}
                </p>
                <Button
                  href={card.href}
                  variant="ghost"
                  size="sm"
                  className="self-start gap-2 px-0 hover:gap-3"
                >
                  {card.cta} <ArrowRight size={16} />
                </Button>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
