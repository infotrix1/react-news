import React from 'react';
import { Clock } from 'lucide-react';

export default function FeaturedSlide({
  title,
  excerpt,
  category,
  readTime,
  image,
  isActive
}) {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-500 ${
        isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
      }`}
    >
      <div className="relative h-full min-h-[400px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="flex items-center space-x-2 text-white/80 mb-3">
            <span className="bg-red-500 px-3 py-1 rounded-full text-sm">{category}</span>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span className="text-sm">{readTime}</span>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">{title}</h2>
          <p className="text-white/90 text-lg max-w-3xl">{excerpt}</p>
        </div>
      </div>
    </div>
  );
}
