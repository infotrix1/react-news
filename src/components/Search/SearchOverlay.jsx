import React, { useEffect, useRef } from 'react';
import { X, Search as SearchIcon } from 'lucide-react';
import SearchResults from './SearchResults';

export default function SearchOverlay({ 
  isOpen, 
  onClose, 
  searchQuery, 
  onSearchChange 
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white/95 p-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-end mb-4">
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-900"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="relative">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search articles..."
            className="w-full pl-12 pr-4 py-3 border-b-2 border-gray-200 focus:border-red-500 outline-none text-lg"
          />
        </div>

        <SearchResults query={searchQuery} />
      </div>
    </div>
  );
}
