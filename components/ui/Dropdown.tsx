import { ReactNode, useState } from 'react';
import { cn } from '../../lib/utils';

interface DropdownProps {
  label: string;
  children: ReactNode;
}

export const Dropdown = ({ label, children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-primary text-white rounded-md"
      >
        {label}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg">
          {children}
        </div>
      )}
    </div>
  );
};
