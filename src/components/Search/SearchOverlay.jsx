import React, { useEffect, useRef, useState } from 'react';
import { X, Search as SearchIcon } from 'lucide-react';
import { api } from '../../constants';

export default function SearchOverlay({ isOpen, onClose }) {
  const inputRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const fetchResults = async () => {
      if (!searchQuery.trim()) return;

      setIsLoading(true);
      setError(null); 

      try {
        const response = await api.get('/fetch-news', {
          params: {
            keyword: searchQuery,
          },
        });
        setResults(response.data); 
      } catch (err) {
        setError('Error fetching search results');
      } finally {
        setIsLoading(false);
      }
    };

    if (searchQuery) {
      fetchResults();
    } else {
      setResults([]);
    }
  }, [searchQuery]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white/95 p-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-end mb-4">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-900"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="relative">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full pl-12 pr-4 py-3 border-b-2 border-gray-200 focus:border-red-500 outline-none text-lg"
          />
        </div>

        <div className="mt-8 space-y-6">
          {!searchQuery ? (
            <div className="text-center text-gray-500">Start typing to search articles...</div>
          ) : isLoading ? (
            <div className="text-center text-gray-500">Loading...</div>
          ) : error ? (
            <div className="text-center text-red-500">{error}</div>
          ) : results.length === 0 ? (
            <div className="text-center text-gray-500">No results found for "{searchQuery}"</div>
          ) : (
            results.map((result) => (
              <a
              key={result.id}
              href={result.url} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer"
            >                <img
                  src={result.image_url}
                  alt={result.title}
                  className="w-24 h-24 object-cover rounded"
                />
                <div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-1">
                    <span className="bg-gray-200 px-2 py-1 rounded-full">{result.category}</span>
                    <span>{result.readTime}</span>
                  </div>
                  <h3 className="font-medium">{result.title}</h3>
                </div>
              </a>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
