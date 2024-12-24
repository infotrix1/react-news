import React, { useState, useEffect } from 'react';
import FeaturedSlide from './FeaturedSlide';
import SliderDots from './SliderDots';

// Mock data for the featured articles
const featuredArticles = [
  // Your article data
];

export default function FeaturedSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredArticles.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-black rounded-xl overflow-hidden">
      {featuredArticles.map((article, index) => (
        <FeaturedSlide
          key={index}
          title={article.title}
          excerpt={article.excerpt}
          category={article.category}
          readTime={article.readTime}
          image={article.image}
          isActive={currentSlide === index} // Add class based on active state
        />
      ))}
      <SliderDots
        total={featuredArticles.length}
        current={currentSlide}
        onSelect={setCurrentSlide} // Allow changing slides on dot click
      />
    </div>
  );
}
