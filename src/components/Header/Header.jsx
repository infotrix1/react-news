import React, { useState } from 'react';
import { Search, Bell, Settings, Menu, X } from 'lucide-react';
import NavLinks from './NavLinks';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchOpen = () => {
    setIsSearchOpen(true);
    setSearchQuery('');
  };

  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-red-500">Buletin</h1>
          <nav className="hidden lg:block ml-12">
            <NavLinks className="flex space-x-8" />
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-4">
            <button 
              onClick={handleSearchOpen}
              className="text-gray-500 hover:text-gray-900"
            >
              <Search className="w-5 h-5" />
            </button>
            <Bell className="w-5 h-5 text-gray-500 cursor-pointer" />
            <Settings className="w-5 h-5 text-gray-500 cursor-pointer" />
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden text-gray-500 hover:text-gray-900"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg shadow-lg w-96">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full p-2 border rounded"
            />
            <button onClick={() => setIsSearchOpen(false)} className="absolute top-2 right-2 text-gray-500">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white lg:hidden">
          <div className="p-4 flex justify-end">
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-500 hover:text-gray-900">
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="px-4">
            <NavLinks className="flex flex-col space-y-4" />
          </nav>
        </div>
      )}
    </header>
  );
}
