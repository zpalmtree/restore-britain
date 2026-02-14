'use client';

import PageHero from '@/components/sections/PageHero';
import Card from '@/components/ui/Card';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { directDemocracySteps } from '@/lib/data';
import { Ban } from 'lucide-react';

const notAllowed = [
  'Swearing/unacceptable language',
  'Sharing personal details',
  'Naming individuals',
  'Threats',
  'Anything unlawful',
  'Duplicate existing Restore Britain policies',
  'Anything that brings Restore Britain into disrepute',
];

export default function DirectDemocracyPage() {
  return (
    <>
      <PageHero
        title="Direct Democracy"
        subtitle="An entirely new way of doing politics. Every member has an equal voice in shaping the future of this party and this country."
        breadcrumbs={[{ label: 'Direct Democracy', href: '/direct-democracy' }]}
      />

      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading title="How It Works" subtitle="Our direct democracy platform has been launched." />
          </ScrollReveal>

          <div className="max-w-3xl mx-auto mb-12">
            <ScrollReveal delay={0.1}>
              <div className="space-y-4 text-charcoal font-body leading-relaxed">
                <p>Join Restore Britain to vote on our policy ratification process, which then leads to a full campaign.</p>
                <p>A simple yes or no response to the main question, with lots more polls included.</p>
                <p>You will also be able to propose policy and vote on suggestions from other members.</p>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-16 left-[16.6%] right-[16.6%] h-0.5 bg-gradient-to-r from-gold via-burgundy to-gold" />
            {directDemocracySteps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.2}>
                <div className="text-center relative">
                  <div className="w-16 h-16 rounded-full bg-forest-dark flex items-center justify-center mx-auto mb-6 border-2 border-gold relative z-10">
                    <step.icon className="text-gold" size={28} />
                  </div>
                  <span className="inline-block px-3 py-1 text-xs font-body font-bold uppercase tracking-wider text-gold bg-gold/10 border border-gold/20 mb-4">Step {step.step}</span>
                  <h3 className="font-heading text-2xl font-bold text-forest-dark mb-3">{step.title}</h3>
                  <p className="text-oak-light font-body leading-relaxed max-w-xs mx-auto">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 forest-bg relative">
        <div className="absolute top-0 left-0 right-0 hedge-divider" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading title="Policy Proposal Guidelines" subtitle="In the policy proposal process, there are a number of terms and conditions." light />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="dark-heritage-card p-8 md:p-12">
              <p className="text-cream/70 font-body leading-relaxed mb-6">We won&rsquo;t publish policies that contain:</p>
              <ul className="space-y-3">
                {notAllowed.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-cream/70 font-body">
                    <Ban size={16} className="text-burgundy mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-cream/70 font-body leading-relaxed mt-6">
                If it replicates one of the policies already covered on our platform, we won&rsquo;t publish it. Those that receive the most support will be examined to be taken forward for a full campaign in the future, and promoted on our various channels.
              </p>
            </div>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 hedge-divider" />
      </section>

      <section className="relative py-24 overflow-hidden parchment-bg">
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest-dark mb-6">Have Your Say</h2>
            <p className="text-oak-light font-body text-lg mb-10">Join Restore Britain to have your say. This is an entirely new way of doing politics.</p>
            <Button href="/join" variant="primary" size="lg">Become a Member</Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
