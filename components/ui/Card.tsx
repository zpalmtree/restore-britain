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
  hover = false,
}: CardProps) {
  const classes = `p-6 ${dark ? 'dark-heritage-card' : 'heritage-card'} ${className}`;

  if (!hover) {
    return <div className={classes}>{children}</div>;
  }

  return (
    <motion.div
      whileHover={{ scale: 1.002 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={classes}
    >
      {children}
    </motion.div>
  );
}
