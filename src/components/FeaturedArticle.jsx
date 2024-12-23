import React from 'react';
import { Clock } from 'lucide-react';

export default function FeaturedArticle() {
  return (
    <div className="relative bg-black rounded-xl overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=2000&q=80"
        alt="Featured article"
        className="w-full h-[400px] object-cover opacity-80"
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
        <div className="flex items-center space-x-2 text-white/80 mb-2">
          <span className="bg-red-500 px-2 py-1 rounded-full text-xs">Movies</span>
          <Clock className="w-4 h-4" />
          <span className="text-sm">4 min read</span>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">
          Where To Watch 'John Wick: Chapter 4'
        </h2>
        <p className="text-white/80">
          The latest installment in the John Wick franchise, John Wick: Chapter 4's streaming release...
        </p>
      </div>
    </div>
  );
}