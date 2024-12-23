import React from 'react';
import { Newspaper } from 'lucide-react';

export default function Preloader() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="relative">
          <Newspaper className="w-12 h-12 text-red-500 animate-pulse" />
          <div className="absolute inset-0 border-4 border-red-500/30 rounded-full animate-ripple"></div>
        </div>
        <h2 className="mt-4 text-xl font-semibold text-gray-800">Loading Buletin</h2>
        <p className="mt-2 text-sm text-gray-500">Please wait a moment...</p>
      </div>
    </div>
  );
}