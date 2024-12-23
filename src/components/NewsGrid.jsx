import React from 'react';
import { Clock } from 'lucide-react';

const newsItems = [
  {
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80",
    category: "Sports",
    title: "Liverpool hammer rivals for first win in Premier League",
    time: "8 min read"
  },
  {
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
    category: "Technology",
    title: "The future of AI in modern software development",
    time: "5 min read"
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    category: "Business",
    title: "Market analysis: The rising trends in global economics",
    time: "6 min read"
  }
];

export default function NewsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {newsItems.map((item, index) => (
        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <img 
            src={item.image}
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
            <button className="text-red-500 text-sm font-medium hover:text-red-600">
              Read more →
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}