import React from 'react';
import { Clock, Newspaper } from 'lucide-react'; // Importing Newspaper icon

interface StoryCardProps {
  title: string;
  excerpt: string;
  author: {
    name: string;
  } | null;
  category: string;
  readTime: string;
  image_url: string | null; // Allowing image_url to be null or undefined
  url: string;
}

export default function StoryCard({
  title,
  excerpt,
  author,
  category,
  readTime,
  image_url,
  url,
}: StoryCardProps) {
  // Check if the image_url is valid (non-null, non-empty string)
  const isImageValid = image_url && image_url.trim() !== '';

  return (
    <article className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      {/* Conditionally render either image or icon */}
      <div className="w-full h-48 relative">
        {isImageValid ? (
          <img src={image_url} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <Newspaper className="w-12 h-12 text-gray-400" /> {/* Newspaper icon fallback */}
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center space-x-2 mb-4">
          <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-medium">
            {category}
          </span>
          <div className="flex items-center text-gray-500 text-sm">
            <Clock className="w-4 h-4 mr-1" />
            {readTime}
          </div>
        </div>
        
        <h2 className="text-xl font-bold mb-2 text-gray-900 hover:text-red-500 transition-colors">
          <a href={url}>{title}</a>
        </h2>
        <p className="text-gray-600 mb-4 line-clamp-2">{excerpt}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-sm font-medium text-gray-900">
              {author}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
