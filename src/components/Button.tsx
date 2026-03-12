import { ReactNode } from 'react';
import clsx from 'clsx';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'ghost';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className,
  type = 'button',
}: ButtonProps) {
  const baseClasses =
    'relative inline-flex items-center justify-center px-6 py-3 font-semibold text-[15px] tracking-[0.04em] transition-all duration-300 overflow-hidden group';

  const variants = {
    primary: 'bg-gold text-void hover:bg-gold-light',
    ghost: 'bg-transparent border-[1.5px] border-gold/60 text-gold rounded-md hover:bg-gold/10 hover:border-gold',
  };

  const classes = clsx(baseClasses, variants[variant], className);

  // Shimmer effect for primary button
  const shimmer = variant === 'primary' && (
    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
  );

  if (href) {
    if (href.startsWith('http') || href.startsWith('mailto:')) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {shimmer}
          <span className="relative z-10">{children}</span>
        </a>
      );
    }
    return (
      <Link to={href} className={classes}>
        {shimmer}
        <span className="relative z-10">{children}</span>
      </Link>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={classes}
      type={type}
    >
      {shimmer}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
