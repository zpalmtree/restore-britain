'use client';

import { useState } from 'react';
import PageHero from '@/components/sections/PageHero';
import Card from '@/components/ui/Card';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { policyAreas } from '@/lib/data';
import { ChevronDown, CheckCircle } from 'lucide-react';

export default function PoliciesPage() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggle = (slug: string) => {
    setExpanded((prev) => ({
      ...prev,
      [slug]: !prev[slug],
    }));
  };

  return (
    <>
      <PageHero
        title="Policy Proposals"
        subtitle="Our comprehensive policy platform covering all aspects of national restoration."
        breadcrumbs={[{ label: 'Policies', href: '/policies' }]}
      />

      {/* Policy Sections */}
      <section className="py-24 parchment-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="All Policy Areas"
              subtitle="Click any policy area to see our proposals."
            />
          </ScrollReveal>

          <div className="space-y-6">
            {policyAreas.map((policy, i) => {
              const isOpen = Boolean(expanded[policy.slug]);
              return (
                <ScrollReveal key={policy.slug} delay={i * 0.05}>
                  <div id={policy.slug} className="scroll-mt-24">
                    <Card hover={!isOpen} className="!p-0 overflow-hidden">
                      <button
                        onClick={() => toggle(policy.slug)}
                        className="w-full flex items-center gap-4 text-left cursor-pointer p-6"
                      >
                        <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center shrink-0">
                          <policy.icon className="text-oak" size={24} />
                        </div>
                        <h3 className="font-heading text-xl font-bold text-charcoal flex-1">
                          {policy.title}
                        </h3>
                        <span className="text-sm font-body text-stone mr-2 hidden sm:inline">
                          {policy.policies.length} {policy.policies.length === 1 ? 'policy' : 'policies'}
                        </span>
                        <ChevronDown
                          size={20}
                          className={`text-oak shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        />
                      </button>

                      <div
                        className={`grid transition-all duration-300 ease-in-out ${
                          isOpen ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="border-t border-wheat pt-6 px-6 pb-6 space-y-5">
                            {policy.policies.map((point) => (
                              <div key={point.title} className="flex items-start gap-3">
                                <CheckCircle size={18} className="text-forest mt-1 shrink-0" />
                                <div>
                                  <h4 className="font-heading font-bold text-forest-dark text-base">
                                    {point.title}
                                  </h4>
                                  <p className="font-body text-base text-oak-light leading-relaxed">
                                    {point.description}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </ScrollReveal>
              );
            })}
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream mt-4 mb-6">
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
