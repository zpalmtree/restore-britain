'use client';

import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';

export default function CtaBanner() {
  return (
    <section className="relative py-28 overflow-hidden oak-bg">
      {/* Top heritage divider */}
      <div className="absolute top-0 left-0 right-0 hedge-divider" />

      {/* Heraldic pattern overlay */}
      <div className="absolute inset-0 heraldic-pattern" />

      {/* Warm glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-radial from-burgundy/8 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <span className="text-gold/60 font-accent text-3xl">✟</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold italic text-cream mt-6 mb-6">
            Help Build It
          </h2>
          <p className="font-body text-cream/60 text-lg md:text-xl mb-4 max-w-2xl mx-auto leading-relaxed">
            This country still has extraordinary people. The best people on this planet.
            What it lacks is the leadership prepared to act for the long term.
          </p>
          <p className="font-accent text-gold-pale/80 italic text-lg mb-10">
            Help restore competence, confidence and national purpose to British politics.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/join" variant="primary" size="lg">
              Join Restore Britain
            </Button>
            <Button href="/donate" variant="outline" size="lg">
              Support the Cause
            </Button>
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom heritage divider */}
      <div className="absolute bottom-0 left-0 right-0 hedge-divider" />
    </section>
  );
}
