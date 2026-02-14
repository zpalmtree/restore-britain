'use client';

import PageHero from '@/components/sections/PageHero';
import Card from '@/components/ui/Card';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import { Mail, MapPin } from 'lucide-react';

const contactInfo = [
  { icon: Mail, title: 'General Enquiries', detail: 'info@restorebritain.org.uk', href: 'mailto:info@restorebritain.org.uk' },
  { icon: Mail, title: 'Press Enquiries', detail: 'media@restorebritain.org.uk', href: 'mailto:media@restorebritain.org.uk' },
  { icon: MapPin, title: 'Location', detail: 'United Kingdom', href: undefined },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with Restore Britain."
        breadcrumbs={[{ label: 'Contact', href: '/contact' }]}
      />

      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <Card className="p-8 md:p-10" hover={false}>
                <h2 className="font-heading text-2xl font-bold italic text-forest-dark mb-2">Send a Message</h2>
                <p className="text-oak-light font-body text-sm mb-8">Fill out the form below and we will get back to you.</p>
                <form className="space-y-5">
                  <div>
                    <label className="block text-sm font-body font-semibold text-forest-dark mb-1.5">Contact us</label>
                    <input type="text" className="w-full px-4 py-3 border border-wheat focus:border-gold focus:ring-2 focus:ring-gold/20 bg-parchment text-charcoal font-body" />
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
                  <div className="flex items-start gap-3 pt-2">
                    <input
                      type="checkbox"
                      id="email-updates"
                      defaultChecked
                      className="mt-1 border-wheat text-burgundy focus:ring-gold"
                    />
                    <label htmlFor="email-updates" className="text-sm font-body text-oak-light">
                      Send me email updates
                    </label>
                  </div>
                  <div>
                    <label className="block text-sm font-body font-semibold text-forest-dark mb-1.5">Address (Street, City, County, Postcode)</label>
                    <input type="text" className="w-full px-4 py-3 border border-wheat focus:border-gold focus:ring-2 focus:ring-gold/20 bg-parchment text-charcoal font-body" />
                  </div>
                  <Button type="submit" variant="primary" size="lg" className="w-full">Send Message</Button>
                </form>
              </Card>
            </ScrollReveal>

            <div>
              <ScrollReveal direction="right">
                <span className="text-gold font-accent text-lg italic">Reach Us</span>
                <h2 className="font-heading text-3xl font-bold italic text-forest-dark mt-2 mb-4">Get in Touch</h2>
                <div className="heritage-line w-16 mb-10" />
              </ScrollReveal>

              <div className="space-y-6">
                {contactInfo.map((item, i) => (
                  <ScrollReveal key={item.title} delay={i * 0.1} direction="right">
                    <div className="flex items-start gap-4 p-5 heritage-card">
                      <div className="w-12 h-12 rounded-full border border-gold/30 bg-forest-dark flex items-center justify-center shrink-0">
                        <item.icon className="text-gold" size={20} />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold italic text-forest-dark mb-1">{item.title}</h3>
                        {item.href ? (
                          <a href={item.href} className="text-burgundy font-body font-semibold text-sm hover:underline">{item.detail}</a>
                        ) : (
                          <p className="text-burgundy font-body font-semibold text-sm">{item.detail}</p>
                        )}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
