'use client';

import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import Card from '@/components/ui/Card';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { policyAreas } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export default function PoliciesPage() {
  return (
    <>
      <PageHero
        title="Policy Proposals"
        subtitle="Our comprehensive policy platform covering all aspects of national restoration."
        breadcrumbs={[{ label: 'Policies', href: '/policies' }]}
      />

      {/* Policy Categories Grid */}
      <section className="py-24 parchment-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="All Policy Areas"
              subtitle="Our policies cover every aspect of national life."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {policyAreas.map((policy, i) => (
              <ScrollReveal key={policy.slug} delay={i * 0.1}>
                <Link href={policy.href}>
                  <Card className="h-full group cursor-pointer">
                    <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center mb-5 group-hover:border-burgundy/50 transition-colors">
                      <policy.icon
                        className="text-oak group-hover:text-burgundy transition-colors"
                        size={24}
                      />
                    </div>
                    <h3 className="font-heading text-xl font-bold italic text-charcoal mb-3 group-hover:text-burgundy transition-colors">
                      {policy.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-sm font-body font-semibold text-burgundy group-hover:gap-2 transition-all">
                      Read More <ArrowRight size={14} />
                    </span>
                  </Card>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 oak-bg relative">
        <div className="absolute inset-0 heraldic-pattern" />
        <div className="absolute top-0 left-0 right-0 hedge-divider" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="text-gold/60 font-accent text-2xl">&#10013;</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold italic text-cream mt-4 mb-6">
              Shape the Future
            </h2>
            <p className="text-cream/60 font-body text-lg mb-10">
              Through our direct democracy platform, every member has a voice. Your proposals become our policies.
            </p>
            <Button href="/direct-democracy" variant="primary" size="lg">
              Explore Direct Democracy
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
