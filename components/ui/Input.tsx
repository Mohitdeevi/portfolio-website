import { InputHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = ({ label, className, ...props }: InputProps) => {
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>
      <input
        className={cn(
          'px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary',
          'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100',
          className
        )}
        {...props}
      />
    </div>
  );
};
