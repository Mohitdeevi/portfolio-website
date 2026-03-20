import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface BadgeProps {
  children: ReactNode;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}

export const Badge = ({ children, color = 'primary' }: BadgeProps) => {
  return (
    <span className={cn('px-2 py-1 text-xs font-semibold rounded-full', `bg-${color} text-white`)}>
      {children}
    </span>
  );
};
