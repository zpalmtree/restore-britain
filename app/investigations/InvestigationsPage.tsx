'use client';

import PageHero from '@/components/sections/PageHero';
import Card from '@/components/ui/Card';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { ShieldAlert, FileSearch, ArrowRight } from 'lucide-react';

export default function InvestigationsPage() {
  return (
    <>
      <PageHero
        title="Investigations"
        subtitle="Holding power to account through transparency and relentless inquiry."
        breadcrumbs={[{ label: 'Investigations', href: '/investigations' }]}
      />

      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading title="Our Work" subtitle="Two key areas of investigation." />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollReveal delay={0.1}>
              <Card className="h-full group">
                <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center mb-6">
                  <ShieldAlert className="text-burgundy" size={28} />
                </div>
                <h3 className="font-heading text-2xl font-bold italic text-forest-dark mb-3 group-hover:text-burgundy transition-colors">Whistleblowing</h3>
                <p className="text-oak-light font-body leading-relaxed mb-6">If you have information you believe is in the public interest, there are secure ways to share it with us. We take the safety of those who come forward very seriously.</p>
                <Button href="/investigations/whistleblowing" variant="ghost" className="px-0 gap-2 hover:gap-3">Learn More <ArrowRight size={16} /></Button>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Card className="h-full group">
                <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center mb-6">
                  <FileSearch className="text-gold" size={28} />
                </div>
                <h3 className="font-heading text-2xl font-bold italic text-forest-dark mb-3 group-hover:text-burgundy transition-colors">FOI Investigations</h3>
                <p className="text-oak-light font-body leading-relaxed mb-6">Freedom of Information requests are a powerful tool for uncovering hidden facts, holding institutions accountable, and shining light on issues the public has a right to know about.</p>
                <Button href="/investigations/foi" variant="ghost" className="px-0 gap-2 hover:gap-3">Learn More <ArrowRight size={16} /></Button>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
