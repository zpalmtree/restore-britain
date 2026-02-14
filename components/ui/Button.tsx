'use client';

import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-burgundy text-cream hover:bg-burgundy-dark border border-burgundy-dark shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-colors duration-200',
  secondary:
    'bg-forest text-cream hover:bg-forest-dark border border-forest-dark shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-colors duration-200',
  outline:
    'border border-gold text-gold hover:bg-gold/15 hover:text-gold-light transition-colors duration-200',
  ghost:
    'text-burgundy hover:text-burgundy-dark transition-colors duration-200',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-7 py-3 text-base',
  lg: 'px-8 py-3.5 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center font-body font-semibold tracking-[0.06em] ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
