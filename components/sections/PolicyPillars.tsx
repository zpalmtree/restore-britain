'use client';

import Link from 'next/link';
import Card from '@/components/ui/Card';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { policyAreas } from '@/lib/data';

export default function PolicyPillars() {
  return (
    <section className="py-24 parchment-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Policy Proposals"
            subtitle="Our policy areas covering all aspects of national restoration."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {policyAreas.slice(0, 6).map((policy, i) => (
            <ScrollReveal key={policy.slug} delay={i * 0.1}>
              <Link href={policy.href}>
                <Card className="h-full group cursor-pointer">
                  <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center mb-5 group-hover:border-burgundy/50 transition-colors">
                    <policy.icon
                      className="text-oak group-hover:text-burgundy transition-colors"
                      size={24}
                    />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-charcoal mb-3 group-hover:text-burgundy transition-colors">
                    {policy.title}
                  </h3>
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
