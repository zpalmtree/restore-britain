'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
}

const directions = {
  up: { y: 16, x: 0 },
  down: { y: -16, x: 0 },
  left: { x: 16, y: 0 },
  right: { x: -16, y: 0 },
};

export default function ScrollReveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.45,
}: ScrollRevealProps) {
  const offset = directions[direction];
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const node = ref.current;
    if (!node) return;

    const isNearViewport = () => {
      const rect = node.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      return rect.top <= viewportHeight - 80 && rect.bottom >= 0;
    };

    const reveal = () => setVisible(true);

    // Handle initial paint after route transitions where the observer can miss
    // the first in-view event.
    if (isNearViewport()) {
      const raf = requestAnimationFrame(reveal);
      return () => cancelAnimationFrame(raf);
    }

    if (typeof IntersectionObserver === 'undefined') {
      const raf = requestAnimationFrame(reveal);
      return () => cancelAnimationFrame(raf);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: '0px 0px -80px 0px',
        threshold: 0.01,
      }
    );

    observer.observe(node);

    const fallback = window.setTimeout(() => {
      if (isNearViewport()) {
        reveal();
        observer.disconnect();
      }
    }, 350);

    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, [prefersReducedMotion]);

  const hiddenState = { opacity: 0, ...offset };
  const visibleState = { opacity: 1, x: 0, y: 0 };

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? false : hiddenState}
      animate={prefersReducedMotion || visible ? visibleState : hiddenState}
      transition={
        prefersReducedMotion
          ? undefined
          : { duration, delay, ease: 'easeInOut' }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
