'use client';

import AnimatedCounter from '@/components/ui/AnimatedCounter';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { stats } from '@/lib/data';

export default function StatsBar() {
  return (
    <section className="relative py-24 overflow-hidden bg-forest-dark">
      <div className="rural-parallax-base" aria-hidden="true">
        <div className="rural-parallax-layer rural-parallax-church rural-parallax-layer-fixed opacity-65" />
        <div className="absolute inset-0 rural-band-overlay" />
        <div className="absolute inset-0 heraldic-pattern opacity-55" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.15}>
              <div className="text-center">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                />
                <p className="text-cream/72 mt-4 text-xs uppercase tracking-[0.22em] font-body">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
