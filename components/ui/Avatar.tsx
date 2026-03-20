import { ImgHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: 'small' | 'medium' | 'large';
}

export const Avatar = ({ size = 'medium', className, ...props }: AvatarProps) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16',
  };

  return (
    <img
      className={cn('rounded-full', sizeClasses[size], className)}
      {...props}
    />
  );
};
