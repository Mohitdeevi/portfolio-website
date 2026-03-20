import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <div className={cn('p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md', className)}>
      {children}
    </div>
  );
};
