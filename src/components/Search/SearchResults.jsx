import React from 'react';
import { Clock } from 'lucide-react';

interface SearchResult {
  id: string;
  title: string;
  category: string;
  readTime: string;
  image: string;
}

interface SearchResultsProps {
  query: string;
}

export default function SearchResults({ query }: SearchResultsProps) {
  // Mock data - in a real app, this would come from an API
  const results: SearchResult[] = query ? [
    {
      id: '1',
      title: 'The future of AI in modern software development',
      category: 'Technology',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '2',
      title: 'Market analysis: The rising trends in global economics',
      category: 'Business',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
    }
  ] : [];

  if (!query) {
    return (
      <div className="mt-8 text-center text-gray-500">
        Start typing to search articles...
      </div>
    );
  }

  if (query && results.length === 0) {
    return (
      <div className="mt-8 text-center text-gray-500">
        No results found for "{query}"
      </div>
    );
  }

  return (
    <div className="mt-8 space-y-6">
      {results.map((result) => (
        <div key={result.id} className="flex gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
          <img
            src={result.image}
            alt={result.title}
            className="w-24 h-24 object-cover rounded"
          />
          <div>
            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-1">
              <span className="bg-gray-200 px-2 py-1 rounded-full">
                {result.category}
              </span>
              <Clock className="w-4 h-4" />
              <span>{result.readTime}</span>
            </div>
            <h3 className="font-medium">{result.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}