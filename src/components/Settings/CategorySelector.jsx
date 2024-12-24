import React from 'react';
import { useNewsPreferences } from '../../hooks/useNewsPreferences';

const categories = [
  { id: 'technology', label: 'Technology' },
  { id: 'business', label: 'Business' },
  { id: 'sports', label: 'Sports' },
  { id: 'entertainment', label: 'Entertainment' },
  { id: 'science', label: 'Science' },
  { id: 'health', label: 'Health' },
  { id: 'politics', label: 'Politics' },
];

export default function CategorySelector() {
  const { preferences, updateCategories } = useNewsPreferences();

  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Categories</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {categories.map((category) => (
          <label
            key={category.id}
            className="relative flex items-center justify-center p-4 border rounded-lg cursor-pointer
              hover:bg-gray-50 transition-colors"
          >
            <input
              type="checkbox"
              className="absolute h-4 w-4 top-3 right-3 text-red-500 focus:ring-red-500 border-gray-300 rounded"
              checked={preferences.categories.includes(category.id)}
              onChange={(e) => {
                const isChecked = e.target.checked;
                updateCategories(prev => 
                  isChecked 
                    ? [...prev, category.id]
                    : prev.filter(id => id !== category.id)
                );
              }}
            />
            <span className="text-sm font-medium text-gray-900">{category.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}