'use client';

import PageHero from '@/components/sections/PageHero';
import Card from '@/components/ui/Card';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { ShieldCheck, Lock, AlertTriangle, FileText } from 'lucide-react';

const tiers = [
  {
    level: 'Tier 1',
    title: 'Low Sensitivity',
    subtitle: 'General leads',
    description: 'Use our submission link for non-sensitive tips. Do not upload confidential, personal, or classified documents. Best for: public material, small leads, or starting a conversation.',
  },
  {
    level: 'Tier 2',
    title: 'Medium Sensitivity',
    subtitle: 'Private exchanges',
    description: 'For confidential files or conversations, use Signal, our encrypted messaging channel. Best for: sharing documents or private details when risk to you is low to moderate.',
  },
  {
    level: 'Tier 3',
    title: 'High Sensitivity',
    subtitle: 'Anonymous disclosures',
    description: 'For highly confidential material, you may request a private Onion address (used only via Tor/Tails). Once submissions are complete, the address will be retired. Best for: high-risk leaks where anonymity must be protected.',
  },
];

export default function WhistleblowingPage() {
  return (
    <>
      <PageHero
        title="Whistleblowing"
        subtitle="If you have information you believe is in the public interest, there are secure ways to share it with us."
        breadcrumbs={[
          { label: 'Investigations', href: '/investigations' },
          { label: 'Whistleblowing', href: '/investigations/whistleblowing' },
        ]}
      />

      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <ScrollReveal>
                <span className="text-gold font-accent text-lg italic">Speak Truth</span>
                <h2 className="font-heading text-3xl font-bold text-forest-dark mt-2 mb-6">Your Protection Comes First</h2>
                <div className="heritage-line w-16 mb-8" />
                <div className="space-y-4 text-charcoal font-body leading-relaxed mb-10">
                  <p>At Restore Britain, we believe the public has a right to know the truth, and we take the safety of those who come forward very seriously.</p>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>We never ask for unnecessary personal details.</li>
                    <li>All submissions are handled securely and stored offline.</li>
                    <li>Every tip is treated with care, but not every submission can be investigated.</li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="forest-bg p-6 relative mb-8">
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <AlertTriangle className="text-gold" size={20} />
                      <h3 className="font-heading font-bold text-cream">Legal Notice</h3>
                    </div>
                    <div className="space-y-3 text-cream/60 font-body text-sm leading-relaxed">
                      <p><strong className="text-cream/80">Official Secrets Act 1989:</strong> If you are bound by the Act, disclosing certain categories of information is a criminal offence. There is no public interest defence.</p>
                      <p><strong className="text-cream/80">Confidentiality &amp; contracts:</strong> If you are bound by an employment contract or confidentiality agreement, disclosure may expose you to civil or criminal liability.</p>
                      <p>We cannot give legal advice. If you are uncertain, please seek independent legal advice before submitting.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="p-5 heritage-card">
                  <div className="flex items-center gap-3 mb-3">
                    <Lock className="text-gold" size={18} />
                    <h3 className="font-heading font-bold text-forest-dark">Data Protection</h3>
                  </div>
                  <p className="text-oak-light font-body text-sm leading-relaxed">
                    We comply with UK GDPR and the Data Protection Act 2018, applying the journalism exemption where appropriate. Your personal data is only processed where necessary for journalism in the public interest. We minimise what we collect, keep it encrypted, and delete it when no longer required.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="right">
              <div>
                <SectionHeading title="How to Blow the Whistle" subtitle="We use a tiered system depending on the sensitivity of your information." />
                <div className="space-y-6">
                  {tiers.map((tier, i) => (
                    <Card key={tier.level} className="group">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full border border-gold/30 bg-forest-dark flex items-center justify-center shrink-0">
                          <span className="text-gold font-heading font-bold text-sm">{tier.level.split(' ')[1]}</span>
                        </div>
                        <div>
                          <span className="inline-block px-3 py-1 text-xs font-body font-semibold uppercase tracking-wider text-gold bg-gold/10 border border-gold/20 mb-2">{tier.level} &mdash; {tier.subtitle}</span>
                          <h3 className="font-heading font-bold text-forest-dark mb-2">{tier.title}</h3>
                          <p className="text-oak-light font-body text-sm leading-relaxed">{tier.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
                <div className="mt-8 flex flex-col gap-4">
                  <Button href="/contact" variant="primary" size="lg" className="w-full">Submit a Tip (Tier 1)</Button>
                  <Button href="/contact" variant="secondary" size="lg" className="w-full flex items-center justify-center gap-2">
                    <FileText size={18} />
                    Request Whistleblower Guide Pack
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
