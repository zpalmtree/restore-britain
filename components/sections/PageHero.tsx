'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href: string }[];
}

export default function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative min-h-[24rem] md:min-h-[28rem] pt-32 pb-20 overflow-hidden bg-forest-dark">
      <div className="rural-parallax-base" aria-hidden="true">
        <div className="rural-parallax-layer rural-parallax-church rural-parallax-layer-fixed" />
        <div className="absolute inset-0 rural-band-overlay" />
        <div className="absolute inset-0 heraldic-pattern opacity-35" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 hedge-divider" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[13rem] md:min-h-[16rem] flex-col justify-center">
          <div className="mb-6 min-h-6">
            {breadcrumbs && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-2 text-sm text-cream/75 font-body"
              >
                <Link href="/" className="hover:text-gold transition-colors">
                  Home
                </Link>
                {breadcrumbs.map((crumb) => (
                  <span key={crumb.href} className="flex items-center gap-2">
                    <ChevronRight size={14} />
                    <Link
                      href={crumb.href}
                      className="hover:text-gold transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  </span>
                ))}
              </motion.div>
            )}
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold text-cream mb-4"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-cream/80 font-body text-lg md:text-xl max-w-2xl leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="heritage-line w-24 mt-8 origin-left"
          />
        </div>
      </div>
    </section>
  );
}
