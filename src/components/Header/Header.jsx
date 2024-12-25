import React, { useState, useRef, useEffect } from 'react';
import { Search, Bell, Settings, Menu, X, LogOut } from 'lucide-react';
import { Link, useHistory } from 'react-router-dom'; 
import NavLinks from './NavLinks';
import SearchOverlay from '../Search/SearchOverlay';
import { api } from '../../constants';
import { toast } from 'react-toastify'; 

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchOpen = () => {
    setIsSearchOpen(true);
    setSearchQuery('');
  };

  const handleLogout = async () => {
    try {
      const response = await api.post('/logout'); 

      if (response.status === 200) {
        localStorage.removeItem('token'); 
        toast.success('Logged out successfully!'); 
        window.location = '/login'   
      } else {
        console.error('Failed to log out');
      }
    } catch (error) {
      console.error('An error occurred during logout:', error);
    }
  };

  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-red-500">
            Dripnews
          </Link>          
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
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-500 hover:text-gray-900"
                aria-label="Settings"
              >
                <Settings className="w-5 h-5" />
              </button>

              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
                  <Link
                    to="/settings"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
          
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden text-gray-500 hover:text-gray-900"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white lg:hidden">
          <div className="p-4 flex justify-end">
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-500 hover:text-gray-900">
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="px-4 py-2">
            <button 
              onClick={() => {
                handleSearchOpen();
                setIsMobileMenuOpen(false); // Close the menu after opening search
              }}
              className="flex items-center w-full px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              <Search className="w-5 h-5 mr-3" />
              Search
            </button>
          </div>

          <nav className="px-4 py-2">
            <NavLinks className="flex flex-col space-y-4" />
          </nav>

          <div className="px-4 py-2 border-t mt-4">
            <Link
              to="/settings"
              className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Settings className="w-5 h-5 mr-3" />
              Settings
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-3 text-red-600 hover:bg-gray-50 rounded-lg mt-2"
            >
              <LogOut className="w-5 h-5 mr-3" />
              Logout
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
