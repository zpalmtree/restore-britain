'use client';

import AnimatedCounter from '@/components/ui/AnimatedCounter';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { stats } from '@/lib/data';

export default function StatsBar() {
  return (
    <section className="relative oak-bg py-24 overflow-hidden">
      {/* Heraldic pattern overlay */}
      <div className="absolute inset-0 heraldic-pattern" />

      {/* Gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-radial from-gold/5 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.15}>
              <div className="text-center">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                />
                <p className="text-cream/40 mt-4 text-xs uppercase tracking-[0.25em] font-body">
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
