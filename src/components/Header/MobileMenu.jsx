import React from 'react';
import { X } from 'lucide-react';
import NavLinks from './NavLinks';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white lg:hidden">
      <div className="p-4 flex justify-end">
        <button onClick={onClose} className="text-gray-500 hover:text-gray-900">
          <X className="w-6 h-6" />
        </button>
      </div>
      <nav className="px-4">
        <NavLinks className="flex flex-col space-y-4" />
      </nav>
    </div>
  );
}