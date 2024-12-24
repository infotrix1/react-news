import React from 'react';
import Header from '../components/Header/Header';
import StoriesFilter from '../components/Stories/StoriesFilter';
import StoriesGrid from '../components/Stories/StoriesGrid';

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Stories</h1>
            <p className="text-gray-600">Discover thought-provoking articles from our community</p>
          </div>
          <div className="mt-4 md:mt-0">
            <StoriesFilter />
          </div>
        </div>
        <StoriesGrid />
      </div>
    </div>
  );
}