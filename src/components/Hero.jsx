import React from 'react';

export default function Hero() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">WELCOME TO Dripnews</h2>
        <p className="text-xl text-gray-600">
          Craft narratives{' '}
          <span className="text-blue-500">✍️</span> that ignite{' '}
          <span className="text-red-500">inspiration</span>,{' '}
          <span className="text-green-500">knowledge</span>, and{' '}
          <span className="text-yellow-500">entertainment</span> 🎬
        </p>
      </div>
    </div>
  );
}