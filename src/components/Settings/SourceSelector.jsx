import React from 'react';
import { useNewsPreferences } from '../../hooks/useNewsPreferences';

const sources = [
  { id: 'reuters', name: 'Reuters' },
  { id: 'ap', name: 'Associated Press' },
  { id: 'bloomberg', name: 'Bloomberg' },
  { id: 'techcrunch', name: 'TechCrunch' },
  { id: 'verge', name: 'The Verge' },
];

export default function SourceSelector() {
  const { preferences, updateSources } = useNewsPreferences();

  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900 mb-4">News Sources</h3>
      <div className="space-y-3">
        {sources.map((source) => (
          <label key={source.id} className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 text-red-500 focus:ring-red-500 border-gray-300 rounded"
              checked={preferences.sources.includes(source.id)}
              onChange={(e) => {
                const isChecked = e.target.checked;
                updateSources(prev =>
                  isChecked
                    ? [...prev, source.id]
                    : prev.filter(id => id !== source.id)
                );
              }}
            />
            <span className="ml-3 text-sm text-gray-900">{source.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
}