'use client';

import Link from 'next/link';
import Card from '@/components/ui/Card';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { newsArticles } from '@/lib/data';
import { Calendar, ArrowRight } from 'lucide-react';

export default function LatestNews() {
  const latest = newsArticles.slice(0, 3);

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Latest News"
            subtitle="News and updates from Restore Britain."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {latest.map((article, i) => (
            <ScrollReveal key={article.id} delay={i * 0.15}>
              <Link href={article.href}>
                <Card className="h-full flex flex-col group cursor-pointer">
                  <h3 className="font-heading text-lg font-bold italic text-charcoal mb-3 group-hover:text-burgundy transition-colors">
                    {article.title}
                  </h3>

                  <div className="flex items-center justify-between text-sm text-stone font-body pt-4 border-t border-wheat mt-auto">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {new Date(article.date).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </div>
                    <span className="italic">{article.author}</span>
                  </div>
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center">
          <Button href="/news" variant="ghost" className="gap-2 text-charcoal hover:text-burgundy">
            All News <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}
