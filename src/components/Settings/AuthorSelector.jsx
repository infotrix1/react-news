import React from 'react';
import { Search } from 'lucide-react';
import { useNewsPreferences } from '../../hooks/useNewsPreferences';

const authors = [
  { id: '1', name: 'Sarah Johnson', expertise: 'Technology' },
  { id: '2', name: 'Michael Chen', expertise: 'Business' },
  { id: '3', name: 'Emma Davis', expertise: 'Science' },
  { id: '4', name: 'James Wilson', expertise: 'Politics' },
];

export default function AuthorSelector() {
  const { preferences, updateAuthors } = useNewsPreferences();
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredAuthors = authors.filter(author =>
    author.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Favorite Authors</h3>
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search authors..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
        />
      </div>
      <div className="space-y-3">
        {filteredAuthors.map((author) => (
          <label key={author.id} className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
            <input
              type="checkbox"
              className="h-4 w-4 text-red-500 focus:ring-red-500 border-gray-300 rounded"
              checked={preferences.authors.includes(author.id)}
              onChange={(e) => {
                const isChecked = e.target.checked;
                updateAuthors(prev =>
                  isChecked
                    ? [...prev, author.id]
                    : prev.filter(id => id !== author.id)
                );
              }}
            />
            <div className="ml-3">
              <div className="text-sm font-medium text-gray-900">{author.name}</div>
              <div className="text-xs text-gray-500">{author.expertise}</div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}