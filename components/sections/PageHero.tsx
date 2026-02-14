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
    <section className="relative bg-forest-dark pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-forest-dark via-forest to-forest-dark" />

      {/* Subtle warm glow */}
      <div className="absolute top-0 right-1/4 w-96 h-64 bg-gradient-radial from-gold/5 to-transparent rounded-full blur-3xl" />

      <div className="absolute bottom-0 left-0 right-0 hedge-divider" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumbs && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-sm text-cream/50 font-body mb-6"
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

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold italic text-cream mb-4"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-cream/60 font-body text-lg md:text-xl max-w-2xl leading-relaxed"
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
    </section>
  );
}
