import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { api } from '../../constants';  

export default function FeaturedSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [featuredArticles, setFeaturedArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await api.get('/featured-news');
        setFeaturedArticles(response.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  useEffect(() => {
    if (featuredArticles.length === 0) return; 

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredArticles.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [featuredArticles.length]);

  if (featuredArticles.length === 0) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="relative bg-black rounded-xl overflow-hidden h-[400px]">
      <div className="relative w-full h-full">
        {featuredArticles.map((article, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${currentSlide === index ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            style={{ transform: currentSlide === index ? 'translateX(0)' : 'translateX(100%)' }}
          >
            <div className="relative h-[400px]">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center space-x-2 text-white/80 mb-3">
                  <span className="bg-red-500 px-3 py-1 rounded-full text-sm">{article.category}</span>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm">{article.readTime}</span>
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-white mb-3">
                  {article.title}
                </h2>
                <p className="text-white/90 text-lg max-w-3xl">
                  {article.excerpt}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {featuredArticles.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? 'bg-red-500 w-6'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
