'use client';

import { useState } from 'react';
import PageHero from '@/components/sections/PageHero';
import Card from '@/components/ui/Card';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import { Heart, Crown } from 'lucide-react';

const amounts = [25, 50, 100, 250, 1000, 2500];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);

  return (
    <>
      <PageHero
        title="Donate"
        subtitle="Help us Restore Britain."
        breadcrumbs={[{ label: 'Donate', href: '/donate' }]}
      />

      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <Card className="p-8 md:p-10" hover={false}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center">
                    <Heart className="text-burgundy" size={22} />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-forest-dark">Make a Donation</h3>
                    <p className="text-oak-light font-body text-sm">Select an amount or enter your own.</p>
                  </div>
                </div>

                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-body font-semibold text-forest-dark mb-3">Select an amount</label>
                    <div className="grid grid-cols-3 gap-3">
                      {amounts.map((amount) => (
                        <button key={amount} type="button" onClick={() => setSelectedAmount(amount)}
                          className={`py-3 font-body font-semibold text-lg transition-all border ${selectedAmount === amount ? 'bg-burgundy text-cream border-burgundy-dark' : 'bg-parchment text-charcoal border-wheat hover:border-burgundy hover:text-burgundy'}`}>
                          &pound;{amount.toLocaleString()}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-body font-semibold text-forest-dark mb-1.5">Other amount</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-oak-light font-body font-semibold">&pound;</span>
                      <input type="number" min="1" className="w-full pl-8 pr-4 py-3 border border-wheat focus:border-gold focus:ring-2 focus:ring-gold/20 bg-parchment text-charcoal font-body" placeholder="0.00"
                        onChange={(e) => { const val = parseInt(e.target.value); setSelectedAmount(isNaN(val) ? null : val); }} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-body font-semibold text-forest-dark mb-1.5">First Name *</label>
                      <input type="text" className="w-full px-4 py-3 border border-wheat focus:border-gold focus:ring-2 focus:ring-gold/20 bg-parchment text-charcoal font-body" />
                    </div>
                    <div>
                      <label className="block text-sm font-body font-semibold text-forest-dark mb-1.5">Last Name *</label>
                      <input type="text" className="w-full px-4 py-3 border border-wheat focus:border-gold focus:ring-2 focus:ring-gold/20 bg-parchment text-charcoal font-body" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-body font-semibold text-forest-dark mb-1.5">Email *</label>
                    <input type="email" className="w-full px-4 py-3 border border-wheat focus:border-gold focus:ring-2 focus:ring-gold/20 bg-parchment text-charcoal font-body" />
                  </div>

                  <div>
                    <label className="block text-sm font-body font-semibold text-forest-dark mb-1.5">Phone *</label>
                    <input type="tel" className="w-full px-4 py-3 border border-wheat focus:border-gold focus:ring-2 focus:ring-gold/20 bg-parchment text-charcoal font-body" />
                  </div>

                  <div>
                    <label className="block text-sm font-body font-semibold text-forest-dark mb-1.5">Address *</label>
                    <input type="text" className="w-full px-4 py-3 border border-wheat focus:border-gold focus:ring-2 focus:ring-gold/20 bg-parchment text-charcoal font-body mb-3" placeholder="Address line 1" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input type="text" className="w-full px-4 py-3 border border-wheat focus:border-gold focus:ring-2 focus:ring-gold/20 bg-parchment text-charcoal font-body" placeholder="City" />
                      <input type="text" className="w-full px-4 py-3 border border-wheat focus:border-gold focus:ring-2 focus:ring-gold/20 bg-parchment text-charcoal font-body" placeholder="Postcode" />
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="donate-updates"
                      defaultChecked
                      className="mt-1 border-wheat text-burgundy focus:ring-gold"
                    />
                    <label htmlFor="donate-updates" className="text-sm font-body text-oak-light">
                      Send me email updates
                    </label>
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    Donate {selectedAmount ? `\u00A3${selectedAmount.toLocaleString()}` : ''}
                  </Button>

                  <p className="text-stone font-body text-xs text-center">Contributions are not tax deductible.</p>
                </form>
              </Card>
            </ScrollReveal>

            <div>
              <ScrollReveal direction="right">
                <span className="text-gold font-accent text-lg italic">Legal Information</span>
                <h2 className="font-heading text-3xl font-bold text-forest-dark mt-2 mb-4">Donation Rules</h2>
                <div className="heritage-line w-16 mb-10" />
              </ScrollReveal>

              <div className="space-y-6">
                <ScrollReveal delay={0.1} direction="right">
                  <div className="p-5 heritage-card">
                    <p className="text-oak-light font-body text-sm leading-relaxed">
                      <em>Under the Political Parties, Elections and Referendums Act 2000 (PPERA) you must be on the electoral register in the UK excluding the Channel Islands and the Isle of Man in order to make a donation of more than &pound;500.</em>
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2} direction="right">
                  <div className="p-5 heritage-card">
                    <p className="text-oak-light font-body text-sm leading-relaxed">
                      <em>If you donate more than &pound;11,180 to Restore Britain in a calendar year, we are legally required to report the donation to the Electoral Commission, which will publish the donor&rsquo;s details. The name of the donor and the value of the donation will be sent to the Electoral Commission which will publish details on its website. The donor&rsquo;s address will not be made public.</em>
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.3} direction="right">
                  <div className="p-5 heritage-card">
                    <p className="text-oak-light font-body text-sm leading-relaxed">
                      <em>All donations will be used to support political campaigning and the operations of Restore Britain.</em>
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.4} direction="right">
                  <div className="p-5 heritage-card">
                    <p className="text-oak-light font-body text-sm leading-relaxed">
                      <em>Restore Britain reserves the right to not accept a donation or application for membership.</em>
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.5} direction="right">
                  <div className="forest-bg p-6 relative">
                    <div className="relative z-10 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center shrink-0">
                        <Crown className="text-gold" size={22} />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-bold text-cream mb-2">The Cromwell Club</h3>
                        <p className="text-cream/60 font-body text-sm leading-relaxed">
                          For an annual donation of &pound;2,500 or over, join the exclusive Cromwell Club.
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
