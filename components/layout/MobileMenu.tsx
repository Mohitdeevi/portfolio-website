import { motion } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="md:hidden"
    >
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="#" className="block text-gray-900 dark:text-white hover:bg-gray-700 hover:text-white">Home</a>
        <a href="#" className="block text-gray-900 dark:text-white hover:bg-gray-700 hover:text-white">Portfolio</a>
        <a href="#" className="block text-gray-900 dark:text-white hover:bg-gray-700 hover:text-white">Contact</a>
      </div>
    </motion.div>
  );
};
