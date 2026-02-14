'use client';

import PageHero from '@/components/sections/PageHero';
import Card from '@/components/ui/Card';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import {
  Vote,
  Users,
  BookOpen,
  Shield,
  Crown,
} from 'lucide-react';

const benefits = [
  {
    icon: Vote,
    title: 'Direct Democracy',
    description: 'Vote on policy ratification and shape the manifesto.',
  },
  {
    icon: BookOpen,
    title: 'Propose Policy',
    description: 'Submit your own policy proposals for members to vote on.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Join a movement of people who believe Britain can be restored.',
  },
  {
    icon: Shield,
    title: 'Stand as Candidate',
    description: 'Represent Restore Britain at the next General Election.',
  },
];

export default function JoinPage() {
  return (
    <>
      <PageHero
        title="Join Us"
        subtitle="Restore Britain is a political party for those who believe that our nation has been hollowed out by weak leadership, broken institutions, and a political class that no longer serves the people."
        breadcrumbs={[{ label: 'Join Us', href: '/join' }]}
      />

      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Benefits */}
            <div>
              <ScrollReveal>
                <span className="text-gold font-accent text-lg italic">Why Join</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest-dark mt-2 mb-4">
                  An Entirely New Way of Doing Politics
                </h2>
                <div className="heritage-line w-16 mb-8" />
                <p className="text-charcoal font-body text-lg mb-4 leading-relaxed">
                  If you believe in low tax, small government, secure borders, national pride, traditional Christian principles, free speech, and direct democracy &mdash; you&rsquo;re in the right place.
                </p>
                <p className="text-charcoal font-body text-lg mb-10 leading-relaxed">
                  Let&rsquo;s Restore Britain &mdash; together.
                </p>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {benefits.map((benefit, i) => (
                  <ScrollReveal key={benefit.title} delay={i * 0.1}>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center shrink-0">
                        <benefit.icon className="text-burgundy" size={18} />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-forest-dark mb-1">
                          {benefit.title}
                        </h3>
                        <p className="text-oak-light font-body text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Cromwell Club */}
              <ScrollReveal delay={0.5}>
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

            {/* Signup Form */}
            <ScrollReveal direction="right">
              <Card className="p-8 md:p-10" hover={false}>
                <h3 className="font-heading text-2xl font-bold text-forest-dark mb-2">
                  Become a Member
                </h3>
                <p className="text-oak-light font-body text-sm mb-2">
                  Membership is &pound;20.00 paid annually.
                </p>
                <p className="text-stone font-body text-xs mb-8">
                  By joining Restore Britain you agree to comply with our terms and conditions.
                </p>

                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-body font-semibold text-forest-dark mb-1.5">
                        First Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-wheat focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors bg-parchment text-charcoal font-body"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-body font-semibold text-forest-dark mb-1.5">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-wheat focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors bg-parchment text-charcoal font-body"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-body font-semibold text-forest-dark mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-wheat focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors bg-parchment text-charcoal font-body"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-body font-semibold text-forest-dark mb-1.5">
                      Address (Street, City, County, Postcode)
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-wheat focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors bg-parchment text-charcoal font-body"
                    />
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <input
                      type="checkbox"
                      id="updates"
                      defaultChecked
                      className="mt-1 border-wheat text-burgundy focus:ring-gold"
                    />
                    <label htmlFor="updates" className="text-sm font-body text-oak-light">
                      Send me email updates
                    </label>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                  >
                    Join Restore Britain &mdash; &pound;20/year
                  </Button>

                  <div className="space-y-2 pt-4">
                    <p className="text-stone font-body text-xs">
                      <em>Under the Political Parties, Elections and Referendums Act 2000 (PPERA) you must be on the electoral register in the UK excluding the Channel Islands and the Isle of Man in order to make a donation of more than &pound;500.</em>
                    </p>
                    <p className="text-stone font-body text-xs">
                      <em>Restore Britain reserves the right to not accept a donation or application for membership.</em>
                    </p>
                  </div>
                </form>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
