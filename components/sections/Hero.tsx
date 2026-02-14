'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-start md:items-center justify-center pt-[calc(env(safe-area-inset-top)+6.5rem)] md:pt-0 overflow-hidden bg-forest-dark">
      <div className="rural-parallax-base" aria-hidden="true">
        <div className="rural-parallax-layer rural-parallax-fields rural-parallax-layer-fixed" />
        <div className="rural-parallax-layer rural-parallax-church rural-parallax-layer-fixed mix-blend-multiply opacity-45" />
        <div className="absolute inset-0 rural-ink-overlay" />
        <div className="absolute inset-0 heraldic-pattern opacity-45" />
        <div className="absolute inset-0 rural-vignette" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0 }}
          className="mb-10"
        >
          <Image
            src="/images/logo-transparent.png"
            alt="Restore Britain"
            width={400}
            height={225}
            className="h-28 sm:h-36 md:h-44 w-auto mx-auto invert opacity-90"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="heritage-line w-32 mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="font-accent text-xl sm:text-2xl md:text-3xl text-cream/92 leading-relaxed mb-4 tracking-[0.04em]"
        >
          A serious programme of national restoration
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.1 }}
          className="font-body text-cream/78 text-sm sm:text-base mb-12 max-w-xl mx-auto"
        >
          Because Britain is our country, it is our people, it is our home.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            href="/join"
            variant="primary"
            size="lg"
            className="w-full sm:w-64 justify-center"
          >
            Join the Movement
          </Button>
          <Button
            href="/policies"
            variant="outline"
            size="lg"
            className="w-full sm:w-64 justify-center"
          >
            Our Policies
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 hedge-divider" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <ChevronDown className="text-gold/65" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
