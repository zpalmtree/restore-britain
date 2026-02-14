'use client';

import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  hover?: boolean;
}

export default function Card({
  children,
  className = '',
  dark = false,
  hover = true,
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`p-6 ${dark ? 'dark-heritage-card' : 'heritage-card'} ${className}`}
    >
      {children}
    </motion.div>
  );
}
