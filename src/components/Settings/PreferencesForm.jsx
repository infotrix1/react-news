import React, { useState, useEffect } from 'react';
import { api } from '../../constants'; 
import { Search } from 'lucide-react'; 
import { toast } from 'react-toastify'; 

export default function PreferencesForm({
  preferences = { categories: [], authors: [], sources: [] },
  updateCategories,
  updateAuthors,
  updateSources
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [categories, setCategories] = useState([]);
  const [categoryLoading, setCategoryLoading] = useState(true);
  const [categoryError, setCategoryError] = useState(null);
  const [searchCategoryQuery, setSearchCategoryQuery] = useState('');

  const [authors, setAuthors] = useState([]);
  const [authorLoading, setAuthorLoading] = useState(true);
  const [authorError, setAuthorError] = useState(null);
  const [searchAuthorQuery, setSearchAuthorQuery] = useState('');

  const [sources] = useState([
    { id: 'News Api', name: 'News Api' },
    { id: 'New York Times', name: 'New York Times' },
    { id: 'The Guardian', name: 'The Guardian' },
  ]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get('/category');
        const validCategories = response.data.filter(
          (category) => category.category && category.category.trim() !== ''
        );
        setCategories(validCategories);
      } catch (err) {
        setCategoryError('Failed to load categories');
      } finally {
        setCategoryLoading(false);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await api.get('/authors');
        setAuthors(response.data);
      } catch (err) {
        setAuthorError('Failed to load authors');
      } finally {
        setAuthorLoading(false);
      }
    };

    fetchAuthors();
  }, []);

  const filteredCategories = categories.filter((category) =>
    category.category.toLowerCase().includes(searchCategoryQuery.toLowerCase())
  );

  const filteredAuthors = authors.filter((author) =>
    author.author && author.author.toLowerCase().includes(searchAuthorQuery.toLowerCase())
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const preferencesData = {
      categories: preferences.categories,
      authors: preferences.authors,
      sources: preferences.sources,
    };

    try {
      const response = await api.post('/update', preferencesData);
      toast.success('Preferences saved successfully!'); 
    } catch (error) {
      toast.error('Failed to save preferences. Please try again.'); 
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 p-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Categories</h3>
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search categories..."
            value={searchCategoryQuery}
            onChange={(e) => setSearchCategoryQuery(e.target.value)}
            className="w-full pl-3 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
          />
        </div>

        {categoryLoading && <p>Loading categories...</p>}
        {categoryError && <p className="text-red-500">{categoryError}</p>}

        {!categoryLoading && !categoryError && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {filteredCategories.map((category, index) => (
              <label key={index} className="relative flex items-center justify-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <input
                  type="checkbox"
                  className="absolute h-4 w-4 top-3 right-3 text-red-500 focus:ring-red-500 border-gray-300 rounded"
                  checked={preferences?.categories?.includes(category.category)} 
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    updateCategories((prev) =>
                      isChecked
                        ? [...prev, category.category]
                        : prev.filter((id) => id !== category.category)
                    );
                  }}
                />
                <span className="text-sm font-medium text-gray-900">{category.category}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Favorite Authors</h3>
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search authors..."
            value={searchAuthorQuery}
            onChange={(e) => setSearchAuthorQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
          />
        </div>

        {authorLoading && <p>Loading authors...</p>}
        {authorError && <p className="text-red-500">{authorError}</p>}

        {!authorLoading && !authorError && (
          <div className="space-y-3">
            {filteredAuthors.map((author, index) => (
              <label key={index} className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-red-500 focus:ring-red-500 border-gray-300 rounded"
                  checked={preferences?.authors?.includes(author.author)}  
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    updateAuthors((prev) =>
                      isChecked
                        ? [...prev, author.author]
                        : prev.filter((id) => id !== author.author)
                    );
                  }}
                />
                <div className="ml-3">
                  <div className="text-sm font-medium text-gray-900">{author.author}</div>
                </div>
              </label>
            ))}
          </div>
        )}
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">News Sources</h3>
        <div className="space-y-3">
          {sources.map((source) => (
            <label key={source.id} className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-red-500 focus:ring-red-500 border-gray-300 rounded"
                checked={preferences?.sources?.includes(source.id)} 
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  updateSources((prev) =>
                    isChecked
                      ? [...prev, source.id]
                      : prev.filter((id) => id !== source.id)
                  );
                }}
              />
              <span className="ml-3 text-sm text-gray-900">{source.name}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-6 py-2.5 bg-red-500 text-white rounded-lg hover:bg-red-600 
            focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {isSubmitting ? 'Saving...' : 'Save Preferences'}
        </button>
      </div>
    </form>
  );
}
