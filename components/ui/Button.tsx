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
    'bg-burgundy text-cream hover:bg-burgundy-dark border border-burgundy-dark transition-all duration-300',
  secondary:
    'bg-forest text-cream hover:bg-forest-dark border border-forest-dark transition-all duration-300',
  outline:
    'border-2 border-gold text-gold hover:bg-gold hover:text-forest-dark transition-all duration-300',
  ghost:
    'text-burgundy hover:text-burgundy-dark transition-all duration-300',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-7 py-3 text-base',
  lg: 'px-9 py-4 text-lg',
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
  const classes = `inline-flex items-center justify-center font-body font-semibold tracking-wide ${variants[variant]} ${sizes[size]} ${className}`;

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
