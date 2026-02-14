'use client';

import PageHero from '@/components/sections/PageHero';
import Card from '@/components/ui/Card';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { newsArticles } from '@/lib/data';
import { Calendar, User, ExternalLink } from 'lucide-react';

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="News"
        subtitle="News and updates from Restore Britain."
        breadcrumbs={[{ label: 'News', href: '/news' }]}
      />

      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, i) => (
              <ScrollReveal key={article.id} delay={i * 0.1}>
                <a
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <Card className="h-full flex flex-col group cursor-pointer">
                    <h3 className="font-heading text-lg font-bold text-forest-dark mb-3 group-hover:text-burgundy transition-colors">
                      {article.title}
                    </h3>

                    <p className="font-body text-sm text-oak-light leading-relaxed mb-4 flex-1">
                      {article.summary}
                    </p>

                    <div className="flex items-center justify-between text-sm text-stone font-body pt-4 border-t border-wheat">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={14} />
                          {new Date(article.date).toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <User size={14} />
                          {article.author}
                        </div>
                      </div>
                      <ExternalLink size={14} className="text-burgundy group-hover:text-burgundy-dark transition-colors" />
                    </div>
                  </Card>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
