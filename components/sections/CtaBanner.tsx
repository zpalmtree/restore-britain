'use client';

import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';

export default function CtaBanner() {
  return (
    <section className="relative py-24 md:py-28 overflow-hidden bg-forest-dark">
      <div className="absolute top-0 left-0 right-0 hedge-divider" />

      <div className="rural-parallax-base" aria-hidden="true">
        <div className="rural-parallax-layer rural-parallax-maypole rural-parallax-layer-fixed" />
        <div className="absolute inset-0 rural-band-overlay" />
        <div className="absolute inset-0 heraldic-pattern opacity-50" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <span className="text-gold/60 font-accent text-3xl">✢</span>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-cream mt-6 mb-6">
            Help Build It
          </h2>
          <p className="font-body text-cream/82 text-lg md:text-xl mb-4 max-w-2xl mx-auto leading-relaxed">
            This country still has extraordinary people. The best people on this planet.
            What it lacks is the leadership prepared to act for the long term.
          </p>
          <p className="font-accent text-gold-pale/85 text-lg mb-10 tracking-[0.04em]">
            Back Britain&apos;s parishes, market towns, and civic institutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="https://www.restorebritain.org.uk/join_us" variant="primary" size="lg">
              Join Restore Britain
            </Button>
            <Button href="https://www.restorebritain.org.uk/donate" variant="outline" size="lg">
              Support the Cause
            </Button>
          </div>
        </ScrollReveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 hedge-divider" />
    </section>
  );
}
