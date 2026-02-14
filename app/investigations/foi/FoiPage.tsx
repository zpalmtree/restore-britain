'use client';

import PageHero from '@/components/sections/PageHero';
import Card from '@/components/ui/Card';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { FileSearch, CheckCircle, AlertCircle, Send } from 'lucide-react';

const howItWorks = [
  'You submit your FOI suggestion through our submission form.',
  'Our team reviews all suggestions for relevance, legal viability, and public interest value.',
  'We may refine, combine, or redirect requests before filing them.',
  'Not every request can be taken forward, but all submissions are logged and considered.',
];

const goodRequest = [
  'Focused: Target a specific topic, time period, or public authority.',
  'Relevant: Information that serves the wider public interest.',
  'Practical: Requests that are precise and not overly broad (to avoid rejections under cost/time limits).',
];

const examples = [
  'Spending by a government department on a particular campaign.',
  'Meeting records between politicians and corporate lobbyists.',
  'Data on public health, policing, immigration, or infrastructure.',
];

export default function FoiPage() {
  return (
    <>
      <PageHero
        title="FOI Investigations"
        subtitle="Freedom of Information requests are a powerful tool for uncovering hidden facts, holding institutions accountable, and shining light on issues the public has a right to know about."
        breadcrumbs={[
          { label: 'Investigations', href: '/investigations' },
          { label: 'FOI Investigations', href: '/investigations/foi' },
        ]}
      />

      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-charcoal font-body text-lg leading-relaxed">
                At Restore Britain, our Investigations Unit regularly uses FOI law to obtain official documents, data, and records that can inform our journalism. Now, we&rsquo;re opening the door for you to suggest FOI requests for us to submit.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <ScrollReveal>
              <Card hover={false}>
                <div className="flex items-center gap-3 mb-6">
                  <FileSearch className="text-gold" size={24} />
                  <h3 className="font-heading text-xl font-bold italic text-forest-dark">How It Works</h3>
                </div>
                <ol className="space-y-4">
                  {howItWorks.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-charcoal font-body text-sm leading-relaxed">
                      <span className="w-6 h-6 rounded-full bg-forest-dark text-gold font-heading font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <Card hover={false}>
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle className="text-gold" size={24} />
                  <h3 className="font-heading text-xl font-bold italic text-forest-dark">What Makes a Good FOI Request?</h3>
                </div>
                <p className="text-charcoal font-body text-sm leading-relaxed mb-4">When submitting a suggestion, keep it:</p>
                <ul className="space-y-3 mb-6">
                  {goodRequest.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-charcoal font-body text-sm leading-relaxed">
                      <CheckCircle size={14} className="text-forest mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-charcoal font-body text-sm leading-relaxed mb-3">Examples include:</p>
                <ul className="space-y-2">
                  {examples.map((item) => (
                    <li key={item} className="text-oak-light font-body text-sm leading-relaxed pl-4 border-l-2 border-gold/30">
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-24 parchment-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Card hover={false} className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="text-gold" size={22} />
                <h3 className="font-heading text-xl font-bold italic text-forest-dark">Important Notes</h3>
              </div>
              <ul className="space-y-3 text-oak-light font-body text-sm leading-relaxed mb-8">
                <li>&bull; Submitting an FOI suggestion does not guarantee we will file it.</li>
                <li>&bull; We do not share the identity of individuals who submit suggestions.</li>
                <li>&bull; Restore Britain does not provide legal advice on FOI rights for individuals.</li>
                <li>&bull; FOI requests are filed under the Freedom of Information Act 2000 (UK).</li>
                <li>&bull; Responses belong to the public &mdash; we aim to publish the documents we receive.</li>
              </ul>
              <Button href="/contact" variant="primary" size="lg" className="w-full flex items-center justify-center gap-2">
                <Send size={18} />
                Submit Your FOI Suggestion
              </Button>
              <p className="text-stone font-body text-xs text-center mt-4">Together, we can expand public access to information and hold institutions to account.</p>
            </Card>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
