import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import Header from '../components/Header/Header';
import StoryCard from '../components/Stories/StoryCard';
import { api } from '../constants';
import Preloader from "../components/Preloader/Preloader"; 

export default function Category() {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { categoryName } = useParams();

  useEffect(() => {
    async function fetchCategoryData() {
      if (!categoryName) return; 

      setLoading(true);

      try {
        const response = await api.get('/fetch-news', {
          params: {
            filters: {
              category: [categoryName] 
            }
          }
        });
        setCategory(response.data); 
      } catch (error) {
        setError(error.message); 
      } finally {
        setLoading(false); 
      }
    }

    fetchCategoryData(); 
  }, [categoryName]); 

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-12">
          <Preloader /> 
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-12">
          <p>Error: {error}</p> 
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Categories { categoryName }</h1>
            <p className="text-gray-600">Discover thought-provoking articles from our community</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.map((story, index) => (
            <StoryCard key={index} {...story} />
          ))}
        </div>
      </div>
    </div>
  );
}
