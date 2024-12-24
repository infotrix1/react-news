import React from 'react';
import { Settings as SettingsIcon } from 'lucide-react';

export default function SettingsLayout({ children, title }) {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex items-center space-x-3 mb-6">
          <SettingsIcon className="w-8 h-8 text-gray-700" />
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        </div>
        <div className="bg-white rounded-lg shadow">
          {children}
        </div>
      </div>
    </div>
  );
}
