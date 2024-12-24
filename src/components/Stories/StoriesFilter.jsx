import React from 'react';
import { TrendingUp, Clock, Star } from 'lucide-react';

const filters = [
  { icon: TrendingUp, label: 'Trending' },
  { icon: Clock, label: 'Latest' },
  { icon: Star, label: 'Featured' },
];

export default function StoriesFilter() {
  return (
    <div className="flex space-x-2">
      {filters.map(({ icon: Icon, label }) => (
        <button
          key={label}
          className="flex items-center px-4 py-2 rounded-full border border-gray-200 hover:border-red-500 
            hover:text-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          <Icon className="w-4 h-4 mr-2" />
          {label}
        </button>
      ))}
    </div>
  );
}