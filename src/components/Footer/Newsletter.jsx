import React from 'react';

export default function Newsletter() {
  return (
    <div className="max-w-md">
      <h3 className="text-lg font-semibold mb-2">Get our weekly newsletter</h3>
      <p className="text-gray-600 text-sm mb-4">
        Stay updated with the latest news and articles from Dripnews
      </p>
      <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}