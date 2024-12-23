import React from 'react';
import { Search, Bell, Settings } from 'lucide-react';

export default function Header() {
  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-12">
          <h1 className="text-2xl font-bold text-red-500">Buletin</h1>
          <nav>
            <ul className="flex space-x-8">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Stories</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Creator</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Community</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Subscribe</a></li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Search className="w-5 h-5 text-gray-500 cursor-pointer" />
          <Bell className="w-5 h-5 text-gray-500 cursor-pointer" />
          <Settings className="w-5 h-5 text-gray-500 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}