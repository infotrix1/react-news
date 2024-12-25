import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { api } from '../constants';
import Preloader from "../components/Preloader/Preloader";
import { usePreloader } from "../hooks/usePreloader";

export default function NewsGrid() {
  const [newsItems, setNewsItems] = useState([]);
  const [error, setError] = useState(null);

  const isLoading = usePreloader();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await api.get('/fetch-news');
        
        setNewsItems(response.data);
      } catch (err) {
        setError('Failed to fetch news');
        console.error('Error fetching news:', err);
      }
    };

    fetchNews();
  }, []); 

  if (isLoading) {
    return <Preloader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {newsItems.map((item, index) => (
        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <img 
            src={item.image_url}
            alt={item.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <div className="flex items-center space-x-2 text-gray-500 mb-2">
              <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">{item.category}</span>
              <Clock className="w-4 h-4" />
              <span className="text-sm">{item.time}</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <a href={item.url} className="text-red-500 text-sm font-medium hover:text-red-600">
            Read more →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
